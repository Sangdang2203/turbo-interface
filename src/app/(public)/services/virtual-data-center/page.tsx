"use client";

import React from "react";
import theme_card from "../../../images/theme_card.png";
import ecoPrivateCloud from "../../../images/privateCloud/eco_privatecloud.png"
import cloudGPU_01 from "../../../images/cloudServer/cloudGPU_01.png"
import cloudGPU_02 from "../../../images/cloudServer/cloudGPU_02.png"
import cloudGPU_03 from "../../../images/cloudServer/cloudGPU_03.png"
import vitualDataCenter from "../../../images/cloudServer/virtual_data_center.png"
import cloudServer_icon_01 from "../../../images/cloudServer/cloudServer_icon_01.png"
import cloudServer_icon_02 from "../../../images/cloudServer/cloudServer_icon_02.png"
import cloudServer_icon_03 from "../../../images/cloudServer/cloudServer_icon_03.png"
import cloudServer_icon_04 from "../../../images/cloudServer/cloudServer_icon_04.png"
import { Container, Box, Typography, Card, Grid, Divider, TextField, FormControlLabel, Tab, Tabs, Slider, Input, Button } from "@mui/material";
import Switch, { SwitchProps } from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import Image from "next/image";


export default function VirtualDataCenter() {

  const IOSSwitch = styled((props: SwitchProps) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(16px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
          opacity: 1,
          border: 0,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#33cf4d',
        border: '6px solid #fff',
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color:
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 22,
      height: 22,
    },
    '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500,
      }),
    },
  }));
  return (
    <>
      <Container>

        <Box sx={{ textAlign: "center", py: 10 }}>
          <Typography className="text-[2.5rem] font-semibold text-sky-900">
            Virtual Data Center <br /> Trung tâm dữ liệu công nghệ đám mây
          </Typography>
          <Typography> Xây dựng trung tâm dữ liệu Virtual Data Center không cần phần cứng máy chủ và thiết bị mạng </Typography>
          <Button href="tel:0769999967" variant="contained" color="info" className="my-10">Liên hệ ngay để nhận ưu đãi hấp dẫn</Button>

          <Image src={ecoPrivateCloud} className="w-full h-auto rounded-xl" alt="ecoPrivateCloud" />
        </Box>

        <Typography className="text-[2.5rem] font-semibold text-sky-900 text-center py-10">
          Lợi ích của Virtual Data Center
        </Typography>

        <Box className="container grid sm:grid-cols-3 gap-x-6 gap-y-6 mb-10">

          <Card className="relative rounded-xl hover:shadow-lg cursor-pointer  text-sky-900">
            <Box className="flex flex-col justify-center items-center p-3">
              <Typography className="text-[1.5rem] font-bold">Minh bạch chi phí</Typography>
              <Image src={cloudGPU_03} className="w-52 h-auto my-5" alt="Minh bạch chi phí" />
              <Typography className="font-extralight text-justify px-3">
                Giao diện trực quan giúp dễ dàng quản lý và giám sát các tài nguyên thực dùng trên từng máy chủ.
                Lập báo cáo thống kê chỉ với 1 click.
              </Typography>
            </Box>
          </Card>

          <Card className="relative rounded-xl hover:shadow-lg cursor-pointer">
            <Box className="flex flex-col justify-center items-center p-3  text-sky-900">
              <Typography className="text-[1.5rem] font-bold"> Hoạt động hiệu quả </Typography>

              <Image src={cloudGPU_01} className="w-52 h-auto my-5" alt="Hoạt động hiệu quả" />
              <Typography className="font-extralight text-justify px-3">
                Dễ dàng mở rộng hay thu hẹp tài nguyên nhanh chóng để phù hợp với nhu cầu công việc của doanh nghiệp,
                theo sát nhu cầu kinh doanh.
              </Typography>
            </Box>
          </Card>

          <Card className="rounded-xl hover:shadow-lg cursor-pointer">
            <Box className="flex flex-col justify-center items-center p-3  text-sky-900">
              <Typography className="text-[1.5rem] font-bold"> Tối đa hóa lợi nhuận </Typography>
              <Image src={cloudGPU_02} className="w-52 h-auto my-5" alt="Tối đa hóa lợi nhuận" />
              <Typography className="font-extralight text-justify px-3">
                Không cần đầu tư CAPEX cho phần cứng, thiết bị đắt đỏ. Giảm thiểu chi phí
                vận hành OPEX tối đa. Chỉ chi trả cho tài nguyên thực dùng.
              </Typography>
            </Box>
          </Card>

        </Box>

        <Card className="rounded-2xl my-10">
          <Grid container className="shadow-lg pb-5">

            <Grid item xs={12} md={5} className="flex flex-col items-center justify-center">
              <Image src={vitualDataCenter} className="w-full h-auto" alt="vitualDataCenter" />
            </Grid>

            <Grid item xs={12} md={7} className=" text-sky-900">
              <Grid pl={2}>
                <Box sx={{ display: "flex", alignItems: "center", py: 1 }}>
                  <Image src={cloudServer_icon_01} className="w-16 h-auto mr-4" alt="99.99% Uptime" />
                  <Box>
                    <Typography className="text-[1.3rem] font-semibold pt-5">99.99% Uptime</Typography>
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
                  <Image src={cloudServer_icon_03} className="w-16 h-auto mr-4" alt="Kiểm soát, phân quyền" />
                  <Box>
                    <Typography className="text-[1.3rem] font-semibold">Kiểm soát, phân quyền</Typography>
                    <Typography className="pr-5 text-justify">
                      Kiểm soát, phân quyền truy cập dựa trên vai trò (RBAC) để ủy quyền quản lý tài nguyên.
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", py: 1 }}>
                  <Image src={cloudServer_icon_04} className="w-16 h-auto mr-4" alt="Quản trị linh hoạt" />
                  <Box>
                    <Typography className="text-[1.3rem] font-semibold">Quản trị linh hoạt</Typography>
                    <Typography className="pr-5 text-justify">
                      Quản trị độc lập, linh hoạt với tường lửa và mạng riêng biệt, cấu hình tùy chỉnh để phù hợp với kiến trúc hạ tầng hiện hữu.
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
              <Typography className="text-[2rem] font-semibold text-sky-900"> Bảng giá dịch vụ Virtual Data Center </Typography>
              <Typography> * Bảng giá chưa bao gồm 10% VAT </Typography>
            </Box>
            <Box className='grid sm:grid-cols-4 gap-x-6 gap-y-6 mb-10 text-center'>
              <Card className='h-fit my-3 p-3 rounded-xl shadow-lg'>
                <Box className="">
                  <Divider className="border-t-4 bg-yellow-600" />
                  <Typography className="py-5 uppercase text-[1.5rem] font-bold text-sky-900" > gói vdc 01</Typography>
                </Box>
                <Box>
                  <div><TextField disabled size="small" className="py-1 w-[200px]" defaultValue="20 vCPU" /></div>
                  <div><TextField disabled size="small" className="py-1 w-[200px]" defaultValue="48 GB RAM" /></div>
                  <div><TextField disabled size="small" className="py-1 w-[200px]" defaultValue="600 Gb SSD" /></div>
                  <div><TextField disabled size="small" className="py-1 w-[200px]" defaultValue="6 IPv4" /></div>
                  <div><TextField disabled size="small" className="py-1 w-[200px]" defaultValue="400 Mbps network" /></div>
                  <div><TextField disabled size="small" className="py-1 w-[200px]" defaultValue="1 User Group" /></div>
                  <div><TextField disabled size="small" className="py-1 w-[200px]" defaultValue="16 IPv4 Private LAN" /></div>

                  <Typography className="uppercase text-[1.5rem] font-bold py-5 text-yellow-600" > 9.600.000 vnd</Typography>
                  <Divider className="border-t-4 bg-yellow-600" />
                </Box>
              </Card>

              <Card className='h-fit my-3 p-3 rounded-xl shadow-lg'>
                <Box className="">
                  <Divider className="border-t-4 bg-yellow-600" />
                  <Typography className="py-5 uppercase text-[1.5rem] font-bold text-sky-900" > gói vdc 02</Typography>
                </Box>
                <Box>
                  <div><TextField disabled size="small" className="py-1 w-[200px]" defaultValue="30 vCPU" /></div>
                  <div><TextField disabled size="small" className="py-1 w-[200px]" defaultValue="64 GB RAM" /></div>
                  <div><TextField disabled size="small" className="py-1 w-[200px]" defaultValue="1000 Gb SSD" /></div>
                  <div><TextField disabled size="small" className="py-1 w-[200px]" defaultValue="9 IPv4" /></div>
                  <div><TextField disabled size="small" className="py-1 w-[200px]" defaultValue="400 Mbps network" /></div>
                  <div><TextField disabled size="small" className="py-1 w-[200px]" defaultValue="1 User Group" /></div>
                  <div><TextField disabled size="small" className="py-1 w-[200px]" defaultValue="32 IPv4 Private LAN" /></div>

                  <Typography className="uppercase text-[1.5rem] font-bold py-5 text-yellow-600" > 14.400.000 vnd</Typography>
                  <Divider className="border-t-4 bg-yellow-600" />
                </Box>
              </Card>

              <Card className='h-fit my-3 p-3 rounded-xl shadow-lg'>
                <Box className="">
                  <Divider className="border-t-4 bg-yellow-600" />
                  <Typography className="py-5 uppercase text-[1.5rem] font-bold text-sky-900" > gói vdc 03</Typography>
                </Box>
                <Box>
                  <div><TextField disabled size="small" className="py-1 w-[200px]" defaultValue="40 vCPU" /></div>
                  <div><TextField disabled size="small" className="py-1 w-[200px]" defaultValue="96 GB RAM" /></div>
                  <div><TextField disabled size="small" className="py-1 w-[200px]" defaultValue="1500 Gb SSD" /></div>
                  <div><TextField disabled size="small" className="py-1 w-[200px]" defaultValue="12 IPv4" /></div>
                  <div><TextField disabled size="small" className="py-1 w-[200px]" defaultValue="500 Mbps network" /></div>
                  <div><TextField disabled size="small" className="py-1 w-[200px]" defaultValue="1 User Group" /></div>
                  <div><TextField disabled size="small" className="py-1 w-[200px]" defaultValue="48 IPv4 Private LAN" /></div>

                  <Typography className="uppercase text-[1.5rem]  font-bold py-5 text-yellow-600" > 21.100.000 vnd</Typography>
                  <Divider className="border-t-4 bg-yellow-600" />
                </Box>
              </Card>

              <Card className='h-fit my-3 p-3 rounded-xl shadow-lg'>
                <Box className="">
                  <Divider className="border-t-4 bg-yellow-600" />
                  <Typography className="py-5 uppercase text-[1.5rem] font-bold text-sky-900" > gói vdc 04</Typography>
                </Box>
                <Box>
                  <div><TextField disabled size="small" className="py-1 w-[200px]" defaultValue="50 vCPU" /></div>
                  <div><TextField disabled size="small" className="py-1 w-[200px]" defaultValue="128 GB RAM" /></div>
                  <div><TextField disabled size="small" className="py-1 w-[200px]" defaultValue="2000 Gb SSD" /></div>
                  <div><TextField disabled size="small" className="py-1 w-[200px]" defaultValue="16 IPv4" /></div>
                  <div><TextField disabled size="small" className="py-1 w-[200px]" defaultValue="500 Mbps network" /></div>
                  <div><TextField disabled size="small" className="py-1 w-[200px]" defaultValue="1 User Group" /></div>
                  <div><TextField disabled size="small" className="py-1 w-[200px]" defaultValue="64 IPv4 Private LAN" /></div>

                  <Typography className="uppercase text-[1.5rem]  font-bold py-5 text-yellow-600" > 27.800.000 vnd</Typography>
                  <Divider className="border-t-4 bg-yellow-600" />
                </Box>
              </Card>
            </Box>
          </Box>

          <Box className=" text-sky-900">
            <Typography className="text-[2rem] font-semibold text-center py-5"> Bảng giá tài nguyên bổ sung </Typography>

            <Box className='grid sm:grid-cols-3 gap-x-6 gap-y-6 mb-10'>
              <Box className='h-[180px] my-3 px-3 rounded-xl shadow-2xl'>
                <Box className='py-5'>
                  <Typography className='text-[1.5rem] font-bold'>vCPU</Typography>
                  <Typography className=''>Thêm 1 vCPU</Typography>
                </Box>
                <Divider />
                <FormControlLabel className="py-3"
                  control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                  label="80.000 VND x 1 tháng"
                />
              </Box>

              <Box className='h-[180px] my-3 px-3 rounded-xl shadow-2xl'>
                <Box className='py-5'>
                  <Typography className='text-[1.5rem] font-bold'>RAM</Typography>
                  <Typography className=''>Thêm 1 GB RAM</Typography>
                </Box>
                <Divider />
                <FormControlLabel className="py-3"
                  control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                  label="80.000 VND x 1 tháng"
                />
              </Box>

              <Box className='h-[180px] my-3 px-3 rounded-xl shadow-2xl'>
                <Box className='py-5'>
                  <Typography className='text-[1.5rem] font-bold'>SSD Storage</Typography>
                  <Typography className=''>Thêm 10 GB SSD Storage</Typography>
                </Box>
                <Divider />
                <FormControlLabel className="py-3"
                  control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                  label="60.000 VND x 1 tháng"
                />
              </Box>

              <Box className='h-[180px] my-3 px-3 rounded-xl shadow-2xl'>
                <Box className='py-5'>
                  <Typography className='text-[1.5rem] font-bold'>Attached Storage</Typography>
                  <Typography className=''>Thêm 100 GB Attached Storage</Typography>
                </Box>
                <Divider />
                <FormControlLabel className="py-3"
                  control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                  label="150.000 VND x 1 tháng"
                />
              </Box>

              <Box className='h-[180px] my-3 px-3 rounded-xl shadow-2xl'>
                <Box className='py-5'>
                  <Typography className='text-[1.5rem] font-bold'>Địa chỉ IPv4</Typography>
                  <Typography className=''>Thêm 1 địa chỉ IPv4 public</Typography>
                </Box>
                <Divider />
                <FormControlLabel className="py-3"
                  control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                  label="100.000 VND x 1 tháng"
                />
              </Box>

              <Box className='h-[180px] my-3 px-3 rounded-xl shadow-2xl'>
                <Box className='py-5'>
                  <Typography className='text-[1.5rem] font-bold'>Network (trong nước)</Typography>
                  <Typography className=''>Thêm 100 Mbps Network</Typography>
                </Box>
                <Divider />
                <FormControlLabel className="py-3"
                  control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                  label="1.100.000 VND x 1 tháng"
                />
              </Box>
            </Box>
          </Box>
        </Box >

        <Box pb={5}>
          <Typography className="text-[2rem] text-sky-900 font-semibold text-center py-5"> Các câu hỏi thường gặp </Typography>
          <Grid container className=" text-sky-900">
            <Grid item xs={12} md={6} lg={6} xl={6} className="flex flex-col items-center justify-center">
              <Typography className="w-3/4 text-lg font-semibold">Tôi muốn dùng thử dịch vụ Virtual Data Center?</Typography>
              <Typography className="w-3/4 text-justify py-3">
                EcoCloud luôn có chương trình dùng thử miễn phí để khách hàng có thể trải nghiệm tốt nhất.
                Hãy liên hệ với chúng tôi qua hotline +84 76 9999 967 hoặc email cskh@turbo.vn để được hỗ trợ khởi tạo tài khoản.
              </Typography>
            </Grid>

            <Grid item xs={12} md={6} lg={6} xl={6} className="flex flex-col items-center justify-center">
              <Typography className="w-3/4 text-lg font-semibold">Khác biệt giữa Virtual Data Center với Private Cloud là gì?</Typography>
              <Typography className="w-3/4 text-justify py-3">
                Với Private Cloud là cụm hệ thống máy chủ và storage, network chỉ dành riêng cho doanh nghiệp và không chia sẻ;
                Với Virtual Data Center là những khối tài nguyên được chuẩn bị trước và độc lập, nằm trong hệ thống Cloud IaaS.
              </Typography>
            </Grid>

            <Grid item xs={12} md={6} lg={6} xl={6} className="flex flex-col items-center justify-center">
              <Typography className="w-3/4 text-lg font-semibold">Có hỗ trợ migrate sang dịch vụ của EcoCloud?</Typography>
              <Typography className="w-3/4 text-justify py-3">
                Chúng tôi luôn hỗ trợ khách hàng chuyển đổi sang dịch vụ Cloud Server của EcoCloud.
                Chúng tôi có thể giúp quý khách hàng chuyển đổi từ Dedicated Server sang Cloud Server; chuyển từ ảo hóa VMWare hoặc Hyper-V dễ dàng và không gây downtime.
              </Typography>
            </Grid>

            <Grid item xs={12} md={6} lg={6} xl={6} className="flex flex-col items-center justify-center">
              <Typography className="w-3/4 text-lg font-semibold">Tôi có thể cài đặt mạng LAN cho Virtual Data Center?</Typography>
              <Typography className="w-3/4 text-justify py-3">
                Khách hàng hoàn toàn có thể cài đặt LAN và Firewall riêng cho Virtual Data Center trên giao diện quản lý. Nếu có gặp khó khăn trong quá trình cài đặt,
                hãy liên hệ với đội kỹ thuật để được hỗ trợ nhanh chóng.
              </Typography>
            </Grid>

            <Grid item xs={12} md={6} lg={6} xl={6} className="flex flex-col items-center justify-center">
              <Typography className="w-3/4 text-lg font-semibold">Cloud Server của EcoCloud có hỗ trợ Windows Server?</Typography>
              <Typography className="w-3/4 text-justify py-3">
                EcoCloud có hàng trăm templates hệ điều hành được chuẩn bị sẵn, và trong đó có nhiều mẫu Windows Server như Win Server 2012, 2016, 2019
                với nhiều phiên bản từ Standard đến DataCenter, giúp quý khách nhanh chóng triển khai.
              </Typography>
            </Grid>

            <Grid item xs={12} md={6} lg={6} xl={6} className="flex flex-col items-center justify-center">
              <Typography className="w-3/4 text-lg font-semibold">Nhà cung cấp cũ không hợp tác chuyển đổi máy chủ?</Typography>
              <Typography className="w-3/4 text-justify py-3">
                Chúng tôi rất lấy làm tiếc vì sự không hợp tác từ nhà cung cấp cũ. Chúng tôi có những công nghệ khác biệt, giúp khách hàng chuyển đổi hệ thống mà không cần thao tác từ tầng vật lý.
                Hãy liên hệ với chúng tôi để được tư vấn hỗ trợ.
              </Typography>
            </Grid>

          </Grid>
        </Box>
      </Container>
    </>
  )
}