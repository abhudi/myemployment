import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

import { MfaMethodFormValues, QueryKey } from "@/api/types";
import { MfaMethods } from "@/types";

const baseURL = `${process.env.NEXT_PUBLIC_USER_BASE_API_URL}/user/multi-factor-authentication/`;

// == Add MFA method == //
export async function requestAddMfaMethod(values: MfaMethodFormValues) {
  return await axios.post("add/", values, {
    baseURL,
  });
}

export function useAddMfaMethod() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: requestAddMfaMethod,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKey.MfaMethods] });
    },
  });
}

// == Get MFA methods == //
export async function requestMfaMethods() {
  const { data } = await axios.get<MfaMethods>("get_mfa_status/", { baseURL });
  return data;
}

export function useMfaMethods({ enabled = true }: { enabled?: boolean } = {}) {
  return useQuery<MfaMethods>({
    queryKey: [QueryKey.MfaMethods],
    enabled,
    queryFn: () => requestMfaMethods(),
  });
}

// == Remove MFA method == //
export async function requestRemoveMfaMethod(values: MfaMethodFormValues) {
  return await axios.post("remove/", values, {
    baseURL,
  });
}

export function useRemoveMfaMethod() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: requestRemoveMfaMethod,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKey.MfaMethods] });
    },
  });
}
