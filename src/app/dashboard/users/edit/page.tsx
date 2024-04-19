"use client";

import { VisibilityOutlined, VisibilityOffOutlined, DoneRounded, RotateLeftRounded, Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, Button, FormHelperText, IconButton, InputAdornment, MenuItem, OutlinedInput, Paper, TextField, Typography } from "@mui/material";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { fetchUsers } from "app/methods/method";
import * as React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { User, ApiResponse, UpdateUserRequest, Authority } from "types/interfaces";

const UpdateEmployeeForm = () => {
  const [user, setUser] = React.useState<User>();
  const [authorities, setAuthorities] = React.useState<Authority[]>([]);
  const [showPassword, setShowPassword] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<UpdateUserRequest>();

  async function UpdateUser(updatedUser: UpdateUserRequest) {
    const message = toast.loading("Loading...")
    try {
      const res = await fetch(`/api/posts/${user?.id}`, {
        method: "PUT",
        body: JSON.stringify(updatedUser)
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

  return (
    <>
      <Paper sx={{ p: 5 }}>
        <form
          onSubmit={handleSubmit(UpdateEmployee)}>
          <Box className="flex justify-between">
            <Box className="my-3">
              <label className="font-semibold">Họ:</label>
              <TextField
                {...register("lastName", {
                  required: "Nhập đầy đủ thông tin.",
                  minLength: { value: 8, message: "Tối thiểu 8 ký tự.", },
                  maxLength: { value: 50, message: "Tối đa 50 ký tự.", },
                })}
                type="text"
                value={user?.lastName}
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
                value={user?.firstName}
                className="min-w-[300px] border rounded-md p-[10px] cursor-pointer shadow-lg w-full"
                placeholder="Nhập tên"
              />
              <FormHelperText className="text-red-700 px-2 mt-2 ">{errors.firstName?.message}</FormHelperText>
            </Box>
          </Box>

          <Box>
            <label className="font-semibold">Vai trò:</label>
            <TextField
              disabled
              value={user?.authority}
              className="min-w-[300px] border rounded-md p-[10px] cursor-pointer shadow-lg w-full"
            />
          </Box>

          <Box className="my-3">
            <label className="font-semibold">Email:</label>
            <TextField
              {...register("email", {
                required: "Nhập đầy đủ thông tin.",
                pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Phải đúng định dạng email.", },
              })}
              type="text"
              // value={user?.email}
              value="aaaa"
              className="min-w-[300px] border rounded-md p-[10px] cursor-pointer shadow-lg w-full"
              placeholder="Nhập địa chỉ email"
            />
            <FormHelperText className="text-red-700 px-2 mt-2 ">{errors.email?.message}</FormHelperText>
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
        </form>
      </Paper>
    </>
  )
}

export default UpdateEmployeeForm;