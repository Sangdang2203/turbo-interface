"use client";

import * as React from "react";
import { toast } from "sonner";
import Image from "next/image";
import { useForm } from "react-hook-form";
import dynamic from "next/dynamic";
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
	FormControl,
	ListItemText,
	MenuItem,
	Select,
	Chip,
} from "@mui/material";
import { fetchCategories, fetchUsers } from "app/methods/method";
import { useSession } from "next-auth/react";
import { zodResolver } from "@hookform/resolvers/zod";
import Loading from "@/components/Loading";

const CustomEditor = dynamic(
	() => {
		return import("@/components/CustomEditor");
	},
	{ ssr: false }
);

export default function EditPost({ params }: { params: { postId: string } }) {
	const [loading, setLoading] = React.useState(true);
	const [post, setPost] = React.useState<Post>();
	const [categories, setCategories] = React.useState<Map<string, string>>(
		new Map<string, string>()
	);
	const [users, setUsers] = React.useState<Map<string, string>>(
		new Map<string, string>()
	);

	const { data: session } = useSession();

	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
		reset,
	} = useForm<POSTSCHEMA>({
		resolver: zodResolver(SCHEMA),
	});

	async function UpdatePost(updatedPost: POSTSCHEMA) {
		if (session) {
			const message = toast.loading("Đang cập nhật bài viết ...");
			try {
				const res = await fetch(`/api/posts/${params.postId}`, {
					method: "PUT",
					headers: {
						Authorization: `Bearer ${session?.user.id_token}`,
						"Content-Type": "application/json",
					},
					body: JSON.stringify(updatedPost),
				});

				const payload = (await res.json()) as ApiResponse;

				if (payload.ok) {
					toast.success(payload.message);
				}
				toast.error(payload.message);
			} catch (error) {
				console.log(error);
			}
			toast.dismiss(message);
		}
	}
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

						{/* <Box className="my-3 flex justify-between">
							<Box>
								<InputLabel className="font-semibold">
									Loại bài viết:
								</InputLabel>
								<FormControl sx={{ width: 300 }}>
									<Select
										{...register("categories")}
										labelId="categories"
										id="categories"
										size="small"
										className="shadow-lg"
										multiple
										displayEmpty
										value={watch("categories")}
										renderValue={categoriesId => {
											if (categoriesId && categoriesId.length === 0) {
												return (
													<i className="text-gray-400">Vui lòng bấm chọn</i>
												);
											}

											const categoriesName =
												categoriesId &&
												categoriesId.map(id => categories.get(id));

											return categoriesName;
										}}>
										{Array.from(categories).map(item => (
											<MenuItem
												key={item[0]}
												value={item[0]}>
												<ListItemText primary={item[1]} />
											</MenuItem>
										))}
									</Select>
								</FormControl>
								<Typography className="text-red-700 p-2">
									{errors.categories?.message}
								</Typography>
							</Box>

							<Box>
								<InputLabel className="font-semibold">Tác giả:</InputLabel>
								<FormControl
									sx={{ width: 300 }}
									size="small">
									<Select
										{...register("userId")}
										labelId="demo-select-small-label"
										id="demo-select-small"
										size="small"
										className="shadow-lg"
										displayEmpty
										value={watch("userId")}
										renderValue={userId => {
											if (!userId) {
												return (
													<i className="text-gray-400">Vui lòng bấm chọn</i>
												);
											}
											return users.get(userId);
										}}>
										{Array.from(users).map(item => {
											return (
												<MenuItem
													key={item[0]}
													value={item[0]}>
													{item[1]}
												</MenuItem>
											);
										})}
									</Select>
								</FormControl>
								<Typography className="text-red-700 p-2">
									{errors.userId?.message}
								</Typography>
							</Box>
						</Box> */}

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
							{/* <CustomEditor
              {...register("content")}
              fullWidth
              variant="outlined"
              className="shadow-lg"
              placeholder="Nhập nội dung bài viết" /> */}
							<TextField
								{...register("content")}
								fullWidth
								variant="outlined"
								className="shadow-lg"
								placeholder="Nhập nội dung bài viết"
								defaultValue={post?.content}
							/>
							<Typography className="text-red-700 p-2 ">
								{errors.content?.message}
							</Typography>
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
