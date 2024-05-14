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
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	TextField,
	Tooltip,
	Dialog,
	DialogContent,
	DialogTitle,
	Divider,
	FormHelperText,
} from "@mui/material";
import {
	CloseOutlined,
	DoneRounded,
	RotateLeftRounded,
	EditNoteRounded,
} from "@mui/icons-material";
import { fetchCategories } from "app/methods/method";
import { ApiResponse, Category, UpdateCategoryRequest } from "types/interfaces";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import AddCategoryForm from "./createForm";

export default function CategoryManagement() {
	const [loading, setLoading] = React.useState(true);
	const [selectedCategory, setSelectedCategory] = React.useState<Category>();
	const [categories, setCategories] = React.useState<Category[]>([]);
	const [modalUpdate, setModalUpdate] = React.useState(false);

	const { data: session } = useSession();

	const {
		register: update,
		handleSubmit: handleUpdate,
		formState: { errors: errorsUpdate },
		reset: resetUpdateForm,
	} = useForm<UpdateCategoryRequest>();

	// update
	async function UpdateCategory(category: UpdateCategoryRequest) {
		if (session) {
			const message = toast.loading("Đang cập nhật thay đổi ... ");
			try {
				const res = await fetch(`/api/categories/${category?.id}`, {
					method: "PATCH",
					headers: {
						Authorization: `Bearer ${session.user.id_token}`,
						"Content-Type": "application/json",
					},
					body: JSON.stringify(category),
				});

				console.log(category);

				const payload = (await res.json()) as ApiResponse;

				if (payload.ok) {
					const response = await fetchCategories(session.user.id_token);
					setCategories(await response.data.reverse());
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

	// fetch data
	React.useEffect(() => {
		if (session) {
			Promise.all([fetchCategories(session.user.id_token)]).then(data => {
				const [resCate] = data;

				if (resCate.ok) {
					setCategories(resCate.data.reverse());
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
								<AddCategoryForm />
							</Grid>
						</Grid>
					</Paper>
					{/* display all categories */}
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
										<TableCell>Loại bài viết</TableCell>
										<TableCell>Thao tác</TableCell>
									</TableRow>
								</TableHead>

								<TableBody>
									{categories && categories.length > 0 ? (
										categories.map((cate, index) => (
											<TableRow
												key={cate.id}
												className="hover:bg-slate-100 cursor-pointer"
												sx={{
													"&:last-child td, &:last-child th": { border: 0 },
												}}>
												<TableCell className="font-semibold">
													{index + 1}
												</TableCell>
												<TableCell> {cate.name} </TableCell>
												<TableCell>
													<Tooltip
														title="Edit"
														placement="right-start">
														<IconButton
															color="success"
															onClick={() => {
																setSelectedCategory(cate);
																setModalUpdate(true);
															}}>
															<EditNoteRounded fontSize="medium" />
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
					</Paper>
				</Box>
			)}

			{/* Update Category */}
			{selectedCategory && (
				<Dialog
					open={modalUpdate}
					onClose={() => setModalUpdate(false)}
					className="max-w-[500px] mx-auto">
					<Tooltip title="Close">
						<CloseOutlined
							onClick={() => setModalUpdate(false)}
							color="error"
							className="text-md absolute top-1 right-1 rounded-full hover:opacity-80 hover:bg-red-200 cursor-pointer"
						/>
					</Tooltip>

					<DialogTitle className="text-center mt-2">
						Cập nhật danh mục
					</DialogTitle>

					<Divider />

					<DialogContent>
						<form onSubmit={handleUpdate(UpdateCategory)}>
							<Box className="my-3">
								<TextField
									{...update("id")}
									className="min-w-[300px] rounded-md  cursor-pointer shadow-lg w-full"
									value={selectedCategory?.id}
									hidden
									disabled
								/>
							</Box>
							<Box className="my-3">
								<TextField
									{...update("name", {
										required: "Nhập đầy đủ thông tin.",
										minLength: { value: 8, message: "Tối thiểu 8 ký tự." },
										maxLength: { value: 50, message: "Tối đa 50 ký tự." },
									})}
									className="min-w-[300px] rounded-md  cursor-pointer shadow-lg w-full"
									defaultValue={selectedCategory?.name}
								/>
								<FormHelperText className="text-red-700 px-2 mt-2 ">
									{errorsUpdate.name?.message}
								</FormHelperText>
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
									onClick={() => resetUpdateForm()}
									variant="contained"
									size="medium"
									className="w-full p-2 text-white bg-[#0C2340] hover:opacity-85"
									startIcon={<RotateLeftRounded fontSize="medium" />}>
									Hủy bỏ
								</Button>
							</Box>
						</form>
					</DialogContent>
				</Dialog>
			)}
		</Box>
	);
}
