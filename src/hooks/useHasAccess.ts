"use client";

import { useSession } from "next-auth/react";

const useHasAccess = (permission: string) => {
	const { data: session, status } = useSession();

	if (status === "loading") {
		return false;
	}

	if (!session) {
		return false;
	}

	return false;
};

export default useHasAccess;
