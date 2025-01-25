import { NextRequest, NextResponse } from "next/server";

const apiUrl = "https://everythingmeat-server.onrender.com/api/";

export async function POST(req: NextRequest) {
  const newUser = await req.json();

  try {
    const response = await fetch(apiUrl + "v1/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });

    const data = await response.json();

    if (response.status === 201) {
      return NextResponse.json(
        { message: "User created successfully" },
        { status: 201 }
      );
    } else if (response.status === 409) {
      return NextResponse.json({ message: data }, { status: 409 });
    } else {
      return NextResponse.json(
        { message: data.message || "Account creation failed" },
        { status: response.status }
      );
    }
  } catch (error) {
    const errorMessage = (error as Error).message || "Error creating account";
    return NextResponse.json(
      { message: errorMessage },
      { status: 500 }
    );
  }
}