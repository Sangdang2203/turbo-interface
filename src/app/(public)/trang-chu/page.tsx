"use client";

import React from "react";
import Image from "next/image";
import Switch from "@mui/material/Switch";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Container,
  Divider,
  FormControlLabel,
  Grid,
  Link,
  Typography,
} from "@mui/material";

import { PublicRounded } from "@mui/icons-material";
import logoTurbo from "@/images/logoTurbo.png";
import promotion from "@/images/promotion.jpg";
import { cloudServices, feedbacks, homeServices } from "app/libs/data";

export default function HomePage() {
  const [currentText, setCurrentText] = React.useState("Ứng dụng");
  const [texts] = React.useState(["Ứng dụng", "Dịch vụ", "Giải pháp"]);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      const nextTextIndex = (texts.indexOf(currentText) + 1) % texts.length;
      setCurrentText(texts[nextTextIndex]);
    }, 2000); // 2 seconds interval

    return () => clearInterval(intervalId); // Clear on component unmount
  }, [currentText, texts]); // Dependency array to re-run on text change

  return (
    <Box>
      <Box
        textAlign="center"
        my={5}
        className="text-white themePolygonLuminary py-10"
      >
        <Typography className="text-[1.15rem] lg:text-[2.5rem] font-semibold uppercase ">
          {currentText} điện toán đám mây <br /> chất lượng hàng đầu
        </Typography>
        <Typography className="text-center text-[1rem] md:text-[1.75rem] font-light w-3/4 mx-auto my-5">
          Công ty Turbo Solutions chung tay cùng quý doanh nghiệp thực hiện
          chuyển đổi số bằng cách tích hợp các công nghệ thông minh 4.0, cùng
          đạt mục tiêu thắng lợi.
        </Typography>

        <Container className="container grid grid-cols-1 lg:grid-cols-4 gap-6 mt-10">
          {homeServices.map((item) => {
            return (
              <div key={item.id} className="cardBox">
                <div className="card">
                  <div className="h4">
                    {item.title}

                    <p>...</p>
                  </div>

                  <div className="content">
                    <div className="h3">{item.sub}</div>
                    <p className="desc md:text-[1rem]">{item.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Container>
      </Box>

      <Box className="animated-element">
        <Box className="my-10 flex flex-col justify-center items-center text-center">
          <Typography className="py-3 px-5 bg-sky-50 text-sky-700 uppercase w-fit rounded-full">
            dịch vụ điện toán đám mây
          </Typography>
          <Typography className="text-[1.25rem] md:text-[1.75rem] font-light w-2/3 text-center mx-auto">
            Công ty Turbo Solutions cung cấp dịch vụ điện toán đám mây đa dạng
            và các ứng dụng số phù hợp nhiều lĩnh vực.
          </Typography>
        </Box>

        <Container className="container grid sm:grid-cols-3 gap-x-6 gap-y-6 mb-10">
          {cloudServices.map((item) => {
            return (
              <Card
                key={item.id}
                className="relative rounded-xl hover:shadow-lg cursor-pointer"
              >
                <CardContent className="mb-16">
                  <Box className="flex items-start">
                    <Image src={item.image} className="w-28 h-28" alt="" />
                    <Box>
                      <Typography className="text-[1.5rem]">
                        {item.name}
                      </Typography>
                      <Typography>{item.describe}</Typography>
                    </Box>
                  </Box>
                </CardContent>
                <CardActions className="absolute bottom-1 left-1">
                  <Button href={item.link} className="fancy hover:opacity-80">
                    <span className="top-key"></span>
                    <span className="text">Tìm hiểu thêm</span>
                    <span className="bottom-key-1"></span>
                    <span className="bottom-key-2"></span>
                  </Button>
                </CardActions>
              </Card>
            );
          })}
        </Container>
      </Box>

      <Box className="lg:my-10">
        <Image
          src={promotion}
          title="Liên hệ ngay 076.9999.967 để nhận hỗ trợ tốt nhất"
          alt="promotion"
          className="w-full h-[100%] -mb-2 shadow-xl cursor-pointer"
        />
      </Box>

      <Container className="hidden lg:block shadow-lg rounded-2xl py-5 mb-28">
        <Box className="text-center">
          <Typography className="text-[1.5rem] md:text-[2rem] font-semibold">
            Được hàng trăm doanh nghiệp tin dùng cho đến nay
          </Typography>
          <Typography className="text-[14px] md:text-[1.25rem] pb-10 pt-3">
            Khách hàng của chúng tôi đến từ khắp nơi trên thế giới.
          </Typography>
        </Box>
        <Grid
          container
          className="flex justify-between items-center text-center"
        >
          <Grid item xs={6} md={3}>
            <Typography className="text-[3rem] font-bold">250+</Typography>
            <Typography>Dự án đã triển khai</Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography className="text-[3rem] font-bold">10+</Typography>
            <Typography>Hơn 10 năm kinh nghiệm</Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography className="text-[3rem] font-bold">5</Typography>
            <Typography>Quốc gia</Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography className="text-[3rem] font-bold">50+</Typography>
            <Typography>Thành viên</Typography>
          </Grid>
        </Grid>
      </Container>

      {/* Why clients choose us */}
      <Box className="themeGlobal min-h-[500px]">
        <Box className="text-center py-10">
          <Typography className="text-[2rem] md:text-[2.5rem]">
            Why clients choose us
          </Typography>
          <Typography>Because it’s good to work with good people!</Typography>
        </Box>
        <Container className="grid sm:grid-cols-3 gap-x-6 gap-y-6 mb-10">
          <Box>
            <Box className="h-[200px] my-3 px-3 rounded-xl shadow-2xl hover:duration-500">
              <Box className="flex justify-start items-center">
                <Link href="/">
                  <Image
                    src={logoTurbo}
                    className="w-28 h-10 mr-2"
                    title="Trang chủ"
                    alt="logo_turbo_solutions"
                  />
                </Link>
                <Typography className="py-8">Turbo AI Vision</Typography>
              </Box>
              <Divider />
              <FormControlLabel
                className="py-3"
                control={<Switch size="medium" color="success" checked />}
                label="Chất lượng luôn được đảm bảo"
              />
            </Box>
            <Typography className="text-xl font-semibold py-5">
              Đáng tin cậy & Chuyên nghiệp
            </Typography>
            <Typography className="leading-relaxed text-justify">
              Turbo là một trong những công ty AI Vision hàng đầu tại Việt Nam.
              Bằng cách cộng tác với chúng tôi, bạn có thể tiết kiệm thời gian
              để tập trung vào việc lập kế hoạch và điều hành hoạt động kinh
              doanh cốt lõi của mình. Chúng tôi mang phong cách chuyên nghiệp
              vào dự án.
            </Typography>
          </Box>

          <Box>
            <Box className="h-[200px] my-3 px-3 rounded-xl shadow-2xl hover:duration-500">
              <Box className="flex items-center py-4">
                <Typography className="py-4">Key success</Typography>
                <Chip
                  className="mx-1 bg-sky-200 text-slate-800 font-semibold"
                  label="Flexible solutions"
                />
                <Chip
                  className="mx-1 bg-sky-200 text-slate-800 font-semibold"
                  label="Save time"
                />
              </Box>
              <Divider />
              <Typography className="py-3">Theo dõi hàng ngày</Typography>
            </Box>
            <Typography className="text-xl font-semibold py-5">
              Tính linh hoạt và minh bạch
            </Typography>
            <Typography className="leading-relaxed text-justify">
              Điểm mạnh của chúng tôi nằm ở kiến ​​thức chuyên môn vững chắc về
              nhiều loại công nghệ và tính linh hoạt của nhóm để phù hợp với nhu
              cầu của khách hàng. Mỗi bước công việc của chúng tôi luôn được
              minh bạch với khách hàng từ đầu đến cuối.
            </Typography>
          </Box>

          <Box>
            <Box className="h-[200px] my-3 px-3 rounded-xl shadow-2xl hover:duration-500">
              <Box className="flex items-center">
                <PublicRounded fontSize="large" />
                <Typography className="py-8 px-2">
                  Quy tắc kinh doanh quốc tế
                </Typography>
              </Box>
              <Divider />
              <Typography className="py-3">
                Đảm bảo chi phí và hiệu quả
              </Typography>
            </Box>
            <Typography className="text-xl font-semibold py-5">
              Tuân thủ & Cam kết
            </Typography>
            <Typography className="leading-relaxed text-justify">
              Chúng tôi tuân theo tất cả các thủ tục pháp lý khi giao dịch với
              khách hàng của mình để đảm bảo rằng không ai phải đối mặt với bất
              kỳ vấn đề pháp lý nào. Khách hàng chọn chúng tôi biết rằng sản
              phẩm cuối cùng của họ sẽ là những sản phẩm có hiệu suất cao, đáng
              kinh ngạc.
            </Typography>
          </Box>
        </Container>

        <Typography className="text-[2rem] w-5/6 mx-auto md:text-[2.5rem] text-center py-10">
          Khách hàng nói gì về chúng tôi
        </Typography>

        {/* Feedbacks */}
        <Container className="grid sm:grid-cols-3 gap-x-6 gap-y-6 pb-10">
          {feedbacks.map((item) => {
            return (
              <div key={item.id} className="notification">
                <div className="notiglow"></div>
                <div className="notiborderglow"></div>
                <div className="notititle flex items-center">
                  <Image
                    src={item.avatar}
                    alt="customer feedback"
                    className="w-16 h-16 rounded-full mr-2"
                  />
                  <div>
                    <Typography>{item.name}</Typography>
                    <Typography>{item.position}</Typography>
                  </div>
                </div>

                <div className="notibody">{item.feedback}</div>
              </div>
            );
          })}
        </Container>

        <Box className="text-center pb-10">
          <Typography className="text-[2rem] pb-5">
            Đăng ký trải nghiệm
          </Typography>
          <Typography>
            để nhận thêm thông tin về các dịch vụ của EcoCloud
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
