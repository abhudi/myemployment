import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from 'axios';
const baseURL = `${process.env.NEXT_PUBLIC_USER_BASE_API_URL}/admin/`;

  
  export async function myEmploymentDeleteUser(userId: string) {
    return await axios.delete(`employment-user-delete/${userId}`, {
      baseURL,
    });
  }

  export const useMyEmploymentDeleteUser = () => {
    const queryClient = useQueryClient();

    return useMutation({
      mutationFn: (userId: string) => myEmploymentDeleteUser(userId),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['myEmploymentUserList'] });
      },
    });
  };