
import centralized_agent_deployment_and_management from "../../../images/veemBackup/centralized-agent-deployment-and-management.png.web_.1280.1280.webp"
import veemBackup from "../../../images/veemBackup/veeam-1600x800-og-vbr.png"
import veeam_img01 from "../../../images/veemBackup/veeam_img01-1.png"
import icon_01 from "../../../images/veemBackup/icon_01.png"
import icon_02 from "../../../images/veemBackup/icon_02.png"
import veeam_azure from "../../../images/veemBackup/veeam-azure-img01.png"
import manager_interface from "../../../images/veemBackup/manager_interface.png"
import { Box, Button, Card, CardActions, CardContent, Container, Grid, Paper, Typography } from "@mui/material";
import Image from "next/image";

const CloudBackupPage = () => {
  return (
    <Box>

      <Box py={10} sx={{ textAlign: "center", marginX: "auto" }}>
        <Typography className="text-[2rem] text-center text-sky-900 font-semibold">Giải pháp sao lưu, phục hồi và quản lý dữ liệu trên đám mây</Typography>
        <Typography className="text-[1.5rem] w-3/4 mx-auto leading-relaxed text-gray-500">Giải pháp Cloud Backup được xây dựng để sao lưu và bảo vệ máy chủ, máy ảo, dữ liệu quan trọng của doanh nghiệp.</Typography>
        <Container className="my-5">
          <iframe
            className="rounded-xl mx-auto"
            width="100%" height="600px"
            title="Vaidio  AI Vision 7.0"
            src="https://www.youtube.com/embed/tLULNUPlFO0?si=qZlMCWYCM-Lh8QP7"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen></iframe>
        </Container>
      </Box>

      <Paper className="rounded-none">
        <Box my={5}>
          <Box className="">
            <Grid container>
              <Grid item xs={12} md={6} className="flex flex-col items-center justify-center">
                <Box textAlign="center" px={3}>
                  <Typography className="text-[1.5rem] text-green-600">Giải pháp số #1 để sao lưu dữ liệu quan trọng</Typography>
                  <Typography className="text-lg text-sky-900">Nền tảng sao lưu đám mây dành cho tất cả các ứng dụng và dữ liệu, giúp đạt được thời gian sao lưu ngắn hơn và giảm chi phí hoạt động tối ưu.
                    Thông qua bảng điều khiển quản lý với thiết kế đơn giản, bạn có thể dễ dàng sao lưu, phục hồi và mở rộng nhanh chóng.</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={6} >
                <Image src={centralized_agent_deployment_and_management} className="w-full h-full rounded-xl" alt="centralized_agent_deployment_and_management" />
              </Grid>
            </Grid>
          </Box>
        </Box>

        <Box my={5}>
          <Box className="">
            <Grid container>
              <Grid item xs={12} md={6} >
                <Image src={veeam_img01} className="w-full h-full rounded-xl" alt="centralized_agent_deployment_and_management" />
              </Grid>
              <Grid item xs={12} md={6} className="flex flex-col items-center justify-center">
                <Box textAlign="center" px={3}>
                  <Typography className="text-[1.5rem] text-green-600">Sao lưu dữ liệu đám mây an toàn và hiệu quả</Typography>
                  <Typography className="text-lg text-sky-900">
                    Dễ dàng sao lưu và đồng bộ máy chủ vật lý và VM (VMware | Hyper-V) mà không cần xây dựng và duy trì cơ sở hạ tầng ngoài phức tạp.
                    Veeam Cloud Connect cung cấp giải pháp tích hợp đầy đủ, nhanh chóng và an toàn để sao lưu và đồng bộ đến kho lưu trữ đám mây.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>

        <Box className="" my={5}>
          <Grid container>

            <Grid item xs={12} md={6} className="flex flex-col items-center justify-center">
              <Box textAlign="center" px={3}>
                <Typography className="text-[1.5rem] text-green-600">Khôi phục nhanh như chớp với Veeam Backup & Recovery</Typography>
                <Typography className="text-lg text-sky-900">
                  Khôi phục nhanh chóng các dữ liệu, máy ảo, và ứng dụng, đảm bảo tiêu chuẩn thời gian khôi phục thấp.
                  Phục hồi thảm họa toàn bộ đến site phụ trên nền tảng đám mây chỉ với một vài click thông qua trình duyệt
                  bảo mật, hay chuyển đổi ngay lập tức một vài VM được chọn.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={6} >
              <Image src={veeam_azure} className="w-full h-full rounded-xl" alt="veeam_azure" />
            </Grid>

          </Grid>
        </Box>
      </Paper>

      <Box my={5} sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
        <Typography className="p-3 bg-green-50 text-green-500 uppercase w-fit rounded-full">Lợi ích của Cloud Backup</Typography>
        <Typography className="my-3 text-[2rem] w-3/4 text-sky-900">Tại Turbo Solutions, chúng tôi luôn cam kết sẽ mang lại những giá trị tốt nhất cho khách hàng qua những dịch vụ và công nghệ tối ưu.</Typography>
      </Box>

      <Container className="mb-10">
        <Card className="rounded-xl">
          <Grid container>

            <Grid item xs={12} md={6} lg={7} xl={7} className="flex flex-col items-center justify-center">
              <Box textAlign="center" my={3}>
                <Typography className="text-[4rem] text-sky-600">+100%</Typography>
                <Typography className="text-xl text-gray-400">an toàn dữ liệu cho doanh nghiệp</Typography>
              </Box>

              <Box my={3} display="flex" justifyContent="space-around" width="60%">
                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                  <Image src={icon_01} className="w-16 h-16" alt=""></Image>
                  <Typography className="font-semibold">Veeam B&R</Typography>
                </Box>

                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                  <Image src={icon_02} className="w-16 h-16" alt=""></Image>
                  <Typography className="font-semibold">Cloud Backup Storage</Typography>
                </Box>
              </Box>

              <Button className="btn-grad rounded-full w-1/3 my-3 hover:opacity-80" href="/contact" target="_blank">Sử dụng ngay</Button>
            </Grid>

            <Grid item xs={12} md={6} lg={5} xl={5} className="bg-sky-600 py-5 px-auto">
              <Grid pl={8}>
                <Box>
                  <Typography className="text-[1.3rem] font-semibold text-white">Băng thông không giới hạn</Typography>
                  <Typography className="w-3/4 text-white">Không tính phí truyền dữ liệu sao lưu và khôi phục, giúp bạn thực hiện nhiều lịch sao lưu nhất có thể.</Typography>
                </Box>
                <hr className="my-5" />

                <Box>
                  <Typography className="text-[1.3rem] font-semibold text-white">Hỗ trợ cài đặt, triển khai</Typography>
                  <Typography className="w-3/4 text-white">Các chuyên gia dữ liệu của chúng tôi sẽ giúp bạn cài đặt và triển khai nhanh chóng.</Typography>
                </Box>
                <hr className="my-5" />

                <Box>
                  <Typography className="text-[1.3rem] font-semibold text-white">Cập nhật báo cáo tự động</Typography>
                  <Typography className="w-3/4 text-white">Các báo cáo tóm tắt được gởi tự động theo lịch trình giúp việc quản lý công việc sao lưu trở nên dễ dàng.</Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </Container>

      <Container sx={{ position: "relative", mb: 5 }}>
        <Image src={veemBackup} title="Veeam Backup" className="w-full h-auto rounded-lg" alt="Veeam Backup"></Image>

        <Box width="100%" sx={{ position: "absolute", bottom: "4px", marginX: "auto", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
          <Typography className="text-[2rem] text-blue-900 text-center font-semibold">Bạn chưa backup dữ liệu?</Typography>
          <Typography className="text-[1.5rem] text-center mx-auto ">Liên hệ ngay với chúng tôi để sao lưu dữ liệu đám mây miễn phí</Typography>
          <Button href="/contact" variant="contained" className="btn-astro hover:duration-700 hover:opacity-80" >Kết nối ngay với chúng tôi</Button>
        </Box>
      </Container>

      <Paper className="mb-5 rounded-none">
        <Typography className="text-[2rem] text-blue-900 text-center font-semibold py-5">Giao diện quản lý Cloud Backup</Typography>
        <Container>
          <Typography className="text-[1rem] font-light py-3">
            <b>Bảo vệ và phát triển doanh nghiệp cùng với Turbo Solutions</b>.
            Không cần phải lo lắng về việc sao lưu dữ liệu, giải pháp Cloud Backup giúp bạn tiết kiệm thời gian và tiền bạc,
            giúp bạn tập trung ít hơn vào việc sao lưu và tập trung nhiều hơn vào việc thúc đẩy phát triển doanh nghiệp.</Typography>
          <Image className="w-full h-auto rounded-lg" src={manager_interface} title="Giao diện quản lý Cloud Backup" alt="Giao diện quản lý Cloud Backup" />
        </Container>
      </Paper>


      <Box className="py-10">
        <Typography className="text-[2rem] text-sky-900 text-center font-semibold">Các thông tin thường gặp về Cloud Backup</Typography>

        <Grid container pt={5}>
          <Grid item xs={12} md={6} className="flex flex-col items-center justify-center text-sky-900">
            <Typography className="w-3/4 text-xl font-semibold">Cloud Backup là gì?</Typography>
            <Typography className="w-3/4">Sao lưu đám mây, sao lưu trực tuyến, hoặc sao lưu từ xa là thuật ngữ chỉ về
              công nghệ mới, cung cấp cách sao lưu dữ liệu của bạn thông qua dịch vụ của nhà cung cấp sao lưu đám mây.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6} className="flex flex-col items-center justify-center text-sky-900">
            <Typography className="w-3/4 text-xl font-semibold">Cloud Backup an toàn như thế nào?</Typography>
            <Typography className="w-3/4">
              Mục đích chính của sao lưu đám mây là bảo vệ tất cả dữ liệu của bạn, vì vậy mã hóa đầu cuối là một tính năng
              quan trọng được tích hợp sẵn.
            </Typography>
          </Grid>
        </Grid>

        <Grid container py={5}>
          <Grid item xs={12} md={6} className="flex flex-col items-center justify-center text-sky-900">
            <Typography className="w-3/4 text-xl font-semibold">Vì sao nên sử dụng Cloud Backup?</Typography>
            <Typography className="w-3/4">
              Sử dụng Cloud Backup là một cách kinh tế và an toàn để bảo vệ tất cả dữ liệu.
              Khi máy tính nhiễm virus hoặc ransomware, bạn sẽ luôn có các dữ liệu quan trọng mà bạn đã sao lưu trực tuyến.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6} className="flex flex-col items-center justify-center text-sky-900">
            <Typography className="w-3/4 text-xl font-semibold">Các hạn chế dữ liệu của dịch vụ Cloud Backup là gì?</Typography>
            <Typography className="w-3/4">
              Chúng tôi không đặt bất kỳ giới hạn nào trên các tệp dữ liệu. Bạn có thể lưu trữ nhiều hoặc ít tùy theo nhu cầu của mình.
              Bạn cũng có thể sao lưu nhiều phiên bản với băng thông không hạn chế.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box >
  )
}

export default CloudBackupPage;