"use client";
import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItemText,
  Typography,
  Container,
  ListItemButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const nav = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <AppBar
        position="fixed"
        elevation={scrolled ? 4 : 0}
        sx={{
          background: (scrolled || pathname !== "/")
            ? "rgba(17, 24, 39, 0.95)"
            : "transparent",
          backdropFilter: (scrolled || pathname !== "/") ? "blur(12px)" : "none",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          borderBottom: (scrolled || pathname !== "/") ? "1px solid rgba(255, 255, 255, 0.1)" : "none",
          py: scrolled ? 0.5 : 1.5,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ display: "flex", justifyContent: "space-between" }}>
            {/* Logo / Branding */}
            <Box component={Link} href="/" sx={{ display: "flex", alignItems: "center", textDecoration: "none", color: "inherit" }}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 900,
                    letterSpacing: "-0.02em",
                    background: "linear-gradient(90deg, #fff 0%, #cbd5e1 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontSize: { xs: "1.2rem", md: "1.5rem" }
                  }}
                >
                  Maheshwari Innovatives
                </Typography>
              </motion.div>
            </Box>

            {/* Desktop Menu */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 1.5,
                alignItems: "center",
              }}
            >
              {nav.map((n, i) => (
                <motion.div
                  key={n.label}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                >
                  <Button
                    component={Link}
                    href={n.href}
                    sx={{
                      color: isActive(n.href) ? "#fff" : "rgba(255, 255, 255, 0.7)",
                      fontWeight: 600,
                      px: 2,
                      position: "relative",
                      "&:hover": {
                        color: "#fff",
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                      },
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: 6,
                        left: "50%",
                        width: isActive(n.href) ? "20px" : "0px",
                        height: "2px",
                        background: theme.palette.secondary.main,
                        transition: "all 0.3s ease",
                        transform: "translateX(-50%)",
                      }
                    }}
                  >
                    {n.label}
                  </Button>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Button
                  variant="contained"
                  component={Link}
                  href="/contact"
                  sx={{
                    ml: 2,
                    px: 3,
                    borderRadius: "50px",
                    textTransform: "none",
                    fontWeight: 700,
                    background: `linear-gradient(90deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.dark})`,
                    boxShadow: `0 4px 14px 0 rgba(106, 17, 203, 0.39)`,
                    "&:hover": {
                      transform: "translateY(-2px)",
                      boxShadow: `0 6px 20px rgba(106, 17, 203, 0.45)`,
                    },
                    transition: "all 0.2s ease-in-out",
                  }}
                >
                  Talk to Us
                </Button>
              </motion.div>
            </Box>

            {/* Mobile Menu Toggle */}
            <IconButton
              onClick={() => setOpen(true)}
              sx={{
                display: { md: "none" },
                color: "white",
                background: "rgba(255, 255, 255, 0.05)",
                "&:hover": { background: "rgba(255, 255, 255, 0.1)" }
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Spacing for fixed navbar on non-home pages */}
      {pathname !== "/" && <Box sx={{ height: { xs: "64px", md: "80px" } }} />}

      {/* Drawer for mobile view */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            width: "100%",
            maxWidth: 300,
            background: "#111827",
            color: "white",
            p: 3,
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 4 }}>
          <IconButton onClick={() => setOpen(false)} sx={{ color: "white" }}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Typography variant="h6" sx={{ fontWeight: 900, mb: 4, px: 2 }}>
          Maheshwari
        </Typography>

        <List sx={{ gap: 1, display: "flex", flexDirection: "column" }}>
          {nav.map((n) => (
            <ListItemButton
              key={n.label}
              component={Link}
              href={n.href}
              onClick={() => setOpen(false)}
              sx={{
                borderRadius: 2,
                mb: 1,
                backgroundColor: isActive(n.href) ? "rgba(255, 255, 255, 0.05)" : "transparent",
                borderLeft: isActive(n.href) ? `4px solid ${theme.palette.secondary.main}` : "4px solid transparent",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                }
              }}
            >
              <ListItemText
                primary={n.label}
                primaryTypographyProps={{
                  fontWeight: isActive(n.href) ? 700 : 500,
                  fontSize: "1.1rem"
                }}
              />
            </ListItemButton>
          ))}
        </List>

        <Box sx={{ mt: "auto", pt: 4 }}>
          <Button
            fullWidth
            variant="contained"
            component={Link}
            href="/contact"
            onClick={() => setOpen(false)}
            sx={{
              py: 1.5,
              borderRadius: 3,
              fontWeight: 700,
              background: `linear-gradient(90deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.dark})`,
            }}
          >
            Get in Touch
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
