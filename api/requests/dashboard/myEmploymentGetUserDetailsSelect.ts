import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from 'axios';
const baseURL = `${process.env.NEXT_PUBLIC_USER_BASE_API_URL}/admin/`;

  
  export async function myEmploymentGetUserDetailsSelect(userId: string) {
    return await axios.get(`get-EmploymentUserProfile/${userId}`, {
      baseURL,
    });
  }

  export const useMyEmploymentGetUserDetailsSelect = () => {
    const queryClient = useQueryClient();

    return useMutation({
      mutationFn: (userId: string) => myEmploymentGetUserDetailsSelect(userId),
    });
  };