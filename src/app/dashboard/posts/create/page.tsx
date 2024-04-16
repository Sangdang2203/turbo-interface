"use client";

import * as React from "react";
import { toast } from "sonner";
import { useForm, Controller } from "react-hook-form";
import dynamic from "next/dynamic";
import { Post } from "types/interfaces";
import generateSlug from "../../../methods/generateSlug";
import { DoneRounded, RotateLeftRounded } from "@mui/icons-material";
import { Box, Button, FormHelperText, Paper, TextField } from "@mui/material";
import useS3 from "hooks/useS3";
import Image from "next/image";




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
    getValues,
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
                required: "Nhập tiêu đề bài viết.",
                minLength: { value: 10, message: "Tối thiểu 10 ký tự.", },
                maxLength: { value: 100, message: "Tối thiểu 100 ký tự.", },
              })}
              type="text"
              className="min-w-[300px] w-full border rounded-md p-[10px] cursor-pointer shadow-lg"
              placeholder="Nhập tiêu đề bài viết "
            />
            <FormHelperText className="text-red-700 ml-2">{errors.title?.message}</FormHelperText>
          </Box>

          <Box className="my-3 flex items-center justify-between">
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
          </Box>

          <Box className="my-3">
            <label className="font-semibold">Slug:</label>
            <TextField
              id="slug"
              {...register("slug")}
              className="min-w-[300px] w-full border rounded-md p-[10px] cursor-pointer shadow-lg"
              value={generateSlug(register("title"))}
            />
          </Box>

          <Box className="my-3">
            <label className="font-semibold">Mô tả ngắn:</label>
            <TextField
              {...register("description", { required: "Vui lòng điền thông tin." })}
              className="min-w-[300px] w-full border rounded-md p-[10px] cursor-pointer shadow-lg"
              placeholder="Nhập mô tả ngắn"
            />
            <FormHelperText className="text-red-700 ml-2 ">{errors.description?.message}</FormHelperText>
          </Box>

          <Box className="my-3">
            <label className="font-semibold">Nội dung bài viết:</label>
            <CustomEditor
              {...register("content", { required: "Vui lòng điền thông tin." })}
            />
            <FormHelperText className="text-red-700 ml-2 ">{register("content") == null ? errors.content?.message : ""}</FormHelperText>
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