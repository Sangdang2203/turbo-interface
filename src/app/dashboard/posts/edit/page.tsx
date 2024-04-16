"use client";

import * as React from "react";
import { toast } from "sonner";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import dynamic from "next/dynamic";
import { Post } from "types/interfaces";
import { DoneRounded, RotateLeftRounded } from "@mui/icons-material";
import { Box, Button, FormHelperText, Paper, TextField } from "@mui/material";
import useS3 from "hooks/useS3";


const CustomEditor = dynamic(() => {
  return import("@/components/CustomEditor");
}, { ssr: false });



const CreatePost = () => {
  const [loading, setLoading] = React.useState(true);
  const [post, setPost] = React.useState<Post>();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<Post>();

  const { handleFileUpload, ButtonUpload, preview } = useS3();
  const previewUrl = React.useMemo(() => {
    if (preview) {
      return URL.createObjectURL(preview);
    }
  }, [preview]);

  const AddNewPost = () => {

  }
  return (
    <>
      <Paper sx={{ p: 5 }}>
        <form
          onSubmit={handleSubmit(AddNewPost)}>
          <Box className="my-3">
            <label className="font-semibold">Tiêu đề bài viết:</label>
            <TextField
              {...register("title", {
                required: "Vui lòng điền thông tin.",
                minLength: { value: 10, message: "Tối thiểu 10 ký tự.", },
                maxLength: { value: 100, message: "Tối thiểu 100 ký tự.", },
              })}
              defaultValue={post?.title}
              className="min-w-[300px] border rounded-md p-[10px] cursor-pointer shadow-lg w-full"
              placeholder="Nhập tiêu đề bài viết "
            />
            <FormHelperText className="text-red-700 ml-2">{errors.title?.message}</FormHelperText>
          </Box>

          {/* Upload and display post photo */}
          <Box className="my-3 flex justify-between items-center">
            <Box>
              {preview ?
                <Image src={`${previewUrl}`}
                  width={0}
                  height={0}
                  objectFit='contain'
                  alt={"Ảnh đại diện bài viết"}
                  title={"Ảnh đại diện bài viết"}
                  style={{
                    width: 'clamp(100px, 100%, 200px)',
                    height: 'auto',
                    marginBottom: '20px',
                    borderRadius: '12px'
                  }}
                /> :
                <img
                  src={"https://project-sem3.s3.ap-southeast-1.amazonaws.com/" + post?.image}
                  alt={post?.title}
                  style={{ maxHeight: "300px", maxWidth: "300px" }}
                  className="rounded-md"
                />
              }
            </Box>
            <Box><ButtonUpload /></Box>
          </Box>

          <Box className="my-3">
            <label className="font-semibold">Mô tả ngắn:</label>
            <TextField
              {...register("description", {
                required: "Vui lòng điền thông tin."
              })}
              className="min-w-[300px] border rounded-md p-[10px] cursor-pointer shadow-lg w-full"
              placeholder="Nhập mô tả ngắn"
            />
            <FormHelperText className="text-red-700 ml-2 ">{errors.description?.message}</FormHelperText>
          </Box>

          <Box className="my-3">
            <label className="font-semibold">Nội dung bài viết:</label>
            <CustomEditor
              {...register("content", {
                required: "Vui lòng điền thông tin."
              })}
              initialData={post?.content}
              placeholder="Nhập nội dung bài viết"
            />
            <FormHelperText className="text-red-700 ml-2 ">{post?.content.length === 0 ? errors.content?.message : ""}</FormHelperText>
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

export default CreatePost;