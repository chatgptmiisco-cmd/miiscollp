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
  Api,
  Balance,
  Code,
  IntegrationInstructions,
  CloudQueue,
  BarChart,
} from "@mui/icons-material";
import Link from "next/link";

const features = [
  "Comprehensive API testing for improved efficiency and quality assurance",
  "Support for REST, SOAP, and GraphQL API testing, with JSON and XML formats",
  "Extensive testing by examining endpoints and request & response validation",
  "Comprehensive testing for both client and RESTful web services",
  "Optimized performance, even during peak traffic hours",
  "Identification and resolution of errors for improved functionality",
  "Efficient communication between SOAP APIs and other systems",
];

const benefits = [
  "Faster time-to-market with automated API testing",
  "Improved software quality and reliability",
  "Early detection of issues and vulnerabilities, avoiding costly fixes later",
  "Better integration with third-party services and systems",
  "Enhanced security through comprehensive security testing",
  "Reduced manual testing effort with automated testing frameworks",
  "Comprehensive testing for complex, scalable, and distributed applications",
];

const whyChooseUs = [
  {
    title: "Reliable API Testing",
    desc: "Miisco's experienced team verifies API functionality, performance, and security to ensure reliable integrations.",
    icon: <Verified />,
  },
  {
    title: "API Performance Testing",
    desc: "We test API performance under various load conditions, ensuring responsive and reliable APIs.",
    icon: <Speed />,
  },
  {
    title: "Security-Focused API Testing",
    desc: "We apply our testing services with security in mind, identifying vulnerabilities before they become issues.",
    icon: <Security />,
  },
  {
    title: "Competitive Pricing",
    desc: "Miisco delivers premier API testing services at competitive rates without compromising quality.",
    icon: <Balance />,
  },
  {
    title: "Efficient API Testing",
    desc: "We deliver efficient testing using cutting-edge tools and frameworks for maximum coverage.",
    icon: <Settings />,
  },
  {
    title: "Customized API Testing",
    desc: "Tailored testing services to meet your specific API requirements and business needs.",
    icon: <IntegrationInstructions />,
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

export default function APITestingPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <Box sx={{ bgcolor: "#0a0f1c", color: "white", minHeight: "100vh", pb: 15 }}>
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
              <MuiLink component={Link} href="/" sx={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", "&:hover": { color: "#0d7ff2" } }}>
                Home
              </MuiLink>
              <MuiLink component={Link} href="/services" sx={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", "&:hover": { color: "#0d7ff2" } }}>
                Services
              </MuiLink>
              <Typography sx={{ color: "white", fontWeight: 700 }}>API Testing Services</Typography>
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
              API <Box component="span" sx={{ color: "#0d7ff2" }}>Testing</Box> Services
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
              Comprehensive API testing services to ensure seamless integration and optimal performance for your applications.
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
                  boxShadow: "0 40px 100px rgba(0,0,0,0.5)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  bgcolor: "rgba(255,255,255,0.02)",
                  p: 4
                }}
              >
                <Box 
                  component="img" 
                  src="/api/placeholder/600/400" 
                  alt="API Testing"
                  sx={{ width: "100%", display: "block", borderRadius: "16px" }}
                />
              </Box>
            </motion.div>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <Typography variant="h3" sx={{ fontWeight: 800, mb: 3, letterSpacing: "-0.02em" }}>
                API Testing Services for Web and Mobile Applications
              </Typography>
              <Typography variant="body1" sx={{ color: "#94a3b8", mb: 4, lineHeight: 1.8, fontSize: "1.1rem" }}>
                MIISCO provides comprehensive API testing services to ensure your web and mobile applications communicate seamlessly. Our expert team validates functionality, performance, security, and reliability of your APIs.
              </Typography>
              <Stack spacing={2.5}>
                {features.map((text, i) => (
                  <Box key={i} sx={{ display: "flex", gap: 2 }}>
                    <CheckCircle sx={{ color: "#0d7ff2", mt: 0.5, flexShrink: 0 }} />
                    <Typography sx={{ color: "white", fontWeight: 500 }}>{text}</Typography>
                  </Box>
                ))}
              </Stack>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Main Section 2: Benefits */}
      <Box sx={{ mt: 20, py: 15, bgcolor: "rgba(255,255,255,0.02)", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <Container maxWidth="lg">
          <Grid container spacing={8} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                <Typography variant="h3" sx={{ fontWeight: 800, mb: 4, letterSpacing: "-0.02em" }}>
                  Benefits of Our API Testing Services
                </Typography>
                <Typography variant="body1" sx={{ color: "#94a3b8", mb: 4, lineHeight: 1.8, fontSize: "1.05rem" }}>
                  API testing is crucial for ensuring seamless integration between different software components. Our comprehensive testing approach helps you deliver reliable, secure, and high-performing applications.
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
                      <Typography sx={{ color: "#94a3b8", fontSize: "1.05rem", lineHeight: 1.6 }}>
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
                    border: "1px solid rgba(255,255,255,0.05)",
                    bgcolor: "rgba(255,255,255,0.02)",
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
            Why Choose Miisco for API Testing?
          </Typography>
          <Typography variant="body1" sx={{ color: "#94a3b8", maxWidth: "700px", mx: "auto", fontSize: "1.1rem" }}>
            Our expert team delivers comprehensive API testing services with a focus on reliability, performance, and security.
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
                    bgcolor: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.05)",
                    transition: "all 0.4s ease",
                    "&:hover": {
                      bgcolor: "rgba(255,255,255,0.04)",
                      borderColor: "rgba(13, 127, 242, 0.3)",
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
                  <Typography variant="h6" sx={{ fontWeight: 800, mb: 1.5, color: "white" }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#94a3b8", lineHeight: 1.7 }}>
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
            Our API Testing Process
          </Typography>
          <Typography variant="body1" sx={{ color: "#94a3b8", maxWidth: "600px", mx: "auto" }}>
            A systematic approach to ensure comprehensive API validation and quality assurance.
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
                  <Typography variant="subtitle2" sx={{ fontWeight: 800, textAlign: "center", color: "white" }}>
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
            background: "linear-gradient(135deg, rgba(13, 127, 242, 0.1) 0%, rgba(10, 15, 28, 1) 100%)",
            border: "1px solid rgba(13, 127, 242, 0.2)",
            position: "relative",
            overflow: "hidden"
          }}
        >
          <Typography variant="h2" sx={{ fontWeight: 950, mb: 3, letterSpacing: "-0.02em" }}>
            Contact Miisco&apos;s API Testing Experts
          </Typography>
          <Typography variant="h6" sx={{ color: "#94a3b8", mb: 8, maxWidth: "700px", mx: "auto", fontWeight: 400, lineHeight: 1.6 }}>
            Looking for reliable API testing services? Our expert team is ready to help you ensure seamless integration, optimal performance, and robust security for your APIs. Let&apos;s discuss your testing needs.
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
