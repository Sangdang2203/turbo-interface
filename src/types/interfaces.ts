import { z } from "zod";

export interface ApiResponse {
	ok: boolean;
	status: string;
	message: string;
	data: any;
}

export const SCHEMA = z.object({
	title: z
		.string({
			required_error: "Nhập tiêu đề bài viết.",
		})
		.min(10, "Tiêu đề phải nhập tối thiểu 10 ký tự")
		.max(200, "Tiêu đề nhập tối đa 200 ký tự"),

	categories: z.array(z.string()).min(1, "Vui lòng bấm chọn."),

	userId: z.string().min(1, "Vui lòng bấm chọn."),

	urlImage: z.string(),

	description: z
		.string({
			required_error: "Nhập mô tả bài viết.",
		})
		.min(10, "Mô tả bài viết phải nhập tối thiểu 10 ký tự."),
});

export type POSTSCHEMA = z.infer<typeof SCHEMA>;

export interface CreatePostRequest
	extends Omit<POSTSCHEMA, "categories" | "userId"> {
	categories: { id: string }[];
	user: { id: string };
	status: "ACTIVE";
}

export interface CreateCategoryRequest {
	name: string;
}

export interface UpdateCategoryRequest {
	id: string;
	name: string;
}

export interface Category {
	id: string;
	name: string;
}

export interface CustomerMessage {
	id: string;
	name: string;
	email: string;
	phone: string;
	services: string[];
	message: string;
}

export interface User {
	id: string;
	login: string;
	firstName: string;
	lastName: string;
	email: string;
	authorities: string[];
	activated: boolean;
}

export interface CreateUserRequest {
	login: string;
	firstName: string;
	lastName: string;
	email: string;
	authorities: string[];
	activated: boolean;
}

export interface UpdateUserRequest {
	id: string;
	login: string;
	firstName: string;
	lastName: string;
	email: string;
	authorities: string[];
}

export interface Authority {
	id: string;
	name: string;
}

export interface Post {
	id: string;
	title: string;
	categories: [
		{
			id: string;
			name: string;
		}
	];
	login: string;
	slug: string;
	urlImage: string;
	description: string;
	content: string;
	createdDate: string;
	updatedDate: string;
	status: string;
}
