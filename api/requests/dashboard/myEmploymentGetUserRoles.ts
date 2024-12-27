import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from 'axios';
const baseURL = `${process.env.NEXT_PUBLIC_USER_BASE_API_URL}/admin/`;
 
  export async function myEmploymentGetUserRoles() {
    return await axios.get(`get-employment-user-roles`,  {
      baseURL,
    });
  }

export function useMyEmploymentGetUserRoles() {
  return useMutation({
    mutationFn: myEmploymentGetUserRoles,
  });
}