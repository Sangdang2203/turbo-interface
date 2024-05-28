import Image from "next/image";
import cloudFlare_01 from "@/app/images/cloudFlare/cloudFlare_01.png";
import cloudFlare_02 from "@/app/images/cloudFlare/cloudFlare_02.jpg";
import cloudFlare_03 from "@/app/images/cloudFlare/cloudFlare_03.png";
import cloudFlare_04 from "@/app/images/cloudFlare/cloudFlare_04.png";
import cloudServer_icon_01 from "@/app/images/cloudServer/cloudServer_icon_01.png";
import { Box, Typography, Grid, Button, Paper } from "@mui/material";
import {
	cloudflarePackage,
	cloudflareQuestions,
	cloudflarePerformance,
	cloudflareWAF,
} from "app/libs/data";
import CustomDialog from "@/components/ContactPopup";

export const metadata = {
	title: {
		absolute: "",
		default: "EcoCloud | Điện toán đám mây",
		template: "%s | Turbo AI Solution",
	},
	description:
		"More than 10 years of experience, Turbo Solutions specializes in providing leading cloud computing solutions and applications in Vietnam.",
};

export default function CloudFlare() {
	return (
		<>
			<Box>
				<Paper className="rounded-none shadow-xl py-10">
					<Grid container>
						<Grid
							item
							xs={12}
							md={6}
							className="px-4 md:pl-10">
							<Typography className="text-[2rem] text-orange-600 font-semibold">
								CloudFlare là gì?
							</Typography>
							<Typography py={1}>
								CloudFlare là dịch vụ CDN trung gian, là nơi điều phối lượng
								truy cập giữa máy chủ với máy của khách hàng qua lớp bảo vệ
								CloudFlare.
							</Typography>
							<Typography py={1}>
								Thay vì phải truy cập trực tiếp vào website thông qua phân giải
								tên miền DNS thì có thể sử dụng máy chủ phân giải tên của
								CloudFlare. Ngoài ra, CloudFlare còn có cung cấp nhiều dịch vụ
								như CNS, SPDY, tường lửa chống Ddos, Chứng chỉ số SSL
							</Typography>
						</Grid>

						<Grid
							item
							xs={12}
							md={6}
							className="flex flex-col items-center justify-center">
							<Image
								src={cloudFlare_01}
								className="w-[80%] h-auto rounded-lg"
								alt="cloudFlare_01"
							/>
						</Grid>
					</Grid>
				</Paper>

				<Box className="themeHeroBackground py-10 text-white text-center shadow-xl">
					<Typography className="text-[2rem] font-semibold text-center">
						PERFORMANCE
					</Typography>
					<Typography className="text-[1rem] sm:text-[1.5rem] pt-5 ">
						Giúp tăng tốc độ tải của ứng dụng - website
					</Typography>
				</Box>

				{/* PERFORMANCE */}
				<Paper className="rounded-none shadow-xl py-5">
					<Grid container>
						<Grid
							item
							xs={12}
							md={4}>
							{cloudflarePerformance.slice(0, 3).map(item => {
								return (
									<Paper
										key={item.id}
										className="m-6 p-3">
										<Typography className="text-sky-800 font-bold pb-3">
											{item.title}
										</Typography>
										<Typography> {item.desc} </Typography>
									</Paper>
								);
							})}
						</Grid>

						<Grid
							item
							xs={12}
							md={4}
							className="flex justify-center">
							<Image
								src={cloudFlare_02}
								alt="performance"
								className="w-[100%] h-auto"
							/>
						</Grid>

						<Grid
							item
							xs={12}
							md={4}>
							{cloudflarePerformance.slice(3, 8).map(item => {
								return (
									<Paper
										key={item.id}
										className="m-6 p-3">
										<Typography className="text-sky-800 font-bold pb-3">
											{item.title}
										</Typography>
										<Typography> {item.desc} </Typography>
									</Paper>
								);
							})}
						</Grid>
					</Grid>
				</Paper>

				<Paper className="rounded-none shadow-xl py-5">
					<Typography className="text-[1.5rem] px-4 sm:text-[2.5rem] text-center uppercase text-orange-600 font-semibold pt-1 pb-10">
						cloudflare và các gói tiện ích riêng
					</Typography>
					<Grid container>
						<Grid
							item
							xs={12}
							md={6}
							className="flex flex-col items-center justify-center">
							<Image
								src={cloudFlare_03}
								className="w-[80%] h-auto rounded-lg"
								alt="cloudFlare_03"
							/>
						</Grid>

						<Grid
							item
							xs={12}
							md={6}
							pl={10}>
							{cloudflarePackage.map(item => {
								return (
									<Box
										key={item.id}
										sx={{ display: "flex", alignItems: "center", py: 1 }}>
										<Box>
											<Typography className="text-[1.3rem] text-orange-600 font-semibold">
												{item.title}
											</Typography>
											<Typography className="w-3/4 text-justify">
												{item.desc}
											</Typography>
										</Box>
									</Box>
								);
							})}
						</Grid>
					</Grid>
				</Paper>

				<Box className="themeHeroBackground py-10 text-white text-center shadow-xl">
					<Typography className="text-[1.5rem] px-4 sm:text-[2rem] font-semibold text-center">
						Trải nghiệm miễn phí dịch vụ CLOUDFLARE WAF của chúng tôi
					</Typography>
					<Typography className="text-[1rem] sm:text-[1.5rem] py-5">
						Tặng ngay 7 ngày miễn phí dùng thử
					</Typography>
					<div className="mt-5">
						<CustomDialog />
					</div>
				</Box>

				{/* CLOUDFLARE WAF */}
				<Paper className="rounded-none">
					<Grid container>
						<Grid
							item
							xs={12}
							md={6}
							className="flex flex-col items-center justify-center text-sky-900">
							<Typography className="py-3 text-[1.5rem] font-bold">
								CloudFlare WAF là tính năng gì?
							</Typography>
							<Typography className="font-extralight text-center w-3/4 px-3">
								Cloudflare Web Application Firewall (WAF) sẽ cung cấp khả năng
								bảo vệ tự động khỏi các lỗ hổng bảo mật và tính linh hoạt trong
								việc tạo các quy tắc tùy chỉnh
							</Typography>
						</Grid>

						<Grid
							item
							xs={12}
							md={6}
							className="flex flex-col items-center justify-center">
							<Image
								src={cloudFlare_04}
								className="w-full h-full rounded-lg"
								alt="CloudFlare WAF là tính năng gì?"
							/>
						</Grid>
					</Grid>

					<Box className="hidden xl:flex justify-center pt-10">
						{cloudflareWAF.slice(0, 3).map(item => {
							return (
								<Box
									key={item.id}
									className="w-1/3 flex flex-col justify-center items-center">
									<Image
										src={cloudServer_icon_01}
										className="w-20 h-auto"
										alt="WAF"
									/>
									<Typography className="text-[1.3rem] font-semibold py-3">
										{item.title}
									</Typography>
									<Typography className="w-3/4 text-center">
										{item.desc}
									</Typography>
								</Box>
							);
						})}
					</Box>

					<Box className="hidden xl:flex justify-evenly py-10">
						{cloudflareWAF.slice(3, 5).map(item => {
							return (
								<Box
									key={item.id}
									className="w-1/3 flex flex-col justify-center items-center">
									<Image
										src={cloudServer_icon_01}
										className="w-20 h-auto"
										alt="WAF"
									/>
									<Typography className="text-[1.3rem] font-semibold py-3">
										{item.title}
									</Typography>
									<Typography className="w-3/4 text-center">
										{item.desc}
									</Typography>
								</Box>
							);
						})}
					</Box>
				</Paper>

				{/* Q & A */}
				<div className="bg-white border border-gray-200 divide-y divide-gray-200 rounded-xl ">
					<Typography className="text-[1.75rem] text-sky-900 font-semibold text-center py-5">
						Có nên sử dụng CloudFlare hay không ?
					</Typography>
					<Typography className="text-center px-3">
						CloudFlare được dùng như một dịch vụ DNS thông thường khi tắt đám
						mây tên miền. Nên sử dụng DNS trung gian này bởi vì các lý do sau
						đây:
					</Typography>
					{cloudflareQuestions.map(item => {
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
			</Box>
		</>
	);
}
