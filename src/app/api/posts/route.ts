import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/authOptions";
import { getServerSession } from "next-auth/next";

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
	const session = await getServerSession(authOptions);

	if (!session) {
		return NextResponse.json({
			ok: false,
			status: "Error",
			message: "Tạo bài viết mới thất bại.",
		});
	}

	try {
		const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/posts", {
			method: req.method,
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${session.user.id_token}`,
			},
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
	} catch (error) {
		console.log(error);
		return NextResponse.json({
			ok: false,
			status: "Server Error",
			message: "Opps! Something went wrong while trying to add new post.",
		});
	}
}
