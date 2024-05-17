import nodemailer from "nodemailer";

// Replace with your actual email credentials
const transporter = nodemailer.createTransport({
	host: "smtp.gmail.com",
	port: 587,
	auth: {
		user: "sangdang2203@gmail.com",
		pass: "mjmu axgy foex ojpw",
	},
});

// Replace with your actual email sending function
export default async function sendEmail({
	to,
	subject,
	message,
	headers,
}: any) {
	try {
		await transporter.sendMail({
			from: headers.from,
			to: to,
			subject: subject,
			text: message,
		});
	} catch (error) {
		console.error("Error sending email:", error);
		throw error;
	}
}
