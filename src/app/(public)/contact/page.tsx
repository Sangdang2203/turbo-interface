"use client";

import {
	Autocomplete,
	Box,
	Button,
	Grid,
	Link,
	Paper,
	TextField,
	Typography,
} from "@mui/material";
import {
	LocationOnRounded,
	MailOutlineRounded,
	PhoneCallbackRounded,
	SendRounded,
} from "@mui/icons-material";
import { CustomerMessage } from "types/interfaces";
import { useForm, SubmitHandler } from "react-hook-form";
import * as React from "react";
import { services } from "app/libs/data";

// export const metadata = () => {
// 	return {
// 		title: "Contact",
// 	};
// };

const ContactPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors: errors },
	} = useForm<CustomerMessage>();

	return (
		<Box>
			<Box className="themeContact"></Box>

			<Paper className="p-10 rounded-none">
				<Box className="text-center">
					<Typography className="text-[2rem]">Liên hệ với chúng tôi</Typography>
					<Typography paragraph>
						Luôn lắng nghe những ý kiến đóng góp từ quý khách hàng.
					</Typography>
				</Box>

				<Grid
					container
					my={5}>
					<Grid
						item
						xs={12}
						md={6}>
						<Typography className="text-[2rem] font-bold">
							Liên hệ Demo
						</Typography>
						<Typography>Trải nghiệm thực tế, trực quan </Typography>
						<Typography>Tìm hiểu thêm về nhiều tính năng khác</Typography>

						<Box mt={5}>
							<Typography className="text-lg font-bold text-left mb-5">
								CÔNG TY GIẢI PHÁP CÔNG NGHỆ TURBO
							</Typography>
							<div className="flex my-1">
								<LocationOnRounded
									fontSize="small"
									color="secondary"
								/>
								<Typography className="text-slate-900 px-2">
									Số 10 Phổ Quang, Q.Tân Bình, TP.HCM
								</Typography>
							</div>

							<div className="flex my-1">
								<MailOutlineRounded
									fontSize="small"
									color="secondary"
								/>
								<a
									href="mailto:info@turbo.vn"
									className="text-slate-900 px-2 no-underline">
									info@turbo.vn
								</a>
							</div>

							<div className="flex my-1">
								<PhoneCallbackRounded
									fontSize="small"
									color="secondary"
								/>
								<Link
									href="tel:0769999967"
									className="text-slate-900 no-underline px-2">
									076.9999.967
								</Link>
							</div>
						</Box>
					</Grid>

					<Grid
						item
						xs={12}
						md={6}>
						<div className="form-container">
							<form className="form">
								<div className="form-group">
									<label htmlFor="name">Họ và tên khách hàng</label>
									<input
										{...register("name", {
											required: "Vui lòng điền thông tin.",
											minLength: {
												value: 8,
												message: "Điền it nhất 8 ký tự.",
											},
											maxLength: {
												value: 50,
												message: "Điền tối đa 50 ký tự.",
											},
										})}
										name="name"
										id="name"
									/>
								</div>

								<div className="form-group">
									<label htmlFor="phone">Số điện thoại</label>
									<input
										{...register("phone", {
											required: "Vui lòng điền thông tin.",
											pattern: {
												value: /^\d{10}$/,
												message: "Điền đủ 10 số.",
											},
										})}
										name="phone"
										id="phone"
									/>
								</div>
								<div className="form-group">
									<label htmlFor="email">Email</label>
									<input
										{...register("email", {
											required: "Vui lòng điền thông tin.",
											pattern: {
												value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
												message: "Email sai định dạng.",
											},
										})}
										name="email"
										id="email"
										type="text"
									/>
								</div>

								<div className="form-group">
									<label>Dịch vụ bạn đang quan tâm</label>
									<Autocomplete
										multiple
										id="service"
										size="small"
										options={services}
										getOptionLabel={option => option.name}
										renderInput={params => (
											<TextField
												{...params}
												placeholder="Vui lòng bấm chọn."
											/>
										)}
									/>
								</div>

								<div className="form-group">
									<label htmlFor="textarea">
										Chúng tôi có thể giúp gì cho bạn ?
									</label>
									<textarea
										{...register("message", {
											required: "Vui lòng điền thông tin.",
										})}
										cols={50}
										rows={10}
										id="textarea"
										name="textarea"></textarea>
								</div>
								<Button
									startIcon={<SendRounded className="" />}
									type="submit"
									className="form-submit-btn">
									Submit
								</Button>
							</form>
						</div>
					</Grid>
				</Grid>
			</Paper>
		</Box>
	);
};

export default ContactPage;
