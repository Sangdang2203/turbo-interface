'use client'
import { Divider, List, Toolbar } from '@mui/material'
import {
	AccountBoxOutlined,
	AddCircleOutlineOutlined,
	AppsOutlined,
	ArticleOutlined,
	BadgeOutlined,
	EditNoteOutlined,
	ManageAccountsOutlined,
	NewspaperOutlined,
	PasswordOutlined,
} from "@mui/icons-material";
import * as React from "react";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import MenuGroup from "@/components/MenuGroup";
import PermissionCheck from "./PermissionCheck";

// @ts-ignore
function createMenu(
	name: string,
	icon: OverridableComponent<any>,
	path: string,
	permission: string,
	//@ts-ignore
	children?: any[{ name: string; icon: OverridableComponent<any>; path: string; permission: string; }]
) {
	return { name, icon, path, permission, children };
}

export default function DrawerMenu() {
	const menu = [
		createMenu("Trang Quản Trị", AppsOutlined, "/dashboard", "app.view"),

		createMenu("Thông Tin Cá Nhân", AccountBoxOutlined, "/dashboard/employee", "profile.view"),

		createMenu("Nhân Viên", BadgeOutlined, "/dashboard/employees", "emp.view", [
			createMenu('Thêm mới', AddCircleOutlineOutlined, '/dashboard/employees/create', 'post.create'),
			createMenu('Cập nhật', EditNoteOutlined, '/dashboard/employees/edit', 'post.update')
		]),

		createMenu("Vai Trò", ManageAccountsOutlined, "/dashboard/roles", "role.view"),

		createMenu('Bài Viết', ArticleOutlined, '/dashboard/post-management', 'post.view', [
			createMenu('Thêm mới', AddCircleOutlineOutlined, '/dashboard/post-management/create', 'post.create'),
			createMenu('Cập nhật', EditNoteOutlined, '/dashboard/post-management/edit', 'post.update')
		]),

		createMenu('Tuyển Dụng', NewspaperOutlined, '/dashboard/recruitment', 'recruitment.view', [
			createMenu('Thêm mới', AddCircleOutlineOutlined, '/dashboard/recruitment/create', 'recruitment.create'),
			createMenu('Cập nhật', EditNoteOutlined, '/dashboard/recruitment/edit', 'recruitment.update')
		]),

		createMenu('Cài đặt', PasswordOutlined, '/dashboard/general-settings', 'setting.view'),
	]

	return (
		<div>
			<Toolbar></Toolbar>
			<Divider />
			<List>
				{menu.map((item, index) => (
					// <PermissionCheck
					// 	permission={item.permission}
					// 	key={index}>

					// </PermissionCheck>
					<MenuGroup key={index} item={item}></MenuGroup>
				))}
			</List>
		</div>
	);
}
