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

export function HomeHeader() {
  const navLinks = [
    {
      label: "Solutions",
      href: "/solutions",
      target: "_self",
    },
    {
      label: "Who we are",
      href: "/who-we-are",
      target: "_self",
    },
    {
      label: "How can we help",
      href: "/how-can-help",
      target: "_self",
    },
    {
      label: "Resources",
      href: "https://blog.myemployment.com",
      target: "_blank",
    },
    {
      label: "Contact",
      href: "/contact",
      target: "_self",
    },
    {
      label: "Login",
      href: "/auth/login",
      target: "_self",
    },
    {
      label: "Sign Up",
      href: "/auth/register",
      target: "_self",
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
        "w-full bg-white sticky top-0 z-50 transition-all duration-300",
        isScrolled ? "pb-0" : "pb-2",
      )}
    >
      <Container className="w-11/12 max-w-container">
        <FlexBox
          className={clsx(
            "w-full my-2 transition-all duration-300",
            isScrolled ? "py-3" : "py-3 sm:py-6",
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
              {navLinks.slice(0, 5).map(({ label, href, target }, i) => (
                <Link
                  key={i}
                  href={href}
                  onClick={(e) => handleScroll(e, href)}
                  target={target}
                >
                  <Typography
                    key={i}
                    className="text-base 2xl:text-lg text-neutral-700 cursor-pointer hover-blue-text hover:text-cyan-300 transition-all duration-300 ease-in-out"
                  >
                    {label}
                  </Typography>
                </Link>
              ))}
            </FlexBox>

            <FlexBox className="gap-2 xl:gap-4">
              <FlexBox className="gap-2 xl:gap-4 hidden md:flex">
                <Link href="/auth/login">
                  <Button
                    variant="contained"
                    className="h-12 rounded-3xl bg-blue150 min-w-32 xl:min-w-36 shadow-none font-bold text-sm xl:text-base"
                  >
                    Login
                  </Button>
                </Link>

                <Link href="/auth/register">
                  <Button
                    variant="outlined"
                    className="h-12 rounded-3xl min-w-32 xl:min-w-36 text-blue400 shadow-none font-bold text-sm xl:text-base border-2 border-blue400 "
                  >
                    Sign Up
                  </Button>
                </Link>
              </FlexBox>

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
