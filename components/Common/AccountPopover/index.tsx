"use client";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { ScaleLoader } from "react-spinners";

import { useProfile } from "@/api/requests/auth/me";
import { useLogout } from "@/store/hooks/auth";

import Button from "../Button";
import FlexBox from "../FlexBox";

export default function AccountPopover() {
  const { data: me } = useProfile();
  const logout = useLogout();
  const [open, setOpen] = useState<HTMLElement | null>(null);

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  return (
    <Box>
      <Button
        onClick={(e) => (me ? handleOpen(e) : {})}
        className="w-full flex gap-3 rounded-xl"
      >
        <img
          draggable="false"
          src="/assets/img/dashboard/header/avatar.png"
          alt=""
          className="w-12 md:w-14 h-12 md:h-14 bg-white p-1 shadow-avatar rounded-full"
        />
        <FlexBox className="hidden md:flex flex-col items-start min-w-24">
          <Typography className="text-sm text-neutral-700">Welcome</Typography>
          {me ? (
            <Typography className="text-lg font-aeonik-bold  text-blue400 flex gap-2 items-center">
              {me.first_name + " " + me.last_name}
              {open ? (
                <KeyboardArrowDownIcon className="text-base mb-1" />
              ) : (
                <KeyboardArrowRightIcon className="text-base mb-1" />
              )}
            </Typography>
          ) : (
            <ScaleLoader height={20} color="#1c2a59" />
          )}
        </FlexBox>
      </Button>

      <Popover
        open={!!open}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        sx={{
          "& .MuiPaper-root": {
            p: 0,
            mt: 0.5,
            minWidth: 200,
          },
        }}
      >
        <FlexBox className="p-3 items-center gap-2">
          <img
            draggable="false"
            src="/assets/img/dashboard/header/avatar.png"
            alt=""
            className="w-12 h-12"
          />
          <FlexBox className="flex-col items-start">
            <Typography className="text-lg font-aeonik-bold  text-blue400 flex gap-2 items-center">
              {me?.first_name || ""} {me?.last_name || ""}
            </Typography>
            <Typography className="text-sm text-neutral-700 capitalize">
              {me?.job_title || ""}
            </Typography>
            <Typography className="text-sm text-neutral-700 capitalize italic">
              {me?.role || ""}
            </Typography>
          </FlexBox>
        </FlexBox>
        <Divider className="m-0 border-dashed" />
        <Button
          fullWidth
          onClick={logout}
          className="text-red-700 font-bold flex justify-center py-3 rounded-none items-center gap-2 hover:bg-slate-200 transition-all duration-300 ease-in-out"
        >
          <img
            draggable="false"
            src="/assets/img/dashboard/sidebar/logout.png"
            alt=""
            className="w-5 h-5"
          />
          Logout
        </Button>
      </Popover>
    </Box>
  );
}
