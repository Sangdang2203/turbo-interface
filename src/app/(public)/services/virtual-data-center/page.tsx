import React from "react";
import ecoPrivateCloud from "../../../images/privateCloud/eco_privatecloud.png";
import cloudGPU_01 from "../../../images/cloudServer/cloudGPU_01.png";
import cloudGPU_02 from "../../../images/cloudServer/cloudGPU_02.png";
import cloudGPU_03 from "../../../images/cloudServer/cloudGPU_03.png";
import vitualDataCenter from "../../../images/cloudServer/virtual_data_center.png";
import cloudServer_icon_01 from "../../../images/cloudServer/cloudServer_icon_01.png";
import {
	Container,
	Box,
	Typography,
	Card,
	Grid,
	Divider,
	TextField,
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
import CustomDialog from "@/components/CustomDialog";

export default function VirtualDataCenter() {
	return (
		<>
			<Container>
				<Box sx={{ textAlign: "center", py: 10 }}>
					<Typography className="text-[2.5rem] font-semibold text-sky-900">
						Virtual Data Center <br /> Trung tâm dữ liệu công nghệ đám mây
					</Typography>
					<Typography>
						Xây dựng trung tâm dữ liệu Virtual Data Center không cần phần cứng
						máy chủ và thiết bị mạng
					</Typography>
					<Box my={5}>
						<CustomDialog />
					</Box>

					<Image
						src={ecoPrivateCloud}
						className="w-full h-auto rounded-xl"
						alt="ecoPrivateCloud"
					/>
				</Box>

				<Typography className="text-[2.5rem] font-semibold text-sky-900 text-center py-10">
					Lợi ích của Virtual Data Center
				</Typography>

				<Box className="container grid sm:grid-cols-3 gap-6 mb-10">
					<Card className="relative rounded-xl hover:shadow-lg cursor-pointer text-sky-900">
						<Box className="flex flex-col justify-center items-center p-3">
							<Typography className="text-[1.5rem] font-bold">
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
							<Typography className="text-[1.5rem] font-bold">
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
							<Typography className="text-[1.5rem] font-bold">
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
						<Box className="grid sm:grid-cols-4 gap-x-6 gap-y-6 mb-10 text-center">
							{vitualDataCenterPrices.map(item => {
								return (
									<Box
										key={item.id}
										className="card_price h-fit">
										<Box className="card__border"></Box>
										<Box className="card_title__container">
											<span className="card_title">{item.title}</span>
											<p className="card_paragraph">{item.price}</p>
										</Box>
										<hr className="line" />
										<ul className="card__list">
											<li className="card__list_item">
												<TaskAltRounded
													color="secondary"
													fontSize="small"
												/>
												<span className="list_text">{item.cpu}</span>
											</li>
											<li className="card__list_item">
												<TaskAltRounded
													color="secondary"
													fontSize="small"
												/>
												<span className="list_text">{item.ram}</span>
											</li>
											<li className="card__list_item">
												<TaskAltRounded
													color="secondary"
													fontSize="small"
												/>
												<span className="list_text">{item.ssd}</span>
											</li>
											<li className="card__list_item">
												<TaskAltRounded
													color="secondary"
													fontSize="small"
												/>
												<span className="list_text">{item.ipv4}</span>
											</li>
											<li className="card__list_item">
												<TaskAltRounded
													color="secondary"
													fontSize="small"
												/>
												<span className="list_text">{item.network}</span>
											</li>
											<li className="card__list_item">
												<TaskAltRounded
													color="secondary"
													fontSize="small"
												/>
												<span className="list_text">{item.userGroup}</span>
											</li>
											<li className="card__list_item">
												<TaskAltRounded
													color="secondary"
													fontSize="small"
												/>
												<span className="list_text">{item.privateLAN}</span>
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
						<Typography className="text-[2rem] font-semibold text-center py-5">
							Bảng giá tài nguyên bổ sung
						</Typography>

						<Box className="grid sm:grid-cols-3 gap-3 mb-10">
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
