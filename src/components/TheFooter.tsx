"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import {
	Box,
	Container,
	Grid,
	Tooltip,
	Typography,
	Button,
} from "@mui/material";
import { Twitter, YouTube, LinkedIn, Facebook } from "@mui/icons-material";

const solutonLinks = [
	{
		path: "https://v2.aivisionviet.vn/ai-video-search",
		name: "Video Search",
	},
	{ path: "https://aivisionviet.vn/vaidio-data", name: "Quản Lý Dữ Liệu" },
	{
		path: "https://aivisionviet.vn/vaidio-command-center",
		name: "Quản Lý Tập Trung",
	},
	{
		path: "https://v2.aivisionviet.vn/nhan-dien-bien-so",
		name: "Nhận Dạng Biển Số",
	},
	{
		path: "https://v2.aivisionviet.vn/nhan-dang-vat-the",
		name: "Nhận Dạng Vật Thể",
	},
	{
		path: "https://v2.aivisionviet.vn/kiem-soat-luu-luong",
		name: "Kiểm Soát Lưu Lượng",
	},
	{
		path: "https://v2.aivisionviet.vn/nhan-dien-khuon-mat",
		name: "Nhận Diện Khuôn Mặt",
	},
	{
		path: "https://v2.aivisionviet.vn/phat-hien-bat-thuong",
		name: "Nhận Diện Bất Thường",
	},
];

const servicesLinks = [
	{ path: "/services/cloudflare", name: "cloudflare" },
	{ path: "/services/cloud-server", name: "cloud server" },
	{ path: "/services/cloud-backup", name: "cloud backup" },
	{ path: "/services/dedicated-server", name: "dedicated server" },
	{ path: "/services/disaster-recovery", name: "disaster recovery" },
	{ path: "/services/virtual-data-center", name: "vitual data center" },
	{ path: "/services/private-cloud", name: "private cloud service" },
	{ path: "/services/cloud-backup-recovery", name: "cloud backup & recovery" },
];

export default function TheFooter() {
	const pathname = usePathname();
	return (
		<>
			<Box className="bg-sky-100 text-center">
				<Button
					href="tel:0769999967"
					className="font-bold text-[1.5rem]"
					startIcon={<PhoneInTalkIcon fontSize="large" />}>
					Hotline: +84 76 9999 967
				</Button>
			</Box>
			<Container className="max-w-full text-white py-5 h-auto background-footer">
				<Grid container>
					<Grid
						item
						xs={12}
						md={6}>
						<Typography
							paragraph
							className="text-lg text-center">
							&quot; Với 10 năm kinh nghiệm, công ty Turbo Solutions chuyên cung
							cấp các giải pháp, ứng dụng điện toán đám mây hàng đầu Việt Nam.
							&quot;
						</Typography>
						<Box className="flex justify-center my-5">
							<Tooltip title="Twitter">
								<Link
									href="/"
									target="_blank"
									className="mx-1">
									<Twitter className="text-white" />
								</Link>
							</Tooltip>
							<Tooltip title="Facebook">
								<Link
									href="https://www.facebook.com/ecocloud.vn"
									target="_blank"
									className="mx-1">
									<Facebook color="primary" />
								</Link>
							</Tooltip>
							<Tooltip title="Youtube">
								<Link
									href="https://www.youtube.com/@turbosolutions506"
									target="_blank"
									className="mx-1">
									<YouTube color="error" />
								</Link>
							</Tooltip>
							<Tooltip title="LinkedIn">
								<Link
									href="/"
									target="_blank"
									className="mx-1">
									<LinkedIn color="info" />
								</Link>
							</Tooltip>
						</Box>
					</Grid>

					<Grid
						item
						xs={12}
						md={6}
						className="hidden sm:block">
						<Box sx={{ display: "flex", justifyContent: "center" }}>
							<Box mx={2}>
								<Typography className="text-lg uppercase">giải pháp</Typography>
								{solutonLinks.map(link => {
									return (
										<Box key={link.name}>
											<Link
												className="text-sm no-underline text-white hover:text-yellow-500 duration-500"
												href={link.path}>
												{link.name}
											</Link>
										</Box>
									);
								})}
							</Box>
							<Box mx={2}>
								<Typography className="text-lg uppercase">dịch vụ</Typography>
								{servicesLinks.map(link => {
									return (
										<Box key={link.name}>
											<Link
												className="text-sm capitalize no-underline text-white hover:text-yellow-500 duration-500"
												href={link.path}>
												{link.name}
											</Link>
										</Box>
									);
								})}
							</Box>
						</Box>
					</Grid>
				</Grid>

				<Typography className="text-center text-[0.75rem] mt-8 text-white">
					Designed by Turbo. Copyright © 2024
				</Typography>
			</Container>
		</>
	);
}
