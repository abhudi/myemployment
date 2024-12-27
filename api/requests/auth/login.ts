import { useMutation } from "@tanstack/react-query";
import axios from "axios";

import { LoginFormValues } from "@/api/types";
import { AuthState } from "@/store/types/auth";

const baseURL = `${process.env.NEXT_PUBLIC_USER_BASE_API_URL}/auth/login/`;

// == Login == //
export async function requestLogin(values: LoginFormValues) {
  const { data } = await axios.post<AuthState>("", values, {
    baseURL,
  });

  return data;
}

export function useUserLogin() {
  return useMutation({
    mutationFn: requestLogin,
  });
}
