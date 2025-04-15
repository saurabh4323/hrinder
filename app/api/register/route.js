import { NextResponse } from "next/server";
import HrinderUser from "@/scheama/Hrinderuser";
import connectDb from "@/config/ConnectDb";
// import bcrypt from "bcrypt";
export async function POST(req) {
  await connectDb();
  try {
    const body = await req.json();
    const { name, email, phone, password } = body;

    // Ensure all required fields are present
    if (!name || !email || !phone || !password) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    // Save user to the database
    const user = await HrinderUser.create({ name, email, phone, password });
    console.log("Saved User:", user);

    // Return success response
    return NextResponse.json(
      { message: "User created successfully", user },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { message: "Failed to create user", error: error.message },
      { status: 500 }
    );
  }
}
