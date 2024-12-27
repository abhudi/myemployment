import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const baseURL = `${process.env.NEXT_PUBLIC_USER_BASE_API_URL}/admin/register/`;

// == Approve sign up == //
export async function requestApproveSignUp(id: string) {
  const { data } = await axios.get<{ message: string }>(`approve/${id}/`, { baseURL });

  return data;
}

export function useApproveSignUp() {
  return useMutation({
    mutationFn: requestApproveSignUp,
  });
}


// == Approve sign up == //
export async function requestApproveSignUpFromApplication(id: string) {
  const { data } = await axios.get<{ message: string }>(`approvefromapplication/${id}/`, { baseURL });

  return data;
}

export function useApproveSignUpFromApplication() {
  return useMutation({
    mutationFn: requestApproveSignUpFromApplication,
  });
}
