"use client";
import {
	AddCircleOutlineRounded,
	CloseOutlined,
	DoneRounded,
	RotateLeftRounded,
} from "@mui/icons-material";
import {
	Dialog,
	Tooltip,
	DialogTitle,
	DialogContent,
	Box,
	TextField,
	FormHelperText,
	Button,
} from "@mui/material";
import { useSession } from "next-auth/react";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { CreateCategoryRequest, ApiResponse, Category } from "types/interfaces";

export default function AddCategoryForm() {
	const [openDialog, setOpenDialog] = React.useState(false);
	const { data: session } = useSession();

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<CreateCategoryRequest>();

	async function AddCategory(category: CreateCategoryRequest) {
		if (session) {
			try {
				const message = toast.loading("Đang tạo mới ...");
				const res = await fetch("/api/categories", {
					method: "POST",
					headers: {
						Authorization: `Bearer ${session.user.id_token}`,
						"Content-Type": "application/json",
					},
					body: JSON.stringify(category),
				});

				const payload = (await res.json()) as ApiResponse;

				if (payload.ok) {
					setOpenDialog(false);
					toast.success(payload.message);
				} else {
					toast.error(payload.message);
				}
				toast.dismiss(message);
			} catch (error) {
				console.log("Error add user: ", error);
				toast.error("Oops! Error while trying to add user.");
			}
		}
	}

	return (
		<>
			<Button
				variant="contained"
				startIcon={<AddCircleOutlineRounded />}
				onClick={() => setOpenDialog(true)}>
				Tạo mới
			</Button>
			<Dialog
				open={openDialog}
				onClose={() => setOpenDialog(false)}>
				<Tooltip title="Close">
					<CloseOutlined
						onClick={() => setOpenDialog(false)}
						color="error"
						className="absolute top-1 right-1 rounded-2xl hover:opacity-80 hover:bg-red-200 cursor-pointer"
					/>
				</Tooltip>
				<DialogTitle>
					<h2 className="title">Tạo danh mục</h2>
				</DialogTitle>
				<DialogContent>
					<form onSubmit={handleSubmit(AddCategory)}>
						<Box className="my-3">
							<TextField
								{...register("name", {
									required: "Nhập đầy đủ thông tin.",
									minLength: { value: 8, message: "Tối thiểu 8 ký tự." },
									maxLength: { value: 50, message: "Tối đa 50 ký tự." },
								})}
								type="text"
								size="small"
								color="primary"
								className="min-w-[300px] rounded-md  cursor-pointer shadow-lg w-full"
								placeholder="Nhập tên đăng nhập"
							/>
							<FormHelperText className="text-red-700 px-2 mt-2 ">
								{errors.name?.message}
							</FormHelperText>
						</Box>

						<Box className="flex justify-between">
							<Button
								type="submit"
								variant="contained"
								size="medium"
								className="w-full my-3 mr-2 p-2 text-white bg-[#008200] hover:opacity-85"
								startIcon={<DoneRounded fontSize="medium" />}>
								Đồng ý
							</Button>
							<Button
								onClick={() => reset()}
								variant="contained"
								size="medium"
								className="w-full my-3 p-2 text-white bg-[#0C2340] hover:opacity-85"
								startIcon={<RotateLeftRounded fontSize="medium" />}>
								Hủy bỏ
							</Button>
						</Box>
					</form>
				</DialogContent>
			</Dialog>
		</>
	);
}
