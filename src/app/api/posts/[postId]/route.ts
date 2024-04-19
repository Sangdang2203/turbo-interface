import { NextResponse } from "next/server";

export async function PUT(
	request: Request,
	{ params }: { params: { postId: string } }
) {
	const updatePost = request.json();
	try {
		const response = await fetch(
			process.env.NEXT_PUBLIC_API_URL + "/posts" + params.postId,
			{
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
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
