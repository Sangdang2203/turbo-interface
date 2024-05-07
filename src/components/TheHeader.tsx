"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
	Close,
	MenuRounded,
	KeyboardArrowDownRounded,
} from "@mui/icons-material";
import EcoCloud from "../app/images/EcoCloud.png";
import Image from "next/image";
import { Button, Menu, MenuItem } from "@mui/material";

// const navLinks = [
// 	{ path: "/home", name: "trang chủ" },
// 	{ path: "/about-us", name: "giới thiệu" },
// 	{ path: "/our-services", name: "dịch vụ" },
// 	{ path: "/software", name: "phần mềm" },
// 	{ path: "/recruitment", name: "tuyển dụng" },
// 	{ path: "/news", name: "tin tức" },
// 	{ path: "/contact", name: "liên hệ" },
// ];
const subServicesLinks = [
	{ path: "/services/cloud-server", name: "cloud server" },
	{ path: "/services/cloud-gpu/", name: "cloud GPU" },
	{ path: "/services/cloud-backup", name: "cloud backup" },
	{ path: "/services/cloudflare", name: "cloudflare" },
	{ path: "/services/dedicated-server", name: "dedicated server" },
	{ path: "/services/disaster-recovery", name: "disaster recovery" },
	{ path: "/services/virtual-data-center", name: "vitual data center" },
	{ path: "/services/private-cloud", name: "private cloud service" },
	{ path: "/services/cloud-backup-recovery", name: "cloud backup & recovery" },
];
const subSoftwareLinks = [
	{ path: "/microsoft-office", name: "microsoft office 365" },
	{ path: "/google-workspace", name: "google workspace" },
	{ path: "cloud-backup-recovery", name: "veeam backup & replication" },
];

const subSolutonLinks = [
	{
		path: "https://v2.aivisionviet.vn/ai-video-search",
		name: "AI - Video Search",
	},
	{
		path: "https://v2.aivisionviet.vn/nhan-dien-khuon-mat",
		name: "AI - Nhận Diện Khuôn Mặt",
	},
	{
		path: "https://v2.aivisionviet.vn/nhan-dien-bien-so",
		name: "AI - Nhận Dạng Biển Số",
	},
	{
		path: "https://v2.aivisionviet.vn/nhan-dang-vat-the",
		name: "AI - Nhận Dạng Vật Thể",
	},
	{
		path: "https://v2.aivisionviet.vn/kiem-soat-luu-luong",
		name: "AI - Kiểm Soát Lưu Lượng",
	},
	{
		path: "https://v2.aivisionviet.vn/phat-hien-bat-thuong",
		name: "AI - Nhận Diện Bất Thường",
	},
	{
		path: "https://aivisionviet.vn/vaidio-command-center",
		name: "AI - Quản Lý Tập Trung",
	},
	{ path: "https://aivisionviet.vn/vaidio-data", name: "AI - Quản Lý Dữ Liệu" },
];

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
						className=" no-underline p-3 hover:text-white hover:bg-sky-900 hover:ease-out hover:duration-700">
						trang chủ
					</Button>
					<Button
						href="/about-us"
						className=" no-underline p-3 hover:text-white hover:bg-sky-900 hover:ease-out hover:duration-700">
						giới thiệu
					</Button>

					<Button
						onClick={handleClickService}
						endIcon={<KeyboardArrowDownRounded />}
						className=" p-3 hover:text-white hover:bg-sky-900 hover:ease-out hover:duration-700">
						dịch vụ
					</Button>
					<Menu
						id="services"
						anchorEl={anchorEl}
						open={openService}
						onClose={handleCloseService}
						MenuListProps={{ "aria-labelledby": "basic-button" }}>
						{subServicesLinks.map(sub => {
							return (
								<MenuItem key={sub.path}>
									<Link
										href={sub.path}
										className="capitalize no-underline text-sky-900">
										{sub.name}
									</Link>
								</MenuItem>
							);
						})}
					</Menu>

					<Button
						onClick={handleClickSolution}
						endIcon={<KeyboardArrowDownRounded />}
						className=" no-underline p-3 hover:text-white hover:bg-sky-900 hover:ease-out hover:duration-700">
						giải pháp
					</Button>
					<Menu
						id="services"
						anchorEl={anchorE2}
						open={openSolution}
						onClose={handleCloseSolution}
						MenuListProps={{ "aria-labelledby": "basic-button" }}>
						{subSolutonLinks.map(sub => {
							return (
								<MenuItem key={sub.path}>
									<Link
										href={sub.path}
										className="capitalize no-underline text-sky-900 ">
										{sub.name}
									</Link>
								</MenuItem>
							);
						})}
					</Menu>

					{/* <Button
						href="/recruitment"
						className=" no-underline p-3 hover:text-white hover:bg-sky-900 hover:ease-out hover:duration-700">
						tuyển dụng
					</Button> */}
					<Button
						href="/news"
						className=" no-underline p-3 hover:text-white hover:bg-sky-900 hover:ease-out hover:duration-700">
						tin tức
					</Button>
					<Button
						href="/contact"
						className=" no-underline p-3 hover:text-white hover:bg-sky-900 hover:ease-out hover:duration-700">
						liên hệ
					</Button>
				</div>

				{/* Handle the menu icon */}
				<div
					className="flex lg:hidden z-10"
					onClick={handleNavigation}>
					{navigation ? (
						<Close
							fontSize="medium"
							className="text-[#002D62] hover:opacity-80 cursor-pointer"
						/>
					) : (
						<MenuRounded
							fontSize="medium"
							className="text-[#002D62] hover:opacity-80 cursor-pointer"
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
					<ul className="text-center  text-[1rem] fond-bold mt-6">
						<div className="text-[1rem] flex flex-col ">
							<Button
								href="/home"
								className=" no-underline p-3 hover:text-sky-900">
								trang chủ
							</Button>
							<Button
								href="/about-us"
								className=" no-underline p-3 hover:text-sky-900">
								giới thiệu
							</Button>

							<Button
								onClick={handleClickService}
								endIcon={<KeyboardArrowDownRounded />}
								className=" p-3 hover:text-sky-900">
								dịch vụ
							</Button>
							<Menu
								id="services"
								anchorEl={anchorEl}
								open={openService}
								onClose={handleCloseService}
								MenuListProps={{ "aria-labelledby": "basic-button" }}>
								{subServicesLinks.map(sub => {
									return (
										<MenuItem key={sub.path}>
											<Link
												href={sub.path}
												className="capitalize no-underline text-[#378CE7] hover:text-sky-900">
												{sub.name}
											</Link>
										</MenuItem>
									);
								})}
							</Menu>

							<Button
								onClick={handleClickSolution}
								endIcon={<KeyboardArrowDownRounded />}
								className=" no-underline p-3 hover:text-sky-900">
								giải pháp
							</Button>
							<Menu
								id="services"
								anchorEl={anchorE2}
								open={openSolution}
								onClose={handleCloseSolution}
								MenuListProps={{ "aria-labelledby": "basic-button" }}>
								{subSolutonLinks.map(sub => {
									return (
										<MenuItem key={sub.path}>
											<Link
												href={sub.path}
												className="capitalize no-underline text-[#378CE7] hover:text-sky-900">
												{sub.name}
											</Link>
										</MenuItem>
									);
								})}
							</Menu>

							{/* <Button
								href="/recruitment"
								className=" no-underline p-3 hover:text-sky-900">
								tuyển dụng
							</Button> */}
							<Button
								href="/news"
								className=" no-underline p-3 hover:text-sky-900">
								tin tức
							</Button>
							<Button
								href="/contact"
								className=" no-underline p-3 hover:text-sky-900">
								liên hệ
							</Button>
						</div>
					</ul>
				</div>
			</nav>
		</header>
	);
}
