import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/authOptions";
import { getServerSession } from "next-auth/next";

export async function GET(req: NextRequest) {
	const session = await getServerSession(authOptions);

	if (!session) {
		return NextResponse.json({
			ok: false,
			status: "Error",
			message: "Failed to get users.",
		});
	}

	try {
		const response = await fetch(
			process.env.NEXT_PUBLIC_API_URL + "/admin/users",
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
				message: "Get users successfully.",
				data,
			});
		}
	} catch (error) {
		console.log(error);
		return NextResponse.json({
			ok: false,
			status: "Server Error",
			message: "Opps! Something went wrong while trying to get users.",
		});
	}
}

export async function POST(req: NextRequest) {
	const user = await req.json();
	const session = await getServerSession(authOptions);
	if (!session) {
		return NextResponse.json({
			ok: false,
			status: "Error",
			message: "Tạo mới thất bại.",
		});
	}

	try {
		const response = await fetch(
			process.env.NEXT_PUBLIC_API_URL + "/admin/users",
			{
				method: req.method,
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${session.user.id_token}`,
				},
				body: JSON.stringify(user),
			}
		);

		let data = null;

		if (response.ok) {
			data = await response.json();
			return NextResponse.json({
				ok: true,
				status: "Success",
				message: "Tạo mới thành công.",
				data,
			});
		}
	} catch (error) {
		console.log(error);
		return NextResponse.json({
			ok: false,
			status: "Server Error",
			message: "Opps! Something went wrong while trying to add new user.",
		});
	}
}
