"use client";

import * as React from "react";
import { toast } from "sonner";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import dynamic from "next/dynamic";
import { ApiResponse, Post } from "types/interfaces";
import { DoneRounded, RotateLeftRounded } from "@mui/icons-material";
import { Box, Button, Typography, Paper, TextField } from "@mui/material";
import useS3 from "hooks/useS3";
import { useSession } from "next-auth/react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


const CustomEditor = dynamic(() => {
  return import("@/components/CustomEditor");
}, { ssr: false });

const SCHEMA = z.object({
  title: z.string({
    required_error: "Nhập tiêu đề bài viết."
  }).min(10, "Tối thiểu 10 ký tự").max(100, "Tối đa 100 ký tự."),
  description: z.string({
    required_error: "Vui lòng điền thông tin."
  }),
  content: z.string({
    required_error: "Vui lòng điền thông tin."
  }),
  status: z.string().optional()
})

type UpdatedPostRequest = z.infer<typeof SCHEMA>


export default function EditPost() {
  const [loading, setLoading] = React.useState(true);
  const [selectedPost, setSelectedPost] = React.useState<Post | null>(null);
  const { data: session } = useSession();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Post>();

  // const { handleFileUpload, ButtonUpload, preview } = useS3();
  // const previewUrl = React.useMemo(() => {
  //   if (preview) {
  //     return URL.createObjectURL(preview);
  //   }
  // }, [preview]);

  async function UpdatePost(updatedPost: UpdatedPostRequest) {
    if (session) {
      const message = toast.loading("Loading...")
      try {
        const res = await fetch(`/api/posts/`, {
          method: "PUT",
          body: JSON.stringify(updatedPost),
          headers: {
            Authorization: `Bearer ${session?.user.id_token}`,
            "Content-Type": "application/json"
          },
        })

        const payload = (await res.json()) as ApiResponse;

        if (payload.ok) {
          toast.success(payload.message)
        }
        toast.error(payload.message)

      } catch (error) {
        console.log(error);
      }
      toast.dismiss(message);
    }
  }

  return (
    <>
      <Paper sx={{ p: 5 }}>
        <form
          onSubmit={handleSubmit(UpdatePost)}>
          <Box className="my-3">
            <label className="font-semibold">Tiêu đề bài viết:</label>
            <TextField
              {...register("title")}
              value={selectedPost?.title}
              size="small" variant="outlined"
              className="min-w-[300px] w-full rounded-md cursor-pointer shadow-lg"
              placeholder="Nhập tiêu đề bài viết "
            />
            <Typography className="text-red-700 px-2 mt-2">{errors.title?.message}</Typography>
          </Box>

          <Box className="my-3 flex justify-between">
            <Box>
              <label className="font-semibold">Loại bài viết:</label>
              <TextField
                disabled
                value={selectedPost?.categories}
                size="small" variant="outlined"
                className="min-w-[300px] w-full rounded-md cursor-pointer shadow-lg"
              />
            </Box>
            <Box>
              <label className="font-semibold">Tác giả:</label>
              <TextField
                disabled
                value={selectedPost?.user}
                size="small" variant="outlined"
                className="min-w-[300px] w-full rounded-md cursor-pointer shadow-lg"
              />
            </Box>
          </Box>

          {/* Upload and display post photo */}
          {/* <Box className="my-3 flex justify-between items-center">
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
          </Box> */}

          <Box className="my-3">
            <label className="font-semibold">Mô tả ngắn:</label>
            <TextField
              {...register("description", { setValueAs: value => value.length ? value : undefined })}
              size="small" variant="outlined"
              className="min-w-[300px] w-full rounded-md cursor-pointer shadow-lg"
              value={selectedPost?.description}
              placeholder="Nhập mô tả ngắn"
            />
            <Typography className="text-red-700 px-2 mt-2 ">{errors.description?.message}</Typography>
          </Box>

          <Box className="my-3">
            <label className="font-semibold">Nội dung bài viết:</label>
            <TextField
              {...register("content", { setValueAs: value => value.length ? value : undefined })}
              size="small" variant="outlined"
              className="min-w-[300px] w-full rounded-md cursor-pointer shadow-lg"
              value={selectedPost?.content}
              placeholder="Nhập nội dung bài viết"
            />
            <Typography className="text-red-700 px-2 mt-2 ">{errors.content?.message}</Typography>
          </Box>

          <Box className="flex justify-around mb-2 mt-10 w-1/2 mx-auto">
            <Button
              type="submit" variant="contained" size="medium" className="w-full mx-1 p-2 text-white bg-[#008200] hover:opacity-85"
              startIcon={<DoneRounded fontSize='medium' />} >Cập nhật
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
