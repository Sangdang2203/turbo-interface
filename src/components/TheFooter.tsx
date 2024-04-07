"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Box, Container, Grid, Tooltip, Typography } from "@mui/material";
import { Twitter, YouTube, LinkedIn, Facebook } from "@mui/icons-material";


const socialLinks = [
  { path: "", name: "Twitter", icon: <Twitter fontSize="large" /> },
  { path: "", name: "Youtube", icon: <YouTube fontSize="large" /> },
  { path: "", name: "Facbook", icon: <Facebook fontSize="large" /> },
  { path: "", name: "Linkedin", icon: <LinkedIn fontSize="large" /> }
]

export default function TheFooter() {
  const pathname = usePathname();
  return (
    <Container className="max-w-full bg-slate-800 text-amber-400 py-5 h-auto text-center">
      <Grid container>
        <Grid item xs={12} md={4} lg={4}>
          <Typography paragraph className="text-lg font-thin font-serif">
            We’re a global innovation firm, imagining tomorrow’s products, services and businesses – and creating them today.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} lg={4}>

        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <Typography className="text-lg font-serif">
            Discover what’s next. Subscribe today.
          </Typography>
          <Box className="flex justify-center my-2">
            <Tooltip title="Twitter"><Link href="" className="mx-1"><Twitter fontSize="medium" /></Link></Tooltip>
            <Tooltip title="Twitter"><Link href="" className="mx-1"><YouTube fontSize="medium" /></Link></Tooltip>
            <Tooltip title="Twitter"><Link href="" className="mx-1"><Facebook fontSize="medium" /></Link></Tooltip>
            <Tooltip title="Twitter"><Link href="" className="mx-1"><LinkedIn fontSize="medium" /></Link></Tooltip>
          </Box>
        </Grid>
      </Grid>

      <Typography className="text-center text-[0.75rem] mt-8 text-white">
        Designed by Turbo. Copyright © 2024
      </Typography>
    </Container>
  );
}
