'use client'
import { Divider, List, Toolbar } from '@mui/material'
import {
	AccountBoxOutlined,
	AddCircleOutlineOutlined,
	AppsOutlined,
	ArticleOutlined,
	BadgeOutlined,
	EditNoteOutlined,
	ManageSearchRounded,
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

		//createMenu("Thông Tin Cá Nhân", AccountBoxOutlined, "/dashboard/user", "profile.view"),

		createMenu("Nhân Viên", BadgeOutlined, "/dashboard/users", "emp.view"),

		createMenu('Quản lý Bài Viết', ArticleOutlined, '/dashboard/posts', 'post.view', [
			createMenu('Danh sách', ManageSearchRounded, '/dashboard/posts/management', 'post.view'),
			createMenu('Tạo mới', AddCircleOutlineOutlined, '/dashboard/posts/create', 'post.create'),
		]),

		// createMenu('Tuyển Dụng', NewspaperOutlined, '/dashboard/recruitment', 'recruitment.view', [
		// 	createMenu('Quản lý', ManageSearchRounded, '/dashboard/recruitment/management', 'recruitment.view'),
		// 	createMenu('Tạo mới', AddCircleOutlineOutlined, '/dashboard/recruitment/create', 'recruitment.create')
		// ]),
	]

	return (
		<div>
			<Toolbar></Toolbar>
			<Divider />
			<List>
				{menu.map((item, index) => (
					<MenuGroup key={index} item={item}></MenuGroup>
				))}
			</List>
		</div>
	);
}
