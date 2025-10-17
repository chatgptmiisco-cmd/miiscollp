"use client";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Card,
  Avatar,
  Paper,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { motion, Variants, Transition } from "framer-motion";
import Email from "@mui/icons-material/Email";
import Phone from "@mui/icons-material/Phone";
import LocationOn from "@mui/icons-material/LocationOn";
import AccessTime from "@mui/icons-material/AccessTime";
import Send from "@mui/icons-material/Send";

const contactInfo = [
  {
    title: "Email Us",
    value: "info@maheshwariinnovatives.com",
    icon: Email,
    color: "#1e3a8a",
    description: "Send us an email anytime",
  },
  {
    title: "Call Us",
    value: "+91 9876543210",
    icon: Phone,
    color: "#10b981",
    description: "Mon-Fri from 9am to 6pm",
  },
  {
    title: "Visit Us",
    value: "Mathura, Uttar Pradesh, India",
    icon: LocationOn,
    color: "#ef4444",
    description: "Come say hello at our office",
  },
  {
    title: "Business Hours",
    value: "Mon - Fri: 9:00 AM - 6:00 PM",
    icon: AccessTime,
    color: "#7c3aed",
    description: "We're here to help",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" as Transition["ease"] },
  },
};

export default function ContactPage() {
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
            "radial-gradient(circle at 30% 40%, rgba(30, 58, 138, 0.05) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(124, 58, 237, 0.05) 0%, transparent 50%)",
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
              Get In Touch
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
              Ready to elevate your quality assurance? Let's discuss your
              project
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={6}>
          {/* Contact Info */}
          <Grid size={{ xs: 12, md: 5 }}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <Typography
                variant="h4"
                sx={{ fontWeight: 700, mb: 4, color: "text.primary" }}
              >
                Contact Information
              </Typography>
              <Grid container spacing={3}>
                {contactInfo.map((info, idx) => {
                  const IconComponent = info.icon;
                  return (
                    <Grid size={{ xs: 12 }} key={idx}>
                      <motion.div variants={itemVariants}>
                        <Card
                          sx={{
                            p: 3,
                            background: "rgba(255, 255, 255, 0.9)",
                            backdropFilter: "blur(20px)",
                            border: "1px solid rgba(226, 232, 240, 0.8)",
                            transition: "all 0.3s ease",
                            "&:hover": {
                              transform: "translateY(-5px) scale(1.02)",
                              boxShadow: "0 15px 35px -5px rgba(0, 0, 0, 0.15)",
                              "& .contact-icon": {
                                transform: "scale(1.15) rotate(5deg)",
                                boxShadow: `0 8px 25px -8px ${info.color}60`,
                              },
                            },
                          }}
                        >
                          <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Avatar
                              className="contact-icon"
                              sx={{
                                bgcolor: info.color,
                                width: 50,
                                height: 50,
                                mr: 3,
                                transition: "all 0.3s ease",
                              }}
                            >
                              <IconComponent sx={{ fontSize: 24 }} />
                            </Avatar>
                            <Box>
                              <Typography
                                variant="h6"
                                sx={{
                                  fontWeight: 700,
                                  color: "text.primary",
                                  mb: 0.5,
                                }}
                              >
                                {info.title}
                              </Typography>
                              <Typography
                                variant="body1"
                                sx={{
                                  color: info.color,
                                  fontWeight: 600,
                                  mb: 0.5,
                                }}
                              >
                                {info.value}
                              </Typography>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                {info.description}
                              </Typography>
                            </Box>
                          </Box>
                        </Card>
                      </motion.div>
                    </Grid>
                  );
                })}
              </Grid>
            </motion.div>
          </Grid>

          {/* Contact Form */}
          <Grid size={{ xs: 12, md: 7 }}>
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <Paper
                sx={{
                  p: 6,
                  background: "rgba(255,255,255,0.9)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(226,232,240,0.8)",
                  borderRadius: 3,
                }}
              >
                <Typography
                  variant="h4"
                  sx={{ fontWeight: 700, mb: 4, color: "text.primary" }}
                >
                  Send us a Message
                </Typography>

                <Box component="form" noValidate autoComplete="off">
                  <Grid container spacing={3}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="First Name"
                        variant="outlined"
                        required
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="Last Name"
                        variant="outlined"
                        required
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        label="Email Address"
                        variant="outlined"
                        type="email"
                        required
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        label="Phone Number"
                        variant="outlined"
                        type="tel"
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField fullWidth label="Company" variant="outlined" />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        label="Subject"
                        variant="outlined"
                        required
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        label="Message"
                        variant="outlined"
                        multiline
                        rows={5}
                        required
                        placeholder="Tell us about your project requirements..."
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <motion.div
                        whileHover={{ 
                          scale: 1.03,
                          y: -2,
                          transition: { duration: 0.2 }
                        }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <Button
                          variant="contained"
                          color="primary"
                          size="large"
                          fullWidth
                          endIcon={<Send />}
                          sx={{ py: 2, fontSize: "1.1rem", fontWeight: 600 }}
                        >
                          Send Message
                        </Button>
                      </motion.div>
                    </Grid>
                  </Grid>
                </Box>

                <Box
                  sx={{
                    mt: 4,
                    p: 3,
                    backgroundColor: "rgba(30, 58, 138, 0.05)",
                    borderRadius: 2,
                    border: "1px solid rgba(30, 58, 138, 0.1)",
                  }}
                >
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ textAlign: "center", lineHeight: 1.6 }}
                  >
                    🔒 Your information is secure and will only be used to
                    respond to your inquiry. We typically respond within 24
                    hours during business days.
                  </Typography>
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
