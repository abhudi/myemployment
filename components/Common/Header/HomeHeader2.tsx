"use client";

import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import clsx from "clsx";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

import Container from "@/components/Common/Container";

import Button from "../Button";
import FlexBox from "../FlexBox";

export function HomeHeader2() {
  const navLinks = [
    {
      label: "Share on Social",
      href: "#share-on-social",
    },
    {
      label: "Who we are",
      href: "#faq",
    },
    {
      label: "How can we help",
      href: "#take-action",
    },
    {
      label: "Resources",
      href: "#testimonials",
    },
    {
      label: "Contact",
      href: "#contact",
    },
    {
      label: "Get Verified",
      href: "#",
    },
    {
      label: "Login",
      href: "/auth/login",
    },
  ];

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (href.startsWith("#")) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          handleClose();
        }
      }
    },
    [],
  );

  return (
    <FlexBox
      className={clsx(
        "w-full bg-white sticky top-0 z-50 transition-all duration-100",
        isScrolled ? "pb-0" : "pb-2 md:pb-6",
      )}
    >
      <Container className="w-11/12 max-w-container">
        <FlexBox
          className={clsx(
            "w-full my-2 transition-all duration-100",
            isScrolled ? "py-3" : "py-3 sm:py-8",
          )}
        >
          <FlexBox className="w-full justify-between items-center max-w-desktop mx-auto">
            <Link href="/">
              <img
                draggable={false}
                src="/assets/img/logo.png"
                alt=""
                className="w-40 sm:w-52 md:w-64"
              />
            </Link>

            <FlexBox className="gap-4 2xl:gap-12 hidden xl:flex cursor-pointer">
              {navLinks.slice(0, 5).map(({ label, href }, i) => (
                <Link
                  key={i}
                  href={href}
                  onClick={(e) => handleScroll(e, href)}
                >
                  <Typography
                    key={i}
                    className="text-base 2xl:text-lg text-neutral-700 cursor-pointer"
                  >
                    {label}
                  </Typography>
                </Link>
              ))}
            </FlexBox>

            <FlexBox className="gap-2 xl:gap-4">
              <Button
                startIcon={
                  <img
                    draggable={false}
                    src="/assets/img/home/common/btn-logo.png"
                    alt=""
                    className="-ms-1"
                  />
                }
                variant="contained"
                className="hidden md:flex h-12 pe-8 rounded-3xl bg-blue400 min-w-20 xl:min-w-24 shadow-none font-aeonik-bold text-sm xl:text-base"
              >
                Get verified
              </Button>

              <Link href="/auth/login">
                <Button
                  variant="outlined"
                  className="hidden md:flex h-12 rounded-3xl min-w-24 xl:min-w-28 shadow-none font-aeonik-bold text-sm xl:text-base border-2 border-blue150 text-blue400"
                >
                  Log in
                </Button>
              </Link>

              <IconButton onClick={handleOpen} className="block xl:hidden">
                <MenuIcon className="text-black text-3xl mb-0 md:mb-2" />
              </IconButton>
            </FlexBox>

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
                  {navLinks.map(({ label, href }, i) => (
                    <Link
                      key={i}
                      href={href}
                      onClick={(e) => {
                        handleScroll(e, href);
                        handleClose();
                      }}
                    >
                      <Typography
                        key={i}
                        className="hover:text-yellow-300 cursor-pointer"
                      >
                        {label}
                      </Typography>
                    </Link>
                  ))}
                </FlexBox>
              </Box>
            </Modal>
          </FlexBox>
        </FlexBox>
      </Container>
    </FlexBox>
  );
}
