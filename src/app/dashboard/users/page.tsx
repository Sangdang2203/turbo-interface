"use client";

import React from "react";
import { useSession } from "next-auth/react";
import Loading from "@/components/Loading";
import {
	Box,
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
} from "@mui/material";
import { DeleteOutlineRounded, SearchOutlined } from "@mui/icons-material";
import {
	fetchAuthorities,
	fetchUsers,
	fetchDeleteUser,
} from "app/methods/method";
import { ApiResponse, UpdateUserRequest, User } from "types/interfaces";
import { toast } from "sonner";
import CreateUserForm from "./createUserForm";

export default function UserManagement() {
	const [loading, setLoading] = React.useState(true);
	const [selectedUser, setSelectedUser] = React.useState<User | null>(null);
	const [users, setUsers] = React.useState<User[]>([]);
	const [authorities, setAuthorities] = React.useState<Map<string, string>>(
		new Map<string, string>()
	);
	const [modalUpdate, setModalUpdate] = React.useState(false);
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(10);

	const { data: session } = useSession();

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
								<CreateUserForm />
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
										<TableCell>#</TableCell>
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
											.map((user, index) => (
												<TableRow
													key={user.id}
													className="hover:bg-slate-100 cursor-pointer"
													sx={{
														"&:last-child td, &:last-child th": { border: 0 },
													}}>
													<TableCell className="font-semibold">
														{index + 1}
													</TableCell>
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
															title="Remove"
															placement="right-start">
															<span>
																<IconButton
																	color="error"
																	disabled={
																		user.login === "admin" ? true : false
																	}
																	onClick={() => {
																		if (
																			window.confirm("Bạn chắc chắn muốn xóa ?")
																		) {
																			handleDelete(user.login);
																		}
																	}}>
																	<DeleteOutlineRounded fontSize="small" />
																</IconButton>
															</span>
														</Tooltip>
													</TableCell>
												</TableRow>
											))
									) : (
										<TableRow>
											<TableCell
												colSpan={6}
												align="center">
												Không tìm thấy dữ liệu ...
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
		</Box>
	);
}
