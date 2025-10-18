"use client";
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { ListItemButton, ListItemText } from "@mui/material";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const nav = [
    { label: "Home", href: "/" }, // ✅ Added Home link
    { label: "Solutions", href: "/services" },
    // { label: "Industries", href: "/services#industries" },
    // { label: "Case Studies", href: "/caseStudies" },
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <AppBar
        position="sticky"
        elevation={2}
        sx={{
          background: "linear-gradient(90deg, #111827 0%, #1f2937 100%)", // darker modern gradient
        }}
      >
        <Toolbar sx={{ display: "flex", gap: 2 }}>
          {/* Logo / Branding */}
          <Box
            sx={{ flexGrow: 1, display: "flex", alignItems: "center", gap: 2 }}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                Maheshwari Innovatives
              </Typography>
            </motion.div>
          </Box>

          {/* Desktop Menu */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 1,
              alignItems: "center",
            }}
          >
            {nav.map((n) => (
              <motion.div
                key={n.label}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  component={Link}
                  href={n.href}
                  color="inherit"
                  sx={{ color: "white", fontWeight: 600 }}
                >
                  {n.label}
                </Button>
              </motion.div>
            ))}
            <Button
              variant="contained"
              color="primary"
              component={Link}
              href="/contact"
              sx={{
                ml: 2,
                borderRadius: 2,
                textTransform: "none",
                fontWeight: 600,
              }}
            >
              Talk to Us
            </Button>
          </Box>

          {/* Mobile Menu */}
          <IconButton
            onClick={() => setOpen(true)}
            sx={{ display: { md: "none" } }}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile view */}
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 260, p: 2 }}>
          <List>
            {nav.map((n) => (
              <ListItemButton
                key={n.label}
                component={Link}
                href={n.href}
                onClick={() => setOpen(false)}
              >
                <ListItemText primary={n.label} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
