"use client";
import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Chip,
  Stack,
  Paper,
  Button,
  useTheme,
  Avatar,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  Work,
  LocationOn,
  AccessTime,
  TrendingUp,
  Groups,
  EmojiEvents,
  CurrencyRupee,
  ArrowForward,
} from "@mui/icons-material";
import Link from "next/link";

const jobs = [
  {
    title: "QA Engineer (Manual & Automation)",
    location: "Remote / Hybrid",
    type: "Full-time",
    description: "Ensure the highest quality of our digital products. You'll lead test strategies and build robust automation suites using Playwright/Selenium.",
    skills: ["Testing", "Automation", "Playwright", "CI/CD"],
    salary: "₹8 - 15 LPA",
    color: "#0d7ff2",
  },
  {
    title: "Senior Full Stack Developer",
    location: "Remote / Mathura",
    type: "Full-time",
    description: "Build scalable web applications using React, Next.js, and Node.js. Join our core engineering team to deliver high-impact solutions.",
    skills: ["React", "Next.js", "Node.js", "PostgreSQL"],
    salary: "₹12 - 25 LPA",
    color: "#0d7ff2",
  },
  {
    title: "UI/UX Designer",
    location: "Remote",
    type: "Contract",
    description: "Create stunning, user-centric designs. You will be responsible for end-to-end design from wireframing to high-fidelity prototypes.",
    skills: ["Figma", "Adobe CC", "Prototyping", "UX Research"],
    salary: "Competitive",
    color: "#0d7ff2",
  },
] as const;

const benefits = [
  { icon: <TrendingUp />, title: "Exponential Growth", desc: "Fast-paced environment with clear paths for career advancement." },
  { icon: <Groups />, title: "Inclusive Culture", desc: "Join a diverse team that values collaboration and innovative ideas." },
  { icon: <EmojiEvents />, title: "Impactful Work", desc: "Build technology that powers global enterprises and startups." },
];

export default function CareersPage() {
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
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <Box sx={{ bgcolor: "#0a0f1c", color: "white", minHeight: "100vh", pb: 15 }}>
      {/* Hero Section */}
      <Box 
        sx={{ 
          pt: { xs: 15, md: 25 }, 
          pb: 10,
          background: "radial-gradient(circle at 20% 30%, rgba(13, 127, 242, 0.08) 0%, transparent 60%)"
        }}
      >
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
                maxWidth: "1000px"
              }}
            >
              Building the next era of <Box component="span" sx={{ color: "#0d7ff2" }}>Digital Trust</Box>
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#94a3b8",
                maxWidth: "700px",
                lineHeight: 1.6,
                fontWeight: 400,
                fontSize: { xs: "1.1rem", md: "1.25rem" },
                mb: 8
              }}
            >
              Join a high-performance team of engineers and visionaries dedicated to hardening the world&apos;s most critical software.
            </Typography>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#0d7ff2",
                color: "white",
                px: 6,
                py: 2.5,
                borderRadius: "15px",
                fontWeight: 800,
                fontSize: "1.1rem",
                textTransform: "none",
                boxShadow: "0 10px 20px rgba(13, 127, 242, 0.2)",
                "&:hover": { bgcolor: "#0b6ed1", transform: "translateY(-2px)" },
                transition: "all 0.3s ease"
              }}
            >
              Explore Open Roles
            </Button>
          </motion.div>
        </Container>
      </Box>

      {/* Why Join Us? (Benefits) */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Grid container spacing={4} component={motion.div} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          {benefits.map((benefit, i) => (
            <Grid size={{ xs: 12, md: 4 }} key={i}>
              <motion.div variants={fadeInUp}>
                <Paper
                  sx={{
                    p: 4,
                    height: "100%",
                    borderRadius: "20px",
                    bgcolor: "rgba(255, 255, 255, 0.02)",
                    border: "1px solid rgba(255, 255, 255, 0.05)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      bgcolor: "rgba(255, 255, 255, 0.04)",
                      borderColor: "rgba(13, 127, 242, 0.3)",
                      transform: "translateY(-5px)"
                    }
                  }}
                >
                  <Avatar sx={{ bgcolor: "rgba(13, 127, 242, 0.1)", color: "#0d7ff2", mb: 3, width: 56, height: 56 }}>
                    {benefit.icon}
                  </Avatar>
                  <Typography variant="h5" sx={{ fontWeight: 800, mb: 2 }}>
                    {benefit.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: "#94a3b8", lineHeight: 1.6 }}>
                    {benefit.desc}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Open Positions Section */}
      <Container maxWidth="lg" sx={{ py: 15 }}>
        <Box sx={{ mb: 10 }}>
          <Typography variant="h2" sx={{ fontWeight: 950, mb: 3, letterSpacing: "-0.03em" }}>
            Current <Box component="span" sx={{ color: "#0d7ff2" }}>Openings</Box>
          </Typography>
          <Typography variant="body1" sx={{ color: "#94a3b8", fontSize: "1.2rem", maxWidth: "600px" }}>
            Join a culture where technical mastery meets creative problem-solving.
          </Typography>
        </Box>

        <Stack spacing={4}>
          {jobs.map((job, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <Paper
                sx={{
                  p: { xs: 5, md: 6 },
                  borderRadius: "32px",
                  bgcolor: "rgba(255, 255, 255, 0.02)",
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                  transition: "all 0.4s ease",
                  overflow: "hidden",
                  position: "relative",
                  "&:hover": {
                    bgcolor: "rgba(255, 255, 255, 0.04)",
                    borderColor: "rgba(13, 127, 242, 0.2)",
                    transform: "translateY(-5px)"
                  },
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "6px",
                    height: "100%",
                    bgcolor: job.color,
                    opacity: 0.8
                  }
                }}
              >
                <Grid container spacing={4} alignItems="center">
                  <Grid size={{ xs: 12, md: 8 }}>
                    <Stack spacing={2}>
                      <Typography variant="h4" sx={{ fontWeight: 800, color: "white" }}>
                        {job.title}
                      </Typography>
                      
                      <Stack direction="row" spacing={3} sx={{ color: "#94a3b8" }} flexWrap="wrap" gap={1}>
                        <Stack direction="row" spacing={1} alignItems="center">
                          <LocationOn sx={{ fontSize: 18 }} />
                          <Typography variant="body2">{job.location}</Typography>
                        </Stack>
                        <Stack direction="row" spacing={1} alignItems="center">
                          <AccessTime sx={{ fontSize: 18 }} />
                          <Typography variant="body2">{job.type}</Typography>
                        </Stack>
                        <Stack direction="row" spacing={1} alignItems="center">
                          <CurrencyRupee sx={{ fontSize: 18 }} />
                          <Typography variant="body2">{job.salary}</Typography>
                        </Stack>
                      </Stack>

                      <Typography variant="body1" sx={{ color: "#94a3b8", lineHeight: 1.6, maxWidth: "700px" }}>
                        {job.description}
                      </Typography>

                      <Stack direction="row" spacing={1} flexWrap="wrap" gap={1} pt={1}>
                        {job.skills.map((skill, si) => (
                          <Chip 
                            key={si} 
                            label={skill} 
                            sx={{ 
                              bgcolor: "rgba(255, 255, 255, 0.05)", 
                              color: "white", 
                              fontWeight: 600,
                              borderRadius: "8px",
                              border: "1px solid rgba(255, 255, 255, 0.1)"
                            }} 
                            size="small"
                          />
                        ))}
                      </Stack>
                    </Stack>
                  </Grid>
                  
                  <Grid size={{ xs: 12, md: 4 }} sx={{ textAlign: { xs: "left", md: "right" } }}>
                    <Button
                      variant="contained"
                      endIcon={<ArrowForward />}
                      sx={{
                        bgcolor: "#0d7ff2",
                        color: "white",
                        px: 5,
                        py: 2,
                        borderRadius: "12px",
                        fontWeight: 800,
                        textTransform: "none",
                        fontSize: "1rem",
                        boxShadow: "0 10px 25px rgba(13, 127, 242, 0.2)",
                        "&:hover": { bgcolor: "#0b6ed1", transform: "translateY(-2px)" },
                        transition: "all 0.3s ease"
                      }}
                    >
                      Apply Now
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </motion.div>
          ))}
        </Stack>
      </Container>

      {/* Culture Section Placeholder */}
      <Container maxWidth="lg" sx={{ py: 15 }}>
        <Paper
          sx={{
            p: { xs: 8, md: 12 },
            borderRadius: "40px",
            background: "linear-gradient(135deg, rgba(13, 127, 242, 0.1) 0%, rgba(10,15,28,1) 100%)",
            border: "1px solid rgba(13, 127, 242, 0.2)",
            textAlign: "center"
          }}
        >
          <Typography variant="h2" sx={{ fontWeight: 950, mb: 3, letterSpacing: "-0.02em" }}>
            Don&apos;t see a perfect fit?
          </Typography>
          <Typography variant="h6" sx={{ color: "#94a3b8", mb: 8, maxWidth: "600px", mx: "auto", fontWeight: 400, lineHeight: 1.6 }}>
            Send us your resume anyway. We&apos;re always looking for exceptional people to join our journey and raise the bar.
          </Typography>
          <Button
            component={Link}
            href="/contact"
            variant="contained"
            sx={{
              bgcolor: "#fff",
              color: "#0a0f1c",
              px: 6,
              py: 2.5,
              borderRadius: "16px",
              fontWeight: 800,
              fontSize: "1.1rem",
              textTransform: "none",
              "&:hover": { bgcolor: "#f1f5f9", transform: "translateY(-2px)" },
              transition: "all 0.3s ease"
            }}
          >
            General Inquiry
          </Button>
        </Paper>
      </Container>
    </Box>
  );
}
