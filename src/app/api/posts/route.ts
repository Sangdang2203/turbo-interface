import { NextResponse } from "next/server";

export default async function GET() {
	try {
		const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/posts", {
			method: "GET",
			cache: "no-cache",
		});

		let data = null;

		if (response.ok) {
			data = await response.json();
			console.log(data);
		}

		if (response.ok) {
			return NextResponse.json({
				ok: true,
				status: "Success",
				message: "Get posts successfully.",
				data,
			});
		}

		return NextResponse.json({
			ok: false,
			status: "Error",
			message: "Failed to get posts.",
		});
	} catch (error) {
		console.log(error);
		return NextResponse.json({
			ok: false,
			status: "Server Error",
			message: "Opps! Something went wrong while trying to get posts.",
		});
	}
}
