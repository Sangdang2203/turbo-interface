"use client";
import { Divider, List, Toolbar } from "@mui/material";
import {
	AddCircleOutlineOutlined,
	AppsOutlined,
	ArticleOutlined,
	BadgeOutlined,
	ManageSearchRounded,
	RecentActors,
	ClassOutlined,
} from "@mui/icons-material";
import * as React from "react";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import MenuGroup from "@/components/MenuGroup";

// @ts-ignore
function createMenu(
	name: string,
	icon: OverridableComponent<any>,
	path: string,
	permission: string,
	//@ts-ignore
	children?: any[{
		name: string;
		icon: OverridableComponent<any>;
		path: string;
		permission: string;
	}]
) {
	return { name, icon, path, permission, children };
}

export default function DrawerMenu() {
	const menu = [
		createMenu("Trang quản trị", AppsOutlined, "/dashboard", "app.view"),

		createMenu(
			"Quản lý bài viết",
			ArticleOutlined,
			"/dashboard/posts",
			"post.view",
			[
				createMenu(
					"Danh sách",
					ManageSearchRounded,
					"/dashboard/posts",
					"post.view"
				),
				createMenu(
					"Tạo mới",
					AddCircleOutlineOutlined,
					"/dashboard/posts/create",
					"post.create"
				),
				createMenu(
					"Danh mục bài viết",
					ClassOutlined,
					"/dashboard/posts/categories",
					"emp.view"
				),
			]
		),

		createMenu("Khách hàng", RecentActors, "/dashboard/contacts", "emp.view"),
	];

	return (
		<div>
			<Toolbar></Toolbar>
			<Divider />
			<List>
				{menu.map((item, index) => (
					<MenuGroup
						key={index}
						item={item}></MenuGroup>
				))}
			</List>
		</div>
	);
}
