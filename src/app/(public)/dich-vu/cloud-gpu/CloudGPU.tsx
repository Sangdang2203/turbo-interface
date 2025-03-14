"use client";

import cloudGPU from "@/images/cloudServer/cloudGPU.png";
import cloudGPU_01 from "@/images/cloudServer/cloudGPU_01.png";
import cloudGPU_02 from "@/images/cloudServer/cloudGPU_02.png";
import cloudGPU_03 from "@/images/cloudServer/cloudGPU_03.png";
import cloudServer_icon_01 from "@/images/cloudServer/cloudServer_icon_01.png";
import cloudServer_icon_02 from "@/images/cloudServer/cloudServer_icon_02.png";
import cloudServer_icon_03 from "@/images/cloudServer/cloudServer_icon_03.png";
import cloudServer_icon_04 from "@/images/cloudServer/cloudServer_icon_04.png";
import {
  Box,
  Card,
  Divider,
  FormControlLabel,
  Grid,
  Typography,
  Container,
  Button,
  Switch,
} from "@mui/material";
import { TaskAltRounded } from "@mui/icons-material";
import { cloudGPUPrices, bonusPrices, cloudGPUQuestions } from "app/libs/data";
import Image from "next/image";
import React from "react";

export default function CloudGPU() {
  const [currentText, setCurrentText] = React.useState("Ứng dụng"); // Initial text
  const [texts] = React.useState([
    "Deep Learning",
    "Machine Learning",
    "Computer Vision",
  ]);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      const nextTextIndex = (texts.indexOf(currentText) + 1) % texts.length;
      setCurrentText(texts[nextTextIndex]);
    }, 2000); // 2 seconds interval

    return () => clearInterval(intervalId); // Clear on component unmount
  }, [currentText, texts]); // Dependency array to re-run on text change
  return (
    <>
      <Container>
        <Box sx={{ textAlign: "center", py: 10 }}>
          <Typography className="text-[1.2rem] md:text-[2rem] font-semibold text-sky-900">
            Cloud GPU Server máy chủ GPU cho
          </Typography>
          <Typography className="text-[2rem] md:text-[2.5rem] font-semibold uppercase text-sky-900">
            {currentText}
          </Typography>
          <Typography>
            Khởi tạo và sử dụng Cloud GPU Server chỉ trong 45 giây!
          </Typography>
        </Box>

        <Box className="container grid sm:grid-cols-3 gap-x-6 gap-y-6 mb-10">
          <Card className="card">
            <Box className="card-details">
              <Typography className="text-title text-sky-900">
                Minh bạch chi phí
              </Typography>
              <Image
                src={cloudGPU_03}
                className="w-[100%] h-auto my-5"
                alt="Minh bạch chi phí"
              />
              <Typography className="text-body text-justify px-3">
                Giao diện trực quan giúp dễ dàng quản lý và giám sát các tài
                nguyên thực dùng trên từng máy chủ. Lập báo cáo thống kê chỉ với
                1 click.
              </Typography>
            </Box>
            <Button href="" className="card-button">
              More info
            </Button>
          </Card>

          <Card className="card">
            <Box className="card-details">
              <Typography className="text-title text-sky-900">
                Hoạt động hiệu quả
              </Typography>
              <Image
                src={cloudGPU_01}
                className="w-[100%] h-auto my-5"
                alt="Hoạt động hiệu quả"
              />
              <Typography className="text-body text-justify px-3">
                Dễ dàng mở rộng hay thu hẹp tài nguyên nhanh chóng để phù hợp
                với nhu cầu công việc của doanh nghiệp, theo sát nhu cầu kinh
                doanh.
              </Typography>
            </Box>
            <Button href="" className="card-button">
              More info
            </Button>
          </Card>

          <Card className="card">
            <Box className="card-details">
              <Typography className="text-title text-sky-900">
                Tối đa hóa lợi nhuận
              </Typography>
              <Image
                src={cloudGPU_02}
                className="w-[100%] h-auto my-5"
                alt="Tối đa hóa lợi nhuận"
              />
              <Typography className="text-body text-justify px-3">
                Không cần đầu tư CAPEX cho phần cứng, thiết bị đắt đỏ. Giảm
                thiểu chi phí vận hành OPEX tối đa. Chỉ chi trả cho tài nguyên
                thực dùng.
              </Typography>
            </Box>
            <Button href="" className="card-button">
              More info
            </Button>
          </Card>
        </Box>

        <Card className="hidden lg:block rounded-2xl my-10">
          <Grid container className="shadow-lg pb-5">
            <Grid
              item
              xs={12}
              md={5}
              className="flex flex-col items-center justify-center"
            >
              <Image src={cloudGPU} className="w-full h-auto" alt="cloudGPU" />
            </Grid>

            <Grid item xs={12} md={7} className=" text-sky-900">
              <Grid pl={8}>
                <Box sx={{ display: "flex", alignItems: "center", py: 1 }}>
                  <Image
                    src={cloudServer_icon_01}
                    className="w-16 h-auto mr-4"
                    alt=""
                  />
                  <Box>
                    <Typography className="text-[1.3rem] font-semibold pt-5">
                      99.99% Uptime
                    </Typography>
                    <Typography className="w-3/4 text-justify">
                      Cloud GPU luôn hoạt động với cam kết chất lượng dịch vụ
                      99.99% uptime, đáp ứng nhu cầu luôn kết nối.
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", py: 1 }}>
                  <Image
                    src={cloudServer_icon_02}
                    className="w-16 h-auto mr-4"
                    alt=""
                  />
                  <Box>
                    <Typography className="text-[1.3rem] font-semibold">
                      GPU siêu tốc độ
                    </Typography>
                    <Typography className="w-3/4 text-justify">
                      Dòng GPU Nvidia với hiệu suất CUDA Cores, Tensor Cores
                      siêu cao giúp giải nhanh các thuật toán Deep Learning phức
                      tạp.
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", py: 1 }}>
                  <Image
                    src={cloudServer_icon_03}
                    className="w-16 h-auto mr-4"
                    alt=""
                  />
                  <Box>
                    <Typography className="text-[1.3rem] font-semibold">
                      An toàn dữ liệu
                    </Typography>
                    <Typography className="w-3/4 text-justify">
                      Máy chủ Cloud GPU hoạt động trên nền Storage SDS với hiệu
                      năng IOPS cao giúp xử lý dữ liệu nhanh chóng, an toàn và
                      bảo mật.
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", py: 1 }}>
                  <Image
                    src={cloudServer_icon_04}
                    className="w-16 h-auto mr-4"
                    alt=""
                  />
                  <Box>
                    <Typography className="text-[1.3rem] font-semibold">
                      Băng thông rộng
                    </Typography>
                    <Typography className="w-3/4 text-justify">
                      Kết nối mạng tốc độ cao đến 10+ Gbps đáp ứng nhu cầu xử lý
                      luồng Video Streaming lớn từ các Camera CCTV hoặc thiết bị
                      Mobile, IoT
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Card>

        {/* service price */}
        <Box>
          <Box>
            <Box my={5} sx={{ textAlign: "center" }}>
              <Typography className="text-[2rem] font-semibold text-sky-900">
                Bảng giá dịch vụ Cloud Server
              </Typography>
              <Typography> * Bảng giá chưa bao gồm 10% VAT </Typography>
            </Box>

            <Box className="grid sm:grid-cols-3 gap-x-6 gap-y-6 mb-10 text-center">
              {cloudGPUPrices.map((item) => {
                return (
                  <Box key={item.title} className="card_price h-fit">
                    <Box className="card__border"></Box>
                    <Box className="card_title__container">
                      <span className="card_title">{item.title}</span>
                      <p className="card_paragraph">{item.price}</p>
                    </Box>
                    <hr className="line" />
                    <ul className="card__list">
                      <li className="card__list_item">
                        <TaskAltRounded color="secondary" />
                        <span className="list_text">{item.cpu}</span>
                      </li>
                      <li className="card__list_item">
                        <TaskAltRounded color="secondary" />
                        <span className="list_text">{item.ram}</span>
                      </li>
                      <li className="card__list_item">
                        <TaskAltRounded color="secondary" />
                        <span className="list_text">{item.ssd}</span>
                      </li>
                      <li className="card__list_item">
                        <TaskAltRounded color="secondary" />
                        <span className="list_text">{item.ipv4}</span>
                      </li>
                      <li className="card__list_item">
                        <TaskAltRounded color="secondary" />
                        <span className="list_text">{item.network}</span>
                      </li>
                      <li className="card__list_item">
                        <TaskAltRounded color="secondary" />
                        <span className="list_text">{item.rtx}</span>
                      </li>
                    </ul>
                    <Button href="tel:0769999967" className="button">
                      Liên hệ ngay
                    </Button>
                  </Box>
                );
              })}
            </Box>
          </Box>

          <Box className=" text-sky-900">
            <Typography className="text-[1.75rem] font-semibold text-center py-5">
              Bảng giá tài nguyên bổ sung
            </Typography>

            <Box className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-10">
              {bonusPrices.map((item) => {
                return (
                  <Box
                    key={item.title}
                    className="min-h-[180px] my-3 px-3 rounded-xl shadow-2xl"
                  >
                    <Box className="py-5">
                      <Typography className="text-[1.25rem] font-bold">
                        {item.title}
                      </Typography>
                      <Typography className="">{item.bonus}</Typography>
                    </Box>
                    <Divider />
                    <FormControlLabel
                      className="py-3"
                      control={<Switch size="medium" color="success" checked />}
                      label={item.price}
                    />
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>

        {/* Q & A */}
        <div className="bg-white border border-gray-200 divide-y divide-gray-200 rounded-xl ">
          <Typography className="text-[1.75rem] text-sky-900 font-semibold text-center p-5">
            Các câu hỏi thường gặp
          </Typography>
          {cloudGPUQuestions.map((item) => {
            return (
              <div key={item.id} className="space-y-12 px-2 xl:px-16 py-5">
                <div className="mt-1 flex">
                  <div>
                    <div className="flex items-center h-16 border-l-4 border-blue-600">
                      <span className="text-4xl text-blue-600 px-4">Q.</span>
                    </div>
                    <div className="flex items-center h-16 border-l-4 border-gray-400">
                      <span className="text-4xl text-gray-400 px-4">A.</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center h-16">
                      <span className="text-lg text-blue-600 font-bold">
                        {item.question}
                      </span>
                    </div>
                    <div className="flex items-center py-2">
                      <span className="text-gray-500">{item.answer}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </>
  );
}
