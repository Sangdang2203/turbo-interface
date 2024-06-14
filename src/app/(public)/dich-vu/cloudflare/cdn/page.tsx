import Image from "next/image";
import cndStructure from "@/app/images/cloudFlare/Cloudflare-cdn-cau-truc.jpg";
import CloundFlareCDN from "@/app/images/cloudFlare/cloud-cdn.png";
import { Box, Typography, Grid, Button, Paper, Container, FormControlLabel, Switch, Divider } from "@mui/material";
import {
  cloudflareCdnPackages,
  cloudflareCDN,
  cloudflareCdnServices,
} from "app/libs/data";
import CustomDialog from "@/components/ContactPopup";

export const metadata = {
  title: {
    absolute: "",
    default: "EcoCloud | Điện toán đám mây",
    template: "%s | Turbo AI Solution",
  },
  description:
    "More than 10 years of experience, Turbo Solutions specializes in providing leading cloud computing solutions and applications in Vietnam.",
};

export default function clouddlareCDN() {
  return (
    <>
      <Box className='bg-white'>
        <Paper className="rounded-none shadow-xl py-10">
          <Grid container>
            <Grid
              item
              xs={12}
              md={6}
              className="px-4 md:pl-10">
              <Typography className="text-[2rem] text-orange-600 font-semibold">
                CloudFlare CDN là gì?
              </Typography>
              <Typography py={1}>
                Cloudflare CDN cung cấp khả năng phân phối nội dung tĩnh và động cực nhanh qua mạng toàn cầu của chúng tôi.
                Thực hiện quyền kiểm soát chính xác đối với cách nội dung của bạn được lưu vào bộ nhớ đệm,
                giảm chi phí băng thông và tận dụng tính năng bảo vệ DDoS không định lượng được tích hợp sẵn.
              </Typography>
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              className="flex flex-col items-center justify-center">
              <Image
                src={CloundFlareCDN}
                className="w-[50%] h-auto rounded-lg"
                alt="CloundFlareCDN"
              />
            </Grid>
          </Grid>
        </Paper>

        <Container className="container grid grid-cols-1 lg:grid-cols-3 gap-6 my-10">
          {cloudflareCdnServices.map(item => {
            return (
              <div
                key={item.id}>
                <div className="content flex flex-col justify-center items-center">
                  <Image src={item.icon} alt="" width={50} height={50} className="rounded-full"></Image>
                  <h2>{item.title}</h2>
                  <p className="desc md:text-[1rem]">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </Container>

        <Box className="themeHeroBackground py-10 text-white text-center shadow-xl">
          <Typography className="text-[1rem] sm:text-[1.5rem] ">
            Những lợi ích của CloudFlare CDN
          </Typography>
        </Box>

        {/* BENEFITS */}
        <Paper className="rounded-none shadow-xl py-5">
          <Grid container>
            <Grid
              item
              xs={12}
              md={4}>
              {cloudflareCDN.slice(0, 3).map(item => {
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
              md={4}
              className="flex justify-center">
              <Image
                src={cndStructure}
                alt="performance"
                className="w-[100%] h-[80%]"
              />
            </Grid>

            <Grid
              item
              xs={12}
              md={4}>
              {cloudflareCDN.slice(3, 6).map(item => {
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
          <Box>
            <Box
              my={5}
              sx={{ textAlign: "center" }}>
              <Typography className="text-[2rem] font-semibold text-sky-900">
                Các gói dịch vụ CloudFlare CDN
              </Typography>
            </Box>

            <Container className="grid sm:grid-cols-2 xl:grid-cols-4 gap-3 text-center">
              {cloudflareCdnPackages.map(item => {
                return (
                  <div
                    key={item.id}
                    className="service-card">
                    <div className="header">
                      <span className="title">{item.title}</span>
                    </div>
                    <ul className="lists">
                      {item.details.map(detail => {
                        return (
                          <li
                            key={detail.name}
                            className="list">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor">
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"></path>
                            </svg>
                            <span className="text-[14px]">{detail.name}</span>
                          </li>
                        );
                      })}
                    </ul>
                    <Button
                      href="tel:0769999967"
                      type="button"
                      className="action">
                      Đăng ký
                    </Button>
                  </div>
                );
              })}
            </Container>
          </Box>
        </Box>
      </Box>
    </>
  );
}
