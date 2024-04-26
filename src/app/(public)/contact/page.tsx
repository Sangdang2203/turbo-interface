"use client";

import { Box, Button, Container, FormControl, FormHelperText, Grid, Link, Paper, TextField, Typography } from "@mui/material";
import { ArrowRightRounded, LocationOnRounded, MailOutlineRounded, PhoneCallbackRounded, SendRounded } from "@mui/icons-material";
import contactBanner from "../../images/contactBanner.jpg";
import { CustomerMessage } from "types/interfaces";
import { useForm, SubmitHandler } from "react-hook-form";
import Image from "next/image";
import * as React from "react";

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
    <Box>
      <Image src={contactBanner ? contactBanner : ""} alt="cloudBanner" className="w-full max-h-[35rem] opacity-80 -mt-6 "></Image>

      <Paper className="p-10 rounded-none">
        <Box className="text-center">
          <Typography className="text-[2rem] font-extralight">Liên hệ với chúng tôi</Typography>
          <Typography paragraph>Luôn lắng nghe những ý kiến đóng góp từ quý khách hàng.</Typography>
        </Box>

        <Grid container>
          <Grid item xs={12} md={6}>
            <Typography className="text-[2rem] font-bold">Liên hệ Demo</Typography>
            <Typography>Trải nghiệm thực tế, trực quan </Typography>
            <Typography>Tìm hiểu thêm về nhiều tính năng khác</Typography>

            <Box mt={5}>
              <Typography className="text-lg font-bold text-left mb-5">CÔNG TY GIẢI PHÁP CÔNG NGHỆ TURBO</Typography>
              <div className="flex my-1">
                <LocationOnRounded fontSize="small" color="secondary" />
                <Typography className="text-slate-900 px-2">Số 10 Phổ Quang, Q.Tân Bình, TP.HCM</Typography>
              </div>

              <div className="flex my-1">
                <MailOutlineRounded fontSize="small" color="secondary" />
                <a href="mailto:info@turbo.vn" className="text-slate-900 px-2 no-underline">info@turbo.vn</a>
              </div>

              <div className="flex my-1">
                <PhoneCallbackRounded fontSize="small" color="secondary" />
                <Link href="tel:0769999967" className="text-slate-900 no-underline px-2">076.9999.967</Link>
              </div>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <form className="text-sm font-medium">
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
                  className="max-w-[650px] shadow-lg rounded-md cursor-pointer  w-full hover:shadow-lg duration-500"
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
                  className="max-w-[650px] shadow-lg rounded-md cursor-pointer  w-full hover:shadow-lg duration-500"
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
                  className="max-w-[650px] shadow-lg rounded-md cursor-pointer  w-full hover:shadow-lg duration-500"
                  placeholder="Số điện thoại..."
                />
                <FormHelperText className="text-danger ">
                  {errors.phone?.message}
                </FormHelperText>
              </Box>

              <Box className="my-3">
                <TextField
                  {...register("message", {
                    required: "Vui lòng điền thông tin.",
                  })}
                  rows={10}
                  className="max-w-[650px] shadow-lg rounded-md cursor-pointer w-full hover:shadow-lg duration-500"
                  placeholder="Vui lòng để lại tin nhắn..." />
                <FormHelperText className="text-danger ">
                  {errors.message?.message}
                </FormHelperText>
              </Box>

              <Button
                startIcon={<SendRounded className="" />}
                type="submit" size="medium"
                variant="contained">
                Gửi</Button>
            </form>
          </Grid>
        </Grid>
      </Paper>
      <br /><br />

    </Box>
  )
}

export default ContactPage;