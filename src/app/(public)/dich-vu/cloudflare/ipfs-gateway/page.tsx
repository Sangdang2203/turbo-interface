import Image from "next/image";
import cloudFlareIpfs from "@/images/cloudFlare/IPFS-cover-a.png";
import IpfsStructure from "@/images/cloudFlare/Ipfs_structure.png";
import { Box, Typography, Grid, Button, Paper, Container } from "@mui/material";
import { cloudflareIpfs, cloudflareIpfsPackages } from "app/libs/data";

export const metadata = {
  title: {
    absolute: "",
    default: "EcoCloud | Điện toán đám mây",
    template: "%s | Turbo AI Solution",
  },
  description:
    "More than 10 years of experience, Turbo Solutions specializes in providing leading cloud computing solutions and applications in Vietnam.",
};

export default function IpfsGateway() {
  return (
    <>
      <Box className="bg-white">
        <Paper className="rounded-none shadow-xl py-10">
          <Grid container>
            <Grid item xs={12} md={6} className="px-4 md:pl-10">
              <Typography className="text-[2rem] text-orange-600 font-semibold">
                IPFS Gateway là gì?
              </Typography>
              <Typography py={1}>
                IPFS là lớp lưu trữ của Web 3.0. CloudFlare IPFS Gateway kết nối
                web 2.0 và web 3.0 bằng cách sử dụng cổng IPFS có thể truy cập
                qua HTTP. Người dùng dễ dàng truy xuất và phân phối nội dung
                IPFS thông qua các miền tùy chỉnh. Người dùng có thể yên tâm về
                bảo mật, độ tin cậy và hiệu suất của mạng CloudFlare
              </Typography>
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              className="flex flex-col items-center justify-center"
            >
              <Image
                src={cloudFlareIpfs}
                className="w-[80%] h-auto rounded-lg"
                alt="cloudFlareIpfs"
              />
            </Grid>
          </Grid>
        </Paper>

        <Box className="themeHeroBackground py-10 text-white text-center shadow-xl">
          <Typography className="text-[1rem] sm:text-[1.5rem] ">
            Những lợi ích của CloudFlare IPFS Gateway
          </Typography>
        </Box>

        <Paper className="rounded-none shadow-xl py-5">
          <Grid container>
            <Grid item xs={12} md={4}>
              {cloudflareIpfs.slice(0, 2).map((item) => {
                return (
                  <Paper key={item.id} className="m-6 p-3">
                    <Typography className="text-sky-800 font-bold pb-3">
                      {item.title}
                    </Typography>
                    <Typography> {item.desc} </Typography>
                  </Paper>
                );
              })}
            </Grid>

            <Grid item xs={12} md={4} className="flex justify-center">
              <Image
                src={IpfsStructure}
                alt="performance"
                className="w-[100%] h-[80%]"
              />
            </Grid>

            <Grid item xs={12} md={4}>
              {cloudflareIpfs.slice(2, 4).map((item) => {
                return (
                  <Paper key={item.id} className="m-6 p-3">
                    <Typography className="text-sky-800 font-bold pb-3">
                      {item.title}
                    </Typography>
                    <Typography> {item.desc} </Typography>
                  </Paper>
                );
              })}
            </Grid>
          </Grid>
        </Paper>

        <Box>
          <Box my={5} sx={{ textAlign: "center" }}>
            <Typography className="text-[2rem] font-semibold text-sky-900">
              Các gói dịch vụ CloudFlare CDN
            </Typography>
          </Box>

          <Container className="container grid grid-cols-1 lg:grid-cols-3 gap-6 pb-10">
            {cloudflareIpfsPackages.map((item) => {
              return (
                <div key={item.id} className="cardBox h-fit">
                  <div className="card">
                    <Image src={item.image} alt="" width={50} height={50} />
                    <div className="h4 my-10">
                      {item.title}

                      <p>...</p>
                    </div>

                    <div className="content">
                      <p className="desc leading-3 md:text-[2rem] lg:text-[2rem]">
                        {item.desc}
                      </p>
                      <Button
                        href="tel:0769999967"
                        type="button"
                        className="action"
                      >
                        Đăng ký
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </Container>
        </Box>
      </Box>
    </>
  );
}
