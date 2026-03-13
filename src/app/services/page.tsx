"use client";
import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Stack,
  Button,
  Paper,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  Code,
  Storage,
  Terminal,
  Smartphone,
  Palette,
  PrecisionManufacturing,
  BugReport,
  Api,
  FactCheck,
  TrendingUp,
  ArrowForward,
  Security,
  Speed,
  Devices,
  Language,
  IntegrationInstructions,
} from "@mui/icons-material";
import Link from "next/link";

const services = [
  {
    title: "Website Development",
    description: "Modern web applications with React, Next.js, and cutting-edge technologies tailored for scalability and performance.",
    icon: <Code sx={{ fontSize: 24 }} />,
    color: "#0d7ff2",
    href: "/services/web-development"
  },
  {
    title: "App Development",
    description: "User-centric iOS and Android applications designed for high engagement, performance, and seamless offline capability.",
    icon: <Smartphone sx={{ fontSize: 24 }} />,
    color: "#0d7ff2",
    href: "/services/app-development"
  },
  {
    title: "Figma UI Design",
    description: "Professional UI/UX design and prototyping with Figma to create stunning, user-friendly interfaces that bridge vision and reality.",
    icon: <Palette sx={{ fontSize: 24 }} />,
    color: "#0d7ff2",
    href: "/contact"
  },
  {
    title: "Mobile Application Testing",
    description: "Comprehensive mobile app testing services ensuring flawless performance across all devices and platforms.",
    icon: <Devices sx={{ fontSize: 24 }} />,
    color: "#0d7ff2",
    href: "/services/mobile-qa"
  },
  {
    title: "Test Automation Services",
    description: "Accelerate your testing process with comprehensive automation testing services for efficient QA and faster releases.",
    icon: <PrecisionManufacturing sx={{ fontSize: 24 }} />,
    color: "#0d7ff2",
    href: "/services/automation-testing"
  },
  {
    title: "Manual Testing Services",
    description: "Expert manual testing services combining human expertise with systematic methodologies to identify issues automated tests might miss.",
    icon: <FactCheck sx={{ fontSize: 24 }} />,
    color: "#0d7ff2",
    href: "/services/manual-testing"
  },
  {
    title: "API Testing Services",
    description: "Comprehensive API testing for REST, SOAP, and GraphQL APIs to ensure seamless integration and optimal performance.",
    icon: <Api sx={{ fontSize: 24 }} />,
    color: "#0d7ff2",
    href: "/services/api-testing"
  },
  {
    title: "Load and Performance Testing",
    description: "Ensure your application performs flawlessly under any load with our comprehensive performance testing services.",
    icon: <Speed sx={{ fontSize: 24 }} />,
    color: "#0d7ff2",
    href: "/services/performance-testing"
  },
  {
    title: "Security Testing Services",
    description: "Protect your applications from vulnerabilities and cyber threats with our comprehensive security testing services.",
    icon: <Security sx={{ fontSize: 24 }} />,
    color: "#0d7ff2",
    href: "/services/security-testing"
  },
  {
    title: "Compatibility Testing Services",
    description: "Ensure your software works flawlessly across all platforms, devices, and browsers with comprehensive compatibility testing.",
    icon: <Language sx={{ fontSize: 24 }} />,
    color: "#0d7ff2",
    href: "/services/compatibility-testing"
  },
  {
    title: "Unit Test Services",
    description: "Ensure code quality and reliability with comprehensive unit testing services for all platforms and frameworks.",
    icon: <IntegrationInstructions sx={{ fontSize: 24 }} />,
    color: "#0d7ff2",
    href: "/services/unit-testing"
  },
  {
    title: "Cross Browser Testing",
    description: "Ensure your application works flawlessly across all browsers and devices with our comprehensive cross-browser testing.",
    icon: <BugReport sx={{ fontSize: 24 }} />,
    color: "#0d7ff2",
    href: "/services/cross-browser-testing"
  },
];

export default function ServicesPage() {
  const theme = useTheme();

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <Box sx={{ bgcolor: "#0a0f1c", color: "white", minHeight: "100vh", pb: 15 }}>
      {/* Hero Section */}
      <Box sx={{ pt: { xs: 15, md: 25 }, pb: 10 }}>
        <Container maxWidth="lg">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.8rem", md: "5.5rem" },
                fontWeight: 950,
                mb: 4,
                letterSpacing: "-0.04em",
                lineHeight: 1.1,
                color: "white"
              }}
            >
              Precision <Box component="span" sx={{ color: "#0d7ff2" }}>Engineering</Box> & QA
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#94a3b8",
                maxWidth: "700px",
                lineHeight: 1.6,
                fontWeight: 400,
                fontSize: { xs: "1.1rem", md: "1.25rem" },
              }}
            >
              Comprehensive technology solutions tailored to scale your business and drive digital transformation. We bridge the gap between vision and reality.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Services Grid */}
      <Container maxWidth="lg">
        <Grid container spacing={4} component={motion.div} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          {services.map((service, i) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i}>
              <motion.div variants={fadeInUp}>
                <Paper
                  sx={{
                    p: 5,
                    height: "100%",
                    borderRadius: "24px",
                    bgcolor: "rgba(255, 255, 255, 0.02)",
                    border: "1px solid rgba(255, 255, 255, 0.05)",
                    transition: "all 0.4s ease",
                    display: "flex",
                    flexDirection: "column",
                    "&:hover": {
                      bgcolor: "rgba(255, 255, 255, 0.04)",
                      transform: "translateY(-10px)",
                      borderColor: "rgba(13, 127, 242, 0.3)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: "16px",
                      bgcolor: "rgba(13, 127, 242, 0.1)",
                      color: "#0d7ff2",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 4,
                    }}
                  >
                    {service.icon}
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 800, mb: 2, color: "white" }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: "#94a3b8", lineHeight: 1.7, mb: 4, flexGrow: 1 }}>
                    {service.description}
                  </Typography>
                  <Button
                    component={Link}
                    href={service.href}
                    sx={{
                      color: "#0d7ff2",
                      textTransform: "none",
                      fontWeight: 800,
                      p: 0,
                      justifyContent: "flex-start",
                      "& .MuiButton-endIcon": { ml: 1 },
                      "&:hover": { bgcolor: "transparent", color: "white" }
                    }}
                    endIcon={<ArrowForward sx={{ fontSize: 18 }} />}
                  >
                    Learn More
                  </Button>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA Section */}
      <Container maxWidth="lg" sx={{ mt: 20 }}>
        <Paper
          sx={{
            p: { xs: 6, md: 10 },
            textAlign: "center",
            borderRadius: "40px",
            background: "linear-gradient(135deg, rgba(13, 127, 242, 0.1) 0%, rgba(10, 15, 28, 1) 100%)",
            border: "1px solid rgba(13, 127, 242, 0.2)",
            position: "relative",
            overflow: "hidden"
          }}
        >
          {/* Decorative Glow */}
          <Box
            sx={{
              position: "absolute",
              top: "-50%",
              left: "-50%",
              width: "200%",
              height: "200%",
              backgroundImage: "radial-gradient(circle at center, rgba(59, 130, 246, 0.05) 0%, transparent 60%)",
              zIndex: 0,
            }}
          />

          <Box sx={{ position: "relative", zIndex: 1 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 900,
                mb: 3,
                fontSize: { xs: "2.25rem", md: "3.5rem" },
                color: "white"
              }}
            >
              Ready to start your project?
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#94a3b8",
                mb: 6,
                maxWidth: "600px",
                mx: "auto",
                fontSize: "1.125rem",
                lineHeight: 1.6
              }}
            >
              Contact our experts today for a free consultation and project roadmap. Let&apos;s build something extraordinary together.
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center">
              <Button
                variant="contained"
                component={Link}
                href="/contact"
                sx={{
                  bgcolor: "#0d7ff2",
                  color: "white",
                  px: 6,
                  py: 2,
                  borderRadius: "15px",
                  fontWeight: 800,
                  textTransform: "none",
                  fontSize: "1.1rem",
                  "&:hover": { bgcolor: "#0b6ed1" },
                }}
              >
                Get in Touch
              </Button>
              <Button
                variant="outlined"
                sx={{
                  borderColor: "rgba(255, 255, 255, 0.2)",
                  color: "white",
                  px: 6,
                  py: 2,
                  borderRadius: "15px",
                  fontWeight: 800,
                  textTransform: "none",
                  fontSize: "1.1rem",
                  backdropFilter: "blur(4px)",
                  "&:hover": { borderColor: "white", bgcolor: "rgba(255, 255, 255, 0.05)" },
                }}
              >
                Our Methodology
              </Button>
            </Stack>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
