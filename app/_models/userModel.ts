import mongoose, { Document, Schema, Model, Types } from "mongoose";
import bcryptjs from "bcryptjs";

// Regular expressions for validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[6-9]\d{9}$/;

// Interface for Education
interface IEducation {
  schoolOrCollege: string;
  durationYear: string;
}

// Interface for Certificates
interface ICertificate {
  image: string;
  certificateLink: string;
}

// Interface for Experience
interface IExperience {
  companyName: string;
  role: string;
  duration: string;
}

// Interface for User Document
export interface IUser extends Document {
  _id: Types.ObjectId;
  name: string;
  email: string;
  password: string;
  resume: string;
  image: string;
  description: string;
  phoneNumber?: number;
  education: IEducation[];
  certificates: ICertificate[];
  techStack: string[];
  experience: IExperience[];
  comparePassword: (candidatePassword: string) => Promise<boolean>;
}

// Schema Definition
const userSchema: Schema<IUser> = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter the name"],
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please enter the email"],
    unique: true,
    trim: true,
    lowercase: true,
    validate: {
      validator: function (value: string) {
        return emailRegex.test(value);
      },
      message: "Please enter a valid email",
    },
  },
  password: {
    type: String,
    required: [true, "Please enter the password"],
    minlength: 8,
    select: false, // Ensures the password is not included in query results by default
  },
  resume: {
    type: String,
    required: [true, "Please provide the resume"],
  },
  image: {
    type: String,
    required: [true, "Please provide the image"],
  },
  description: {
    type: String,
    required: [true, "Please provide a description about yourself"],
  },
  phoneNumber: {
    type: Number,
    validate: {
      validator: function (value: number) {
        return phoneRegex.test(value.toString());
      },
      message: "Please enter a valid 10-digit phone number starting with 6-9",
    },
  },
  education: [
    {
      schoolOrCollege: {
        type: String,
        required: [true, "Please provide the school or college name"],
      },
      durationYear: {
        type: String,
        required: [true, "Please provide the duration year"],
      },
    },
  ],
  certificates: [
    {
      image: {
        type: String,
        required: [true, "Please provide the certificate image"],
      },
      certificateLink: {
        type: String,
        required: [true, "Please provide the certificate link"],
      },
    },
  ],
  techStack: [
    {
      type: String,
      required: [true, "Please provide a technology"],
    },
  ],
  experience: [
    {
      companyName: {
        type: String,
        required: [true, "Please provide the company name"],
      },
      role: {
        type: String,
        required: [true, "Please provide the role"],
      },
      duration: {
        type: String,
        required: [true, "Please provide the duration"],
      },
    },
  ],
});

// Hash password before saving
userSchema.pre("save", async function (next) {
  const user = this as IUser;

  // Only hash the password if it is modified or new
  if (!this.isModified("password")) return next();

  try {
    const saltRounds = parseInt(process.env.SALT || "10", 10);
    const salt = await bcryptjs.genSalt(saltRounds);
    user.password = await bcryptjs.hash(user.password, salt);
    next();
  } catch (err) {
    return next(err as Error);
  }
});

// Method to compare passwords
userSchema.methods.comparePassword = async function (
  candidatePassword: string
): Promise<boolean> {
  const user = this as IUser;
  return await bcryptjs.compare(candidatePassword, user.password);
};

// Model Definition
const User: Model<IUser> =
  mongoose.models.User || mongoose.model<IUser>("User", userSchema);

export default User;
