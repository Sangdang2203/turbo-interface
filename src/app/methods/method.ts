import { ApiResponse, Post } from "types/interfaces";

export const fetchUsers = async (token: string) => {
	const response = await fetch("/api/users", {
		method: "GET",
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	return response.json() as Promise<ApiResponse>;
};

export const fetchAuthorities = async (token: string) => {
	const response = await fetch("/api/roles", {
		method: "GET",
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	return response.json() as Promise<ApiResponse>;
};

export const fetchCategories = async (token: string) => {
	const response = await fetch("/api/categories", {
		method: "GET",
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	return response.json() as Promise<ApiResponse>;
};

export const fetchPosts = async (token: string) => {
	const response = await fetch("/api/posts", {
		method: "GET",
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	return response.json() as Promise<ApiResponse>;
};
