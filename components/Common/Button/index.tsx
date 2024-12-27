import MUIButton, { ButtonProps } from "@mui/material/Button";
import { forwardRef } from "react";

export default forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(props, ref) {
    return (
      <MUIButton
        {...props}
        ref={ref}
        className={`${props.className} capitalize font-aeonik`}
      />
    );
  },
);
