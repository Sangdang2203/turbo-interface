"use client";
import { Divider, List, Toolbar } from "@mui/material";

import {
	AddCircleOutlineOutlined, AppsOutlined, ArticleOutlined, ManageSearchRounded, RecentActors,
} from "@mui/icons-material";

import * as React from "react";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import MenuGroup from "@/components/MenuGroup";
import logo from "@/app/images/logoTurbo.png";
import Image from "next/image";

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
			]
		),

		createMenu("Khách hàng", RecentActors, "/dashboard/contacts", "emp.view"),
	];

	return (
		<div>
			<Toolbar className="flex justify-center">
				<Image src={logo} width={100} height={40} priority alt="Turbo AI Solution" title="Turbo AI Solution" />
			</Toolbar>

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
