"use client";
import React, { useEffect, useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import { lightTheme, darkTheme } from "../../theme";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import { AnimatePresence, motion } from "framer-motion";

function MUIThemeProvider({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Use lightTheme as default before hydration to match server-rendered output correctly
  const currentTheme = mounted && resolvedTheme === "dark" ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key="page"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </ThemeProvider>
  );
}

export default function ThemeWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextThemesProvider attribute="data-theme" defaultTheme="light" enableSystem>
      <MUIThemeProvider>{children}</MUIThemeProvider>
    </NextThemesProvider>
  );
}
