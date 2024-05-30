import icon_01 from "@/app/images/privateCloud/icon_01.png";
import icon_02 from "@/app/images/privateCloud/icon_02.png";
import ContactPopup from "@/components/ContactPopup";
import { ReadMoreRounded, TaskAltRounded } from "@mui/icons-material";
import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	Container,
	Grid,
	Typography,
} from "@mui/material";
import {
	vitualDataCenterBenefits,
	privateCloudQuestions,
	privateCloudPrices,
} from "app/libs/data";
import Image from "next/image";
import * as React from "react";

const PrivateCloud = () => {
	return (
		<Container>
			<Box sx={{ textAlign: "center", marginX: "auto", paddingY: 5 }}>
				<Typography className="text-[2rem] text-center text-sky-900 font-semibold">
					Nền tảng Private Cloud mạnh mẽ, ổn định & hiệu năng cao
				</Typography>
				<Typography className="text-[1.25rem] w-3/4 mx-auto leading-relaxed text-gray-500">
					Sở hữu sức mạnh không giới hạn của điện toán đám mây một cách dễ dàng
					với Private Cloud chỉ dành riêng cho doanh nghiệp của bạn.
				</Typography>
				<Box my={5}>
					<iframe
						className="rounded-xl mx-auto"
						width="100%"
						height="500px"
						title="Vaidio  AI Vision 7.0"
						src="https://www.youtube.com/embed/vx24uYpn3hw?si=aO0F5ocLlAhjuBHp"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowFullScreen></iframe>
				</Box>
			</Box>

			<Box>
				<Box textAlign="center">
					<Typography className="p-3 bg-green-50 text-green-500 uppercase w-fit rounded-full">
						Lợi ích của private cloud
					</Typography>
					<Typography className="my-3 text-[2rem]">
						Lợi ích của Private Cloud là tính linh hoạt, khả năng cung cấp tài
						nguyên được đảm bảo, bảo mật mạnh mẽ…
					</Typography>
				</Box>

				<Box
					my={5}
					className="container grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
					<Card className="relative px-1 rounded-md hover:shadow-lg cursor-pointer">
						<CardContent>
							<Box className="mb-16">
								<Typography className="text-[1rem] p-3 bg-sky-100 text-sky-700 text-center uppercase w-full rounded-full font-normal">
									Đơn giản
								</Typography>
								<Typography className="font-light py-3">
									Một sản phẩm mạnh mẽ, với một giao diện quản lý duy nhất để
									giảm độ phức tạp, và chi phí vận hành.
								</Typography>
							</Box>
						</CardContent>
						<CardActions className="absolute bottom-1 left-1">
							<Button
								href="https://opennebula.io/discover/"
								className="hover:border-blue-400 p-3"
								variant="outlined"
								size="small"
								endIcon={<ReadMoreRounded />}>
								Tìm hiểu thêm
							</Button>
						</CardActions>
					</Card>

					<Card className="relative px-1 rounded-md hover:shadow-lg cursor-pointer">
						<CardContent>
							<Box className="mb-16">
								<Typography className="text-[1rem] p-3 bg-sky-100 text-sky-700 text-center uppercase w-full rounded-full font-normal">
									Công nghệ HCI
								</Typography>
								<Typography className="font-light py-3">
									Công nghệ siêu hội tụ gộp các thành phần điện toán một môi
									trường chung, tận dụng tối đa tài nguyên.
								</Typography>
							</Box>
						</CardContent>
						<CardActions className="absolute bottom-1 left-1">
							<Button
								href="https://en.wikipedia.org/wiki/Hyper-converged_infrastructure"
								className="hover:border-blue-400 p-3"
								variant="outlined"
								size="small"
								endIcon={<ReadMoreRounded />}>
								Tìm hiểu thêm
							</Button>
						</CardActions>
					</Card>

					<Card className="relative px-1 rounded-md hover:shadow-lg cursor-pointer">
						<CardContent>
							<Box className="mb-16">
								<Typography className="text-[1rem] p-3 bg-sky-100 text-sky-700 text-center uppercase w-full rounded-full font-normal">
									Đa nền tảng
								</Typography>
								<Typography className="font-light py-3">
									Xây dựng và quản lý private cloud trên đa nền ảo hóa VMWare,
									KVM, LXD hoặc Firecracker.
								</Typography>
							</Box>
						</CardContent>
						<CardActions className="absolute bottom-1 left-1">
							<Button
								href="https://opennebula.io/discover/"
								className="hover:border-blue-400 p-3"
								variant="outlined"
								size="small"
								endIcon={<ReadMoreRounded />}>
								Tìm hiểu thêm
							</Button>
						</CardActions>
					</Card>

					<Card className="relative px-1 rounded-md hover:shadow-lg cursor-pointer">
						<CardContent>
							<Box className="mb-16">
								<Typography className="text-[1rem] p-3 bg-sky-100 text-sky-700 text-center uppercase w-full rounded-full font-normal">
									Hỗ trợ nhanh chóng
								</Typography>
								<Typography className="font-light py-3">
									Mọi thành phần được tài liệu hóa đầy đủ với minh họa. Hỗ trợ
									trực tiếp tại địa phương và từ hãng phát triển.
								</Typography>
							</Box>
						</CardContent>
						<CardActions className="absolute bottom-1 left-1">
							<Button
								href="/contact"
								className="hover:border-blue-400 p-3"
								variant="outlined"
								size="small"
								endIcon={<ReadMoreRounded />}>
								Tìm hiểu thêm
							</Button>
						</CardActions>
					</Card>
				</Box>
			</Box>

			<Box>
				<Box
					my={5}
					sx={{ textAlign: "center" }}>
					<Typography className="text-[2rem] font-semibold text-sky-900">
						Bảng giá dịch vụ Private Cloud
					</Typography>
					<Typography> * Bảng giá chưa bao gồm 10% VAT </Typography>
				</Box>

				<Box className="grid sm:grid-cols-2 xl:grid-cols-4 gap-3 mb-10 text-center">
					{privateCloudPrices.map(item => {
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

			<Box>
				<Typography className="text-[2rem] text-sky-900 text-center font-semibold">
					Sẵn sàng triển khai Private Cloud?
				</Typography>
				<Typography className="text-[1rem] md:text-[1.5rem] text-center w-5/6 mx-auto ">
					Dịch vụ Private Cloud hoạt động giống như trung tâm dữ liệu của riêng
					bạn, có thể kiểm soát và định cấu hình theo nhu cầu của tổ chức mình.
				</Typography>

				<Card className="my-5 shadow-2xl rounded-xl">
					<Grid container>
						<Grid
							item
							xs={12}
							md={7}
							className="flex flex-col items-center justify-center">
							<Box
								textAlign="center"
								my={3}>
								<Typography className="text-[4rem] text-yellow-500">
									-30%
								</Typography>
								<Typography className="text-xl text-gray-400">
									giảm chi phí đầu tư và vận hành
								</Typography>
							</Box>

							<Box
								my={3}
								display="flex"
								justifyContent="space-around"
								width="60%">
								<Box className="flex flex-col items-center justify-center">
									<Image
										src={icon_01}
										className="w-16 h-16"
										alt=""
									/>
									<Typography className="font-semibold">
										Cấu hình linh hoạt
									</Typography>
								</Box>
								<Box className="flex flex-col items-center justify-center">
									<Image
										src={icon_02}
										className="w-16 h-16"
										alt=""
									/>
									<Typography className="font-semibold">
										Hiệu năng cao
									</Typography>
								</Box>
							</Box>

							<Box className="my-5">
								<ContactPopup />
							</Box>
						</Grid>

						<Grid
							item
							xs={12}
							md={5}
							className="bg-sky-600 py-5 px-auto shadow-2xl rounded-xl">
							<Grid>
								{vitualDataCenterBenefits.map(item => {
									return (
										<Box
											key={item.id}
											my={2}
											px={2}>
											<Typography className="text-[1.3rem] font-semibold text-white">
												{" "}
												{item.title}{" "}
											</Typography>
											<Typography className="text-white">
												{" "}
												{item.desc}{" "}
											</Typography>
										</Box>
									);
								})}
							</Grid>
						</Grid>
					</Grid>
				</Card>
			</Box>

			{/* FAQ */}
			<div className="mt-20 bg-white border border-gray-200 divide-y divide-gray-200 rounded-xl ">
				<Typography className="text-[1.75rem] text-sky-900 font-semibold text-center p-5">
					Các câu hỏi thường gặp
				</Typography>
				{privateCloudQuestions.map(item => {
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
	);
};

export default PrivateCloud;
