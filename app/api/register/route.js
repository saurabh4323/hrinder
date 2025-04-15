import { NextResponse } from "next/server";
import HrinderUser from "@/scheama/Hrinderuser";
import connectDb from "@/config/ConnectDb";
// import bcrypt from "bcrypt";

export async function POST(req) {
  await connectDb();
  const body = await req.json(); // Parse the request body
  const { name, email, phone, password } = body;

  try {
    const user = await HrinderUser.create({ name, email, phone, password });
    console.log("Saved User:", user); // Log saved user data

    if (!user) {
      return NextResponse.json(
        { message: "User not created" },
        { status: 400 }
      );
    }

    // Manually include all fields, including 'phone'
    return NextResponse.json(
      {
        message: "User created successfully",
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
          phone: user.phone, // Include 'phone' explicitly
          password: user.password,
          __v: user.__v,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
