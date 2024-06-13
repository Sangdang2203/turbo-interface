import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/authOptions";
import { getServerSession } from "next-auth/next";
import { environmentType } from "@/environment";

export async function GET(req: NextRequest) {
	const session = await getServerSession(authOptions);

	if (!session) {
		return NextResponse.json({
			ok: false,
			status: "Error",
			message: "Failed to get authorities.",
		});
	}

	try {
		const response = await fetch(
			(environmentType === "development" ? process.env.NEXT_PUBLIC_API_URL : process.env.NEXT_API_URL) + "/authorities",
			{
				headers: {
					Authorization: `Bearer ${session.user.id_token}`,
				},
				method: req.method,
				cache: "no-cache",
			}
		);

		const data = await response.json();

		if (response.ok) {
			return NextResponse.json({
				ok: true,
				status: "Success",
				message: "Get authorities successfully.",
				data,
			});
		}
	} catch (error) {
		return NextResponse.json({
			ok: false,
			status: "Server error",
			message: "Opps! Something went wrong while trying to get authorities.",
		});
	}
}

export async function POST(request: Request) {
	const newAuth = await request.json();
	const session = await getServerSession(authOptions);
	if (!session) {
		return NextResponse.json({
			ok: false,
			status: "Error",
			message: "Failed to get authorities.",
		});
	}

	try {
		const response = await fetch(
			(environmentType === "development" ? process.env.NEXT_PUBLIC_API_URL : process.env.NEXT_API_URL) + "/authorities",
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${session.user.id_token}`,
				},
				body: JSON.stringify(newAuth),
			}
		);

		let data = null;

		if (response.ok) {
			data = response.json();
			return NextResponse.json({
				ok: true,
				status: "Success",
				message: "Get authorities successfully.",
				data,
			});
		}
	} catch (error) {
		return NextResponse.json({
			ok: false,
			status: "Server error",
			message: "Opps! Something went wrong while trying to get authorities.",
		});
	}
}
