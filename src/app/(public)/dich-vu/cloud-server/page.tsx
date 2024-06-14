import Image from "next/image";
import {
	Box,
	Button,
	Card,
	Container,
	Grid,
	Typography,
	FormControlLabel,
	Divider,
} from "@mui/material";
import Switch, { SwitchProps } from "@mui/material/Switch";
import promotion from "@/app/images/promotion.jpg";
import cloudServer_icon_01 from "@/app/images/cloudServer/cloudServer_icon_01.png";
import cloudServer_icon_02 from "@/app/images/cloudServer/cloudServer_icon_02.png";
import cloudServer_icon_03 from "@/app/images/cloudServer/cloudServer_icon_03.png";
import cloudServer_icon_04 from "@/app/images/cloudServer/cloudServer_icon_04.png";
import cloudServer_01 from "@/app/images/cloudServer/cloudServer_01.png";
import cloudServer_02 from "@/app/images/cloudServer/cloudServer_02.png";
import cloudServer_03 from "@/app/images/cloudServer/cloudServer_03.png";
import cloudServer_07 from "@/app/images/cloudServer/cloudServer_07.png";
import { TaskAltRounded } from "@mui/icons-material";
import {
	cloudServerPrices,
	bonusPrices,
	cloudServerQuestions,
} from "app/libs/data";

export default function CloudServer() {
	return (
		<>
			<Container>
				<Box sx={{ textAlign: "center", py: 10 }}>
					<Typography className="text-[2.5rem] font-semibold text-sky-900">
						ECOLOUD SERVER
					</Typography>
					<Typography>
						Khởi tạo và sử dụng máy chủ Cloud Server chỉ trong 45 giây!
					</Typography>
				</Box>

				<Box className="container grid sm:grid-cols-3 gap-3 mb-10">
					<Card className="relative rounded-xl hover:shadow-lg cursor-pointer text-sky-900">
						<Box className="flex flex-col justify-center items-center p-3">
							<Typography className="text-[1.25rem] font-bold lg:text-[1.5rem]">
								Giao diện đơn giản
							</Typography>
							<Image
								src={cloudServer_01}
								className="w-full h-auto"
								alt="Giao diện đơn giản"
							/>
							<Typography className="font-extralight text-justify px-3">
								Giao diện EcoCloud trực quan dễ dàng quản lý nhiều Cloud Server
								và giám sát các thông số tài nguyên sử dụng trên từng máy chủ
							</Typography>
						</Box>
					</Card>

					<Card className="relative rounded-xl hover:shadow-lg cursor-pointer">
						<Box className="flex flex-col justify-center items-center p-3  text-sky-900">
							<Typography className="text-[1.25rem] font-bold lg:text-[1.5rem]">
								Hiệu năng vượt trội
							</Typography>

							<Image
								src={cloudServer_02}
								className="w-full h-auto"
								alt="Hiệu năng vượt trội"
							/>
							<Typography className="font-extralight text-justify px-3">
								EcoCloud sử dụng 100% Enterprise SSD tạo nên kho lưu trữ siêu
								hiệu năng IOPS cao, cùng tính năng tự điều chỉnh và không có
								điểm lỗi đơn
							</Typography>
						</Box>
					</Card>

					<Card className="rounded-xl hover:shadow-lg cursor-pointer">
						<Box className="flex flex-col justify-center items-center p-3  text-sky-900">
							<Typography className="text-[1.25rem] font-bold lg:text-[1.5rem]">
								IDC tiêu chuẩn 3
							</Typography>
							<Image
								src={cloudServer_03}
								className="w-full h-auto"
								alt="IDC tiêu chuẩn 3"
							/>
							<Typography className="font-extralight text-justify px-3">
								Hệ thống Ecocloud đặt tại các IDC tiêu chuẩn Tier - 3 như
								Viettel và VNPT đảm bảo đường truyền băng thông rộng 10+ Gbps
								siêu tốc độ
							</Typography>
						</Box>
					</Card>
				</Box>

				<Image
					src={promotion}
					className="w-full h-auto rounded-2xl"
					alt="promotion"
				/>

				<Card className="hidden lg:block rounded-2xl my-10">
					<Grid
						container
						className="shadow-lg pb-5">
						<Grid
							item
							xs={12}
							md={5}
							className="flex flex-col items-center justify-center">
							<Image
								src={cloudServer_07}
								className="w-72 h-auto"
								alt="cloudServer_07"
							/>
						</Grid>

						<Grid
							item
							xs={12}
							md={7}
							className=" text-sky-900">
							<Grid pl={8}>
								<Box sx={{ display: "flex", alignItems: "center", py: 1 }}>
									<Image
										src={cloudServer_icon_01}
										className="w-16 h-auto mr-4"
										alt=""
									/>
									<Box>
										<Typography className="text-[1.3rem] font-semibold pt-5">
											99.99% Uptime
										</Typography>
										<Typography className="w-3/4 text-justify">
											Cloud Server luôn hoạt động với cam kết chất lượng dịch vụ
											99.99% uptime, đáp ứng nhu cầu luôn kết nối.
										</Typography>
									</Box>
								</Box>

								<Box sx={{ display: "flex", alignItems: "center", py: 1 }}>
									<Image
										src={cloudServer_icon_02}
										className="w-16 h-auto mr-4"
										alt=""
									/>
									<Box>
										<Typography className="text-[1.3rem] font-semibold">
											Hỗ trợ phòng chống DDoS
										</Typography>
										<Typography className="w-3/4 text-justify">
											Mục đích chính EcoCloud Server là luôn luôn hoạt động, vì
											vậy phòng chống DDoS là 1 tính năng quan trọng được tích
											hợp sẵn
										</Typography>
									</Box>
								</Box>

								<Box sx={{ display: "flex", alignItems: "center", py: 1 }}>
									<Image
										src={cloudServer_icon_03}
										className="w-16 h-auto mr-4"
										alt=""
									/>
									<Box>
										<Typography className="text-[1.3rem] font-semibold">
											Cấu hình linh hoạt
										</Typography>
										<Typography className="w-3/4 text-justify">
											Lựa chọn gói dịch vụ phù hợp với nhu cầu ban đầu, thay đổi
											cấu hình linh hoạt và nhanh chóng đáp ứng nhu cầu ngày
											càng phát triển
										</Typography>
									</Box>
								</Box>

								<Box sx={{ display: "flex", alignItems: "center", py: 1 }}>
									<Image
										src={cloudServer_icon_04}
										className="w-16 h-auto mr-4"
										alt=""
									/>
									<Box>
										<Typography className="text-[1.3rem] font-semibold">
											Hỗ trợ dịch vụ 24/7
										</Typography>
										<Typography className="w-3/4 text-justify">
											Bất kể khi nào bạn cần hỗ trợ, đội ngũ EcoCloud luôn có
											mặt và sẽ phản hồi trong 15 phút
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
							<Typography className="text-[1.5rem] md:text-[2rem] font-semibold text-sky-900">
								Bảng giá dịch vụ Cloud Server
							</Typography>
							<Typography> * Bảng giá chưa bao gồm 10% VAT </Typography>
						</Box>

						<Box className="grid sm:grid-cols-3 xl:grid-cols-5 gap-3 mb-10 text-center">
							{cloudServerPrices.map(item => {
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
						<Typography className="text-[1.5rem] md:text-[2rem] font-semibold text-center py-5">
							Bảng giá tài nguyên bổ sung
						</Typography>

						<Box className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mb-10">
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

				{/* Q & A */}
				<div className="bg-white border border-gray-200 divide-y divide-gray-200 rounded-xl ">
					<Typography className="text-[1.75rem] text-sky-900 font-semibold text-center p-5">
						Các câu hỏi thường gặp
					</Typography>
					{cloudServerQuestions.map(item => {
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
