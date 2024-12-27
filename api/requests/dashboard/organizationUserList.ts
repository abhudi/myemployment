import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

import { MfaMethodFormValues, QueryKey } from "@/api/types";
import { RequestTypeModel } from "@/api/types/request-type/RequestTypeValues";

const baseURL = `${process.env.NEXT_PUBLIC_USER_BASE_API_URL}/adminDashboard/`;

export async function organizationUserList(requestDto:RequestTypeModel) {
  return await axios.post<OrganizationUserValues[]>("organization-userList/",requestDto, {
    baseURL,
    
  });
}

export function useOrganizationUserList() {
    const queryClient = useQueryClient();
  
    return useMutation({
      mutationFn: (data: { requestDto: RequestTypeModel }) => 
        organizationUserList(data.requestDto, ),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [QueryKey.OrganizationUserList] });
      },
    });
  }