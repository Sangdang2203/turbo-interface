"use client";

import {
	Container,
	Box,
	Typography,
	Card,
	Grid,
	Divider,
	FormControlLabel,
	Tab,
	Tabs,
	Slider,
	Button,
} from "@mui/material";
import Switch from "@mui/material/Switch";
import { TaskAltRounded } from "@mui/icons-material";
import {
	cloudBackupPrices,
	cloudBackupBonus,
	cloudBackupQuestions,
	cloudBackupPackage,
} from "app/libs/data";
import React from "react";
import ContactPopup from "@/components/ContactPopup";

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

function CustomTabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<Box
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}>
			{value === index && (
				<Box className="p-3">
					<Typography>{children}</Typography>
				</Box>
			)}
		</Box>
	);
}

function a11yProps(index: number) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
}

export default function CloudBackup() {
	const [month, setMonth] = React.useState(1);
	const [value, setValue] = React.useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	const handleSliderChange = (event: Event, newValue: number | number[]) => {
		setMonth(newValue as number);
	};
	return (
		<>
			<Container>
				<Box sx={{ textAlign: "center", py: 10 }}>
					<Box>
						<Typography className="text-[2.5rem] font-semibold text-sky-900">
							Bảng giá dịch vụ sao lưu dữ liệu đám mây
						</Typography>
						<Typography>
							Với Cloud Backup, dữ liệu của bạn sẽ được bảo vệ an toàn khi gặp
							sự cố
						</Typography>
					</Box>

					<Box mt={5}>
						<ContactPopup />
					</Box>
				</Box>

				{/* cloud backup packages */}
				<Box className="container grid md:grid-cols-3 gap-3 mb-10">
					{cloudBackupPackage.map(item => {
						return (
							<Card
								key={item.id}
								className="relative rounded-xl hover:shadow-lg cursor-pointer text-sky-900">
								<Box className="themeCard flex flex-col justify-center items-center p-3">
									<Box
										key={item.id}
										className="text-center">
										<Typography className="text-[1rem] lg:text-[1.5rem] font-bold pb-10">
											{item.title}
										</Typography>
										<Typography className="px-3 text-[12px] lg:text-[1rem]">
											{item.hyperv}
										</Typography>
										<Typography className="px-3 text-[12px] lg:text-[1rem]">
											{item.ram}
										</Typography>
										<Typography className="px-3 text-[12px] lg:text-[1rem]">
											{item.server}
										</Typography>
										<Typography className="px-3 text-[12px] lg:text-[1rem]">
											{item.limit}
										</Typography>
									</Box>
								</Box>
							</Card>
						);
					})}
				</Box>

				<Card className="rounded-2xl my-10">
					<Grid
						container
						className="shadow-lg pb-5">
						<Grid
							item
							xs={12}
							md={5}
							className="flex flex-col items-center justify-center">
							<Typography className="text-[1rem] lg:text-[1.3rem] font-semibold pt-5">
								Cần sao lưu trên 2TB+ dung lượng?
							</Typography>
							<Typography className="w-3/4 text-justify">
								Liên hệ với chúng tôi để được tư vấn gói sao lưu với dung lượng
								lớn và nhiều tính năng hơn.
							</Typography>
							<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
								<Tabs
									className="pt-5"
									value={value}
									onChange={handleChange}
									aria-label="basic tabs example">
									<Tab
										label="Hàng tháng"
										{...a11yProps(0)}
									/>
									<Tab
										label="Hàng năm"
										{...a11yProps(1)}
									/>
								</Tabs>
							</Box>
							<CustomTabPanel
								value={value}
								index={0}>
								<Typography className="font-bold text-center">
									{100 * month} GB Dung Lượng Sao Lưu
								</Typography>
								<Typography className="text-[2rem] text-center text-yellow-600 font-bold">
									{new Intl.NumberFormat("en-US", {
										style: "currency",
										currency: "VND",
									}).format(120000 * month)}
								</Typography>
							</CustomTabPanel>
							<CustomTabPanel
								value={value}
								index={1}>
								<Typography className="font-bold text-center">
									{100 * month} GB Dung Lượng Sao Lưu
								</Typography>
								<Typography className="text-[2rem] text-center text-yellow-600 font-bold">
									{new Intl.NumberFormat("en-US", {
										style: "currency",
										currency: "VND",
									}).format(78000 * month)}
								</Typography>
							</CustomTabPanel>

							<Box sx={{ width: 300 }}>
								<Slider
									value={typeof month === "number" ? month : 0}
									min={1}
									max={20}
									onChange={handleSliderChange}
									aria-labelledby="input-slider"
								/>
							</Box>
						</Grid>

						<Grid
							item
							xs={12}
							md={7}
							className=" text-sky-900">
							<Grid className="pl-6 md:pl-24">
								<Box sx={{ display: "flex", alignItems: "center", py: 1 }}>
									<Box pr={4}>
										<Typography className="text-center lg:text-[1.3rem] font-semibold pt-5">
											Chi phí phù hợp
										</Typography>
										<Typography className="mx-auto lg:mx-0 text-justify">
											Không cần lo lắng ngân sách về các cấp giá. Lựa chọn gói
											dung lượng lưu trữ đám mây phù hợp với nhu cầu sao lưu của
											doanh nghiệp.
										</Typography>
									</Box>
								</Box>

								<Box sx={{ display: "flex", alignItems: "center", py: 1 }}>
									<Box pr={4}>
										<Typography className="text-center lg:text-[1.3rem] font-semibold">
											Bảo mật đầu cuối
										</Typography>
										<Typography className="mx-auto lg:mx-0 text-justify">
											Mục đích chính của sao lưu đám mây là bảo vệ tất cả dữ
											liệu của bạn, vì vậy mã hóa đầu cuối là một tính năng quan
											trọng được tích hợp sẵn.
										</Typography>
									</Box>
								</Box>

								<Box sx={{ display: "flex", alignItems: "center", py: 1 }}>
									<Box pr={4}>
										<Typography className="text-center lg:text-[1.3rem] font-semibold">
											Ổn định và tin cậy
										</Typography>
										<Typography className="mx-auto lg:mx-0 text-justify">
											Giảm thời gian khôi phục (RPO) và tạo bản sao lưu cực
											nhanh từ ảnh chụp với hệ thống lưu trữ mở rộng không giới
											hạn.
										</Typography>
									</Box>
								</Box>
							</Grid>
						</Grid>
					</Grid>
				</Card>

				{/* service price */}
				<Box>
					<Box>
						<Box
							my={5}
							sx={{ textAlign: "center" }}>
							<Typography className="text-[2rem] font-light text-sky-900">
								Bảng giá dịch vụ Cloud Backup (-35%)
							</Typography>
							<Typography> * Bảng giá chưa bao gồm 10% VAT </Typography>
						</Box>

						<Box className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-10 text-center">
							{cloudBackupPrices.map(item => {
								return (
									<Box
										key={item.title}
										className="card_price h-fit">
										<Box className="card__border"></Box>
										<Box className="card_title__container">
											<span className="card_title">{item.title}</span>
											<p className="card_paragraph">{item.price}</p>
										</Box>
										<hr className="line" />
										<ul className="card__list">
											<li className="card__list_item">
												<TaskAltRounded color="secondary" />
												<span className="list_text">{item.hyperv}</span>
											</li>
											<li className="card__list_item">
												<TaskAltRounded color="secondary" />
												<span className="list_text">{item.ram}</span>
											</li>
											<li className="card__list_item">
												<TaskAltRounded color="secondary" />
												<span className="list_text">{item.server}</span>
											</li>
											<li className="card__list_item">
												<TaskAltRounded color="secondary" />
												<span className="list_text">{item.server}</span>
											</li>
											<li className="card__list_item">
												<TaskAltRounded color="secondary" />
												<span className="list_text">{item.limit}</span>
											</li>
										</ul>
										<Button
											href="tel:0769999967"
											className="button">
											Liên hệ ngay
										</Button>
									</Box>
								);
							})}
						</Box>
					</Box>

					<Box className=" text-sky-900">
						<Typography className="text-[1.75rem] font-semibold text-center py-5">
							Bảng giá tài nguyên bổ sung
						</Typography>

						<Box className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
							{cloudBackupBonus.map(item => {
								return (
									<Box
										key={item.id}
										className="min-h-[180px] my-3 px-3 rounded-xl shadow-2xl">
										<Box className="py-5">
											<Typography className="text-[1rem] font-bold">
												{item.title}
											</Typography>
											<Typography className="">{item.bonus}</Typography>
										</Box>
										<Divider />
										<FormControlLabel
											className="py-3"
											control={
												<Switch
													size="medium"
													color="success"
													checked
												/>
											}
											label={item.price}
										/>
									</Box>
								);
							})}
						</Box>
					</Box>
				</Box>

				{/* Q & A */}
				<div className="bg-white border border-gray-200 divide-y divide-gray-200 rounded-xl ">
					<Typography className="text-[1.75rem] text-sky-900 font-semibold text-center p-5">
						Các câu hỏi thường gặp
					</Typography>
					{cloudBackupQuestions.map(item => {
						return (
							<div
								key={item.id}
								className="space-y-12 px-2 xl:px-16 py-5">
								<div className="mt-1 flex">
									<div>
										<div className="flex items-center h-16 border-l-4 border-blue-600">
											<span className="text-4xl text-blue-600 px-4">Q.</span>
										</div>
										<div className="flex items-center h-16 border-l-4 border-gray-400">
											<span className="text-4xl text-gray-400 px-4">A.</span>
										</div>
									</div>
									<div>
										<div className="flex items-center h-16">
											<span className="text-lg text-blue-600 font-bold">
												{item.question}
											</span>
										</div>
										<div className="flex items-center py-2">
											<span className="text-gray-500">{item.answer}</span>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</Container>
		</>
	);
}
