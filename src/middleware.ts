import { NextResponse } from "next/server";
import { withAuth } from "next-auth/middleware";

const url = process.env.NEXT_PUBLIC_API_URL;

export default withAuth(
	// `withAuth` augments your `Request` with the user's token.
	async function middleware(req) {
		const token = req.nextauth.token;
		if (token) {
			const pathname = req.nextUrl.pathname;
			const dynamicPaths = ["[id]", "[token]"];
			// Find a matching path with dynamic path handling
			const path = paths.find(p => {
				if (dynamicPaths.some(dp => p.path.includes(dp))) {
					const regex = new RegExp(p.path.replace(/\[.*?\]/g, ".*"));
					return regex.test(pathname);
				}
				return p.path === pathname;
			});
			if (!path) {
				return NextResponse.redirect(new URL("/", req.url));
			}
			return NextResponse.next();
		} else {
			if (req.nextUrl.pathname === "/admin-login") return NextResponse.next();
			else if (req.nextUrl.pathname.startsWith("/dashboard")) {
				return NextResponse.redirect(new URL("/", req.url));
			}
		}
		return NextResponse.next();
	},
	{
		callbacks: {
			authorized: async ({ token }) => {
				if (token?.id_token) {
					return true;
				}
				return false;
			},
		},
	}
);

export const config = {
	// https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
	matcher: [
		/*
		 * Match all request paths except for the ones starting with:
		 * - api (API routes)
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico (favicon file)
		 */
		"/dashboard",
	],
};

const paths = [
	{
		path: "/dashboard",
		permission: ["app.view"],
	},

	{
		path: "/dashboard/users",
		permission: ["emp.view"],
	},
	{
		path: "/dashboard/posts/categories",
		permission: ["emp.view"],
	},
	{
		path: "/dashboard/posts/management",
		permission: ["new.create"],
	},
	{
		path: "/dashboard/posts/create",
		permission: ["fee.view"],
	},
	{
		path: "/dashboard/contacts",
		permission: ["emp.create"],
	},
];
