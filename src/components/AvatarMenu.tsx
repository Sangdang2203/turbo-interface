"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { signOut, useSession } from "next-auth/react";
import logo from "@/app/images/admin.png";
import Image from "next/image";

export default function AvatarMenu() {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const { data: session, status } = useSession();
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	if (status === "authenticated") {
		return (
			<div>
				<div className="flex">
					<Button
						id="basic-button"
						aria-controls={open ? "basic-menu" : undefined}
						aria-haspopup="true"
						aria-expanded={open ? "true" : undefined}
						onClick={handleClick}>
						{/* <Avatar src="@/app/images/logoTurbo.png"></Avatar> */}
						<Image
							alt="admin"
							src={logo}
							width={50}
							height={50}
							className="rounded-full"
							title="Bấm chọn để thoát tài khoản"
						/>
					</Button>
					<div className="flex"></div>
				</div>
				<Menu
					id="basic-menu"
					anchorEl={anchorEl}
					open={open}
					onClose={handleClose}
					MenuListProps={{
						"aria-labelledby": "basic-button",
					}}>
					<MenuItem>
						<p>Administrator</p>
					</MenuItem>
					<MenuItem
						color="black"
						onClick={handleClose}></MenuItem>
					<MenuItem onClick={() => signOut()}>Thoát</MenuItem>
				</Menu>
			</div>
		);
	}
}
