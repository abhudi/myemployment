"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export const useLoadingState = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isRouteChanging, setIsRouteChanging] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    setIsLoading(false);
  }, []);

  useEffect(() => {
    const handleRouteChangeStart = () => setIsRouteChanging(true);
    const handleRouteChangeEnd = () => setIsRouteChanging(false);

    handleRouteChangeStart();
    setTimeout(handleRouteChangeEnd);
  }, [pathname, searchParams]);

  return { isLoading, isRouteChanging };
};
