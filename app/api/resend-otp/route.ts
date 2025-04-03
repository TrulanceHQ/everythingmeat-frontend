import { NextRequest, NextResponse } from "next/server";

const apiUrl = "https://everythingmeat-server.onrender.com/api/";

export async function POST(req: NextRequest) {
  const userEmail = await req.json();

  try {
    const response = await fetch(apiUrl + "v1/resend-verification-code", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ emailAddress: userEmail }),
    });

    const data = await response.json();

    if (response.status === 201) {
      return NextResponse.json(
        { message: data.message || "OTP resent successfully" },
        { status: 201 }
      );
    } else if (response.status === 409) {
      return NextResponse.json({ message: data.message }, { status: 409 });
    } else if (response.status === 400) {
      return NextResponse.json(
        { message: data.message || "User not found" },
        { status: 400 }
      );
    } else {
      return NextResponse.json(
        { message: data.message || "Error resending OTP" },
        { status: response.status }
      );
    }
  } catch (error) {
    const errorMessage = (error as Error).message || "Error resending OTP";
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}
