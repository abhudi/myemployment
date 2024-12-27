import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

import { MfaMethodFormValues, QueryKey } from "@/api/types";
import { CommonGridResponseModel, RequestModel } from "@/api/types/CommonDataTableValues";

const baseURL = `${process.env.NEXT_PUBLIC_USER_BASE_API_URL}/admin/`;

// == Add MFA method == //
export async function requestPendingApprovalList(requestDto:RequestModel) {
  return await axios.post<CommonGridResponseModel>("pendingApprovalsList/",requestDto, {
    baseURL,
  });
}

export function usePendingApprovalList() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: requestPendingApprovalList,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKey.PendingApprovalList] });
    },
  });
}