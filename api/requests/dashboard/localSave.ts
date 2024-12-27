import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

import { MfaMethodFormValues, QueryKey } from "@/api/types";
import {  localSave, RequestModel } from "@/api/types/CommonDataTableValues";

const baseURL = `${process.env.NEXT_PUBLIC_MY_EMPLOYMENT_BASE_API_URL}/Compliance/`;

// == Add MFA method == //
export async function localSaves(requestDto:any) {
  return await axios.post<localSave>("compliance-local-setting-upsert",requestDto, {
    baseURL,
  });
}

export function uselocalSaves() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: localSaves,
    onSuccess: (data) => {
        console.log('globalSave:', data);
      queryClient.invalidateQueries({ queryKey: [QueryKey.MyEmploymentUserList] });
    },
  });
}