"use client";
import React from "react";
import { ThemeProvider, CssBaseline, Container } from "@mui/material";
import theme from "../../theme";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import { AnimatePresence, motion } from "framer-motion";

export default function ThemeWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
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
