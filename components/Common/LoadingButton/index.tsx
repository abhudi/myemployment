import MUILoadingButton, { LoadingButtonProps } from "@mui/lab/LoadingButton";
import { forwardRef } from "react";

export default forwardRef<HTMLButtonElement, LoadingButtonProps>(
  function LoadingButton(props, ref) {
    return (
      <MUILoadingButton
        {...props}
        ref={ref}
        className={`${props.className} capitalize font-aeonik`}
        variant="contained"
      />
    );
  },
);
