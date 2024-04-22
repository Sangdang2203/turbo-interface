import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
	try {
		const response = await fetch(
			process.env.NEXT_PUBLIC_API_URL + "/authorities",
			{
				headers: req.headers,
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

		return NextResponse.json({
			ok: false,
			status: "Error",
			message: "Failed to get authorities.",
		});
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
	try {
		const response = await fetch(
			process.env.NEXT_PUBLIC_API_URL + "/authorities",
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(newAuth),
			}
		);

		let data = null;

		if (response.ok) {
			data = response.json();
			console.log("Auth :", data);
		}

		if (response.ok) {
			return NextResponse.json({
				ok: true,
				status: "Success",
				message: "Get authorities successfully.",
				data,
			});
		}

		return NextResponse.json({
			ok: false,
			status: "Error",
			message: "Failed to get authorities.",
		});
	} catch (error) {
		return NextResponse.json({
			ok: false,
			status: "Server error",
			message: "Opps! Something went wrong while trying to get authorities.",
		});
	}
}
