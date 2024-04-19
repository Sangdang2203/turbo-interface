import { ApiResponse } from "types/interfaces";

export const fetchUsers = async () => {
	const response = await fetch("/api/users", {
		method: "GET",
	});
	return response.json() as Promise<ApiResponse>;
};

export const fetchAuthorities = async () => {
	const response = await fetch("/api/roles", {
		method: "GET",
	});
	return response.json() as Promise<ApiResponse>;
};

export const fetchCategories = async () => {
	const response = await fetch("/api/categories", {
		method: "GET",
	});
	return response.json() as Promise<ApiResponse>;
};

export const fetchPosts = async () => {
	const response = await fetch("/api/posts", {
		method: "GET",
	});
	return response.json() as Promise<ApiResponse>;
};

// export const fetchChangeStatus = async (employeeId: number) => {
// 	const response = await fetch(
// 		process.env.NEXT_PUBLIC_API_URL + `/Employee/${employeeId}/ChangeStatus`,
// 		{
// 			method: "PUT",
// 			cache: "no-cache",
// 		}
// 	);
// };
