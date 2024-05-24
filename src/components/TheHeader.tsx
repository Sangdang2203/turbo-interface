"use client";

import React from "react";
import Link from "next/link";
import {
	Close,
	MenuRounded,
	KeyboardArrowDownRounded,
	HomeRounded,
	ContactPhoneRounded,
	BallotRounded,
	ModelTrainingRounded,
	NewspaperRounded,
	InfoRounded,
} from "@mui/icons-material";
import EcoCloud from "../app/images/EcoCloud.png";
import Image from "next/image";
import { Button, Menu, MenuItem } from "@mui/material";
import { servicesLinks, solutonLinks } from "@/app/libs/data";

export default function TheHeader() {
	const [navigation, setNavigation] = React.useState(false);

	function handleNavigation() {
		setNavigation(!navigation);
	}

	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const [anchorE2, setAnchorE2] = React.useState<null | HTMLElement>(null);
	const openService = Boolean(anchorEl);
	const openSolution = Boolean(anchorE2);
	const handleClickService = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleCloseService = () => {
		setAnchorEl(null);
	};
	const handleClickSolution = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorE2(event.currentTarget);
	};
	const handleCloseSolution = () => {
		setAnchorE2(null);
	};

	return (
		<header className="w-full fixed top-0 left-0 z-30 bg-white shadow-lg">
			<nav className="h-[10vh] flex justify-between items-center p-4 ">
				<div className=" font-bold text-3xl text-amber-400 hover:text-amber-200">
					<Link href="/">
						<Image
							src={EcoCloud}
							className="w-28 h-10"
							title="Trang chủ"
							alt="logo_turbo_solutions"
						/>
					</Link>
				</div>

				{/* nav pc */}
				<div className="hidden text-[1rem] lg:flex justify-between items-center ">
					<Button
						href="/home"
						className="navLink">
						trang chủ
					</Button>
					<Button
						href="/about-us"
						className=" navLink active">
						giới thiệu
					</Button>

					<Button
						onClick={handleClickService}
						endIcon={<KeyboardArrowDownRounded />}
						className="navLink py-3">
						dịch vụ
					</Button>
					<Menu
						id="services"
						anchorEl={anchorEl}
						open={openService}
						onClose={handleCloseService}
						MenuListProps={{ "aria-labelledby": "basic-button" }}>
						{servicesLinks.map(sub => {
							return (
								<MenuItem key={sub.path}>
									<Link
										href={sub.path}
										className="navSubLink">
										{sub.name}
									</Link>
								</MenuItem>
							);
						})}
					</Menu>

					<Button
						onClick={handleClickSolution}
						endIcon={<KeyboardArrowDownRounded />}
						className=" navLink ">
						giải pháp
					</Button>
					<Menu
						id="services"
						anchorEl={anchorE2}
						open={openSolution}
						onClose={handleCloseSolution}
						MenuListProps={{ "aria-labelledby": "basic-button" }}>
						{solutonLinks.map(sub => {
							return (
								<MenuItem key={sub.path}>
									<Link
										href={sub.path}
										className="navSubLink ">
										{sub.name}
									</Link>
								</MenuItem>
							);
						})}
					</Menu>

					<Button
						href="/news"
						className=" navLink ">
						tin tức
					</Button>
					<Button
						href="/contact"
						className=" navLink ">
						liên hệ
					</Button>
				</div>

				{/* Handle the menu icon */}
				<div
					className="flex lg:hidden z-50"
					onClick={handleNavigation}>
					{navigation ? (
						<Close
							fontSize="medium"
							className="text-[#002D62] hover:opacity-80 cursor-pointer z-50"
						/>
					) : (
						<MenuRounded
							fontSize="large"
							className="text-[#002D62] hover:opacity-80 cursor-pointer z-50"
						/>
					)}
				</div>

				{/* Smaller screen */}
				<div
					className={
						navigation
							? "lg:hidden absolute top-[10vh] right-0 left-0 bottom-0 bg-slate-200 w-full h-screen ease-in duration-500"
							: "lg:hidden absolute top-[10vh] right-0 left-[-100%] bottom-0 bg-slate-200 w-full h-screen ease-in duration-500"
					}>
					{/* navbar links */}
					<ul className="text-center text-[1rem] fond-bold mt-6">
						<div className="text-[1rem] flex flex-col justify-center items-start px-[25%]">
							<Button
								startIcon={
									<HomeRounded
										className="opacity-60"
										fontSize="small"
									/>
								}
								href="/home"
								className="navLink gradientText">
								trang chủ
							</Button>
							<Button
								startIcon={
									<InfoRounded
										className="opacity-60"
										fontSize="small"
									/>
								}
								href="/about-us"
								className="navLink gradientText">
								giới thiệu
							</Button>

							<Button
								startIcon={
									<ModelTrainingRounded
										className="opacity-60"
										fontSize="small"
									/>
								}
								onClick={handleClickService}
								// endIcon={<KeyboardArrowDownRounded />}
								className="navLink gradientText">
								dịch vụ
							</Button>
							<Menu
								id="services"
								anchorEl={anchorEl}
								open={openService}
								onClose={handleCloseService}
								MenuListProps={{ "aria-labelledby": "basic-button" }}>
								{servicesLinks.map(sub => {
									return (
										<MenuItem key={sub.path}>
											<Link
												href={sub.path}
												className="navSubLink">
												{sub.name}
											</Link>
										</MenuItem>
									);
								})}
							</Menu>

							<Button
								startIcon={
									<BallotRounded
										className="opacity-60"
										fontSize="small"
									/>
								}
								onClick={handleClickSolution}
								// endIcon={<KeyboardArrowDownRounded />}
								className="navLink gradientText">
								giải pháp
							</Button>
							<Menu
								id="services"
								anchorEl={anchorE2}
								open={openSolution}
								onClose={handleCloseSolution}
								MenuListProps={{ "aria-labelledby": "basic-button" }}>
								{solutonLinks.map(sub => {
									return (
										<MenuItem key={sub.path}>
											<Link
												href={sub.path}
												className="navSubLink">
												{sub.name}
											</Link>
										</MenuItem>
									);
								})}
							</Menu>

							<Button
								startIcon={
									<NewspaperRounded
										className="opacity-60"
										fontSize="small"
									/>
								}
								href="/news"
								className="navLink gradientText">
								tin tức
							</Button>
							<Button
								startIcon={
									<ContactPhoneRounded
										className="opacity-60"
										fontSize="small"
									/>
								}
								href="/contact"
								className="navLink gradientText">
								liên hệ
							</Button>
						</div>
					</ul>
				</div>
			</nav>
		</header>
	);
}
