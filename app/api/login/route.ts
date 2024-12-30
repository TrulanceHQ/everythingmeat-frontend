import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

const apiUrl = "https://everythingmeat-server.onrender.com/api/";

export async function POST(req: NextRequest) {
  const userCredentials = await req.json();

  try {
    const response = await fetch(apiUrl + "v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userCredentials),
    });

    const data = await response.json();

    if (response.status === 200) {
      (await cookies()).set({
        name: "accessToken",
        value: data.accessToken,
        secure:
          process.env.NODE_ENV !== "development" &&
          process.env.NODE_ENV !== "test",
        httpOnly: true,
        maxAge: 20 * 60, // 20 minutes
        path: "/",
        sameSite: "strict",
      });
      (await cookies()).set({
        name: "role",
        value: data.user.role,
        secure:
          process.env.NODE_ENV !== "development" &&
          process.env.NODE_ENV !== "test",
        httpOnly: true,
        maxAge: 20 * 60, // 20 minutes
        path: "/",
        sameSite: "strict",
      });
      return NextResponse.json({ message: data }, { status: 200 });
    } else if (response.status === 401) {
      return NextResponse.json({ message: data }, { status: 401 });
    } else {
      return NextResponse.json(
        { message: data.message || "Invalid Credentials" },
        { status: response.status }
      );
    }
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An error occurred";
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}
