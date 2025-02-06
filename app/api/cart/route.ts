/* eslint-disable @typescript-eslint/no-unused-vars */
import {NextResponse, NextRequest} from "next/server";
import {cookies} from "next/headers";

const apiUrl = "https://everythingmeat-server.onrender.com/api/";

export async function GET() {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken")?.value;

    try {
        const response = await fetch(apiUrl + "v1/cart/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
            },
        });

        if (!response.ok) {
            return NextResponse.json({error: "Failed to fetch data"}, {status: response.status});
        }

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({error: "Something went wrong"}, {status: 500});
    }
}

export async function POST(req: NextRequest) {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken")?.value;

    try {
        const response = await fetch(apiUrl + "v1/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify(await req.json()),
        });

        if (!response.ok) {
            return NextResponse.json({error: "Failed to create data"}, {status: response.status});
        }

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({error: "Something went wrong"}, {status: 500});
    }
}

export async function PATCH(req: NextRequest) {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken")?.value;

    try {
        const response = await fetch(apiUrl + "v1/update", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify(await req.json()),
        });

        if (!response.ok) {
            return NextResponse.json({error: "Failed to update data"}, {status: response.status});
        }

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({error: "Something went wrong"}, {status: 500});
    }
}

export async function DELETE(req: NextRequest) {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken")?.value;

    try {
        const response = await fetch(apiUrl + "v1/delete", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify(await req.json()),
        });

        if (!response.ok) {
            return NextResponse.json({error: "Failed to delete data"}, {status: response.status});
        }

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({error: "Something went wrong"}, {status: 500});
    }
}
