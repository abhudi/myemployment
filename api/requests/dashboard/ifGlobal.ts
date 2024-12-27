import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

import { MfaMethodFormValues, QueryKey } from "@/api/types";
import { isGlobal, RequestModel } from "@/api/types/CommonDataTableValues";

const baseURL = `${process.env.NEXT_PUBLIC_MY_EMPLOYMENT_BASE_API_URL}/Compliance/`;

// == Add MFA method == //
export async function ifGlobal(requestDto:any) {
  return await axios.post<isGlobal>("compliance-status-update",requestDto, {
    baseURL,
  });
}

export function useifGlobal() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ifGlobal,
    onSuccess: (data) => {
        console.log('isGlobal:', data);
      queryClient.invalidateQueries({ queryKey: [QueryKey.MyEmploymentUserList] });
    },
  });
}