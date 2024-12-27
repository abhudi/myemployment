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

import { useLogout } from "@/store/hooks/auth";

import Button from "../Button";
import FlexBox from "../FlexBox";

export function OldDashboardHeader() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const logout = useLogout();

  return (
    <FlexBox className="bg-white w-full p-4 md:p-6 shadow-header fixed z-20">
      <FlexBox className="w-full justify-between items-center mx-auto">
        <Link href="/">
          <img
            draggable={false}
            src="/assets/img/logo.png"
            alt=""
            className="w-40 sm:w-52 md:w-64"
          />
        </Link>

        <FlexBox className="hidden lg:flex gap-2 xl:gap-4 w-3/4 justify-end">
          <InputBase
            placeholder="search for data.."
            endAdornment={
              <IconButton className="w-10 h-10">
                <SearchIcon className="text-blue400 text-3xl" />
              </IconButton>
            }
            className="border border-blue150 text-black font-aeonik bg-white rounded-card ps-8 p-1 w-1/3"
          />

          <Button
            variant="contained"
            className="py-3 px-8 rounded-card bg-blue150 min-w-20 xl:min-w-24 shadow-none font-aeonik text-sm xl:text-base !normal-case"
          >
            Start a Verification
          </Button>
        </FlexBox>

        <IconButton onClick={handleOpen} className="block lg:hidden">
          <MenuIcon className="text-blue400 text-3xl" />
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
              <InputBase
                placeholder="search for data.."
                endAdornment={
                  <IconButton className="w-10 h-10">
                    <SearchIcon className="text-blue400 text-3xl" />
                  </IconButton>
                }
                className="border border-blue150 text-black font-aeonik bg-white rounded-card ps-8 p-1 w-2/3 sm:w-1/2 md:w-1/3"
              />
              <Link href="#">
                <Typography className="hover:text-yellow-300 cursor-pointer">
                  Start a Verification
                </Typography>
              </Link>
              <Button
                variant="contained"
                className="py-3 px-8 rounded-card bg-blue150 min-w-20 xl:min-w-24 shadow-none font-aeonik text-sm xl:text-base !normal-case"
                onClick={logout}
              >
                Sign out
              </Button>
            </FlexBox>
          </Box>
        </Modal>
      </FlexBox>
    </FlexBox>
  );
}
