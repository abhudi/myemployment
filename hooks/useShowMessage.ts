"use client";

import { useEffect, useState } from "react";
import toast, { ToastType } from "react-hot-toast";

import { normalize } from "@/utils/message";

type Props = {
  type: ToastType;
  message: string | null;
};

export function useShowMessage({ type, message }: Props) {
  const [msg, setMessage] = useState<string>();

  useEffect(() => {
    if (message) {
      setMessage(normalize(message));
    }
  }, [message]);

  useEffect(() => {
    if (msg) {
      switch (type) {
        case "success":
          toast.success(msg);
          break;
        case "error":
          toast.error(msg);
          break;
      }
    }
  }, [msg]);
}
