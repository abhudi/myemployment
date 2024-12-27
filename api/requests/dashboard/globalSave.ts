import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

import { MfaMethodFormValues, QueryKey } from "@/api/types";
import { globalSave, RequestModel } from "@/api/types/CommonDataTableValues";

const baseURL = `${process.env.NEXT_PUBLIC_MY_EMPLOYMENT_BASE_API_URL}/Compliance/`;

// == Add MFA method == //
export async function globalSaves(requestDto:any) {
  return await axios.post<globalSave>("compliance-global-setting-upsert",requestDto, {
    baseURL,
  });
}

export function useglobalSave() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: globalSaves,
    onSuccess: (data) => {
        console.log('globalSave:', data);
      queryClient.invalidateQueries({ queryKey: [QueryKey.MyEmploymentUserList] });
    },
  });
}