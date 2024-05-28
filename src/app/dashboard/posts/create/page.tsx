"use client";

import * as React from "react";
import { useForm } from "react-hook-form";

import {
	Category,
	User,
	POSTSCHEMA,
	SCHEMA,
	ApiResponse,
	CreatePostRequest,
} from "types/interfaces";

import { DoneRounded, RotateLeftRounded } from "@mui/icons-material";

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
	Grid,
} from "@mui/material";

import { fetchCategories, fetchUsers } from "app/methods/method";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useSession } from "next-auth/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import useS3 from "@/hooks/useS3";
import Image from "next/image";

export default function CreatePost() {
	const { data: session } = useSession();

	const [categories, setCategories] = React.useState<Map<string, string>>(
		new Map<string, string>()
	);
	const [users, setUsers] = React.useState<Map<string, string>>(
		new Map<string, string>()
	);

	const [content, setContent] = React.useState("");

	const { handleFileUpload, ButtonUpload, preview } = useS3();
	const previewUrl = React.useMemo(() => {
		if (preview) {
			return URL.createObjectURL(preview);
		}
	}, [preview]);

	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
		reset,
	} = useForm<POSTSCHEMA>({
		resolver: zodResolver(SCHEMA),
		defaultValues: {
			title: "",
			categories: [],
			userId: "",
			urlImage: "",
			description: "",
		},
	});

	async function handleCreatePost(data: POSTSCHEMA) {
		const message = toast.loading("Đang tạo bài viết mới.");

		const post: CreatePostRequest = {
			title: data.title,
			categories: data.categories.map(item => ({ id: item })),
			user: { id: data.userId },
			description: data.description,
			urlImage: await handleFileUpload(),
			status: "ACTIVE",
		};

		try {
			const res = await fetch("/api/posts", {
				method: "POST",
				body: JSON.stringify({
					...post,
					content: content,
					urlImage: await handleFileUpload(),
				}),
			});

			const payload = (await res.json()) as ApiResponse;

			if (payload.ok) {
				toast.success(payload.message);
				reset();
				setContent("");
			} else {
				toast.error(payload.message);
			}
		} catch (error) {
			toast.error("Error: Lỗi khi tạo bài viết mới.");
			console.log(error);
		}
		toast.dismiss(message);
	}

	React.useEffect(() => {
		if (session) {
			Promise.all([fetchCategories(), fetchUsers()]).then(data => {
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
		<React.Fragment>
			<Paper sx={{ p: 5 }}>
				<form onSubmit={handleSubmit(handleCreatePost)}>
					<Grid
						container
						mb={3}
						height={250}>
						<Grid
							item
							md={4}>
							{preview ? (
								<Image
									src={`${previewUrl}`}
									width={220}
									height={190}
									objectFit="contain"
									alt={"preview"}
									title={"preview"}
									style={{
										borderRadius: "4px",
									}}
								/>
							) : (
								<Image
									{...register("urlImage")}
									src={
										"https://dummyimage.com/500x500/c3c3c3/FFF.png&text=UploadImage"
									}
									alt={"preview"}
									title={"preview"}
									width={220}
									height={190}
									className="rounded-md"
								/>
							)}
							<div className="w-[220px]">
								<ButtonUpload />
							</div>
						</Grid>

						<Grid
							item
							md={8}
							className="flex flex-col justify-between">
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
								/>
								<Typography className="text-red-700 p-2">
									{errors.title?.message}
								</Typography>
							</Box>
							<Box className="flex justify-between items-center">
								<Box>
									<InputLabel className="font-semibold">
										Loại bài viết:
									</InputLabel>
									<FormControl>
										<Select
											{...register("categories")}
											labelId="categories"
											id="categories"
											size="small"
											className="shadow-lg min-w-[250px]"
											multiple
											displayEmpty
											value={watch("categories")}
											renderValue={categoriesId => {
												if (!categoriesId || categoriesId.length === 0) {
													return (
														<b className="text-gray-400 font-normal">
															Vui lòng bấm chọn
														</b>
													);
												}

												const categoriesName =
													categoriesId &&
													categoriesId.map(id => categories.get(id));

												return categoriesName?.join(", ");
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
									<FormControl>
										<Select
											{...register("userId")}
											labelId="demo-select-small-label"
											id="demo-select-small"
											size="small"
											className="shadow-lg min-w-[250px]"
											displayEmpty
											value={watch("userId")}
											renderValue={userId => {
												if (!userId) {
													return (
														<b className="text-gray-400 font-normal">
															Vui lòng bấm chọn
														</b>
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
							</Box>
						</Grid>
					</Grid>

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
							data={content}
							onChange={(event, editor) => {
								const data = editor.getData();
								setContent(data);
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
							onClick={() => {
								reset();
								setContent("");
							}}
							startIcon={<RotateLeftRounded fontSize="medium" />}>
							Hủy bỏ
						</Button>
					</Box>
				</form>
			</Paper>
		</React.Fragment>
	);
}
