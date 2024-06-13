import React from "react";
import Image from "next/image";
import {
	Box,
	Button,
	Container,
	Grid,
	ImageList,
	ImageListItem,
	Link,
	Typography,
} from "@mui/material";

const images = [
	{
		img: "https://turbo.vn/wp-content/plugins/front-gutenberg-blocks/assets/img/480x320/img31.jpg",
	},
	{
		img: "https://turbo.vn/wp-content/plugins/front-gutenberg-blocks/assets/img/480x320/img38.jpg",
	},
	{
		img: "https://turbo.vn/wp-content/plugins/front-gutenberg-blocks/assets/img/480x320/img34.jpg",
	},
	{
		img: "https://turbo.vn/wp-content/plugins/front-gutenberg-blocks/assets/img/480x320/img25.jpg",
	},
	{
		img: "https://turbo.vn/wp-content/plugins/front-gutenberg-blocks/assets/img/480x320/img32.jpg",
	},
	{
		img: "https://turbo.vn/wp-content/plugins/front-gutenberg-blocks/assets/img/480x320/img36.jpg",
	},
];

export default function AboutPage() {
	return (
		<Box className="__theme h-full">
			<Container className="text-center py-5">
				<Link
					href="/"
					className="text-[4rem] no-underline font-extrabold text-blue-900">
					Turbo
				</Link>
				<Typography className="text-[1.1rem] md:text-[2rem] font-extralight w-3/4 mx-auto">
					chuyên cung cấp các dịch vụ, giải pháp AI (trí tuệ nhân tạo), điện
					toán đám mây hàng đầu Việt Nam.
				</Typography>
			</Container>

			{/* list of images */}
			<Container className="grid grid-cols-2 lg:grid-cols-3 gap-y-3">
				{images.map(item => {
					return (
						<Image
							key={item.img}
							className="max-w-[190px] max-h-[120px] rounded-xl lg:max-w-[350px] lg:max-h-[220px]"
							width={350}
							height={220}
							src={item.img}
							alt={item.img}
							loading="lazy"
						/>
					);
				})}
			</Container>

			<Container>
				<Grid
					container
					py={5}>
					<Grid
						item
						xs={12}
						md={6}>
						<iframe
							className="rounded-xl mx-auto"
							width="100%"
							height={300}
							title="Vaidio  AI Vision 7.0"
							src="https://www.youtube.com/embed/LdPqO124iE0?feature=oembed?autoplay=1"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowFullScreen></iframe>
					</Grid>
					<Grid
						item
						xs={12}
						md={6}
						className="flex flex-col justify-center items-center text-center">
						<Typography className="text-[1.5rem] md:text-[2rem] font-extralight p-2">
							Ứng dụng của trí tuệ nhân tạo trong đời sống thực tế.
						</Typography>
						<Button
							className="btn my-5"
							href="https://www.youtube.com/@turbosolutions506"
							target="_blank">
							<strong>Xem thêm tại đây</strong>
							<div id="container-stars">
								<div id="stars"></div>
							</div>
							<div id="glow">
								<div className="circle"></div>
								<div className="circle"></div>
							</div>
						</Button>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
}
