"use client";

import {
	Container,
	Box,
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
		<>
			<Box
				role="tabpanel"
				hidden={value !== index}
				id={`simple-tabpanel-${index}`}
				aria-labelledby={`simple-tab-${index}`}
				{...other}>
				{value === index && (
					<Box className="p-3">
						<p>{children}</p>
					</Box>
				)}
			</Box>
		</>
	);
}

function a11yProps(index: number) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
}

export default function CloudBackup() {
	const [month, setMonth] = React.useState(0);
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
						<p className="text-[2.5rem] font-semibold text-sky-900">
							Bảng giá dịch vụ sao lưu dữ liệu đám mây
						</p>
						<p>
							Với Cloud Backup, dữ liệu của bạn sẽ được bảo vệ an toàn khi gặp
							sự cố
						</p>
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
										<p className="text-[1rem] lg:text-[1.5rem] font-bold pb-10">
											{item.title}
										</p>
										<p className="px-3 text-[12px] lg:text-[1rem]">
											{item.hyperv}
										</p>
										<p className="px-3 text-[12px] lg:text-[1rem]">
											{item.ram}
										</p>
										<p className="px-3 text-[12px] lg:text-[1rem]">
											{item.server}
										</p>
										<p className="px-3 text-[12px] lg:text-[1rem]">
											{item.limit}
										</p>
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
							<p className="text-[1rem] lg:text-[1.3rem] font-semibold pt-5">
								Cần sao lưu trên 2TB+ dung lượng?
							</p>
							<p className="w-3/4 text-justify">
								Liên hệ với chúng tôi để được tư vấn gói sao lưu với dung lượng
								lớn và nhiều tính năng hơn.
							</p>
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
								<p className="font-bold text-center">
									{100 * (month || 0)} GB Dung Lượng Sao Lưu
								</p>
								<p className="text-[2rem] text-center text-yellow-600 font-bold">
									{new Intl.NumberFormat("en-US", {
										style: "currency",
										currency: "VND",
									}).format(120000 * (month || 0))}
								</p>
							</CustomTabPanel>
							<CustomTabPanel
								value={value}
								index={1}>
								<p className="font-bold text-center">
									{100 * (month || 0)} GB Dung Lượng Sao Lưu
								</p>
								<p className="text-[2rem] text-center text-yellow-600 font-bold">
									{new Intl.NumberFormat("en-US", {
										style: "currency",
										currency: "VND",
									}).format(78000 * (month || 0))}
								</p>
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
										<p className="text-center lg:text-[1.3rem] font-semibold pt-5">
											Chi phí phù hợp
										</p>
										<p className="mx-auto lg:mx-0 text-justify">
											Không cần lo lắng ngân sách về các cấp giá. Lựa chọn gói
											dung lượng lưu trữ đám mây phù hợp với nhu cầu sao lưu của
											doanh nghiệp.
										</p>
									</Box>
								</Box>

								<Box sx={{ display: "flex", alignItems: "center", py: 1 }}>
									<Box pr={4}>
										<p className="text-center lg:text-[1.3rem] font-semibold">
											Bảo mật đầu cuối
										</p>
										<p className="mx-auto lg:mx-0 text-justify">
											Mục đích chính của sao lưu đám mây là bảo vệ tất cả dữ
											liệu của bạn, vì vậy mã hóa đầu cuối là một tính năng quan
											trọng được tích hợp sẵn.
										</p>
									</Box>
								</Box>

								<Box sx={{ display: "flex", alignItems: "center", py: 1 }}>
									<Box pr={4}>
										<p className="text-center lg:text-[1.3rem] font-semibold">
											Ổn định và tin cậy
										</p>
										<p className="mx-auto lg:mx-0 text-justify">
											Giảm thời gian khôi phục (RPO) và tạo bản sao lưu cực
											nhanh từ ảnh chụp với hệ thống lưu trữ mở rộng không giới
											hạn.
										</p>
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
							<p className="text-[2rem] font-light text-sky-900">
								Bảng giá dịch vụ Cloud Backup (-35%)
							</p>
							<p> * Bảng giá chưa bao gồm 10% VAT </p>
						</Box>

						<Box className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-10 text-center">
							{cloudBackupPrices.map(item => {
								return (
									<div
										key={item.id}
										className="service-card h-fit">
										<div className="header">
											<span className="title">{item.title}</span>
											<span className="price">{item.price}</span>
										</div>
										<ul className="lists">
											{item.details.map(detail => {
												return (
													<li
														key={detail.name}
														className="list">
														<svg
															xmlns="http://www.w3.org/2000/svg"
															viewBox="0 0 20 20"
															fill="currentColor">
															<path
																fillRule="evenodd"
																d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
																clipRule="evenodd"></path>
														</svg>
														<span>{detail.name}</span>
													</li>
												);
											})}
										</ul>
										<Button
											href="tel:0769999967"
											type="button"
											className="action">
											Liên hệ ngay
										</Button>
									</div>
								);
							})}
						</Box>
					</Box>

					<Box className=" text-sky-900">
						<p className="text-[1.75rem] font-semibold text-center py-5">
							Bảng giá tài nguyên bổ sung
						</p>

						<Box className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
							{cloudBackupBonus.map(item => {
								return (
									<Box
										key={item.id}
										className="min-h-[180px] my-3 px-3 rounded-xl shadow-2xl">
										<Box className="py-5">
											<p className="text-[1rem] font-bold">{item.title}</p>
											<p className="">{item.bonus}</p>
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
					<p className="text-[1.75rem] text-sky-900 font-semibold text-center p-5">
						Các câu hỏi thường gặp
					</p>
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
