import { NextResponse } from "next/server";
import Project from "@/app/_models/projectModel";

interface IProject{
  title: string;
  description: string;
  techStack: string;
  visibility?: boolean; 
  feature: string[];
  isDeployed?: boolean;
  deployedLink?: string; 
  githubLink: string;
  image: string;
  videolink?: string; 
  user: string;
}

// get-all-projects
export async function GET(req:Request)
{
    try {
        // await connectDb(); 

        const url=new URL(req.url!);
        const userId=url.searchParams.get("userId");

        if(!userId)
        {
            return NextResponse.json({message:"Invalid or missing user ID"},{status:400});
        }

        const projects=await Project.find({user:userId});

        if(projects.length===0)
        {
            return NextResponse.json({message:"No project entries found for this user"},{status:404});
        }

        return NextResponse.json({projects},{status:200});
        
    } catch (error) {
        return NextResponse.json({message:"An error occurred while fetching projects"},{status:500});
    }
}

// create-project

export async function POST(req:Request)
{
    try {
        // await connectDb(); 

        const {title,description,techStack,visibility,isDeployed,githubLink,image,videolink,user,feature}:IProject=await req.json();

        if(!title || !description || !user || !techStack || !githubLink || !image || !feature)
        {
            return NextResponse.json({message:"Please fill all the fields"},{status:400});
        }
        
        // image upload logic 

        // video upload logic 


        const project=new Project({
            title,
            description,
            user:user,
            techStack,
            visibility,
            feature,
            isDeployed,
            githubLink,
            image,
            videolink
        });

        await project.save();

        return NextResponse.json({message:"Project created successfully",project},{status:201});
        
    } catch (error) {
        return NextResponse.json({message:"An error occurred while creating project"},{status:500});
    }
}

