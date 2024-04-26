"use client";

import React from "react";
import Image from "next/image";
import cloudFlare_01 from "../../../images/cloudFlare/cloudFlare_01.png";
import cloudFlare_02 from "../../../images/cloudFlare/cloudFlare_02.jpg";
import cloudFlare_03 from "../../../images/cloudFlare/cloudFlare_03.png";
import cloudFlare_04 from "../../../images/cloudFlare/cloudFlare_04.png";
import dedicateServer from "../../../images/cloudServer/dedicate_server.jpg"
import cloudServer_icon_01 from "../../../images/cloudServer/cloudServer_icon_01.png"
import { Container, Box, Typography, Card, Grid, Button, Paper } from "@mui/material";


export default function CloudFlare() {

  return (
    <>
      <Box>
        <Paper className="rounded-none shadow-xl py-10">
          <Grid container >
            <Grid item xs={12} md={6} pl={10}>
              <Box sx={{ display: "flex", alignItems: "center", py: 1 }}>
                <Box className="text-justify">
                  <Typography className="text-[2rem] text-orange-600 font-semibold">CloudFlare là gì?</Typography>
                  <Typography py={1}>
                    CloudFlare là dịch vụ CDN trung gian, là nơi điều phối lượng truy cập giữa máy chủ với máy của khách hàng qua lớp bảo vệ CloudFlare.
                  </Typography>
                  <Typography py={1}>
                    Thay vì phải truy cập trực tiếp vào website thông qua phân giải tên miền DNS thì có thể sử dụng máy chủ phân giải tên của CloudFlare.
                    Ngoài ra, CloudFlare còn có cung cấp nhiều dịch vụ như CNS, SPDY, tường lửa chống Ddos, Chứng chỉ số SSL
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={6} className="flex flex-col items-center justify-center">
              <Image src={cloudFlare_01} className="w-[80%] h-auto rounded-lg" alt="cloudFlare_01" />
            </Grid>
          </Grid>
        </Paper>

        <Box className="theme text-white text-center shadow-xl">
          <Typography className="text-[2rem] font-semibold text-center">
            PERFORMANCE
          </Typography>
          <Typography className="py-5 text-[1.5rem]"> Giúp tăng tốc độ tải của ứng dụng - website </Typography>
        </Box>

        <Paper className="rounded-none shadow-xl py-5">
          <Grid container>
            <Grid item xs={12} md={4}>
              <Paper className="m-6 p-3">
                <Typography className="text-sky-800 font-bold pb-3">WAF</Typography>
                <Typography>
                  Tường lửa cho tầng ứng dụng, kiểm tra dựa vào header của request.
                  Bao gồm các bộ lệnh OWASP top 10 luôn được cập nhật tự động và
                  các bộ lệnh cho phép khách hàng customize
                </Typography>
              </Paper>
              <Paper className="m-6 p-3">
                <Typography className="text-sky-800 font-bold pb-3">Chống DDoS</Typography>
                <Typography>
                  Sử dụng công nghệ AI và máy học để phát hiện DDoS ở tầng ứng dụng và tự động giảm thiểu. Unlimited lượng giảm thiểu DDoS
                </Typography>
              </Paper>
              <Paper className="m-6 p-3">
                <Typography className="text-sky-800 font-bold pb-3">CDN</Typography>
                <Typography>
                  CDN giúp doanh nghiệp lưu trữ thông tin tĩnh trên máy chủ của nhà cung cấp CDN.
                  Giúp tăng tốc độ tải trang và giúp chịu tải khi có nhiều người dùng truy cập vào web/ứng dụng trong cùng 1 thời điểm
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} md={4} className="flex justify-center">
              <Image src={cloudFlare_02} alt="performance" className="w-[100%] h-auto" />
            </Grid>

            <Grid item xs={12} md={4}>
              <Paper className="mx-6 my-3 p-3">
                <Typography className="text-sky-800 font-bold pb-3">Giấu địa chỉ IP</Typography>
                <Typography>Khi kiểm tra domain sẽ chỉ ra địa chỉ IP của vendor cung cấp giải pháp reverse proxy mà sẽ không ra địa chỉ IP chính của khách hàng</Typography>
              </Paper>
              <Paper className="mx-6 my-3 p-3">
                <Typography className="text-sky-800 font-bold pb-3">Bảo vệ DNS</Typography>
                <Typography>Bảo vệ chống tấn công DNS, phising</Typography>
              </Paper>
              <Paper className="mx-6 my-3 p-3">
                <Typography className="text-sky-800 font-bold pb-3">SSL</Typography>
                <Typography>SSL giúp mã hóa thông tin</Typography>
              </Paper>
              <Paper className="mx-6 my-3 p-3">
                <Typography className="text-sky-800 font-bold pb-3">Bảo vệ chống tấn công API</Typography>
                <Typography>Chống tấn công API vào các đầu end point</Typography>
              </Paper>
              <Paper className="mx-6 my-3 p-3">
                <Typography className="text-sky-800 font-bold pb-3">PCI DSS 3.2</Typography>
                <Typography>Chứng chỉ bảo mật chứng minh mức độ tuân thủ bảo mật của doanh nghiệp</Typography>
              </Paper>
            </Grid>

          </Grid>
        </Paper>

        <Paper className="rounded-none shadow-xl py-5">
          <Typography className="text-[2.5rem] text-center uppercase text-orange-600 font-semibold pt-1 pb-10">cloudflare và các gói tiện ích riêng</Typography>
          <Grid container >
            <Grid item xs={12} md={6} className="flex flex-col items-center justify-center">
              <Image src={cloudFlare_03} className="w-[80%] h-auto rounded-lg" alt="cloudFlare_03" />
            </Grid>

            <Grid item xs={12} md={6} pl={10}>
              <Box sx={{ display: "flex", alignItems: "center", py: 1 }}>
                <Box>
                  <Typography className="text-[1.3rem] text-orange-600 font-semibold">CDN</Typography>
                  <Typography className="w-3/4 text-justify">
                    Phân phối nội dung tĩnh và động cực nhanh qua mạng toàn cầu, giảm chi phí băng thông, bảo vệ DDoS không giới hạn
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", py: 1 }}>
                <Box>
                  <Typography className="text-[1.3rem] text-orange-600 font-semibold">WAF</Typography>
                  <Typography className="w-3/4 text-justify">
                    Bảo vệ, hiển thị và kiểm soát thông minh ở mọi quy mô hoặc kỹ thuật phức tạp, giữ tài sản Internet an toàn và nhanh chóng
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", py: 1 }}>
                <Box>
                  <Typography className="text-[1.3rem] text-orange-600 font-semibold">IPFS</Typography>
                  <Typography className="w-3/4 text-justify">
                    Người dùng dễ dàng truy cập và phân phối nội dung IPFS thông qua các miền tùy chỉnh tại hơn 100 quốc gia, tính bảo mật cao
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", py: 1 }}>
                <Box>
                  <Typography className="text-[1.3rem] text-orange-600 font-semibold">Ethereum Gateway</Typography>
                  <Typography className="w-3/4 text-justify">
                    Người dùng dễ dàng truy cập Ethereum qua HTTP tên miền cá nhân, không cần triển khai và giám sát E để thực hiện Dapps với Ethereum
                  </Typography>
                </Box>
              </Box>
            </Grid>


          </Grid>
        </Paper>



        <Box className="theme text-white text-center shadow-xl">
          <Typography className="text-[2rem] font-semibold text-center">
            Trải nghiệm miễn phí dịch vụ CLOUDFLARE WAF của chúng tôi
          </Typography>
          <Typography className="py-5 text-[1.5rem]"> Tặng ngay 7 ngày miễn phí dùng thử </Typography>
          <Button href="tel:0769999967" variant="contained">Trải nghiệm ngay</Button>
        </Box>

        <Paper className="rounded-none mb-10">
          <Grid container >
            <Grid item xs={12} md={6} className="flex flex-col items-center justify-center text-sky-900">
              <Typography className="text-[1.5rem] font-bold"> CloudFlare WAF là tính năng gì? </Typography>
              <Typography className="font-extralight text-center w-3/4 px-3">
                Cloudflare Web Application Firewall (WAF) sẽ cung cấp khả năng bảo vệ tự động khỏi các
                lỗ hổng bảo mật và tính linh hoạt trong việc tạo các quy tắc tùy chỉnh
              </Typography>
            </Grid>

            <Grid item xs={12} md={6} className="flex flex-col items-center justify-center">
              <Image src={cloudFlare_04} className="w-full h-full rounded-lg" alt="CloudFlare WAF là tính năng gì?" />
            </Grid>
          </Grid>

          <Box className="flex justify-center pt-10">
            <Box className="w-1/3 flex flex-col justify-center items-center">
              <Image src={cloudServer_icon_01} className="w-16 h-auto" alt="Quy tắc tùy chỉnh" />
              <Typography className="text-[1.3rem] font-semibold py-3">Quy tắc tùy chỉnh</Typography>
              <Typography className="w-3/4 text-center">
                Tạo quy tắc tùy chỉnh của riêng bạn để bảo vệ trang web và các API khỏi lưu lượng truy cập độc hại.
              </Typography>
            </Box>

            <Box className="w-1/3 flex flex-col justify-center items-center">
              <Image src={cloudServer_icon_01} className="w-16 h-auto" alt="Quy tắc giới hạn tốc độ" />
              <Typography className="text-[1.3rem] font-semibold py-3">Quy tắc giới hạn tốc độ</Typography>
              <Typography className="w-3/4 text-center">
                Xác định giới hạn tốc độ cho các yêu cầu đến khớp với một biểu thức
                và hành động cần thực hiện khi đạt đến các giới hạn tốc độ đó
              </Typography>
            </Box>

            <Box className="w-1/3 flex flex-col justify-center items-center">
              <Image src={cloudServer_icon_01} className="w-16 h-auto" alt="Bộ quy tắc được quản lý WAF" />
              <Typography className="text-[1.3rem] font-semibold py-3">Bộ quy tắc được quản lý WAF</Typography>
              <Typography className="w-3/4 text-center">
                Các bộ quy tắc được cập nhật thường xuyên, cung cấp các biện pháp bảo vệ lỗ hổng zero-day nâng cao.
              </Typography>
            </Box>
          </Box>

          <Box className="flex justify-evenly py-10">
            <Box className="w-1/3 flex flex-col justify-center items-center">
              <Image src={cloudServer_icon_01} className="w-16 h-auto" alt="Kiểm tra thông tin đăng nhập bị lộ" />
              <Typography className="text-[1.3rem] font-semibold py-3">Kiểm tra thông tin đăng nhập bị lộ</Typography>
              <Typography className="w-3/4 text-center">
                Giám sát và chặn việc sử dụng thông tin đăng nhập bị đánh cắp / thông tin bị lộ để tiếp quản tài khoản
              </Typography>
            </Box>

            <Box className="w-1/3 flex flex-col justify-center items-center">
              <Image src={cloudServer_icon_01} className="w-16 h-auto" alt="Phân tích tường lửa" />
              <Typography className="text-[1.3rem] font-semibold py-3">Phân tích tường lửa</Typography>
              <Typography className="w-3/4 text-center">
                Xác định và điều tra các mối đe dọa bảo mật bằng giao diện trực quan.
                Điều chỉnh cấu hình bảo mật của bạn dựa trên nhật ký hoạt động
              </Typography>
            </Box>
          </Box>
        </Paper>

        <Box pb={5}>
          <Typography className="text-[2rem] text-sky-900 font-semibold text-center py-5"> Có nên sử dụng CloudFlare hay không? </Typography>
          <Typography className="text-center">
            CloudFlare được dùng như một dịch vụ DNS thông thường khi tắt đám mây tên miền. <br />
            Nên sử dụng DNS trung gian này bởi vì các lý do sau đây:
          </Typography>

          <Grid container className=" text-sky-900 mt-10">
            <Grid item xs={12} md={6} lg={6} xl={6} className="flex flex-col items-center justify-center">
              <Typography className="w-3/4 text-lg font-semibold">Tốc độ</Typography>
              <Typography className="w-3/4 text-justify py-3">
                Nếu máy chủ gần với người sử dụng, người truy cập website sẽ truy cập chậm hơn so với những người ở xa máy chủ.
                Lý do là bởi Cloudflare sẽ giúp tăng tốc độ tải trang.
                Do đó, nếu người dùng cho website của bạn là người dùng nước ngoài, nên sử dụng dịch vụ DNS này
              </Typography>
            </Grid>

            <Grid item xs={12} md={6} lg={6} xl={6} className="flex flex-col items-center justify-center">
              <Typography className="w-3/4 text-lg font-semibold">Auto Minify</Typography>
              <Typography className="w-3/4 text-justify py-3">
                Giúp loại bỏ các ký tự không cần thiết ra khỏi mã nguồn mà không làm thay đổi chức năng của nó.
                Nổi bật chính là tự loại bỏ chú thích, khoảng trắng…
                nhằm giảm lượng dữ liệu chuyển đi và cải thiện được tốc độ tải trang
              </Typography>
            </Grid>

            <Grid item xs={12} md={6} lg={6} xl={6} className="flex flex-col items-center justify-center">
              <Typography className="w-3/4 text-lg font-semibold">Rocket Loader</Typography>
              <Typography className="w-3/4 text-justify py-3">
                Đây là dịch vụ DNS ưu tiên nội nội dung website được hiển thị trước, do đó sẽ trì hoãn tải tất cả JavaScript.
                Tuy nhiên, điều này có thể khiến mã JavaScript bị lỗi nếu như bạn không sử dụng lệnh jQuery.
                Do đó, nếu không thực sự cần thiết thì bạn nên tắt tính năng này.
              </Typography>
            </Grid>

            <Grid item xs={12} md={6} lg={6} xl={6} className="flex flex-col items-center justify-center">
              <Typography className="w-3/4 text-lg font-semibold">Bảo mật</Typography>
              <Typography className="w-3/4 text-justify py-3">
                Đây là yếu tố rất quan trọng bởi nó đảm bảo website của bạn luôn an toán trước những kẻ tấn công.
                Cloudflare có thể phát hiện và ngăn chặn sự tấn công của các hacker đến website của bạn
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  )
}