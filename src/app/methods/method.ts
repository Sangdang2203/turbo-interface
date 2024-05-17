import { toast } from "sonner";
import { ApiResponse, CustomerMessage } from "types/interfaces";
import sendEmail from "./sendMail";

import { NextApiRequest, NextApiResponse } from "next";
import chromium from "puppeteer";

// CREATE METHODS
export async function CreateContact(contact: CustomerMessage) {
	const message = toast.loading("Đang gửi thông tin ...");

	try {
		const res = await fetch(`/api/contacts`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(contact),
		});

		const payload = (await res.json()) as ApiResponse;

		if (payload.ok) {
			toast.success(payload.message);
			//sendEmail();
		} else {
			toast.error(payload.message);
		}
		toast.dismiss(message);
	} catch (error) {
		console.log(error);
	}
}

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

export async function fetchContact(token: string, contactId: string) {
	const response = await fetch("/api/contacts/" + contactId, {
		method: "GET",
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	return response.json() as Promise<ApiResponse>;
}
