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
    title: "QA Automation",
    blurb:
      "Scale coverage with robust automation frameworks and maintainable test suites.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "API Testing",
    blurb:
      "Thorough contract & functional API verification with CI integration.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Performance Testing",
    blurb: "Detect bottlenecks and model production loads.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Mobile Testing",
    blurb: "Real-device validation and cross-device consistency.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1400&q=80",
  },
] as const;

export default function ServicesPage(): React.ReactElement {
  return (
    <Box sx={{ py: 10 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ mb: 4 }}>
          Solutions
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

        {/* Case Studies Section */}
        <Box sx={{ mt: 6 }}>
          <Typography variant="h4" sx={{ mb: 3 }}>
            Selected Case Studies
          </Typography>
          <Grid container spacing={3}>
            {[1, 2, 3].map((n) => (
              <Grid key={n} size={{ xs: 12, md: 4 }}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25 }}
                >
                  <Card>
                    <CardContent>
                      <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                        Case Study {n}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Problem solved, key metrics improved, delivery timeline.
                      </Typography>
                      <Button sx={{ mt: 2 }} variant="outlined">
                        View
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
