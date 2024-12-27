import { createTheme, ThemeProvider as Provider } from "@mui/material/styles";
import { PropsWithChildren } from "react";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    sm: false;
    md: false;
    xl: false;
    mobsm: true;
    mobmd: true;
    moblg: true;
    tablet: true;
    laptop: true;
    lg: true;
    desktop: true;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#1c2a59",
    },
    secondary: {
      main: "#a3a3a3",
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "inherit",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          borderColor: "#e2edf6",
          root: {
            fontFamily: "inherit",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          containedInherit: {
            color: "#F8F9FB !important",
            backgroundColor: "#1c2a59",
            "&:hover": {
              backgroundColor: "#283d81 !important",
            },
          },
          "& .MuiLoadingButton-loadingIndicator": {
            color: "#F8F9FB !important",
          },
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        listbox: {
          maxHeight: 250,
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      mobsm: 320,
      mobmd: 375,
      moblg: 425,
      tablet: 768,
      laptop: 1024,
      lg: 1200,
      desktop: 1440,
    },
  },
});

export default function ThemeProvider({ children }: PropsWithChildren) {
  return <Provider theme={theme}>{children}</Provider>;
}
