import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { AuthState } from "@/store/types/auth";
import { PersonalProfile } from "@/types";

const baseURL = `${process.env.NEXT_PUBLIC_USER_BASE_API_URL}/consumerProfile/consumer-profile-update/`;

export async function consumerProfileUpdate(values: PersonalProfile) {
  const { data } = await axios.post<AuthState>("", values, {
    baseURL,
  });

  return data;
}

export function useConsumerProfileUpdate() {
  return useMutation({
    mutationFn: consumerProfileUpdate,
  });
}
