"use client";

import { Box, Button, Container, FormControl, FormHelperText, Grid, Paper, TextField, Typography } from "@mui/material";
import { ArrowRightRounded, SendRounded } from "@mui/icons-material";
import { CustomerMessage } from "@/types/interfaces";
import contactBanner from "../../../../public/images/contactBanner.jpg";
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

      <Container>
        <Grid container>
          <Grid item xs={12} md={6} className="text-center">
            <h1 className="text-[2.5rem] font-serif" >Make what life needs next</h1>
            <p className="text-[1.25rem] font-extralight">We are a global innovation firm, imagining tomorrow’s products, services and businesses – and creating them today.</p>
            <Button
              href="/about-us" endIcon={<ArrowRightRounded fontSize="large" color="error" />}
              className="mt-4 hover:text-[#FFC72C] duration-500">Explore our sofeware & AI Solutions
            </Button>
          </Grid>
          <Grid item xs={12} md={6} className="">
            {/* <Image src={logoTurbo} alt="" className="w-auto h-full float-end"></Image> */}
            <div className="e-hosted-video elementor-wrapper elementor-open-inline">
              <video
                className="elementor-video"
                src="https://www.boardofinnovation.com/wp-content/uploads/2023/03/CPWEB-HOME-PAGE-SQUARED-1-1.mp4"
                autoPlay muted loop playsInline controlsList="nodownload">
              </video>
            </div>
          </Grid>
        </Grid>

        <Typography className="text-center text-[4rem] font-serif leading-tight font-light my-10">We join forces with the world&apos;s most ambitious businesses.</Typography>
        <Grid container my={1}>
          <Grid item xs={12} md={6}>
            <Box>
              <Typography className="font-extralight text-lg my-2">Cutting through the noise to bring new perspectives. Backing up our big ideas with deep research. Leading with empathy and delivering on impact.</Typography>
              <Typography className="font-extralight text-lg my-2">As a global independent innovation firm, we deliver with speed, agility and an objective point of view.</Typography>
              <Typography className="font-extralight text-lg my-2">Learn more about how we are making what life needs next</Typography>
            </Box>

            <Button
              href="/about-us" endIcon={<ArrowRightRounded fontSize="large" color="error" />}
              className="mt-4 hover:text-[#FFC72C] duration-500">Explore our services
            </Button>
          </Grid>
          <Grid item xs={12} md={6}></Grid>
        </Grid>

        <Typography className="text-center text-[4rem] font-serif leading-tight font-light my-10">Our services</Typography>

        <Grid container my={1}>
          <Grid item xs={12} md={4}>
            <Typography className="text-[1.5rem] pb-2">Make big moves</Typography>
            <p className="font-extralight">Strategic foresight Growth & innovation strategy Opportunity identification</p>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography className="text-[1.5rem] pb-2">Design new experiences</Typography>
            <p className="font-extralight">Product & service design Behavioral validation CX and digital design</p>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography className="text-[1.5rem] pb-2">Launch new bussinesses</Typography>
            <p className="font-extralight">Business model development Go-to-market activation Venture building</p>
          </Grid>

          <Button
            href="/about-us" endIcon={<ArrowRightRounded fontSize="large" color="error" />}
            className="mt-4 hover:text-[#FFC72C] duration-500">Explore our services
          </Button>
        </Grid>
      </Container >
    </Box>
  )
}

export default ContactPage;