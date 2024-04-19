"use client";

import { CloseOutlined, DoneRounded, RotateLeftRounded, Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, Button, Dialog, DialogContent, DialogTitle, Divider, FormHelperText, IconButton, InputAdornment, MenuItem, OutlinedInput, Paper, TextField, Tooltip } from "@mui/material";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { red } from "@mui/material/colors";
import { fetchAuthorities, fetchUsers } from "app/methods/method";
import * as React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { User, CreateUserRequest, ApiResponse, Authority, Role } from "types/interfaces";

export default function CreateUser() {
  const [loading, setLoading] = React.useState(false);
  const [user, setUser] = React.useState<User>();
  const [authorities, setAuthorities] = React.useState<Authority[]>([]);
  const [showPassword, setShowPassword] = React.useState(false);
  const [openAddAuth, setOpenAddAuth] = React.useState(false);

  const handleChange = (event: SelectChangeEvent) => {
    //@ts-ignore
    setRole(event.target.value as string);
  };
  const handleClickShowPassword = () => {
    setShowPassword(show => !show);
  };

  const handleMouseEvents = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<CreateUserRequest>();

  const {
    register: roleRegister,
    handleSubmit: roleHandleSubmit,
    formState: { errors: roleErrors },
  } = useForm<Role>();


  async function AddUser(user: CreateUserRequest) {
    try {
      const message = toast.loading("Loading ...");
      const res = await fetch("/api/users", {
        method: "POST",
        body: JSON.stringify(user),
      });

      const payload = (await res.json()) as ApiResponse;

      if (payload.ok) {
        toast.success(payload.message);
      } else {
        toast.error(payload.message);
      }
      toast.dismiss(message);

    } catch (error) {
      console.log("Error add user: ", error);
    }
  }

  async function AddAuth(role: Role) {
    const message = toast.loading("Loading...");
    try {
      const res = await fetch("/api/roles/", {
        method: "POST",
        body: JSON.stringify(role),
      });

      const payload = (await res.json()) as ApiResponse;

      if (payload.ok) {
        const response = await fetchAuthorities();
        setAuthorities(await response.data);
        setOpenAddAuth(false);
        toast.success(payload.message);
      } else {
        toast.error(payload.message);
      }
    } catch (error) {
      console.log(error);
    }
    toast.dismiss(message);
  }

  React.useEffect(() => {
    Promise.all([fetchAuthorities()])
      .then(data => {
        const [resAuth] = data;

        if (resAuth.ok) {
          setAuthorities(resAuth.data);
        }
      })
    setLoading(false);
  }, [])

  return (
    <>
      <Paper sx={{ p: 5 }}>
        <form
          onSubmit={handleSubmit(AddUser)}>
          <Box className="my-3">
            <label className="font-semibold">Tên đăng nhập:</label>
            <TextField
              {...register("login", {
                required: "Nhập đầy đủ thông tin.",
                minLength: { value: 8, message: "Tối thiểu 8 ký tự.", },
                maxLength: { value: 50, message: "Tối đa 50 ký tự.", },
              })}
              type="text"
              className="min-w-[300px] border rounded-md p-[10px] cursor-pointer shadow-lg w-full"
              placeholder="Nhập tên đăng nhập"
            />
            <FormHelperText className="text-red-700 px-2 mt-2 ">{errors.login?.message}</FormHelperText>
          </Box>

          <Box className="flex justify-between">
            <Box className="my-3">
              <label className="font-semibold">Họ:</label>
              <TextField
                {...register("lastName", {
                  required: "Nhập đầy đủ thông tin.",
                  minLength: { value: 2, message: "Tối thiểu 2 ký tự.", },
                  maxLength: { value: 10, message: "Tối đa 10 ký tự.", },
                })}
                type="text"
                className="min-w-[300px] border rounded-md p-[10px] cursor-pointer shadow-lg w-full"
                placeholder="Nhập họ"
              />
              <FormHelperText className="text-red-700 px-2 mt-2 ">{errors.lastName?.message}</FormHelperText>
            </Box>
            <Box className="my-3">
              <label className="font-semibold">Tên:</label>
              <TextField
                {...register("firstName", {
                  required: "Nhập đầy đủ thông tin.",
                  minLength: { value: 8, message: "Tối thiểu 8 ký tự.", },
                  maxLength: { value: 50, message: "Tối đa 50 ký tự.", },
                })}
                type="text"
                className="min-w-[300px] border rounded-md p-[10px] cursor-pointer shadow-lg w-full"
                placeholder="Nhập tên"
              />
              <FormHelperText className="text-red-700 px-2 mt-2 ">{errors.firstName?.message}</FormHelperText>
            </Box>
          </Box>
          {/* <Box>
            <label className="font-semibold">Vai trò:</label>
            <select
              {...register("authority")}
              className="min-w-[300px] w-full border rounded-md p-[10px] cursor-pointer shadow-lg"
              id="category">
              <option value="">Vui lòng bấm chọn</option>
              {authorities && authorities.map(authority => (
                <option
                  key={authority.name}
                  value={authority.name}>
                  {authority.name}
                </option>
              ))}
            </select>
            <FormHelperText className="text-red-700 px-2 mt-2">{errors.authority?.message}</FormHelperText>
          </Box> */}

          <Box className="my-3">
            <label className="font-semibold">Email:</label>
            <TextField
              {...register("email", {
                required: "Nhập đầy đủ thông tin.",
                pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Phải đúng định dạng email.", },
              })}
              type="text"
              className="min-w-[300px] border rounded-md p-[10px] cursor-pointer shadow-lg w-full"
              placeholder="Nhập địa chỉ email"
            />
            <FormHelperText className="text-red-700 px-2 mt-2 ">{errors.email?.message}</FormHelperText>
          </Box>



          <Box className="flex justify-around mb-2 mt-10 w-1/2 mx-auto">
            <Button
              type="submit" variant="contained" size="medium" className="w-full mx-1 p-2 text-white bg-[#008200] hover:opacity-85"
              startIcon={<DoneRounded fontSize='medium' />} >Tạo mới
            </Button>
            <Button
              type="reset" variant="contained" size="medium" className="w-full mx-1 p-2 text-white bg-[#0C2340] hover:opacity-85"
              startIcon={<RotateLeftRounded fontSize='medium' />} >Hủy bỏ
            </Button>
          </Box>
        </form>
      </Paper>

      <Dialog
        open={openAddAuth}
        onClose={() => setOpenAddAuth(false)}
        className="max-w-[500px] mx-auto"
      >
        <Tooltip title="Close">
          <CloseOutlined
            onClick={() => setOpenAddAuth(false)}
            color="error"
            className="text-md absolute top-1 right-1 rounded-full hover:opacity-80 hover:bg-red-200 cursor-pointer"
          />
        </Tooltip>

        <DialogTitle className="text-center mt-2">Thêm vai trò</DialogTitle>
        <Divider />

        <DialogContent>
          <form
            onSubmit={roleHandleSubmit(AddAuth)} className="text-xs">
            <Box sx={{ my: 3 }}>
              <TextField
                className="min-w-[300px] border rounded-md p-[10px] cursor-pointer shadow-lg w-full"
                placeholder="Nhập vai trò cần tạo mới"
                {...roleRegister("name", {
                  required: "Nhập đầy đủ thông tin",
                })}
              />
              <FormHelperText className="text-red-700 px-2 mt-2">{roleErrors.name?.message}</FormHelperText>
            </Box>

            <Box className="flex justify-around my-3">
              <Button className="w-full mx-1 p-2 text-white bg-[#008200] hover:opacity-85" type="submit">Tạo mới</Button>
            </Box>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}