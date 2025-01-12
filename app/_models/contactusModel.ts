import mongoose, { Schema, Document, model } from 'mongoose';

// Define the TypeScript interface for the ContactUs model
interface IContactUs extends Document {
    email: string;
    subject: string;
    description: string;
    user: mongoose.Types.ObjectId;
}

// Define the schema for ContactUs
const contactUsSchema: Schema<IContactUs> = new mongoose.Schema(
    {
        email: {
            type: String,
            required: [true, 'Please enter the email'],
            trim: true,
        },
        subject: {
            type: String,
            required: [true, 'Please enter the subject'],
            trim: true,
        },
        description: {
            type: String,
            required: [true, 'Please enter the description'],
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

// Create the model
const ContactUs = mongoose.models.ContactUs || model<IContactUs>('ContactUs', contactUsSchema);

export default ContactUs;
