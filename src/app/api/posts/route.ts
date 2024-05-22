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

export async function POST(req: NextRequest) {
	const post = await req.json();

	try {
		const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/posts", {
			method: req.method,
			headers: req.headers,
			body: JSON.stringify(post),
		});

		let data = null;

		if (response.ok) {
			data = await response.json();
			return NextResponse.json({
				ok: true,
				status: "Success",
				message: "Tạo bài viết mới thành công.",
				data,
			});
		}

		return NextResponse.json({
			ok: false,
			status: "Error",
			message: "Tạo bài viết mới thất bại.",
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
