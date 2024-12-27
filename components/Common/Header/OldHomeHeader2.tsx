"use client";

import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { useState } from "react";

import Container from "@/components/Common/Container";

import Button from "../Button";
import FlexBox from "../FlexBox";

export function OldHomeHeader2() {
  const navLinks = [
    {
      label: "Share On Social",
      href: "#",
    },
    {
      label: "Legal",
      href: "#",
    },
    {
      label: "Login",
      href: "/auth/login",
    },
    {
      label: "Sign Up",
      href: "/auth/register",
    },
  ];

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container className="w-11/12 max-w-container">
      <FlexBox className="w-full py-3 sm:py-8 my-2">
        <FlexBox className="w-full justify-between items-center max-w-desktop mx-auto">
          <Link href="/">
            <img
              draggable={false}
              src="/assets/img/logo.png"
              alt=""
              className="w-40 sm:w-52 md:w-64"
            />
          </Link>

          <FlexBox className="items-center gap-8 hidden lg:flex">
            <FlexBox className="gap-5 xl:gap-8">
              <Typography className="text-base xl:text-lg text-neutral-700">
                Share On Social
              </Typography>
              <Typography className="text-base xl:text-lg text-neutral-700">
                Legal
              </Typography>
            </FlexBox>

            <FlexBox className="gap-2 xl:gap-4">
              <InputBase
                placeholder="Search.."
                endAdornment={
                  <IconButton className="bg-blue400 h-7 md:h-auto w-7 md:w-min">
                    <SearchIcon className="text-white" />
                  </IconButton>
                }
                className="border border-neutral-300 text-black font-aeonik bg-light150 rounded-3xl ps-4"
              />

              <Link href="/auth/login">
                <Button
                  variant="outlined"
                  className="h-11 rounded-3xl min-w-20 xl:min-w-24 shadow-none font-aeonik text-sm xl:text-base border-2 border-blue150 "
                >
                  Login
                </Button>
              </Link>

              <Link href="/auth/register">
                <Button
                  variant="contained"
                  className="h-11 rounded-3xl bg-blue150 min-w-20 xl:min-w-24 shadow-none font-aeonik text-sm xl:text-base"
                >
                  Sign up
                </Button>
              </Link>
            </FlexBox>
          </FlexBox>

          <IconButton onClick={handleOpen} className="block lg:hidden">
            <MenuIcon className="text-black text-3xl" />
          </IconButton>

          <Modal
            open={open}
            onClose={handleClose}
            className="bg-black bg-opacity-80"
          >
            <Box>
              <IconButton
                onClick={handleClose}
                className="absolute right-8 top-8"
              >
                <CloseIcon className="text-white text-3xl" />
              </IconButton>
              <FlexBox className="w-full h-screen justify-center items-center flex-col gap-6 text-white">
                <img
                  draggable={false}
                  src="/assets/img/logo.png"
                  alt=""
                  className="w-40 sm:w-52 md:w-64"
                />
                {navLinks.map((link, i) => (
                  <Link key={i} href={link.href} onClick={() => handleClose()}>
                    <Typography
                      key={i}
                      className="hover:text-yellow-300 cursor-pointer"
                    >
                      {link.label}
                    </Typography>
                  </Link>
                ))}
              </FlexBox>
            </Box>
          </Modal>
        </FlexBox>
      </FlexBox>
    </Container>
  );
}
