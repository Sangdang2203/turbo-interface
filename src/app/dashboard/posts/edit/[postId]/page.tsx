"use client";

import * as React from "react";
import { toast } from "sonner";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { DoneRounded, RotateLeftRounded } from "@mui/icons-material";
import {
	Category,
	ApiResponse,
	User,
	POSTSCHEMA,
	SCHEMA,
	Post,
} from "types/interfaces";
import {
	Box,
	Button,
	Typography,
	Paper,
	TextField,
	InputLabel,
} from "@mui/material";
import { fetchCategories, fetchUsers } from "app/methods/method";
import { useSession } from "next-auth/react";
import { zodResolver } from "@hookform/resolvers/zod";
import Loading from "@/components/Loading";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";

export default function EditPost({ params }: { params: { postId: string } }) {
	const { data: session } = useSession();
	const [loading, setLoading] = React.useState(true);
	const [post, setPost] = React.useState<Post>();
	const [content, setContent] = React.useState("");

	const [categories, setCategories] = React.useState<Map<string, string>>(
		new Map<string, string>()
	);

	const [users, setUsers] = React.useState<Map<string, string>>(
		new Map<string, string>()
	);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<updatedPost>();

	interface updatedPost {
		title: string;
		description: string;
	}

	async function UpdatePost(updatedPost: updatedPost) {
		if (session) {
			const message = toast.loading("Đang cập nhật bài viết ...");

			try {
				const res = await fetch(`/api/posts/${params.postId}`, {
					method: "PUT",
					headers: {
						Authorization: `Bearer ${session?.user.id_token}`,
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ ...updatedPost, content: content }),
				});

				console.log({ ...updatedPost, content: content });

				const payload = (await res.json()) as ApiResponse;

				if (payload.ok) {
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

	// get one post
	React.useEffect(() => {
		const fectchData = async () => {
			const res = await fetch(`/api/posts/${params.postId}`, {
				method: "GET",
				cache: "no-cache",
			});

			const payload = await res.json();

			if (payload.ok) {
				setPost(payload.data);
			}
		};

		fectchData();
	}, [params.postId]);

	React.useEffect(() => {
		if (session) {
			Promise.all([
				fetchCategories(session.user.id_token),
				fetchUsers(session.user.id_token),
			]).then(data => {
				const [resCate, resUser] = data;

				if (resCate.ok) {
					setCategories(
						new Map<string, string>(
							resCate.data.map((item: Category) => [item.id, item.name])
						)
					);
				}

				if (resUser.ok) {
					setUsers(
						new Map<string, string>(
							resUser.data.map((item: User) => [item.id, item.login])
						)
					);
				}
			});
		}
	}, [session]);

	return (
		<>
			{!loading ? (
				<Loading />
			) : (
				<Paper sx={{ p: 5 }}>
					<form onSubmit={handleSubmit(UpdatePost)}>
						<Box className="my-3">
							<InputLabel className="font-semibold">
								Tiêu đề bài viết:
							</InputLabel>
							<TextField
								{...register("title")}
								type="text"
								size="small"
								variant="outlined"
								fullWidth
								className="cursor-pointer shadow-lg"
								placeholder="Nhập tiêu đề bài viết "
								defaultValue={post?.title}
							/>
							<Typography className="text-red-700 p-2">
								{errors.title?.message}
							</Typography>
						</Box>

						<Box className="my-3">
							<InputLabel className="font-semibold">Mô tả ngắn:</InputLabel>
							<TextField
								{...register("description")}
								type="text"
								size="small"
								variant="outlined"
								fullWidth
								className="shadow-lg"
								placeholder="Nhập mô tả ngắn"
								defaultValue={post?.description}
							/>
							<Typography className="text-red-700 p-2 ">
								{errors.description?.message}
							</Typography>
						</Box>

						<Box className="my-3">
							<InputLabel className="font-semibold">
								Nội dung bài viết:
							</InputLabel>

							<CKEditor
								editor={ClassicEditor}
								data={post?.content}
								onChange={(event, editor) => {
									const data = editor.getData();
									setContent(data); // set the content state with the current data from the editor
								}}
							/>
						</Box>

						<Box className="flex justify-center mb-2 mt-10 mx-auto">
							<Button
								type="submit"
								variant="contained"
								size="medium"
								color="success"
								className="w-[30%] mx-2"
								startIcon={<DoneRounded fontSize="medium" />}>
								Hoàn thành
							</Button>
							<Button
								variant="contained"
								size="medium"
								color="error"
								className="w-[30%] mx-2"
								onClick={e => {
									reset();
								}}
								startIcon={<RotateLeftRounded fontSize="medium" />}>
								Hủy bỏ
							</Button>
						</Box>
					</form>
				</Paper>
			)}
		</>
	);
}
