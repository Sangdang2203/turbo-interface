

import icon_01 from "../../../../public/images/privateCloud/icon_01.png"
import icon_02 from "../../../../public/images/privateCloud/icon_02.png"
import opennebula_admin_view from "../../../../public/images/privateCloud/opennebula_admin_view.png"
import { OndemandVideoRounded, ReadMoreRounded } from "@mui/icons-material";
import { Box, Button, Card, CardActions, CardContent, Container, Grid, Paper, Typography } from "@mui/material";
import Image from "next/image";
import * as React from "react";

export const metadata = () => {
  return {
    title: "Private Cloud"
  }
}

const PrivateCloud = () => {
  return (
    <Container>
      <Box my={5} sx={{ textAlign: "center", marginX: "auto" }}>
        <Typography className="text-[2rem] text-center text-blue-900 font-semibold">Nền tảng Private Cloud mạnh mẽ, ổn định & hiệu năng cao</Typography>
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

      <Box my={5}>
        <Typography className="text-[2rem] text-blue-900 text-center font-semibold">Giao diện quản lý Private Cloud</Typography>
        <Card className="my-10 relative px-1 rounded-md hover:shadow-lg cursor-pointer">
          <CardContent>
            <Box className="mb-16 flex justify-between">
              <Typography className="text-[2.5rem] font-light py-3 mr-2">Private Cloud sẽ mang lại cho bạn góc nhìn khác biệt về vận hành dịch vụ CNTT.</Typography>
              <Image src={opennebula_admin_view} title="Giao diện" className="max-w-[700px] h-auto rounded-lg my-5 ml-2" alt="Giao diện"></Image>
            </Box>
          </CardContent>
          <CardActions className="absolute bottom-3 left-3">
            <Button href="https://opennebula.io/discover/" className="min-w-[200px] p-3 bg-blue-500 text-white border rounded-full hover:opacity-80" variant="outlined" size="small" endIcon={<ReadMoreRounded />}>kết nối với chúng tôi </Button>
          </CardActions>
        </Card>
      </Box>

      <Box>
        <Typography className="text-[2rem] text-blue-900 text-center font-semibold">Sẵn sàng triển khai Private Cloud?</Typography>
        <Typography className="text-[1.5rem] text-center w-2/3 mx-auto ">Dịch vụ Private Cloud của Turbo Solutions hoạt động giống như trung tâm dữ liệu của riêng bạn, có thể kiểm soát và định cấu hình theo nhu cầu của tổ chức mình.</Typography>
        <Card className="my-5">
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
            <Grid item xs={12} md={6} lg={5} xl={5} className="bg-sky-600 py-5 px-auto">
              <Grid pl={8}>
                <Box>
                  <Typography className="text-[1.3rem] font-semibold text-white">99.99% Uptime SLA</Typography>
                  <Typography className="w-3/4 text-white">Đa trung tâm dữ liệu tiêu chuẩn Tier-3 đáp ứng thời gian Uptime lên đến 99,99%</Typography>
                </Box>
                <hr className="my-5 max-w-[350px]" />
                <Box>
                  <Typography className="text-[1.3rem] font-semibold text-white">Băng thông không giới hạn</Typography>
                  <Typography className="w-3/4 text-white">Đường truyền tốc độ từ 10+ Gbps đảm bảo mọi kết nối luôn ở tốc độ cao nhất.</Typography>
                </Box>
                <hr className="my-5 max-w-[350px]" />
                <Box>
                  <Typography className="text-[1.3rem] font-semibold text-white">Lưu trữ siêu tốc độ</Typography>
                  <Typography className="w-3/4 text-white">Công nghệ phần mềm định hướng mang lại hệ thống lưu trữ siêu hiệu năng, siêu ổn định.</Typography>
                </Box>
              </Grid>

            </Grid>
          </Grid>
        </Card>
      </Box>

      <Box my={5}>
        <Typography className="text-[2rem] text-blue-900 text-center font-semibold">Các thông tin thường gặp</Typography>
        <Grid container my={5}>
          <Grid item xs={12} md={6} lg={6} xl={6} className="flex flex-col items-center justify-center">
            <Typography className="w-2/3 text-xl font-semibold">Hình thức triển khai tại trung tâm dữ liệu?</Typography>
            <Typography className="w-2/3">Bạn có thể triển khai private cloud tại bất kì trung tâm dữ liệu nào bạn mong muốn. Tại trung tâm dữ liệu ở trụ sở chính của doanh nghiệp, hoặc tại các trung tâm dữ liệu Internet tiêu chuẩn.</Typography>
          </Grid>
          <Grid item xs={12} md={6} lg={6} xl={6} className="flex flex-col items-center justify-center">
            <Typography className="w-2/3 text-xl font-semibold">Đám mây riêng khác với đám mây công cộng như thế nào?</Typography>
            <Typography className="w-2/3">Nói một cách đơn giản, public cloud bao gồm các tài nguyên được chia sẻ mà bạn thuê từ một nhà cung cấp dịch vụ và đám mây riêng gồm các tài nguyên của riêng bạn (dedicated).</Typography>
          </Grid>
        </Grid>

        <Grid container my={5}>
          <Grid item xs={12} md={6} lg={6} xl={6} className="flex flex-col items-center justify-center">
            <Typography className="w-2/3 text-xl font-semibold">Với Private Cloud, điều gì xảy ra khi 1 disk hoặc server bị lỗi?</Typography>
            <Typography className="w-2/3">Đám mây là tập hợp các máy chủ được kết hợp với nhau để tạo thành một nhóm tài nguyên chung. Trong trường hợp bất kỳ tài nguyên riêng lẻ nào bị lỗi, máy ảo (VM) của bạn sẽ tự động được chuyển đến một máy chủ đầy đủ chức năng trong đám mây.</Typography>
          </Grid>
          <Grid item xs={12} md={6} lg={6} xl={6} className="flex flex-col items-center justify-center">
            <Typography className="w-2/3 text-xl font-semibold">Phương thức hỗ trợ như thế nào?</Typography>
            <Typography className="w-2/3">Đây là thế mạnh của Turbo Solutions, chúng tôi sẽ song hành như một thành viên phòng CNTT của bạn trong suốt quá trình hoạt động. Chúng tôi có thể lập báo cáo, hỗ trợ tư vấn triển khai, chuyển đổi máy chủ và ứng dụng.</Typography>
          </Grid>
        </Grid>
      </Box>
    </Container >
  )
}

export default PrivateCloud;