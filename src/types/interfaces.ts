export interface ApiResponse {
	ok: boolean;
	status: string;
	message: string;
	data: any;
}

export interface CustomerMessage {
	name: string;
	email: string;
	phone: string;
	message: string;
}

export interface User {
	id: string;
	login: string;
	firstName: string;
	lastName: string;
	email: string;
	authority: string;
	activated: boolean;
}

export interface CreateUserRequest {
	login: string;
	firstName: string;
	lastName: string;
	email: string;
	imageUrl: string;
	authority: string;
	activated: string;
}

export interface UpdateUserRequest {
	firstName: string;
	lastName: string;
	email: string;
}

export interface Authority {
	name: string;
}

export interface Role {
	name: string;
}

// export interface Permission {
// 	id: number;
// 	name: string;
// }

// export interface CreatePermissionRequest {
// 	permissionNames: string[];
// }

// export interface CreateRoleRequest {
// 	id: string;
// 	name: string;
// 	roleHasPermissions: string[];
// 	status: boolean;
// }

// export interface CreatePermission {
// 	name: string;
// }

export interface Category {
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
	user: string;
	slug: string;
	image: string;
	description: string;
	content: string;
	createDate: string;
	updateDate: string;
	status: string;
}

export interface CreatePostRequest {
	title: string;
	category: string;
	user: string;
	description: string;
	content: string;
	status: string;
}

export interface UpdatedPostRequest {
	id: string;
	title: string;
	description: string;
	content: string;
}
