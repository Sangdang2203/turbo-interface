import React from "react";
import ecoPrivateCloud from "@/app/images/privateCloud/eco_privatecloud.png";
import cloudGPU_01 from "@/app/images/cloudServer/cloudGPU_01.png";
import cloudGPU_02 from "@/app/images/cloudServer/cloudGPU_02.png";
import cloudGPU_03 from "@/app/images/cloudServer/cloudGPU_03.png";
import vitualDataCenter from "@/app/images/cloudServer/virtual_data_center.png";
import cloudServer_icon_01 from "@/app/images/cloudServer/cloudServer_icon_01.png";
import {
	Container,
	Box,
	Typography,
	Card,
	Grid,
	Divider,
	FormControlLabel,
	Button,
} from "@mui/material";
import Switch from "@mui/material/Switch";
import Image from "next/image";
import {
	bonusPrices,
	vitualDataCenterQuestions,
	vitualDataCenterBenefits,
	vitualDataCenterPrices,
} from "app/libs/data";
import { TaskAltRounded } from "@mui/icons-material";
import ContactPopup from "@/components/ContactPopup";

export default function VirtualDataCenter() {
	return (
		<>
			<Container>
				<Box sx={{ textAlign: "center", py: 5 }}>
					<Typography className="text-[1.5rem] md:text-[2.5rem] font-semibold text-sky-900">
						Virtual Data Center <br /> Trung tâm dữ liệu công nghệ đám mây
					</Typography>
					<Typography>
						Xây dựng trung tâm dữ liệu Virtual Data Center không cần phần cứng
						máy chủ và thiết bị mạng
					</Typography>
					<Box my={5}>
						<ContactPopup />
					</Box>

					<Image
						src={ecoPrivateCloud}
						className="w-full h-auto rounded-xl"
						alt="ecoPrivateCloud"
					/>
				</Box>

				<Typography className="text-[1.5rem] md:text-[2.5rem] font-semibold text-sky-900 text-center py-10">
					Lợi ích của Virtual Data Center
				</Typography>

				<Box className="container grid sm:grid-cols-3 gap-6 mb-10">
					<Card className="relative rounded-xl hover:shadow-lg cursor-pointer text-sky-900">
						<Box className="flex flex-col justify-center items-center p-3">
							<Typography className="text-[1.2rem] lg:text-[1.5rem] font-bold">
								Minh bạch chi phí
							</Typography>
							<Image
								src={cloudGPU_03}
								className="w-52 h-auto my-5"
								alt="Minh bạch chi phí"
							/>
							<Typography className="text-justify px-3">
								Giao diện trực quan giúp dễ dàng quản lý và giám sát các tài
								nguyên thực dùng trên từng máy chủ. Lập báo cáo thống kê chỉ với
								1 click.
							</Typography>
						</Box>
					</Card>

					<Card className="relative rounded-xl hover:shadow-lg cursor-pointer">
						<Box className="flex flex-col justify-center items-center p-3  text-sky-900">
							<Typography className="text-[1.2rem] lg:text-[1.5rem] font-bold">
								Hoạt động hiệu quả
							</Typography>

							<Image
								src={cloudGPU_01}
								className="w-52 h-auto my-5"
								alt="Hoạt động hiệu quả"
							/>
							<Typography className="text-justify px-3">
								Dễ dàng mở rộng hay thu hẹp tài nguyên nhanh chóng để phù hợp
								với nhu cầu công việc của doanh nghiệp, theo sát nhu cầu kinh
								doanh.
							</Typography>
						</Box>
					</Card>

					<Card className="rounded-xl hover:shadow-lg cursor-pointer">
						<Box className="flex flex-col justify-center items-center p-3  text-sky-900">
							<Typography className="text-[1.2rem] lg:text-[1.5rem] font-bold">
								Tối đa hóa lợi nhuận
							</Typography>
							<Image
								src={cloudGPU_02}
								className="w-52 h-auto my-5"
								alt="Tối đa hóa lợi nhuận"
							/>
							<Typography className="text-justify px-3">
								Không cần đầu tư CAPEX cho phần cứng, thiết bị đắt đỏ. Giảm
								thiểu chi phí vận hành OPEX tối đa. Chỉ chi trả cho tài nguyên
								thực dùng.
							</Typography>
						</Box>
					</Card>
				</Box>

				<Card className="rounded-2xl my-10">
					<Grid
						container
						className="shadow-lg pb-5">
						<Grid
							item
							xs={12}
							md={6}
							className="flex flex-col items-center justify-center">
							<Image
								src={vitualDataCenter}
								className="w-[80%] h-auto"
								alt="vitualDataCenter"
							/>
						</Grid>

						<Grid
							item
							xs={12}
							md={6}
							className=" text-sky-900">
							<Grid pl={2}>
								{vitualDataCenterBenefits.map(item => {
									return (
										<Box
											key={item.id}
											sx={{
												display: "flex",
												flexDirection: "column",
												py: 1,
												px: 3,
											}}>
											<Typography className="text-[1.3rem] font-semibold pt-5">
												{item.title}
											</Typography>
											<Typography className="pr-5 text-justify">
												{item.desc}
											</Typography>
										</Box>
									);
								})}
							</Grid>
						</Grid>
					</Grid>
				</Card>

				<Box>
					<Box>
						<Box
							my={5}
							sx={{ textAlign: "center" }}>
							<Typography className="text-[2rem] font-semibold text-sky-900">
								Bảng giá dịch vụ Virtual Data Center
							</Typography>
							<Typography> * Bảng giá chưa bao gồm 10% VAT </Typography>
						</Box>
						<Box className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10 text-center">
							{vitualDataCenterPrices.map(item => {
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
						<Typography className="text-[1.75rem] font-semibold text-center py-5">
							Bảng giá tài nguyên bổ sung
						</Typography>

						<Box className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-10">
							{bonusPrices.map(item => {
								return (
									<Box
										key={item.title}
										className="min-h-[180px] my-3 px-3 rounded-xl shadow-2xl">
										<Box className="py-5">
											<Typography className="text-[1.5rem] font-bold">
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

				<div className="bg-white border border-gray-200 divide-y divide-gray-200 rounded-xl ">
					<Typography className="text-[1.75rem] text-sky-900 font-semibold text-center p-5">
						Các câu hỏi thường gặp
					</Typography>
					{vitualDataCenterQuestions.map(item => {
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
