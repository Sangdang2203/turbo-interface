import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
	try {
		const response = await fetch(
			process.env.NEXT_PUBLIC_API_URL + "/categories",
			{
				method: req.method,
				headers: req.headers,
				cache: "no-cache",
			}
		);

		let data = null;

		if (response.ok) {
			data = await response.json();
			return NextResponse.json({
				ok: true,
				status: "Success",
				message: "Get all categories successfully.",
				data,
			});
		}

		return NextResponse.json({
			ok: false,
			status: "Error",
			message: "Failed to get all categories.",
		});
	} catch (error) {
		return NextResponse.json({
			ok: false,
			status: "Server Error",
			message:
				"Opps ! Something went wrong while trying to get all categories.",
		});
	}
}

export async function POST(request: Request) {
	const category = await request.json();
	try {
		const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/categories", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(category),
		});

		let data = null;

		if (res.ok) {
			return NextResponse.json({
				ok: true,
				status: "Success",
				message: "Get all categories successfully.",
				data,
			});
		}

		return NextResponse.json({
			ok: false,
			status: "Error",
			message: "Failed to get all categories.",
		});
	} catch (error) {
		return NextResponse.json({
			ok: false,
			status: "Server Error",
			message:
				"Opps ! Something went wrong while trying to get all categories.",
		});
	}
}
