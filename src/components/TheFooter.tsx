"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import { Box, Container, Grid, Tooltip, Typography, Button } from "@mui/material";
import { Twitter, YouTube, LinkedIn, Facebook, LocationOnRounded, MailOutlineRounded, PhoneCallbackRounded } from "@mui/icons-material";

const solutonLinks = [
  { path: "https://v2.aivisionviet.vn/quan-ly-tap-trung/", name: "AI Quản lý tập trung" },
  { path: "https://v2.aivisionviet.vn/trich-xuat-video-camera/", name: "AI video search" },
  { path: "https://v2.aivisionviet.vn/vaidio-data/", name: "AI Database" },
  { path: "/smart-cloud-camera", name: "Smart Cloud Camera" },
];
const cloudLinks = [
  { path: "/google-workspace", name: "Google Workspace" },
  { path: "/microsoft-365", name: "Microsoft 365" },
  { path: "/private-cloud", name: "Private Cloud" },
  { path: "/cloud-backup-recovery", name: "Cloud Backup & Recovery" }
]

export default function TheFooter() {
  const pathname = usePathname();
  return (
    <>
      <Box className="bg-sky-100 text-center">
        <Button className="font-bold text-[1.5rem]" startIcon={<PhoneInTalkIcon fontSize="large" />}>Hotline: +84 76 9999 967</Button>
      </Box>
      <Container className="max-w-full text-white py-5 h-auto text-center background-footer">
        <Grid container>
          {/* <Grid item xs={12} md={4} lg={4}>
            <Box>
              <Typography className="text-lg font-thin text-left mb-5">CÔNG TY GIẢI PHÁP CÔNG NGHỆ TURBO</Typography>
              <div className="flex my-1">
                <LocationOnRounded fontSize="small" />
                <Typography className="font-thin px-2">Số 10 Phổ Quang, Q.Tân Bình, TP.HCM</Typography>
              </div>

              <div className="flex my-1">
                <MailOutlineRounded fontSize="small" />
                <a href="mailto:info@turbo.vn" className="text-white font-thin px-2 no-underline">info@turbo.vn</a>
              </div>

              <div className="flex my-1">
                <PhoneCallbackRounded fontSize="small" />
                <Link href="tel:0769999967" className="font-thin no-underline text-white px-2">076.9999.967</Link>
              </div>
            </Box>
          </Grid> */}
          <Grid item xs={12} md={6}>
            <Typography paragraph className="text-lg font-thin text-center">
              &quot; Với 10 năm kinh nghiệm, công ty Turbo Solutions chuyên cung cấp các giải pháp, ứng dụng điện toán đám mây hàng đầu Việt Nam. &quot;
            </Typography>
            <Box className="flex justify-center my-5">
              <Tooltip title="Twitter"><Link href="/" target="_blank" className="mx-1" ><Twitter color="info" /></Link></Tooltip>
              <Tooltip title="Youtube"><Link href="https://www.youtube.com/@turbosolutions506" target="_blank" className="mx-1"><YouTube color="info" /></Link></Tooltip>
              <Tooltip title="Facebook"><Link href="https://www.facebook.com/ecocloud.vn" target="_blank" className="mx-1"><Facebook color="info" /></Link></Tooltip>
              <Tooltip title="LinkedIn"><Link href="/" target="_blank" className="mx-1"><LinkedIn color="info" /></Link></Tooltip>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>

            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Box mx={2}>
                <Typography className="text-lg uppercase"> giải pháp </Typography>
                {solutonLinks.map((link) => {
                  return (
                    <Box key={link.name}>
                      <Link className="text-sm no-underline text-white font-thin hover:text-yellow-500 duration-500" href={link.path}>{link.name}</Link>
                    </Box>
                  )
                })}
              </Box>
              <Box mx={2}>
                <Typography className="text-lg uppercase">dịch vụ</Typography>
                {cloudLinks.map((link) => {
                  return (
                    <Box key={link.name}>
                      <Link className="text-sm no-underline text-white font-thin hover:text-yellow-500 duration-500" href={link.path}>{link.name}</Link>
                    </Box>
                  )
                })}
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Typography className="text-center text-[0.75rem] mt-8 text-white">
          Designed by Turbo. Copyright © 2024
        </Typography>
      </Container>
    </>

  );
}
