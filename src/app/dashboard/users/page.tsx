"use client";

import React from "react";
import { useSession } from "next-auth/react";
import Loading from "@/components/Loading";
import {
	Box,
	Button,
	IconButton,
	Grid,
	Paper,
	Switch,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TablePagination,
	TableRow,
	TextField,
	Tooltip,
	Dialog,
	DialogContent,
	DialogTitle,
	FormHelperText,
	Divider,
	Chip,
	MenuItem,
	FormControl,
	InputLabel,
	ListItemText,
	Select,
	Typography,
} from "@mui/material";
import {
	CloseOutlined,
	DeleteOutlineRounded,
	DoneRounded,
	RotateLeftRounded,
	SearchOutlined,
	AddCircleOutlineRounded,
	EditNoteRounded,
} from "@mui/icons-material";
import {
	fetchAuthorities,
	fetchUsers,
	fetchDeleteUser,
} from "app/methods/method";
import {
	ApiResponse,
	Authority,
	CreateUserRequest,
	UpdateUserRequest,
	User,
} from "types/interfaces";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function UserManagement() {
	const [loading, setLoading] = React.useState(true);
	const [selectedUser, setSelectedUser] = React.useState<User | null>(null);
	const [users, setUsers] = React.useState<User[]>([]);
	const [authorities, setAuthorities] = React.useState<Map<string, string>>(
		new Map<string, string>()
	);
	const [modalAdd, setModalAdd] = React.useState(false);
	const [modalUpdate, setModalUpdate] = React.useState(false);
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(10);

	const { data: session } = useSession();

	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
		watch,
		reset,
	} = useForm<CreateUserRequest>();

	const {
		register: update,
		handleSubmit: handleUpdate,
		formState: { errors: errorsUpdate },
	} = useForm<UpdateUserRequest>();

	const handleChangePage = (
		event: React.MouseEvent<HTMLButtonElement> | null,
		newPage: number
	) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	// Begin multi select
	const ITEM_HEIGHT = 40;
	const ITEM_PADDING_TOP = 8;
	const MenuProps = {
		PaperProps: {
			style: {
				maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
				width: 300,
			},
		},
	};

	// Handle Search
	function handleSearch(event: React.FormEvent<HTMLFormElement>) {
		if (session) {
			event.preventDefault();
			const nameInput = document.getElementById(
				"searchInput"
			) as HTMLInputElement;
			const name = nameInput.value.trim();

			if (name === "") {
				fetchUsers(session.user.id_token).then(data => {
					if (data.ok) {
						setUsers(data.data.reverse());
					}
				});
			} else {
				const filterEmployees = users.filter(
					user =>
						user.lastName.includes(name) ||
						user.firstName.includes(name) ||
						user.email.includes(name)
				);

				setUsers(filterEmployees);
			}
		}
	}

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
					const response = await fetchUsers(session.user.id_token);
					setUsers(await response.data.reverse());
					setModalAdd(false);
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
	// UPDATE
	async function UpdateUser(updatedUser: UpdateUserRequest) {
		if (session) {
			const message = toast.loading("Loading...");
			try {
				const res = await fetch(`/api/posts/${selectedUser?.id}`, {
					method: "PUT",
					body: JSON.stringify(updatedUser),
				});

				const payload = (await res.json()) as ApiResponse;

				if (payload.ok) {
					const response = await fetchUsers(session.user.id_token);
					setUsers(await response.data.reverse());
					setModalUpdate(false);
					toast.success(payload.message);
				} else {
					toast.error(payload.message);
				}
			} catch (error) {
				console.log(error);
			}
			toast.dismiss(message);
		}
	}
	// DELETE
	async function handleDelete(login: string) {
		if (session) {
			const message = toast.loading("Đang thực thao tác hiện xóa.");
			const response = await fetchDeleteUser(session.user.id_token, login);

			if (response.ok) {
				setUsers(pre => pre.filter(user => user.login !== login));
				toast.success(response.message);
			} else {
				toast.error(response.message);
			}

			toast.dismiss(message);
		}
	}

	// fetch data
	React.useEffect(() => {
		if (session) {
			Promise.all([
				fetchUsers(session.user.id_token),
				fetchAuthorities(session.user.id_token),
			]).then(data => {
				const [resUser, resAuth] = data;

				if (resUser.ok) {
					setUsers(resUser.data.reverse());
				}

				if (resAuth.ok) {
					setAuthorities(resAuth.data);
				}

				setLoading(false);
			});
		}
	}, [session]);

	return (
		<Box>
			{loading ? (
				<Loading />
			) : (
				<Box>
					<Paper
						elevation={6}
						sx={{ borderRadius: "10px", boxSizing: "border-box" }}>
						<Grid container>
							<Grid
								item
								xs={12}
								sm={6}
								className="flex justify-between items-center p-3">
								<Button
									variant="contained"
									startIcon={<AddCircleOutlineRounded />}
									onClick={() => setModalAdd(true)}>
									Tạo mới
								</Button>
							</Grid>
							<Grid
								item
								xs={12}
								sm={6}>
								<form
									onSubmit={handleSearch}
									method="post"
									className="flex justify-end items-center my-3 relative">
									<TextField
										size="small"
										type="text"
										name="search"
										id="searchInput"
										className="shadow-md text-sm rounded-lg min-w-[300px] min-h-[40px] cursor-pointer mr-3"
										placeholder="Enter email | name to search"
									/>
									<div className="absolute inset-y-0 right-0 flex items-center">
										<IconButton className="relative mr-5">
											<SearchOutlined
												color="success"
												fontSize="small"
											/>
										</IconButton>
									</div>
								</form>
							</Grid>
						</Grid>
					</Paper>

					{/* Display all users */}
					<Paper
						elevation={6}
						sx={{ my: 3, borderRadius: "10px", boxSizing: "border-box" }}>
						<TableContainer sx={{ width: "100%", overflow: "hidden" }}>
							<Table
								className="mt-3"
								sx={{ minWidth: 650 }}
								size="small">
								<TableHead className="bg-slate-300">
									<TableRow>
										<TableCell>Username</TableCell>
										<TableCell>Họ tên</TableCell>
										<TableCell>Email</TableCell>
										<TableCell>Trạng thái</TableCell>
										<TableCell>Thao tác</TableCell>
									</TableRow>
								</TableHead>

								<TableBody>
									{users && users.length > 0 ? (
										users
											.slice(
												page * rowsPerPage,
												page * rowsPerPage + rowsPerPage
											)
											.map(user => (
												<TableRow
													key={user.id}
													className="hover:bg-slate-100 cursor-pointer"
													sx={{
														"&:last-child td, &:last-child th": { border: 0 },
													}}>
													<TableCell> {user.login} </TableCell>
													<TableCell>
														{user.lastName + " " + user.firstName}
													</TableCell>
													<TableCell> {user.email} </TableCell>
													<TableCell>
														<Tooltip
															placement="right-start"
															title={
																user.activated === true ? "Disable" : "Active"
															}>
															<Switch
																size="small"
																color="success"
																className="cursor-pointer"
																disabled={user.login === "admin" ? true : false}
																checked={user.activated === true ? true : false}
															/>
														</Tooltip>
													</TableCell>
													<TableCell>
														<Tooltip
															title="Edit"
															placement="right-start">
															<IconButton
																color="success"
																disabled={user.login ? true : false}
																onClick={() => {
																	setSelectedUser(user), setModalUpdate(true);
																}}>
																<EditNoteRounded fontSize="medium" />
															</IconButton>
														</Tooltip>
														<Tooltip
															title="Edit"
															placement="right-start">
															<IconButton
																color="error"
																disabled={user.login === "admin" ? true : false}
																onClick={() => {
																	if (
																		window.confirm("Bạn chắc chắn muốn xóa ?")
																	) {
																		handleDelete(user.login);
																	}
																}}>
																<DeleteOutlineRounded fontSize="small" />
															</IconButton>
														</Tooltip>
													</TableCell>
												</TableRow>
											))
									) : (
										<TableRow>
											<TableCell
												colSpan={6}
												align="center">
												No Data
											</TableCell>
										</TableRow>
									)}
								</TableBody>
							</Table>
						</TableContainer>
						<TablePagination
							component="div"
							count={users ? users.length : 0}
							page={page}
							onPageChange={handleChangePage}
							rowsPerPage={rowsPerPage}
							onRowsPerPageChange={handleChangeRowsPerPage}
						/>
					</Paper>
				</Box>
			)}

			{/* Add or Update User */}
			{selectedUser && (
				<Dialog
					open={selectedUser ? modalUpdate : modalAdd}
					onClose={() =>
						selectedUser ? setModalUpdate(false) : setModalAdd(false)
					}
					className="max-w-[500px] mx-auto">
					<Tooltip title="Close">
						<CloseOutlined
							onClick={() =>
								selectedUser ? setModalUpdate(false) : setModalAdd(false)
							}
							color="error"
							className="text-md absolute top-1 right-1 rounded-full hover:opacity-80 hover:bg-red-200 cursor-pointer"
						/>
					</Tooltip>

					<DialogTitle className="text-center mt-2">
						{selectedUser ? "Updated User Information" : "Add New User"}
					</DialogTitle>

					<Divider />

					<DialogContent>
						{selectedUser ? (
							<form onSubmit={handleUpdate(UpdateUser)}>
								<Box className="my-3">
									<TextField
										{...update("id")}
										className="min-w-[300px] rounded-md cursor-pointer shadow-lg w-full"
										defaultValue={selectedUser.id}
										disabled
										hidden
									/>
								</Box>

								<Box className="my-3">
									<TextField
										{...update("login")}
										className="min-w-[300px] rounded-md  cursor-pointer shadow-lg w-full"
										defaultValue={selectedUser.login}
										disabled
									/>
								</Box>

								<Box className="my-3">
									<TextField
										{...update("lastName", {
											required: "Nhập đầy đủ thông tin.",
											minLength: { value: 8, message: "Tối thiểu 8 ký tự." },
											maxLength: { value: 50, message: "Tối đa 50 ký tự." },
										})}
										type="text"
										defaultValue={selectedUser.lastName}
										className="min-w-[300px] rounded-md cursor-pointer shadow-lg w-full"
										placeholder="Nhập họ"
									/>
									<FormHelperText className="text-red-700 px-2 mt-2 ">
										{errorsUpdate.lastName?.message}
									</FormHelperText>
								</Box>

								<Box className="my-3">
									<TextField
										{...update("firstName", {
											required: "Nhập đầy đủ thông tin.",
											minLength: { value: 8, message: "Tối thiểu 8 ký tự." },
											maxLength: { value: 50, message: "Tối đa 50 ký tự." },
										})}
										type="text"
										defaultValue={selectedUser.firstName}
										className="min-w-[300px] rounded-md  cursor-pointer shadow-lg w-full"
										placeholder="Nhập tên"
									/>
									<FormHelperText className="text-red-700 px-2 mt-2 ">
										{errorsUpdate.firstName?.message}
									</FormHelperText>
								</Box>

								<Box>
									{/* <select
										{...update("authorities")}
										className="min-w-[300px] w-full p-[12px] rounded-md cursor-pointer shadow-lg"
										id="authority">
										<option value="">Vui lòng bấm chọn</option>
										{authorities &&
											authorities
												.filter(pre => pre.name !== "ROLE_ADMIN")
												.map(item => (
													<option
														key={item.name}
														value={item.name}>
														{item.name}
													</option>
												))}
									</select>
									<FormHelperText className="text-red-700 px-2 mt-2">
										{errors.authorities?.message}
									</FormHelperText> */}
								</Box>

								<Box className="my-3">
									<TextField
										{...update("email", {
											required: "Nhập đầy đủ thông tin.",
											pattern: {
												value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
												message: "Phải đúng định dạng email.",
											},
										})}
										defaultValue={selectedUser.email}
										className="min-w-[300px] rounded-md cursor-pointer shadow-lg w-full"
										placeholder="Nhập địa chỉ email"
										disabled
									/>
								</Box>

								<Box className="flex justify-between">
									<Button
										type="submit"
										variant="contained"
										size="medium"
										className="w-full mr-2 p-2 text-white bg-[#008200] hover:opacity-85"
										startIcon={<DoneRounded fontSize="medium" />}>
										Cập nhật
									</Button>
									<Button
										onClick={() => reset()}
										variant="contained"
										size="medium"
										className="w-full p-2 text-white bg-[#0C2340] hover:opacity-85"
										startIcon={<RotateLeftRounded fontSize="medium" />}>
										Hủy bỏ
									</Button>
								</Box>
							</form>
						) : (
							<form onSubmit={handleSubmit(AddUser)}>
								<Box className="my-3">
									<TextField
										{...register("login", {
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
										type="text"
										size="small"
										color="primary"
										className="min-w-[300px] rounded-md  cursor-pointer shadow-lg w-full"
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
										type="text"
										size="small"
										color="primary"
										className="min-w-[300px] cursor-pointer shadow-lg w-full"
										placeholder="Nhập tên"
									/>
									<FormHelperText className="text-red-700 px-2 mt-2 ">
										{errors.firstName?.message}
									</FormHelperText>
								</Box>
								<Box>
									<InputLabel className="font-semibold">
										Loại bài viết:
									</InputLabel>
									<FormControl sx={{ width: 300 }}>
										<Select
											{...register("authorities")}
											labelId="authorities"
											id="authorities"
											size="small"
											className="shadow-lg"
											multiple
											displayEmpty
											value={watch("authorities")}
											renderValue={categoriesId => {
												if (categoriesId.length === 0) {
													return (
														<i className="text-gray-400">Vui lòng bấm chọn</i>
													);
												}

												const categoriesName = categoriesId.map(id =>
													authorities.get(id)
												);

												return categoriesName.join(", ");
											}}
											MenuProps={MenuProps}>
											{Array.from(authorities).map(item => (
												<MenuItem
													key={item[0]}
													value={item[0]}>
													<ListItemText primary={item[1]} />
												</MenuItem>
											))}
										</Select>
									</FormControl>
									<Typography className="text-red-700 p-2">
										{errors.authorities?.message}
									</Typography>
								</Box>

								<Box className="my-3">
									<TextField
										{...register("email", {
											required: "Nhập đầy đủ thông tin.",
											pattern: {
												value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
												message: "Phải đúng định dạng email.",
											},
										})}
										type="text"
										size="small"
										color="primary"
										className="min-w-[300px] rounded-md cursor-pointer shadow-lg w-full"
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
						)}
					</DialogContent>
				</Dialog>
			)}
		</Box>
	);
}
