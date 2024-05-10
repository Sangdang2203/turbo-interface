"use client";

import {
	Box,
	Button,
	Grid,
	Link,
	Paper,
	Typography,
	OutlinedInput,
	Chip,
	Select,
	MenuItem,
} from "@mui/material";

import {
	LocationOnRounded,
	MailOutlineRounded,
	PhoneCallbackRounded,
	SendRounded,
} from "@mui/icons-material";

import { SelectChangeEvent } from "@mui/material/Select";
import { CustomerMessage, ApiResponse } from "types/interfaces";
import { useForm } from "react-hook-form";
import * as React from "react";
import { toast } from "sonner";
import { useSession } from "next-auth/react";
import { services } from "app/libs/data";

// export const metadata = () => {
// 	return {
// 		title: "Contact",
// 	};
// };

const ContactPage = () => {
	const [service, setService] = React.useState<string[]>([]);
	const { data: session } = useSession();

	const {
		register,
		handleSubmit,
		formState: { errors: errors },
	} = useForm<CustomerMessage>();

	const handleChange = (event: SelectChangeEvent<typeof service>) => {
		const {
			target: { value },
		} = event;
		setService(typeof value === "string" ? value.split(",") : value);
	};

	async function CreateContact(contact: CustomerMessage) {
		if (session) {
			const message = toast.loading("Đang gửi thông tin ...");

			try {
				const res = await fetch(`/api/contacts`, {
					method: "POST",
					headers: {
						Authorization: `Bearer ${session.user.id_token}`,
						"Content-Type": "application/json",
					},
					body: JSON.stringify(contact),
				});

				console.log(contact);

				const payload = (await res.json()) as ApiResponse;

				if (payload.ok) {
					toast.success(payload.message);
				} else {
					toast.error(payload.message);
				}
				toast.dismiss(message);
			} catch (error) {
				console.log(error);
			}
		}
	}

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
							<form
								className="form"
								onSubmit={handleSubmit(CreateContact)}>
								<p className="text-red-700 font-bold">
									(*) Bắt buộc nhập thông tin
								</p>
								<div className="form-group">
									<label htmlFor="name">
										<span className="text-red-700 pr-1">(*)</span>
										Họ và tên khách hàng | Doanh nghiệp
									</label>

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
									<span className="text-red-700">{errors.name?.message}</span>
								</div>

								<div className="form-group">
									<label htmlFor="phone">
										<span className="text-red-700 pr-1">(*)</span>
										Số điện thoại
									</label>
									<input
										{...register("phone", {
											required: "Vui lòng điền thông tin.",
											pattern: {
												value: /^\d{10}$/,
												message: "Điền đủ 10 số.",
											},
										})}
										min={0}
										name="phone"
										id="phone"
									/>
									<span className="text-red-700">{errors.phone?.message}</span>
								</div>
								<div className="form-group">
									<label htmlFor="email">
										<span className="text-red-700 pr-1">(*)</span>
										Email
									</label>
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
									<span className="text-red-700">{errors.email?.message}</span>
								</div>

								<div className="form-group">
									<label>Dịch vụ bạn đang quan tâm</label>
									<Select
										{...register("services")}
										labelId="demo-multiple-chip-label"
										id="demo-multiple-chip"
										multiple
										value={service}
										onChange={handleChange}
										renderValue={selected => {
											if (selected.length === 0) {
												return <em>Placeholder</em>;
											}

											return selected.join(", ");
										}}>
										<MenuItem
											disabled
											value="">
											<em>Vui lòng bấm chọn dịch vụ cần tư vấn</em>
										</MenuItem>
										{services.map(item => (
											<MenuItem
												key={item}
												value={item}>
												{item}
											</MenuItem>
										))}
									</Select>
									<span className="text-red-700">
										{errors.services?.message}
									</span>
								</div>

								<div className="form-group">
									<label htmlFor="textarea">
										Chúng tôi có thể giúp gì cho bạn ?
									</label>
									<textarea
										{...register("message")}
										cols={50}
										rows={10}
										id="textarea"
										name="textarea"></textarea>
									<span className="text-red-700">
										{errors.message?.message}
									</span>
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
