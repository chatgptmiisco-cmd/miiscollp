"use client";
import Grid from "@mui/material/Grid"; // ✅ Updated import
import { Container, Typography, Box } from "@mui/material";
import AnimatedCard from "../../components/animatedCards/animatedCards";

const services = [
  {
    title: "QA Automation",
    description: "Scale coverage with robust automation frameworks.",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "API Testing",
    description: "Thorough contract & functional API verification.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Performance Testing",
    description: "Detect bottlenecks and model production loads.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function CaseStudies() {
  return (
    <Box sx={{ py: 10, background: "#f6f8fb" }}>
      <Container maxWidth="lg">
        <Typography variant="h3" sx={{ mb: 5, fontWeight: 900 }}>
          Our Services
        </Typography>

        <Grid container spacing={4}>
          {services.map((s, i) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i}>
              <AnimatedCard
                title={s.title}
                description={s.description}
                image={s.image}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
