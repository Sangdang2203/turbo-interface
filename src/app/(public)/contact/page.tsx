
"use client";
import { MarkEmailReadRounded, PhoneCallbackRounded, SendRounded, TravelExploreRounded } from "@mui/icons-material";
import { Box, Button, FormControl, FormHelperText, Grid, Input, Paper, TextField, Typography } from "@mui/material";
import contactBanner from "../../../../public/images/contactBanner.jpg";
import { useForm, SubmitHandler } from "react-hook-form";
import Image from "next/image";
import * as React from "react";
import { CustomerMessage } from "@/types/interfaces";

// export const metadata = () => {
//   return {
//     title: "Contact"
//   }
// }

const ContactPage = () => {

  const {
    register,
    handleSubmit,
    formState: { errors: errors },
  } = useForm<CustomerMessage>();


  return (
    <Box textAlign="center">
      <Image src={contactBanner ? contactBanner : ""} alt="cloudBanner" className="w-full max-h-[35rem] opacity-80 -mt-6 "></Image>

      <Grid xs={12} md={12} lg={12} xl={12} className=" mt-6 py-10 w-1/2 mx-auto">
        <Paper className="p-10">
          <Box className="mb-10">
            <Typography className="text-[2rem] font-extralight">Liên hệ với chúng tôi</Typography>
            <Typography paragraph>Luôn lắng nghe những ý kiến đóng góp từ quý khách hàng.</Typography>
          </Box>
          <form
            // onSubmit={handleSubmit(AddEmployee)}
            className="text-sm font-medium">

            <Box className="my-3">
              <TextField
                {...register("name", {
                  required: "Vui lòng điền thông tin.",
                  minLength: {
                    value: 8,
                    message: "Điền it nhất 8 ký tự.",
                  },
                  maxLength: {
                    value: 50,
                    message: "Điền tối đa 50 ký tự.",
                  },
                })}
                className="max-w-[650px] border rounded-md p-[10px] cursor-pointer border-slate-500 w-full hover:shadow-lg duration-500"
                placeholder="Họ tên..."
              />
              <FormHelperText className="text-danger ">
                {errors.name?.message}
              </FormHelperText>
            </Box>

            <Box className="my-3">
              <TextField
                {...register("email", {
                  required: "Vui lòng điền thông tin.",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Email sai định dạng.",
                  },
                })}
                className="max-w-[650px] border rounded-md p-[10px] cursor-pointer border-slate-500 w-full hover:shadow-lg duration-500"
                placeholder="Email..."
              />
              <FormHelperText className="text-danger ">
                {errors.email?.message}
              </FormHelperText>
            </Box>

            <Box className="my-3">
              <TextField
                {...register("phone", {
                  required: "Vui lòng điền thông tin.",
                  pattern: {
                    value: /^\d{10}$/,
                    message: "Điền đủ 10 số.",
                  },
                })}
                className="max-w-[650px] border rounded-md p-[10px] cursor-pointer border-slate-500 w-full hover:shadow-lg duration-500"
                placeholder="Số điện thoại..."
              />
              <FormHelperText className="text-danger ">
                {errors.phone?.message}
              </FormHelperText>
            </Box>

            <Box className="my-3">
              <textarea
                {...register("message", {
                  required: "Vui lòng điền thông tin.",
                })}
                rows={5}
                className="max-w-[650px] border rounded-md p-[10px] cursor-pointer border-slate-500 w-full hover:shadow-lg duration-500"
                placeholder="Vui lòng để lại tin nhắn..."></textarea>
              <FormHelperText className="text-danger ">
                {errors.message?.message}
              </FormHelperText>
            </Box>

            <Button
              startIcon={<SendRounded className="text-[#ffffff]" />}
              type="submit" size="medium"
              variant="contained"
              className="w-1/3 py-3 mb-3 text-[1rem] text-[#ffffff] uppercase bg-blue-500">
              Gửi</Button>
          </form>
        </Paper>
      </Grid>
    </Box>
  )
}

export default ContactPage;