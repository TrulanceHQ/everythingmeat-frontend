import { NextRequest, NextResponse } from "next/server";

const apiUrl = "https://everythingmeat-server.onrender.com/api/";

export async function POST(req: NextRequest) {
  const userVerificationCredentials = await req.json();

  try {
    const response = await fetch(apiUrl + "v1/verify-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userVerificationCredentials),
    });

    const data = await response.json();

    if (response.status === 201) {
      return NextResponse.json(
        { message: data.message || "User verified successfully" },   
        { status: 201 }
      );
    } else if (response.status === 400) {
      return NextResponse.json({ message: data }, { status: 400 });
    } else {
      return NextResponse.json(
        { message: data.message || "User verification failed" },
        { status: response.status }
      );
    }
  } catch (error) {
    const errorMessage = (error as Error).message || "Error verifying user";
    return NextResponse.json(
      { message: errorMessage },
      { status: 500 }
    );
  }
}