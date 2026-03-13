"use client";
import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Stack,
  Paper,
  useTheme,
  Divider,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  Verified,
  Lightbulb,
  Groups,
} from "@mui/icons-material";

export default function AboutPage() {
  const theme = useTheme();

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <Box sx={{ bgcolor: "#0a0f1c", color: "white", minHeight: "100vh" }}>
      {/* Hero Section */}
      <Box sx={{ p: { xs: 4, md: 10 }, px: { lg: 15 }, pt: { xs: 15, md: 25 } }}>
        <Box
          sx={{
            minHeight: "600px",
            display: "flex",
            flexDirection: "column",
            gap: 3,
            borderRadius: "40px",
            alignItems: "center",
            justifyContent: "center",
            p: 8,
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            backgroundImage: `linear-gradient(rgba(10, 15, 28, 0.7), rgba(10, 15, 28, 0.9)), url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            border: "1px solid rgba(255, 255, 255, 0.05)"
          }}
        >
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} style={{ zIndex: 10, maxWidth: "800px" }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.8rem", md: "5.5rem" },
                fontWeight: 950,
                mb: 4,
                letterSpacing: "-0.04em",
                color: "white",
                lineHeight: 1.1,
              }}
            >
              Precision with <Box component="span" sx={{ color: "#0d7ff2" }}>Purpose</Box>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#cbd5e1",
                fontSize: { xs: "1.1rem", md: "1.25rem" },
                fontWeight: 400,
                lineHeight: 1.6,
                maxWidth: "600px",
                mx: "auto",
                mb: 4,
              }}
            >
              Our mission is to drive digital excellence through high-end IT services and rigorous software testing, ensuring your technology performs when it matters most.
            </Typography>
            <Stack direction="row" spacing={2} justifyContent="center">
              <Button
                variant="contained"
                sx={{
                  background: "linear-gradient(90deg, #0d7ff2, #2563eb)",
                  color: "white",
                  px: 6,
                  py: 2,
                  borderRadius: "16px",
                  fontWeight: 800,
                  fontSize: "1rem",
                  textTransform: "none",
                  boxShadow: "0 8px 24px rgba(13, 127, 242, 0.3)",
                  "&:hover": { 
                    background: "linear-gradient(90deg, #2563eb, #0d7ff2)",
                    transform: "translateY(-2px)",
                    boxShadow: "0 12px 32px rgba(13, 127, 242, 0.4)",
                  },
                  transition: "all 0.3s ease"
                }}
              >
                Our Legacy
              </Button>
              <Button
                variant="outlined"
                sx={{
                  borderColor: "rgba(255,255,255,0.2)",
                  color: "white",
                  px: 6,
                  py: 2,
                  borderRadius: "16px",
                  fontWeight: 800,
                  fontSize: "1rem",
                  textTransform: "none",
                  "&:hover": {
                    borderColor: "white",
                    bgcolor: "rgba(255,255,255,0.05)",
                    transform: "translateY(-2px)"
                  },
                  transition: "all 0.3s ease"
                }}
              >
                Our Team
              </Button>
            </Stack>
          </motion.div>
        </Box>
      </Box>

      {/* Our Story Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Grid container spacing={{ xs: 4, md: 10 }} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <Typography variant="h3" sx={{ fontWeight: 800, mb: 3, letterSpacing: "-0.015em", fontSize: { xs: "2rem", md: "2.5rem" } }}>
                Our Story
              </Typography>
              <Stack spacing={2} sx={{ color: "#94a3b8", fontSize: "0.95rem", lineHeight: 1.8 }}>
                <Typography>
                  Founded on a commitment to quality, Miisco began with a vision to redefine software testing standards. In an era where digital reliability is paramount, we saw a gap between rapid development and robust assurance.
                </Typography>
                <Typography>
                  Over the years, we have evolved into a premier IT services partner, helping global enterprises navigate complex digital landscapes with confidence and precision. Our journey is marked by a relentless pursuit of technical excellence and a deep-seated belief that every line of code should serve a greater purpose.
                </Typography>
                <Typography>
                  Today, Miisco stands as a beacon of reliability for Fortune 500 companies and disruptive startups alike, delivering bespoke engineering solutions that power the modern world.
                </Typography>
              </Stack>
            </motion.div>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Box
                sx={{
                  position: "relative",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    inset: "-10px",
                    background: "linear-gradient(to right, #0d7ff2, #2563eb)",
                    borderRadius: "16px",
                    filter: "blur(12px)",
                    opacity: 0.15,
                  }
                }}
              >
                <Box
                  component="img"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZ3SHLg7bYfLncfC-JkvWNPE2ugIzyQKwi5X6i-MeEypwu6RljI-Y1FgE69DcWRDbHfyphwohSzchtNrdntepoAOhlAfVZNpZ7U3hsMFilq7FlSIssyknZIl4B9iDNLeyb4x6jmDJB_CDSIQIjKzkPzlqZqvm3boof-TBtqbERjHxgLOyW6nCUsjF1uVZNmii0V5kBvyjco9npZvemCmoc7nq6ktLs21SwnY9sptIEpHqSmhWz5ERa5VhJppjmRQjAnrq74_Ty0tU"
                  alt="Our Team"
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: { xs: "300px", md: "380px" },
                    objectFit: "cover",
                    borderRadius: "12px",
                    filter: "grayscale(100%)",
                    transition: "all 0.5s ease",
                    "&:hover": { filter: "grayscale(0%)", transform: "scale(1.02)" },
                  }}
                />
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Core Values Section */}
      <Box sx={{ py: 15, bgcolor: "rgba(255, 255, 255, 0.02)", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>
              Core Values
            </Typography>
            <Typography variant="body2" sx={{ color: "#94a3b8", maxWidth: "600px", mx: "auto" }}>
              The principles that guide every interaction and every solution we build.
            </Typography>
          </Box>
          <Grid container spacing={3}>
            {[
              {
                title: "Quality First",
                icon: <Verified sx={{ fontSize: 32, color: "#0d7ff2" }} />,
                desc: "We don't compromise. Excellence is our baseline, and precision is our signature in every project we deliver.",
              },
              {
                title: "Innovation Driven",
                icon: <Lightbulb sx={{ fontSize: 32, color: "#0d7ff2" }} />,
                desc: "We stay ahead of the curve, leveraging emerging technologies and creative methodologies to solve complex challenges.",
              },
              {
                title: "Client-Centric",
                icon: <Groups sx={{ fontSize: 32, color: "#0d7ff2" }} />,
                desc: "Your success is our metric. We build deep partnerships and align our technical strategies with your business goals.",
              },
            ].map((val, i) => (
              <Grid size={{ xs: 12, md: 4 }} key={i}>
                <Paper
                  sx={{
                    p: 5,
                    height: "100%",
                    borderRadius: "24px",
                    bgcolor: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.05)",
                    transition: "all 0.4s ease",
                    "&:hover": { 
                      bgcolor: "rgba(255,255,255,0.04)",
                      borderColor: "rgba(13, 127, 242, 0.3)",
                      transform: "translateY(-5px)"
                    },
                  }}
                >
                  <Box sx={{ mb: 2 }}>{val.icon}</Box>
                  <Typography variant="h6" sx={{ fontWeight: 800, mb: 1.5, color: "white" }}>
                    {val.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#94a3b8", lineHeight: 1.6 }}>
                    {val.desc}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Leadership Team Section */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography variant="h4" sx={{ fontWeight: 800, mb: 1.5 }}>
            Leadership Team
          </Typography>
          <Typography variant="body2" sx={{ color: "#94a3b8" }}>
            Led by industry veterans with a passion for transformative technology.
          </Typography>
        </Box>
        <Grid container spacing={3} justifyContent="center">
          {[
            {
              name: "Mohit Maheshwari",
              title: "Founder & CEO",
              image: "/founder.jpg",
              message: "Leading with vision and innovation to transform the digital landscape."
            },
            {
              name: "Shobhit Maheshwari",
              title: "Founder & CFO",
              image: "/shobhit.jpeg",
              message: "Driving financial excellence and strategic growth for sustainable success."
            },
            {
              name: "Vishal Maheshwari",
              title: "Co-Founder & CMO",
              image: "/cofounder.jpg",
              message: "Building powerful brands and meaningful connections with our clients."
            },
          ].map((leader, i) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i}>
              <Paper
                sx={{
                  p: 4,
                  height: "100%",
                  borderRadius: "24px",
                  bgcolor: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  transition: "all 0.4s ease",
                  textAlign: "center",
                  "&:hover": {
                    bgcolor: "rgba(255,255,255,0.04)",
                    borderColor: "rgba(13, 127, 242, 0.3)",
                    transform: "translateY(-8px)",
                    "& img": { transform: "scale(1.05)" }
                  },
                }}
              >
                <Box sx={{ position: "relative", overflow: "hidden", borderRadius: "16px", mb: 3, aspectRatio: "1/1", maxWidth: "200px", mx: "auto" }}>
                  <Box
                    component="img"
                    src={leader.image}
                    alt={leader.name}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.5s ease",
                    }}
                  />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 800, color: "white", lineHeight: 1.2, mb: 0.5 }}>
                  {leader.name}
                </Typography>
                <Typography variant="body2" sx={{ color: "#0d7ff2", fontWeight: 700, display: "block", mb: 2 }}>
                  {leader.title}
                </Typography>
                <Divider sx={{ borderColor: "rgba(255,255,255,0.05)", mb: 2 }} />
                <Typography variant="body2" sx={{ color: "#94a3b8", lineHeight: 1.6, fontStyle: "italic" }}>
                  &quot;{leader.message}&quot;
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Global Presence Section */}
      <Box sx={{ bgcolor: "#0a0f1c", py: 15, position: "relative", overflow: "hidden", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            opacity: 0.1,
            pointerEvents: "none",
            backgroundImage: `url("https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=2000&q=80")`,
            backgroundSize: "cover",
          }}
        />
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Grid container spacing={8} alignItems="center">
            <Grid size={{ xs: 12, lg: 6 }}>
              <Typography variant="h3" sx={{ fontWeight: 800, mb: 3, fontSize: { xs: "2rem", md: "2.5rem" } }}>
                Global Presence
              </Typography>
              <Typography variant="body2" sx={{ color: "#94a3b8", fontSize: "1rem", mb: 4, lineHeight: 1.7 }}>
                Headquartered in Silicon Valley with strategic hubs in London, Bangalore, and Tokyo, Miisco supports clients across 15 countries. Our global delivery model ensures 24/7 operational excellence and access to world-class talent.
              </Typography>
              <Grid container spacing={3}>
                {[
                  { label: "Global Clients", value: "150+" },
                  { label: "Major Hubs", value: "4" },
                  { label: "Specialists", value: "500+" },
                ].map((stat, i) => (
                  <Grid size={{ xs: 4 }} key={i}>
                    <Typography variant="h4" sx={{ fontWeight: 800, color: "#0d7ff2" }}>
                      {stat.value}
                    </Typography>
                    <Typography variant="caption" sx={{ color: "#64748b", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                      {stat.label}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid size={{ xs: 12, lg: 6 }}>
              <Paper
                sx={{
                  p: 5,
                  borderRadius: "24px",
                  bgcolor: "rgba(255, 255, 255, 0.02)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  maxWidth: "500px",
                  ml: { lg: "auto" }
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 800, mb: 3 }}>
                  Strategic Locations
                </Typography>
                <Stack spacing={2.5}>
                  {[
                    "San Francisco, USA (HQ)",
                    "London, UK",
                    "Tokyo, Japan",
                    "Bangalore, India",
                  ].map((loc, i) => (
                    <Stack key={i} direction="row" spacing={2} alignItems="center">
                      <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "#0d7ff2" }} />
                      <Typography sx={{ color: "#cbd5e1", fontSize: "0.9rem" }}>{loc}</Typography>
                    </Stack>
                  ))}
                </Stack>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Join Our Mission Section */}
      <Container maxWidth="lg" sx={{ py: 15 }}>
        <Paper
          sx={{
            p: { xs: 6, md: 10 },
            textAlign: "center",
            borderRadius: "32px",
            bgcolor: "rgba(13, 127, 242, 0.1)",
            border: "1px solid rgba(13, 127, 242, 0.2)",
          }}
        >
          <Typography variant="h2" color={"white"} sx={{ fontWeight: 900, mb: 4, fontSize: { xs: "2.5rem", md: "3.5rem" } }}>
            Join Our Mission
          </Typography>
          <Typography variant="body1" sx={{ color: "#94a3b8", fontSize: "1.125rem", mb: 6, maxWidth: "600px", mx: "auto" }}>
            We are always looking for exceptional talent to help us redefine digital excellence. If you are passionate about quality and innovation, we want to hear from you.
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center">
            {/* <Button
              variant="contained"
              sx={{
                bgcolor: "#0d7ff2",
                color: "white",
                px: 6,
                py: 2,
                borderRadius: "12px",
                fontWeight: 800,
                fontSize: "1.1rem",
                textTransform: "none",
                boxShadow: "0 10px 20px rgba(13, 127, 242, 0.2)",
                "&:hover": { bgcolor: "#0b6ed1" },
              }}
            >
              Explore Careers
            </Button> */}
            <Button
              variant="outlined"
              href="/contact"
              sx={{
                borderColor: "rgba(255,255,255,0.1)",
                color: "white",
                bgcolor: "#101922",
                px: 6,
                py: 2,
                borderRadius: "12px",
                fontWeight: 800,
                fontSize: "1.1rem",
                textTransform: "none",
                "&:hover": { borderColor: "rgba(255,255,255,0.2)", bgcolor: "#1a2633" },
              }}
            >
              Talk to Us
            </Button>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}
