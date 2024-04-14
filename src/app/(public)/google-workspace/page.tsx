
import Image from "next/image";
import icon_01 from "../../../../public/images/googleWorkspace/icon_01.png"
import icon_02 from "../../../../public/images/googleWorkspace/icon_02.png"
import icon_03 from "../../../../public/images/googleWorkspace/icon_03.png"
import icon_04 from "../../../../public/images/googleWorkspace/icon_04.png"
import { OndemandVideoRounded } from "@mui/icons-material";
import { Box, Button, Card, CardContent, Container, FormHelperText, Grid, Typography } from "@mui/material";
import * as React from "react";

export const metadata = () => {
  return {
    title: "Google Workspace"
  }
}

const GoogleWorkspace = () => {
  return (
    <Container>
      <Box my={5}>
        <Typography className="text-[2rem] text-center font-light">Turbo Solutions hỗ trợ doanh nghiệp sử dụng Google Workspace</Typography>
        <Grid container my={5}>
          <Grid item xs={12} md={6} lg={6} xl={6} className="flex items-center justify-center">
            <Image alt="icon" className="w-16 h-16" src={icon_01}></Image>
            <Typography className="w-2/3 px-2">Xác định nhu cầu doanh nghiệp và cách Google Workspace cùng các giải pháp khác có thể giúp giải quyết.</Typography>
          </Grid>
          <Grid item xs={12} md={6} lg={6} xl={6} className="flex items-center justify-center">
            <Image alt="icon" className="w-16 h-16" src={icon_02}></Image>
            <Typography className="w-2/3 px-2">Đánh giá cơ sở hạ tầng CNTT hiện tại, phương án để cải thiện và cách sẵn sàng cho Google Workspace</Typography>
          </Grid>
        </Grid>
      </Box>

      <Grid container my={5}>
        <Grid item xs={12} md={6} lg={6} xl={6} className="flex items-center justify-center">
          <Image alt="icon" className="w-16 h-16" src={icon_03}></Image>
          <Typography className="w-2/3 px-2">Chọn kết hợp và triển khai các dịch vụ phù hợp để có được các dịch vụ bạn cần để đạt được mục tiêu của mình</Typography>
        </Grid>
        <Grid item xs={12} md={6} lg={6} xl={6} className="flex items-center justify-center">
          <Image alt="icon" className="w-16 h-16" src={icon_04}></Image>
          <Typography className="w-2/3 px-2">Xây dựng lộ trình cho các khoản đầu tư CNTT trong tương lai phù hợp, như sao lưu phục hồi dữ liệu, DR Site…</Typography>
        </Grid>
      </Grid>

      <Typography className="w-2/3 mx-auto text-center text-[2rem] font-light">
        Tất cả các gói của Google Workspace đều có các công cụ nổi tiếng
        Google Gmail, Drive, Meet, Calendar, Chat, Docs, Sheets, Slides…
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button href="/contact" variant="contained" className="btn-astro hover:duration-700 hover:opacity-80" >Liên hê tư vấn chi tiết</Button>
      </Box>


      <Box className="w-3/4 mx-auto grid lg:grid-cols-3 gap-x-6 gap-y-6">
        <Card className="px-auto rounded-mdhover:scale-105 duration-700">
          <CardContent>
            <Box textAlign="center">
              <Typography className="text-lg font-normal text-blue-600">Business Starter</Typography>
              <Typography className="text-[1.5rem] font-light">6$ user | tháng</Typography>
            </Box>
            <hr className="my-5" />
            <Typography className="text-md py-1 font-light">Email với tên miền doanh nghiệp</Typography>
            <Typography className="text-md py-1 font-light">Họp trực tuyến tối đa 100 người</Typography>
            <Typography className="text-md py-1 font-light">Lưu trữ đám mây&nbsp;<strong>30 GB</strong> cho mỗi User</Typography>
            <Typography className="text-md py-1 font-light">Kiểm soát quản lý và bảo mật</Typography>
          </CardContent>
        </Card>

        <Card className="px-auto rounded-md cursor-pointer hover:scale-105 duration-700">
          <CardContent>
            <Box textAlign="center">
              <Typography className="text-lg font-normal text-orange-400">Business Standard</Typography>
              <Typography className="text-[1.5rem] font-light">12$ user | tháng</Typography>
            </Box>
            <hr className="my-5" />
            <Typography className="text-md py-1 font-light">Email với tên miền doanh nghiệp</Typography>
            <Typography className="text-md py-1 font-light">Họp trực tuyến tối đa&nbsp;<strong>150</strong>&nbsp;người + <strong>ghi hình</strong></Typography>
            <Typography className="text-md py-1 font-light">Lưu trữ đám mây&nbsp;<strong>2 TB</strong> cho mỗi User</Typography>
            <Typography className="text-md py-1 font-light">Kiểm soát quản lý và bảo mật</Typography>
          </CardContent>
        </Card>

        <Card className="px-auto rounded-md cursor-pointer hover:scale-105 duration-700">
          <CardContent>
            <Box textAlign="center">
              <Typography className="text-lg font-normal text-green-500">Business Plus</Typography>
              <Typography className="text-[1.5rem] font-light">18$ user | tháng</Typography>
            </Box>
            <hr className="my-5" />
            <Typography className="text-md py-1 font-light">Email với tên miền doanh nghiệp và lưu giữ</Typography>
            <Typography className="text-md py-1 font-light">Họp trực tuyến tối đa&nbsp;<strong>150</strong>&nbsp;người và <strong>ghi hình</strong></Typography>
            <Typography className="text-md py-1 font-light">Lưu trữ đám mây&nbsp;<strong>25 TB</strong> cho mỗi User</Typography>
            <Typography className="text-md py-1 font-light">Kiểm soát quản lý và bảo mật + Vault + Endpoint</Typography>
          </CardContent>
        </Card>
      </Box>

      <Box my={5}>
        <Typography className="text-[2rem] text-blue-500 text-center font-semibold">Các câu hỏi thường gặp</Typography>
        <Grid container my={5}>
          <Grid item xs={12} md={6} lg={6} xl={6} className="flex flex-col items-center justify-center">
            <Typography className="w-2/3 text-xl font-semibold">Google Workspace là gì?</Typography>
            <Typography className="w-2/3">Google Workspace (tên gọi cũ G-Suite) là giải pháp điện toán đám mây được thiết kế doanh nghiệp hoàn thành công việc với các ứng dụng tốt nhất của Google.</Typography>
          </Grid>
          <Grid item xs={12} md={6} lg={6} xl={6} className="flex flex-col items-center justify-center">
            <Typography className="w-2/3 text-xl font-semibold">Tên dịch vụ thay đổi, sản phẩm hoặc giá có thay đổi không?</Typography>
            <Typography className="w-2/3">Không có thay đổi gì về giá hoặc tính năng cho các gói dành cho doanh nghiệp vừa và nhỏ. Vẫn là các gói tương tự, chỉ là tên đã được cập nhật.</Typography>
          </Grid>
        </Grid>

        <Grid container my={5}>
          <Grid item xs={12} md={6} lg={6} xl={6} className="flex flex-col items-center justify-center">
            <Typography className="w-2/3 text-xl font-semibold">Có hợp đồng và hóa đơn cho dịch vụ?</Typography>
            <Typography className="w-2/3">Công ty Turbo Solutions cung cấp hợp đồng sử dụng Google Workspace và hóa đơn hợp pháp cho các doanh nghiệp tại Việt Nam theo pháp lý hiện hành.</Typography>
          </Grid>
          <Grid item xs={12} md={6} lg={6} xl={6} className="flex flex-col items-center justify-center">
            <Typography className="w-2/3 text-xl font-semibold">Có hỗ trợ chuyển dịch vụ Email?</Typography>
            <Typography className="w-2/3">Turbo Solutions hỗ trợ chuyển đổi cho khách hàng đang dùng các dịch vụ Email Hosting. Các trường hợp với G-Suite hoặc các email khác cần được khảo sát và tham vấn trước khi thực hiện.</Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default GoogleWorkspace;