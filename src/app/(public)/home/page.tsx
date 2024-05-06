"use client";

import React from "react";
import Image from "next/image";
import Switch from "@mui/material/Switch";
import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	Chip,
	Container,
	Divider,
	FormControlLabel,
	Grid,
	Link,
	Typography,
} from "@mui/material";
import { PublicRounded } from "@mui/icons-material";
import logoTurbo from "../../images/logoTurbo.png";
import cloudServer from "../../images/cloudServer.png";
import cloudCamera from "../../images/cloudCamera.png";
import Backup from "../../images/Backup.png";
import promotion from "../../images/promotion.jpg";
import feedback_01 from "../../images/feedback_01.png";
import feedback_02 from "../../images/feedback_02.png";
import feedback_03 from "../../images/feedback_03.png";
import { homeServices } from "app/libs/data";
import CustomDialog from "@/components/CustomDialog";

export default function HomePage() {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	return (
		<Box>
			<Box
				textAlign="center"
				my={5}
				className="text-white theme mt-[10vh]">
				<Typography className="text-[2.5rem] font-semibold">
					Ứng dụng | Dịch vụ | Giải pháp
				</Typography>
				<Typography className="text-[2rem] font-extralight">
					điện toán đám mây chất lượng hàng đầu.
				</Typography>
				<Typography className="text-center text-[1.75rem] font-light w-3/4 mx-auto my-5">
					Công ty Turbo Solutions chung tay cùng quý doanh nghiệp thực hiện
					chuyển đổi số bằng cách tích hợp các công nghệ thông minh 4.0, cùng
					đạt mục tiêu thắng lợi.
				</Typography>

				<Container className="container grid lg:grid-cols-4 gap-6 mt-10">
					{homeServices.map(item => {
						return (
							<div
								key={item.id}
								className="cardBox">
								<div className="card">
									<div className="h4">
										{item.title}

										<p>...</p>
									</div>

									<div className="content">
										<div className="h3">{item.sub}</div>
										<p>{item.desc}</p>
									</div>
								</div>
							</div>
						);
					})}
				</Container>
			</Box>

			<Box
				my={10}
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					textAlign: "center",
				}}>
				<Typography className="py-3 px-5 bg-sky-50 text-sky-700 uppercase w-fit rounded-full">
					dịch vụ điện toán đám mây
				</Typography>
				<Typography className="text-[1.75rem] font-light w-2/3 text-center mx-auto">
					Công ty Turbo Solutions cung cấp dịch vụ điện toán đám mây đa dạng và
					các ứng dụng số phù hợp nhiều lĩnh vực.
				</Typography>
			</Box>

			<Container className="container grid sm:grid-cols-3 gap-x-6 gap-y-6 mb-10">
				<Card className="relative rounded-xl hover:shadow-lg cursor-pointer">
					<CardContent className="mb-16">
						<Box className="flex items-start">
							<Image
								src={cloudServer}
								className="w-28 h-28"
								alt="cloudServer"
							/>
							<Box>
								<Typography className="text-[1.5rem]">Cloud Server</Typography>
								<Typography>
									Cụm máy chủ Cloud với Firewall cùng mạng nội bộ riêng biệt,
									trở thành trung tâm dữ liệu ảo cho doanh nghiệp thực hiện
									chuyển đổi số.
								</Typography>
							</Box>
						</Box>
					</CardContent>
					<CardActions className="absolute bottom-1 left-1">
						<Button
							href="https://ecocloud.vn/bang-gia-cloud-server/"
							className="fancy hover:opacity-80">
							<span className="top-key"></span>
							<span className="text">Tìm hiểu thêm</span>
							<span className="bottom-key-1"></span>
							<span className="bottom-key-2"></span>
						</Button>
					</CardActions>
				</Card>

				<Card className="relative rounded-xl hover:shadow-lg cursor-pointer">
					<CardContent className="mb-16">
						<Box className="flex items-start">
							<Image
								src={Backup}
								className="w-32 h-32"
								alt="backupDR"
							/>
							<Box>
								<Typography className="text-[1.5rem]">
									Backup & DR Site
								</Typography>
								<Typography>
									Sao lưu và khôi phục dữ liệu trên Cloud. Thực hiện Disaster
									Recovery Site với chi phí thấp.
								</Typography>
							</Box>
						</Box>
					</CardContent>
					<CardActions className="absolute bottom-1 left-1">
						<Button
							href="https://baas.ecocloud.vn/"
							className="fancy hover:opacity-80">
							<span className="top-key"></span>
							<span className="text">Tìm hiểu thêm</span>
							<span className="bottom-key-1"></span>
							<span className="bottom-key-2"></span>
						</Button>
					</CardActions>
				</Card>

				<Card className="relative rounded-xl hover:shadow-lg cursor-pointer">
					<CardContent className="mb-16">
						<Box className="flex items-start">
							<Image
								src={cloudCamera}
								className="w-32 h-32"
								alt="cloudCamera"
							/>
							<Box>
								<Typography className="text-[1.5rem]">Cloud Camera</Typography>
								<Typography>
									Quản lý và lưu trữ Video Camera từ nhiều chi nhánh trên nền
									tảng đám mây
								</Typography>
							</Box>
						</Box>
					</CardContent>
					<CardActions className="absolute bottom-1 left-1">
						<Button
							href="/smart-cloud-camera"
							className="fancy hover:opacity-80">
							<span className="top-key"></span>
							<span className="text">Tìm hiểu thêm</span>
							<span className="bottom-key-1"></span>
							<span className="bottom-key-2"></span>
						</Button>
					</CardActions>
				</Card>
			</Container>

			<Box my={10}>
				<Image
					src={promotion}
					title="Liên hệ ngay 076.9999.967 để nhận hỗ trợ tốt nhất"
					alt="promotion"
					className="w-full h-auto shadow-xl cursor-pointer"
				/>
			</Box>

			<Container className="shadow-lg rounded-2xl py-5 my-28">
				<Box className="text-center">
					<Typography className="text-[2rem] font-semibold">
						Được hàng trăm doanh nghiệp tin dùng cho đến nay
					</Typography>
					<Typography className="text-[1.25rem] pb-10 pt-3">
						Khách hàng của chúng tôi đến từ khắp nơi trên thế giới.
					</Typography>
				</Box>
				<Grid
					container
					className="flex justify-between items-center text-center">
					<Grid
						item
						xs={12}
						md={3}>
						<Typography className="text-[3rem] font-bold">250+</Typography>
						<Typography>Dự án đã triển khai</Typography>
					</Grid>
					<Grid
						item
						xs={12}
						md={3}>
						<Typography className="text-[3rem] font-bold">10+</Typography>
						<Typography>Hơn 10 năm kinh nghiệm</Typography>
					</Grid>
					<Grid
						item
						xs={12}
						md={3}>
						<Typography className="text-[3rem] font-bold">5</Typography>
						<Typography>Quốc gia</Typography>
					</Grid>
					<Grid
						item
						xs={12}
						md={3}>
						<Typography className="text-[3rem] font-bold">50+</Typography>
						<Typography>Thành viên</Typography>
					</Grid>
				</Grid>
			</Container>

			{/* Why clients choose us, Khách hàng nói gì về chúng tôi */}
			<Box className="__theme min-h-[500px]">
				<Box className="text-center py-10">
					<Typography className="text-[2.5rem]">
						Why clients choose us
					</Typography>
					<Typography>Because it’s good to work with good people!</Typography>
				</Box>
				<Container className="grid sm:grid-cols-3 gap-x-6 gap-y-6 mb-10">
					<Box>
						<Box className="h-[200px] my-3 px-3 rounded-xl shadow-2xl hover:duration-500">
							<Box className="flex justify-start items-center">
								<Link href="/">
									<Image
										src={logoTurbo}
										className="w-28 h-10 mr-2"
										title="Trang chủ"
										alt="logo_turbo_solutions"
									/>
								</Link>
								<Typography className="py-8">Turbo AI Vision</Typography>
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
								label="Chất lượng luôn được đảm bảo"
							/>
						</Box>
						<Typography className="text-xl font-semibold py-5">
							Đáng tin cậy & Chuyên nghiệp
						</Typography>
						<Typography className="leading-relaxed text-justify">
							Turbo là một trong những công ty AI Vision hàng đầu tại Việt Nam.
							Bằng cách cộng tác với chúng tôi, bạn có thể tiết kiệm thời gian
							để tập trung vào việc lập kế hoạch và điều hành hoạt động kinh
							doanh cốt lõi của mình. Chúng tôi mang phong cách chuyên nghiệp
							vào dự án.
						</Typography>
					</Box>

					<Box>
						<Box className="h-[200px] my-3 px-3 rounded-xl shadow-2xl hover:duration-500">
							<Box className="flex items-center py-4">
								<Typography className="py-4">Key success</Typography>
								<Chip
									className="mx-1 bg-sky-200 text-sky-500 font-semibold"
									label="Flexible solutions"
								/>
								<Chip
									className="mx-1 bg-sky-200 text-sky-500 font-semibold"
									label="Save time"
								/>
							</Box>
							<Divider />
							<Typography className="py-3">Theo dõi hàng ngày</Typography>
						</Box>
						<Typography className="text-xl font-semibold py-5">
							Tính linh hoạt và minh bạch
						</Typography>
						<Typography className="leading-relaxed text-justify">
							Điểm mạnh của chúng tôi nằm ở kiến ​​thức chuyên môn vững chắc về
							nhiều loại công nghệ và tính linh hoạt của nhóm để phù hợp với nhu
							cầu của khách hàng. Mỗi bước công việc của chúng tôi luôn được
							minh bạch với khách hàng từ đầu đến cuối.
						</Typography>
					</Box>

					<Box>
						<Box className="h-[200px] my-3 px-3 rounded-xl shadow-2xl hover:duration-500">
							<Box className="flex items-center">
								<PublicRounded fontSize="large" />
								<Typography className="py-8 px-2">
									Quy tắc kinh doanh quốc tế
								</Typography>
							</Box>
							<Divider />
							<Typography className="py-3">
								Đảm bảo chi phí và hiệu quả
							</Typography>
						</Box>
						<Typography className="text-xl font-semibold py-5">
							Tuân thủ & Cam kết
						</Typography>
						<Typography className="leading-relaxed text-justify">
							Chúng tôi tuân theo tất cả các thủ tục pháp lý khi giao dịch với
							khách hàng của mình để đảm bảo rằng không ai phải đối mặt với bất
							kỳ vấn đề pháp lý nào. Khách hàng chọn chúng tôi biết rằng sản
							phẩm cuối cùng của họ sẽ là những sản phẩm có hiệu suất cao, đáng
							kinh ngạc.
						</Typography>
					</Box>
				</Container>

				<Typography className="text-[2.5rem] font-semibold text-center py-10">
					Khách hàng nói gì về chúng tôi
				</Typography>

				<Container className="grid sm:grid-cols-3 gap-x-6 gap-y-6 pb-10">
					<div className="notification">
						<div className="notiglow"></div>
						<div className="notiborderglow"></div>
						<div className="notititle flex items-center">
							<Image
								src={feedback_01}
								alt="customer feedback"
								className="w-16 h-16 rounded-full mr-2"
							/>
							<div>
								<Typography>Mr. Tài</Typography>
								<Typography>Technical Manager - GOSU</Typography>
							</div>
						</div>

						<div className="notibody">
							Thay vì phải chờ đợi cấu hình từng máy chủ thì nay chỉ cần 3 phút
							là có Cloud Server để sử dụng cho các dự án của công ty.
						</div>
					</div>

					<div className="notification">
						<div className="notiglow"></div>
						<div className="notiborderglow"></div>
						<Box className="notititle flex items-center">
							<Image
								src={feedback_03}
								alt="customer feedback"
								className="w-16 h-16 rounded-full mr-2"
							/>
							<Box>
								<Typography>Mr. Nguyên</Typography>
								<Typography>IT Manager - Bell Technology</Typography>
							</Box>
						</Box>

						<div className="notibody">
							Đội ngũ EcoCloud rất nhiệt tình đã không ngại đường xa hỗ trợ demo
							những giải pháp và hỗ trợ chúng tôi Backup dữ liệu.
						</div>
					</div>

					<div className="notification">
						<div className="notiglow"></div>
						<div className="notiborderglow"></div>
						<div className="notititle flex items-center">
							<Image
								src={feedback_02}
								alt="customer feedback"
								className="w-16 h-16 rounded-full mr-2"
							/>
							<div>
								<Typography>Mr. Phú</Typography>
								<Typography>IT Consultant - Viet An Group</Typography>
							</div>
						</div>

						<div className="notibody">
							Đội ngũ EcoCloud rất nhiệt tình đã không ngại đường xa hỗ trợ demo
							những giải pháp và hỗ trợ chúng tôi Backup dữ liệu.
						</div>
					</div>
				</Container>

				<Box className="text-center pb-10">
					<Typography className="text-[2rem] pb-5">
						Đăng ký trải nghiệm
					</Typography>
					<Typography>
						để nhận thêm thông tin về các dịch vụ của EcoCloud
					</Typography>
				</Box>
			</Box>
		</Box>
	);
}
