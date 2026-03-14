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
  AutoFixHigh,
  Groups,
  Balance,
  Code,
  AttachMoney,
} from "@mui/icons-material";
import Link from "next/link";

const features = [
  "Comprehensive test coverage across multiple platforms and devices",
  "Configuration of testing tools (Selenium, Appium, JUnit) to meet specific project needs",
  "Seamless integration with CI/CD pipelines for continuous testing",
  "Expertise in integration of test automation into the DevOps pipeline",
  "Detailed reports that provide insights for quick decision-making",
  "Experienced consultation for enhanced efficiency and cost reduction",
];

const benefits = [
  "Significantly reduce testing costs by up to 30-40 percent",
  "Faster testing lifecycle up to 10x faster",
  "Improve accuracy and reduce human-related errors",
  "Enables parallel test execution",
  "Supports rapid product and continuous testing cycles",
];

const whyChooseUs = [
  {
    title: "Customized Testing Solutions",
    desc: "We offer custom testing for your specific needs, ensuring maximum efficiency and coverage for your applications.",
    icon: <Settings />,
  },
  {
    title: "Personalized Service Estimates",
    desc: "We work for the long-term, but it all starts with a free estimate. We will work with you to understand your needs and provide a tailored solution.",
    icon: <AttachMoney />,
  },
  {
    title: "Comprehensive Solutions Across Platforms",
    desc: "From web to mobile, desktop to cloud, we test across all platforms. We also provide end-to-end testing solutions, all under one roof.",
    icon: <Devices />,
  },
  {
    title: "Agile Understanding",
    desc: "Since you work your project iteratively, we'll work testing into the process, and testing comes before deployment.",
    icon: <Code />,
  },
  {
    title: "Expert Testers",
    desc: "Our highly experienced and trained test engineers use cutting-edge tools and frameworks to deliver exceptional results.",
    icon: <Groups />,
  },
  {
    title: "Competitive Pricing",
    desc: "Budget matters when choosing an automation testing partner. We offer competitive pricing without compromising on quality.",
    icon: <Balance />,
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

export default function AutomationTestingPage() {
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
              <Typography sx={{ color: "var(--text-main)", fontWeight: 700 }}>Automation Testing Services</Typography>
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
              Automation <Box component="span" sx={{ color: "#0d7ff2" }}>Testing</Box> Services
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
              Accelerate your testing process with our comprehensive automation testing services for efficient QA.
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
                  alt="Automation Testing"
                  sx={{ width: "100%", display: "block", borderRadius: "16px" }}
                />
              </Box>
            </motion.div>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <Typography variant="h3" sx={{ fontWeight: 800, mb: 3, letterSpacing: "-0.02em" }}>
                Test Automation Services for Efficient QA
              </Typography>
              <Typography variant="body1" sx={{ color: "var(--text-secondary)", mb: 4, lineHeight: 1.8, fontSize: "1.1rem" }}>
                MIISCO&apos;s automation testing services speed up your QA process, improve accuracy, and reduce costs. Our expert team uses cutting-edge tools and frameworks to deliver comprehensive test coverage across all platforms.
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
                  Benefits of Automation Testing Services
                </Typography>
                <Typography variant="body1" sx={{ color: "var(--text-secondary)", mb: 4, lineHeight: 1.8, fontSize: "1.05rem" }}>
                  Automation testing services help you to save time, reduce costs, and improve the quality of your software. With our automation testing services, you can achieve faster time-to-market and deliver high-quality products to your customers.
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
            Why Choose Miisco as Your Automation Testing Partner?
          </Typography>
          <Typography variant="body1" sx={{ color: "var(--text-secondary)", maxWidth: "700px", mx: "auto", fontSize: "1.1rem" }}>
            We combine expertise, cutting-edge tools, and personalized service to deliver exceptional automation testing solutions.
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
            Our Methodical Testing Process
          </Typography>
          <Typography variant="body1" sx={{ color: "var(--text-secondary)", maxWidth: "600px", mx: "auto" }}>
            A systematic approach to ensure comprehensive test coverage and quality assurance.
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
            Contact Our Team at Miisco for Accelerated Success!
          </Typography>
          <Typography variant="h6" sx={{ color: "var(--text-secondary)", mb: 8, maxWidth: "700px", mx: "auto", fontWeight: 400, lineHeight: 1.6 }}>
            Whether you&apos;re looking to automate your testing process or need expert consultation, our team at Miisco is here to help. Let&apos;s discuss how we can accelerate your quality assurance and deliver exceptional results.
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
            Get Started Today
          </Button>
        </Paper>
      </Container>
    </Box>
  );
}
