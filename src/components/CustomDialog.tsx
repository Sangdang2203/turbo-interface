"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import {
	Dialog,
	DialogContent,
	DialogTitle,
	Button,
	Box,
	FormHelperText,
	TextField,
	Autocomplete,
} from "@mui/material";
import { SendRounded } from "@mui/icons-material";
import { CustomerMessage } from "types/interfaces";
import { services } from "app/libs/data";

export default function CustomDialog() {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const {
		register,
		handleSubmit,
		formState: { errors: errors },
	} = useForm<CustomerMessage>();

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
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description">
				<DialogTitle
					className=""
					id="alert-dialog-title">
					<h2 className="title">Liên hệ với chúng tôi</h2>
					<p className="message">
						Luôn lắng nghe những ý kiến đóng góp từ khách hàng.
					</p>
				</DialogTitle>
				<DialogContent>
					<form className="form">
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
								placeholder="Nhập họ tên quý khách hàng ..."
								type="text"
								fullWidth
							/>
						</label>
						<span className="text-danger">{errors.name?.message}</span>

						<label>
							<TextField
								{...register("email", {
									required: "Vui lòng điền thông tin.",
									pattern: {
										value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
										message: "Email sai định dạng.",
									},
								})}
								placeholder="Nhập email ..."
								type="email"
								fullWidth
							/>
						</label>
						<span className="text-danger">{errors.email?.message}</span>

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
								placeholder="Nhập số điện thoại ..."
							/>
						</label>
						<span className="text-danger">{errors.phone?.message}</span>

						<label>
							<Autocomplete
								multiple
								id="service"
								className="text-[10px]"
								options={services}
								getOptionLabel={option => option.name}
								renderInput={params => (
									<TextField
										{...params}
										size="medium"
										placeholder="Vui lòng bấm chọn dịch vụ."
									/>
								)}
							/>
						</label>
						<span className="text-danger">{errors.phone?.message}</span>

						<label>
							<TextField
								{...register("message", {
									required: "Vui lòng điền thông tin.",
								})}
								fullWidth
								rows={5}
								placeholder="Chúng tôi có thể giúp gì cho bạn ?"
							/>
						</label>
						<span className="text-danger">{errors.message?.message}</span>

						<button className="submit">Submit</button>
					</form>
				</DialogContent>
			</Dialog>
		</React.Fragment>
	);
}
