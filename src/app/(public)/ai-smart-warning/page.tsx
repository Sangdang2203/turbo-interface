
import { Box, Button, Card, CardContent, Container, Grid, Typography } from "@mui/material";
import them_01 from "../../../../public/images/theme_01.png";
import AiSmartWarning_01 from "../../../../public/images/aiSmartWarning/ai_smart_warning_01.png";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

export const metadata = () => {
  return {
    title: "AI Smart Warning"
  }
}

const AISmartWarning = () => {
  return (
    <Container>
      <Box my={5} sx={{ textAlign: "center", marginX: "auto" }}>
        <Typography className="text-[2rem] text-center text-blue-900 font-semibold">
          AI Smart Warning giải pháp cảnh báo thông minh AI
        </Typography>
        <Typography className="text-[1.5rem] w-3/4 mx-auto leading-relaxed text-gray-500">
          <Link className="text-sky-700 mr-1" href="https://ictvietnam.vn/ai-smart-warning-san-pham-make-in-vietnam-dau-tien-ve-nhan-dien-hanh-dong-qua-camera-32181.html">Sản phẩm Make in Vietnam đầu tiên</Link>
          sử dụng trí thông minh nhân tạo nhận diện những hành động con người qua camera giám sát.
        </Typography>
      </Box>

      <Box my={5} sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
        <Typography className="py-3 px-6 bg-sky-50 text-sky-700 uppercase w-fit rounded-full">Tính năng AI Smart Warning</Typography>
        <Typography className="my-3 text-[1.5rem] text-gray-500 w-3/4">
          Chuyển các IP Camera trở thành công cụ giám sát thông minh với công nghệ máy học và thị giác máy tính.
        </Typography>
      </Box>

      <Grid container my={5}>
        <Grid item xs={12} md={6} lg={7} xl={7} className=" py-5 px-auto">
          <Grid pl={8}>
            <Box my={3}>
              <Typography className="text-[1rem] text-sky-600 italic font-semibold">Nhận dạng hành vi, hành động con người</Typography>
              <Typography className="w-3/4">
                Xác định và nhận dạng hành vi con người có tính chất nguy hiểm như hành động gây gổ, đánh nhau, say xỉn, té ngã…
              </Typography>
            </Box>

            <Box my={3}>
              <Typography className="text-[1rem] text-sky-600 italic font-semibold">Phát hiện các dụng cụ nguy hiểm</Typography>
              <Typography className="w-3/4">
                Xác định các công cụ như gậy, búa, dao, súng… có khả năng gây nguy hiểm, mất an toàn đến an ninh trật trự khu vực công cộng.
              </Typography>
            </Box>
            <Button href="/contact" variant="contained" className="btn-astro rounded-full hover:duration-700 hover:opacity-80" >Liên hệ ngay</Button>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6} lg={5} xl={5} className="flex flex-col items-center justify-center">
          <Image className="w-full h-auto" src={AiSmartWarning_01} title="Nhận dạng hành vi, hành động con người" alt="Nhận dạng hành vi, hành động con người" ></Image>
        </Grid>
      </Grid>

      <Grid container my={5}>
        <Grid item xs={12} md={6} lg={5} xl={5} className="flex flex-col items-center justify-center">

        </Grid>
        <Grid item xs={12} md={6} lg={7} xl={7} className=" py-5 px-auto">
          <Grid pl={8}>
            <Box my={3}>
              <Typography className="text-[1rem] text-sky-600 italic font-semibold">Phát hiện đột nhập vùng hạn chế</Typography>
              <Typography className="w-3/4">
                Phát hiện sớm các hành vi đột nhập vùng hạn chế, khu vực an ninh cao thông qua AI với tính năng hàng rào, đường biên ảo
              </Typography>
            </Box>

            <Box my={3}>
              <Typography className="text-[1rem] text-sky-600 italic font-semibold">Phát hiện hành động leo trèo, vượt rào</Typography>
              <Typography className="w-3/4">
                Nhận biết sớm các hành vi dựa trên các tư thế cụ thể của con người như leo trèo, vượt tường rào… có khả đột nhập hoặc trốn thoát khỏi khu vực hạn chế.
              </Typography>
            </Box>
            <Button href="/contact" variant="contained" className="btn-astro rounded-full hover:duration-700 hover:opacity-80" >Liên hệ ngay</Button>
          </Grid>
        </Grid>
      </Grid>

      <Grid container my={5}>
        <Grid item xs={12} md={6} lg={7} xl={7} className=" py-5 px-auto">
          <Grid pl={8}>
            <Box my={3}>
              <Typography className="text-[1rem] text-sky-600 italic font-semibold">Cảnh báo thông minh</Typography>
              <Typography className="w-3/4">
                Cảnh báo ngay lập tức qua email và các ứng dụng tin nhắn Telegram, Zalo… đính kèm cùng các video và hình ảnh được ghi lại ngay khi sự kiện xảy ra.
              </Typography>
              <Typography className="w-3/4">
                Giải pháp AI Smart Warning cho phép ghi lại các video giám sát 24/7, hoặc chỉ ghi nhận các sự kiện, lưu video và tìm kiếm thông minh theo các tiêu chí định sẵn.
              </Typography>
            </Box>
            <Button href="/contact" variant="contained" className="btn-astro rounded-full hover:duration-700 hover:opacity-80" >Liên hệ ngay</Button>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6} lg={5} xl={5} className="flex flex-col items-center justify-center">

        </Grid>
      </Grid>

      <Box sx={{ position: "relative" }}>
        <Image src={them_01} className="w-full max-h-[300px] rounded-lg" alt="" />
        <Box width="100%" sx={{ position: "absolute", bottom: "32px", marginX: "auto", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
          <Typography className="text-[2rem] text-sky-600">AI Smart Warning</Typography>
          <Typography className="text-xl">Chuyển IP Camera của bạn trở thành công cụ cảnh báo và giám sát thông minh</Typography>
          <Button href="/contact" variant="contained" className="btn-astro hover:duration-700 hover:opacity-80" >Kết nối ngay với chúng tôi</Button>
        </Box>
      </Box>

      <Box>
        <Typography></Typography>
        <Typography className="text-lg text-gray-400">
        </Typography>

      </Box>

      <Box my={5}>
        <Typography className="text-[2rem] text-blue-900 text-center font-semibold">
          Những lợi ích của AI Smart Warning
        </Typography>
        <Grid container my={5}>
          <Grid item xs={12} md={6} lg={6} xl={6} className="flex flex-col items-center justify-center">
            <Typography className="w-2/3 text-xl font-semibold">Tiết kiệm chi phí tối đa</Typography>
            <Typography className="w-2/3">
              Giảm thiểu chi phí lưu trữ, vận hành quản lý với các tính năng thông báo tự động,
              tìm kiếm video nhanh chóng.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} lg={6} xl={6} className="flex flex-col items-center justify-center">
            <Typography className="w-2/3 text-xl font-semibold">Tùy chọn các module AI Smart Warning</Typography>
            <Typography className="w-2/3">
              Tối ưu hóa Capex & Opex với các module AI tùy chọn, kích hoạt và triển khai linh hoạt.
            </Typography>
          </Grid>
        </Grid>

        <Grid container my={5}>
          <Grid item xs={12} md={6} lg={6} xl={6} className="flex flex-col items-center justify-center">
            <Typography className="w-2/3 text-xl font-semibold">Tính tương thích cao</Typography>
            <Typography className="w-2/3">
              Các yêu cầu phần cứng tương thích đáp ứng hầu hết các dòng IP Camera phổ biến trên thị trường hiện nay.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} lg={6} xl={6} className="flex flex-col items-center justify-center">
            <Typography className="w-2/3 text-xl font-semibold">Dễ dàng thiết lập và sử dụng</Typography>
            <Typography className="w-2/3">
              Dễ dàng dùng thử, thiết lập và cấu hình. Dễ dàng kết nối, tích hợp, nâng cấp và mở rộng.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container >
  )
}

export default AISmartWarning;