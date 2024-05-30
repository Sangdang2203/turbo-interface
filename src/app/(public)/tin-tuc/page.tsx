"use client";

import {
	Box,
	Button,
	Container,
	Divider,
	Grid,
	Stack,
	TablePagination,
	TextField,
	Tooltip,
	Typography,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Link from "next/link";
import Image from "next/image";
import * as React from "react";
import { ApiResponse, Post } from "types/interfaces";
import { fetchPosts } from "@/app/methods/method";
import Loading from "@/components/Loading";

export default function NewsPage() {
	const [loading, setLoading] = React.useState(true);
	const [posts, setPosts] = React.useState<Post[]>([]);
	const [lastestPosts, setLastestPosts] = React.useState<Post[]>([]);
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(10);

	function handleSearch(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const nameInput = document.getElementById(
			"searchInput"
		) as HTMLInputElement;
		const name = nameInput.value.trim();

		if (name === "") {
			fetchPosts().then((data: { ok: any; data: any[] }) => {
				if (data.ok) {
					setPosts(data.data.reverse());
				}
			});
		} else {
			const filterPosts = posts
				.reverse()
				.filter(post => post.title.toLowerCase().includes(name.toLowerCase()));

			setPosts(filterPosts);
		}
	}

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

	React.useEffect(() => {
		const lastestPosts = async () => {
			const res = await fetch("/api/lastest-posts", {
				method: "GET",
			});
			const payload = (await res.json()) as ApiResponse;

			if (payload.ok) {
				setLastestPosts(payload.data.reverse().slice(0, 4));
			}
		};
		lastestPosts();
	}, []);

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
				<Container>
					<Grid container>
						<Grid
							item
							xs={12}
							sm={4}
							my={5}>
							<form
								onSubmit={handleSearch}
								method="post"
								className="flex justify-center items-center my-4 relative w-[90%]">
								<TextField
									size="small"
									type="text"
									name="search"
									id="searchInput"
									className="shadow-md text-sm rounded-lg w-full cursor-pointer mr-3"
									placeholder="Nhập tiêu đề cần tìm ..."
								/>
								<Button
									type="submit"
									variant="contained"
									color="success">
									Tìm
								</Button>
							</form>

							<Typography className="text-xl text-center w-[90%]">
								Bài viết mới
							</Typography>
							{lastestPosts &&
								lastestPosts.map(item => {
									if (item.status === "ACTIVE") {
										return (
											<Box
												key={item.id}
												my={2}
												className="w-[90%]">
												<Link
													href={`tin-tuc/${item.slug}`}
													className="line-clamp-2 text-sky-700 no-underline text-sm hover:text-yellow-600 duration-500"
													title={item.title}>
													{item.title}
												</Link>
												<Divider className="my-3" />
											</Box>
										);
									}
								})}
						</Grid>

						<Grid
							item
							xs={12}
							sm={8}
							className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 my-10">
							{posts &&
								posts
									.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
									.map(item => {
										if (item.status === "ACTIVE") {
											return (
												// DISPLAY ALL POSTS
												<div
													key={item.id}
													className="post_card max-h-[500px] shadow-sm hover:scale-105 hover:duration-700">
													<div className="card-image">
														<Link href={`news/${item.slug}`}>
															{item.urlImage && (
																<Image
																	src={
																		"https://project-sem3.s3.ap-southeast-1.amazonaws.com/" +
																		item.urlImage
																	}
																	width={200}
																	height={150}
																	priority
																	className="min-h-[200px] w-full sm:min-h-[130px] card-image rounded-md"
																	alt={item.urlImage}
																/>
															)}
														</Link>
													</div>

													<div className="author">
														<div className="name flex items-center">
															<AccessTimeIcon fontSize="small" />
															<p className="px-1">
																{new Date(item.createdDate)
																	.toLocaleDateString("en-GB", {
																		day: "2-digit",
																		month: "2-digit",
																		year: "numeric",
																	})
																	.slice(0, 10)}
															</p>
														</div>
													</div>
													<div className="min-h-[150px] px-1">
														<Tooltip title={item.title}>
															<Link
																href={`news/${item.slug}`}
																className="heading no-underline line-clamp-2">
																{item.title}
															</Link>
														</Tooltip>
														<p className="text-[0.9rem] text-gray-500 line-clamp-3">
															{item.description}
														</p>
													</div>

													<Link
														href={`tin-tuc/${item.slug}`}
														className="text-sky-700 text-[0.85rem] pl-2 no-underline hover:text-sky-500">
														Đọc thêm &gt;&gt;
													</Link>
												</div>
											);
										}
									})}
						</Grid>
					</Grid>

					<Stack
						spacing={2}
						py={10}>
						<TablePagination
							component="div"
							count={posts ? posts.length : 0}
							page={page}
							onPageChange={handleChangePage}
							rowsPerPage={rowsPerPage}
							onRowsPerPageChange={handleChangeRowsPerPage}
						/>
					</Stack>
				</Container>
			)}
		</>
	);
}
