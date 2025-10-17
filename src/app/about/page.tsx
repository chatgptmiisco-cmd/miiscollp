"use client";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  Chip,
  Paper,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { motion, Variants, Transition } from "framer-motion";
import Person from "@mui/icons-material/Person";
import Engineering from "@mui/icons-material/Engineering";
import ManageAccounts from "@mui/icons-material/ManageAccounts";
import TrendingUp from "@mui/icons-material/TrendingUp";
import Groups from "@mui/icons-material/Groups";
import CheckCircle from "@mui/icons-material/CheckCircle";
import Star from "@mui/icons-material/Star";

const teamData = [
  {
    name: "Rajesh Maheshwari",
    role: "Founder & CEO",
    icon: Person,
    color: "#1e3a8a",
    description:
      "Visionary leader with 15+ years in quality assurance and business strategy.",
    skills: ["Leadership", "Strategy", "QA Excellence"],
  },
  {
    name: "Priya Sharma",
    role: "Lead QA Engineer",
    icon: Engineering,
    color: "#7c3aed",
    description:
      "Expert in automation frameworks and quality engineering processes.",
    skills: ["Automation", "Selenium", "CI/CD"],
  },
  {
    name: "Amit Kumar",
    role: "Project Manager",
    icon: ManageAccounts,
    color: "#10b981",
    description:
      "Experienced project manager ensuring timely delivery and client satisfaction.",
    skills: ["Agile", "Scrum", "Client Relations"],
  },
];

const stats = [
  {
    label: "Projects Completed",
    value: "150+",
    icon: CheckCircle,
    color: "#10b981",
  },
  { label: "Happy Clients", value: "50+", icon: Groups, color: "#3b82f6" },
  {
    label: "Years Experience",
    value: "8+",
    icon: TrendingUp,
    color: "#f59e0b",
  },
  { label: "Team Members", value: "25+", icon: Star, color: "#ef4444" },
];

const values = [
  {
    title: "Quality First",
    description:
      "We never compromise on quality and ensure every deliverable meets the highest standards.",
  },
  {
    title: "Innovation",
    description:
      "Constantly evolving our methodologies and adopting cutting-edge technologies.",
  },
  {
    title: "Reliability",
    description:
      "Our clients trust us to deliver consistent, dependable results every time.",
  },
  {
    title: "Partnership",
    description:
      "We work as an extension of your team, understanding your business goals deeply.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { y: 50, opacity: 0, scale: 0.9 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const floatAnimation = {
  y: [-3, 3, -3],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export default function AboutPage() {
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
          inset: 0,
          background:
            "radial-gradient(circle at 20% 30%, rgba(30, 58, 138, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(124, 58, 237, 0.05) 0%, transparent 50%)",
          pointerEvents: "none",
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Header Section */}
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
              About Us
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{
                maxWidth: "800px",
                mx: "auto",
                fontWeight: 400,
                lineHeight: 1.6,
                mb: 6,
              }}
            >
              Maheshwari Innovatives IT Services LLP is a leading provider of
              comprehensive QA and testing services, committed to delivering
              excellence through innovation, reliability, and partnership.
            </Typography>
          </Box>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Grid container spacing={3} sx={{ mb: 10 }}>
            {stats.map((stat, idx) => {
              const IconComponent = stat.icon;
              return (
                <Grid size={{ xs: 6, md: 3 }} key={idx}>
                  <motion.div variants={itemVariants}>
                    <Paper
                      sx={{
                        p: 3,
                        textAlign: "center",
                        background: "rgba(255, 255, 255, 0.9)",
                        backdropFilter: "blur(20px)",
                        border: "1px solid rgba(226, 232, 240, 0.8)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          transform: "translateY(-8px) scale(1.02)",
                          boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.15)",
                        },
                      }}
                    >
                      <IconComponent
                        sx={{ fontSize: 40, color: stat.color, mb: 2 }}
                      />
                      <Typography
                        variant="h4"
                        sx={{ fontWeight: 800, color: stat.color, mb: 1 }}
                      >
                        {stat.value}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ fontWeight: 500 }}
                      >
                        {stat.label}
                      </Typography>
                    </Paper>
                  </motion.div>
                </Grid>
              );
            })}
          </Grid>
        </motion.div>

        {/* Team Section */}
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
            Meet Our Team
          </Typography>
          <Grid container spacing={4} sx={{ mb: 10 }}>
            {teamData.map((member, idx) => {
              const IconComponent = member.icon;
              return (
                <Grid size={{ xs: 12, md: 4 }} key={idx}>
                  <motion.div
                    variants={itemVariants}
                    whileHover={{
                      y: -12,
                      scale: 1.02,
                      rotateY: 5,
                      transition: { duration: 0.4, ease: "easeOut" },
                    }}
                    animate={floatAnimation}
                  >
                    <Card
                      sx={{
                        p: 4,
                        textAlign: "center",
                        height: "100%",
                        background: "rgba(255, 255, 255, 0.9)",
                        backdropFilter: "blur(20px)",
                        border: "1px solid rgba(226, 232, 240, 0.8)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
                          "& .team-avatar": {
                            transform: "scale(1.15) rotate(5deg)",
                          },
                          "& .team-content": {
                            transform: "translateY(-2px)",
                          },
                        },
                      }}
                    >
                      <Avatar
                        className="team-avatar"
                        sx={{
                          width: 80,
                          height: 80,
                          mx: "auto",
                          mb: 3,
                          bgcolor: member.color,
                          transition: "all 0.3s ease",
                        }}
                      >
                        <IconComponent sx={{ fontSize: 40 }} />
                      </Avatar>
                      <Box className="team-content" sx={{ transition: "all 0.3s ease" }}>
                        <Typography
                          variant="h6"
                          sx={{ fontWeight: 700, mb: 1, color: "text.primary" }}
                        >
                          {member.name}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          sx={{ color: member.color, fontWeight: 600, mb: 2 }}
                        >
                          {member.role}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ mb: 3, lineHeight: 1.6 }}
                        >
                          {member.description}
                        </Typography>
                      </Box>
                      <Box>
                        {member.skills.map((skill, skillIdx) => (
                          <Chip
                            key={skillIdx}
                            label={skill}
                            size="small"
                            sx={{
                              mr: 1,
                              mb: 1,
                              backgroundColor: `${member.color}15`,
                              color: member.color,
                              border: `1px solid ${member.color}30`,
                              fontWeight: 500,
                            }}
                          />
                        ))}
                      </Box>
                    </Card>
                  </motion.div>
                </Grid>
              );
            })}
          </Grid>
        </motion.div>

        {/* Values Section */}
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
            Our Values
          </Typography>
          <Grid container spacing={4}>
            {values.map((value, idx) => (
              <Grid size={{ xs: 12, sm: 6 }} key={idx}>
                <motion.div variants={itemVariants}>
                  <Paper
                    sx={{
                      p: 4,
                      height: "100%",
                      background: "rgba(255, 255, 255, 0.9)",
                      backdropFilter: "blur(20px)",
                      border: "1px solid rgba(226, 232, 240, 0.8)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                      },
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 700, mb: 2, color: "primary.main" }}
                    >
                      {value.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ lineHeight: 1.6 }}
                    >
                      {value.description}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}
