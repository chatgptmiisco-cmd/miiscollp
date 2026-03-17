"use client";
import React, { useState, useEffect } from "react";
import { useTheme as useNextTheme } from "next-themes";
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
  Grid,
  Menu,
  MenuItem,
  Fade,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const { theme: nextTheme, setTheme } = useNextTheme();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const nav = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    {
      label: "Services",
      href: "/services",
      dropdown: [
        {
          title: "Development",
          items: [
            { label: "Website Development", href: "/services/web-development" },
            { label: "App Development", href: "/services/app-development" },
          ]
        },
        {
          title: "QA & Testing",
          items: [
            { label: "Mobile Application Testing", href: "/services/mobile-qa" },
            { label: "Test Automation Services", href: "/services/automation-testing" },
            { label: "Manual Testing Services", href: "/services/manual-testing" },
            { label: "API Testing Services", href: "/services/api-testing" },
            { label: "Load and Performance Testing", href: "/services/performance-testing" },
            { label: "Security Testing Services", href: "/services/security-testing" },
            { label: "Compatibility Testing Services", href: "/services/compatibility-testing" },
            { label: "Unit Test Services", href: "/services/unit-testing" },
            { label: "Cross Browser Testing", href: "/services/cross-browser-testing" },
          ]
        }
      ]
    },
    { label: "Projects", href: "/projects" },
    { label: "Careers", href: "/careers" },
  ];

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <AppBar
        position="fixed"
        elevation={mounted && scrolled ? 2 : 0}
        sx={{
          background: (mounted && scrolled) || pathname !== "/"
            ? "var(--nav-bg)"
            : "transparent",
          backdropFilter: (mounted && scrolled) || pathname !== "/" ? "blur(16px)" : "none",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          borderBottom: (mounted && scrolled) || pathname !== "/" ? "1px solid var(--border-muted)" : "none",
          py: mounted && scrolled ? 0.5 : 1.5,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ display: "flex", justifyContent: "space-between" }}>
            {/* Logo / Branding */}
            <Box component={Link} href="/" sx={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
              >
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    bgcolor: '#0d7ff2',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 16px rgba(13, 127, 242, 0.25)'
                  }}
                >
                  <Typography sx={{ color: 'white', fontWeight: 900, fontSize: '1.2rem' }}>M</Typography>
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 950,
                    letterSpacing: "-0.04em",
                    color: (mounted && scrolled) || pathname !== "/" ? "var(--text-main)" : "var(--text-main)",
                    fontSize: { xs: "1.2rem", md: "1.5rem" }
                  }}
                >
                  MIISCO
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
                  {n.dropdown ? (
                    <Box onMouseEnter={handleOpenMenu} onMouseLeave={handleCloseMenu}>
                      <Button
                        component={Link}
                        href={n.href}
                        sx={{
                          color: isActive(n.href) || openMenu ? "var(--text-main)" : "var(--nav-text)",
                          fontWeight: 700,
                          px: 2,
                          py: 1,
                          fontSize: "0.95rem",
                          position: "relative",
                          textTransform: "none",
                          "&:hover": {
                            color: "var(--text-main)",
                            bgcolor: "rgba(0, 0, 0, 0.04)",
                            borderRadius: "10px"
                          },
                        }}
                        endIcon={<KeyboardArrowDownIcon sx={{
                          transform: openMenu ? 'rotate(180deg)' : 'rotate(0)',
                          transition: 'transform 0.3s',
                          fontSize: 18
                        }} />}
                      >
                        {n.label}
                      </Button>
                      <Menu
                        anchorEl={anchorEl}
                        open={openMenu}
                        onClose={handleCloseMenu}
                        disableScrollLock
                        TransitionComponent={Fade}
                        MenuListProps={{
                          onMouseEnter: () => setAnchorEl(anchorEl),
                          onMouseLeave: handleCloseMenu,
                          sx: { p: 0 }
                        }}
                        PaperProps={{
                          sx: {
                            mt: 1.5,
                            bgcolor: "var(--nav-menu)",
                            backdropFilter: "blur(25px)",
                            border: "1px solid var(--border-muted)",
                            borderRadius: "24px",
                            boxShadow: "0 20px 60px rgba(0,0,0,0.1), 0 4px 16px rgba(0,0,0,0.05)",
                            minWidth: "600px",
                            p: 4,
                          }
                        }}
                      >
                        <Grid container spacing={5}>
                          {n.dropdown.map((category, idx) => (
                            <Grid size={{ xs: 12, md: idx === 0 ? 5 : 7 }} key={idx}>
                              <Typography variant="overline" sx={{
                                fontWeight: 900,
                                color: "#0d7ff2",
                                letterSpacing: 2,
                                mb: 2.5,
                                display: "block",
                                px: 1
                              }}>
                                {category.title}
                              </Typography>
                              <List sx={{ p: 0 }}>
                                {category.items.map((item, iidx) => (
                                  <ListItemButton
                                    key={iidx}
                                    component={Link}
                                    href={item.href}
                                    onClick={handleCloseMenu}
                                    sx={{
                                      borderRadius: "12px",
                                      py: 1.5,
                                      px: 1,
                                      color: "var(--text-secondary)",
                                      transition: "all 0.2s ease",
                                      "&:hover": {
                                        color: "var(--text-main)",
                                        bgcolor: "rgba(13, 127, 242, 0.05)",
                                        "& .MuiTypography-root": { color: "var(--text-main)" }
                                      }
                                    }}
                                  >
                                    <ListItemText
                                      primary={item.label}
                                      primaryTypographyProps={{
                                        fontWeight: 600,
                                        fontSize: "0.9rem"
                                      }}
                                    />
                                  </ListItemButton>
                                ))}
                              </List>
                            </Grid>
                          ))}
                        </Grid>
                        <Box sx={{ mt: 3, pt: 3, borderTop: "1px solid var(--border-muted)", textAlign: "center" }}>
                          <Button
                            component={Link}
                            href="/services"
                            onClick={handleCloseMenu}
                            sx={{ color: "#0d7ff2", fontWeight: 800, textTransform: "none" }}
                          >
                            Explore All Services
                          </Button>
                        </Box>
                      </Menu>
                    </Box>
                  ) : (
                    <Button
                      component={Link}
                      href={n.href}
                      sx={{
                        color: isActive(n.href) ? "var(--text-main)" : "var(--nav-text)",
                        fontWeight: 600,
                        px: 2,
                        position: "relative",
                        "&:hover": {
                          color: "var(--text-main)",
                          backgroundColor: "rgba(0, 0, 0, 0.04)",
                        },
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          bottom: 6,
                          left: "50%",
                          width: isActive(n.href) ? "20px" : "0px",
                          height: "2px",
                          background: "#0d7ff2",
                          transition: "all 0.3s ease",
                          transform: "translateX(-50%)",
                        }
                      }}
                    >
                      {n.label}
                    </Button>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                style={{ display: 'flex', gap: '12px' }}
              >
                {mounted && (
                  <IconButton
                    onClick={() => setTheme(nextTheme === "dark" ? "light" : "dark")}
                    sx={{
                      color: pathname === "/" && !scrolled ? "#fff" : "var(--text-main)",
                      bgcolor: "rgba(0,0,0,0.05)",
                      mr: 1,
                      "&:hover": { bgcolor: "rgba(13, 127, 242, 0.1)", color: "#0d7ff2" }
                    }}
                  >
                    {nextTheme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
                  </IconButton>
                )}
                <Button
                  variant="contained"
                  component={Link}
                  href="/contact"
                  sx={{
                    px: 3,
                    borderRadius: "12px",
                    textTransform: "none",
                    fontWeight: 800,
                    bgcolor: "#0d7ff2",
                    color: "#fff",
                    boxShadow: "0 4px 16px rgba(13, 127, 242, 0.25)",
                    "&:hover": {
                      bgcolor: "#0b6ed1",
                      transform: "translateY(-2px)",
                    },
                    transition: "all 0.2s ease-in-out",
                  }}
                >
                  Get in Touch
                </Button>
              </motion.div>
            </Box>

            {/* Mobile Menu Toggle */}
            <IconButton
              onClick={() => setOpen(true)}
              sx={{
                display: { md: "none" },
                color: "var(--text-main)",
                background: "rgba(0, 0, 0, 0.04)",
                "&:hover": { background: "var(--border-light)" }
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
            maxWidth: { xs: "100%", sm: 380 },
            bgcolor: "var(--nav-menu)",
            backdropFilter: "blur(24px)",
            backgroundImage: "none",
            color: "var(--text-main)",
            p: 3,
            borderLeft: "1px solid var(--border-muted)"
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 4 }}>
          <IconButton onClick={() => setOpen(false)} sx={{ color: "var(--text-main)" }}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4, px: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 950, letterSpacing: "-0.04em", color: "#0d7ff2" }}>
            MIISCO
          </Typography>
          {mounted && (
            <IconButton
              onClick={() => setTheme(nextTheme === "dark" ? "light" : "dark")}
              sx={{ color: "var(--text-main)", bgcolor: "rgba(0,0,0,0.05)" }}
            >
              {nextTheme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          )}
        </Box>

        <List sx={{ gap: 1, display: "flex", flexDirection: "column" }}>
          {nav.map((n) => (
            <React.Fragment key={n.label}>
              {n.dropdown ? (
                <Accordion sx={{
                  background: "transparent",
                  color: "var(--text-main)",
                  boxShadow: "none",
                  "&::before": { display: "none" }
                }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: "var(--text-main)" }} />}
                    sx={{ p: 2, "&.Mui-expanded": { minHeight: 48 } }}
                  >
                    <Typography sx={{ fontWeight: 600 }}>{n.label}</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ p: 0, bgcolor: "rgba(0,0,0,0.02)" }}>
                    <ListItemButton
                      component={Link}
                      href={n.href}
                      onClick={() => setOpen(false)}
                      sx={{ py: 1.5, borderBottom: "1px solid var(--border-muted)" }}
                    >
                      <ListItemText
                        primary="View All Services"
                        primaryTypographyProps={{
                          fontSize: "0.9rem",
                          fontWeight: 700,
                          color: "#0d7ff2"
                        }}
                      />
                    </ListItemButton>
                    {n.dropdown.map((category, idx) => (
                      <Box key={idx} sx={{ p: 2 }}>
                        <Typography variant="caption" sx={{ color: "#0d7ff2", fontWeight: 800, textTransform: "uppercase", px: 2 }}>
                          {category.title}
                        </Typography>
                        <List>
                          {category.items.map((item, iidx) => (
                            <ListItemButton
                              key={iidx}
                              component={Link}
                              href={item.href}
                              onClick={() => setOpen(false)}
                            >
                              <ListItemText primary={item.label} primaryTypographyProps={{ fontSize: "0.9rem" }} />
                            </ListItemButton>
                          ))}
                        </List>
                      </Box>
                    ))}
                  </AccordionDetails>
                </Accordion>
              ) : (
                <ListItemButton
                  component={Link}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  sx={{
                    borderRadius: "12px",
                    mb: 1.5,
                    px: 3,
                    py: 2,
                    backgroundColor: isActive(n.href) ? "rgba(13, 127, 242, 0.08)" : "transparent",
                    color: isActive(n.href) ? "#0d7ff2" : "var(--text-main)",
                    "&:hover": {
                      backgroundColor: "rgba(0, 0, 0, 0.04)",
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
              )}
            </React.Fragment>
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
              background: "linear-gradient(90deg, #0d7ff2, #2563eb)",
              color: "#fff",
            }}
          >
            Get in Touch
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
