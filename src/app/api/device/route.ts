import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { deviceId, email } = await request.json();

  const register = await axios.post(`${process.env.BASE_URL}/device`, {
    deviceId,
    email,
  });

  return NextResponse.json(register.data.message);
}
