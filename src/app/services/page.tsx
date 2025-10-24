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
  CardMedia,
} from "@mui/material";
import { motion } from "framer-motion";

const services = [
  {
    title: "Web Development",
    blurb: "Modern web applications with React, Next.js, and cutting-edge technologies.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Backend Development",
    blurb: "Scalable APIs and server solutions with Node.js, Python, and cloud services.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Frontend Development",
    blurb: "Responsive UI/UX with React, Vue.js, and modern JavaScript frameworks.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Mobile Development",
    blurb: "Cross-platform mobile apps using Flutter and React Native for iOS and Android.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Figma UI Designing",
    blurb: "Professional UI/UX design and prototyping with Figma.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Web UI Automation",
    blurb: "Stable, data-driven, cross-browser suites for CI pipelines.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Mobile QA (iOS/Android)",
    blurb: "Real devices • Appium • BrowserStack • Detox.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "API Testing",
    blurb: "Postman • Pact • REST/GraphQL • contract & regression.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Manual Testing",
    blurb: "Comprehensive manual testing • Exploratory • Usability • User acceptance testing.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
  },
] as const;

export default function ServicesPage(): React.ReactElement {
  return (
    <Box sx={{ py: 10 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ mb: 4 }}>
          Services
        </Typography>

        {/* Services Section */}
        <Grid container spacing={3}>
          {services.map((s, i) => (
            <Grid key={i} size={{ xs: 12, md: 6 }}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.25 }}
              >
                <Card>
                  <CardMedia
                    component="img"
                    height="200"
                    image={s.image}
                    alt={s.title}
                  />
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                      {s.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 2 }}
                    >
                      {s.blurb}
                    </Typography>
                    <Button size="small" variant="contained" color="primary">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>


      </Container>
    </Box>
  );
}
