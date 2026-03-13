// src/theme.ts
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#0d7ff2" },
    secondary: { main: "#2563eb" },
    background: { 
      default: "#0a0f1c", 
      paper: "#0d111b" 
    },
    text: { 
      primary: "#ffffff", 
      secondary: "#94a3b8" 
    },
  },
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
          backgroundColor: "rgba(10, 15, 28, 0.8)",
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
});

export default theme;
