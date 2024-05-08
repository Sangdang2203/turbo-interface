import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
	try {
		const response = await fetch(
			process.env.NEXT_PUBLIC_API_URL + "/contacts",
			{
				method: req.method,
				headers: req.headers,
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

		return NextResponse.json({
			ok: false,
			status: "Error",
			message: "Failed to get contacts.",
		});
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
			process.env.NEXT_PUBLIC_API_URL + "/contacts",
			{
				method: req.method,
				headers: req.headers,
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
			message: "Gửi thông tin thất bại.",
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
