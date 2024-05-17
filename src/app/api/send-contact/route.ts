import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method !== "POST") {
		return res.status(405).json({ message: "Chỉ hỗ trợ phương thức POST." });
	}

	const { name, email, phone } = req.body;

	// Validate and sanitize data (if necessary)

	const to = "dangsang2203@gmail.com"; // Replace with your recipient email
	const subject = "Liên hệ từ website";
	const message = `Tên: ${name}\nEmail: ${email}\nSố điện thoại: ${phone}`;
	const headers = "From: noreply@yourwebsite.com\n"; // Replace with your website's email

	try {
		await sendEmail({ to, subject, message, headers }); // Replace with your email sending logic
		res.status(200).json({ message: "Thông tin liên hệ đã được gửi!" });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Có lỗi khi gửi thông tin liên hệ." });
	}
}

// Replace with your actual email sending function
async function sendEmail({ to, subject, message, headers }: any) {
	// Implement email sending using a library or your preferred method
	console.log("Sending email:", { to, subject, message, headers });
	// Replace with actual email sending logic
}
