"use client";

import type {
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
} from "axios";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { StatusCode } from "status-code-enum";

import Message from "@/enums/Message";
import store from "@/store";
import { useLogout } from "@/store/hooks/auth";
import { normalize } from "@/utils/message";

export function useSetupAxios(instance: AxiosInstance) {
  const logout = useLogout();
  const router = useRouter();

  useEffect(() => {
    const requestInterceptor = instance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        const {
          auth: { token },
        } = store.getState();

        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
      },
      (err: AxiosError) => Promise.reject(err),
    );

    const responseInterceptor = instance.interceptors.response.use(
      (value) => value,
      ({ response }: AxiosError<{ error: string }>) => {
        if (response?.status === StatusCode.ClientErrorForbidden) {
          logout();
        }

        if (
          response?.status === StatusCode.ClientErrorUnauthorized &&
          response?.data?.error === "Token is invalid or expired"
        ) {
          return router.push(encodeURI(`/logout/${Message.TokenExpired}`));
        }

        return Promise.reject(
          normalize(response?.data?.error || Message.SomethingWrong),
        );
      },
    );

    return () => {
      instance.interceptors.request.eject(requestInterceptor);
      instance.interceptors.response.eject(responseInterceptor);
    };
  }, [instance, logout, router]);
}
