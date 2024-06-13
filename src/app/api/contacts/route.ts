import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/authOptions";
import { getServerSession } from "next-auth/next";
import { environmentType } from "@/environment";

export async function GET(req: NextRequest) {
	const session = await getServerSession(authOptions);

	if (!session) {
		return NextResponse.json({
			ok: false,
			status: "Error",
			message: "Failed to get contacts.",
		});
	}

	try {
		const response = await fetch(
			(environmentType === "development" ? process.env.NEXT_PUBLIC_API_URL : process.env.NEXT_API_URL) + "/contacts",
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
				message: "Get contacts successfully.",
				data,
			});
		}
	} catch (error) {
		console.log(error);
		return NextResponse.json({
			ok: false,
			status: "Server Error",
			message: "Opps! Something went wrong while trying to get contacts.",
		});
	}
}

export async function POST(req: NextRequest) {
	const contact = await req.json();

	try {
		const response = await fetch(
			(environmentType === "development" ? process.env.NEXT_PUBLIC_API_URL : process.env.NEXT_API_URL) + "/contacts",
			{
				method: req.method,
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(contact),
			}
		);

		let data = null;

		if (response.ok) {
			data = await response.json();
			return NextResponse.json({
				ok: true,
				status: "Success",
				message:
					"Thông tin đã được gửi đi. Chúng tôi sẽ liên hệ quý khách hàng trong thời gian sớm nhất.",
				data,
			});
		}

		return NextResponse.json({
			ok: false,
			status: "Error",
			message: "Vui lòng bấm chọn dịch vụ bạn đang quan tâm.",
		});
	} catch (error) {
		console.log(error);
		return NextResponse.json({
			ok: false,
			status: "Server Error",
			message: "Opps! Something went wrong while trying to add new post.",
		});
	}
}
