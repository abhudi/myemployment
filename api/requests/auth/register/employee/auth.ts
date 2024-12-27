import { useMutation } from "@tanstack/react-query";
import axios from "axios";

import { RegisterFormValues } from "@/api/types";

const baseURL = `${process.env.NEXT_PUBLIC_USER_BASE_API_URL}/auth/register/employee/`;

// == Consumer register == //
export async function requestRegisterConsumer(values: RegisterFormValues) {
  return await axios.post("", values, {
    baseURL,
  });
}

export function useRegisterConsumer() {
  return useMutation({
    mutationFn: requestRegisterConsumer,
  });
}
