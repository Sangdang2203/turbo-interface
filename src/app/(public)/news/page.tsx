"use client";

import {
	Box,
	Button,
	Chip,
	Container,
	Divider,
	Grid,
	Pagination,
	Stack,
	TextField,
	Typography,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Link from "next/link";
import * as React from "react";
import { Post } from "types/interfaces";
import { fetchPosts } from "app/methods/method";
import Loading from "@/components/Loading";

export default function NewsPage() {
	const [loading, setLoading] = React.useState(true);
	const [posts, setPosts] = React.useState<Post[]>([]);
	//const [postsMap, setPostsMap] = React.useState<Map<string, string>>(new Map());
	const [latestPosts, setLatestPosts] = React.useState<Post[]>([]);
	const [page, setPage] = React.useState(1);

	const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
		setPage(value);
	};

	function handleSearch(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const nameInput = document.getElementById(
			"searchInput"
		) as HTMLInputElement;
		const name = nameInput.value.trim();

		if (name === "") {
			fetchPosts().then(data => {
				if (data.ok) {
					setPosts(data.data.reverse());
				}
			});
		} else {
			const filterPosts = posts.filter(post =>
				post.title.toLowerCase().includes(name.toLowerCase())
			);

			setPosts(filterPosts);
		}
	}

	const getLastestPosts = (posts: Post[]): Post[] => {
		//@ts-ignore
		const sortedPosts = posts.sort((a, b) => a.createAt - b.updateAt);
		const lastestPosts = sortedPosts.slice(0, 3);
		return lastestPosts;
	};

	const lastestPosts = getLastestPosts(posts);

	React.useEffect(() => {
		Promise.all([fetchPosts()]).then(data => {
			const [resPost] = data;
			if (resPost.ok) {
				setPosts(resPost.data);
				setLatestPosts(getLastestPosts(resPost.data));
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
													href={`news/${item.id}`}
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
							xs={6}
							sm={8}
							className="grid md:grid-cols-3 gap-3 my-10">
							{posts &&
								posts.map(item => {
									if (item.status === "ACTIVE") {
										return (
											<div
												key={item.id}
												className="post_card max-h-[500px] shadow-sm hover:scale-105 hover:duration-700">
												<div className="card-image">
													<img
														src="https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/07/anh-phong-canh-dep-24.jpg"
														className="w-full h-auto rounded-md"
														alt="UnifiedCloudStorage"
													/>
												</div>

												<div className="author">
													<div className="name flex items-center">
														<AccessTimeIcon fontSize="small" />
														<p className="px-1">
															{item.createdDate.slice(0, 10)}
														</p>
													</div>
												</div>
												<div className="heading line-clamp-3 min-h-[80px]">
													{item.title}
												</div>
												<Link
													href={`news/${item.slug}`}
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
						<Pagination
							shape="rounded"
							count={Math.ceil(posts.length / 9)}
							page={page}
							onChange={handleChange}
						/>
					</Stack>
				</Container>
			)}
		</>
	);
}
