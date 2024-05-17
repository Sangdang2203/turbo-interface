"use client";

import Link from "next/link";
import { CustomerMessage } from "types/interfaces";
import { CreateContact } from "@methods/method";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";

import {
	Box,
	Container,
	Grid,
	Tooltip,
	Typography,
	Button,
	TextField,
} from "@mui/material";

import {
	Twitter,
	YouTube,
	LinkedIn,
	Facebook,
	SendRounded,
} from "@mui/icons-material";

import { servicesLinks, solutonLinks } from "@/app/libs/data";
import { useForm } from "react-hook-form";

export default function TheFooter() {
	const {
		register,
		handleSubmit,
		formState: { errors: errors },
	} = useForm<CustomerMessage>();

	return (
		<>
			<Box className="bg-sky-100 text-center">
				<Button
					href="tel:0769999967"
					className="font-bold text-[1.5rem] pulse"
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

						<Box className="hidden lg:flex justify-center">
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

					<Grid
						item
						xs={12}
						md={6}
						className="hidden lg:flex justify-end">
						<form
							className="footerForm form w-[80%] "
							onSubmit={handleSubmit(CreateContact)}>
							<p className="text-sky-900 mt-5">
								(*) Liên hệ ngay với chúng tôi để nhận báo giá tốt nhất
							</p>
							<label>
								<TextField
									{...register("name", {
										required: "Vui lòng điền thông tin.",
										minLength: {
											value: 8,
											message: "Điền it nhất 8 ký tự.",
										},
										maxLength: {
											value: 50,
											message: "Điền tối đa 50 ký tự.",
										},
									})}
									size="small"
									name="name"
									placeholder="(*) Họ và tên khách hàng | Doanh nghiệp"
									type="text"
									fullWidth
								/>
							</label>
							<span className="text-red-700">{errors.name?.message}</span>

							<label>
								<TextField
									{...register("email", {
										required: "Vui lòng điền thông tin.",
										pattern: {
											value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
											message: "Email sai định dạng.",
										},
									})}
									size="small"
									name="email"
									placeholder="(*) Email"
									type="email"
									fullWidth
								/>
							</label>
							<span className="text-red-700">{errors.email?.message}</span>

							<label>
								<TextField
									{...register("phone", {
										required: "Vui lòng điền thông tin.",
										pattern: {
											value: /^\d{10}$/,
											message: "Vui lòng nhập đủ 10 số.",
										},
									})}
									size="small"
									name="phone"
									fullWidth
									placeholder="(*) Số điện thoại"
								/>
							</label>
							<span className="text-red-700">{errors.phone?.message}</span>

							<Button
								type="submit"
								startIcon={<SendRounded className="" />}
								className="submit my-5">
								đăng ký
							</Button>
						</form>
					</Grid>
				</Grid>

				<Typography className="text-center text-[0.75rem] mt-8 text-white">
					Designed by Turbo. Copyright © 2024
				</Typography>
			</Container>
		</>
	);
}
