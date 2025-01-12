import ContactUs from "@/app/_models/contactusModel";
import { NextResponse } from "next/server";

// Define the types for the request body in POST
interface IContactRequest {
    email: string;
    subject: string;
    description: string;
    userId: string;
}

// all contacts made by a user
export async function GET(req: Request,{params}:{params:{userId:string}}) {
    try {
        
        const {userId}=params;
        
        if (!userId) {
            return NextResponse.json(
                { message: "Invalid or missing user ID" },
                { status: 400 }
            );
        }

        // Fetch contacts from the database by userId
        const contacts = await ContactUs.find({ user: userId });

     
        if (contacts.length === 0) {
            return NextResponse.json(
                { message: "No contact entries found for this user" },
                { status: 404 }
            );
        }

     
        return NextResponse.json({ message:"Fetched contacts successfully",contacts }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: "An error occurred while fetching contacts" },
            { status: 500 }
        );
    }
}

// POST function to create a new contact entry
export async function POST(req: Request) {
    try {
       
        const { email, subject, description, userId }: IContactRequest = await req.json();

    
        if (!email || !subject || !description || !userId) {
            return NextResponse.json({ message: "Please fill all the fields" }, { status: 400 });
        }

       
        const contact = new ContactUs({
            email,
            subject,
            description,
            user: userId,
        });
        await contact.save();

        return NextResponse.json({message:"Contact created successfully", contact }, { status: 201 });

    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "An error occurred while saving the contact" }, { status: 500 });
    }
}
