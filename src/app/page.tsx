"use client";
import {
  Box,
  Container,
  Typography,
  Button,
  Chip,
  Paper,
  Avatar,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import ArrowForward from "@mui/icons-material/ArrowForward";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import SecurityIcon from "@mui/icons-material/Security";

const FloatingOrb = ({ delay = 0, size = 100, color = "#e91e63" }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0.2, 0.6, 0.2],
      scale: [1, 1.3, 0.8, 1],
      x: [0, 60, -40, 20, 0],
      y: [0, -40, 30, -20, 0],
      rotate: [0, 180, 360],
    }}
    transition={{
      duration: 12,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    style={{
      position: "absolute",
      width: size,
      height: size,
      borderRadius: "50%",
      background: `conic-gradient(from 0deg, ${color}60, ${color}20, ${color}60)`,
      filter: "blur(2px)",
      pointerEvents: "none",
    }}
  />
);

const ParticleField = () => {
  const particles = Array.from({ length: 80 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    delay: Math.random() * 8,
    color: [`#1e3a8a`, `#7c3aed`, `#3b82f6`, `#10b981`][Math.floor(Math.random() * 4)],
  }));

  return (
    <Box
      sx={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.8, 0],
            scale: [0, 1, 0],
            y: ["-20px", "-120px"],
            x: ["0px", `${Math.random() * 60 - 30}px`],
            rotate: [0, 360],
          }}
          transition={{
            duration: 6,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeOut",
          }}
          style={{
            position: "absolute",
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${particle.color}80, ${particle.color}20)`,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}40`,
          }}
        />
      ))}
    </Box>
  );
};

const features = [
  { name: "AI-Powered Testing", icon: AutoAwesomeIcon, color: "#e91e63" },
  { name: "Cloud-Native Solutions", icon: RocketLaunchIcon, color: "#9c27b0" },
  { name: "Real-time Analytics", icon: TrendingUpIcon, color: "#2196f3" },
  { name: "Zero-Trust Security", icon: SecurityIcon, color: "#ff9800" },
];

const stats = [
  { value: "500+", label: "Projects Delivered", color: "#e91e63" },
  { value: "99.9%", label: "Uptime Guarantee", color: "#9c27b0" },
  { value: "24/7", label: "Global Support", color: "#2196f3" },
  { value: "<2s", label: "Response Time", color: "#ff9800" },
];

export default function HomePage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  useEffect(() => {
    const handleMouseMove = (e: any) =>
      setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <Box
      ref={containerRef}
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 20% 20%, rgba(30, 58, 138, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(124, 58, 237, 0.05) 0%, transparent 50%)",
          pointerEvents: "none",
        },
      }}
    >
      {/* Enhanced Mouse follower */}
      <motion.div
        style={{
          position: "fixed",
          left: mousePosition.x - 250,
          top: mousePosition.y - 250,
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "conic-gradient(from 0deg, rgba(30,58,138,0.1), rgba(124,58,237,0.1), rgba(59,130,246,0.1), rgba(30,58,138,0.1))",
          pointerEvents: "none",
          zIndex: 1,
          filter: "blur(1px)",
        }}
        animate={{ 
          x: 0, 
          y: 0,
          rotate: 360,
        }}
        transition={{ 
          x: { type: "spring", stiffness: 50, damping: 20 },
          y: { type: "spring", stiffness: 50, damping: 20 },
          rotate: { duration: 20, repeat: Infinity, ease: "linear" }
        }}
      />

      {/* Enhanced Floating orbs */}
      <FloatingOrb delay={0} size={180} color="#1e3a8a" />
      <FloatingOrb delay={3} size={120} color="#7c3aed" />
      <FloatingOrb delay={6} size={100} color="#3b82f6" />
      <FloatingOrb delay={9} size={90} color="#10b981" />

      {/* Particle field */}
      <ParticleField />

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 2 }}>
        {/* Hero Section */}
        <Box sx={{ textAlign: "center", py: { xs: 8, md: 12 } }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Chip
              icon={<RocketLaunchIcon />}
              label="Next-Gen QA Solutions"
              sx={{
                background: "linear-gradient(45deg, #1e3a8a, #7c3aed)",
                color: "white",
                fontWeight: 600,
                mb: 4,
                px: 3,
                py: 1,
              }}
            />
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "3rem", md: "4.5rem", lg: "6rem" },
                fontWeight: 900,
                lineHeight: 0.9,
                mb: 3,
                background:
                  "linear-gradient(135deg, #1e3a8a 0%, #7c3aed 50%, #3b82f6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              MAHESHWARI
              <br />
              <span style={{ fontSize: "0.7em" }}>INNOVATIVES</span>
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: "text.secondary",
                fontWeight: 400,
                mb: 6,
                maxWidth: "800px",
                mx: "auto",
                lineHeight: 1.6,
              }}
            >
              Revolutionizing Quality Assurance with{" "}
              <span style={{ color: "#1e3a8a", fontWeight: 600 }}>
                AI-Powered Testing Solutions
              </span>
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 3,
                justifyContent: "center",
                flexWrap: "wrap",
                mb: 8,
              }}
            >
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowForward />}
                sx={{ px: 4, py: 2, fontSize: "1.1rem", fontWeight: 700 }}
              >
                Get Started
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{ px: 4, py: 2, fontSize: "1.1rem", fontWeight: 600 }}
              >
                Watch Demo
              </Button>
            </Box>
          </motion.div>
        </Box>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Grid container spacing={3} sx={{ mb: 10 }}>
            {stats.map((stat, index) => (
              <Grid size={{ xs: 6, md: 3 }} key={stat.label}>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                  whileHover={{ y: -5 }}
                >
                  <Paper
                    sx={{
                      p: 4,
                      textAlign: "center",
                      background: "rgba(255,255,255,0.9)",
                      backdropFilter: "blur(20px)",
                      border: "1px solid rgba(226,232,240,0.8)",
                      position: "relative",
                      overflow: "hidden",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "4px",
                        background: stat.color,
                      },
                    }}
                  >
                    <Typography
                      variant="h3"
                      sx={{ color: stat.color, fontWeight: 800, mb: 1 }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: "text.secondary", fontWeight: 600 }}
                    >
                      {stat.label}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="h3"
              sx={{ fontWeight: 700, mb: 3, color: "text.primary" }}
            >
              Our Expertise
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: "text.secondary", maxWidth: "600px", mx: "auto" }}
            >
              Cutting-edge technologies and methodologies for comprehensive
              quality assurance
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Grid size={{ xs: 12, sm: 6, md: 3 }} key={feature.name}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ y: -8 }}
                  >
                    <Paper
                      sx={{
                        p: 4,
                        textAlign: "center",
                        background: "rgba(255,255,255,0.9)",
                        backdropFilter: "blur(20px)",
                        border: "1px solid rgba(226,232,240,0.8)",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <Avatar
                        sx={{
                          bgcolor: feature.color,
                          width: 64,
                          height: 64,
                          mb: 3,
                        }}
                      >
                        <IconComponent sx={{ fontSize: 32 }} />
                      </Avatar>
                      <Typography
                        variant="h6"
                        sx={{ color: "text.primary", fontWeight: 700, mb: 2 }}
                      >
                        {feature.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary", textAlign: "center" }}
                      >
                        Advanced {feature.name.toLowerCase()} solutions for
                        modern applications
                      </Typography>
                    </Paper>
                  </motion.div>
                </Grid>
              );
            })}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}
