import Image from "next/image";
import ethereum from "@/app/images/cloudFlare/ethereum.png";
import ethereumStructure from "@/app/images/cloudFlare/Etherum-Gateway-thumbnail.png";
import { Box, Typography, Grid, Button, Paper, Container } from "@mui/material";
import {
  cloudflareEthereumPackages,
  cloudflareEthereum,
} from "app/libs/data";

export const metadata = {
  title: {
    absolute: "",
    default: "EcoCloud | Điện toán đám mây",
    template: "%s | Turbo AI Solution",
  },
  description:
    "More than 10 years of experience, Turbo Solutions specializes in providing leading cloud computing solutions and applications in Vietnam.",
};

export default function Ethereum() {
  return (
    <>
      <Box className="bg-white">
        <Paper className="rounded-none shadow-xl pt-10">
          <Grid container>
            <Grid
              item
              xs={12}
              md={6}
              className="px-4 md:pl-10">
              <Typography className="text-[2rem] text-orange-600 font-semibold">
                CloudFlare Ethereum Gateway?
              </Typography>
              <Typography py={1}>
                CloudFlare Ethereum Gateway là một dịch vụ được Cloudflare cung cấp.
                Dịch vụ này cho phép các nhà phát triển tạo và quản lý tài khoản Ethereum,
                thực hiện các giao dịch Ethereum và truy vấn thông tin từ blockchain Ethereum thông qua giao diện HTTP (API).
                Điều này giúp giảm độ trễ khi thực hiện các hoạt động trên blockchain,
                đồng thời cải thiện trải nghiệm người dùng.
              </Typography>
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              className="flex flex-col items-center justify-center">
              <Image
                src={ethereum}
                className="w-[50%] h-[80%] rounded-lg"
                alt="CloundFlareCDN"
              />
            </Grid>
          </Grid>
        </Paper>

        <Container className="container grid grid-cols-1 lg:grid-cols-3 gap-6 my-10">
          {cloudflareEthereum.slice(6, 12).map(item => {
            return (
              <div
                key={item.id}>
                <div className="content flex flex-col justify-center items-center text-center">
                  <Image src={item.image} alt="" width={50} height={50} className="rounded-full" />
                  <h3>{item.title}</h3>
                  <p className="desc md:text-[1rem]">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </Container>

        <Box className="themeHeroBackground py-10 text-white text-center shadow-xl">
          <Typography className="text-[1rem] sm:text-[1.5rem] ">
            Những lợi ích của CloudFlare Ethereum Gateway
          </Typography>
        </Box>
        <Image
          src={ethereumStructure}
          alt="performance"
          className="w-[100%] h-[80%]"
        />

        {/* BENEFITS */}
        <Paper className="rounded-none shadow-xl py-5 -mt-2">
          <Grid container>
            <Grid
              item
              xs={12}
              md={6}>
              {cloudflareEthereum.slice(0, 3).map(item => {
                return (
                  <Paper
                    key={item.id}
                    className="m-6 p-3">
                    <Typography className="text-sky-800 font-bold pb-3">
                      {item.title}
                    </Typography>
                    <Typography> {item.desc} </Typography>
                  </Paper>
                );
              })}
            </Grid>

            <Grid
              item
              xs={12}
              md={6}>
              {cloudflareEthereum.slice(3, 6).map(item => {
                return (
                  <Paper
                    key={item.id}
                    className="m-6 p-3">
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
          <Box
            my={5}
            sx={{ textAlign: "center" }}>
            <Typography className="text-[2rem] font-semibold text-sky-900">
              Các gói dịch vụ CloudFlare CDN
            </Typography>
          </Box>

          <Container className="container grid grid-cols-1 lg:grid-cols-3 gap-6 pb-10">
            {cloudflareEthereumPackages.map(item => {
              return (
                <div
                  key={item.id}
                  className="cardBox h-fit">
                  <div className="card">
                    <Image src={item.image} alt="" width={50} height={50} />
                    <div className="h4 my-10">
                      {item.title}

                      <p>...</p>
                    </div>

                    <div className="content">
                      <p className="desc leading-3 md:text-[2rem] lg:text-[2rem]">{item.desc}</p>
                      <Button
                        href="tel:0769999967"
                        type="button"
                        className="action">
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
