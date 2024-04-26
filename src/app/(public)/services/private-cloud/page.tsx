

import icon_01 from "../../../images/privateCloud/icon_01.png"
import icon_02 from "../../../images/privateCloud/icon_02.png"
import opennebula_admin_view from "../../../images/privateCloud/opennebula_admin_view.png"
import { OndemandVideoRounded, ReadMoreRounded } from "@mui/icons-material";
import { Box, Button, Card, CardActions, CardContent, Container, Divider, Grid, Paper, TextField, Typography } from "@mui/material";
import Image from "next/image";
import * as React from "react";

const PrivateCloud = () => {
  return (
    <Container>
      <Box sx={{ textAlign: "center", marginX: "auto", paddingY: 10 }}>
        <Typography className="text-[2rem] text-center text-sky-900 font-semibold">Nền tảng Private Cloud mạnh mẽ, ổn định & hiệu năng cao</Typography>
        <Typography className="text-[1.5rem] w-3/4 mx-auto leading-relaxed text-gray-500">Sở hữu sức mạnh không giới hạn của điện toán đám mây một cách dễ dàng với Private Cloud chỉ dành riêng cho doanh nghiệp của bạn.</Typography>
        <Box my={5}>
          <iframe
            className="rounded-xl mx-auto"
            width="100%" height="600px"
            title="Vaidio  AI Vision 7.0"
            src="https://www.youtube.com/embed/vx24uYpn3hw?si=aO0F5ocLlAhjuBHp"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen></iframe>
        </Box>
      </Box>

      <Box>
        <Typography className="p-3 bg-green-50 text-green-500 uppercase w-fit rounded-full">Lợi ích của private cloud</Typography>
        <Typography className="my-3 text-[2rem] w-1/2">Lợi ích của Private Cloud là tính linh hoạt, khả năng cung cấp tài nguyên được đảm bảo, bảo mật mạnh mẽ…</Typography>

        <Box my={5} className="container grid sm:grid-cols-4 gap-x-6 gap-y-6">

          <Card className="relative px-1 rounded-md hover:shadow-lg cursor-pointer">
            <CardContent>
              <Box className="mb-16">
                <Typography className="text-[1rem] p-3 bg-sky-100 text-sky-700 text-center uppercase w-full rounded-full font-normal">Đơn giản</Typography>
                <Typography className="font-light py-3">Một sản phẩm mạnh mẽ, với một giao diện quản lý duy nhất để giảm độ phức tạp, và chi phí vận hành.</Typography>
              </Box>
            </CardContent>
            <CardActions className="absolute bottom-1 left-1">
              <Button href="https://opennebula.io/discover/" className="hover:border-blue-400 p-3" variant="outlined" size="small" endIcon={<ReadMoreRounded />}>Tìm hiểu thêm </Button>
            </CardActions>
          </Card>

          <Card className="relative px-1 rounded-md hover:shadow-lg cursor-pointer">
            <CardContent>
              <Box className="mb-16">
                <Typography className="text-[1rem] p-3 bg-sky-100 text-sky-700 text-center uppercase w-full rounded-full font-normal">Công nghệ HCI</Typography>
                <Typography className="font-light py-3">Công nghệ siêu hội tụ gộp các thành phần điện toán một môi trường chung, tận dụng tối đa tài nguyên.</Typography>
              </Box>
            </CardContent>
            <CardActions className="absolute bottom-1 left-1">
              <Button href="https://en.wikipedia.org/wiki/Hyper-converged_infrastructure" className="hover:border-blue-400 p-3" variant="outlined" size="small" endIcon={<ReadMoreRounded />}>Tìm hiểu thêm </Button>
            </CardActions>
          </Card>

          <Card className="relative px-1 rounded-md hover:shadow-lg cursor-pointer">
            <CardContent>
              <Box className="mb-16">
                <Typography className="text-[1rem] p-3 bg-sky-100 text-sky-700 text-center uppercase w-full rounded-full font-normal">Đa nền tảng</Typography>
                <Typography className="font-light py-3">Xây dựng và quản lý private cloud trên đa nền ảo hóa VMWare, KVM, LXD hoặc Firecracker.</Typography>
              </Box>
            </CardContent>
            <CardActions className="absolute bottom-1 left-1">
              <Button href="https://opennebula.io/discover/" className="hover:border-blue-400 p-3" variant="outlined" size="small" endIcon={<ReadMoreRounded />}>Tìm hiểu thêm </Button>
            </CardActions>
          </Card>

          <Card className="relative px-1 rounded-md hover:shadow-lg cursor-pointer">
            <CardContent>
              <Box className="mb-16">
                <Typography className="text-[1rem] p-3 bg-sky-100 text-sky-700 text-center uppercase w-full rounded-full font-normal">Hỗ trợ nhanh chóng</Typography>
                <Typography className="font-light py-3">Mọi thành phần được tài liệu hóa đầy đủ với minh họa. Hỗ trợ trực tiếp tại địa phương và từ hãng phát triển.</Typography>
              </Box>
            </CardContent>
            <CardActions className="absolute bottom-1 left-1">
              <Button href="/contact" className="hover:border-blue-400 p-3" variant="outlined" size="small" endIcon={<ReadMoreRounded />}>Tìm hiểu thêm </Button>
            </CardActions>
          </Card>

        </Box>
      </Box>

      <Box>
        <Box my={5} sx={{ textAlign: "center" }}>
          <Typography className="text-[2rem] font-semibold text-sky-900"> Bảng giá dịch vụ Private Cloud </Typography>
          <Typography> * Bảng giá chưa bao gồm 10% VAT </Typography>
        </Box>

        <Box className='grid sm:grid-cols-4 gap-x-6 gap-y-6 mb-10 text-center'>

          <Card className='h-fit my-3 p-3 rounded-xl shadow-lg'>
            <Box className="">
              <Divider className="border-t-4 bg-yellow-600" />
              <Typography className="py-5 uppercase text-[1.25rem] font-bold text-sky-900" > gói private 01</Typography>
            </Box>
            <Box>
              <div><TextField disabled size="small" className="py-1" defaultValue="Intel Xeon Silver 4110" /></div>
              <div><TextField disabled size="small" className="py-1" defaultValue="16 GB RAM" /></div>
              <div><TextField disabled size="small" className="py-1" defaultValue="480 GB SSD" /></div>
              <div><TextField disabled size="small" className="py-1" defaultValue="1 IPv4" /></div>
              <div><TextField disabled size="small" className="py-1" defaultValue="100 Mbps Network" /></div>

              <Typography className="uppercase text-[1.5rem] font-bold py-5 text-yellow-600" > 7.600.000 vnd</Typography>
              <Divider className="border-t-4 bg-yellow-600" />
            </Box>
          </Card>

          <Card className='h-fit my-3 p-3 rounded-xl shadow-lg'>
            <Box className="">
              <Divider className="border-t-4 bg-yellow-600" />
              <Typography className="py-5 uppercase text-[1.25rem] font-bold text-sky-900" > gói private 02</Typography>
            </Box>
            <Box>
              <div><TextField disabled size="small" className="py-1" defaultValue="Intel Xeon Silver 4110" /></div>
              <div><TextField disabled size="small" className="py-1" defaultValue="32 GB RAM" /></div>
              <div><TextField disabled size="small" className="py-1" defaultValue="960 GB SSD" /></div>
              <div><TextField disabled size="small" className="py-1" defaultValue="1 IPv4" /></div>
              <div><TextField disabled size="small" className="py-1" defaultValue="100 Mbps Network" /></div>

              <Typography className="uppercase text-[1.5rem] font-bold py-5 text-yellow-600" > 8.300.000 vnd</Typography>
              <Divider className="border-t-4 bg-yellow-600" />
            </Box>
          </Card>

          <Card className='h-fit my-3 p-3 rounded-xl shadow-lg'>
            <Box className="">
              <Divider className="border-t-4 bg-yellow-600" />
              <Typography className="py-5 uppercase text-[1.25rem] font-bold text-sky-900" > gói private 03</Typography>
            </Box>
            <Box>
              <div><TextField disabled size="small" className="py-1" defaultValue="2x Intel Xeon Silver 4110" /></div>
              <div><TextField disabled size="small" className="py-1" defaultValue="2 x 32 GB RAM" /></div>
              <div><TextField disabled size="small" className="py-1" defaultValue="1.9 TB SSD" /></div>
              <div><TextField disabled size="small" className="py-1" defaultValue="1 IPv4" /></div>
              <div><TextField disabled size="small" className="py-1" defaultValue="100 Mbps Network" /></div>

              <Typography className="uppercase text-[1.5rem]  font-bold py-5 text-yellow-600" > 9.300.000 vnd</Typography>
              <Divider className="border-t-4 bg-yellow-600" />
            </Box>
          </Card>

          <Card className='h-fit my-3 p-3 rounded-xl shadow-lg'>
            <Box className="">
              <Divider className="border-t-4 bg-yellow-600" />
              <Typography className="py-5 uppercase text-[1.25rem] font-bold text-sky-900" > gói private 04</Typography>
            </Box>
            <Box>
              <div><TextField disabled size="small" className="py-1" defaultValue="2x Intel Xeon Silver 4110" /></div>
              <div><TextField disabled size="small" className="py-1" defaultValue="2 x 32 GB RAM" /></div>
              <div><TextField disabled size="small" className="py-1" defaultValue="3.8 TB SSD" /></div>
              <div><TextField disabled size="small" className="py-1" defaultValue="1 IPv4" /></div>
              <div><TextField disabled size="small" className="py-1" defaultValue="100 Mbps Network" /></div>

              <Typography className="uppercase text-[1.5rem] font-bold py-5 text-yellow-600" > 9.999.000 vnd</Typography>
              <Divider className="border-t-4 bg-yellow-600" />
            </Box>
          </Card>

        </Box>
      </Box>

      <Box>
        <Typography className="text-[2rem] text-sky-900 text-center font-semibold">Sẵn sàng triển khai Private Cloud?</Typography>
        <Typography className="text-[1.5rem] text-center w-2/3 mx-auto ">Dịch vụ Private Cloud hoạt động giống như trung tâm dữ liệu của riêng bạn, có thể kiểm soát và định cấu hình theo nhu cầu của tổ chức mình.</Typography>

        <Card className="my-5 shadow-2xl rounded-xl">
          <Grid container>
            <Grid item xs={12} md={6} lg={7} xl={7} className="flex flex-col items-center justify-center">
              <Box textAlign="center" my={3}>
                <Typography className="text-[4rem] text-yellow-500">-30%</Typography>
                <Typography className="text-xl text-gray-400">giảm chi phí đầu tư và vận hành</Typography>
              </Box>

              <Box my={3} display="flex" justifyContent="space-around" width="60%">
                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                  <Image src={icon_01} className="w-16 h-16" alt=""></Image>
                  <Typography className="font-semibold">Cấu hình linh hoạt</Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                  <Image src={icon_02} className="w-16 h-16" alt=""></Image>
                  <Typography className="font-semibold">Hiệu năng cao</Typography>
                </Box>
              </Box>

              <Button className="btn-grad rounded-full w-1/3 my-3 hover:opacity-80" href="/contact" target="_blank">Liên hệ ngay</Button>
            </Grid>

            <Grid item xs={12} md={6} lg={5} xl={5} className="bg-sky-600 py-5 px-auto shadow-2xl rounded-xl">
              <Grid pl={8}>
                <Box>
                  <Typography className="text-[1.3rem] font-semibold text-white">99.99% Uptime SLA</Typography>
                  <Typography className="w-3/4 text-white">
                    Private Cloud luôn hoạt động với cam kết chất lượng dịch vụ 99.99% uptime, đáp ứng nhu cầu luôn kết nối.
                  </Typography>
                </Box>
                <hr className="my-5 max-w-[450px]" />
                <Box>
                  <Typography className="text-[1.3rem] font-semibold text-white">Băng thông rộng, siêu tốc độ</Typography>
                  <Typography className="w-3/4 text-white">
                    Kết nối mạng tốc độ cao đến 10+ Gbps đáp ứng nhu cầu truy cập lớn, phục vụ người dùng đông như media, streaming, gaming…
                  </Typography>
                </Box>
                <hr className="my-5 max-w-[450px]" />
                <Box>
                  <Typography className="text-[1.3rem] font-semibold text-white">Kiểm soát, phân quyền</Typography>
                  <Typography className="w-3/4 text-white">
                    Kiểm soát, phân quyền truy cập dựa trên vai trò (RBAC) để ủy quyền quản lý tài nguyên.
                  </Typography>
                </Box>
                <hr className="my-5 max-w-[450px]" />
                <Box>
                  <Typography className="text-[1.3rem] font-semibold text-white">Quản trị linh hoạt</Typography>
                  <Typography className="w-3/4 text-white">
                    Quản trị độc lập, linh hoạt với tường lửa và mạng riêng biệt, cấu hình tùy chỉnh để phù hợp với kiến trúc hạ tầng hiện hữu.
                  </Typography>
                </Box>
              </Grid>
            </Grid>

          </Grid>
        </Card>
      </Box>

      <Box mt={5}>
        <Typography className="text-[2rem] text-sky-900 text-center font-semibold">Các thông tin thường gặp</Typography>

        <Grid container pt={5} >
          <Grid item xs={12} md={6} className="flex flex-col items-center justify-center text-sky-900">
            <Typography className="w-3/4 text-lg font-semibold pb-3">Hình thức triển khai tại trung tâm dữ liệu?</Typography>
            <Typography className="w-3/4">Bạn có thể triển khai private cloud tại bất kì trung tâm dữ liệu nào bạn mong muốn. Tại trung tâm dữ liệu ở trụ sở chính của doanh nghiệp, hoặc tại các trung tâm dữ liệu Internet tiêu chuẩn.</Typography>
          </Grid>
          <Grid item xs={12} md={6} className="flex flex-col items-center justify-center text-sky-900">
            <Typography className="w-3/4 text-lg font-semibold pb-3">Đám mây riêng khác với đám mây công cộng như thế nào?</Typography>
            <Typography className="w-3/4">Nói một cách đơn giản, public cloud bao gồm các tài nguyên được chia sẻ mà bạn thuê từ một nhà cung cấp dịch vụ và đám mây riêng gồm các tài nguyên của riêng bạn (dedicated).</Typography>
          </Grid>
        </Grid>

        <Grid container py={5} >
          <Grid item xs={12} md={6} className="flex flex-col items-center justify-center text-sky-900">
            <Typography className="w-3/4 text-lg font-semibold pb-3">Với Private Cloud, điều gì xảy ra khi 1 disk hoặc server bị lỗi?</Typography>
            <Typography className="w-3/4">Đám mây là tập hợp các máy chủ được kết hợp với nhau để tạo thành một nhóm tài nguyên chung. Trong trường hợp bất kỳ tài nguyên riêng lẻ nào bị lỗi, máy ảo (VM) của bạn sẽ tự động được chuyển đến một máy chủ đầy đủ chức năng trong đám mây.</Typography>
          </Grid>
          <Grid item xs={12} md={6} className="flex flex-col items-center justify-center text-sky-900">
            <Typography className="w-3/4 text-lg font-semibold pb-3">Phương thức hỗ trợ như thế nào?</Typography>
            <Typography className="w-3/4">Đây là thế mạnh của Turbo Solutions, chúng tôi sẽ song hành như một thành viên phòng CNTT của bạn trong suốt quá trình hoạt động. Chúng tôi có thể lập báo cáo, hỗ trợ tư vấn triển khai, chuyển đổi máy chủ và ứng dụng.</Typography>
          </Grid>
        </Grid>

      </Box>
    </Container >
  )
}

export default PrivateCloud;