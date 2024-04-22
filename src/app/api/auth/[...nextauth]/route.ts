import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextRequest } from "next/server";

interface RouteHandlerContext {
	params: { nextauth: string[] };
}

export const authOptions: NextAuthOptions = {
	// Configure one or more authentication providers
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				username: { label: "Username", type: "text" },
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials, req) {
				const url = `${process.env.NEXT_PUBLIC_API_URL}/authenticate`;

				try {
					const res = await fetch(url, {
						cache: "no-cache",
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify({ ...credentials }),
					});

					if (res.ok) {
						const user = await res.json();
						return user;
					}
					return null;
				} catch (error) {
					console.log("Error authorize next-auth", error);
					return null;
				}
			},
		}),
		// ...add more providers here
	],
	pages: {
		signIn: "/admin-login",
	},
	callbacks: {
		async jwt({ token, user, trigger, session }) {
			if (user) {
				token = { ...user };
			}
			// return final token
			return token;
		},

		async session({ session, token, user }) {
			session.user = { ...token };

			return session;
		},
	},
};

const handler = async (req: NextRequest, context: RouteHandlerContext) => {
	return NextAuth(req, context, authOptions);
};

export { handler as GET, handler as POST };
