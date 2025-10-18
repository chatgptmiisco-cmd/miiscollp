// src/theme.ts
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#0f172a" },        // deep navy (header)
    secondary: { main: "#6a11cb" },      // purple accent
    info: { main: "#00b8d9" },           // cyan accent for highlights
    success: { main: "#06b6d4" },
    background: { default: "#f6f8fb", paper: "#fff" },
    text: { primary: "#0b1220", secondary: "#4b5563" },
  },
  typography: {
    fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
    h1: { fontWeight: 700, fontSize: "2.25rem", letterSpacing: "-0.01em" },
    h2: { fontWeight: 700, fontSize: "1.75rem" },
    h3: { fontWeight: 600 },
    subtitle1: { color: "#4b5563" },
    button: { textTransform: "none", fontWeight: 600 },
  },
  shape: { borderRadius: 10 },
  components: {
    MuiAppBar: { styleOverrides: { root: { background: "linear-gradient(90deg,#061224,#0f172a)" } } },
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 10 },
        containedPrimary: {
          background: "linear-gradient(90deg,#6a11cb,#2575fc)", color: "#fff", boxShadow: "none"
        }
      }
    },
    MuiCard: { styleOverrides: { root: { borderRadius: 12, boxShadow: "0 6px 18px rgba(15,23,42,0.06)" } } }
  }
});

export default theme;
