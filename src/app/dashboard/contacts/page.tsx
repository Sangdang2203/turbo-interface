"use client";

import React from "react";
import { useSession } from "next-auth/react";
import Loading from "@/components/Loading";

import {
	Box,
	IconButton,
	Grid,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Tooltip,
	Dialog,
	DialogContent,
	DialogTitle,
	Typography,
	Chip,
	TextField,
	TablePagination,
	Button,
} from "@mui/material";

import {
	CloseOutlined,
	SearchOutlined,
	Visibility,
	DeleteOutline,
} from "@mui/icons-material";
import {
	fetchContact,
	fetchContacts,
	fetchDeleteContact,
} from "app/methods/method";
import { CustomerMessage } from "types/interfaces";
import { toast } from "sonner";

export default function CategoryManagement() {
	const [loading, setLoading] = React.useState(true);
	const [contact, setContact] = React.useState<CustomerMessage>();
	const [contacts, setContacts] = React.useState<CustomerMessage[]>([]);
	const [openDialog, setOpenDialog] = React.useState(false);
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
	// SEARCH
	function handleSearch(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		if (session) {
			const nameInput = document.getElementById(
				"searchInput"
			) as HTMLInputElement;
			const name = nameInput.value.trim();

			if (name === "") {
				fetchContacts().then(data => {
					if (data.ok) {
						setContacts(data.data.reverse());
					}
				});
			} else {
				const filterPosts = contacts.filter(
					contact =>
						contact.name.toLowerCase().includes(name.toLowerCase()) ||
						contact.email.toLowerCase().includes(name.toLowerCase())
				);

				setContacts(filterPosts);
			}
		}
	}

	// DELETE CONTACT
	async function handleDelete(contactId: string) {
		const message = toast.loading("Đang thực hiện xóa bài viết.");
		const response = await fetchDeleteContact(contactId);

		if (response.ok) {
			setContacts(pre => pre.filter(contact => contact.id !== contactId));
			toast.success(response.message);
		} else {
			toast.error(response.message);
		}

		toast.dismiss(message);
	}

	// FETCH DATA
	React.useEffect(() => {
		if (session) {
			Promise.all([fetchContacts()]).then(data => {
				const [resContact] = data;

				if (resContact.ok) {
					setContacts(resContact.data.reverse());
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
								className="flex justify-between items-center p-3"></Grid>
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
										className="relative shadow-md text-sm rounded-lg min-w-[300px] min-h-[40px] cursor-pointer mr-3"
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
					{/* display all contacts */}
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
										<TableCell>Khách hàng</TableCell>
										<TableCell>Email</TableCell>
										<TableCell>Số điện thoại</TableCell>
										<TableCell>Xem chi tiết</TableCell>
									</TableRow>
								</TableHead>

								<TableBody>
									{contacts && contacts.length > 0 ? (
										contacts
											.slice(
												page * rowsPerPage,
												page * rowsPerPage + rowsPerPage
											)
											.map((item, index) => (
												<TableRow
													key={item.id}
													className="hover:bg-slate-100 cursor-pointer"
													sx={{
														"&:last-child td, &:last-child th": { border: 0 },
													}}>
													<TableCell className="font-semibold">
														{index + 1}{" "}
													</TableCell>
													<TableCell className="capitalize">
														{item.name}
													</TableCell>
													<TableCell> {item.email} </TableCell>
													<TableCell> {item.phone} </TableCell>
													<TableCell>
														<Tooltip
															title="See detail"
															placement="top">
															<IconButton
																color="inherit"
																onClick={() => {
																	setContact(item);
																	setOpenDialog(true);
																}}>
																<Visibility fontSize="medium" />
															</IconButton>
														</Tooltip>

														<Tooltip title="Remove">
															<IconButton
																color="error"
																onClick={() => {
																	if (
																		window.confirm("Bạn chắc chắn muốn xóa ?")
																	) {
																		handleDelete(item.id);
																	}
																}}>
																<DeleteOutline fontSize="small" />
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
												Không tìm thấy dữ liệu ...
											</TableCell>
										</TableRow>
									)}
								</TableBody>
							</Table>
						</TableContainer>
						<TablePagination
							component="div"
							count={contacts ? contacts.length : 0}
							page={page}
							onPageChange={handleChangePage}
							rowsPerPage={rowsPerPage}
							onRowsPerPageChange={handleChangeRowsPerPage}
						/>
					</Paper>
				</Box>
			)}

			{/* View detailed contact */}
			{contact && (
				<Dialog
					open={openDialog}
					onClose={() => setOpenDialog(false)}
					className="min-w-[800px] mx-auto">
					<Tooltip title="Close">
						<CloseOutlined
							onClick={() => setOpenDialog(false)}
							color="error"
							className="text-white absolute top-1 right-1 bg-red-500 rounded hover:opacity-80 cursor-pointer"
						/>
					</Tooltip>

					<DialogTitle className="text-center mt-2">
						Thông tin khách hàng
					</DialogTitle>

					<DialogContent>
						<Box>
							<b>Khách hàng cá nhân | Doanh nghiệp:</b>
							<Typography className="mb-5">{contact.name}</Typography>
							<b>Email:</b>
							<Typography className="mb-5"> {contact.email}</Typography>
							<b>Số điện thoại:</b>
							<Typography className="mb-5"> {contact.phone}</Typography>
							<b>Dịch vụ đang cần tư vấn:</b>
							<Typography className="mb-5 line-clamp-2">
								{contact.services.slice(0, 2).map(sv => {
									return <p key={sv}>{sv}</p>;
								})}
							</Typography>
							<b>Ghi chú:</b>
							<Typography className="mb-5 line-clamp-2">
								{contact.message}
							</Typography>
						</Box>
					</DialogContent>
				</Dialog>
			)}
		</Box>
	);
}
