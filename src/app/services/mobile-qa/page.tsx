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
  TableChart,
} from "@mui/icons-material";
import Link from "next/link";

const benefits = [
  "Identify and fix bugs before your users encounter them, ensuring a smooth and reliable app experience.",
  "Maintain app performance on any device, bandwidth, or operating system version through comprehensive testing.",
  "Reduce post-launch issues and costly emergency fixes with thorough pre-release quality assurance.",
  "Ensure app stability from UI to back-end API connections with end-to-end functional testing.",
  "Deliver a flawless user experience that builds trust and drives positive app store reviews.",
  "Ensure your app fits the targeted devices of users/customers.",
];

const whyChooseUs = [
  {
    title: "Flexible & Innovative Testing",
    desc: "We adapt our testing strategies to your unique app architecture and business requirements with innovative approaches.",
    icon: <AutoFixHigh />,
  },
  {
    title: "Hands-on Mobile App Testing Experts",
    desc: "Our QA engineers have deep experience in mobile app testing across iOS and Android platforms.",
    icon: <Groups />,
  },
  {
    title: "Comprehensive Testing Coverage",
    desc: "From functional to performance, security to usability, we cover all testing aspects for complete quality assurance.",
    icon: <TableChart />,
  },
  {
    title: "Early Error Detection",
    desc: "We find bugs early in the development cycle, saving time and reducing costly post-launch fixes with our proactive approach.",
    icon: <Search />,
  },
  {
    title: "Cost-Effective Testing",
    desc: "By testing across devices, we help prevent expensive app failures and ensure optimal performance at scale.",
    icon: <Speed />,
  },
  {
    title: "Large-scale Testing",
    desc: "We perform testing at scale with a wide range of real devices and configurations to ensure broad compatibility.",
    icon: <Devices />,
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

export default function MobileQAPage() {
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
              <Typography sx={{ color: "var(--text-main)", fontWeight: 700 }}>Mobile Application Testing</Typography>
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
              Mobile Application <Box component="span" sx={{ color: "#0d7ff2" }}>Testing</Box> Services
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
              Comprehensive mobile app testing services ensuring flawless performance across all devices and platforms.
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
                  src="/services/mobile-qa.png" 
                  alt="Mobile App Testing"
                  sx={{ width: "100%", display: "block", borderRadius: "16px" }}
                />
              </Box>
            </motion.div>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <Typography variant="h3" sx={{ fontWeight: 800, mb: 3, letterSpacing: "-0.02em" }}>
                Mobile App Testing Services
              </Typography>
              <Typography variant="body1" sx={{ color: "var(--text-secondary)", mb: 4, lineHeight: 1.8, fontSize: "1.1rem" }}>
                MIISCO provides comprehensive mobile app testing services to ensure your application delivers a flawless user experience across all devices and platforms.
              </Typography>
              <Stack spacing={2.5}>
                {[
                  "Extensive testing covering 2.5 billion+ device configurations",
                  "Functional, performance, and security testing",
                  "Ensure compatibility across devices and operating systems",
                  "Automated and manual testing approaches",
                  "Enhance user experience through UI usability testing",
                  "Detailed bug reporting time to go from 0 to 1"
                ].map((text, i) => (
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
                  Why You Need Mobile App Testing?
                </Typography>
                <Stack spacing={4}>
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
                    src="/services/mobile-qa.png" 
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
            Why Choose Miisco for Mobile App Testing?
          </Typography>
          <Typography variant="body1" sx={{ color: "var(--text-secondary)", maxWidth: "700px", mx: "auto", fontSize: "1.1rem" }}>
            We understand the importance of time in the competitive market. With Miisco&apos;s mobile app testing services, you get rapid and reliable testing you need to stay ahead.
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
            Our Mobile App Testing Process
          </Typography>
          <Typography variant="body1" sx={{ color: "var(--text-secondary)", maxWidth: "600px", mx: "auto" }}>
            A systematic approach to ensure your mobile app meets the highest quality standards.
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
            Contact Us
          </Typography>
          <Typography variant="h6" sx={{ color: "var(--text-secondary)", mb: 8, maxWidth: "600px", mx: "auto", fontWeight: 400, lineHeight: 1.6 }}>
            Want peace of mind before launch? We have a world-class quality assurance team ready to test your mobile app. Let&apos;s talk about how we can help you ship bug-free apps.
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
            Get Started with Testing
          </Button>
        </Paper>
      </Container>
    </Box>
  );
}
