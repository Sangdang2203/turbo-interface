import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
	req: NextRequest,
	{ params }: { params: { login: string } }
) {
	try {
		const id = params.login;

		const res = await fetch(
			process.env.NEXT_PUBLIC_API_URL + `/admin/users/${id}`,
			{
				method: req.method,
				headers: req.headers,
				cache: "no-cache",
			}
		);

		if (res.ok) {
			return NextResponse.json({
				ok: true,
				status: "success",
				message: "Xóa thành công.",
			});
		}

		return NextResponse.json({
			ok: false,
			status: "Error",
			message: "Xóa thất bại ! User đang được sử dụng.",
		});
	} catch (error) {
		console.log(error);
		return NextResponse.json({
			ok: false,
			status: "Server error",
			message: "Oops ! Something went wrong while trying delete user.",
		});
	}
}

export async function PUT(
	request: Request,
	{ params }: { params: { login: string } }
) {
	const updatedUser = await request.json();
	try {
		const response = await fetch(
			process.env.NEXT_PUBLIC_API_URL + "/admin/users" + params.login,
			{
				method: request.method,
				headers: request.headers,
				body: JSON.stringify(updatedUser),
			}
		);

		let data = null;

		if (response.ok) {
			data = await response.json();
		}

		if (response.ok) {
			return NextResponse.json({
				ok: true,
				status: "Success",
				message: "Cập nhật thành công.",
				data,
			});
		}

		return NextResponse.json({
			ok: true,
			status: "Error",
			message: "Cập nhật thất bại.",
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
