"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Box, Container, Grid, Tooltip, Typography } from "@mui/material";
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
    <Container className="max-w-full text-white py-5 h-auto text-center">
      <Grid container>
        <Grid item xs={12} md={4} lg={4}>
          <Box>
            <Typography className="text-lg font-thin text-left mb-5">CÔNG TY GIẢI PHÁP CÔNG NGHỆ TURBO</Typography>
            <div className="flex my-1">
              <LocationOnRounded fontSize="small" />
              <Typography className="font-thin px-2">Số 10 Phổ Quang, Q.Tân Bình, TP.HCM</Typography>
            </div>

            <div className="flex my-1">
              <MailOutlineRounded fontSize="small" />
              <a href="mailto:info@turbo.vn" className="font-thin px-2">info@turbo.vn</a>
            </div>

            <div className="flex my-1">
              <PhoneCallbackRounded fontSize="small" />
              <Typography className="font-thin px-2">076.9999.967</Typography>
            </div>
          </Box>
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <Typography paragraph className="text-lg font-thin text-center">
            &quot; Với 10 năm kinh nghiệm, công ty Turbo Solutions chuyên cung cấp các giải pháp, ứng dụng điện toán đám mây hàng đầu Việt Nam. &quot;
          </Typography>
          <Box className="flex justify-center my-5">
            <Tooltip title="Twitter"><Link href="/" target="_blank" className="mx-1" ><Twitter /></Link></Tooltip>
            <Tooltip title="Youtube"><Link href="https://www.youtube.com/@turbosolutions506" target="_blank" className="mx-1"><YouTube /></Link></Tooltip>
            <Tooltip title="Facebook"><Link href="https://www.facebook.com/ecocloud.vn" target="_blank" className="mx-1"><Facebook /></Link></Tooltip>
            <Tooltip title="LinkedIn"><Link href="/" target="_blank" className="mx-1"><LinkedIn /></Link></Tooltip>
          </Box>
        </Grid>

        <Grid item xs={12} md={4} lg={4}>
          {/* <Box sx={{ display: "flex", justifyContent: "center", borderRadius: "8px", mt: 1 }}>
            <iframe
              className="rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11084.860644930453!2d106.64643197835125!3d10.804413718502921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175290697b3920d%3A0x917e880f475ddaa8!2sC%C3%94NG%20TY%20TURBO%20SOLUTIONS!5e0!3m2!1svi!2s!4v1712499779716!5m2!1svi!2s"
              width={300} height={200}></iframe>
          </Box> */}

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box mx={2}>
              <Typography className="text-lg font-normal">Giải pháp AI</Typography>
              {solutonLinks.map((link) => {
                return (
                  <div key={link.name}>
                    <Link className="text-sm font-thin hover:text-[1rem] duration-500" href={link.path}>{link.name}</Link>
                  </div>
                )
              })}
            </Box>
            <Box mx={2}>
              <Typography className="text-lg font-normal">Cloud Computing</Typography>
              {cloudLinks.map((link) => {
                return (
                  <div key={link.name}>
                    <Link className="text-sm font-thin hover:text-[1rem] duration-500" href={link.path}>{link.name}</Link>
                  </div>
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
  );
}
