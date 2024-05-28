import { toast } from "sonner";
import { ApiResponse, CustomerMessage } from "types/interfaces";

// CREATE METHODS
export async function CreateContact(contact: CustomerMessage) {
	const message = toast.loading("Đang gửi thông tin ...");

	try {
		const res = await fetch(`/api/contacts`, {
			method: "POST",
			body: JSON.stringify(contact),
		});

		const payload = (await res.json()) as ApiResponse;

		if (payload.ok) {
			toast.success(payload.message);
		} else {
			toast.error(payload.message);
		}
		toast.dismiss(message);
	} catch (error) {
		console.log(error);
	}
}

// GET ALL METHODS
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
	const response = await fetch(`/api/posts`, {
		method: "GET",
	});
	return response.json() as Promise<ApiResponse>;
};

export const fetchContacts = async () => {
	const response = await fetch(`/api/contacts`, {
		method: "GET",
	});
	return response.json() as Promise<ApiResponse>;
};

// DELETE METHODS
export const fetchDeleteUser = async (userId: string) => {
	const response = await fetch(`/api/users/${userId}`, {
		method: "DELETE",
	});
	return response.json() as Promise<ApiResponse>;
};

export const fetchDeletePost = async (postId: string) => {
	const response = await fetch(`/api/posts/${postId}`, {
		method: "DELETE",
	});
	return response.json() as Promise<ApiResponse>;
};

export const fetchDeleteContact = async (contactId: string) => {
	const response = await fetch(`/api/contacts/${contactId}`, {
		method: "DELETE",
	});
	return response.json() as Promise<ApiResponse>;
};

export const fetchDeleteCategory = async (cateId: string) => {
	const response = await fetch(`/api/categories/${cateId}`, {
		method: "DELETE",
	});
	return response.json() as Promise<ApiResponse>;
};

export async function fetchContact(contactId: string) {
	const response = await fetch("/api/contacts/" + contactId, {
		method: "GET",
	});
	return response.json() as Promise<ApiResponse>;
}
