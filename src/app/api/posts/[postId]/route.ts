import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/authOptions";
import { getServerSession } from "next-auth/next";
import { environmentType } from "@/environment";

export async function GET(
	req: NextRequest,
	{ params }: { params: { postId: string } }
) {
	try {
		const id = params.postId;
		const res = await fetch((environmentType === "development" ? process.env.NEXT_PUBLIC_API_URL : process.env.NEXT_API_URL) + `/posts/${id}`, {
			method: "GET",
			cache: "no-cache",
		});

		let data = null;

		if (res.ok) {
			data = await res.json();

			return NextResponse.json({
				ok: true,
				status: "success",
				message: "Get post successfully",
				data,
			});
		}

		return NextResponse.json({
			ok: false,
			status: "Error",
			message: "Failed to get post",
		});
	} catch (error) {
		console.log(error);
		return NextResponse.json({
			ok: false,
			status: "Server Error",
			message: "Oops ! Something went wrong while trying get post.",
		});
	}
}

export async function PUT(
	req: NextRequest,
	{ params }: { params: { postId: string } }
) {
	const id = params.postId;

	const session = await getServerSession(authOptions);
	const updatePost = await req.json();

	if (!session) {
		return NextResponse.json({
			ok: false,
			status: "Error",
			message: "Cập nhật thất bại.",
		});
	}

	try {
		const response = await fetch(
			(environmentType === "development" ? process.env.NEXT_PUBLIC_API_URL : process.env.NEXT_API_URL) + `/posts/${id} `,
			{
				method: req.method,
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${session.user.id_token}`,
				},
				body: JSON.stringify(updatePost),
			}
		);

		console.log("Respone: ", response);

		let data = null;

		if (response.ok) {
			data = await response.json();
			return NextResponse.json({
				ok: true,
				status: "Success",
				message: "Cập nhật thành công.",
				data,
			});
		}
	} catch (error) {
		console.log(error);
		return NextResponse.json({
			ok: false,
			status: "Server Error",
			message: "Oops ! Something went wrong while trying update post.",
		});
	}
	return NextResponse.json({ message: "Server Error" }, { status: 500 });
}

export async function DELETE(
	req: NextRequest,
	{ params }: { params: { postId: string } }
) {
	const id = params.postId;
	const session = await getServerSession(authOptions);

	if (!session) {
		return NextResponse.json({
			ok: false,
			status: "Error",
			message: "Xóa bài viết thất bại !",
		});
	}

	try {
		const res = await fetch((environmentType === "development" ? process.env.NEXT_PUBLIC_API_URL : process.env.NEXT_API_URL) + `/posts/${id}`, {
			method: req.method,
			headers: {
				Authorization: `Bearer ${session.user.id_token}`,
			},
			cache: "no-cache",
		});

		if (res.ok) {
			return NextResponse.json({
				ok: true,
				status: "success",
				message: "Xóa bài viết thành công.",
			});
		}
	} catch (error) {
		console.log(error);
		return NextResponse.json({
			ok: false,
			status: "Server error",
			message: "Oops ! Something went wrong while trying delete post.",
		});
	}
}
