import { NextRequest, NextResponse } from "next/server";

export async function GET(
	req: NextRequest,
	{ params }: { params: { postId: string } }
) {
	try {
		const id = params.postId;
		// console.log(id);
		const res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/posts/${id}`, {
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
	const updatePost = req.json();
	try {
		const response = await fetch(
			process.env.NEXT_PUBLIC_API_URL + "/posts" + params.postId,
			{
				method: req.method,
				headers: req.headers,
				body: JSON.stringify(updatePost),
			}
		);

		let data = null;

		if (response.ok) {
			data = await response.json();
			console.log(data);
		}

		if (response.ok) {
			return NextResponse.json({
				ok: true,
				status: "Success",
				message: "Thao tác cập nhật thành công.",
				data,
			});
		}
		return NextResponse.json({
			ok: false,
			status: "Error",
			message: "Thao tác cập nhật thất bại.",
		});
	} catch (error) {
		console.log(error);
		return NextResponse.json({
			ok: false,
			status: "Server Error",
			message: "Oops ! Something went wrong while trying update post.",
		});
	}
}

export async function DELETE(
	req: NextRequest,
	{ params }: { params: { postId: string } },
	token: string
) {
	try {
		const id = params.postId;
		console.log(id);
		const res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/posts/${id}`, {
			method: req.method,
			headers: req.headers,
			cache: "no-cache",
		});

		let data = null;

		if (res.ok) {
			data = await res.json();

			return NextResponse.json({
				ok: true,
				status: "success",
				message: "Delete post successfully.",
				data,
			});
		}

		return NextResponse.json({
			ok: false,
			status: "Error",
			message: "Failed to delete post !",
		});
	} catch (error) {
		console.log(error);
		return NextResponse.json({
			ok: false,
			status: "Server error",
			message: "Oops ! Something went wrong while trying delete post.",
		});
	}
}
