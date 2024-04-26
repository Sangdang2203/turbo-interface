"use client";

import React from "react";
import theme_card from "../../../images/theme_card.png";
import mayChuVatLy from "../../../images/cloudServer/may_chu_vat_ly.jpg"
import cloudGPU_01 from "../../../images/cloudServer/cloudGPU_01.png"
import cloudGPU_02 from "../../../images/cloudServer/cloudGPU_02.png"
import cloudGPU_03 from "../../../images/cloudServer/cloudGPU_03.png"
import dedicateServer from "../../../images/cloudServer/dedicate_server.jpg"
import cloudServer_icon_01 from "../../../images/cloudServer/cloudServer_icon_01.png"
import cloudServer_icon_02 from "../../../images/cloudServer/cloudServer_icon_02.png"
import cloudServer_icon_03 from "../../../images/cloudServer/cloudServer_icon_03.png"
import cloudServer_icon_04 from "../../../images/cloudServer/cloudServer_icon_04.png"
import { Container, Box, Typography, Card, Grid, Divider, TextField, FormControlLabel, Tab, Tabs, Slider, Input, Button } from "@mui/material";
import Switch, { SwitchProps } from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import Image from "next/image";


export default function DedicatedServer() {
  return (
    <>
      <Container>
        <Box sx={{ textAlign: "center", py: 10 }}>

          <Typography className="text-[2.5rem] font-semibold text-sky-900">
            Dedicated Server - Máy chủ riêng của bạn
          </Typography>
          <Typography> Máy Chủ Vật Lý với năng lực xử lý vượt trội, hiệu năng cao, khả năng chịu tải lớn </Typography>
          <Button href="tel:0769999967" variant="contained" color="info" className="my-10">Liên hệ ngay để nhận ưu đãi hấp dẫn</Button>

          <Image src={dedicateServer} className="w-full h-auto rounded-xl" alt="ecoPrivateCloud" />

        </Box>

        <Typography className="text-[2.5rem] font-semibold text-sky-900 text-center py-10">
          Lợi ích của Dedicated Server
        </Typography>

        <Box className="container grid sm:grid-cols-3 gap-x-6 gap-y-6 mb-10">
          <Card className="relative rounded-xl hover:shadow-lg cursor-pointer  text-sky-900">
            <Box className="flex flex-col justify-center items-center p-3">
              <Typography className="text-[1.5rem] font-bold">Ổ cứng SSD Enterprise</Typography>
              <Image src={cloudGPU_03} className="w-52 h-auto my-5" alt="Ổ cứng SSD Enterprise" />
              <Typography className="font-extralight text-justify px-3">
                Máy chủ dùng riêng Dedicated Server với ổ cứng SSD Enterprise mang lại hiệu năng tối đa,
                đáp ứng tiêu chuẩn cao của các ứng dụng.
              </Typography>
            </Box>
          </Card>

          <Card className="relative rounded-xl hover:shadow-lg cursor-pointer">
            <Box className="flex flex-col justify-center items-center p-3  text-sky-900">
              <Typography className="text-[1.5rem] font-bold"> Máy chủ chuyên dụng </Typography>

              <Image src={cloudGPU_01} className="w-52 h-auto my-5" alt="Máy chủ chuyên dụng" />
              <Typography className="font-extralight text-justify px-3">
                Máy chủ chuyên dụng chính hãng đảm bảo tiêu chuẩn, cấu hình linh hoạt phù hợp
                với nhu cầu đa dạng ứng dụng của doanh nghiệp.
              </Typography>
            </Box>
          </Card>

          <Card className="rounded-xl hover:shadow-lg cursor-pointer">
            <Box className="flex flex-col justify-center items-center p-3  text-sky-900">
              <Typography className="text-[1.5rem] font-bold"> Tối đa hóa lợi nhuận </Typography>
              <Image src={cloudGPU_02} className="w-52 h-auto my-5" alt="Tối đa hóa lợi nhuận" />
              <Typography className="font-extralight text-justify px-3">
                Không cần đầu tư mua máy chủ, linh kiện đắt đỏ. Giảm thiểu chi phí vận hành OPEX tối đa.
                Thay mới linh kiện trong suốt quá trình sử dụng.
              </Typography>
            </Box>
          </Card>
        </Box>

        <Card className="rounded-2xl my-10">
          <Grid container className="shadow-lg ">

            <Grid item xs={12} md={5} className="flex flex-col items-center justify-center">
              <Image src={mayChuVatLy} className="w-full h-full rounded-lg" alt="vitualDataCenter" />
            </Grid>

            <Grid item xs={12} md={7} className=" text-sky-900">
              <Grid pl={2}>
                <Box sx={{ display: "flex", alignItems: "center", py: 1 }}>
                  <Image src={cloudServer_icon_01} className="w-16 h-auto mr-4" alt="99.99% Uptime" />
                  <Box>
                    <Typography className="text-[1.3rem] font-semibold ">99.99% Uptime</Typography>
                    <Typography className="pr-5 text-justify">
                      Virtual Data Center luôn hoạt động với cam kết chất lượng dịch vụ 99.99% uptime, đáp ứng nhu cầu luôn kết nối.
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", py: 1 }}>
                  <Image src={cloudServer_icon_02} className="w-16 h-auto mr-4" alt="Băng thông rộng, siêu tốc độ" />
                  <Box>
                    <Typography className="text-[1.3rem] font-semibold">Băng thông rộng, siêu tốc độ</Typography>
                    <Typography className="pr-5 text-justify">
                      Kết nối mạng tốc độ cao đến 10+ Gbps đáp ứng nhu cầu truy cập lớn, phục vụ người dùng đông như media, streaming, gaming…
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", py: 1 }}>
                  <Image src={cloudServer_icon_03} className="w-16 h-auto mr-4" alt="Phòng chống tấn công DDOS" />
                  <Box>
                    <Typography className="text-[1.3rem] font-semibold">Phòng chống tấn công DDOS</Typography>
                    <Typography className="pr-5 text-justify">
                      Máy chủ dùng riêng Dedicated Server luôn được bảo vệ bởi hệ thống phòng chống tấn công DDOS chuyên dụng với công nghệ AI.
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", py: 1 }}>
                  <Image src={cloudServer_icon_04} className="w-16 h-auto mr-4" alt="Tùy chọn hệ điều hành" />
                  <Box>
                    <Typography className="text-[1.3rem] font-semibold">Tùy chọn hệ điều hành</Typography>
                    <Typography className="pr-5 text-justify">
                      EcoCloud hỗ trợ cài đặt hệ điều hành đa dạng, từ Windows Server, Linux và các hệ điều hành ảo hóa như VMWARE, KVM…
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>

          </Grid>
        </Card>


        <Box >
          <Box>
            <Box my={5} sx={{ textAlign: "center" }}>
              <Typography className="text-[2rem] font-semibold text-sky-900"> Bảng giá dịch vụ Dedicated Server </Typography>
              <Typography> * Bảng giá chưa bao gồm 10% VAT </Typography>
            </Box>
            <Box className='grid sm:grid-cols-4 gap-x-6 gap-y-6 mb-10 text-center'>
              <Card className='h-fit my-3 p-3 rounded-xl shadow-lg'>
                <Box className="">
                  <Divider className="border-t-4 bg-yellow-600" />
                  <Typography className="py-5 uppercase text-[1.5rem] font-bold text-sky-900" > gói private 01</Typography>
                </Box>
                <Box>
                  <div><TextField disabled size="small" className="py-1 w-[200px]" defaultValue="1 Intel Xeon Silver 4410" /></div>
                  <div><TextField disabled size="small" className="py-1 w-[200px]" defaultValue="16 GB RAM" /></div>
                  <div><TextField disabled size="small" className="py-1 w-[200px]" defaultValue="480 GB SSD" /></div>
                  <div><TextField disabled size="small" className="py-1 w-[200px]" defaultValue="1 IPv4" /></div>
                  <div><TextField disabled size="small" className="py-1 w-[200px]" defaultValue="100 Mbps network" /></div>

                  <Typography className="uppercase text-[1.5rem] font-bold py-5 text-yellow-600" > 7.600.000 vnd</Typography>
                  <Divider className="border-t-4 bg-yellow-600" />
                </Box>
              </Card>

              <Card className='h-fit my-3 p-3 rounded-xl shadow-lg'>
                <Box className="">
                  <Divider className="border-t-4 bg-yellow-600" />
                  <Typography className="py-5 uppercase text-[1.5rem] font-bold text-sky-900" > gói private 02</Typography>
                </Box>
                <Box>
                  <div><TextField disabled size="small" className="py-1 w-[200px]" defaultValue="1 Intel Xeon Silver 4410" /></div>
                  <div><TextField disabled size="small" className="py-1 w-[200px]" defaultValue="32 GB RAM" /></div>
                  <div><TextField disabled size="small" className="py-1 w-[200px]" defaultValue="960 GB SSD" /></div>
                  <div><TextField disabled size="small" className="py-1 w-[200px]" defaultValue="1 IPv4" /></div>
                  <div><TextField disabled size="small" className="py-1 w-[200px]" defaultValue="400 Mbps network" /></div>

                  <Typography className="uppercase text-[1.5rem] font-bold py-5 text-yellow-600" > 8.300.000 vnd</Typography>
                  <Divider className="border-t-4 bg-yellow-600" />
                </Box>
              </Card>

              <Card className='h-fit my-3 p-3 rounded-xl shadow-lg'>
                <Box className="">
                  <Divider className="border-t-4 bg-yellow-600" />
                  <Typography className="py-5 uppercase text-[1.5rem] font-bold text-sky-900" > gói private 03</Typography>
                </Box>
                <Box>
                  <div><TextField disabled size="small" className="py-1 w-[200px]" defaultValue="2 Intel Xeon Silver 4410" /></div>
                  <div><TextField disabled size="small" className="py-1 w-[200px]" defaultValue="2 x 32 GB RAM" /></div>
                  <div><TextField disabled size="small" className="py-1 w-[200px]" defaultValue="1.9 TB SSD" /></div>
                  <div><TextField disabled size="small" className="py-1 w-[200px]" defaultValue="1 IPv4" /></div>
                  <div><TextField disabled size="small" className="py-1 w-[200px]" defaultValue="500 Mbps network" /></div>

                  <Typography className="uppercase text-[1.5rem]  font-bold py-5 text-yellow-600" > 9.300.000 vnd</Typography>
                  <Divider className="border-t-4 bg-yellow-600" />
                </Box>
              </Card>

              <Card className='h-fit my-3 p-3 rounded-xl shadow-lg'>
                <Box className="">
                  <Divider className="border-t-4 bg-yellow-600" />
                  <Typography className="py-5 uppercase text-[1.5rem] font-bold text-sky-900" > gói private 04</Typography>
                </Box>
                <Box>
                  <div><TextField disabled size="small" className="py-1 w-[200px]" defaultValue="1 Intel Xeon Silver 4410" /></div>
                  <div><TextField disabled size="small" className="py-1 w-[200px]" defaultValue="2 x 32 GB RAM" /></div>
                  <div><TextField disabled size="small" className="py-1 w-[200px]" defaultValue="3.8 TB SSD" /></div>
                  <div><TextField disabled size="small" className="py-1 w-[200px]" defaultValue="1 IPv4" /></div>
                  <div><TextField disabled size="small" className="py-1 w-[200px]" defaultValue="500 Mbps network" /></div>

                  <Typography className="uppercase text-[1.5rem]  font-bold py-5 text-yellow-600" > 9.999.000 vnd</Typography>
                  <Divider className="border-t-4 bg-yellow-600" />
                </Box>
              </Card>
            </Box>
          </Box>
        </Box >

        <Box pb={5}>

          <Typography className="text-[2rem] text-sky-900 font-semibold text-center py-5"> Các câu hỏi thường gặp </Typography>

          <Grid container className=" text-sky-900">
            <Grid item xs={12} md={6} lg={6} xl={6} className="flex flex-col items-center justify-center">
              <Typography className="w-3/4 text-lg font-semibold">Dedicated Server là gì? Lợi ích Dedicated Server</Typography>
              <Typography className="w-3/4 text-justify py-3">
                Dedicated Server là dịch vụ cho thuê máy chủ vật lý đặt tại Data Center, hoạt động kết nối Internet 24/7. Với cấu hình mạnh mẽ,
                Dedicated Server đáp ứng cho việc sử dụng các ứng dụng yêu cầu hiệu năng cao, đảm bảo yêu cầu bảo mật của doanh nghiệp.
              </Typography>
            </Grid>

            <Grid item xs={12} md={6} lg={6} xl={6} className="flex flex-col items-center justify-center">
              <Typography className="w-3/4 text-lg font-semibold">Khác biệt giữa Dedicated Server với Cloud Server là gì?</Typography>
              <Typography className="w-3/4 text-justify py-3">
                Cloud Server là máy chủ ảo hóa trên tổng thể nhiều máy chủ vật lý được tích hợp chặt chẽ với nhau;
                Khác với Dedicated Server hoạt động độc lập riêng biệt, không chia sẽ tài nguyên.
              </Typography>
            </Grid>

            <Grid item xs={12} md={6} lg={6} xl={6} className="flex flex-col items-center justify-center">
              <Typography className="w-3/4 text-lg font-semibold">Có hỗ trợ migrate sang dịch vụ của EcoCloud?</Typography>
              <Typography className="w-3/4 text-justify py-3">
                Chúng tôi luôn hỗ trợ khách hàng chuyển đổi sang dịch vụ của EcoCloud. Chúng tôi có thể giúp quý khách hàng chuyển đổi từ máy chủ ảo hóa VMWare
                hoặc Hyper-V sang Dedicated Server và ngược lại mà không gây gián đoạn dịch vụ.
              </Typography>
            </Grid>

            <Grid item xs={12} md={6} lg={6} xl={6} className="flex flex-col items-center justify-center">
              <Typography className="w-3/4 text-lg font-semibold">Tôi muốn dùng thử dịch vụ Dedicated Server của EcoCloud?</Typography>
              <Typography className="w-3/4 text-justify py-3">
                EcoCloud hiện chưa có chương trình dùng thử cho dịch vụ máy chủ riêng, tuy nhiên, chúng tôi có thể thực hiện Demo trực quan.
                Hãy liên hệ với chúng tôi qua hotline <a href="tel:0769999967" className="no-underline font-bold" title="hotline: 076 9999 967">+84 76 9999 967</a> để được hỗ trợ.
              </Typography>
            </Grid>

            <Grid item xs={12} md={6} lg={6} xl={6} className="flex flex-col items-center justify-center">
              <Typography className="w-3/4 text-lg font-semibold">Dedicated Server của EcoCloud có hỗ trợ Windows Server?</Typography>
              <Typography className="w-3/4 text-justify py-3">
                EcoCloud hỗ trợ cài đặt nhiều hệ điều hành cho Dedicated Server, trong đó có nhiều phiên bản Windows Server như Win Server 2012, 2016, 2019…
              </Typography>
            </Grid>

            <Grid item xs={12} md={6} lg={6} xl={6} className="flex flex-col items-center justify-center">
              <Typography className="w-3/4 text-lg font-semibold">Nhà cung cấp cũ không hợp tác chuyển đổi máy chủ?</Typography>
              <Typography className="w-3/4 text-justify py-3">
                Chúng tôi rất lấy làm tiếc vì sự không hợp tác từ nhà cung cấp cũ. Chúng tôi có những công nghệ khác biệt,
                giúp khách hàng chuyển đổi hệ thống mà không cần thao tác từ tầng vật lý. Hãy liên hệ với chúng tôi để được tư vấn hỗ trợ.
              </Typography>
            </Grid>
          </Grid>

        </Box>
      </Container>
    </>
  )
}