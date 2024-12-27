import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from 'axios';
const baseURL = `${process.env.NEXT_PUBLIC_USER_BASE_API_URL}/adminDashboard/`;

  
  export async function organizationDeleteUser(userId: string) {
    return await axios.delete(`user-delete/${userId}`, {
      baseURL,
    });
  }

  export const useOrganizationDeleteUser = () => {
    const queryClient = useQueryClient();

    return useMutation({
      mutationFn: (userId: string) => organizationDeleteUser(userId),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['organizationUserList'] });
      },
    });
  };