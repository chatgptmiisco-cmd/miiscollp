"use client";

import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "../../theme";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

interface ThemeWrapperProps {
  children: React.ReactNode;
}

export default function ThemeWrapper({ children }: ThemeWrapperProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* Navbar with centralized gradient + motion */}
      <Navbar />
      {/* Page content */}
      {children}
      {/* Footer with centralized gradient + motion */}
      <Footer />
    </ThemeProvider>
  );
}
