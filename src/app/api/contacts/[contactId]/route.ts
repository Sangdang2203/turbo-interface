import { NextRequest, NextResponse } from "next/server";

export async function GET(
	req: NextRequest,
	{ params }: { params: { contactId: string } }
) {
	try {
		const id = params.contactId;

		const res = await fetch(
			process.env.NEXT_PUBLIC_API_URL + `/contacts/${id}`,
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
				message: "get contact info successfully.",
			});
		}

		return NextResponse.json({
			ok: false,
			status: "Error",
			message: "fail to get contact info !",
		});
	} catch (error) {
		console.log(error);
		return NextResponse.json({
			ok: false,
			status: "Server error",
			message: "Oops ! Something went wrong while trying get contact info.",
		});
	}
}
