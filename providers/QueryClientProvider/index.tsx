import {
  QueryClientProvider as Provider,
  QueryClient,
} from "@tanstack/react-query";
import { PropsWithChildren } from "react";
import { StatusCode } from "status-code-enum";

const MAX_RETRIES = 2;
const STALE_TIME = 0;

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: STALE_TIME,
      refetchOnWindowFocus: false,
      retry(failureCount: number, err: any) {
        return (
          failureCount < MAX_RETRIES &&
          err.response?.status !== StatusCode.ClientErrorNotFound
        );
      },
    },
  },
});

export default function QueryClientProvider({ children }: PropsWithChildren) {
  return <Provider client={queryClient}>{children}</Provider>;
}
