import { ApiResponse } from "@/types/interfaces";

export const fetchEmployees = async () => {
	const response = await fetch("/api/employees", {
		method: "GET",
	});
	return response.json() as Promise<ApiResponse>;
};

export const fetchRolesWithPermission = async () => {
	const res = await fetch("/api/roles/permissions", {
		method: "GET",
	});

	return res.json() as Promise<ApiResponse>;
};

export const fetchChangeStatus = async (employeeId: number) => {
	const response = await fetch(
		process.env.NEXT_PUBLIC_API_URL + `/Employee/${employeeId}/ChangeStatus`,
		{
			method: "PUT",
			cache: "no-cache",
		}
	);
};

export const fetchPermissions = async () => {
	const response = await fetch("/api/permissions", {
		method: "GET",
	});
	return response.json() as Promise<ApiResponse>;
};

export const fetchAddPermission = async (
	roleId: number,
	permissionId: number
) => {
	const response = await fetch(
		process.env.NEXT_PUBLIC_API_URL +
			`/Role/${roleId}/Permission/${permissionId}`,
		{
			method: "POST",
			cache: "no-cache",
		}
	);
};
