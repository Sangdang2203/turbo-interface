"use client";

import * as React from "react";
import { toast } from "sonner";
import { useForm, SubmitHandler } from "react-hook-form";
import dynamic from "next/dynamic";
import { Post, Category, CreatePostRequest, ApiResponse, User } from "types/interfaces";
import { DoneRounded, RotateLeftRounded } from "@mui/icons-material";
import { Box, Button, FormHelperText, Paper, TextField } from "@mui/material";
import useS3 from "hooks/useS3";
import Image from "next/image";
import { fetchCategories, fetchUsers } from "app/methods/method";

const CustomEditor = dynamic(() => {
  return import("@/components/CustomEditor");
}, { ssr: false });

export default function CreatePost() {
  const [loading, setLoading] = React.useState(true);
  const [post, setPost] = React.useState<Post>();
  const [categories, setCategories] = React.useState<Category[]>([]);
  const [users, setUsers] = React.useState<User[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
    watch,
  } = useForm<Post>();

  const category = watch("category");

  const { handleFileUpload, ButtonUpload, preview } = useS3();
  const previewUrl = React.useMemo(() => {
    if (preview) {
      return URL.createObjectURL(preview);
    }
  }, [preview]);

  async function AddNewPost(post: CreatePostRequest) {
    const message = toast.loading("Loading...");
    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify(post),
      })

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

  React.useEffect(() => {
    Promise.all([fetchCategories(), fetchUsers()])
      .then(data => {
        const [resCate, resUser] = data;

        if (resCate.ok) {
          setCategories(resCate.data);
        }

        if (resUser.ok) {
          setUsers(resUser.data)
        }
      })
    setLoading(false);
  }, [])

  return (
    <>
      <Paper sx={{ p: 5 }}>
        <form
          onSubmit={handleSubmit(AddNewPost)}>

          <Box className="my-3">
            <label className="font-semibold">Tiêu đề bài viết:</label>
            <TextField
              {...register("title", {
                required: "Nhập tiêu đề bài viết.",
                minLength: { value: 10, message: "Tối thiểu 10 ký tự.", },
                maxLength: { value: 100, message: "Tối thiểu 100 ký tự.", },
              })}
              type="text"
              className="min-w-[300px] w-full border rounded-md p-[10px] cursor-pointer shadow-lg"
              placeholder="Nhập tiêu đề bài viết "
            />
            <FormHelperText className="text-red-700 px-2 mt-2">{errors.title?.message}</FormHelperText>
          </Box>

          <Box className="my-3 flex justify-between">
            <Box>
              <label className="font-semibold">Loại bài viết:</label>
              <select
                {...register("category")}
                className="min-w-[300px] w-full border rounded-md p-[10px] cursor-pointer shadow-lg"
                id="category">
                <option value="">Vui lòng bấm chọn</option>
                {categories && categories.map(category => (
                  <option
                    key={category.id}
                    value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
              <FormHelperText className="text-red-700 px-2 mt-2">{errors.category?.message}</FormHelperText>
            </Box>
            <Box>
              <label className="font-semibold">Tác giả:</label>
              <select
                {...register("user")}
                className="min-w-[300px] w-full border rounded-md p-[10px] cursor-pointer shadow-lg"
                id="user">
                <option value="">Vui lòng bấm chọn</option>
                {users && users.map(user => (
                  <option
                    key={user.id}
                    value={user.lastName + " " + user.firstName}>
                    {user.lastName + " " + user.firstName}
                  </option>
                ))}
              </select>
              <FormHelperText className="text-red-700 px-2 mt-2">{errors.user?.message}</FormHelperText>
            </Box>
          </Box>

          {/* <Box className="my-3 flex items-center justify-between">
            <Box>
              {preview ?
                <Image src={`${previewUrl}`}
                  width={0}
                  height={0}
                  objectFit='contain'
                  alt={"preview"}
                  title={"Ảnh đại diện bài viết"}
                  style={{
                    width: 'clamp(100px, 100%, 200px)',
                    height: 'auto',
                    marginBottom: '15px',
                    borderRadius: '12px'
                  }}
                /> :
                <img {...register("image")} src={'https://dummyimage.com/500x500/c3c3c3/FFF.png&text=UploadImage'}
                  alt={"preview"} title={"preview"} width={180} height={180} className="rounded-md"
                />
              }
            </Box>
            <Box><ButtonUpload /></Box>
          </Box> */}

          <Box className="my-3">
            <label className="font-semibold">Mô tả ngắn:</label>
            <TextField
              {...register("description", { required: "Vui lòng điền thông tin." })}
              className="min-w-[300px] w-full border rounded-md p-[10px] cursor-pointer shadow-lg"
              placeholder="Nhập mô tả ngắn"
            />
            <FormHelperText className="text-red-700 px-2 mt-2 ">{errors.description?.message}</FormHelperText>
          </Box>

          <Box className="my-3">
            <label className="font-semibold">Nội dung bài viết:</label>
            <TextField
              {...register("content", { required: "Vui lòng điền thông tin." })}
              className="min-w-[300px] w-full border rounded-md p-[10px] cursor-pointer shadow-lg"
            />
            <FormHelperText className="text-red-700 px-2 mt-2 ">{register("content") == null ? errors.content?.message : ""}</FormHelperText>
          </Box>

          <Box className="flex justify-around mb-2 mt-10 w-1/2 mx-auto">
            <Button
              type="submit" variant="contained" size="medium" className="w-full mx-1 p-2 text-white bg-[#008200] hover:opacity-85"
              startIcon={<DoneRounded fontSize='medium' />} >Thêm bài viết
            </Button>
            <Button
              type="reset" variant="contained" size="medium" className="w-full mx-1 p-2 text-white bg-[#0C2340] hover:opacity-85"
              startIcon={<RotateLeftRounded fontSize='medium' />} >Hủy bỏ
            </Button>
          </Box>
        </form >
      </Paper >
    </>
  )
}
