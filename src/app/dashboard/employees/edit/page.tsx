"use client";

import { VisibilityOutlined, VisibilityOffOutlined, DoneRounded, RotateLeftRounded, Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, Button, FormHelperText, IconButton, InputAdornment, MenuItem, OutlinedInput, Paper, TextField, Typography } from "@mui/material";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { fetchEmployees } from "app/methods/method";
import * as React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Employee, Role, CreateEmployeeRequest, ApiResponse, UpdateEmployeeRequest } from "types/interfaces";

const UpdateEmployeeForm = () => {
  const [employee, setEmployee] = React.useState<Employee>();
  const [employees, setEmployees] = React.useState<Employee[]>([]);
  const [roles, setRoles] = React.useState<Role[]>([]);
  const [role, setRole] = React.useState<Role>();
  const [showPassword, setShowPassword] = React.useState(false);

  const handleChange = (event: SelectChangeEvent) => {
    //@ts-ignore
    setRole(event.target.value as string);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<UpdateEmployeeRequest>();

  function UpdateEmployee() {

  }

  return (
    <>
      <Paper sx={{ p: 5 }}>
        <form
          onSubmit={handleSubmit(UpdateEmployee)}>
          <Box sx={{ display: "flex", my: 2 }}>
            <Box className="mr-2">
              <label className="font-semibold">Mã nhân viên:</label>
              <Box className="relative">
                <TextField
                  value={employee?.code}
                  className="min-w-[500px] border rounded-md p-[10px] cursor-pointer shadow-lg"
                  disabled
                />
              </Box>
            </Box>
            <Box>
              <label className="font-semibold">Vai trò:</label>
              <Select
                id="demo-simple-select" size="small" value={employee?.roleName}
                onChange={handleChange}
                label="Vui lòng chọn quyền"
                className="min-w-[300px] h-[45px] border rounded-md cursor-pointer shadow-lg"
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
              value={employee?.fullname}
              className="min-w-[300px] border rounded-md p-[10px] cursor-pointer shadow-lg"
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
              value={employee?.email}
              className="min-w-[300px] border rounded-md p-[10px] cursor-pointer shadow-lg"
              placeholder="Nhập địa chỉ email"
            />
            <FormHelperText className="text-red-700 ml-2 ">{errors.email?.message}</FormHelperText>
          </Box>

          <Box className="my-3">
            <label className="font-semibold">Số điện thoại:</label>
            <TextField
              {...register("phone", {
                required: "Nhập đầy đủ thông tin.",
                pattern: { value: /^\d{10}$/, message: "Số điện thoại gồm 10 số.", },
              })}
              type="number"
              value={employee?.phone}
              className="min-w-[300px] border rounded-md p-[10px] cursor-pointer shadow-lg"
              placeholder="Nhập số điện thoại"
            />
            <FormHelperText className="text-red-700 ml-2 ">{errors.phone?.message}</FormHelperText>
          </Box>

          <Box className="my-3">
            <label className="font-semibold">Địa chỉ:</label>
            <TextField
              {...register("address", { required: "Nhập đầy đủ thông tin.", })}
              type="text"
              value={employee?.address}
              className="min-w-[300px] border rounded-md p-[10px] cursor-pointer shadow-lg"
              placeholder="Nhập địa chỉ liên hệ" />
            <FormHelperText className="text-red-700 ml-2 ">{errors.address?.message}</FormHelperText>
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