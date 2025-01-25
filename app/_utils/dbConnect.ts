import mongoose from "mongoose";

const connectDB = async () => {
  if (mongoose.connections[0].readyState) {
    console.log("Database is already connected");
    return; // Return early if already connected
  }

  const DDB = process.env.DATABASE;
  if (!DDB) {
    console.error("DATABASE environment variable is missing.");
    throw new Error("DATABASE connection string is missing");
  }

  try {
    // Attempt to connect to MongoDB (without deprecated options)
    await mongoose.connect(DDB, { dbName: "portfolio" });
    console.log("MongoDB connected successfully.");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw new Error("Failed to connect to MongoDB");
  }
};

export default connectDB;
