import { NextResponse } from "next/server";

export async function GET() {
	try {
		const response = await fetch(
			process.env.NEXT_PUBLIC_API_URL + "/admin/users",
			{
				method: "GET",
				cache: "no-cache",
			}
		);

		let data = null;

		if (response.ok) {
			data = await response.json();
			console.log(data);
		}

		if (response.ok) {
			return NextResponse.json({
				ok: true,
				status: "Success",
				message: "Get users successfully.",
				data,
			});
		}

		return NextResponse.json({
			ok: false,
			status: "Error",
			message: "Failed to get users.",
		});
	} catch (error) {
		console.log(error);
		return NextResponse.json({
			ok: false,
			status: "Server Error",
			message: "Opps! Something went wrong while trying to get users.",
		});
	}
}

export async function POST(request: Request) {
	const user = await request.json();
	user.imgUrl = "user image";
	user.activated = "ACTIVE";
	try {
		const response = await fetch(
			process.env.NEXT_PUBLIC_API_URL + "/admin/users",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(user),
			}
		);

		let data = null;

		if (response.ok) {
			data = await response.json();
			console.log(data);
		}

		if (response.ok) {
			return NextResponse.json({
				ok: true,
				status: "Success",
				message: "Add new user successfully.",
				data,
			});
		}

		return NextResponse.json({
			ok: false,
			status: "Error",
			message: "Failed to add user.",
		});
	} catch (error) {
		console.log(error);
		return NextResponse.json({
			ok: false,
			status: "Server Error",
			message: "Opps! Something went wrong while trying to add new user.",
		});
	}
}
