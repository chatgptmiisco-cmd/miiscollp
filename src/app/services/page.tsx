"use client";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  Chip,
  Button,
} from "@mui/material";
import Grid from "@mui/material/Grid"; // ✅ New Grid import
import { motion, Variants } from "framer-motion";
import BugReport from "@mui/icons-material/BugReport";
import SmartToy from "@mui/icons-material/SmartToy";
import Api from "@mui/icons-material/Api";
import Speed from "@mui/icons-material/Speed";
import Security from "@mui/icons-material/Security";
import PhoneAndroid from "@mui/icons-material/PhoneAndroid";
import Cloud from "@mui/icons-material/Cloud";
import Analytics from "@mui/icons-material/Analytics";

const services = [
  {
    title: "Manual Testing",
    description:
      "Comprehensive manual testing ensuring quality across all user interactions and edge cases.",
    icon: BugReport,
    color: "#ef4444",
    features: ["Functional Testing", "UI/UX Testing", "Exploratory Testing"],
  },
  {
    title: "Automation Testing",
    description:
      "Scalable automation frameworks using cutting-edge tools and best practices.",
    icon: SmartToy,
    color: "#10b981",
    features: ["Selenium", "Cypress", "Playwright"],
  },
  {
    title: "API Testing",
    description:
      "Robust API testing ensuring reliability, performance, and security of your services.",
    icon: Api,
    color: "#3b82f6",
    features: ["REST APIs", "GraphQL", "Microservices"],
  },
  {
    title: "Performance Testing",
    description:
      "Identify bottlenecks and optimize application performance under various load conditions.",
    icon: Speed,
    color: "#f59e0b",
    features: ["Load Testing", "Stress Testing", "Volume Testing"],
  },
  {
    title: "Security Testing",
    description:
      "Comprehensive security assessments to protect your applications from vulnerabilities.",
    icon: Security,
    color: "#7c3aed",
    features: ["Penetration Testing", "OWASP", "Vulnerability Assessment"],
  },
  {
    title: "Mobile Testing",
    description:
      "End-to-end mobile application testing across different devices and platforms.",
    icon: PhoneAndroid,
    color: "#06b6d4",
    features: ["iOS Testing", "Android Testing", "Cross-platform"],
  },
  {
    title: "Cloud Testing",
    description:
      "Cloud-native testing solutions ensuring scalability and reliability in cloud environments.",
    icon: Cloud,
    color: "#8b5cf6",
    features: ["AWS", "Azure", "Google Cloud"],
  },
  {
    title: "Test Analytics",
    description:
      "Data-driven insights and comprehensive reporting for informed decision making.",
    icon: Analytics,
    color: "#ec4899",
    features: ["Test Metrics", "Reporting", "Quality Insights"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { y: 60, opacity: 0, scale: 0.8, rotateX: -15 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const pulseAnimation = {
  scale: [1, 1.02, 1],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export default function ServicesPage() {
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
            "radial-gradient(circle at 30% 20%, rgba(30, 58, 138, 0.05) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(124, 58, 237, 0.05) 0%, transparent 50%)",
          pointerEvents: "none",
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
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
              Our Services
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
              Comprehensive testing solutions tailored to your business needs
            </Typography>
          </Box>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Grid container spacing={4}>
            {services.map((service, idx) => {
              const IconComponent = service.icon;
              return (
                <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={idx}>
                  <motion.div
                    variants={cardVariants}
                    whileHover={{
                      y: -15,
                      scale: 1.03,
                      rotateY: 5,
                      transition: { duration: 0.4, ease: "easeOut" },
                    }}
                    animate={pulseAnimation}
                  >
                    <Card
                      sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        p: 3,
                        background: "rgba(255, 255, 255, 0.9)",
                        backdropFilter: "blur(20px)",
                        border: "1px solid rgba(226, 232, 240, 0.8)",
                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                        "&:hover": {
                          boxShadow:
                            "0 30px 60px -12px rgba(0, 0, 0, 0.15), 0 18px 36px -18px rgba(0, 0, 0, 0.1)",
                          "& .service-avatar": {
                            transform: "scale(1.2) rotate(10deg)",
                            boxShadow: `0 8px 25px -8px ${service.color}60`,
                          },
                          "& .service-content": {
                            transform: "translateY(-3px)",
                          },
                        },
                      }}
                    >
                      <CardContent className="service-content" sx={{ flexGrow: 1, p: 0, transition: "all 0.3s ease" }}>
                        <Box
                          sx={{ display: "flex", alignItems: "center", mb: 3 }}
                        >
                          <Avatar
                            className="service-avatar"
                            sx={{
                              bgcolor: service.color,
                              width: 56,
                              height: 56,
                              mr: 2,
                              transition: "all 0.3s ease",
                            }}
                          >
                            <IconComponent sx={{ fontSize: 28 }} />
                          </Avatar>
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: 700,
                              color: "text.primary",
                            }}
                          >
                            {service.title}
                          </Typography>
                        </Box>

                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{
                            mb: 3,
                            lineHeight: 1.6,
                          }}
                        >
                          {service.description}
                        </Typography>

                        <Box sx={{ mb: 3 }}>
                          {service.features.map((feature, featureIdx) => (
                            <Chip
                              key={featureIdx}
                              label={feature}
                              size="small"
                              sx={{
                                mr: 1,
                                mb: 1,
                                backgroundColor: `${service.color}15`,
                                color: service.color,
                                border: `1px solid ${service.color}30`,
                                fontWeight: 500,
                                "&:hover": {
                                  backgroundColor: service.color,
                                  color: "white",
                                  transform: "scale(1.05)",
                                },
                              }}
                            />
                          ))}
                        </Box>

                        <Button
                          variant="outlined"
                          size="small"
                          sx={{
                            borderColor: service.color,
                            color: service.color,
                            "&:hover": {
                              backgroundColor: service.color,
                              color: "white",
                              borderColor: service.color,
                            },
                          }}
                        >
                          Learn More
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
