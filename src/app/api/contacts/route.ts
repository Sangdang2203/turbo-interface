import { NextApiRequest, NextApiResponse } from "next";
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
			message:
				"Gửi thông tin thất bại. Vui lòng bấm chọn dịch vụ bạn đang quan tâm.",
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

// export async function handler(req: NextApiRequest, res: NextApiResponse) {
// 	if (req.method !== "POST") {
// 		return res.status(405).json({ message: "Chỉ hỗ trợ phương thức POST." });
// 	}

// 	const { name, email, phone } = req.body;

// 	// Validate and sanitize data (if necessary)

// 	const to = "dangsang2203@gmail.com"; // Replace with your recipient email
// 	const subject = "Liên hệ từ website";
// 	const message = `Tên: ${name}\nEmail: ${email}\nSố điện thoại: ${phone}`;
// 	const headers = "From: noreply@turbo.com\n"; // Replace with your website's email

// 	try {
// 		await sendEmail({ to, subject, message, headers }); // Replace with your email sending logic
// 		res.status(200).json({ message: "Thông tin liên hệ đã được gửi!" });
// 	} catch (error) {
// 		console.error(error);
// 		res.status(500).json({ message: "Có lỗi khi gửi thông tin liên hệ." });
// 	}
// }

// // Replace with your actual email sending function
// async function sendEmail({ to, subject, message, headers }: any) {
// 	// Implement email sending using a library or your preferred method
// 	console.log("Sending email:", { to, subject, message, headers });
// 	// Replace with actual email sending logic
// }
