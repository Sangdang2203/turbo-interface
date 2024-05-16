"use server";

import Link from "next/link";
import Image from "next/image";
import * as React from "react";
import { fetchPost, fetchPosts } from "@/app/methods/fetchApi";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Post } from "types/interfaces";
import CustomRating from "@/components/CustomRating";
import { Box, Container, Typography } from "@mui/material";

export default async function PostDetail({
	params,
}: {
	params: { slug: string; a: string };
}) {
	const posts: Map<string, Post> = new Map<string, Post>(
		(await fetchPosts()).map((post: Post) => [post.slug, post])
	);

	const id = posts.get(params.slug)?.id;

	let post: Post | null = null;

	if (id) {
		post = await fetchPost(id);
	}

	return (
		<>
			<Box>
				<Box className="text-white w-3/4 themePost flex justify-center items-center">
					<Typography className="text-xl w-3/4 leading-10 font-bold uppercase text-center text-with-shadow">
						{post?.title}
					</Typography>
				</Box>

				<Container>
					<Box my={2}>
						<CustomRating />
					</Box>
					<Box className="w-3/4 mx-auto py-5"> {post?.content} </Box>
				</Container>

				{/* <Typography className="my-10 text-center text-xl text-sky-600">
					Bài viết liên quan
				</Typography>
				<Container className="container grid sm:grid-cols-4 gap-x-6 gap-y-6 pb-10">
					{Array.from(posts.values()).map(item => {
						return (
							<div
								key={item.id}
								className="post_card max-h-[500px] shadow-sm hover:scale-105 hover:duration-700">
								<div className="card-image">
									<Link href={`news/${item.slug}`}>
										<Image
											src={item.urlImage}
											width={200}
											height={150}
											className="w-full h-auto rounded-md"
											alt={item.urlImage}
										/>
									</Link>
								</div>

								<div className="author">
									<div className="name flex items-center">
										<AccessTimeIcon fontSize="small" />
										<p className="px-1">{item.createdDate.slice(0, 10)}</p>
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
					})}
				</Container> */}
			</Box>
		</>
	);
}
