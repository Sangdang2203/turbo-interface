import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/authOptions";
import { getServerSession } from "next-auth/next";

export async function GET(
	req: NextRequest,
	{ params }: { params: { contactId: string } }
) {
	try {
		const id = params.contactId;
		const session = await getServerSession(authOptions);

		if (!session) {
			return NextResponse.json({
				ok: false,
				status: "Error",
				message: "fail to get contact info !",
			});
		}

		const res = await fetch(
			process.env.NEXT_PUBLIC_API_URL + `/contacts/${id}`,
			{
				method: req.method,
				headers: {
					Authorization: `Bearer ${session.user.id_token}`,
				},
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
	} catch (error) {
		console.log(error);
		return NextResponse.json({
			ok: false,
			status: "Server error",
			message: "Oops ! Something went wrong while trying get contact info.",
		});
	}
}

export async function DELETE(
	req: NextRequest,
	{ params }: { params: { contactId: string } }
) {
	try {
		const id = params.contactId;
		const session = await getServerSession(authOptions);

		if (!session) {
			return NextResponse.json({
				ok: false,
				status: "Error",
				message: "Xóa thất bại !",
			});
		}

		const res = await fetch(
			process.env.NEXT_PUBLIC_API_URL + `/contacts/${id}`,
			{
				method: req.method,
				headers: {
					Authorization: `Bearer ${session.user.id_token}`,
				},
				cache: "no-cache",
			}
		);

		if (res.ok) {
			return NextResponse.json({
				ok: true,
				status: "success",
				message: "Xóa thành công.",
			});
		}
	} catch (error) {
		console.log(error);
		return NextResponse.json({
			ok: false,
			status: "Server error",
			message: "Oops ! Something went wrong while trying get contact info.",
		});
	}
}
