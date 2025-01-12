import mongoose, { Schema, Document, ObjectId } from 'mongoose';

interface IProject extends Document {
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
  user: ObjectId;
}

type ProjectDocument = IProject ;

// Schema Definition
const projectSchema: Schema<ProjectDocument> = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please enter the title'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Please enter the description'],
      trim: true,
    },
    techStack: {
      type: String,
      required: [true, 'Please enter the tech stack'],
      trim: true,
    },
    visibility: {
      type: Boolean,
      default: false,
      required: [true, 'Please specify the visibility'],
    },
    feature: {
      type: [String],
      required: [true, 'Please specify the features'],
      trim: true,
    },
    isDeployed: {
      type: Boolean,
      default: false,
      required: [true, 'Please specify if the project is deployed'],
    },
    deployedLink: {
      type: String,
      trim: true,
    },
    githubLink: {
      type: String,
      required: [true, 'Please provide the GitHub link'],
      trim: true,
    },
    image: {
      type: String,
      required: [true, 'Please provide the image link'],
      trim: true,
    },
    videolink: {
      type: String,
      trim: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true, 
    },
  },
  { timestamps: true }
);

// Create Model
const Project = mongoose.models.Project || mongoose.model<ProjectDocument>('Project', projectSchema);

export default Project;
