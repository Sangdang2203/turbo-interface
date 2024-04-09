export interface ApiResponse {
	ok: boolean;
	status: string;
	message: string;
	data: any;
}

export interface Employee {
	id: number;
	code: string;
	fullname: string;
	gender: boolean;
	email: string;
	password: string;
	phone: string;
	address: string;
	roleId: number;
	roleName: string;
	status: boolean;
}

export interface Role {
	id: number;
	name: string;
	roleHasPermissions: string[];
	status: boolean;
}

export interface Permission {
	id: number;
	name: string;
}

export interface NewsItem {
	id: number;
	title: string;
	slug: string;
	content: string;
	author: string;
	category: number;
	employeeId: number;
	createdAt: string;
	updatedAt: string;
	status: number;
}

export interface CustomerMessage {
	name: string;
	email: string;
	phone: string;
	message: string;
}

export interface CreateEmployeeRequest {
	code: string;
	fullname: string;
	gender: boolean;
	email: string;
	password: string;
	phone: string;
	address: string;
	roleId: number;
}

export interface CreatePermissionRequest {
	permissionNames: string[];
}

export interface CreateRoleRequest {
	id: number;
	name: string;
	roleHasPermissions: string[];
	status: true;
}

export interface CreatePermission {
	name: string;
}
