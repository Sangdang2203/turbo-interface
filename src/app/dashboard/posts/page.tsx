"use client";

import {
	Dialog, Button, Grid, IconButton, Paper, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TextField, Tooltip,
} from "@mui/material";

import {
	SearchOutlined, AddCircleOutlineRounded, EditNoteRounded, DeleteOutline,
} from "@mui/icons-material";

import Loading from "@/components/Loading";
import { Post } from "types/interfaces";
import { fetchPosts, fetchDeletePost } from "app/methods/method";
import Image from "next/image";
import { toast } from "sonner";
import * as React from "react";

export default function PostManagement() {
	const [loading, setLoading] = React.useState(true);
	const [modal, setModal] = React.useState(false);
	const [posts, setPosts] = React.useState<Post[]>([]);
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(10);

	// SEARCH POST
	function handleSearch(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();

		const nameInput = document.getElementById("searchInput") as HTMLInputElement;
		const searchTerm = nameInput.value.trim().toLowerCase();

		// Early return for empty search term:
		if (searchTerm === "") {
			fetchPosts().then((data) => {
				if (data.ok) {
					setPosts(data.data.reverse());
				}
			});
			return;
		}

		const filteredPosts = posts.reverse().filter((post) => {
			const postTitleLower = post.title.toLowerCase();
			return postTitleLower.includes(searchTerm);
		});

		setPosts(filteredPosts);
	}
	// DELETE POST
	async function handleDelete(postId: string) {
		const message = toast.loading("Đang thực hiện xóa bài viết.");
		const response = await fetchDeletePost(postId);

		if (response.ok) {
			setPosts(pre => pre.filter(post => post.id !== postId));
			toast.success(response.message);
		} else {
			toast.error(response.message);
		}

		toast.dismiss(message);
	}
	const handleClose = () => {
		setModal(false);
	};
	// PAGINATION
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

	// FETCH DATA
	React.useEffect(() => {
		Promise.all([fetchPosts()]).then(data => {
			const [resPost] = data;
			if (resPost.ok) {
				setPosts(resPost.data.reverse());
			}
		});

		setLoading(false);
	}, []);

	return (
		<>
			{loading ? (
				<Loading />
			) : (
				<>
					<Paper
						elevation={6}
						sx={{ borderRadius: "10px", boxSizing: "border-box" }}>
						<Grid container>
							<Grid
								item
								xs={12}
								sm={6}
								className="flex justify-between items-center px-3">
								<Button
									variant="contained"
									color="primary"
									startIcon={<AddCircleOutlineRounded />}
									href="/dashboard/posts/create">
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
									className="flex justify-end items-center my-3 relative ">
									<TextField
										size="small"
										type="text"
										name="search"
										id="searchInput"
										className="cursor-pointer shadow-md text-sm rounded-lg min-w-[300px] mr-3"
										placeholder="Nhập tiêu đề bài viết ..."
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
										<TableCell>Tiêu đề</TableCell>
										<TableCell>Mô tả</TableCell>
										<TableCell>Hình ảnh</TableCell>
										<TableCell>Ngày tạo</TableCell>
										<TableCell>Tình trạng</TableCell>
										<TableCell>Thao tác</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{posts && posts.length > 0 ? (
										posts
											.slice(
												page * rowsPerPage,
												page * rowsPerPage + rowsPerPage
											)
											.map((post, index) => (
												<TableRow
													key={post.id}
													className="hover:bg-slate-100 cursor-pointer"
													sx={{
														"&:last-child td, &:last-child th": { border: 0 },
													}}>
													<TableCell
														align="center"
														className="font-semibold">
														{index + 1}
													</TableCell>
													<Tooltip
														title={post.title}
														placement="bottom">
														<TableCell className="w-[20%]">
															{post.title.length <= 50
																? post.title
																: post.title.slice(0, 50) + "..."}
														</TableCell>
													</Tooltip>

													<Tooltip
														title={post.description}
														placement="bottom">
														<TableCell className="w-[20%]">
															{post.description.length <= 50
																? post.description
																: post.description.slice(0, 50) + "..."}
														</TableCell>
													</Tooltip>

													<TableCell className="w-[15%]">
														<Image
															src={
																"https://project-sem3.s3.ap-southeast-1.amazonaws.com/" +
																post.urlImage
															}
															title={post.title}
															alt={post.urlImage}
															width={60}
															height={40}
															className="rounded-md"
														/>
													</TableCell>

													<TableCell className="w-[15%]">
														{new Date(post.createdDate)
															.toLocaleDateString("en-GB", {
																day: "2-digit",
																month: "2-digit",
																year: "numeric",
															})
															.slice(0, 10)}
													</TableCell>

													<TableCell className="w-[15%]">
														<Tooltip
															title={
																post.status === "ACTIVE" ? "Disable" : "Active"
															}
															placement="bottom">
															<Switch
																size="small"
																color="success"
																className="cursor-pointer"
																checked={
																	post.status === "ACTIVE" ? true : false
																}
															/>
														</Tooltip>
													</TableCell>

													<TableCell className="w-[15%]">
														<Tooltip title="Edit">
															<IconButton
																color="success"
																href={`/dashboard/posts/edit/${post.id}`}>
																<EditNoteRounded fontSize="medium" />
															</IconButton>
														</Tooltip>
														<Tooltip title="Remove">
															<IconButton
																color="error"
																onClick={() => {
																	setModal(true);
																}}>
																<DeleteOutline fontSize="small" />
															</IconButton>
														</Tooltip>

														{/* Delete Confirm Modal */}
														<Dialog
															open={modal}
															onClose={handleClose}
															className="min-w-[400px] lg:min-w-[900px] mx-auto rounded">
															<div className="group select-none w-[250px] flex flex-col p-4 relative items-center justify-center bg-gray-800 border border-gray-800 shadow-lg rounded">
																<div className="">
																	<div className="text-center p-3 flex-auto justify-center">
																		<svg
																			fill="currentColor"
																			viewBox="0 0 20 20"
																			className="group-hover:animate-bounce w-12 h-12 flex items-center text-gray-600 fill-red-500 mx-auto"
																			xmlns="http://www.w3.org/2000/svg">
																			<path
																				clipRule="evenodd"
																				d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
																				fillRule="evenodd"></path>
																		</svg>
																		<h2 className="text-xl font-bold py-4 text-gray-200">
																			Are you sure?
																		</h2>
																		<p className="font-bold text-sm text-gray-500 px-2">
																			Do you really want to continue ? This
																			process cannot be undone
																		</p>
																	</div>
																	<div className="p-2 mt-2 text-center space-x-1 md:block">
																		<button
																			onClick={handleClose}
																			className="cursor-pointer mb-2 md:mb-0 bg-gray-700 px-5 py-2 text-sm shadow-sm font-medium tracking-wider border-2 border-gray-600 hover:border-gray-700 text-gray-300 rounded-full hover:shadow-lg hover:bg-gray-800 transition ease-in duration-300">
																			Cancel
																		</button>
																		<button
																			onClick={() => {
																				handleClose();
																				handleDelete(post.id);
																			}}
																			className="cursor-pointer bg-red-500 hover:bg-transparent px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-red-500 hover:border-red-500 text-white hover:text-red-500 rounded-full transition ease-in duration-300">
																			Remove
																		</button>
																	</div>
																</div>
															</div>
														</Dialog>
													</TableCell>
												</TableRow>
											))
									) : (
										<TableRow>
											<TableCell
												colSpan={7}
												align="center"
												className="text-sm">
												Không tìm thấy dữ liệu
											</TableCell>
										</TableRow>
									)}
								</TableBody>
							</Table>
						</TableContainer>
						<TablePagination
							component="div"
							count={posts ? posts.length : 0}
							page={page}
							onPageChange={handleChangePage}
							rowsPerPage={rowsPerPage}
							onRowsPerPageChange={handleChangeRowsPerPage}
						/>
					</Paper>
				</>
			)}
		</>
	);
}
