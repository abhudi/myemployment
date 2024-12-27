import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { QueryKey } from "@/api/types";
import { User } from "@/types";

const baseURL = `${process.env.NEXT_PUBLIC_USER_BASE_API_URL}/user/me/`;

// == Get my profile == //
export async function requestProfile() {
  const { data } = await axios.get<User>("", { baseURL });
  return data;
}

export function useProfile() {
  return useQuery<User>({
    queryKey: [QueryKey.Profile],
    queryFn: () => requestProfile(),
  });
}
