"use client";
import React from "react";
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Paper, 
  Chip, 
  Stack,
  Button
} from "@mui/material";
import { motion } from "framer-motion";
import { ArrowForward, Launch } from "@mui/icons-material";
import Link from "next/link";

const caseStudies = [
  {
    title: "Global E-commerce Test Automation",
    client: "Retail Giant",
    category: "QA Automation",
    description: "Implemented a full-scale end-to-end automation suite for a Fortune 500 retailer, reducing regression time from 3 days to 4 hours.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80",
    tags: ["Playwright", "Jenkins", "AWS"],
    color: "#0d7ff2"
  },
  {
    title: "Fintech API Security & Scaling",
    client: "NeoBank",
    category: "Backend & QA",
    description: "Architected a secure GraphQL API layer and comprehensive contract testing framework to handle 10k+ concurrent requests.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    tags: ["Node.js", "GraphQL", "Postman"],
    color: "#0d7ff2"
  },
  {
    title: "Healthcare App Modernization",
    client: "HealthTech Inc",
    category: "Mobile & UI/UX",
    description: "Redesigned and rebuilt a patient-facing mobile app using React Native, achieving a 4.8 star rating on App Store.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    tags: ["React Native", "Figma", "Firebase"],
    color: "#0d7ff2"
  },
  {
    title: "Supply Chain IoT Dashboard",
    client: "Logistics Pro",
    category: "Web Development",
    description: "Developed a real-time tracking dashboard for global logistics, integrating IoT data streams with live map visualizations.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    tags: ["Next.js", "socket.io", "Deck.gl"],
    color: "#0d7ff2"
  }
];

export default function CaseStudiesPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
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
                lineHeight: 1.1,
                letterSpacing: "-0.04em",
              }}
            >
              Landmark <Box component="span" sx={{ color: "#0d7ff2" }}>Showcase</Box>
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
              Explore how we&apos;ve helped global leaders overcome complex engineering challenges and achieve digital excellence through precision and innovation.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Case Studies Grid */}
      <Container maxWidth="lg">
        <Grid 
          container 
          spacing={4} 
          component={motion.div} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={staggerContainer}
        >
          {caseStudies.map((study, i) => (
            <Grid size={{ xs: 12, md: 6 }} key={i}>
              <motion.div variants={fadeInUp}>
                <Paper
                  sx={{
                    borderRadius: "32px",
                    bgcolor: "rgba(255, 255, 255, 0.02)",
                    border: "1px solid rgba(255, 255, 255, 0.05)",
                    overflow: "hidden",
                    height: "100%",
                    transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                    "&:hover": {
                      bgcolor: "rgba(255, 255, 255, 0.04)",
                      transform: "translateY(-12px)",
                      borderColor: "rgba(13, 127, 242, 0.3)",
                      boxShadow: "0 30px 60px rgba(0,0,0,0.5)",
                      "& .study-image": { transform: "scale(1.1)" }
                    }
                  }}
                >
                  {/* Image Container */}
                  <Box sx={{ height: 300, overflow: "hidden", position: "relative" }}>
                    <Box
                      className="study-image"
                      component="img"
                      src={study.image}
                      alt={study.title}
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.8s ease"
                      }}
                    />
                    <Box 
                      sx={{ 
                        position: "absolute", 
                        top: 24, 
                        left: 24, 
                        bgcolor: "rgba(10, 15, 28, 0.8)",
                        backdropFilter: "blur(8px)",
                        color: "white", 
                        px: 2, 
                        py: 0.8, 
                        borderRadius: "10px", 
                        fontWeight: 700, 
                        fontSize: "0.75rem",
                        textTransform: "uppercase",
                        letterSpacing: 2,
                        border: `1px solid ${study.color}44`
                      }}
                    >
                      {study.category}
                    </Box>
                  </Box>

                  {/* Content Container */}
                  <Box sx={{ p: 4 }}>
                    <Typography variant="overline" sx={{ color: "#94a3b8", fontWeight: 700 }}>
                      {study.client}
                    </Typography>
                    <Typography variant="h5" sx={{ fontWeight: 800, mt: 1, mb: 2 }}>
                      {study.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#94a3b8", mb: 4, lineHeight: 1.7 }}>
                      {study.description}
                    </Typography>

                    <Stack direction="row" spacing={1} flexWrap="wrap" gap={1} mb={4}>
                      {study.tags.map((tag, ti) => (
                        <Chip 
                          key={ti} 
                          label={tag} 
                          size="small" 
                          sx={{ 
                            bgcolor: "rgba(255, 255, 255, 0.05)", 
                            color: "white", 
                            fontWeight: 600,
                            borderRadius: "6px"
                          }} 
                        />
                      ))}
                    </Stack>

                    <Button
                      variant="text"
                      endIcon={<ArrowForward />}
                      sx={{
                        color: study.color,
                        textTransform: "none",
                        fontWeight: 800,
                        p: 0,
                        "&:hover": { bgcolor: "transparent", color: "#fff" }
                      }}
                    >
                      Read Case Study
                    </Button>
                  </Box>
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
            border: "1px solid rgba(13, 127, 242, 0.2)"
          }}
        >
          <Typography variant="h2" sx={{ fontWeight: 950, mb: 3, letterSpacing: "-0.02em" }}>
            Have a project in mind?
          </Typography>
          <Typography variant="h6" sx={{ color: "#94a3b8", mb: 8, maxWidth: "600px", mx: "auto", fontWeight: 400, lineHeight: 1.6 }}>
            Let&apos;s collaborate to turn your vision into a digital masterpiece. Our team of experts is ready to help you scale.
          </Typography>
          <Button
            component={Link}
            href="/contact"
            variant="contained"
            sx={{
              bgcolor: "#0d7ff2",
              px: 6,
              py: 2.5,
              borderRadius: "16px",
              fontWeight: 800,
              fontSize: "1.1rem",
              textTransform: "none",
              "&:hover": { bgcolor: "#0b6ed1", transform: "translateY(-2px)" },
              transition: "all 0.3s ease"
            }}
          >
            Start Your Journey
          </Button>
        </Paper>
      </Container>
    </Box>
  );
}
