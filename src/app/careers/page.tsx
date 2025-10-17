"use client";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Chip,
  Avatar,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Grid from "@mui/material/Grid"; // ✅ Updated Grid import
import { motion, Variants } from "framer-motion";
import Work from "@mui/icons-material/Work";
import LocationOn from "@mui/icons-material/LocationOn";
import Schedule from "@mui/icons-material/Schedule";
import AttachMoney from "@mui/icons-material/AttachMoney";
import HealthAndSafety from "@mui/icons-material/HealthAndSafety";
import School from "@mui/icons-material/School";
import FlightTakeoff from "@mui/icons-material/FlightTakeoff";
import Coffee from "@mui/icons-material/Coffee";

const jobs = [
  {
    title: "Senior QA Engineer",
    location: "Remote / Mathura, UP",
    type: "Full-time",
    experience: "3-5 years",
    salary: "₹8-12 LPA",
    description:
      "Lead manual and automated testing initiatives, mentor junior team members, and ensure quality standards across projects.",
    skills: ["Manual Testing", "Selenium", "API Testing", "Test Planning"],
    color: "#1e3a8a",
    icon: Work,
  },
  {
    title: "Automation Test Engineer",
    location: "Mathura, UP",
    type: "Full-time",
    experience: "2-4 years",
    salary: "₹6-10 LPA",
    description:
      "Design and implement robust automation frameworks using modern tools and best practices.",
    skills: ["Cypress", "Playwright", "JavaScript", "CI/CD"],
    color: "#7c3aed",
    icon: Work,
  },
  {
    title: "QA Project Manager",
    location: "Remote",
    type: "Full-time",
    experience: "5-8 years",
    salary: "₹12-18 LPA",
    description:
      "Manage end-to-end QA projects, coordinate with stakeholders, and ensure timely delivery of quality solutions.",
    skills: [
      "Project Management",
      "Agile",
      "Team Leadership",
      "Client Relations",
    ],
    color: "#10b981",
    icon: Work,
  },
  {
    title: "Performance Test Engineer",
    location: "Remote / Hybrid",
    type: "Full-time",
    experience: "2-5 years",
    salary: "₹7-11 LPA",
    description:
      "Conduct performance testing, identify bottlenecks, and optimize application performance.",
    skills: ["JMeter", "LoadRunner", "Performance Analysis", "Monitoring"],
    color: "#f59e0b",
    icon: Work,
  },
  {
    title: "Junior QA Analyst",
    location: "Mathura, UP",
    type: "Full-time",
    experience: "0-2 years",
    salary: "₹3-5 LPA",
    description:
      "Start your QA career with hands-on training and mentorship from experienced professionals.",
    skills: [
      "Manual Testing",
      "Test Cases",
      "Bug Reporting",
      "Learning Mindset",
    ],
    color: "#3b82f6",
    icon: Work,
  },
  {
    title: "DevOps Engineer",
    location: "Remote",
    type: "Full-time",
    experience: "3-6 years",
    salary: "₹10-15 LPA",
    description:
      "Build and maintain CI/CD pipelines, manage cloud infrastructure, and support development teams.",
    skills: ["AWS", "Docker", "Kubernetes", "Jenkins"],
    color: "#ef4444",
    icon: Work,
  },
];

const benefits = [
  {
    title: "Competitive Salary",
    description: "Industry-leading compensation packages",
    icon: AttachMoney,
    color: "#10b981",
  },
  {
    title: "Health Insurance",
    description: "Comprehensive medical coverage for you and family",
    icon: HealthAndSafety,
    color: "#ef4444",
  },
  {
    title: "Learning & Development",
    description: "Continuous learning opportunities and certifications",
    icon: School,
    color: "#3b82f6",
  },
  {
    title: "Flexible Work",
    description: "Remote work options and flexible hours",
    icon: Schedule,
    color: "#7c3aed",
  },
  {
    title: "Paid Time Off",
    description: "Generous vacation and personal time policies",
    icon: FlightTakeoff,
    color: "#f59e0b",
  },
  {
    title: "Team Events",
    description: "Regular team building and social activities",
    icon: Coffee,
    color: "#06b6d4",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.17, 0.67, 0.83, 0.67],
    },
  },
};

export default function CareersPage() {
  return (
    <Box
      sx={{
        py: 12,
        background:
          "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)",
        minHeight: "100vh",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "radial-gradient(circle at 25% 25%, rgba(30, 58, 138, 0.05) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(124, 58, 237, 0.05) 0%, transparent 50%)",
          pointerEvents: "none",
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                mb: 3,
                background:
                  "linear-gradient(135deg, #1e3a8a 0%, #7c3aed 50%, #3b82f6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: { xs: "2.5rem", md: "3rem" },
              }}
            >
              Join Our Team
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{
                maxWidth: "600px",
                mx: "auto",
                fontWeight: 400,
                lineHeight: 1.6,
              }}
            >
              Build your career with us and be part of innovative QA solutions
            </Typography>
          </Box>
        </motion.div>

        {/* Benefits */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              mb: 6,
              textAlign: "center",
              color: "text.primary",
            }}
          >
            Why Work With Us?
          </Typography>

          <Grid container spacing={3} sx={{ mb: 10 }}>
            {benefits.map((benefit, idx) => {
              const IconComponent = benefit.icon;
              return (
                <Grid key={idx} size={{ xs: 12, sm: 6, md: 4 }}>
                  <motion.div variants={itemVariants}>
                    <Paper
                      sx={{
                        p: 3,
                        textAlign: "center",
                        height: "100%",
                        background: "rgba(255, 255, 255, 0.9)",
                        backdropFilter: "blur(20px)",
                        border: "1px solid rgba(226, 232, 240, 0.8)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          transform: "translateY(-4px)",
                          boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                          "& .benefit-icon": { transform: "scale(1.1)" },
                        },
                      }}
                    >
                      <Avatar
                        className="benefit-icon"
                        sx={{
                          width: 60,
                          height: 60,
                          mx: "auto",
                          mb: 2,
                          bgcolor: benefit.color,
                          transition: "all 0.3s ease",
                        }}
                      >
                        <IconComponent sx={{ fontSize: 30 }} />
                      </Avatar>
                      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                        {benefit.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {benefit.description}
                      </Typography>
                    </Paper>
                  </motion.div>
                </Grid>
              );
            })}
          </Grid>
        </motion.div>

        {/* Jobs */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              mb: 6,
              textAlign: "center",
              color: "text.primary",
            }}
          >
            Open Positions
          </Typography>

          <Grid container spacing={4}>
            {jobs.map((job, idx) => {
              const IconComponent = job.icon;
              return (
                <Grid key={idx} size={{ xs: 12, md: 6 }}>
                  <motion.div variants={itemVariants} whileHover={{ y: -8 }}>
                    <Card
                      sx={{
                        p: 4,
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        background: "rgba(255, 255, 255, 0.9)",
                        backdropFilter: "blur(20px)",
                        border: "1px solid rgba(226, 232, 240, 0.8)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1)",
                        },
                      }}
                    >
                      <CardContent sx={{ flexGrow: 1, p: 0 }}>
                        <Box
                          sx={{ display: "flex", alignItems: "center", mb: 3 }}
                        >
                          <Avatar
                            sx={{
                              bgcolor: job.color,
                              width: 50,
                              height: 50,
                              mr: 2,
                            }}
                          >
                            <IconComponent sx={{ fontSize: 24 }} />
                          </Avatar>
                          <Box>
                            <Typography variant="h6" sx={{ fontWeight: 700 }}>
                              {job.title}
                            </Typography>
                            <Chip
                              label={job.type}
                              size="small"
                              sx={{
                                backgroundColor: `${job.color}15`,
                                color: job.color,
                                fontWeight: 500,
                              }}
                            />
                          </Box>
                        </Box>

                        <List dense sx={{ mb: 2 }}>
                          <ListItem sx={{ px: 0 }}>
                            <ListItemIcon sx={{ minWidth: 36 }}>
                              <LocationOn
                                sx={{ fontSize: 20, color: "text.secondary" }}
                              />
                            </ListItemIcon>
                            <ListItemText
                              primary={job.location}
                              primaryTypographyProps={{
                                variant: "body2",
                                color: "text.secondary",
                              }}
                            />
                          </ListItem>
                          <ListItem sx={{ px: 0 }}>
                            <ListItemIcon sx={{ minWidth: 36 }}>
                              <Schedule
                                sx={{ fontSize: 20, color: "text.secondary" }}
                              />
                            </ListItemIcon>
                            <ListItemText
                              primary={job.experience}
                              primaryTypographyProps={{
                                variant: "body2",
                                color: "text.secondary",
                              }}
                            />
                          </ListItem>
                          <ListItem sx={{ px: 0 }}>
                            <ListItemIcon sx={{ minWidth: 36 }}>
                              <AttachMoney
                                sx={{ fontSize: 20, color: "text.secondary" }}
                              />
                            </ListItemIcon>
                            <ListItemText
                              primary={job.salary}
                              primaryTypographyProps={{
                                variant: "body2",
                                color: "text.secondary",
                              }}
                            />
                          </ListItem>
                        </List>

                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ mb: 3, lineHeight: 1.6 }}
                        >
                          {job.description}
                        </Typography>

                        <Box sx={{ mb: 3 }}>
                          {job.skills.map((skill, skillIdx) => (
                            <Chip
                              key={skillIdx}
                              label={skill}
                              size="small"
                              sx={{
                                mr: 1,
                                mb: 1,
                                backgroundColor: `${job.color}10`,
                                color: job.color,
                                border: `1px solid ${job.color}30`,
                                fontWeight: 500,
                              }}
                            />
                          ))}
                        </Box>

                        <Button
                          variant="contained"
                          fullWidth
                          sx={{
                            background: `linear-gradient(135deg, ${job.color} 0%, ${job.color}dd 100%)`,
                            "&:hover": {
                              background: `linear-gradient(135deg, ${job.color}dd 0%, ${job.color}bb 100%)`,
                            },
                          }}
                        >
                          Apply Now
                        </Button>
                      </CardContent>
                    </Card>
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
