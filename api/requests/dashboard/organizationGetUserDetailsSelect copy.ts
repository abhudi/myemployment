import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from 'axios';
const baseURL = `${process.env.NEXT_PUBLIC_USER_BASE_API_URL}/adminDashboard/`;

  
  export async function organizationGetUserDetailsSelect(userId: string) {
    return await axios.get(`get-user-details-select/${userId}`, {
      baseURL,
    });
  }

  export const useOrganizationGetUserDetailsSelect = () => {
    const queryClient = useQueryClient();

    return useMutation({
      mutationFn: (userId: string) => organizationGetUserDetailsSelect(userId),
    });
  };