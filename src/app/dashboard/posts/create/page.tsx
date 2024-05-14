"use client";

import * as React from "react";
import Image from "next/image";
import useS3 from "@/hooks/useS3";
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
import { useSession } from "next-auth/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default function CreatePost() {
	const [categories, setCategories] = React.useState<Map<string, string>>(
		new Map<string, string>()
	);
	const [users, setUsers] = React.useState<Map<string, string>>(
		new Map<string, string>()
	);

	const { data: session } = useSession();
	//const [imageUrl, setImageUrl] = React.useState("");
	const [content, setContent] = React.useState("");
	const { handleFileUpload, ButtonUpload, preview } = useS3();

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
			description: "",
			content: "",
		},
	});

	const previewUrl = React.useMemo(() => {
		if (preview) {
			return URL.createObjectURL(preview);
		}
	}, [preview]);

	// const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
	// 	const file = event.target.files?.[0];
	// 	if (file) {
	// 		const url = URL.createObjectURL(file);
	// 		setImageUrl(url);
	// 	} else {
	// 		console.log("No file selected !");
	// 	}
	// };

	async function handleCreatePost(data: POSTSCHEMA) {
		if (session) {
			const message = toast.loading("Đang tạo bài viết mới");

			const post: CreatePostRequest = {
				title: data.title,
				categories: data.categories.map(item => ({ id: item })),
				user: { id: data.userId },
				urlImage: data.urlImage,
				description: data.description,
				content: data.content,
				status: "ACTIVE",
			};

			try {
				const res = await fetch("/api/posts", {
					method: "POST",
					headers: {
						Authorization: `Bearer ${session.user.id_token}`,
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						...post,
						urlImage: await handleFileUpload(),
					}),
				});

				const payload = (await res.json()) as ApiResponse;

				if (payload.ok) {
					toast.success(payload.message);
				} else {
					toast.error(payload.message);
				}
			} catch (error) {
				toast.error("Error: Lỗi khi tạo bài viết mới.");
				console.log(error);
			}
			toast.dismiss(message);
		}
	}

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
			<Paper sx={{ p: 5 }}>
				<form onSubmit={handleSubmit(handleCreatePost)}>
					<Box className="my-3">
						<InputLabel className="font-semibold">Tiêu đề bài viết:</InputLabel>
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

					<Grid
						container
						mb={3}>
						<Grid
							item
							md={4}>
							<InputLabel className="font-semibold">Ảnh bài viết:</InputLabel>
							<div className="flex justify-between items-center mb-1">
								{preview ? (
									<Image
										src={`${previewUrl}`}
										width={0}
										height={0}
										alt={"preview"}
										title={"preview"}
										style={{
											width: "clamp(180px, 100%, 180px)",
											height: "auto",
											marginTop: "10px",
											borderRadius: "12px",
										}}
									/>
								) : (
									<Image
										src="https://dummyimage.com/500x500/c3c3c3/FFF.png&text=UploadImage"
										alt={"preview"}
										title={"preview"}
										priority
										width={180}
										height={180}
										className="rounded-md"
									/>
								)}
							</div>

							<Box width={180}>
								<ButtonUpload />
							</Box>
						</Grid>

						<Grid
							item
							md={8}>
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
												if (categoriesId.length === 0) {
													return (
														<b className="text-gray-400 font-normal">
															Vui lòng bấm chọn
														</b>
													);
												}

												const categoriesName = categoriesId.map(id =>
													categories.get(id)
												);

												return categoriesName.join(", ");
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

					{/* <Box className="my-3">
						<InputLabel className="font-semibold">Ảnh bài viết:</InputLabel>
						<TextField
							{...register("urlImage")}
							type="file"
							size="small"
							variant="outlined"
							fullWidth
							className="cursor-pointer shadow-lg"
							placeholder="Vui lòng bấm chọn ảnh"
							onChange={handleImageUpload}
						/>
						<Typography className="text-red-700 p-2">
							{errors.urlImage?.message}
						</Typography>
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
						/>
						<Typography className="text-red-700 p-2 ">
							{errors.description?.message}
						</Typography>
					</Box>

					<Box className="my-3">
						<InputLabel className="font-semibold">
							Nội dung bài viết:
						</InputLabel>

						{/* <CKEditor
							{...register("content")}
							editor={ClassicEditor}
							onChange={(event, editor) => {
								const data = editor.getData();
								console.log("Data:", data);
								setContent(data);
							}}
							onBlur={(event, editor) => {
								console.log("Blur.", editor);
							}}
							onFocus={(event, editor) => {
								console.log("Focus.", editor);
							}}></CKEditor> */}

						<TextField
							{...register("content")}
							fullWidth
							variant="outlined"
							className="shadow-lg"
							placeholder="Nhập nội dung bài viết"
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
							onClick={() => reset()}
							startIcon={<RotateLeftRounded fontSize="medium" />}>
							Hủy bỏ
						</Button>
					</Box>
				</form>
			</Paper>
		</>
	);
}
