import { NextResponse } from "next/server";

export async function GET() {
	try {
		const response = await fetch(
			process.env.NEXT_PUBLIC_API_URL + "/authorities",
			{
				method: "GET",
				cache: "no-cache",
			}
		);

		const data = response.json();
		console.log("roles", data);

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
