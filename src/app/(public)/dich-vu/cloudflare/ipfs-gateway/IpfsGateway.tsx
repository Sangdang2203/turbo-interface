"use client";
import React from "react";
import Image from "next/image";
import cloudFlareIpfs from "@/images/cloudFlare/IPFS-cover-a.png";
import IpfsStructure from "@/images/cloudFlare/Ipfs_structure.png";
import { cloudflareIpfs, cloudflareIpfsPackages } from "app/libs/data";
import { Box, Typography, Grid, Button, Paper, Container } from "@mui/material";
import TouchCarousel from "@/components/TouchCarousel";

export default function IpfsGateway() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [startTouch, setStartTouch] = React.useState(0);
  const [isMobile, setIsMobile] = React.useState(false);
  const nextSlide = () => {
    const newIndex = currentSlide + (isMobile ? 1 : 4);
    const lastIndex = cloudflareIpfsPackages.length;
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
      <Box className="bg-white">
        <Grid container>
          <Grid item xs={12} md={6} className="p-4 md:pl-10">
            <Typography className="text-[2rem] text-orange-600 font-semibold">
              IPFS Gateway là gì?
            </Typography>
            <Typography py={1}>
              IPFS là lớp lưu trữ của Web 3.0. CloudFlare IPFS Gateway kết nối
              web 2.0 và web 3.0 bằng cách sử dụng cổng IPFS có thể truy cập qua
              HTTP. Người dùng dễ dàng truy xuất và phân phối nội dung IPFS
              thông qua các miền tùy chỉnh. Người dùng có thể yên tâm về bảo
              mật, độ tin cậy và hiệu suất của mạng CloudFlare
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            className="flex flex-col items-center justify-center"
          >
            <Image
              src={cloudFlareIpfs}
              className="w-[80%] h-auto rounded-lg"
              alt="cloudFlareIpfs"
            />
          </Grid>
        </Grid>

        <Paper className="rounded-none shadow-xl py-5">
          <Typography className="text-center text-lg md:text-2xl">
            Những lợi ích của CloudFlare IPFS Gateway
          </Typography>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2">
              {cloudflareIpfs.slice(0, 2).map((item) => {
                return (
                  <Paper key={item.id} className="m-6 p-3">
                    <Typography className="text-sky-800 font-bold pb-3">
                      {item.title}
                    </Typography>
                    <Typography> {item.desc} </Typography>
                  </Paper>
                );
              })}
            </div>

            <div className="flex justify-center">
              <Image
                src={IpfsStructure}
                alt="performance"
                className="max-w-[80%] max-h-[80%]"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2">
              {cloudflareIpfs.slice(2, 4).map((item) => {
                return (
                  <Paper key={item.id} className="m-6 p-3">
                    <Typography className="text-sky-800 font-bold pb-3">
                      {item.title}
                    </Typography>
                    <Typography> {item.desc} </Typography>
                  </Paper>
                );
              })}
            </div>
            {}
          </div>
        </Paper>

        <Box>
          <Box my={5} sx={{ textAlign: "center" }}>
            <Typography className="text-[2rem] font-semibold text-sky-900">
              Các gói dịch vụ CloudFlare CDN
            </Typography>
          </Box>

          <div
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            className="container grid grid-cols-1 lg:grid-cols-3 gap-6 pb-10"
          >
            {cloudflareIpfsPackages
              .slice(currentSlide, currentSlide + (isMobile ? 1 : 3))
              .map((item) => {
                return (
                  <div key={item.id} className="cardBox h-fit">
                    <div className="card">
                      <Image src={item?.image} alt="" width={50} height={50} />
                      <div className="h4 my-10">
                        {item.title}

                        <p>...</p>
                      </div>

                      <div className="content">
                        <p className="desc leading-3 md:text-[2rem] lg:text-[2rem]">
                          {item.desc}
                        </p>
                        <Button
                          href="tel:0769999967"
                          type="button"
                          className="action"
                        >
                          Đăng ký
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })}
            {isMobile && (
              <TouchCarousel
                data={cloudflareIpfsPackages}
                currentIndex={currentSlide}
                setCurrentIndex={setCurrentSlide}
              />
            )}
          </div>
        </Box>
      </Box>
    </>
  );
}
