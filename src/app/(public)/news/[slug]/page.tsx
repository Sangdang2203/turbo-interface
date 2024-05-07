"use server";

import Link from "next/link";
import * as React from "react";
import { fetchPost, fetchPosts } from "../../../../methods/fetchApi";
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
					<Typography className="text-xl leading-10 font-bold uppercase line-clamp-3 text-with-shadow">
						{post?.title}
					</Typography>
				</Box>

				<Container>
					<Box my={2}>
						<CustomRating />
					</Box>
					<Box className="w-3/4 mx-auto"> {post?.content} </Box>
				</Container>

				<Typography className="my-10 text-center text-xl text-sky-600">
					Bài viết liên quan
				</Typography>
				<Container className="container grid sm:grid-cols-4 gap-x-6 gap-y-6 pb-10">
					{Array.from(posts.values()).map(item => {
						return (
							<Box
								key={item.id}
								className="relative shadow-2xl p-1 rounded-md hover:scale-105 duration-700 cursor-pointer">
								<Box className="mb-16 px-3">
									<Typography className="text-xl line-clamp-2">
										{item.title}
									</Typography>
									<Typography className="text-sm pt-2 line-clamp-2">
										{item.description}
									</Typography>
								</Box>

								<Box className="absolute bottom-1 left-1">
									<Link
										href={`/news/${item.id}`}
										className="px-3 text-sky-700 no-underline hover:text-sky-500">
										Đọc thêm &gt;&gt;
									</Link>
								</Box>
							</Box>
						);
					})}
				</Container>
			</Box>
		</>
	);
}
