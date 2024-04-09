
import React from "react";
import Image from "next/image";
import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, FormHelperText, Grid, Link, Typography } from "@mui/material";
import { ReadMoreRounded } from "@mui/icons-material";
import cloudServer from "../../../../public/images/cloudServer.png";
import cloudCamera from "../../../../public/images/cloudCamera.png";
import backupDR from "../../../../public/images/backupDR.png";
import ScalablePrivateClound from "../../../../public/images/ScalablePrivateCloud.png";
import CloudCameraDiagram from "../../../../public/images/CloudCameraDiagram.jpg";
import CloudBackupRecovery from "../../../../public/images/CloudBackupRecovery.png";
import UnifiedCloudStorage from "../../../../public/images/UnifiedCloudStorage.png";

export const metadata = () => {
  return {
    title: "About Us"
  }
}
const AboutPage = () => {
  return (
    <Container >
      <Box textAlign="center" my={10}>
        <Typography className="text-[2.5rem]">Ứng dụng | Dịch vụ | Giải pháp</Typography>
        <Typography className="text-[2rem] font-extralight">điện toán đám mây chất lượng hàng đầu.</Typography>
      </Box>

      <Box textAlign="center">
        <Typography className="text-center text-[1.75rem] font-light w-2/3 mx-auto">
          Công ty Turbo Solutions chung tay cùng quý doanh nghiệp thực hiện chuyển đổi số bằng cách tích hợp các công nghệ thông minh 4.0, cùng đạt mục tiêu thắng lợi.
        </Typography>
        <Button variant="contained" className="uppercase p-4 my-10 shadow-lg hover:border border-blue-500" >Kết nối ngay với chúng tôi</Button>
      </Box>

      <Box className="container grid sm:grid-cols-4 gap-x-6 gap-y-6">
        <Card className="relative px-1 rounded-md hover:shadow-lg cursor-pointer hover:scale-105 duration-700">
          <Image src={ScalablePrivateClound} className="w-full h-auto mt-3" alt="ScalablePrivateClound" />
          <CardContent>
            <Box>
              <Typography className="text-[1.15rem] font-normal text-blue-500">Scalable Private Cloud</Typography>
              <FormHelperText>Hạ tầng điện toán đám mây</FormHelperText>
              <Typography className="font-extralight mt-3">
                Với công nghệ siêu hội tụ (HCI) và phần mềm định hướng (SDX) mang lại hạ tầng đám mây siêu hiệu năng, siêu ổn định, là nền tảng vững chắc cho phát triển các ứng dụng.
              </Typography>
            </Box>
          </CardContent>
        </Card>

        <Card className="relative px-1 rounded-md hover:shadow-lg cursor-pointer hover:scale-105 duration-700">
          <Image src={CloudCameraDiagram} className="w-full h-auto mt-3" alt="CloudCameraDiagram" />
          <CardContent>
            <Box>
              <Typography className="text-[1.15rem] font-normal text-orange-400">Smart Cloud Camera</Typography>
              <FormHelperText>Giải pháp Cloud Camera tích hợp A.I</FormHelperText>
              <Typography className="font-extralight mt-3">
                Nền tảng Cloud quản lý và lưu trữ Video Camera, tích hợp trí thông tin nhân tạo (AI) dùng nhận dạng vật thể, nhận dạng khuôn mặt, nhận dạng biển số, kiểm soát an ninh, giao thông…
              </Typography>
            </Box>
          </CardContent>
        </Card>

        <Card className="relative px-1 rounded-md hover:shadow-lg cursor-pointer hover:scale-105 duration-700">
          <Image src={CloudBackupRecovery} className="w-full h-auto mt-3" alt="CloudBackupRecovery" />
          <CardContent>
            <Box>
              <Typography className="text-[1.15rem] font-normal text-green-600">Cloud Backup & Recovery</Typography>
              <FormHelperText>Sao lưu an toàn dữ liệu trên đám mây</FormHelperText>
              <Typography className="font-extralight mt-3">
                Nền tảng sao lưu, quản lý, khôi phục dữ liệu đám mây hàng đầu cho máy chủ vật lý và máy chủ ảo (Hyper-V | VMWare); giúp nhà quản lý an tâm, thúc đẩy phát triển doanh nghiệp.
              </Typography>
            </Box>
          </CardContent>
        </Card>

        <Card className="relative px-1 rounded-md hover:shadow-lg cursor-pointer hover:scale-105 duration-700">
          <Image src={UnifiedCloudStorage} className="w-full h-auto mt-3" alt="UnifiedCloudStorage" />
          <CardContent>
            <Box>
              <Typography className="text-[1.15rem] font-normal text-blue-900">Unified Cloud Storage</Typography>
              <FormHelperText>Lưu trữ dữ liệu đám mây</FormHelperText>
              <Typography className="font-extralight mt-3">
                Nền tảng lưu trữ đám mây hợp nhất (file-based, block và object&nbsp;storage), mở rộng không giới hạn. Kết nối đơn giản và nhanh chóng, dễ dàng chia sẻ với băng thông cao.
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>


      <Typography className="text-[1.75rem] font-light w-2/3 text-center mx-auto my-10">
        Công ty Turbo Solutions cung cấp dịch vụ điện toán đám mây đa dạng và các ứng dụng số phù hợp nhiều lĩnh vực.
      </Typography>
      <Box className="container grid sm:grid-cols-3 gap-x-6 gap-y-6">
        <Card className="relative px-1 rounded-md hover:shadow-lg cursor-pointer">
          <Image src={cloudServer} className="w-full h-auto" alt="cloudServer" />
          <CardContent>
            <Box className="mb-16">
              <Typography className="text-[2rem] font-light">Cloud Server</Typography>
              <Typography className="font-extralight">Cụm máy chủ Cloud với Firewall cùng mạng nội bộ riêng biệt, trở thành trung tâm dữ liệu ảo cho doanh nghiệp thực hiện chuyển đổi số.</Typography>
            </Box>
          </CardContent>
          <CardActions className="absolute bottom-1 left-1">
            <Button className="hover:border-blue-400 p-3  border" variant="outlined" size="small" endIcon={<ReadMoreRounded />}>Tìm hiểu thêm </Button>
          </CardActions>
        </Card>

        <Card className="relative px-1 rounded-md hover:shadow-lg cursor-pointer">
          <Image src={backupDR} className="w-full h-auto" alt="backupDR" />
          <CardContent>
            <Box className="mb-16">
              <Typography className="text-[2rem] font-light">Backup & DR Site</Typography>
              <Typography className="font-extralight">Sao lưu và khôi phục dữ liệu trên Cloud. Thực hiện Disaster Recovery Site với chi phí thấp.</Typography>
            </Box>
          </CardContent>
          <CardActions className="absolute bottom-1 left-1">
            <Button className="hover:border-blue-400 p-3  border" variant="outlined" size="small" endIcon={<ReadMoreRounded />}>Tìm hiểu thêm </Button>
          </CardActions>
        </Card>

        <Card className="relative px-1 rounded-md hover:shadow-lg cursor-pointer">
          <Image src={cloudCamera} className="w-full h-auto" alt="cloudCamera" />
          <CardContent>
            <Box className="mb-16">
              <Typography className="text-[2rem] font-light">Cloud Camera</Typography>
              <Typography className="font-extralight">Quản lý và lưu trữ Video Camera từ nhiều chi nhánh trên nền tảng đám mây</Typography>
            </Box>
          </CardContent>
          <CardActions className="absolute bottom-1 left-1">
            <Button className="hover:border-blue-400 p-3  border" variant="outlined" size="small" endIcon={<ReadMoreRounded />}>Tìm hiểu thêm </Button>
          </CardActions>
        </Card>
      </Box>



    </Container >
  )
}

export default AboutPage;