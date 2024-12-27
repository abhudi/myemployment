"use client";

import Box from "@mui/material/Box";
import axios from "axios";
import { PropsWithChildren } from "react";

import { useSetupAxios } from "@/hooks";

import ModalDialog from "./ModalDialog";
import ToastNotification from "./ToastNotification";

export default function AppLayout({ children }: PropsWithChildren) {
  useSetupAxios(axios);

  return (
    <>
      <Box component="main">{children}</Box>
      <ToastNotification />
      <ModalDialog />
    </>
  );
}
