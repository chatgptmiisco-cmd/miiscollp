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
    title: "Smart Matrimony",
    client: "Internal Product",
    category: "Digital Solution",
    description: "Complete matrimonial platform with mobile app and website for connecting people and families.",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
    tags: ["Mobile App", "Website", "Matrimonial"],
    color: "#0d7ff2",
    link: "https://smartmatrimony.ai/"
  },
  {
    title: "Chess Guru",
    client: "Internal Product",
    category: "AI Platform",
    description: "An advanced, AI-powered platform tailored for chess enthusiasts to learn, play, and master the game.",
    image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=1200&q=80",
    tags: ["Web App", "AI Platform", "Chess Engine"],
    color: "#0d7ff2",
    link: "https://chessguru.ai/"
  },
  {
    title: "Global iGaming Platform Tests",
    client: "Leading European iGaming Provider",
    category: "Quality Assurance",
    description: "Provided elite QA services for a high-traffic online gaming platform, executing rigorous functional and compliance testing to ensure flawless cross-platform performance.",
    image: "https://images.unsplash.com/photo-1518544801976-3e159e50e5bb?auto=format&fit=crop&w=1200&q=80",
    tags: ["Gaming", "Compliance Testing", "Automated QA"],
    color: "#0d7ff2",
    link: ""
  },
  {
    title: "Franchise Operations Portal",
    client: "Global QSR Franchise Network",
    category: "Quality Assurance",
    description: "Delivered comprehensive test automation and QA for a massive restaurant network operating 230+ locations, verifying critical internal operations and supply chain software.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    tags: ["QSR", "Operations App", "Test Automation"],
    color: "#0d7ff2",
    link: ""
  },
  {
    title: "24/7 Global Diagnostics Network",
    client: "International Healthcare Provider",
    category: "Quality Assurance",
    description: "Rigorously tested critical healthcare diagnostics infrastructure, enabling seamless, secure transmission of medical imaging with zero-downtime reliability through end-to-end QA.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80",
    tags: ["Healthcare", "Security Testing", "Reliability QA"],
    color: "#0d7ff2",
    link: ""
  },
  // {
  //   title: "Government System",
  //   client: "Public Sector",
  //   category: "Development & QA",
  //   description: "Architected a highly secure, compliant government portal prioritizing data privacy, performance under load, and strict QA standards.",
  //   image: "https://images.unsplash.com/photo-1523266075923-3dbd183dcb7f?auto=format&fit=crop&w=1200&q=80",
  //   tags: ["Security", "Compliance", "Load Testing"],
  //   color: "#0d7ff2",
  //   link: ""
  // },
  // {
  //   title: "Social Media Management Tool",
  //   client: "MarTech",
  //   category: "Development & QA",
  //   description: "Created a unified social media console for analytics and scheduling, ensuring cross-platform API stability through continuous testing.",
  //   image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80",
  //   tags: ["Analytics", "GraphQL", "Cypress"],
  //   color: "#0d7ff2",
  //   link: ""
  // },
  // {
  //   title: "Jewelry E-commerce Platform",
  //   client: "Luxury Retail",
  //   category: "Development & QA",
  //   description: "Delivered a premium digital storefront with complex inventory workflows and flawless checkout experiences verified by robust QA.",
  //   image: "https://images.unsplash.com/photo-1515562141207-7a8ef6195084?auto=format&fit=crop&w=1200&q=80",
  //   tags: ["E-commerce", "Next.js", "Payment Gateway"],
  //   color: "#0d7ff2",
  //   link: ""
  // }
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

  const internalProducts = caseStudies.filter(c => c.client === "Internal Product");
  const clientProjects = caseStudies.filter(c => c.client !== "Internal Product");

  return (
    <Box sx={{ bgcolor: "var(--bg-main)", color: "var(--text-main)", minHeight: "100vh", pb: 15 }}>
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
                color: "var(--text-secondary)",
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

      {/* Proprietary Products */}
      <Container maxWidth="lg" sx={{ mb: 12 }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <Typography variant="h3" sx={{ fontWeight: 900, mb: 5, letterSpacing: "-0.02em" }}>
            Our Proprietary <Box component="span" sx={{ color: "#0d7ff2" }}>Products</Box>
          </Typography>
        </motion.div>
        <Grid 
          container 
          spacing={4} 
          component={motion.div} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={staggerContainer}
        >
          {internalProducts.map((study, i) => (
            <Grid size={{ xs: 12, md: 6 }} key={i}>
              <motion.div variants={fadeInUp}>
                <Paper
                  sx={{
                    borderRadius: "32px",
                    background: "linear-gradient(145deg, rgba(13, 127, 242, 0.05) 0%, var(--bg-card) 100%)",
                    border: "1px solid rgba(13, 127, 242, 0.3)",
                    overflow: "hidden",
                    height: "100%",
                    transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                    position: "relative",
                    "&:hover": {
                      transform: "translateY(-12px)",
                      borderColor: "#0d7ff2",
                      boxShadow: "0 20px 40px rgba(13, 127, 242, 0.15)",
                      "& .study-image": { transform: "scale(1.05)" }
                    }
                  }}
                >
                  <Box sx={{ position: "absolute", top: 0, left: 0, width: "100%", height: "4px", background: "linear-gradient(90deg, #0d7ff2, #60a5fa)", zIndex: 10 }} />
                  {/* Image Container */}
                  <Box sx={{ height: 260, overflow: "hidden", position: "relative" }}>
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
                    <Chip 
                      label="Featured Product" 
                      sx={{ 
                        position: "absolute", top: 24, left: 24, 
                        bgcolor: "#0d7ff2", color: "#fff", fontWeight: 800, 
                        fontSize: "0.75rem", letterSpacing: 1, textTransform: "uppercase" 
                      }} 
                    />
                  </Box>

                  {/* Content Container */}
                  <Box sx={{ p: 4, pt: 5 }}>
                    <Typography variant="h4" sx={{ fontWeight: 900, mb: 2 }}>
                      {study.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: "var(--text-secondary)", mb: 4, lineHeight: 1.7, fontSize: "1.05rem" }}>
                      {study.description}
                    </Typography>

                    <Stack direction="row" spacing={1} flexWrap="wrap" gap={1} mb={5}>
                      {study.tags.map((tag, ti) => (
                        <Chip 
                          key={ti} 
                          label={tag} 
                          size="small" 
                          sx={{ 
                            bgcolor: "rgba(13, 127, 242, 0.1)", 
                            color: "#0d7ff2", 
                            fontWeight: 700,
                            border: "1px solid rgba(13, 127, 242, 0.2)",
                            borderRadius: "8px"
                          }} 
                        />
                      ))}
                    </Stack>

                    <Button
                      variant="contained"
                      href={study.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      endIcon={<Launch />}
                      fullWidth
                      sx={{
                        bgcolor: "#0d7ff2",
                        color: "#fff",
                        textTransform: "none",
                        fontWeight: 800,
                        py: 1.8,
                        borderRadius: "12px",
                        fontSize: "1.05rem",
                        "&:hover": { bgcolor: "#0b6ed1", transform: "translateY(-2px)", boxShadow: "0 10px 20px rgba(13, 127, 242, 0.2)" },
                        transition: "all 0.3s ease"
                      }}
                    >
                      Visit Platform
                    </Button>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Case Studies Grid */}
      <Container maxWidth="lg">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <Typography variant="h3" sx={{ fontWeight: 900, mb: 5, letterSpacing: "-0.02em" }}>
            Client <Box component="span" sx={{ color: "#0d7ff2" }}>Success Stories</Box>
          </Typography>
        </motion.div>
        <Grid 
          container 
          spacing={4} 
          component={motion.div} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={staggerContainer}
        >
          {clientProjects.map((study, i) => (
            <Grid size={{ xs: 12, md: 6 }} key={i}>
              <motion.div variants={fadeInUp}>
                <Paper
                  sx={{
                    borderRadius: "32px",
                    bgcolor: "var(--bg-card)",
                    border: "1px solid var(--border-muted)",
                    overflow: "hidden",
                    height: "100%",
                    transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                    "&:hover": {
                      bgcolor: "rgba(13, 127, 242, 0.04)",
                      transform: "translateY(-12px)",
                      borderColor: "var(--border-hover)",
                      boxShadow: "var(--shadow-lg)",
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
                        color: "#fff", 
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
                    <Typography variant="overline" sx={{ color: "var(--text-secondary)", fontWeight: 700 }}>
                      {study.client}
                    </Typography>
                    <Typography variant="h5" sx={{ fontWeight: 800, mt: 1, mb: 2 }}>
                      {study.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "var(--text-secondary)", mb: 4, lineHeight: 1.7 }}>
                      {study.description}
                    </Typography>

                    <Stack direction="row" spacing={1} flexWrap="wrap" gap={1} mb={4}>
                      {study.tags.map((tag, ti) => (
                        <Chip 
                          key={ti} 
                          label={tag} 
                          size="small" 
                          sx={{ 
                            bgcolor: "rgba(0, 0, 0, 0.03)", 
                            color: "var(--text-main)", 
                            fontWeight: 600,
                            borderRadius: "6px"
                          }} 
                        />
                      ))}
                    </Stack>

                    {study.link ? (
                      <Button
                        variant="text"
                        href={study.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        endIcon={<Launch />}
                        sx={{
                          color: study.color,
                          textTransform: "none",
                          fontWeight: 800,
                          p: 0,
                          "&:hover": { bgcolor: "transparent", color: "var(--text-main)" }
                        }}
                      >
                        View Live Project
                      </Button>
                    ) : (
                      <Button
                        variant="text"
                        endIcon={<ArrowForward />}
                        sx={{
                          color: study.color,
                          textTransform: "none",
                          fontWeight: 800,
                          p: 0,
                          "&:hover": { bgcolor: "transparent", color: "var(--text-main)" }
                        }}
                      >
                        Read Case Study
                      </Button>
                    )}
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
            background: "linear-gradient(135deg, rgba(13, 127, 242, 0.06) 0%, var(--bg-secondary) 100%)",
            border: "1px solid rgba(13, 127, 242, 0.2)"
          }}
        >
          <Typography variant="h2" sx={{ fontWeight: 950, mb: 3, letterSpacing: "-0.02em" }}>
            Have a project in mind?
          </Typography>
          <Typography variant="h6" sx={{ color: "var(--text-secondary)", mb: 8, maxWidth: "600px", mx: "auto", fontWeight: 400, lineHeight: 1.6 }}>
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
