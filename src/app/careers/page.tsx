"use client";
import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
  Chip,
  Stack,
  Paper,
} from "@mui/material";
import { motion } from "framer-motion";
import WorkIcon from "@mui/icons-material/Work";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import GroupsIcon from "@mui/icons-material/Groups";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

const jobs = [
  {
    title: "QA Engineer",
    location: "Remote",
    type: "Full-time",
    description:
      "Join our team to ensure quality across web and mobile applications.",
    skills: ["Testing", "Automation", "Selenium"],
    salary: "₹6-12 LPA",
  },
  {
    title: "Automation Engineer",
    location: "Mathura",
    type: "Full-time",
    description:
      "Build and maintain automated testing frameworks and CI/CD pipelines.",
    skills: ["Python", "Jenkins", "Docker"],
    salary: "₹8-15 LPA",
  },
  {
    title: "Full Stack Developer",
    location: "Hybrid",
    type: "Full-time",
    description:
      "Develop end-to-end web applications using modern technologies.",
    skills: ["React", "Node.js", "MongoDB"],
    salary: "₹10-18 LPA",
  },
] as const;

const benefits = [
  { icon: TrendingUpIcon, title: "Growth", desc: "Career advancement" },
  { icon: GroupsIcon, title: "Team", desc: "Collaborative culture" },
  { icon: EmojiEventsIcon, title: "Recognition", desc: "Performance rewards" },
];

export default function CareersPage(): React.ReactElement {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
          py: 12,
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><defs><pattern id=%22grain%22 width=%22100%22 height=%22100%22 patternUnits=%22userSpaceOnUse%22><circle cx=%2250%22 cy=%2250%22 r=%221%22 fill=%22%23ffffff%22 opacity=%220.1%22/></pattern></defs><rect width=%22100%22 height=%22100%22 fill=%22url(%23grain)%22/></svg>') repeat",
            opacity: 0.3,
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                mb: 3,
                textAlign: "center",
                fontSize: { xs: "2.5rem", md: "3.5rem" },
              }}
            >
              Join Our Team
            </Typography>
            <Typography
              variant="h5"
              sx={{
                textAlign: "center",
                opacity: 0.9,
                maxWidth: 600,
                mx: "auto",
                lineHeight: 1.6,
              }}
            >
              Build the future with innovative solutions and cutting-edge
              technology
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Benefits Section */}
      <Box sx={{ py: 8, bgcolor: "#f8fafc" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            sx={{ textAlign: "center", mb: 6, fontWeight: 700 }}
          >
            Why Work With Us?
          </Typography>
          <Grid container spacing={4}>
            {benefits.map((benefit, i) => {
              const IconComponent = benefit.icon;
              return (
                <Grid key={i} size={{ xs: 12, md: 4 }}>
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2, duration: 0.6 }}
                  >
                    <Paper
                      sx={{
                        p: 4,
                        textAlign: "center",
                        borderRadius: 3,
                        boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                        "&:hover": {
                          transform: "translateY(-4px)",
                          boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
                        },
                        transition: "all 0.3s ease",
                      }}
                    >
                      <Box
                        sx={{
                          width: 64,
                          height: 64,
                          borderRadius: "50%",
                          background:
                            "linear-gradient(135deg, #667eea, #764ba2)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mx: "auto",
                          mb: 2,
                        }}
                      >
                        <IconComponent sx={{ color: "white", fontSize: 32 }} />
                      </Box>
                      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                        {benefit.title}
                      </Typography>
                      <Typography color="text.secondary">
                        {benefit.desc}
                      </Typography>
                    </Paper>
                  </motion.div>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {/* Jobs Section */}
      <Box sx={{ py: 10 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            sx={{ textAlign: "center", mb: 8, fontWeight: 700 }}
          >
            Open Positions
          </Typography>

          <Grid container spacing={4}>
            {jobs.map((job, i) => (
              <Grid key={i} size={{ xs: 12, md: 6, lg: 4 }}>
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 0.6 }}
                >
                  <Card
                    sx={{
                      height: "100%",
                      borderRadius: 4,
                      border: "1px solid #e2e8f0",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                      position: "relative",
                      overflow: "hidden",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: "0 12px 40px rgba(0,0,0,0.15)",
                        borderColor: "#667eea",
                      },
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 4,
                        background: `linear-gradient(90deg, ${
                          i === 0 ? "#667eea" : i === 1 ? "#f093fb" : "#4facfe"
                        }, ${
                          i === 0 ? "#764ba2" : i === 1 ? "#f5576c" : "#00f2fe"
                        })`,
                      },
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Stack spacing={3}>
                        <Box>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              mb: 2,
                            }}
                          >
                            <Box
                              sx={{
                                width: 48,
                                height: 48,
                                borderRadius: 2,
                                background: `linear-gradient(135deg, ${
                                  i === 0
                                    ? "#667eea"
                                    : i === 1
                                    ? "#f093fb"
                                    : "#4facfe"
                                }, ${
                                  i === 0
                                    ? "#764ba2"
                                    : i === 1
                                    ? "#f5576c"
                                    : "#00f2fe"
                                })`,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                mr: 2,
                              }}
                            >
                              <WorkIcon sx={{ color: "white", fontSize: 24 }} />
                            </Box>
                            <Box>
                              <Typography
                                variant="h6"
                                sx={{ fontWeight: 700, mb: 0.5 }}
                              >
                                {job.title}
                              </Typography>
                              <Typography
                                variant="body2"
                                color="primary"
                                sx={{ fontWeight: 600 }}
                              >
                                {job.salary}
                              </Typography>
                            </Box>
                          </Box>

                          <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                            <Chip
                              icon={<LocationOnIcon sx={{ fontSize: 16 }} />}
                              label={job.location}
                              size="small"
                              sx={{
                                bgcolor: "#e3f2fd",
                                color: "#1976d2",
                                fontWeight: 600,
                                borderRadius: 2,
                              }}
                            />
                            <Chip
                              icon={<AccessTimeIcon sx={{ fontSize: 16 }} />}
                              label={job.type}
                              size="small"
                              sx={{
                                bgcolor: "#e8f5e8",
                                color: "#2e7d32",
                                fontWeight: 600,
                                borderRadius: 2,
                              }}
                            />
                          </Stack>

                          <Stack
                            direction="row"
                            spacing={1}
                            flexWrap="wrap"
                            gap={1}
                          >
                            {job.skills.map((skill, idx) => (
                              <Chip
                                key={idx}
                                label={skill}
                                size="small"
                                sx={{
                                  bgcolor: "#f3e5f5",
                                  color: "#7b1fa2",
                                  fontSize: "0.75rem",
                                  fontWeight: 500,
                                }}
                              />
                            ))}
                          </Stack>
                        </Box>

                        <Typography
                          variant="body2"
                          sx={{ lineHeight: 1.6, color: "text.secondary" }}
                        >
                          {job.description}
                        </Typography>

                        <Button
                          variant="contained"
                          fullWidth
                          sx={{
                            background: `linear-gradient(135deg, ${
                              i === 0
                                ? "#667eea"
                                : i === 1
                                ? "#f093fb"
                                : "#4facfe"
                            }, ${
                              i === 0
                                ? "#764ba2"
                                : i === 1
                                ? "#f5576c"
                                : "#00f2fe"
                            })`,
                            fontWeight: 600,
                            borderRadius: 2,
                            py: 1.2,
                            boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
                            "&:hover": {
                              transform: "translateY(-2px)",
                              boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
                            },
                            transition: "all 0.3s ease",
                          }}
                        >
                          Apply Now
                        </Button>
                      </Stack>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
