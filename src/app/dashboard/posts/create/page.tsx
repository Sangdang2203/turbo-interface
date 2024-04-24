"use client";

import * as React from "react";
import { toast } from "sonner";
import { useForm, SubmitHandler } from "react-hook-form";
import dynamic from "next/dynamic";
import { Post, Category, CreatePostRequest, ApiResponse, User } from "types/interfaces";
import { DoneRounded, RotateLeftRounded } from "@mui/icons-material";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Box, Button, Checkbox, FormControl, FormHelperText, ListItemText, MenuItem, OutlinedInput, Paper, TextField } from "@mui/material";
import useS3 from "hooks/useS3";
import Image from "next/image";
import { fetchCategories, fetchUsers } from "app/methods/method";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const CustomEditor = dynamic(() => {
  return import("@/components/CustomEditor");
}, { ssr: false });

export default function CreatePost() {
  const [loading, setLoading] = React.useState(true);
  const [post, setPost] = React.useState<Post>();
  const [categories, setCategories] = React.useState<Category[]>([]);
  const [user, setUser] = React.useState("");
  const [users, setUsers] = React.useState<User[]>([]);
  const [categoryName, setCategoryName] = React.useState<string[]>([]);

  const { data: session } = useSession();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
    watch,
  } = useForm<CreatePostRequest>();

  const { handleFileUpload, ButtonUpload, preview } = useS3();
  const previewUrl = React.useMemo(() => {
    if (preview) {
      return URL.createObjectURL(preview);
    }
  }, [preview]);

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

  const handleChangeAuthor = (event: SelectChangeEvent) => {
    setUser(event.target.value);
  };

  const handleChangeCategory = (event: SelectChangeEvent<typeof categoryName>) => {
    const {
      target: { value },
    } = event;
    setCategoryName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  async function AddNewPost(post: CreatePostRequest) {
    if (session) {
      const message = toast.loading("Loading...");
      try {
        const res = await fetch("/api/posts", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${session?.user.id_token}`,
            "Content-Type": "application/json",
          },
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
  }

  React.useEffect(() => {
    if (session) {
      Promise.all([
        fetchCategories(session.user.id_token),
        fetchUsers(session.user.id_token)
      ])
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
    }
  }, [session])

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
              type="text" size="small" variant="outlined"
              className="min-w-[300px] w-full rounded-md cursor-pointer shadow-lg"
              placeholder="Nhập tiêu đề bài viết "
            />
            <FormHelperText className="text-red-700 px-2 mt-2">{errors.title?.message}</FormHelperText>
          </Box>

          <Box className="my-3 flex justify-between">
            <Box>
              <label className="font-semibold">Loại bài viết:</label>
              <div>
                <FormControl sx={{ width: 300 }}>
                  <Select
                    {...register("category")}
                    labelId="categories"
                    id="categories"
                    size="small"
                    className="shadow-lg"
                    multiple
                    displayEmpty
                    value={categoryName}
                    onChange={handleChangeCategory}
                    input={<OutlinedInput label="Tag" />}
                    renderValue={(selected) => {
                      if (selected.length === 0) {
                        return <em>Vui lòng bấm chọn</em>;
                      }

                      return selected.join(', ');
                    }}
                    MenuProps={MenuProps}
                  >
                    {categories && categories.map((item) => (
                      <MenuItem key={item.id} value={item.name}>
                        {/* <Checkbox checked={categoryName.indexOf(item.id) > -1} /> */}
                        <ListItemText primary={item.name} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              <FormHelperText className="text-red-700 px-2 mt-2">{errors.category?.message}</FormHelperText>
            </Box>

            <Box>
              <label className="font-semibold">Tác giả:</label>
              <div>
                <FormControl sx={{ width: 300 }} size="small">
                  <Select
                    {...register("user")}
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    size="small"
                    className="shadow-lg"
                    displayEmpty
                    value={user}
                    onChange={handleChangeAuthor}
                    renderValue={(selected) => {
                      if (!selected) {
                        return <em>Vui lòng bấm chọn</em>;
                      }
                      return selected;
                    }}
                  >
                    {users && users.map((item) => {
                      return (
                        <MenuItem key={item.id} value={item.lastName + " " + item.firstName}>
                          {item.lastName + " " + item.firstName}
                        </MenuItem>
                      )
                    })}
                  </Select>
                </FormControl>
              </div>
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
              type="text" size="small" variant="outlined"
              className="min-w-[300px] w-full rounded-md cursor-pointer shadow-lg"
              placeholder="Nhập mô tả ngắn"
            />
            <FormHelperText className="text-red-700 px-2 mt-2 ">{errors.description?.message}</FormHelperText>
          </Box>

          <Box className="my-3">
            <label className="font-semibold">Nội dung bài viết:</label>
            <TextField variant="outlined"
              {...register("content", { required: "Vui lòng điền thông tin." })}
              className="min-w-[300px] w-full rounded-md cursor-pointer shadow-lg"
              placeholder="Nhập nội dung bài viết"
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
