import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to connect to MongoDB");
  }
};

export default connectDb;
