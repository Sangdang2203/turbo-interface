"use client";

import cloudGPU_01 from "../../../images/cloudServer/cloudGPU_01.png"
import cloudGPU_02 from "../../../images/cloudServer/cloudGPU_02.png"
import cloudGPU_03 from "../../../images/cloudServer/cloudGPU_03.png"
import cloudGPU from "../../../images/cloudServer/cloudGPU.png"
import cloudServer_icon_01 from "../../../images/cloudServer/cloudServer_icon_01.png"
import cloudServer_icon_02 from "../../../images/cloudServer/cloudServer_icon_02.png"
import cloudServer_icon_03 from "../../../images/cloudServer/cloudServer_icon_03.png"
import cloudServer_icon_04 from "../../../images/cloudServer/cloudServer_icon_04.png"
import { Box, Card, Divider, FormControlLabel, Grid, TextField, Typography, Container } from "@mui/material";
import Switch, { SwitchProps } from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import Image from "next/image";

export default function CloudGPU() {
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
          <Typography className="text-[2.5rem] font-semibold text-sky-900"> Cloud GPU Server máy chủ GPU cho <br /> Deep Learning | Machine Learning | Computer Vision </Typography>
          <Typography> Khởi tạo và sử dụng Cloud GPU Server chỉ trong 45 giây! </Typography>
        </Box>

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
              <Image src={cloudGPU} className="w-full h-auto" alt="cloudGPU" />
            </Grid>

            <Grid item xs={12} md={7} className=" text-sky-900">
              <Grid pl={8}>
                <Box sx={{ display: "flex", alignItems: "center", py: 1 }}>
                  <Image src={cloudServer_icon_01} className="w-16 h-auto mr-4" alt="" />
                  <Box>
                    <Typography className="text-[1.3rem] font-semibold pt-5">99.99% Uptime</Typography>
                    <Typography className="w-3/4 text-justify">
                      Cloud GPU luôn hoạt động với cam kết chất lượng dịch vụ 99.99% uptime, đáp ứng nhu cầu luôn kết nối.
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", py: 1 }}>
                  <Image src={cloudServer_icon_02} className="w-16 h-auto mr-4" alt="" />
                  <Box>
                    <Typography className="text-[1.3rem] font-semibold">GPU siêu tốc độ</Typography>
                    <Typography className="w-3/4 text-justify">
                      Dòng GPU Nvidia với hiệu suất CUDA Cores, Tensor Cores siêu cao giúp giải nhanh các thuật toán Deep Learning phức tạp.
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", py: 1 }}>
                  <Image src={cloudServer_icon_03} className="w-16 h-auto mr-4" alt="" />
                  <Box>
                    <Typography className="text-[1.3rem] font-semibold">An toàn dữ liệu</Typography>
                    <Typography className="w-3/4 text-justify">
                      Máy chủ Cloud GPU hoạt động trên nền Storage SDS với hiệu năng IOPS cao giúp xử lý dữ liệu nhanh chóng, an toàn và bảo mật.
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", py: 1 }}>
                  <Image src={cloudServer_icon_04} className="w-16 h-auto mr-4" alt="" />
                  <Box>
                    <Typography className="text-[1.3rem] font-semibold">Băng thông rộng</Typography>
                    <Typography className="w-3/4 text-justify">
                      Kết nối mạng tốc độ cao đến 10+ Gbps đáp ứng nhu cầu xử lý luồng Video Streaming lớn từ các Camera CCTV hoặc thiết bị Mobile, IoT
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
              <Typography className="text-[2rem] font-semibold text-sky-900"> Bảng giá dịch vụ Cloud Server </Typography>
              <Typography> * Bảng giá chưa bao gồm 10% VAT </Typography>
            </Box>
            <Box className='grid sm:grid-cols-3 gap-x-6 gap-y-6 mb-10 text-center'>
              <Card className='h-fit my-3 p-3 rounded-xl shadow-lg'>
                <Box className="">
                  <Divider className="border-t-4 bg-yellow-600" />
                  <Typography className="py-5 uppercase text-[2rem] font-bold text-sky-900" > gói gpu 01</Typography>
                </Box>
                <Box>
                  <div><TextField disabled size="small" className="py-1" defaultValue="8 vCPU" /></div>
                  <div><TextField disabled size="small" className="py-1" defaultValue="16 GB RAM" /></div>
                  <div><TextField disabled size="small" className="py-1" defaultValue="240 GB SSD" /></div>
                  <div><TextField disabled size="small" className="py-1" defaultValue="1 IPv4" /></div>
                  <div><TextField disabled size="small" className="py-1" defaultValue="200 Mbps Network" /></div>
                  <div><TextField disabled size="small" className="py-1" defaultValue="1 Dedicated RTX 2080Ti" /></div>

                  <Typography className="uppercase text-[1.5rem] font-bold py-5 text-yellow-600" > 5.300.000 vnd</Typography>
                  <Divider className="border-t-4 bg-yellow-600" />
                </Box>
              </Card>

              <Card className='h-fit my-3 p-3 rounded-xl shadow-lg'>
                <Box className="">
                  <Divider className="border-t-4 bg-yellow-600" />
                  <Typography className="py-5 uppercase text-[2rem] font-bold text-sky-900" > gói gpu 02</Typography>
                </Box>
                <Box>
                  <div><TextField disabled size="small" className="py-1" defaultValue="12 vCPU" /></div>
                  <div><TextField disabled size="small" className="py-1" defaultValue="32 GB RAM" /></div>
                  <div><TextField disabled size="small" className="py-1" defaultValue="480 GB SSD" /></div>
                  <div><TextField disabled size="small" className="py-1" defaultValue="1 IPv4" /></div>
                  <div><TextField disabled size="small" className="py-1" defaultValue="200 Mbps Network" /></div>
                  <div><TextField disabled size="small" className="py-1" defaultValue="1 Dedicated RTX 2080Ti" /></div>
                  <Typography className="uppercase text-[1.5rem] font-bold py-5 text-yellow-600" > 7.600.000 vnd</Typography>
                  <Divider className="border-t-4 bg-yellow-600" />
                </Box>
              </Card>

              <Card className='h-fit my-3 p-3 rounded-xl shadow-lg'>
                <Box className="">
                  <Divider className="border-t-4 bg-yellow-600" />
                  <Typography className="py-5 uppercase text-[2rem] font-bold text-sky-900" > gói gpu 03</Typography>
                </Box>
                <Box>
                  <div><TextField disabled size="small" className="py-1" defaultValue="16 vCPU" /></div>
                  <div><TextField disabled size="small" className="py-1" defaultValue="64 GB RAM" /></div>
                  <div><TextField disabled size="small" className="py-1" defaultValue="480 GB SSD" /></div>
                  <div><TextField disabled size="small" className="py-1" defaultValue="1 IPv4" /></div>
                  <div><TextField disabled size="small" className="py-1" defaultValue="200 Mbps Network" /></div>
                  <div><TextField disabled size="small" className="py-1" defaultValue="1 Dedicated RTX 2080Ti" /></div>
                  <Typography className="uppercase text-[1.5rem]  font-bold py-5 text-yellow-600" > 9.800.000 vnd</Typography>
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

        <Box>
          <Box pb={5}>

            <Typography className="text-[2rem] text-sky-900 font-semibold text-center py-5"> Câu hỏi thường gặp </Typography>

            <Grid container className=" text-sky-900">
              <Grid item xs={12} md={6} lg={6} xl={6} className="flex flex-col items-center justify-center">
                <Typography className="w-3/4 text-lg font-semibold">Tôi muốn dùng thử dịch vụ Cloud GPU Server?</Typography>
                <Typography className="w-3/4 text-justify py-3">
                  EcoCloud luôn có chương trình dùng thử miễn phí để khách hàng có thể trải nghiệm tốt nhất.
                  Hãy liên hệ với chúng tôi qua hotline 076 9999 967 hoặc email cskh@turbo.vn để được hỗ trợ.
                </Typography>
              </Grid>

              <Grid item xs={12} md={6} lg={6} xl={6} className="flex flex-col items-center justify-center">
                <Typography className="w-3/4 text-lg font-semibold">Khác biệt giữa GPU GTX 1080TI và RTX 2080TI là gì?</Typography>
                <Typography className="w-3/4 text-justify py-3">
                  Ngoài khác biệt về cấu trúc GPU cũng như giá thành, dòng GPU 2080TI đạt hiệu năng cao hơn hẳn so với 1080TI
                  trong xử lý các Deep Learning và Machine Learning.
                </Typography>
              </Grid>

              <Grid item xs={12} md={6} lg={6} xl={6} className="flex flex-col items-center justify-center">
                <Typography className="w-3/4 text-lg font-semibold">Cloud GPU Server có thể sử dụng cho những framework nào?</Typography>
                <Typography className="w-3/4 text-justify py-3">
                  Khi khởi tạo Cloud GPU Server, bạn có thể cài đặt thêm các framework TensorFlow, MXNET, Pytorch, Caffe2… theo nhu cầu xử lý thuật toán.
                  Bạn cũng có thể cài đặt thêm FFMpeg để xử lý luồng stream từ Camera, Mobile…
                </Typography>
              </Grid>

              <Grid item xs={12} md={6} lg={6} xl={6} className="flex flex-col items-center justify-center">
                <Typography className="w-3/4 text-lg font-semibold">Tôi có thể cài đặt HĐH riêng cho Cloud GPU Server?</Typography>
                <Typography className="w-3/4 text-justify py-3">
                  EcoCloud hiện cung cấp hai HĐH cho Cloud GPU Server là Windows và Ubuntu. Nếu có gặp khó khăn trong quá trình cài đặt thư viện,
                  hãy liên hệ với đội kỹ thuật để được hỗ trợ nhanh chóng.
                </Typography>
              </Grid>

              <Grid item xs={12} md={6} lg={6} xl={6} className="flex flex-col items-center justify-center">
                <Typography className="w-3/4 text-lg font-semibold">Cloud GPU Server của EcoCloud có hỗ trợ Windows Server?</Typography>
                <Typography className="w-3/4 text-justify py-3">
                  Trong các phiên bản Windows Cloud GPU, hiện EcoCloud có cung cấp GPU hoạt động trên Windows Server các phiên bản 2012, 2016, 2019 và cả Windows 10.
                </Typography>
              </Grid>

              <Grid item xs={12} md={6} lg={6} xl={6} className="flex flex-col items-center justify-center">
                <Typography className="w-3/4 text-lg font-semibold">Cloud GPU Server có thể dùng trong những trường hợp nào?</Typography>
                <Typography className="w-3/4 text-justify py-3">
                  Có rất nhiều trường hợp để sử dụng Cloud GPU Server. Bạn có thể sử dụng cho Machine Learning và AI, bạn cũng có thể sử dụng cho mục đích xử lý hình ảnh,
                  video và thị giác máy tính. Hoặc dùng cho Big Data với Hadoop, Apache Spark…
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  )
}