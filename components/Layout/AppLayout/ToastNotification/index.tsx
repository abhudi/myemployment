"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import toast, { Toaster, ToasterProps } from "react-hot-toast";

const toastOpts: ToasterProps = {
  position: "top-center",
  toastOptions: {
    duration: 6000,
  },
};

export default function ToastNotification() {
  const pathname = usePathname();

  const basePath = pathname.split("/")[1];

  useEffect(() => toast.dismiss(), [basePath]);

  return <Toaster {...toastOpts} />;
}
