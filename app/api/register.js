import { NextResponse } from "next/server";
import HrinderUser from "@/scheama/Hrinderuser";
import connectDb from "@/config/ConnectDb";

export async function POST(req) {
  await connectDb();
  const { name, email, password, phone } = req.body;

  const user = await HrinderUser.create({ name, email, password, phone });
  if (!user) {
    return NextResponse.json({ message: "User not created" }, { status: 400 });
  }
  return NextResponse.json(
    { message: "User created successfully" },
    { status: 201 }
  );
}
