import Box from "@mui/material/Box";
import MuiFormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import OutlinedInput, { OutlinedInputProps } from "@mui/material/OutlinedInput";
import clsx from "clsx";
import { forwardRef } from "react";

export default forwardRef<
  HTMLInputElement,
  OutlinedInputProps & {
    inputStyle?: string;
    labelStyle?: string;
    placeholder?: string;
    outlinedInputStyle?: string;
  }
>(function FormControl(
  {
    className,
    inputStyle,
    label,
    labelStyle,
    outlinedInputStyle,
    placeholder,
    color,
    ...props
  },
  ref,
) {
  return (
    <MuiFormControl className={className} color={color}>
      <FormLabel
        className={`${labelStyle} ${color === "error" ? "text-red-600" : ""}`}
      >
        {label}
      </FormLabel>
      <Box className={inputStyle}>
        <OutlinedInput
          classes={{
            notchedOutline: clsx(color === "error" && "border-red300"),
          }}
          inputRef={ref}
          {...props}
          className={`w-full font-aeonik ${!outlinedInputStyle && "h-11 sm:h-12 md:h-auto"}`}
          placeholder={placeholder}
        />
      </Box>
    </MuiFormControl>
  );
});
