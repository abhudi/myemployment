import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const baseURL = `${process.env.NEXT_PUBLIC_USER_BASE_API_URL}/admin/register/`;

// == Deny sign up == //
export async function requestDenySignUp(id: string) {
  const { data } = await axios.get<{ message: string }>(`deny/${id}/`, { baseURL });

  return data;
}

export function useDenySignUp() {
  return useMutation({
    mutationFn: requestDenySignUp,
  });
}


// == Deny sign up == //
export async function requestDenySignUpFromApplication(id: string) {
  const { data } = await axios.get<{ message: string }>(`denyfromapplication/${id}/`, { baseURL });

  return data;
}

export function useDenySignUpFromApplication() {
  return useMutation({
    mutationFn: requestDenySignUpFromApplication,
  });
}
