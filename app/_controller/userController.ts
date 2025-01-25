// import User, { IUser } from "@/app/_models/userModel";
// import AppError from "@/app/_utils/appError";
// import cloudinary from "@/app/_utils/cloudinaryConfig";
// import cookie from "cookie";
// import jwt from "jsonwebtoken";
// import bcryptjs from "bcryptjs";
// import { NextApiResponse } from "next";
// // import catchAsync from "../_utils/catchAsync";
// export const signToken = (id: string) => {
//   return jwt.sign({ id }, process.env.JWT_SECRET as string, {
//     expiresIn: process.env.JWT_EXPIRES as string,
//   });
// };

// export const createAndSentToken = (
//   user: IUser,
//   statusCode: number,
//   res: NextApiResponse
// ) => {
//   const token = signToken(user._id.toString());
//   const cookieOptions = {
//     expires: new Date(
//       Date.now() +
//         parseInt(process.env.JWT_COOKIE_EXPIRES as string) * 24860 * 60 * 1000
//     ),
//   };
//   res.setHeader("Set-Cookie", cookie.serialize("jwt", token, cookieOptions));
//   res.status(statusCode).json({
//     status: "success",
//     token,
//     data: {
//       user,
//     },
//   });
// };

// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// export const signUp = async (body: any) => {
//   const {
//     name,
//     email,
//     password,
//     resume,
//     image,
//     description,
//     phoneNumber,
//     education,
//     certificates,
//     techStack,
//     experience,
//   } = body;

//   // Validate required fields
//   if (!name || !email || !password) {
//     throw new AppError("Name, email, and password are required", 400);
//   }

//   // Hash the password
//   const hashedPassword = await bcryptjs.hash(password, 12);

//   // Upload files to Cloudinary
//   let resumeUrl = "";
//   let imageUrl = "";

//   // if (resume) {
//   //   try {
//   //     const uploadedResume = await cloudinary.v2.uploader.upload(resume, {
//   //       folder: "user_resumes",
//   //     });
//   //     resumeUrl = uploadedResume.secure_url;
//   //   } catch (error) {
//   //     console.error("Error uploading resume: ", error);
//   //     throw new AppError("Error uploading resume to Cloudinary", 500);
//   //   }
//   // }

//   // if (image) {
//   //   try {
//   //     const uploadedImage = await cloudinary.v2.uploader.upload(image, {
//   //       folder: "user_images",
//   //     });
//   //     imageUrl = uploadedImage.secure_url;
//   //   } catch (error) {
//   //     console.error("Error uploading image: ", error);
//   //     throw new AppError("Error uploading image to Cloudinary", 500);
//   //   }
//   // }

//   // Check if resume is provided
//   if (resume) {
//     // Convert file to buffer for Cloudinary upload
//     const resumeBuffer = Buffer.from(await resume.arrayBuffer());

//     // Upload the resume file to Cloudinary
//     const uploadedResume = await cloudinary.v2.uploader.upload(resumeBuffer, {
//       folder: "user_resumes",
//       resource_type: "auto", // Automatically detects file type
//     });

//     resumeUrl = uploadedResume.secure_url; // Get the URL of the uploaded file
//     console.log("Resume uploaded successfully:", resumeUrl);
//   }

//   // Similarly handle the image upload
//   if (image) {
//     const imageBuffer = Buffer.from(await image.arrayBuffer());

//     const uploadedImage = await cloudinary.v2.uploader.upload(imageBuffer, {
//       folder: "user_images",
//       resource_type: "auto",
//     });

//     imageUrl = uploadedImage.secure_url;
//     console.log("Image uploaded successfully:", imageUrl);
//   }

//   // Save the user to the database
//   const newUser = await User.create({
//     name,
//     email,
//     password: hashedPassword,
//     resume: resumeUrl,
//     image: imageUrl,
//     description,
//     phoneNumber,
//     education,
//     certificates,
//     techStack,
//     experience,
//   });

//   // Return the created user (excluding password)
//   // const { password: _, ...userWithoutPassword } = newUser.toObject();

//   return {
//     status: "success",
//     data: {
//       newUser,
//     },
//   };
// };

import User, { IUser } from "@/app/_models/userModel";
import AppError from "@/app/_utils/appError";
import cloudinary from "@/app/_utils/cloudinaryConfig";
import bcryptjs from "bcryptjs";
import { NextApiResponse } from "next";
import streamifier from "streamifier"; // For handling file buffer streaming
import jwt from "jsonwebtoken";

export const signToken = (id: string) => {
  return jwt.sign({ id }, process.env.JWT_SECRET as string, {
    expiresIn: process.env.JWT_EXPIRES as string,
  });
};

export const createAndSentToken = (
  user: IUser,
  statusCode: number,
  res: NextApiResponse
) => {
  const token = signToken(user._id.toString());
  const cookieOptions = {
    expires: new Date(
      Date.now() +
        parseInt(process.env.JWT_COOKIE_EXPIRES as string) * 24860 * 60 * 1000
    ),
  };
  res.setHeader("Set-Cookie", cookie.serialize("jwt", token, cookieOptions));
  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
};

export const signUp = async (body: any) => {
  const {
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
  } = body;

  // Validate required fields
  if (!name || !email || !password) {
    throw new AppError("Name, email, and password are required", 400);
  }

  // Hash the password
  const hashedPassword = await bcryptjs.hash(password, 12);

  // Initialize URLs for resume and image
  let resumeUrl = "";
  let imageUrl = "";

  // Check if resume is provided
  if (resume) {
    try {
      const resumeBuffer = Buffer.from(await resume.arrayBuffer());

      // Upload the resume file to Cloudinary using upload_stream
      const uploadStream = cloudinary.v2.uploader.upload_stream(
        {
          folder: "user_resumes",
          resource_type: "auto", // Automatically detects file type
        },
        (error, result) => {
          if (error) {
            console.error("Error uploading resume: ", error);
            throw new AppError("Error uploading resume to Cloudinary", 500);
          } else {
            resumeUrl = result?.secure_url;
            console.log("Resume uploaded successfully:", resumeUrl);
          }
        }
      );
      streamifier.createReadStream(resumeBuffer).pipe(uploadStream);
    } catch (error) {
      console.error("Error uploading resume: ", error);
      throw new AppError("Error uploading resume to Cloudinary", 500);
    }
  }

  // Similarly handle the image upload
  if (image) {
    try {
      const imageBuffer = Buffer.from(await image.arrayBuffer());

      const uploadStream = cloudinary.v2.uploader.upload_stream(
        {
          folder: "user_images",
          resource_type: "auto", // Automatically detects file type
        },
        (error, result) => {
          if (error) {
            console.error("Error uploading image: ", error);
            throw new AppError("Error uploading image to Cloudinary", 500);
          } else {
            imageUrl = result?.secure_url;
            console.log("Image uploaded successfully:", imageUrl);
          }
        }
      );
      streamifier.createReadStream(imageBuffer).pipe(uploadStream);
    } catch (error) {
      console.error("Error uploading image: ", error);
      throw new AppError("Error uploading image to Cloudinary", 500);
    }
  }

  // Save the user to the database
  const newUser = await User.create({
    name,
    email,
    password: hashedPassword,
    resume: resumeUrl,
    image: imageUrl,
    description,
    phoneNumber,
    education,
    certificates,
    techStack,
    experience,
  });

  // Return the created user (excluding password)
  return {
    status: "success",
    data: {
      newUser,
    },
  };
};
