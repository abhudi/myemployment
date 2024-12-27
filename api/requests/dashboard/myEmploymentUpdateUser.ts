import { useMutation } from "@tanstack/react-query";
import axios from "axios";

import { AuthState } from "@/store/types/auth";
import { MyEmploymentUserFormValues } from "@/api/types/MyEmploymentUserFormValues";

const baseURL = `${process.env.NEXT_PUBLIC_USER_BASE_API_URL}/admin/employment-user-update/`;

// == Login == //
export async function myEmploymentUpdateUser(values: MyEmploymentUserFormValues) {
  const { data } = await axios.post<AuthState>("", values, {
    baseURL,
  });

  return data;
}

export function useMyEmploymentUpdateUser() {
  return useMutation({
    mutationFn: myEmploymentUpdateUser,
  });
}
