import { QueryKey } from "@/api/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const baseURL = `${process.env.NEXT_PUBLIC_MY_EMPLOYMENT_BASE_API_URL}/organization/`;

// == Add MFA method == //
export async function organizationTypeAheadList() {
  return await axios.get<TypeAheadOrganizationValues[]>("get-organization-type-ahead-list/", {
    baseURL,
  });
}

export function useOrganizationTypeAheadList() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: organizationTypeAheadList,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKey.OrganizationTypeAhead] });
    },
  });
}