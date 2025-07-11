import NextAuth, { NextAuthOptions } from "next-auth";
import { NextRequest } from "next/server";
import { authOptions } from "./authOptions";

interface RouteHandlerContext {
	params: { nextauth: string[] };
}

const handler = async (req: NextRequest, context: RouteHandlerContext) => {
	return NextAuth(req, context, authOptions);
};

export { handler as GET, handler as POST };
