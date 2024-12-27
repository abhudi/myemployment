"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";

export function useNavigateWithLoading() {
  const router = useRouter();
  const [isPendingContinue, startTransitionContinue] = useTransition();
  const [isPendingBack, startTransitionBack] = useTransition();

  const navigateWithLoadingContinue = (path: string) => {
    startTransitionContinue(() => {
      router.push(path);
    });
  };

  const navigateWithLoadingBack = (path: string) => {
    startTransitionBack(() => {
      router.push(path);
    });
  };

  return {
    navigateWithLoadingContinue,
    isPendingContinue,
    navigateWithLoadingBack,
    isPendingBack,
  };
}
