"use client";
import Image from "next/image";
import cloudFlare_01 from "@/images/cloudFlare/cloudFlare_01.png";
import cloudFlare_02 from "@/images/cloudFlare/cloudFlare_02.jpg";
import cloudFlare_03 from "@/images/cloudFlare/cloudFlare_03.png";
import cloudFlare_04 from "@/images/cloudFlare/cloudFlare_04.png";
import cloudServer_icon_01 from "@/images/cloudServer/cloudServer_icon_01.png";
import { Box, Typography, Grid, Button, Paper } from "@mui/material";
import {
  cloudflarePackage,
  cloudflareQuestions,
  cloudflarePerformance,
  cloudflareWAF,
} from "app/libs/data";
import CustomDialog from "@/components/ContactPopup";
import Link from "next/link";
import { Metadata } from "next";
import React from "react";
import TouchCarousel from "@/components/TouchCarousel";

export const metadata: Metadata = {
  title: "Cloudflare | Turbo AI Solution",
  keywords: ["cloudflare"],
  robots: "",
  description:
    "More than 10 years of experience, Turbo Solutions specializes in providing leading cloud computing solutions and applications in Vietnam.",
};

export default function CloudFlare() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [startTouch, setStartTouch] = React.useState(0);
  const [isMobile, setIsMobile] = React.useState(false);
  const nextSlide = () => {
    const newIndex = currentSlide + (isMobile ? 1 : 4);
    const lastIndex = cloudflarePackage.length;
    if (newIndex < lastIndex) {
      setCurrentSlide(newIndex);
    }
  };

  const prevSlide = () => {
    const newIndex = currentSlide - (isMobile ? 1 : 4);
    if (newIndex >= 0) {
      setCurrentSlide(newIndex);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartTouch(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const currentTouch = e.touches[0].clientX;
    if (startTouch - currentTouch > 50) {
      console.log(startTouch - currentTouch);
      nextSlide();
    } else if (currentTouch - startTouch > 50) {
      prevSlide();
    }
  };

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 767);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <Box>
        <Paper className="rounded-none shadow-xl py-10">
          <Grid container>
            <Grid item xs={12} md={6} className="px-4 md:pl-10">
              <Typography className="text-[2rem] text-orange-600 font-semibold">
                CloudFlare là gì?
              </Typography>
              <Typography py={1}>
                CloudFlare là dịch vụ CDN trung gian, là nơi điều phối lượng
                truy cập giữa máy chủ với máy của khách hàng qua lớp bảo vệ
                CloudFlare.
              </Typography>
              <Typography py={1}>
                Thay vì phải truy cập trực tiếp vào website thông qua phân giải
                tên miền DNS thì có thể sử dụng máy chủ phân giải tên của
                CloudFlare. Ngoài ra, CloudFlare còn có cung cấp nhiều dịch vụ
                như CNS, SPDY, tường lửa chống Ddos, Chứng chỉ số SSL
              </Typography>
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              className="flex flex-col items-center justify-center"
            >
              <Image
                src={cloudFlare_01}
                className="w-[80%] h-auto rounded-lg"
                alt="cloudFlare_01"
              />
            </Grid>
          </Grid>
        </Paper>

        <Box className="themeHeroBackground py-10 text-center shadow-xl">
          <Typography className="text-[2rem] font-semibold text-center">
            PERFORMANCE
          </Typography>
          <Typography className="text-[1rem] sm:text-lg md:text-xl pt-5 ">
            Giúp tăng tốc độ tải của ứng dụng - website
          </Typography>
        </Box>

        {/* PERFORMANCE */}
        <Paper className="rounded-none shadow-xl py-5">
          <Grid container>
            <Grid item xs={12} md={4}>
              {cloudflarePerformance.slice(0, 3).map((item) => {
                return (
                  <Paper key={item.id} className="m-6 p-3">
                    <Typography className="text-sky-800 font-bold pb-3">
                      {item.title}
                    </Typography>
                    <Typography> {item.desc} </Typography>
                  </Paper>
                );
              })}
            </Grid>

            <Grid item xs={12} md={4} className="flex justify-center">
              <Image
                src={cloudFlare_02}
                alt="performance"
                className="w-[100%] h-auto"
              />
            </Grid>

            <Grid item xs={12} md={4}>
              {cloudflarePerformance.slice(3, 8).map((item) => {
                return (
                  <Paper key={item.id} className="m-6 p-3">
                    <Typography className="text-sky-800 font-bold pb-3">
                      {item.title}
                    </Typography>
                    <Typography> {item.desc} </Typography>
                  </Paper>
                );
              })}
            </Grid>
          </Grid>
        </Paper>

        <Paper className="rounded-none shadow-xl py-5">
          <Typography className="text-lg md:text-xl px-4 sm:text-[2.5rem] text-center uppercase text-orange-600 font-semibold pt-1 pb-10">
            cloudflare <br /> và các gói tiện ích riêng
          </Typography>
          <div className="flex justify-center items-center">
            <Image
              src={cloudFlare_03}
              className="w-[20%] h-auto rounded-lg "
              alt="cloudFlare_03"
              priority
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pl-10 sm:px-auto">
            {cloudflarePackage
              .slice(currentSlide, currentSlide + (isMobile ? 1 : 4))
              .map((item) => {
                return (
                  <div className="flex items-center py-2 w-5/6" key={item.id}>
                    <Box>
                      <Link
                        href={item.link}
                        title="Tìm hiểu thêm"
                        className="text-lg md:text-2xl text-orange-600 font-semibold"
                      >
                        {item.title}
                      </Link>
                      <Typography className="text-justify overflow-hidden text-ellipsis line-clamp-3">
                        {item.desc}
                      </Typography>
                      <Link
                        href={item.link}
                        className="no-underline text-sky-600 hover:font-semibold"
                      >
                        Tìm hiểu thêm
                      </Link>
                    </Box>
                  </div>
                );
              })}
            {isMobile && (
              <TouchCarousel
                data={cloudflarePackage}
                currentIndex={currentSlide}
                setCurrentIndex={setCurrentSlide}
              />
            )}
          </div>
        </Paper>

        <Box className="themeHeroBackground py-10 text-center shadow-xl">
          <Typography className="text-lg md:text-xl px-4 sm:text-[2rem] font-semibold text-center">
            Trải nghiệm miễn phí dịch vụ CLOUDFLARE WAF của chúng tôi
          </Typography>
          <Typography className="text-[1rem] sm:text-lg md:text-xl py-5">
            Tặng ngay 7 ngày miễn phí dùng thử
          </Typography>
          <div className="mt-5">
            <CustomDialog />
          </div>
        </Box>

        {/* CLOUDFLARE WAF */}
        <Paper className="rounded-none">
          <Grid container>
            <Grid
              item
              xs={12}
              md={6}
              className="flex flex-col items-center justify-center text-sky-900"
            >
              <Typography className="py-3 text-lg md:text-xl font-bold">
                CloudFlare WAF là tính năng gì?
              </Typography>
              <Typography className="font-extralight text-center w-3/4 px-3">
                Cloudflare Web Application Firewall (WAF) sẽ cung cấp khả năng
                bảo vệ tự động khỏi các lỗ hổng bảo mật và tính linh hoạt trong
                việc tạo các quy tắc tùy chỉnh
              </Typography>
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              className="flex flex-col items-center justify-center"
            >
              <Image
                src={cloudFlare_04}
                className="w-full h-full rounded-lg"
                alt="CloudFlare WAF là tính năng gì?"
              />
            </Grid>
          </Grid>

          <Box className="hidden xl:flex justify-center pt-10">
            {cloudflareWAF.slice(0, 3).map((item) => {
              return (
                <Box
                  key={item.id}
                  className="w-1/3 flex flex-col justify-center items-center"
                >
                  <Image
                    src={cloudServer_icon_01}
                    className="w-20 h-auto"
                    alt="WAF"
                  />
                  <Typography className="text-sm md:text-xl font-semibold py-3">
                    {item.title}
                  </Typography>
                  <Typography className="w-3/4 text-center">
                    {item.desc}
                  </Typography>
                </Box>
              );
            })}
          </Box>

          <Box className="hidden xl:flex justify-evenly py-10">
            {cloudflareWAF.slice(3, 5).map((item) => {
              return (
                <Box
                  key={item.id}
                  className="w-1/3 flex flex-col justify-center items-center"
                >
                  <Image
                    src={cloudServer_icon_01}
                    className="w-20 h-auto"
                    alt="WAF"
                  />
                  <Typography className="text-sm md:text-xl font-semibold py-3">
                    {item.title}
                  </Typography>
                  <Typography className="w-3/4 text-center">
                    {item.desc}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </Paper>

        {/* Q & A */}
        <div className="bg-white border border-gray-200 divide-y divide-gray-200 py-5">
          <Typography className="text-[1.75rem] text-sky-900 font-semibold text-center py-5">
            Có nên sử dụng CloudFlare hay không ?
          </Typography>
          <Typography className="text-center px-3">
            CloudFlare được dùng như một dịch vụ DNS thông thường khi tắt đám
            mây tên miền. Nên sử dụng DNS trung gian này bởi vì các lý do sau
            đây:
          </Typography>
          <div
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            className="cursor-pointer"
          >
            {cloudflareQuestions
              .slice(currentSlide, currentSlide + (isMobile ? 1 : 4))
              .map((item) => {
                return (
                  <div key={item.id} className="space-y-12 px-2 xl:px-16 py-5">
                    <div className="mt-1 flex">
                      <div>
                        <div className="flex items-center h-16 border-l-4 border-blue-600">
                          <span className="text-4xl text-blue-600 px-4">
                            Q.
                          </span>
                        </div>
                        <div className="flex items-center h-16 border-l-4 border-gray-400">
                          <span className="text-4xl text-gray-400 px-4">
                            A.
                          </span>
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
            {isMobile && (
              <TouchCarousel
                data={cloudflareQuestions}
                currentIndex={currentSlide}
                setCurrentIndex={setCurrentSlide}
              />
            )}
          </div>
        </div>
      </Box>
    </>
  );
}
