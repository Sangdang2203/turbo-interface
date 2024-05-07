import mayChuVatLy from "../../../images/cloudServer/may_chu_vat_ly.jpg";
import cloudGPU_01 from "../../../images/cloudServer/cloudGPU_01.png";
import cloudGPU_02 from "../../../images/cloudServer/cloudGPU_02.png";
import cloudGPU_03 from "../../../images/cloudServer/cloudGPU_03.png";
import dedicateServer from "../../../images/cloudServer/dedicate_server.jpg";
import cloudServer_icon_01 from "../../../images/cloudServer/cloudServer_icon_01.png";

import { Container, Box, Typography, Card, Grid, Button } from "@mui/material";
import {
	dedicatedServerBenefits,
	decicatedServerPrices,
	dedicatedServerQuestions,
} from "app/libs/data";

import Image from "next/image";
import { TaskAltRounded } from "@mui/icons-material";
import CustomDialog from "@/components/CustomDialog";

export default function DedicatedServer() {
	return (
		<>
			<Container>
				<Box sx={{ textAlign: "center", py: 10 }}>
					<Typography className="text-[2.5rem] font-semibold text-sky-900">
						Dedicated Server - Máy chủ riêng của bạn
					</Typography>
					<Typography>
						Máy Chủ Vật Lý với năng lực xử lý vượt trội, hiệu năng cao, khả năng
						chịu tải lớn
					</Typography>
					<Box my={5}>
						<CustomDialog />
					</Box>
					<Image
						src={dedicateServer}
						className="w-full h-auto rounded-xl"
						alt="ecoPrivateCloud"
					/>
				</Box>

				<Typography className="text-[2.5rem] font-semibold text-sky-900 text-center py-10">
					Lợi ích của Dedicated Server
				</Typography>

				<Box className="container grid sm:grid-cols-3 gap-x-6 gap-y-6 mb-10">
					<Card className="relative rounded-xl hover:shadow-lg cursor-pointer  text-sky-900">
						<Box className="flex flex-col justify-center items-center p-3">
							<Typography className="text-[1.5rem] font-bold">
								Ổ cứng SSD Enterprise
							</Typography>
							<Image
								src={cloudGPU_03}
								className="w-52 h-auto my-5"
								alt="Ổ cứng SSD Enterprise"
							/>
							<Typography className="font-extralight text-justify px-3">
								Máy chủ dùng riêng Dedicated Server với ổ cứng SSD Enterprise
								mang lại hiệu năng tối đa, đáp ứng tiêu chuẩn cao của các ứng
								dụng.
							</Typography>
						</Box>
					</Card>

					<Card className="relative rounded-xl hover:shadow-lg cursor-pointer">
						<Box className="flex flex-col justify-center items-center p-3  text-sky-900">
							<Typography className="text-[1.5rem] font-bold">
								Máy chủ chuyên dụng
							</Typography>

							<Image
								src={cloudGPU_01}
								className="w-52 h-auto my-5"
								alt="Máy chủ chuyên dụng"
							/>
							<Typography className="font-extralight text-justify px-3">
								Máy chủ chuyên dụng chính hãng đảm bảo tiêu chuẩn, cấu hình linh
								hoạt phù hợp với nhu cầu đa dạng ứng dụng của doanh nghiệp.
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
							<Typography className="font-extralight text-justify px-3">
								Không cần đầu tư mua máy chủ, linh kiện đắt đỏ. Giảm thiểu chi
								phí vận hành OPEX tối đa. Thay mới linh kiện trong suốt quá
								trình sử dụng.
							</Typography>
						</Box>
					</Card>
				</Box>

				<Card className="rounded-2xl my-10">
					<Grid
						container
						className="shadow-lg ">
						<Grid
							item
							xs={12}
							md={5}
							className="flex flex-col items-center justify-center">
							<Image
								src={mayChuVatLy}
								className="w-full h-full rounded-lg"
								alt="vitualDataCenter"
							/>
						</Grid>

						<Grid
							item
							xs={12}
							md={7}
							className=" text-sky-900">
							<Grid pl={2}>
								{dedicatedServerBenefits.map(item => {
									return (
										<Box
											key={item.id}
											sx={{ display: "flex", alignItems: "center", py: 1 }}>
											<Image
												src={cloudServer_icon_01}
												className="w-16 h-auto mr-4"
												alt="99.99% Uptime"
											/>
											<Box>
												<Typography className="text-[1.3rem] font-semibold ">
													{item.title}
												</Typography>
												<Typography className="pr-5 text-justify">
													{item.desc}
												</Typography>
											</Box>
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
								Bảng giá dịch vụ Dedicated Server
							</Typography>
							<Typography> * Bảng giá chưa bao gồm 10% VAT </Typography>
						</Box>
						<Box className="grid sm:grid-cols-4 gap-x-6 gap-y-6 mb-10 text-center">
							{decicatedServerPrices.map(item => {
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
												<span className="list_text">{item.intel}</span>
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
				</Box>

				<div className="bg-white border border-gray-200 divide-y divide-gray-200 rounded-xl ">
					<Typography className="text-[1.75rem] text-sky-900 font-semibold text-center p-5">
						Các câu hỏi thường gặp
					</Typography>
					{dedicatedServerQuestions.map(item => {
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
