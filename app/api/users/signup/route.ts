// import { signUp } from "@/app/_controller/userController";
// import connectDB from "@/app/_utils/dbConnect";
// import { NextResponse } from "next/server";

// // Ensure the POST method is exported directly
// export async function POST(req: Request) {
//   await connectDB();

//   try {
//     const body = await req.json(); // Parse JSON body from the request
//     const result = await signUp(body); // Call your controller function
//     return NextResponse.json(result, { status: 200 });
//   } catch (error) {
//     console.error("Error in POST /api/users/signup:", error);
//     return NextResponse.json(
//       { message: "Internal Server Error" },
//       { status: 500 }
//     );
//   }
// }

import { NextRequest, NextResponse } from "next/server";
// import signUp from "path/to/your/signUp/controller";
import { signUp } from "@/app/_controller/userController";

export async function POST(req: NextRequest) {
  try {
    // Use formData to handle multipart form-data
    const formData = await req.formData();
    // log form data
    console.log(formData);

    // Extract fields from the formData
    const name = formData.get("name")?.toString();
    const email = formData.get("email")?.toString();
    const password = formData.get("password")?.toString();
    const resume = formData.get("resume"); // File object
    const image = formData.get("image"); // File object
    const description = formData.get("description")?.toString();
    const phoneNumber = formData.get("phoneNumber")?.toString();
    const education = JSON.parse(formData.get("education")?.toString() || "[]");
    const certificates = JSON.parse(
      formData.get("certificates")?.toString() || "[]"
    );
    const techStack = formData.get("techStack")?.toString()?.split(",") || [];
    const experience = JSON.parse(
      formData.get("experience")?.toString() || "[]"
    );

    // Prepare the user data object
    const userData = {
      name,
      email,
      password,
      resume,
      image,
      description,
      phoneNumber,
      education,
      certificates,
      techStack,
      experience,
    };

    // Call your signUp function with userData
    const result = await signUp(userData);

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error("Error in POST /api/users/signup:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
