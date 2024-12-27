import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { AuthState } from "@/store/types/auth";
import { MyEmploymentUserFormValues } from "@/api/types/MyEmploymentUserFormValues";
const baseURL = `${process.env.NEXT_PUBLIC_USER_BASE_API_URL}/admin/employment-user-insert/`;

export async function myEmploymentAddUser(values: MyEmploymentUserFormValues) {
    const { data } = await axios.post<AuthState>(baseURL, values, {  // Ensure you use baseURL here
    headers: {
      'Content-Type': 'application/json', 
    },
  });

  return data;
}

export function useMyEmploymentAddUser() {
  return useMutation({
    mutationFn: myEmploymentAddUser,
  });
}




