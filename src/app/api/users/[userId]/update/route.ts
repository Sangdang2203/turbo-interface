import { NextResponse } from "next/server";

export async function PUT(
	req: Request,
	{ params }: { params: { code: string } }
) {
	const updateReq = await req.json();
	try {
		const response = await fetch(
			process.env.NEXT_PUBLIC_API_URL + "/admin/users" + params.code,
			{
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(updateReq),
			}
		);

		if (response.ok) {
			return NextResponse.json({
				ok: true,
				status: "Success",
				message: "Thao tác cập nhật thành công.",
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
			message: "Thao tác cập nhật thất bại.",
		});
	}
}
