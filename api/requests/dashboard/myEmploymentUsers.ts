import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

import { MfaMethodFormValues, QueryKey } from "@/api/types";
import { CommonGridResponseModel, RequestModel } from "@/api/types/CommonDataTableValues";

const baseURL = `${process.env.NEXT_PUBLIC_USER_BASE_API_URL}/admin/`;

// == Add MFA method == //
export async function myEmploymentUserList(requestDto:RequestModel) {
  return await axios.post<CommonGridResponseModel>("myEmploymentUserList/",requestDto, {
    baseURL,
  });
}

export function useMyEmploymentUserList() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: myEmploymentUserList,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKey.MyEmploymentUserList] });
    },
  });
}