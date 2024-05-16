"use client";

import * as React from "react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { CloseOutlined } from "@mui/icons-material";
import {
	Dialog,
	DialogContent,
	DialogTitle,
	Button,
	TextField,
	Tooltip,
	MenuItem,
	Select,
	SelectChangeEvent,
} from "@mui/material";
import { CustomerMessage, ApiResponse } from "types/interfaces";
import { services } from "app/libs/data";
import { CreateContact } from "@methods/method";

export default function ContactPopup() {
	const [service, setService] = React.useState<string[]>([]);
	const [open, setOpen] = React.useState(false);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors: errors },
	} = useForm<CustomerMessage>();

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleChange = (event: SelectChangeEvent<typeof service>) => {
		const {
			target: { value },
		} = event;
		setService(typeof value === "string" ? value.split(",") : value);
	};

	return (
		<React.Fragment>
			<Button
				onClick={handleClickOpen}
				className="fancy hover:opacity-80">
				<span className="top-key"></span>
				<span className="text">Liên hệ với chúng tôi</span>
				<span className="bottom-key-1"></span>
				<span className="bottom-key-2"></span>
			</Button>

			<Dialog
				open={open}
				onClose={handleClose}
				className="min-w-[400px] lg:min-w-[900px] mx-auto">
				<Tooltip title="Close">
					<CloseOutlined
						onClick={() => setOpen(false)}
						color="error"
						className="text-md absolute top-1 right-1 bg-slate-500 rounded hover:opacity-80 hover:bg-red-200 cursor-pointer"
					/>
				</Tooltip>
				<DialogTitle
					className=""
					id="alert-dialog-title">
					<h2 className="title">Liên hệ với chúng tôi</h2>
					<p className="message">
						Luôn lắng nghe những ý kiến đóng góp từ khách hàng.
					</p>
				</DialogTitle>
				<DialogContent>
					<form
						className="form"
						onSubmit={handleSubmit(CreateContact)}>
						<p className="text-red-700 -mt-5">(*) Bắt buộc nhập thông tin</p>
						<label>
							<TextField
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
								placeholder="(*) Họ và tên khách hàng | Doanh nghiệp"
								type="text"
								fullWidth
							/>
						</label>
						<span className="text-red-700">{errors.name?.message}</span>

						<label>
							<TextField
								{...register("email", {
									required: "Vui lòng điền thông tin.",
									pattern: {
										value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
										message: "Email sai định dạng.",
									},
								})}
								placeholder="(*) Email"
								type="email"
								fullWidth
							/>
						</label>
						<span className="text-red-700">{errors.email?.message}</span>

						<label>
							<TextField
								{...register("phone", {
									required: "Vui lòng điền thông tin.",
									pattern: {
										value: /^\d{10}$/,
										message: "Vui lòng nhập đủ 10 số.",
									},
								})}
								fullWidth
								placeholder="(*) Số điện thoại"
							/>
						</label>
						<span className="text-red-700">{errors.phone?.message}</span>

						<label>
							<Select
								{...register("services")}
								labelId="demo-multiple-chip-label"
								id="demo-multiple-chip"
								multiple
								fullWidth
								displayEmpty
								value={service}
								defaultValue={[""]}
								onChange={handleChange}
								renderValue={selected => {
									if (selected.length === 0) {
										return (
											<b className="text-gray-400 font-extralight">
												Vui lòng bấm chọn dịch vụ
											</b>
										);
									}

									return selected.join(", ");
								}}>
								<MenuItem disabled>
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
						</label>

						<label>
							<TextField
								{...register("message")}
								fullWidth
								rows={5}
								className="mt-3"
								placeholder="Chúng tôi có thể giúp gì cho bạn ?"
							/>
						</label>

						<button className="submit my-5">Submit</button>
					</form>
				</DialogContent>
			</Dialog>
		</React.Fragment>
	);
}
