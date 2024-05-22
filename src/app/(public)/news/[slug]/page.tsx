"use server";

import * as React from "react";
import createDOMPurify from "dompurify";
import { JSDOM } from "jsdom";
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

	const window = new JSDOM("").window;
	const DOMPurify = createDOMPurify(window);

	const sanitizedContent = DOMPurify.sanitize(post?.content || "");

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
					<Box
						className="w-5/6 mx-auto py-5 text-justify"
						dangerouslySetInnerHTML={{ __html: sanitizedContent }}
					/>
				</Container>
			</Box>
		</>
	);
}
