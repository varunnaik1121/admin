import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#6136FB",
    },
    secondary: {
      main: "#f2f4f7",
    },
    text: {
      secondary: "#696a6c",
      primary: "#100f10",
    },
    error: {
      main: "#FF3131",
    },
    success: {
      main: "#03c04a",
    },
  },
  typography: {
    fontFamily: "'Raleway', sans-serif",
  },
});
