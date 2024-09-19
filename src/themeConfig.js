import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

export const customTheme = createTheme({
  palette: {
    // primary: { main: "#D2E0FB" },
    // secondary: { main: "#DEE5D4" },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "100px",
        },
      },
    },
  },
});
