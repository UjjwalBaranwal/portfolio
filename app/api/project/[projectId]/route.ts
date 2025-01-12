import { NextResponse } from "next/server";
import Project from "@/app/_models/projectModel"


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

// update-project-items
export async function PUT(req:Request,{ params }: { params: { projectId: string } })
{
    try {
        // await connectDb();
        const {projectId}=params;
        const obj:IProject=await req.json();

        const project=await Project.findById(projectId);

        if(!project)
        {
            return NextResponse.json({message:"Project not found"},{status:404});
        }

        
        //check if the object is empty
        if(Object.keys(obj).length===0)
            {
                return NextResponse.json({message:"No fields to update"},{status:400});
            }
    

        if(!obj.user)
        {
            return NextResponse.json({message:"Unauthorized access"},{status:401});
        }

        if(project.user.toString()!==obj.user)
        {
            return NextResponse.json({message:"Unauthorized access"},{status:401});
        }

        // Some checks 
        // if features[] is updated 
        // if image is updated
        // if videolink is updated
        // if deployedLink is updated
        // if visibility is updated
        // if isDeployed is updated
        for(const [key,value] of Object.entries(obj))
        {
            if(key!=undefined)
            project[key]=value;
        }

        await project.save();

        return NextResponse.json({message:"Project updated successfully",updatedProject:project},{status:200});

       
    } catch (error) {
        return NextResponse.json({message:"An error occurred while updating project"},{status:500});
    }
}

// delete-project

export async function DELETE(req:Request,{ params }: { params: { projectId: string } })
{
    try {
        // await connectDb();
        const {projectId}=params;
        const {user}:{user:string}=await req.json();

        const project=await Project.findById(projectId);

        if(!project)
        {
            return NextResponse.json({message:"Project not found"},{status:404});
        }

        if(project.user.toString()!==user)
        {
            return NextResponse.json({message:"Unauthorized access"},{status:401});
        }

        await project.remove();

        return NextResponse.json({message:"Project deleted successfully"},{status:200});

       
    } catch (error) {
        return NextResponse.json({message:"An error occurred while deleting project"},{status:500});
    }
}