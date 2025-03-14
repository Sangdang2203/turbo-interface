"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import EcoCloud from "@/images/logoTurbo.png";
import { Button, Menu, MenuItem } from "@mui/material";
import { servicesLinks, solutionLinks } from "@/app/libs/data";
import {
  Close,
  MenuRounded,
  KeyboardArrowDownRounded,
  HomeRounded,
  ContactPhoneRounded,
  BallotRounded,
  ModelTrainingRounded,
  InfoRounded,
} from "@mui/icons-material";

export default function TheHeader() {
  const [navigation, setNavigation] = React.useState(false);

  function handleNavigation() {
    setNavigation(!navigation);
  }

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [anchorE2, setAnchorE2] = React.useState<null | HTMLElement>(null);
  const openService = Boolean(anchorEl);
  const openSolution = Boolean(anchorE2);

  const handleOpenService = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseService = () => {
    setAnchorEl(null);
  };
  const handleOpenSolution = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorE2(event.currentTarget);
  };
  const handleCloseSolution = () => {
    setAnchorE2(null);
  };

  return (
    <header className="w-full fixed top-0 left-0 z-30 bg-white shadow-lg">
      <nav className="h-[10vh] flex justify-between items-center p-4 ">
        <div className=" font-bold text-3xl text-amber-400 hover:text-amber-200">
          <Link href="/">
            <Image
              src={EcoCloud}
              className="w-28 h-10"
              title="Trang chủ"
              alt="logo_turbo_solutions"
            />
          </Link>
        </div>

        {/* navbar for PC */}
        <div className="hidden text-[1rem] lg:flex justify-between items-center ">
          <Button href="/trang-chu" className="navLink">
            trang chủ
          </Button>
          <Button href="/gioi-thieu" className=" navLink active">
            giới thiệu
          </Button>

          <Button
            onClick={handleOpenService}
            endIcon={<KeyboardArrowDownRounded />}
            className="navLink py-3"
          >
            dịch vụ
          </Button>
          <Menu
            id="services"
            anchorEl={anchorEl}
            open={openService}
            onClose={handleCloseService}
            MenuListProps={{ "aria-labelledby": "basic-button" }}
          >
            {servicesLinks.map((sub) => {
              return (
                <MenuItem
                  key={sub.path}
                  onClick={() => {
                    handleCloseSolution();
                    handleNavigation();
                  }}
                >
                  <Link href={sub.path} className="navSubLink">
                    {sub.name}
                  </Link>
                </MenuItem>
              );
            })}
          </Menu>

          <Button
            onClick={handleOpenSolution}
            endIcon={<KeyboardArrowDownRounded />}
            className=" navLink "
          >
            giải pháp
          </Button>
          <Menu
            id="services"
            anchorEl={anchorE2}
            open={openSolution}
            onClose={handleCloseSolution}
            MenuListProps={{ "aria-labelledby": "basic-button" }}
          >
            {solutionLinks.map((sub) => {
              return (
                <MenuItem
                  key={sub.path}
                  onClick={() => {
                    handleCloseSolution();
                    handleNavigation();
                  }}
                >
                  <Link href={sub.path} className="navSubLink">
                    {sub.name}
                  </Link>
                </MenuItem>
              );
            })}
          </Menu>

          <Button href="/tin-tuc" className=" navLink ">
            tin tức
          </Button>
          <Button href="/lien-he" className=" navLink ">
            liên hệ
          </Button>
        </div>

        {/* Handle the menu icon */}
        <div className="flex lg:hidden z-50" onClick={handleNavigation}>
          {navigation ? (
            <Close
              fontSize="large"
              className="text-[#002D62] hover:opacity-80 cursor-pointer z-50"
            />
          ) : (
            <MenuRounded
              fontSize="large"
              className="text-[#002D62] hover:opacity-80 cursor-pointer z-50"
            />
          )}
        </div>

        {/* Smaller screen: IPAD, PHONE */}
        <div
          className={
            navigation
              ? "lg:hidden absolute top-[10vh] right-0 left-0 bottom-0 bg-slate-200 w-full h-screen ease-in duration-300"
              : "lg:hidden absolute top-[10vh] right-0 left-[-100%] bottom-0 bg-slate-200 w-full h-screen ease-in duration-300"
          }
        >
          {/* navbar links */}
          <ul className="text-center text-[1rem] fond-bold mt-6">
            <li className="text-[1rem] flex flex-col justify-center items-start px-[25%]">
              <Button
                startIcon={
                  <HomeRounded className="opacity-60" fontSize="small" />
                }
                href="/trang-chu"
                className="navLink "
              >
                trang chủ
              </Button>
              <Button
                startIcon={
                  <InfoRounded className="opacity-60" fontSize="small" />
                }
                href="/gioi-thieu"
                className="navLink "
              >
                giới thiệu
              </Button>

              <Button
                startIcon={
                  <ModelTrainingRounded
                    className="opacity-60"
                    fontSize="small"
                  />
                }
                onClick={handleOpenService}
                className="navLink "
              >
                dịch vụ
              </Button>
              <Menu
                id="services"
                anchorEl={anchorEl}
                open={openService}
                onClick={handleCloseService}
                MenuListProps={{ "aria-labelledby": "basic-button" }}
              >
                {servicesLinks.map((sub) => {
                  return (
                    <MenuItem
                      key={sub.path}
                      onClick={() => {
                        handleCloseService();
                        handleNavigation();
                      }}
                    >
                      <Link href={sub.path} className="navSubLink">
                        {sub.name}
                      </Link>
                    </MenuItem>
                  );
                })}
              </Menu>

              <Button
                startIcon={
                  <BallotRounded className="opacity-60" fontSize="small" />
                }
                onClick={handleOpenSolution}
                className="navLink "
              >
                giải pháp
              </Button>
              <Menu
                id="services"
                anchorEl={anchorE2}
                open={openSolution}
                onClick={() => {
                  handleCloseSolution();
                  handleNavigation();
                }}
                MenuListProps={{ "aria-labelledby": "basic-button" }}
              >
                {solutionLinks.map((sub) => {
                  return (
                    <MenuItem key={sub.path} onClick={handleCloseSolution}>
                      <Link href={sub.path} className="navSubLink">
                        {sub.name}
                      </Link>
                    </MenuItem>
                  );
                })}
              </Menu>

              <Button
                startIcon={
                  <ContactPhoneRounded
                    className="opacity-60"
                    fontSize="small"
                  />
                }
                href="/lien-he"
                className="navLink "
              >
                liên hệ
              </Button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
