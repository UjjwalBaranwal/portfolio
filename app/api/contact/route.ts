import { NextResponse } from "next/server";
import ContactUs from "@/app/_models/contactusModel";


// export async function GET(req: Request) {
//     try {
       
    
//         const contacts = await ContactUs.find({ user: userId });

     
//         if (contacts.length === 0) {
//             return NextResponse.json(
//                 { message: "No contact entries found for this user" },
//                 { status: 404 }
//             );
//         }

//         return NextResponse.json({contacts}, { status: 200 });
//     } catch (error) {
//         console.error(error);
//         return NextResponse.json(
//             { message: "An error occurred while fetching contacts" },
//             { status: 500 }
//         );
//     }
// }

