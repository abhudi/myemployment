import { useMutation } from "@tanstack/react-query";
import axios from "axios";

import { ChangePasswordFormValues } from "@/api/types";

const baseURL = `${process.env.NEXT_PUBLIC_USER_BASE_API_URL}/auth/change-password/`;

// == Login == //
export async function requestChangePassword(values: ChangePasswordFormValues) {
  const { data } = await axios.post<boolean>("", {currentPassword : values.old_password, newPassword :  values.new_password}, {
    baseURL,
  });

  return data;
}

export function useUserChangePassword() {
  return useMutation({
    mutationFn: requestChangePassword,
  });
}
