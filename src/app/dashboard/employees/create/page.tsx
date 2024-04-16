"use client";

import { VisibilityOutlined, VisibilityOffOutlined, DoneRounded, RotateLeftRounded, Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, Button, FormHelperText, IconButton, InputAdornment, MenuItem, OutlinedInput, Paper, TextField, Typography } from "@mui/material";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { fetchEmployees } from "app/methods/method";
import { register } from "module";
import * as React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Employee, Role, CreateEmployeeRequest, ApiResponse } from "types/interfaces";

const CreateEmployee = () => {
  const [employee, setEmployee] = React.useState<Employee>();
  const [roles, setRoles] = React.useState<Role[]>([]);
  const [role, setRole] = React.useState<Role>();
  const [showPassword, setShowPassword] = React.useState(false);

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
  } = useForm<CreateEmployeeRequest>();

  function generateEmployeeCode() {
    const randomCode = Math.floor(100000 + Math.random() * 900000).toString();
    setValue("code", `EMP-${randomCode}`);
  }

  function AddEmployee() {

  }

  // async function AddEmployee(employee: CreateEmployeeRequest) {
  //   try {
  //     const loadingId = toast.loading("Loading ...");
  //     const res = await fetch("/api/employees", {
  //       method: "POST",
  //       body: JSON.stringify(employee),
  //     });

  //     const payload = (await res.json()) as ApiResponse;

  //     if (payload.ok) {
  //       toast.success(payload.message);
  //     } else {
  //       toast.error(payload.message);
  //     }
  //     toast.dismiss(loadingId);
  //   } catch (error) {
  //     console.log("Error upload file or add employee: ", error);
  //     toast.error("Oops! Error while trying to upload file or add employee.");
  //   }
  // }

  return (
    <>
      <Paper sx={{ p: 5 }}>
        <form
          onSubmit={handleSubmit(AddEmployee)}>
          <Box sx={{ display: "flex", my: 2 }}>
            <Box className="mr-2">
              <label className="font-semibold">Mã nhân viên:</label>
              <Box className="relative">
                <TextField
                  {...register("code", {
                    required: "Bấm Generate để khởi tạo mã.",
                  })}
                  className="min-w-[500px] border rounded-md p-[10px] cursor-pointer shadow-lg w-full"
                  disabled
                  placeholder="EMP-000001"
                />
                <button
                  type="button"
                  onClick={generateEmployeeCode}
                  className="absolute inset-y-0 right-0 bg-slate-800 p-2 text-white uppercase rounded-md hover:opacity-85 cursor-pointer">
                  Generate
                </button>
              </Box>
              <FormHelperText className="text-red-700 ml-2 ">{errors.code?.message}</FormHelperText>
            </Box>
            <Box>
              <label className="font-semibold">Vai trò:</label>
              <Select
                id="demo-simple-select" size="small"
                onChange={handleChange}
                label="Vui lòng chọn quyền"
                className="min-w-[300px] h-[45px] border rounded-md cursor-pointer shadow-lg w-full"
              >
                {roles.map(role => (
                  <MenuItem key={role.id} value={role.id}>{role.name}</MenuItem>
                ))}

              </Select>
            </Box>
          </Box>

          <Box className="my-3">
            <label className="font-semibold">Họ tên:</label>
            <TextField
              {...register("fullname", {
                required: "Nhập đầy đủ thông tin.",
                minLength: { value: 8, message: "Tối thiểu 8 ký tự.", },
                maxLength: { value: 50, message: "Tối đa 50 ký tự.", },
              })}
              type="text"
              className="min-w-[300px] border rounded-md p-[10px] cursor-pointer shadow-lg w-full"
              placeholder="Nhập họ tên"
            />
            <FormHelperText className="text-red-700 ml-2 ">{errors.fullname?.message}</FormHelperText>
          </Box>

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
            <FormHelperText className="text-red-700 ml-2 ">{errors.email?.message}</FormHelperText>
          </Box>

          <Box className="my-3">
            <label className="font-semibold">Mật khẩu:</label>
            <Box className="relative">
              <OutlinedInput
                {...register("password", {
                  required: "Nhập đầy đủ thông tin.",
                  minLength: { value: 8, message: "Password must be at least 8 characters.", },
                })}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseEvents}
                      onMouseUp={handleMouseEvents}
                      edge="end">
                      {showPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
                    </IconButton>
                  </InputAdornment>
                }
                type={showPassword ? "text" : "password"}
                className="min-w-[300px] border rounded-md p-[10px] cursor-pointer shadow-lg w-full"
                placeholder="Nhập mật khẩu"
              />
            </Box>
          </Box>

          <Box className="my-3">
            <label className="font-semibold">Số điện thoại:</label>
            <TextField
              {...register("phone", {
                required: "Nhập đầy đủ thông tin.",
                pattern: { value: /^\d{10}$/, message: "Số điện thoại gồm 10 số.", },
              })}
              type="number"
              className="min-w-[300px] border rounded-md p-[10px] cursor-pointer shadow-lg w-full"
              placeholder="Nhập số điện thoại"
            />
            <FormHelperText className="text-red-700 ml-2 ">{errors.phone?.message}</FormHelperText>
          </Box>

          <Box className="my-3">
            <label className="font-semibold">Địa chỉ:</label>
            <TextField
              {...register("address", { required: "Nhập đầy đủ thông tin.", })}
              type="text"
              className="min-w-[300px] border rounded-md p-[10px] cursor-pointer shadow-lg w-full"
              placeholder="Nhập địa chỉ liên hệ" />
            <FormHelperText className="text-red-700 ml-2 ">{errors.address?.message}</FormHelperText>
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
    </>
  )
}

export default CreateEmployee;