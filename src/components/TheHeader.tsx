"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Close, MenuRounded, KeyboardArrowDownRounded } from "@mui/icons-material";
import logoTurbo from "../../public/images/logoTurbo.png";
import Image from "next/image";
import { Box, Button, FormControl, Menu, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";

const navLinks = [
  { path: "/home", name: "trang chủ" },
  { path: "/about-us", name: "giới thiệu" },
  { path: "/our-services", name: "dịch vụ" },
  { path: "/software", name: "phần mềm" },
  { path: "/recruitment", name: "tuyển dụng" },
  { path: "/news", name: "tin tức" },
  { path: "/contact", name: "liên hệ" },
];
const subServicesLinks = [
  { path: "https://ecocloud.vn/cloud-server/", name: "cloud server" },
  { path: "https://ecocloud.vn/bang-gia-cloud-gpu-server/", name: "cpu server" },
  { path: "https://baas.ecocloud.vn/", name: "cloud backup" },
  { path: "https://ecocloud.vn/bang-gia-virtual-data-center/", name: "vitual data center" }
]
const subSoftwareLinks = [
  { path: "/microsoft-office", name: "microsoft office 365" },
  { path: "/google-workspace", name: "google workspace" },
  { path: "cloud-backup-recovery", name: "veeam backup & replication" }
]

const subSolutonLinks = [
  { path: "/private-cloud", name: "private cloud" },
  { path: "/cloud-backup-recovery", name: "backup & recovery" },
  { path: "/ai-smart-warning", name: "AI smart warning" },
  { path: "/ai-video-analytics", name: "AI video analytics" },
  { path: "/smart-cloud-camera", name: "smart cloud camera" }
]

export default function TheHeader() {
  const pathname = usePathname();
  const [navigation, setNavigation] = React.useState(false);

  function handleNavigation() {
    setNavigation(!navigation);
  }

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [anchorE2, setAnchorE2] = React.useState<null | HTMLElement>(null);
  const [anchorE3, setAnchorE3] = React.useState<null | HTMLElement>(null);
  const openService = Boolean(anchorEl);
  const openSoftware = Boolean(anchorE2);
  const openSolution = Boolean(anchorE3);
  const handleClickService = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseService = () => {
    setAnchorEl(null);
  };
  const handleClickSoftware = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorE2(event.currentTarget);
  };
  const handleCloseSoftware = () => {
    setAnchorE2(null);
  };
  const handleClickSolution = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorE3(event.currentTarget);
  };
  const handleCloseSolution = () => {
    setAnchorE3(null);
  };

  const [language, setLanguage] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value as string);
  };


  return (
    <header className="w-full fixed top-0 left-0 z-30 bg-white shadow-lg">
      <nav className="h-[10vh] flex justify-between items-center p-4 ">
        <div className="uppercase font-bold text-3xl text-amber-400 hover:text-amber-200">
          <Link href="/"><Image src={logoTurbo} className="w-28 h-10" alt="logo_turbo_solutions" /></Link>
        </div>
        {/* nav pc */}
        <div className="hidden text-[1rem] lg:flex justify-between items-center uppercase">
          {/* <Button><Link href="/home" className="uppercase p-3 hover:text-[#378CE7]">trang chủ</Link></Button> */}
          <Button><Link href="/about-us" className="uppercase p-3 hover:text-[#378CE7]">giới thiệu</Link></Button>

          <Button onClick={handleClickService} endIcon={<KeyboardArrowDownRounded />} className="uppercase p-3 hover:text-[#378CE7]">dịch vụ</Button>
          <Menu id="services" anchorEl={anchorEl} open={openService} onClose={handleCloseService} MenuListProps={{ 'aria-labelledby': 'basic-button', }} >
            {subServicesLinks.map((sub) => {
              return (
                <MenuItem key={sub.path}>
                  <Link href={sub.path} className="capitalize" target="_blank">{sub.name}</Link>
                </MenuItem>
              )
            })}
          </Menu>

          <Button onClick={handleClickSolution} endIcon={<KeyboardArrowDownRounded />} className="uppercase p-3 hover:text-[#378CE7]">giải pháp</Button>
          <Menu id="services" anchorEl={anchorE3} open={openSolution} onClose={handleCloseSolution} MenuListProps={{ 'aria-labelledby': 'basic-button', }} >
            {subSolutonLinks.map((sub) => {
              return (
                <MenuItem key={sub.path}>
                  <Link href={sub.path} className="capitalize" target="_blank">{sub.name}</Link>
                </MenuItem>
              )
            })}
          </Menu>

          <Button><Link href="/recruitment" className="uppercase p-3 hover:text-[#378CE7]">tuyển dụng</Link></Button>
          <Button><Link href="/news" className="uppercase p-3 hover:text-[#378CE7]">tin tức</Link></Button>
          <Button><Link href="/contact" className="uppercase p-3 hover:text-[#378CE7]">liên hệ</Link></Button>
          {/* <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <Select value={language} label="Language" onChange={handleChange} >Language
                <MenuItem value="English">English</MenuItem>
                <MenuItem value="Vietnam">Vietnam</MenuItem>
              </Select>
            </FormControl>
          </Box> */}
        </div>

        {/* Handle the menu icon */}
        <div
          className="flex lg:hidden z-10"
          onClick={handleNavigation}>
          {navigation ? (
            <Close
              fontSize="medium"
              className="text-[#002D62] hover:opacity-80 cursor-pointer"
            />
          ) : (
            <MenuRounded
              fontSize="medium"
              className="text-[#002D62] hover:opacity-80 cursor-pointer"
            />
          )}
        </div>

        {/* Smaller screen */}
        <div
          className={
            navigation
              ? "lg:hidden absolute top-[12vh] right-0 left-0 bottom-0 bg-slate-200 w-full h-screen ease-in duration-500"
              : "lg:hidden absolute top-[12vh] right-0 left-[-100%] bottom-0 bg-slate-200 w-full h-screen ease-in duration-500"
          }>
          {/* navbar links */}
          <ul className="text-center uppercase text-[1rem] fond-bold mt-6">
            <li onClick={handleNavigation}>
              {navLinks.map(link => {
                const isActive = pathname.startsWith(link.path);
                return (
                  <Link
                    key={link.path}
                    href={link.path}
                    className={
                      isActive
                        ? "text-amber-400 font-bold pb-4 flex flex-col justify-center items-center"
                        : "pb-4  hover:text-amber-400 hover:text-[1.5rem] duration-300 flex flex-col justify-center items-center"
                    }>
                    {link.name}
                  </Link>
                );
              })}
            </li>
          </ul>
        </div>
      </nav>
    </header >
  );
}
