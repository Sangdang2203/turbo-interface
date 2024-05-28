import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/authOptions";
import { getServerSession } from "next-auth/next";

export async function GET(req: NextRequest) {
	const session = await getServerSession(authOptions);

	if (!session) {
		return NextResponse.json({
			ok: false,
			status: "Error",
			message: "Failed to get all categories.",
		});
	}

	try {
		const response = await fetch(
			process.env.NEXT_PUBLIC_API_URL + "/categories",
			{
				method: req.method,
				headers: {
					Authorization: `Bearer ${session.user.id_token}`,
				},
				cache: "no-cache",
			}
		);

		let data = null;

		if (response.ok) {
			data = await response.json();
			return NextResponse.json({
				ok: true,
				status: "Success",
				message: "Get all categories successfully.",
				data,
			});
		}

		return NextResponse.json({
			ok: false,
			status: "Error",
			message: "Failed to get all categories.",
		});
	} catch (error) {
		return NextResponse.json({
			ok: false,
			status: "Server Error",
			message:
				"Opps ! Something went wrong while trying to get all categories.",
		});
	}
}

export async function POST(request: NextRequest) {
	const category = await request.json();
	const session = await getServerSession(authOptions);

	if (!session) {
		return NextResponse.json({
			ok: false,
			status: "Error",
			message: "Thao tác tạo mới thất bại.",
		});
	}

	try {
		const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/categories", {
			method: request.method,
			headers: {
				Authorization: `Bearer ${session.user.id_token}`,
				"Content-Type": "application/json",
			},
			body: JSON.stringify(category),
		});

		let data = null;

		if (res.ok) {
			return NextResponse.json({
				ok: true,
				status: "Success",
				message: "Tạo mới thành công.",
				data,
			});
		}

		return NextResponse.json({
			ok: false,
			status: "Error",
			message: "Thao tác tạo mới thất bại.",
		});
	} catch (error) {
		return NextResponse.json({
			ok: false,
			status: "Server Error",
			message:
				"Opps ! Something went wrong while trying to create new category.",
		});
	}
}
