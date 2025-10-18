"use client";
import { Box, Container, Typography, TextField, Button } from "@mui/material";
import Grid from "@mui/material/Grid"; // ✅ New Grid import
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <Box sx={{ py: 10 }}>
      <Container maxWidth="md">
        <Typography variant="h2" sx={{ mb: 3 }}>
          Contact
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
          Reach out for partnerships, projects, or careers.
        </Typography>

        <Grid container spacing={3}>
          {/* Left side - Contact form */}
          <Grid size={{ xs: 12, md: 7 }}>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Box component="form" noValidate autoComplete="off">
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField label="Name" fullWidth />
                  </Grid>

                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField label="Email" fullWidth />
                  </Grid>

                  <Grid size={{ xs: 12 }}>
                    <TextField label="Message" fullWidth multiline rows={5} />
                  </Grid>

                  <Grid size={{ xs: 12 }}>
                    <Button variant="contained" size="large">
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </motion.div>
          </Grid>

          {/* Right side - Info */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ p: 2 }}>
              <Typography variant="h6" sx={{ mb: 1 }}>
                Headquarters
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Mathura, Uttar Pradesh, India
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                Phone: +91 9911065583
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Email: info@miiscollp.com
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
