import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
	req: NextRequest,
	{ params }: { params: { cateId: string } }
) {
	const id = params.cateId;

	const updateCategory = await req.json();
	try {
		const response = await fetch(
			process.env.NEXT_PUBLIC_API_URL + `/categories/${id} `,
			{
				method: req.method,
				headers: req.headers,
				body: JSON.stringify(updateCategory),
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
			ok: false,
			status: "Error",
			message: "Cập nhật thất bại.",
		});
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
	try {
		const id = params.cateId;

		const res = await fetch(
			process.env.NEXT_PUBLIC_API_URL + `/categories/${id}`,
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
			message: "Xóa thất bại !",
		});
	} catch (error) {
		console.log(error);
		return NextResponse.json({
			ok: false,
			status: "Server error",
			message: "Oops ! Something went wrong while trying delete.",
		});
	}
}
