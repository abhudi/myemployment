"use client";

import { Theme, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";

export function useResponsive() {
  const [isMobileView, setIsMobileView] = useState(false);

  const tabletUp = useMediaQuery((theme: Theme) =>
    theme.breakpoints.up("tablet"),
  );

  useEffect(() => {
    setIsMobileView(!tabletUp);
  }, [tabletUp]);

  return isMobileView;
}
