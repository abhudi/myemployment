"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { PropsWithChildren } from "react";

import AppLayout from "@/components/Layout/AppLayout";
import AppProvider from "@/providers";

import "./globals.css";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/assets/img/favicon.ico" />
      </head>
      <body>
        <AppProvider>
          <AppLayout>
            <ProgressBar
              height="5px"
              color="#1c2a59"
              options={{ showSpinner: false }}
              shallowRouting
            />
            {children}
          </AppLayout>
        </AppProvider>
      </body>
    </html>
  );
}
