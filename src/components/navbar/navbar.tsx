"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Container,
  Chip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { usePathname } from "next/navigation";

const FloatingParticle = ({ delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0, 1, 0],
      scale: [0, 1, 0],
      y: [-20, -60],
      x: [0, Math.random() * 40 - 20],
    }}
    transition={{
      duration: 3,
      delay,
      repeat: Infinity,
      repeatDelay: Math.random() * 2,
    }}
    style={{
      position: "absolute",
      width: "4px",
      height: "4px",
      borderRadius: "50%",
      background: "linear-gradient(45deg, #60a5fa, #a855f7)",
      pointerEvents: "none",
    }}
  />
);

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement | null>(null);

  const navLinks = [
    { label: "Home", href: "/", icon: "🏠", color: "#e91e63" },
    { label: "About", href: "/about", icon: "👥", color: "#9c27b0" },
    { label: "Services", href: "/services", icon: "⚡", color: "#2196f3" },
    { label: "Careers", href: "/careers", icon: "💼", color: "#ff9800" },
    { label: "Contact", href: "/contact", icon: "📞", color: "#4caf50" },
  ];

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      if (navRef.current) {
        const rect = navRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const toggleDrawer = () => setMobileOpen(!mobileOpen);

  const drawer = (
    <motion.div
      initial={{ x: 300 }}
      animate={{ x: 0 }}
      exit={{ x: 300 }}
      transition={{ type: "spring", damping: 25, stiffness: 200 }}
    >
      <Box
        sx={{
          width: 320,
          height: "100vh",
          background:
            "linear-gradient(135deg, rgba(15,23,42,0.98) 0%, rgba(30,41,59,0.98) 100%)",
          backdropFilter: "blur(40px)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Animated background */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(circle at 20% 20%, rgba(59,130,246,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(168,85,247,0.1) 0%, transparent 50%)",
          }}
        />

        <Box
          sx={{
            p: 4,
            borderBottom: "1px solid rgba(255,255,255,0.1)",
            position: "relative",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: 800,
                color: "white",
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <AutoAwesomeIcon sx={{ color: "#60a5fa" }} />
              Navigation
            </Typography>
            <motion.div whileHover={{ rotate: 180 }} whileTap={{ scale: 0.9 }}>
              <IconButton
                onClick={toggleDrawer}
                sx={{
                  color: "white",
                  backgroundColor: "rgba(255,255,255,0.1)",
                }}
              >
                <CloseIcon />
              </IconButton>
            </motion.div>
          </Box>
        </Box>

        <List sx={{ pt: 3, position: "relative" }}>
          {navLinks.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                delay: index * 0.1 + 0.2,
                duration: 0.5,
                type: "spring",
              }}
            >
              <ListItem
                component={Link}
                href={item.href}
                onClick={toggleDrawer}
                sx={{
                  mx: 2,
                  mb: 2,
                  borderRadius: 3,
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  background:
                    pathname === item.href
                      ? `linear-gradient(135deg, ${item.color}40, ${item.color}20)`
                      : "transparent",
                  border:
                    pathname === item.href
                      ? `2px solid ${item.color}60`
                      : "2px solid transparent",
                  color: "white",
                  "&:hover": {
                    background: `linear-gradient(135deg, ${item.color}30, ${item.color}10)`,
                    border: `2px solid ${item.color}40`,
                    transform: "translateX(12px) scale(1.02)",
                    boxShadow: `0 8px 32px ${item.color}30`,
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    width: "100%",
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    style={{
                      fontSize: "1.5rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "40px",
                      height: "40px",
                      borderRadius: "12px",
                      background: `linear-gradient(135deg, ${item.color}40, ${item.color}60)`,
                    }}
                  >
                    {item.icon}
                  </motion.div>
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontWeight: pathname === item.href ? 700 : 500,
                      fontSize: "1.1rem",
                    }}
                  />
                  {pathname === item.href && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 500 }}
                    >
                      <Chip
                        label="Active"
                        size="small"
                        sx={{
                          backgroundColor: item.color,
                          color: "white",
                          fontWeight: 600,
                          fontSize: "0.75rem",
                        }}
                      />
                    </motion.div>
                  )}
                </Box>
              </ListItem>
            </motion.div>
          ))}
        </List>

        {/* Floating particles in drawer */}
        {[...Array(8)].map((_, i) => (
          <Box
            key={i}
            sx={{
              position: "absolute",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <FloatingParticle delay={i * 0.5} />
          </Box>
        ))}
      </Box>
    </motion.div>
  );

  return (
    <>
      <AppBar
        ref={navRef}
        position="fixed"
        elevation={0}
        sx={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.95) 100%)",
          backdropFilter: "blur(40px)",
          borderBottom: "1px solid rgba(233,30,99,0.2)",
          color: "#1e293b",
          boxShadow: "0 4px 20px rgba(233,30,99,0.1)",
          zIndex: 1300,
          top: 0,
          left: 0,
          right: 0,
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "linear-gradient(90deg, transparent, rgba(233,30,99,0.1), transparent)",
            transform: "translateX(-100%)",
            animation: "shimmer 3s infinite",
          },
          "@keyframes shimmer": {
            "0%": { transform: "translateX(-100%)" },
            "100%": { transform: "translateX(100%)" },
          },
        }}
      >
        {/* Mouse follower effect */}
        <motion.div
          style={{
            position: "absolute",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)",
            pointerEvents: "none",
            left: mousePosition.x - 100,
            top: mousePosition.y - 100,
            transition: "all 0.3s ease",
          }}
        />

        <Container maxWidth="lg">
          <Toolbar sx={{ px: 0, position: "relative" }}>
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              style={{ flexGrow: 1 }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <RocketLaunchIcon
                    sx={{
                      fontSize: "2rem",
                      background: "linear-gradient(135deg, #60a5fa, #a855f7)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  />
                </motion.div>
                <Typography
                  variant="h6"
                  component={Link}
                  href="/"
                  sx={{
                    fontWeight: 800,
                    background:
                      "linear-gradient(135deg, #e91e63 0%, #9c27b0 50%, #2196f3 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    textDecoration: "none",
                    fontSize: "1.4rem",
                    position: "relative",
                    "&:hover": {
                      "&::after": {
                        width: "100%",
                      },
                    },
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: "-4px",
                      left: 0,
                      width: "0%",
                      height: "2px",
                      background: "linear-gradient(135deg, #60a5fa, #a855f7)",
                      transition: "width 0.4s ease",
                    },
                  }}
                >
                  Maheshwari Innovatives
                </Typography>
              </Box>
            </motion.div>

            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 0.5,
                position: "relative",
              }}
            >
              {navLinks.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ y: -30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: index * 0.1 + 0.3,
                    duration: 0.6,
                    type: "spring",
                  }}
                  onHoverStart={() => setHoveredItem(item.label)}
                  onHoverEnd={() => setHoveredItem(null)}
                >
                  <Button
                    component={Link}
                    href={item.href}
                    sx={{
                      color: "#1e293b",
                      fontWeight: pathname === item.href ? 700 : 500,
                      px: 3,
                      py: 1.5,
                      borderRadius: 3,
                      position: "relative",
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      background:
                        pathname === item.href
                          ? `linear-gradient(135deg, ${item.color}40, ${item.color}20)`
                          : "transparent",
                      border:
                        pathname === item.href
                          ? `1px solid ${item.color}60`
                          : "1px solid transparent",
                      "&:hover": {
                        background: `linear-gradient(135deg, ${item.color}30, ${item.color}10)`,
                        border: `1px solid ${item.color}40`,
                        transform: "translateY(-4px)",
                        boxShadow: `0 8px 25px ${item.color}30`,
                      },

                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      {item.label}
                      {pathname === item.href && (
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ type: "spring", stiffness: 500 }}
                        >
                          <Box
                            sx={{
                              width: "6px",
                              height: "6px",
                              borderRadius: "50%",
                              background: item.color,
                              boxShadow: `0 0 10px ${item.color}`,
                            }}
                          />
                        </motion.div>
                      )}
                    </Box>
                  </Button>

                  {/* Floating particles on hover */}
                  {hoveredItem === item.label && (
                    <Box
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        pointerEvents: "none",
                      }}
                    >
                      {[...Array(5)].map((_, i) => (
                        <FloatingParticle key={i} delay={i * 0.1} />
                      ))}
                    </Box>
                  )}
                </motion.div>
              ))}
            </Box>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <IconButton
                onClick={toggleDrawer}
                sx={{
                  display: { xs: "flex", md: "none" },
                  color: "white",
                  ml: 2,
                  background:
                    "linear-gradient(135deg, rgba(59,130,246,0.2), rgba(168,85,247,0.2))",
                  border: "1px solid rgba(255,255,255,0.2)",
                  "&:hover": {
                    background:
                      "linear-gradient(135deg, rgba(59,130,246,0.3), rgba(168,85,247,0.3))",
                    boxShadow: "0 8px 25px rgba(59,130,246,0.3)",
                  },
                }}
              >
                <MenuIcon />
              </IconButton>
            </motion.div>
          </Toolbar>
        </Container>

        {/* Background particles */}
        {[...Array(6)].map((_, i) => (
          <Box
            key={i}
            sx={{
              position: "absolute",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <FloatingParticle delay={i * 0.8} />
          </Box>
        ))}
      </AppBar>

      <AnimatePresence>
        {mobileOpen && (
          <Drawer
            anchor="right"
            open={mobileOpen}
            onClose={toggleDrawer}
            sx={{
              "& .MuiDrawer-paper": {
                background: "transparent",
                boxShadow: "none",
              },
            }}
          >
            {drawer}
          </Drawer>
        )}
      </AnimatePresence>

      <Toolbar />
    </>
  );
}
