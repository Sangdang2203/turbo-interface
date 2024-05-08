import { ApiResponse, Post } from "types/interfaces";

// GET ALL METHODS
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

export const fetchPosts = async () => {
	const response = await fetch(`/api/posts`, {
		method: "GET",
	});
	return response.json() as Promise<ApiResponse>;
};

export const fetchContacts = async (token: string) => {
	const response = await fetch(`/api/contacts`, {
		method: "GET",
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	return response.json() as Promise<ApiResponse>;
};

// DELE METHODS
export const fetchDeleteUser = async (token: string, userId: string) => {
	const response = await fetch(`/api/users/${userId}`, {
		method: "DELETE",
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	return response.json() as Promise<ApiResponse>;
};

export const fetchDeletePost = async (token: string, postId: string) => {
	const response = await fetch(`/api/posts/${postId}`, {
		method: "DELETE",
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	return response.json() as Promise<ApiResponse>;
};

export const fetchDeleteCategory = async (token: string, cateId: string) => {
	const response = await fetch(`/api/categories/${cateId}`, {
		method: "DELETE",
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	return response.json() as Promise<ApiResponse>;
};
