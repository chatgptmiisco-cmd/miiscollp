// src/theme.ts
import { createTheme, ThemeOptions } from "@mui/material/styles";

const commonOptions: ThemeOptions = {
  typography: {
    fontFamily: "var(--font-geist-sans), 'Inter', sans-serif",
    h1: { fontWeight: 950, letterSpacing: "-0.04em" },
    h2: { fontWeight: 900, letterSpacing: "-0.02em" },
    h3: { fontWeight: 800 },
    button: { textTransform: "none", fontWeight: 700 },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiAppBar: { 
      styleOverrides: { 
        root: { 
          backgroundColor: "var(--nav-bg)",
          backdropFilter: "blur(20px)"
        } 
      } 
    },
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: "12px" },
        containedPrimary: {
          background: "linear-gradient(90deg, #0d7ff2, #2563eb)",
          color: "#fff",
          "&:hover": {
            background: "linear-gradient(90deg, #0b6ed1, #1d4ed8)",
          }
        }
      }
    }
  }
};

export const lightTheme = createTheme({
  ...commonOptions,
  palette: {
    mode: "light",
    primary: { main: "#0d7ff2" },
    secondary: { main: "#2563eb" },
    background: { default: "#f8fafc", paper: "#ffffff" },
    text: { primary: "#0f172a", secondary: "#64748b" },
  },
});

export const darkTheme = createTheme({
  ...commonOptions,
  palette: {
    mode: "dark",
    primary: { main: "#0d7ff2" },
    secondary: { main: "#2563eb" },
    background: { default: "#0a0f1c", paper: "rgba(255, 255, 255, 0.02)" },
    text: { primary: "#ffffff", secondary: "#94a3b8" },
  },
});
