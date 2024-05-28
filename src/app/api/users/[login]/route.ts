import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/authOptions";
import { getServerSession } from "next-auth/next";

export async function DELETE(
	req: NextRequest,
	{ params }: { params: { login: string } }
) {
	const id = params.login;
	const session = await getServerSession(authOptions);

	if (!session) {
		return NextResponse.json({
			ok: false,
			status: "Error",
			message: "Xóa thất bại ! User đang được sử dụng.",
		});
	}

	try {
		const res = await fetch(
			process.env.NEXT_PUBLIC_API_URL + `/admin/users/${id}`,
			{
				method: req.method,
				headers: {
					Authorization: `Bearer ${session.user.id_token}`,
				},
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
	const id = params.login;
	const updatedUser = await request.json();
	const session = await getServerSession(authOptions);

	if (!session) {
		return NextResponse.json({
			ok: true,
			status: "Error",
			message: "Cập nhật thất bại.",
		});
	}

	try {
		const response = await fetch(
			process.env.NEXT_PUBLIC_API_URL + "/admin/users" + id,
			{
				method: request.method,
				headers: request.headers,
				body: JSON.stringify(updatedUser),
			}
		);

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
			ok: true,
			status: "Server Error",
			message: "Opps! Something went wrong while trying to update.",
		});
	}
}
