import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
	/**
	 * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
	 */
	interface Session {
		user: {
			role: any;
			id_token: string;
		};
	}

	interface User {
		id_token: string;
	}
}

declare module "next-auth/jwt" {
	interface JWT {
		/** This is an example. You can find me in types/next-auth.d.ts */
		id_token: string;
	}
}
