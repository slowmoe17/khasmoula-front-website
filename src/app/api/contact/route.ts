import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  try {
    await axios.post(`${process.env.BASE_URL}/contact`, {
      name,
      email,
      message,
    });

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 201 }
    );
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status || 500;
      const message = error.response?.data?.message || "Failed to send message";

      return NextResponse.json({ message }, { status });
    }

    return NextResponse.json(
      { message: "Unexpected error occurred" },
      { status: 500 }
    );
  }
}
