import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { AuthState } from "@/store/types/auth";
import { OrganizationProfileFormValues } from "@/api/types";
const baseURL = `${process.env.NEXT_PUBLIC_USER_BASE_API_URL}/adminDashboard/user-insert/`;

export async function organizationAddUser(values: OrganizationProfileFormValues) {
    const { data } = await axios.post<AuthState>(baseURL, values, {  
    headers: {
      'Content-Type': 'application/json', 
    },
  });

  return data;
}

export function useOrganizationAddUser(p0: { organizationId: number; organizationTypeId: number; }) {
  return useMutation({
    mutationFn: organizationAddUser,
  });
}




