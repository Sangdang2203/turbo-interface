import {
	AddCircleOutlineRounded,
	CloseOutlined,
	DoneRounded,
	RotateLeftRounded,
} from "@mui/icons-material";
import {
	Box,
	TextField,
	FormHelperText,
	Select,
	SelectChangeEvent,
	MenuItem,
	Typography,
	Button,
	Dialog,
	DialogContent,
	DialogTitle,
	Tooltip,
} from "@mui/material";
import { useSession } from "next-auth/react";
import React from "react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { CreateUserRequest, ApiResponse, Authority } from "types/interfaces";
import { fetchAuthorities } from "@/app/methods/method";

export default function CreateUserForm() {
	const [openDialog, setOpenDialog] = React.useState(false);
	const [authorities, setAuthorities] = React.useState<Authority[]>([]);
	const [auth, setAuth] = React.useState<string[]>([]);

	const { data: session } = useSession();

	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
		watch,
		reset,
	} = useForm<CreateUserRequest>();

	const handleChange = (event: SelectChangeEvent<typeof auth>) => {
		const {
			target: { value },
		} = event;
		setAuth(typeof value === "string" ? value.split(",") : value);
	};

	async function AddUser(user: CreateUserRequest) {
		if (session) {
			try {
				const message = toast.loading("Đang tạo mới ...");
				const res = await fetch("/api/users", {
					method: "POST",
					headers: {
						Authorization: `Bearer ${session.user.id_token}`,
						"Content-Type": "application/json",
					},
					body: JSON.stringify(user),
				});

				console.log(user);

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

	React.useEffect(() => {
		if (session) {
			Promise.all([fetchAuthorities()]).then(data => {
				const [resAuth] = data;

				if (resAuth.ok) {
					setAuthorities(resAuth.data);
				}
			});
		}
	}, [session]);

	return (
		<React.Fragment>
			<Button
				variant="contained"
				startIcon={<AddCircleOutlineRounded />}
				onClick={() => setOpenDialog(true)}>
				Tạo mới
			</Button>

			<Dialog
				open={openDialog}
				onClose={() => setOpenDialog(false)}
				className="min-w-[600px] mx-auto">
				<Tooltip title="Close">
					<CloseOutlined
						onClick={() => setOpenDialog(false)}
						color="error"
						className="text-md absolute top-1 right-1 bg-slate-500 rounded hover:opacity-80 hover:bg-red-200 cursor-pointer"
					/>
				</Tooltip>
				<DialogTitle>
					<h2 className="title">Tạo tài khoản</h2>
				</DialogTitle>
				<DialogContent>
					<form
						className="min-w-[300px]"
						onSubmit={handleSubmit(AddUser)}>
						<Box className="my-3">
							<TextField
								{...register("login", {
									required: "Nhập đầy đủ thông tin.",
									minLength: { value: 8, message: "Tối thiểu 8 ký tự." },
									maxLength: { value: 50, message: "Tối đa 50 ký tự." },
								})}
								fullWidth
								type="text"
								size="small"
								color="primary"
								className="rounded-md  cursor-pointer shadow-lg w-full"
								placeholder="Nhập tên đăng nhập"
							/>
							<FormHelperText className="text-red-700 px-2 mt-2 ">
								{errors.login?.message}
							</FormHelperText>
						</Box>

						<Box className="my-3">
							<TextField
								{...register("lastName", {
									required: "Nhập đầy đủ thông tin.",
									minLength: { value: 2, message: "Tối thiểu 2 ký tự." },
									maxLength: { value: 10, message: "Tối đa 10 ký tự." },
								})}
								fullWidth
								type="text"
								size="small"
								color="primary"
								className="rounded-md  cursor-pointer shadow-lg w-full"
								placeholder="Nhập họ"
							/>
							<FormHelperText className="text-red-700 px-2 mt-2 ">
								{errors.lastName?.message}
							</FormHelperText>
						</Box>

						<Box className="my-3">
							<TextField
								{...register("firstName", {
									required: "Nhập đầy đủ thông tin.",
									minLength: { value: 8, message: "Tối thiểu 8 ký tự." },
									maxLength: { value: 50, message: "Tối đa 50 ký tự." },
								})}
								fullWidth
								type="text"
								size="small"
								color="primary"
								className="cursor-pointer shadow-lg w-full"
								placeholder="Nhập tên"
							/>
							<FormHelperText className="text-red-700 px-2 mt-2 ">
								{errors.firstName?.message}
							</FormHelperText>
						</Box>

						<Box>
							<Select
								{...register("authorities")}
								labelId="demo-multiple-chip-label"
								id="demo-multiple-chip"
								className="shadow-lg"
								multiple
								fullWidth
								size="small"
								displayEmpty
								value={auth}
								onChange={handleChange}
								renderValue={selected => {
									if (selected.length === 0) {
										return (
											<b className="text-gray-400 font-extralight">
												Bấm chọn phân quyền
											</b>
										);
									}

									return selected.join(", ");
								}}>
								<MenuItem
									disabled
									value="">
									<em>Vui lòng bấm chọn </em>
								</MenuItem>
								{authorities.map(item => {
									return (
										<MenuItem
											key={item.id}
											value={item.name}>
											{item.name}
										</MenuItem>
									);
								})}
							</Select>
							<Typography className="text-red-700 p-2">
								{errors.authorities?.message}
							</Typography>
						</Box>

						<Box className="mb-3">
							<TextField
								{...register("email", {
									required: "Nhập đầy đủ thông tin.",
									pattern: {
										value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
										message: "Phải đúng định dạng email.",
									},
								})}
								fullWidth
								type="text"
								size="small"
								color="primary"
								className="rounded-md cursor-pointer shadow-lg w-full"
								placeholder="Nhập địa chỉ email"
							/>
							<FormHelperText className="text-red-700 px-2 mt-2 ">
								{errors.email?.message}
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
		</React.Fragment>
	);
}
