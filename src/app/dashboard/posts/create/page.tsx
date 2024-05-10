"use client";

import * as React from "react";
import Image from "next/image";
import useS3 from "@/hooks/useS3";
import { useForm } from "react-hook-form";
import dynamic from "next/dynamic";
import { Category, User, POSTSCHEMA, SCHEMA } from "types/interfaces";
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
import AddNewPost from "./addPost";

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
			urlImage: "",
			description: undefined,
			content: undefined,
		},
	});

	const { handleFileUpload, ButtonUpload, preview } = useS3();

	const previewUrl = React.useMemo(() => {
		if (preview) {
			return URL.createObjectURL(preview);
		}
	}, [preview]);

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
				<form onSubmit={handleSubmit(AddNewPost(session))}>
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

					<div className="flex justify-between items-center my-3">
						{preview ? (
							<Image
								src={`${previewUrl}`}
								width={0}
								height={0}
								alt={"preview"}
								title={"preview"}
								style={{
									width: "clamp(100px, 100%, 200px)",
									height: "auto",
									margin: "20px",
								}}
							/>
						) : (
							<Image
								src="https://dummyimage.com/500x500/c3c3c3/FFF.png&text=UploadImage"
								alt={"preview"}
								title={"preview"}
								width={180}
								height={180}
								className="rounded-md"
							/>
						)}

						<ButtonUpload />

						<Typography className="text-red-700 p-2">
							{errors.urlImage?.message}
						</Typography>
					</div>

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
