import { useMutation } from "@tanstack/react-query";
import axios from "axios";

import { OrganizationProfileFormValues } from "@/api/types";
import { AuthState } from "@/store/types/auth";

const baseURL = `${process.env.NEXT_PUBLIC_USER_BASE_API_URL}/adminDashboard/organization-admin-update/`;

// == Login == //
export async function organizationUpdateUser(values: OrganizationProfileFormValues) {
  const { data } = await axios.post<AuthState>("", values, {
    baseURL,
  });

  return data;
}

export function useOrganizationUpdateUser() {
  return useMutation({
    mutationFn: organizationUpdateUser,
  });
}
