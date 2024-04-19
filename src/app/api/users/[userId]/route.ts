import { NextResponse } from "next/server";

export async function DELETE(
	req: Request,
	{ params }: { params: { userId: string } }
) {
	try {
		const response = await fetch(
			process.env.NEXT_PUBLIC_API_URL + "/admin/users" + params.userId,
			{
				method: "DELETE",
				cache: "no-cache",
			}
		);

		if (response.ok) {
			return NextResponse.json({
				ok: true,
				status: "Success",
				message: "Thực hiện xóa thành công",
			});
		}

		return NextResponse.json({
			ok: true,
			status: "Error",
			message: "Thực hiện xóa thất bại",
		});
	} catch (error) {
		console.log(error);
		return NextResponse.json({
			ok: true,
			status: "Server Error",
			message: "Opps! Something went wrong while trying to remove.",
		});
	}
}

export async function PUT(
	request: Request,
	{ params }: { params: { userId: string } }
) {
	const updatedUser = await request.json();
	try {
		const response = await fetch(
			process.env.NEXT_PUBLIC_API_URL + "/admin/users" + params.userId,
			{
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(updatedUser),
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
				message: "Thực hiện cập nhật thành công",
				data,
			});
		}

		return NextResponse.json({
			ok: true,
			status: "Error",
			message: "Thực hiện cập nhật thất bại",
		});
	} catch (error) {
		console.log(error);
		return NextResponse.json({
			ok: true,
			status: "Server Error",
			message: "Opps! Something went wrong while trying to update.",
		});
	}
}
