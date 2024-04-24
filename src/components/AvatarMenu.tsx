"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Avatar, Box, Typography } from "@mui/material";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

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

	const handleSignOut = () => {
		if (session) {
			fetch("/api/Users/revoke-token", {
				method: "DELETE",
				headers: {
					Authorization: `Bearer ${session.user.id_token}`,
				},
			}).then(() => { });
		}
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
						<Avatar src="">a</Avatar>
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
						<p className="">Administrator</p>
					</MenuItem>
					<MenuItem
						color="black"
						onClick={handleClose}>
						{/* <Link
							href="/dars/employee"
							className="text-decoration-none py-1 text-dark">
							Profiles
						</Link> */}
					</MenuItem>
					<MenuItem onClick={() => signOut()}>Logout</MenuItem>
				</Menu>
			</div>
		);
	}
}
