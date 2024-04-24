import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
	try {
		const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/posts", {
			method: req.method,
			headers: req.headers,
			cache: "no-cache",
		});

		let data = null;

		if (response.ok) {
			data = await response.json();
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

export async function POST(req: NextRequest, token: string) {
	const newPost = await req.json();
	newPost.status = "ACTIVE";
	try {
		const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/posts", {
			method: req.method,
			headers: {
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify(newPost),
		});

		let data = null;

		console.log(response);

		if (response.ok) {
			data = await response.json();
			return NextResponse.json({
				ok: true,
				status: "Success",
				message: "Add new post successfully.",
				data,
			});
		}

		return NextResponse.json({
			ok: false,
			status: "Error",
			message: "Failed to add post.",
		});
	} catch (error) {
		console.log(error);
		return NextResponse.json({
			ok: false,
			status: "Server Error",
			message: "Opps! Something went wrong while trying to add new post.",
		});
	}
}
