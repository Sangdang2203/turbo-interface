"use client";

import * as React from "react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import dynamic from "next/dynamic";
import {
	Category,
	ApiResponse,
	User,
	POSTSCHEMA,
	CreatePostRequest,
	SCHEMA,
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
} from "@mui/material";
import { fetchCategories, fetchUsers } from "app/methods/method";
import { useSession } from "next-auth/react";
import { zodResolver } from "@hookform/resolvers/zod";

const CustomEditor = dynamic(
	() => {
		return import("@/components/CustomEditor");
	},
	{ ssr: false }
);

export default function CreatePost() {
	const [categories, setCategories] = React.useState<Map<string, string>>(
		new Map<string, string>()
	);
	const [users, setUsers] = React.useState<Map<string, string>>(
		new Map<string, string>()
	);

	const { data: session } = useSession();
	const [content, setContent] = React.useState("");

	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
		reset,
	} = useForm<POSTSCHEMA>({
		resolver: zodResolver(SCHEMA),
		defaultValues: {
			title: undefined,
			categories: [],
			userId: "",
			description: undefined,
			content: undefined,
		},
	});

	// Begin multi select
	const ITEM_HEIGHT = 40;
	const ITEM_PADDING_TOP = 8;
	const MenuProps = {
		PaperProps: {
			style: {
				maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
				width: 300,
			},
		},
	};

	async function AddNewPost(data: POSTSCHEMA) {
		if (session) {
			const message = toast.loading("Đang tạo bài viết mới");

			const post: CreatePostRequest = {
				title: data.title,
				categories: data.categories.map(item => ({ id: item })),
				user: {
					id: data.userId,
				},
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
					body: JSON.stringify(post),
				});

				const payload = (await res.json()) as ApiResponse;

				if (payload.ok) {
					toast.success(payload.message);
				} else {
					toast.error(payload.message);
				}
			} catch (error) {
				toast.error("Loi");
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
				<form onSubmit={handleSubmit(AddNewPost)}>
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

					<Box className="my-3 flex justify-between">
						<Box>
							<InputLabel className="font-semibold">Loại bài viết:</InputLabel>
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
										if (categoriesId.length === 0) {
											return <i className="text-gray-400">Vui lòng bấm chọn</i>;
										}

										const categoriesName = categoriesId.map(id =>
											categories.get(id)
										);

										return categoriesName.join(", ");
									}}
									MenuProps={MenuProps}>
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
											return <i className="text-gray-400">Vui lòng bấm chọn</i>;
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
						{/* <CustomEditor
							value={content}
							onChange={(value: string) => {
								setContent(value);
								console.log(value);
							}}
						/> */}

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
