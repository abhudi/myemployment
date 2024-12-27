import Box, { BoxProps } from "@mui/material/Box";
import { forwardRef } from "react";

export default forwardRef<HTMLElement, BoxProps>(
  function Container(props, ref) {
    return <Box {...props} ref={ref} display="flex" marginX="auto" />;
  },
);
