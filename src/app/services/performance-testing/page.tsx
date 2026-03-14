"use client";
import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Stack,
  Button,
  Avatar,
  Breadcrumbs,
  Link as MuiLink,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  NavigateNext,
  CheckCircle,
  BugReport,
  Speed,
  Devices,
  Security,
  Search,
  Edit,
  PlayArrow,
  Verified,
  Settings,
  Assessment,
  TrendingUp,
  AttachMoney,
  BarChart,
  Timeline,
  ShowChart,
  MonetizationOn,
} from "@mui/icons-material";
import Link from "next/link";

const features = [
  "Comprehensive load and performance testing for web and mobile applications",
  "Stress testing to evaluate software under higher loads",
  "Scalability testing to assess performance with varying user loads",
  "Spike testing to measure performance during sudden load increases",
  "Endurance testing to identify potential issues under the sustained loads",
  "Volume testing to analyze performance with different data volumes",
];

const benefits = [
  "Identify and fix performance bottlenecks",
  "Identify optimal infrastructure requirements before launch",
  "Ensure smooth system and stability",
  "Assess the reliability of your software or website",
  "Improve user experience by ensuring faster response times",
  "Measure time taken to recover against network issues",
];

const whyChooseUs = [
  {
    title: "Cost-Effective Load and Performance Testing",
    desc: "Save costs with Miisco's advanced load and performance testing services. We help you identify issues early to avoid expensive fixes later.",
    icon: <MonetizationOn />,
  },
  {
    title: "Receive Error-Quickly and Efficiently",
    desc: "Miisco's professional and up-to-date techniques. We use cutting-edge tools to deliver fast results.",
    icon: <Speed />,
  },
  {
    title: "Reliable and Scalable Testing Solutions",
    desc: "Miisco employs extensive testing tools and software best suited for your project needs.",
    icon: <TrendingUp />,
  },
  {
    title: "Comprehensive Performance Testing Quality",
    desc: "We provide comprehensive performance testing services to ensure optimal user experience under all conditions.",
    icon: <Assessment />,
  },
  {
    title: "Quick Project Start",
    desc: "Your development deadlines are important. We start testing quickly to keep your project on track.",
    icon: <Timeline />,
  },
  {
    title: "Personalized Project Estimates",
    desc: "Miisco provides a tailored cost estimate based on your specific requirements and budget.",
    icon: <AttachMoney />,
  },
];

const processSteps = [
  { title: "Requirement Analysis", icon: <Search /> },
  { title: "Test Planning", icon: <Edit /> },
  { title: "Test Case Design", icon: <Assessment /> },
  { title: "Test Execution", icon: <PlayArrow /> },
  { title: "Bug Reporting", icon: <BugReport /> },
  { title: "Regression Testing", icon: <Verified /> },
];

export default function PerformanceTestingPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <Box sx={{ bgcolor: "var(--bg-main)", color: "var(--text-main)", minHeight: "100vh", pb: 15 }}>
      {/* Hero Section */}
      <Box 
        sx={{ 
          pt: { xs: 15, md: 25 }, 
          pb: 10,
          background: "radial-gradient(circle at 50% 10%, rgba(13, 127, 242, 0.1) 0%, transparent 50%)"
        }}
      >
        <Container maxWidth="lg">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <Breadcrumbs 
              separator={<NavigateNext fontSize="small" sx={{ color: "rgba(255,255,255,0.3)" }} />}
              sx={{ mb: 4 }}
            >
              <MuiLink component={Link} href="/" sx={{ color: "var(--text-muted)", textDecoration: "none", "&:hover": { color: "#0d7ff2" } }}>
                Home
              </MuiLink>
              <MuiLink component={Link} href="/services" sx={{ color: "var(--text-muted)", textDecoration: "none", "&:hover": { color: "#0d7ff2" } }}>
                Services
              </MuiLink>
              <Typography sx={{ color: "var(--text-main)", fontWeight: 700 }}>Load and Performance Testing</Typography>
            </Breadcrumbs>
            
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.8rem", md: "5rem" },
                fontWeight: 950,
                mb: 3,
                lineHeight: 1.1,
                letterSpacing: "-0.04em",
              }}
            >
              Load and Performance <Box component="span" sx={{ color: "#0d7ff2" }}>Testing</Box>
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "var(--text-secondary)",
                maxWidth: "700px",
                lineHeight: 1.6,
                fontWeight: 400,
                fontSize: { xs: "1.1rem", md: "1.25rem" },
              }}
            >
              Ensure your application performs flawlessly under any load with our comprehensive performance testing services.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Main Section 1: Intro */}
      <Container maxWidth="lg" sx={{ mt: 10 }}>
        <Grid container spacing={8} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <Box 
                sx={{ 
                  position: "relative",
                  borderRadius: "32px",
                  overflow: "hidden",
                  boxShadow: "var(--shadow-lg)",
                  border: "1px solid var(--border-muted)",
                  bgcolor: "var(--bg-card)",
                  p: 4
                }}
              >
                <Box 
                  component="img" 
                  src="/api/placeholder/600/400" 
                  alt="Performance Testing"
                  sx={{ width: "100%", display: "block", borderRadius: "16px" }}
                />
              </Box>
            </motion.div>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <Typography variant="h3" sx={{ fontWeight: 800, mb: 3, letterSpacing: "-0.02em" }}>
                Load and Performance Testing Services
              </Typography>
              <Typography variant="body1" sx={{ color: "var(--text-secondary)", mb: 4, lineHeight: 1.8, fontSize: "1.1rem" }}>
                MIISCO&apos;s load and performance testing services ensure your applications can handle expected and unexpected traffic loads. We identify bottlenecks and optimize performance for the best user experience.
              </Typography>
              <Stack spacing={2.5}>
                {features.map((text, i) => (
                  <Box key={i} sx={{ display: "flex", gap: 2 }}>
                    <CheckCircle sx={{ color: "#0d7ff2", mt: 0.5, flexShrink: 0 }} />
                    <Typography sx={{ color: "var(--text-main)", fontWeight: 500 }}>{text}</Typography>
                  </Box>
                ))}
              </Stack>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Main Section 2: Benefits */}
      <Box sx={{ mt: 20, py: 15, bgcolor: "var(--bg-card)", borderTop: "1px solid var(--border-muted)", borderBottom: "1px solid var(--border-muted)" }}>
        <Container maxWidth="lg">
          <Grid container spacing={8} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                <Typography variant="h3" sx={{ fontWeight: 800, mb: 4, letterSpacing: "-0.02em" }}>
                  Why You Need Load and Performance Testing
                </Typography>
                <Typography variant="body1" sx={{ color: "var(--text-secondary)", mb: 4, lineHeight: 1.8, fontSize: "1.05rem" }}>
                  Performance testing is essential to ensure your application can handle real-world traffic and usage patterns. Our comprehensive testing approach helps you deliver fast, reliable, and scalable applications.
                </Typography>
                <Stack spacing={3}>
                  {benefits.map((text, i) => (
                    <Box key={i} sx={{ display: "flex", gap: 3 }}>
                      <Box 
                        sx={{ 
                          minWidth: 40, 
                          height: 40, 
                          borderRadius: "50%", 
                          bgcolor: "rgba(13, 127, 242, 0.1)", 
                          color: "#0d7ff2",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: 900,
                          flexShrink: 0
                        }}
                      >
                        {i + 1}
                      </Box>
                      <Typography sx={{ color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: 1.6 }}>
                        {text}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                <Box 
                  sx={{ 
                    position: "relative",
                    borderRadius: "32px",
                    overflow: "hidden",
                    border: "1px solid var(--border-muted)",
                    bgcolor: "var(--bg-card)",
                    p: 4
                  }}
                >
                  <Box 
                    component="img" 
                    src="/api/placeholder/600/400" 
                    alt="Testing Benefits"
                    sx={{ width: "100%", display: "block", borderRadius: "16px" }}
                  />
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Why Choose Us Grid */}
      <Container maxWidth="lg" sx={{ mt: 20 }}>
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography variant="h3" sx={{ fontWeight: 800, mb: 2, letterSpacing: "-0.02em" }}>
            Why Choose Miisco for Load and Performance Testing
          </Typography>
          <Typography variant="body1" sx={{ color: "var(--text-secondary)", maxWidth: "700px", mx: "auto", fontSize: "1.1rem" }}>
            Our expert team delivers comprehensive performance testing services with cutting-edge tools and methodologies.
          </Typography>
        </Box>
        <Grid container spacing={3}>
          {whyChooseUs.map((item, i) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i}>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                <Paper
                  sx={{
                    p: 4,
                    height: "100%",
                    borderRadius: "24px",
                    bgcolor: "var(--bg-card)",
                    border: "1px solid var(--border-muted)",
                    transition: "all 0.4s ease",
                    "&:hover": {
                      bgcolor: "rgba(13, 127, 242, 0.04)",
                      borderColor: "var(--border-hover)",
                      transform: "translateY(-8px)"
                    }
                  }}
                >
                  <Avatar 
                    sx={{ 
                      mb: 3, 
                      bgcolor: "rgba(13, 127, 242, 0.1)", 
                      color: "#0d7ff2",
                      width: 56,
                      height: 56,
                      border: "1px solid rgba(13, 127, 242, 0.2)"
                    }}
                  >
                    {item.icon}
                  </Avatar>
                  <Typography variant="h6" sx={{ fontWeight: 800, mb: 1.5, color: "var(--text-main)" }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>
                    {item.desc}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Process Section */}
      <Container maxWidth="lg" sx={{ mt: 20 }}>
        <Box sx={{ textAlign: "center", mb: 10 }}>
          <Typography variant="h3" sx={{ fontWeight: 800, mb: 2, letterSpacing: "-0.02em" }}>
            Our Software Testing Process
          </Typography>
          <Typography variant="body1" sx={{ color: "var(--text-secondary)", maxWidth: "600px", mx: "auto" }}>
            A systematic approach to ensure comprehensive performance validation and optimization.
          </Typography>
        </Box>
        <Grid container spacing={4} sx={{ position: "relative" }}>
          {processSteps.map((step, i) => (
            <Grid size={{ xs: 12, sm: 4, md: 2 }} key={i}>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                <Stack alignItems="center" spacing={3}>
                  <Box 
                    sx={{ 
                      width: 80, 
                      height: 80, 
                      borderRadius: "20px", 
                      bgcolor: "rgba(13, 127, 242, 0.05)",
                      color: "#0d7ff2",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "2rem",
                      border: "1px solid rgba(13, 127, 242, 0.1)",
                      position: "relative",
                      "&::after": i < processSteps.length - 1 ? {
                        content: '""',
                        position: "absolute",
                        right: "-200%",
                        top: "50%",
                        width: "150%",
                        height: "2px",
                        background: "linear-gradient(90deg, #0d7ff2, transparent)",
                        zIndex: -1,
                        display: { xs: "none", md: "block" }
                      } : {}
                    }}
                  >
                    {step.icon}
                  </Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 800, textAlign: "center", color: "var(--text-main)" }}>
                    {step.title}
                  </Typography>
                </Stack>
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
            background: "linear-gradient(135deg, rgba(13, 127, 242, 0.06) 0%, var(--bg-secondary) 100%)",
            border: "1px solid rgba(13, 127, 242, 0.2)",
            position: "relative",
            overflow: "hidden"
          }}
        >
          <Typography variant="h2" sx={{ fontWeight: 950, mb: 3, letterSpacing: "-0.02em" }}>
            Get in Touch With Us
          </Typography>
          <Typography variant="h6" sx={{ color: "var(--text-secondary)", mb: 8, maxWidth: "700px", mx: "auto", fontWeight: 400, lineHeight: 1.6 }}>
            Need a reliable performance testing partner? Our expert team is ready to help you optimize your application&apos;s performance and ensure it can handle any load. Let&apos;s discuss your testing requirements.
          </Typography>
          <Button
            component={Link}
            href="/contact"
            variant="contained"
            sx={{
              background: "linear-gradient(90deg, #0d7ff2, #2563eb)",
              px: 6,
              py: 2.5,
              borderRadius: "16px",
              fontWeight: 800,
              fontSize: "1.1rem",
              textTransform: "none",
              boxShadow: "0 10px 30px rgba(13, 127, 242, 0.4)",
              "&:hover": { background: "linear-gradient(90deg, #2563eb, #0d7ff2)", transform: "translateY(-2px)" },
              transition: "all 0.3s ease"
            }}
          >
            Contact Us Today
          </Button>
        </Paper>
      </Container>
    </Box>
  );
}
