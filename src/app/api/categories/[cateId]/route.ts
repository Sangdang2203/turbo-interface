import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/authOptions";
import { getServerSession } from "next-auth/next";

export async function GET(
	req: NextRequest,
	{ params }: { params: { postId: string } }
) {
	const session = await getServerSession(authOptions);
	const id = params.postId;

	if (!session) {
		return NextResponse.json({
			ok: false,
			status: "Error",
			message: "Failed to get post",
		});
	}

	try {
		const res = await fetch(
			process.env.NEXT_PUBLIC_API_URL + `/categories/${id}`,
			{
				method: "GET",
				headers: {
					Authorization: `Bearer ${session.user.id_token}`,
				},
				cache: "no-cache",
			}
		);

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
	} catch (error) {
		console.log(error);
		return NextResponse.json({
			ok: false,
			status: "Server Error",
			message: "Oops ! Something went wrong while trying get post.",
		});
	}
}

export async function PATCH(
	req: NextRequest,
	{ params }: { params: { cateId: string } }
) {
	const id = params.cateId;
	const session = await getServerSession(authOptions);
	const updateCategory = await req.json();

	if (!session) {
		return NextResponse.json({
			ok: false,
			status: "Error",
			message: "Cập nhật thất bại.",
		});
	}

	try {
		const response = await fetch(
			process.env.NEXT_PUBLIC_API_URL + `/categories/${id} `,
			{
				method: req.method,
				headers: {
					Authorization: `Bearer ${session.user.id_token}`,
					"Content-Type": "application/json",
				},
				body: JSON.stringify(updateCategory),
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
			ok: false,
			status: "Server Error",
			message: "Oops ! Something went wrong while trying update.",
		});
	}
}

export async function DELETE(
	req: NextRequest,
	{ params }: { params: { cateId: string } }
) {
	const id = params.cateId;
	const session = await getServerSession(authOptions);

	if (!session) {
		return NextResponse.json({
			ok: false,
			status: "Error",
			message: "Xóa thất bại !",
		});
	}
	try {
		const res = await fetch(
			process.env.NEXT_PUBLIC_API_URL + `/categories/${id}`,
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
			message: "Oops ! Something went wrong while trying delete.",
		});
	}
}
