"use client";

import React from "react";
import Image from "next/image";
import { styled } from '@mui/material/styles';
import Switch, { SwitchProps } from '@mui/material/Switch';
import { Box, Button, Card, CardActions, CardContent, Chip, Container, Divider, FormControlLabel, FormHelperText, Grid, Link, Typography } from "@mui/material";
import { PublicRounded, ReadMoreRounded } from "@mui/icons-material";
import logoTurbo from "../../../../public/images/logoTurbo.png";
import cloudServer from "../../../../public/images/cloudServer.png";
import cloudCamera from "../../../../public/images/cloudCamera.png";
import Backup from "../../../../public/images/Backup.png";
import ScalablePrivateCloud from "../../../../public/images/ScalablePrivateCloud.png";
import CloudCameraDiagram from "../../../../public/images/CloudCameraDiagram.jpg";
import CloudBackupRecovery from "../../../../public/images/CloudBackupRecovery.png";
import UnifiedCloudStorage from "../../../../public/images/UnifiedCloudStorage.png";
import opennebula_cloud_dash from "../../../../public/images/opennebula_cloud_dash.png";

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

const HomePage = () => {

  return (
    <Box>
      <Box className="theme -mt-[10vh] text-white">
        <Box textAlign="center" my={5} className="text-white">
          <Typography id="typing" className="text-[2.5rem] font-semibold">Ứng dụng | Dịch vụ | Giải pháp</Typography>
          <Typography className="text-[2rem] font-extralight">điện toán đám mây chất lượng hàng đầu.</Typography>
          <Typography className="text-center text-[1.75rem] font-light w-2/3 mx-auto my-5">
            Công ty Turbo Solutions chung tay cùng quý doanh nghiệp thực hiện chuyển đổi số bằng cách tích hợp các công nghệ thông minh 4.0, cùng đạt mục tiêu thắng lợi.
          </Typography>
        </Box>

        <Container className="container grid lg:grid-cols-4 gap-x-6 gap-y-6 mt-10">
          <Card className="relative px-1 rounded-md cursor-pointer shadow-2xl">
            <Image src={ScalablePrivateCloud} className="w-full h-auto rounded-md mt-3" alt="ScalablePrivateCloud" />
            <CardContent>
              <Box>
                <Typography className="text-lg font-leading-relaxed text-justify text-blue-500">Scalable Private Cloud</Typography>
                <FormHelperText>Hạ tầng điện toán đám mây</FormHelperText>
                <Typography className="font-light mt-3">
                  Với công nghệ siêu hội tụ (HCI) và phần mềm định hướng (SDX) mang lại hạ tầng đám mây siêu hiệu năng, siêu ổn định, là nền tảng vững chắc cho phát triển các ứng dụng.
                </Typography>
              </Box>
            </CardContent>
          </Card>

          <Card className="relative px-1 rounded-md cursor-pointer shadow-2xl ">
            <Image src={CloudCameraDiagram} className="w-full h-auto rounded-md mt-3" alt="CloudCameraDiagram" />
            <CardContent>
              <Box>
                <Typography className="text-lg font-normal text-orange-400">Smart Cloud Camera</Typography>
                <FormHelperText>Giải pháp Cloud Camera tích hợp A.I</FormHelperText>
                <Typography className="font-extralight mt-3">
                  Nền tảng Cloud quản lý và lưu trữ Video Camera, tích hợp trí thông tin nhân tạo (AI) dùng nhận dạng vật thể, nhận dạng khuôn mặt, nhận dạng biển số, kiểm soát an ninh, giao thông…
                </Typography>
              </Box>
            </CardContent>
          </Card>

          <Card className="relative px-1 rounded-md cursor-pointer shadow-2xl ">
            <Image src={CloudBackupRecovery} className="w-full h-auto rounded-md mt-3" alt="CloudBackupRecovery" />
            <CardContent>
              <Box>
                <Typography className="text-lg font-normal text-green-600">Cloud Backup & Recovery</Typography>
                <FormHelperText>Sao lưu an toàn dữ liệu trên đám mây</FormHelperText>
                <Typography className="font-extralight mt-3">
                  Nền tảng sao lưu, quản lý, khôi phục dữ liệu đám mây hàng đầu cho máy chủ vật lý và máy chủ ảo (Hyper-V | VMWare); giúp nhà quản lý an tâm, thúc đẩy phát triển doanh nghiệp.
                </Typography>
              </Box>
            </CardContent>
          </Card>

          <Card className="relative px-1 rounded-md cursor-pointer shadow-2xl ">
            <Image src={UnifiedCloudStorage} className="w-full h-auto rounded-md mt-3" alt="UnifiedCloudStorage" />
            <CardContent>
              <Box>
                <Typography className="text-lg font-normal text-blue-900">Unified Cloud Storage</Typography>
                <FormHelperText>Lưu trữ dữ liệu đám mây</FormHelperText>
                <Typography className="font-extralight mt-3">
                  Nền tảng lưu trữ đám mây hợp nhất (file-based, block và object&nbsp;storage), mở rộng không giới hạn. Kết nối đơn giản và nhanh chóng, dễ dàng chia sẻ với băng thông cao.
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Container>
      </Box>


      <Box sx={{ position: "relative", textAlign: "center", my: 10 }} >
        <Image src={opennebula_cloud_dash} className="w-[80%] h-auto mx-auto rounded-lg" alt="opennebula_cloud_dash" />
        <Box width="100%" sx={{ position: "absolute", bottom: "4px", marginX: "auto", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
          <Button href="/contact" variant="contained" className="btn-astro rounded-full hover:duration-700 hover:opacity-80" >Kết nối ngay với chúng tôi</Button>
        </Box>
      </Box>

      <Box my={10} sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
        <Typography className="py-3 px-5 bg-sky-50 text-sky-700 uppercase w-fit rounded-full">dịch vụ điện toán đám mây</Typography>
        <Typography className="text-[1.75rem] font-light w-2/3 text-center mx-auto">
          Công ty Turbo Solutions cung cấp dịch vụ điện toán đám mây đa dạng và các ứng dụng số phù hợp nhiều lĩnh vực.
        </Typography>
      </Box>

      <Container className="container grid sm:grid-cols-3 gap-x-6 gap-y-6 mb-10">
        <Card className="relative rounded-xl hover:shadow-lg cursor-pointer">
          <CardContent className="mb-10">
            <Box className="flex items-start">
              <Image src={cloudServer} className="w-28 h-28" alt="cloudServer" />
              <Box>
                <Typography className="text-[1.5rem]">Cloud Server</Typography>
                <Typography className="font-extralight">Cụm máy chủ Cloud với Firewall cùng mạng nội bộ riêng biệt, trở thành trung tâm dữ liệu ảo cho doanh nghiệp thực hiện chuyển đổi số.</Typography>
              </Box>
            </Box>
          </CardContent>
          <CardActions className="absolute bottom-1 left-1">
            <Button href="https://ecocloud.vn/bang-gia-cloud-server/" className="hover:opacity-80" variant="contained" size="small"> Tìm hiểu thêm </Button>
          </CardActions>
        </Card>

        <Card className="relative rounded-xl hover:shadow-lg cursor-pointer">
          <CardContent className="mb-10">
            <Box className="flex items-start">
              <Image src={Backup} className="w-32 h-32" alt="backupDR" />
              <Box>
                <Typography className="text-[1.5rem]">Backup & DR Site</Typography>
                <Typography className="font-extralight">Sao lưu và khôi phục dữ liệu trên Cloud. Thực hiện Disaster Recovery Site với chi phí thấp.</Typography>
              </Box>
            </Box>
          </CardContent>
          <CardActions className="absolute bottom-1 left-1">
            <Button href="https://baas.ecocloud.vn/" className="hover:opacity-80" variant="contained" size="small"> Tìm hiểu thêm </Button>
          </CardActions>
        </Card>

        <Card className="relative rounded-xl hover:shadow-lg cursor-pointer">
          <CardContent className="mb-10">
            <Box className="flex items-start">
              <Image src={cloudCamera} className="w-32 h-32" alt="cloudCamera" />
              <Box>
                <Typography className="text-[1.5rem]">Cloud Camera</Typography>
                <Typography className="font-extralight">Quản lý và lưu trữ Video Camera từ nhiều chi nhánh trên nền tảng đám mây</Typography>
              </Box>
            </Box>
          </CardContent>
          <CardActions className="absolute bottom-1 left-1">
            <Button href="/smart-cloud-camera" className="hover:opacity-80" variant="contained" size="small"> Tìm hiểu thêm </Button>
          </CardActions>
        </Card>
      </Container>

      <Box className="text-center my-10">
        <Typography className="text-[2.5rem]">Why clients choose us</Typography>
        <Typography>Because it’s good to work with good people!</Typography>
      </Box>
      <Container className='grid sm:grid-cols-3 gap-x-6 gap-y-6 mb-10'>
        <Box>
          <Box className='h-[200px] my-3 px-3 rounded-xl shadow-2xl hover:duration-500'>
            <Box className='flex justify-start items-center'>
              <Link href="/"><Image src={logoTurbo} className="w-28 h-10 mr-2" title="Trang chủ" alt="logo_turbo_solutions" /></Link>
              <Typography className='py-8'>Turbo AI Vision</Typography>
            </Box>
            <Divider />
            <FormControlLabel className="py-3"
              control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
              label="Chất lượng dịch vụ luôn được đảm bảo"
            />
          </Box>
          <Typography className='text-xl font-semibold py-5'>Đáng tin cậy & Chuyên nghiệp</Typography>
          <Typography className='leading-normal text-justify'>
            Turbo là một trong những công ty AI Vision hàng đầu tại Việt Nam.
            Bằng cách cộng tác với chúng tôi, bạn có thể tiết kiệm thời gian để tập trung vào việc lập kế hoạch và
            điều hành hoạt động kinh doanh cốt lõi của mình. Chúng tôi mang phong cách chuyên nghiệp vào dự án.
          </Typography>
        </Box>

        <Box>
          <Box className='h-[200px] my-3 px-3 rounded-xl shadow-2xl hover:duration-500'>
            <Box className='flex items-center py-4'>
              <Typography className='py-4'>Key success</Typography>
              <Chip className="mx-1 bg-sky-200 text-sky-500 font-semibold" label="Flexible solutions" />
              <Chip className="mx-1 bg-sky-200 text-sky-500 font-semibold" label="Save time" />
            </Box>
            <Divider />
            <Typography className="py-3">Theo dõi hàng ngày</Typography>
          </Box>
          <Typography className='text-xl font-semibold py-5'>Tính linh hoạt và minh bạch</Typography>
          <Typography className='leading-relaxed text-justify'>
            Điểm mạnh của chúng tôi nằm ở kiến ​​thức chuyên môn vững chắc về nhiều loại công nghệ và tính linh hoạt của nhóm
            để phù hợp với nhu cầu của khách hàng. Mỗi bước công việc của chúng tôi luôn được minh bạch với khách hàng từ đầu
            đến cuối.
          </Typography>
        </Box>

        <Box>
          <Box className='h-[200px] my-3 px-3 rounded-xl shadow-2xl hover:duration-500'>
            <Box className='flex items-center'>
              <PublicRounded fontSize="large" />
              <Typography className='py-8 px-2'>Quy tắc kinh doanh quốc tế</Typography>
            </Box>
            <Divider />
            <Typography className="py-3">Đảm bảo chi phí và hiệu quả</Typography>
          </Box>
          <Typography className='text-xl font-semibold py-5'>Tuân thủ & Cam kết</Typography>
          <Typography className='leading-relaxed text-justify'>
            Chúng tôi tuân theo tất cả các thủ tục pháp lý khi giao dịch với khách hàng của mình để đảm bảo rằng không ai
            phải đối mặt với bất kỳ vấn đề pháp lý nào. Khách hàng chọn chúng tôi biết rằng sản phẩm cuối cùng của họ sẽ
            là những sản phẩm có hiệu suất cao, đáng kinh ngạc.
          </Typography>
        </Box>
      </Container>

      <Box className='__theme min-h-[500px]'>
        <Box>
          <Typography className="text-[2.5rem] font-semibold text-center py-5">What our clients say</Typography>
        </Box>
        <Box>
          <Grid container className="text-center">
            <Grid item xs={12} md={6}>
              <Typography>Đăng ký trải nghiệm dịch vụ</Typography>
              <Typography>để nhận thêm thông tin về các dịch vụ của EcoCloud</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography>Đăng ký trải nghiệm dịch vụ</Typography>
              <Typography>để nhận thêm thông tin về các dịch vụ của EcoCloud</Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>



    </Box >
  )
}

export default HomePage;