"use client";


import Image from "next/image";
import { styled } from '@mui/material/styles';
import { Box, Button, Card, CardActions, CardContent, Container, Grid, Typography, FormControlLabel, Divider, TextField } from "@mui/material";
import Switch, { SwitchProps } from '@mui/material/Switch';
import promotion from "../../images/promotion.jpg";
import cloudServer_icon_01 from "../../../images/cloudServer/cloudServer_icon_01.png"
import cloudServer_icon_02 from "../../../images/cloudServer/cloudServer_icon_02.png"
import cloudServer_icon_03 from "../../../images/cloudServer/cloudServer_icon_03.png"
import cloudServer_icon_04 from "../../../images/cloudServer/cloudServer_icon_04.png"
import cloudServer_01 from "../../../images/cloudServer/cloudServer_01.png"
import cloudServer_02 from "../../../images/cloudServer/cloudServer_02.png"
import cloudServer_03 from "../../../images/cloudServer/cloudServer_03.png"
import cloudServer_07 from "../../../images/cloudServer/cloudServer_07.png"

export default function CloudServer() {

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
          <Typography className="text-[2.5rem] font-light text-sky-900"> ECOLOUD SERVER </Typography>
          <Typography> Khởi tạo và sử dụng máy chủ Cloud Server chỉ trong 45 giây! </Typography>
        </Box>

        <Box className="container grid sm:grid-cols-3 gap-x-6 gap-y-6 mb-10">
          <Card className="relative rounded-xl hover:shadow-lg cursor-pointer  text-sky-900">
            <Box className="flex flex-col justify-center items-center p-3">
              <Typography className="text-[1.5rem] font-bold">Giao diện đơn giản</Typography>
              <Image src={cloudServer_01} className="w-full h-auto" alt="Giao diện đơn giản" />
              <Typography className="font-extralight text-justify px-3">
                Giao diện EcoCloud trực quan dễ dàng quản lý nhiều Cloud Server và giám sát các thông số
                tài nguyên sử dụng trên từng máy chủ
              </Typography>
            </Box>
          </Card>

          <Card className="relative rounded-xl hover:shadow-lg cursor-pointer">
            <Box className="flex flex-col justify-center items-center p-3  text-sky-900">
              <Typography className="text-[1.5rem] font-bold"> Hiệu năng vượt trội </Typography>

              <Image src={cloudServer_02} className="w-full h-auto" alt="Hiệu năng vượt trội" />
              <Typography className="font-extralight text-justify px-3">
                EcoCloud sử dụng 100% Enterprise SSD tạo nên kho lưu trữ siêu hiệu năng IOPS cao,
                cùng tính năng tự điều chỉnh và không có điểm lỗi đơn
              </Typography>
            </Box>
          </Card>

          <Card className="rounded-xl hover:shadow-lg cursor-pointer">
            <Box className="flex flex-col justify-center items-center p-3  text-sky-900">
              <Typography className="text-[1.5rem] font-bold"> IDC tiêu chuẩn 3 </Typography>
              <Image src={cloudServer_03} className="w-full h-auto" alt="IDC tiêu chuẩn 3" />
              <Typography className="font-extralight text-justify px-3">
                Hệ thống Ecocloud đặt tại các IDC tiêu chuẩn Tier - 3 như Viettel
                và VNPT đảm bảo đường truyền băng thông rộng 10+ Gbps siêu tốc độ
              </Typography>
            </Box>
          </Card>
        </Box>

        <Image src={promotion} className="w-full h-auto rounded-2xl" alt="promotion" />


        <Card className="rounded-2xl my-10">
          <Grid container className="shadow-lg pb-5">
            <Grid item xs={12} md={5} className="flex flex-col items-center justify-center">
              <Image src={cloudServer_07} className="w-72 h-auto" alt="cloudServer_07" />
            </Grid>

            <Grid item xs={12} md={7} className=" text-sky-900">
              <Grid pl={8}>
                <Box sx={{ display: "flex", alignItems: "center", py: 1 }}>
                  <Image src={cloudServer_icon_01} className="w-16 h-auto mr-4" alt="" />
                  <Box>
                    <Typography className="text-[1.3rem] font-semibold">99.99% Uptime</Typography>
                    <Typography className="w-3/4 text-justify">
                      Cloud Server luôn hoạt động với cam kết chất lượng dịch vụ 99.99% uptime, đáp ứng nhu cầu luôn kết nối.
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", py: 1 }}>
                  <Image src={cloudServer_icon_02} className="w-16 h-auto mr-4" alt="" />
                  <Box>
                    <Typography className="text-[1.3rem] font-semibold">Hỗ trợ phòng chống DDoS</Typography>
                    <Typography className="w-3/4 text-justify">
                      Mục đích chính EcoCloud Server là luôn luôn hoạt động, vì vậy phòng chống DDoS là 1 tính năng quan trọng được tích hợp sẵn
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", py: 1 }}>
                  <Image src={cloudServer_icon_03} className="w-16 h-auto mr-4" alt="" />
                  <Box>
                    <Typography className="text-[1.3rem] font-semibold">Cấu hình linh hoạt</Typography>
                    <Typography className="w-3/4 text-justify">
                      Lựa chọn gói dịch vụ phù hợp với nhu cầu ban đầu, thay đổi cấu hình linh hoạt và nhanh chóng đáp ứng nhu cầu ngày càng phát triển
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", py: 1 }}>
                  <Image src={cloudServer_icon_04} className="w-16 h-auto mr-4" alt="" />
                  <Box>
                    <Typography className="text-[1.3rem] font-semibold">Hỗ trợ dịch vụ 24/7</Typography>
                    <Typography className="w-3/4 text-justify">
                      Bất kể khi nào bạn cần hỗ trợ, đội ngũ EcoCloud luôn có mặt và sẽ phản hồi trong 15 phút
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
              <Typography className="text-[2rem] font-light text-sky-900"> Bảng giá dịch vụ Cloud Server </Typography>
              <Typography> * Bảng giá chưa bao gồm 10% VAT </Typography>
            </Box>
            <Box className='grid sm:grid-cols-5 gap-x-6 gap-y-6 mb-10 text-center'>
              <Card className='h-fit my-3 p-3 rounded-xl shadow-lg'>
                <Box className="">
                  <Divider className="border-t-4 bg-yellow-600" />
                  <Typography className="py-5 uppercase text-[1.25rem] font-bold text-sky-900" > gói server 01</Typography>
                </Box>
                <Box>
                  <div><TextField disabled size="small" className="py-1" defaultValue="2 vCPU" /></div>
                  <div><TextField disabled size="small" className="py-1" defaultValue="1 GB RAM" /></div>
                  <div><TextField disabled size="small" className="py-1" defaultValue="20 GB SSD" /></div>
                  <div><TextField disabled size="small" className="py-1" defaultValue="1 IPv4" /></div>
                  <div><TextField disabled size="small" className="py-1" defaultValue="200 Mbps Network" /></div>

                  <Typography className="uppercase text-[1.5rem] font-bold py-5 text-yellow-600" > 260.000 vnd</Typography>
                  <Divider className="border-t-4 bg-yellow-600" />
                </Box>
              </Card>

              <Card className='h-fit my-3 p-3 rounded-xl shadow-lg'>
                <Box className="">
                  <Divider className="border-t-4 bg-yellow-600" />
                  <Typography className="py-5 uppercase text-[1.25rem] font-bold text-sky-900" > gói server 02</Typography>
                </Box>
                <Box>
                  <div><TextField disabled size="small" className="py-1" defaultValue="3 vCPU" /></div>
                  <div><TextField disabled size="small" className="py-1" defaultValue="2 GB RAM" /></div>
                  <div><TextField disabled size="small" className="py-1" defaultValue="40 GB SSD" /></div>
                  <div><TextField disabled size="small" className="py-1" defaultValue="1 IPv4" /></div>
                  <div><TextField disabled size="small" className="py-1" defaultValue="200 Mbps Network" /></div>
                  <Typography className="uppercase text-[1.5rem] font-bold py-5 text-yellow-600" > 470.000 vnd</Typography>
                  <Divider className="border-t-4 bg-yellow-600" />
                </Box>
              </Card>

              <Card className='h-fit my-3 p-3 rounded-xl shadow-lg'>
                <Box className="">
                  <Divider className="border-t-4 bg-yellow-600" />
                  <Typography className="py-5 uppercase text-[1.25rem] font-bold text-sky-900" > gói server 03</Typography>
                </Box>
                <Box>
                  <div><TextField disabled size="small" className="py-1" defaultValue="4 vCPU" /></div>
                  <div><TextField disabled size="small" className="py-1" defaultValue="3 GB RAM" /></div>
                  <div><TextField disabled size="small" className="py-1" defaultValue="60 GB SSD" /></div>
                  <div><TextField disabled size="small" className="py-1" defaultValue="1 IPv4" /></div>
                  <div><TextField disabled size="small" className="py-1" defaultValue="200 Mbps Network" /></div>
                  <Typography className="uppercase text-[1.5rem]  font-bold py-5 text-yellow-600" > 780.000 vnd</Typography>
                  <Divider className="border-t-4 bg-yellow-600" />
                </Box>
              </Card>

              <Card className='h-fit my-3 p-3 rounded-xl shadow-lg'>
                <Box className="">
                  <Divider className="border-t-4 bg-yellow-600" />
                  <Typography className="py-5 uppercase text-[1.25rem] font-bold text-sky-900" > gói server 04</Typography>
                </Box>
                <Box>
                  <div><TextField disabled size="small" className="py-1" defaultValue="5 vCPU" /></div>
                  <div><TextField disabled size="small" className="py-1" defaultValue="4 GB RAM" /></div>
                  <div><TextField disabled size="small" className="py-1" defaultValue="80 GB SSD" /></div>
                  <div><TextField disabled size="small" className="py-1" defaultValue="1 IPv4" /></div>
                  <div><TextField disabled size="small" className="py-1" defaultValue="200 Mbps Network" /></div>
                  <Typography className="uppercase text-[1.5rem] font-bold py-5 text-yellow-600" > 1.090.000 vnd</Typography>
                  <Divider className="border-t-4 bg-yellow-600" />
                </Box>
              </Card>

              <Card className='h-fit my-3 p-3 rounded-xl shadow-lg'>
                <Box className="">
                  <Divider className="border-t-4 bg-yellow-600" />
                  <Typography className="py-5 uppercase text-[1.25rem] font-bold text-sky-900" > gói server 05</Typography>
                </Box>
                <Box>
                  <div><TextField disabled size="small" className="py-1" defaultValue="6 vCPU" /></div>
                  <div><TextField disabled size="small" className="py-1" defaultValue="5 GB RAM" /></div>
                  <div><TextField disabled size="small" className="py-1" defaultValue="100 GB SSD" /></div>
                  <div><TextField disabled size="small" className="py-1" defaultValue="1 IPv4" /></div>
                  <div><TextField disabled size="small" className="py-1" defaultValue="200 Mbps Network" /></div>
                  <Typography className="uppercase text-[1.5rem] font-bold py-5 text-yellow-600" > 1.350.000 vnd</Typography>
                  <Divider className="border-t-4 bg-yellow-600" />
                </Box>
              </Card>
            </Box>
          </Box>

          <Box className=" text-sky-900">
            <Typography className="text-[2rem] font-light text-center py-5"> Bảng giá tài nguyên bổ sung </Typography>

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

        <Box>
          <Box pb={5}>
            <Typography className="text-[2rem] text-sky-900 font-light text-center py-5"> Câu hỏi thường gặp </Typography>
            <Grid container className=" text-sky-900">
              <Grid item xs={12} md={6} lg={6} xl={6} className="flex flex-col items-center justify-center">
                <Typography className="w-3/4 text-xl font-semibold">Tôi muốn dùng thử Cloud Server trước khi sử dụng chính thức?</Typography>
                <Typography className="w-3/4 text-justify py-3">
                  EcoCloud luôn có chương trình dùng thử miễn phí để khách hàng có thể trải nghiệm tốt nhất.
                  Hãy liên hệ với chúng tôi qua hotline +84 76 9999 967 hoặc email cskh@turbo.vn để được hỗ trợ khởi tạo tài khoản.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6} lg={6} xl={6} className="flex flex-col items-center justify-center">
                <Typography className="w-3/4 text-xl font-semibold">Khác biệt giữa VPS với Cloud Server là gì?</Typography>
                <Typography className="w-3/4 text-justify py-3">
                  Nói đơn giản, cả hai đều là máy chủ ảo hóa. Với Cloud Server là máy chủ ảo nằm trong cụm hệ thống được cấu
                  thành từ nhiều máy chủ và storage, network mở rộng không giới hạn; so với VPS là những máy chủ đơn lẻ hạn chế tài nguyên.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6} lg={6} xl={6} className="flex flex-col items-center justify-center">
                <Typography className="w-3/4 text-xl font-semibold">Có hỗ trợ migrate sang dịch vụ của EcoCloud?</Typography>
                <Typography className="w-3/4 text-justify py-3">
                  Chúng tôi luôn hỗ trợ khách hàng chuyển đổi sang dịch vụ Cloud Server của EcoCloud. Chúng tôi có thể giúp quý khách hàng chuyển đổi từ Dedicated Server sang Cloud Server;
                  chuyển từ ảo hóa VMWare hoặc Hyper-V dễ dàng và không gây downtime.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6} lg={6} xl={6} className="flex flex-col items-center justify-center">
                <Typography className="w-3/4 text-xl font-semibold">Tôi có thể tự cài đặt HĐH riêng cho Cloud Server của tôi?</Typography>
                <Typography className="w-3/4 text-justify py-3">
                  Khách hàng hoàn toàn có thể cài đặt HĐH riêng nếu nó không nằm trong hàng trăm templates trên giao diện quản lý.
                  Nếu có gặp khó khăn trong quá trình cài đặt, hãy liên hệ với đội kỹ thuật để được hỗ trợ nhanh chóng.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6} lg={6} xl={6} className="flex flex-col items-center justify-center">
                <Typography className="w-3/4 text-xl font-semibold">Cloud Server của EcoCloud có hỗ trợ Windows Server?</Typography>
                <Typography className="w-3/4 text-justify py-3">
                  EcoCloud có hàng trăm templates hệ điều hành được chuẩn bị sẵn, và trong đó có nhiều mẫu Windows Server như Win Server 2012, 2016, 2019
                  với nhiều phiên bản từ Standard đến DataCenter, giúp quý khách nhanh chóng triển khai.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6} lg={6} xl={6} className="flex flex-col items-center justify-center">
                <Typography className="w-3/4 text-xl font-semibold">Nhà cung cấp cũ không hợp tác chuyển đổi máy chủ?</Typography>
                <Typography className="w-3/4 text-justify py-3">
                  Chúng tôi rất lấy làm tiếc vì sự không hợp tác từ nhà cung cấp cũ. Chúng tôi có những công nghệ khác biệt, giúp khách hàng chuyển đổi hệ thống mà không cần thao tác từ tầng vật lý.
                  Hãy liên hệ với chúng tôi để được tư vấn hỗ trợ.
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container >
    </>
  )
}