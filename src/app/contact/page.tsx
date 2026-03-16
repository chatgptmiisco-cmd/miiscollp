"use client";
import React, { useState } from "react";
import { 
  Box, 
  Container, 
  Typography, 
  TextField, 
  Button, 
  Paper,
  Stack,
  Avatar,
  useTheme,
  Grid,
  Snackbar,
  Alert,
  CircularProgress
} from "@mui/material";
import { motion } from "framer-motion";
import { 
  LocationOn, 
  Phone, 
  Email, 
  Send,
  Business
} from "@mui/icons-material";

export default function ContactPage() {
  const theme = useTheme();
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    projectType: "",
    message: ""
  });
  
  const [status, setStatus] = useState({
    loading: false,
    error: false,
    success: false,
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ loading: true, error: false, success: false, message: "" });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({
          loading: false,
          error: false,
          success: true,
          message: "Thank you! Your inquiry has been sent successfully."
        });
        setFormData({ fullName: "", email: "", address: "", projectType: "", message: "" });
      } else {
        setStatus({
          loading: false,
          error: true,
          success: false,
          message: result.error || "Something went wrong. Please try again."
        });
      }
    } catch (error) {
      setStatus({
        loading: false,
        error: true,
        success: false,
        message: "Network error. Please try again later."
      });
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const textFieldStyles = {
    '& .MuiOutlinedInput-root': {
      borderRadius: 2,
      color: 'var(--text-main)',
      '& fieldset': {
        borderColor: 'var(--border-strong)',
      },
      '&:hover fieldset': {
        borderColor: 'rgba(13, 127, 242, 0.5)',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#0d7ff2',
      },
    },
    '& .MuiInputLabel-root': {
      color: 'var(--text-secondary)',
      '&.Mui-focused': {
        color: '#0d7ff2',
      },
    },
  };
  
  return (
    <Box sx={{ 
      bgcolor: "var(--bg-main)", 
      color: "var(--text-main)", 
      minHeight: "100vh",
      pt: { xs: 15, md: 20 },
      pb: 15,
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative Blur Backgrounds */}
      <Box sx={{
        position: 'absolute',
        top: '10%',
        left: '-5%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(13, 127, 242, 0.1) 0%, transparent 70%)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />
      <Box sx={{
        position: 'absolute',
        bottom: '10%',
        right: '-5%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, transparent 70%)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Header Section */}
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <Box textAlign="center" sx={{ mb: { xs: 8, md: 12 } }}>
            <Typography 
              variant="h1" 
              sx={{ 
                fontSize: { xs: "2.8rem", md: "5.5rem" },
                fontWeight: 950,
                mb: 4,
                lineHeight: 1.1,
                letterSpacing: "-0.04em",
                color: "var(--text-main)"
              }}
            >
              Get In <Box component="span" sx={{ color: "#0d7ff2" }}>Touch</Box>
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                color: "var(--text-secondary)", 
                maxWidth: 650, 
                mx: 'auto',
                lineHeight: 1.6,
                fontWeight: 400,
                fontSize: { xs: "1.1rem", md: "1.25rem" }
              }}
            >
              Ready to transform your ideas into reality? Let&apos;s discuss how our precision engineering and quality assurance can power your next project.
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={6}>
          {/* Contact Info Deck */}
          <Grid size={{ xs: 12, md: 5 }}>
            <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
              <Stack spacing={3}>
                <Typography variant="h5" sx={{ fontWeight: 800, mb: 1, color: "var(--text-main)" }}>
                  Contact Information
                </Typography>
                <Typography variant="body1" sx={{ color: "var(--text-secondary)", mb: 3 }}>
                  Fill out the form and our team will get back to you within 24 hours.
                </Typography>

                {[
                  { icon: <LocationOn />, title: "Office Location", content: "dynamic colony infront of siya ram baba aashram goverdhan 281502", color: "#0d7ff2" },
                  { icon: <Phone />, title: "Phone Support", content: "+91 7000285287", color: "#0d7ff2", href: "tel:+917000285287" },
                  { icon: <Email />, title: "Email Address", content: "Vishal@miiscollp.com", color: "#0d7ff2", href: "mailto:vishal@miiscollp.com" },
                  { icon: <Business />, title: "Business Hours", content: "Mon - Fri: 9:00 AM - 6:00 PM", color: "#0d7ff2" }
                ].map((item, idx) => (
                  <Paper 
                    key={idx}
                    sx={{ 
                      p: 3, 
                      borderRadius: 4,
                      bgcolor: 'var(--bg-card)',
                      border: '1px solid var(--border-strong)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        bgcolor: 'var(--bg-card-hover)',
                        borderColor: 'var(--border-hover)',
                        transform: 'translateX(10px)'
                      }
                    }}
                  >
                    <Stack direction="row" spacing={3} alignItems="center">
                      <Avatar sx={{ 
                        bgcolor: `${item.color}20`, 
                        color: item.color,
                        width: 50,
                        height: 50,
                        border: `1px solid ${item.color}40`
                      }}>
                        {item.icon}
                      </Avatar>
                      <Box>
                        <Typography variant="overline" sx={{ color: item.color, fontWeight: 800, letterSpacing: 1 }}>
                          {item.title}
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 600, color: "var(--text-main)" }}>
                          {item.content}
                        </Typography>
                      </Box>
                    </Stack>
                  </Paper>
                ))}
              </Stack>
            </motion.div>
          </Grid>

          {/* Contact Form Card */}
          <Grid size={{ xs: 12, md: 7 }}>
            <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
              <Paper 
                sx={{ 
                  p: { xs: 4, md: 6 }, 
                  borderRadius: "32px",
                  bgcolor: "var(--bg-card)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid var(--border-muted)",
                  boxShadow: "var(--shadow-lg)"
                }}
              >
                <Typography variant="h4" sx={{ mb: 4, fontWeight: 800, color: "var(--text-main)" }}>
                  Send Message
                </Typography>
                
                <Box component="form" noValidate onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField 
                        label="Full Name"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        fullWidth 
                        variant="outlined"
                        sx={textFieldStyles}
                        required
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField 
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        fullWidth 
                        variant="outlined"
                        sx={textFieldStyles}
                        required
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField 
                        label="Address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        fullWidth 
                        variant="outlined"
                        sx={textFieldStyles}
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField 
                        label="Project Type"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        fullWidth 
                        variant="outlined"
                        placeholder="e.g. Web Development, QA Testing"
                        sx={{
                          ...textFieldStyles,
                          '& .MuiOutlinedInput-input::placeholder': {
                            color: 'rgba(0, 0, 0, 0.25)',
                            opacity: 1
                          }
                        }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField 
                        label="How can we help?"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        fullWidth 
                        multiline 
                        rows={5}
                        variant="outlined"
                        sx={textFieldStyles}
                        required
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <Button 
                        type="submit"
                        disabled={status.loading}
                        variant="contained" 
                        fullWidth
                        size="large"
                        endIcon={status.loading ? <CircularProgress size={20} color="inherit" /> : <Send />}
                        sx={{ 
                          py: 2,
                          borderRadius: 3,
                          textTransform: 'none',
                          fontSize: '1.1rem',
                          fontWeight: 800,
                          bgcolor: "#0d7ff2",
                          boxShadow: "0 10px 20px rgba(13, 127, 242, 0.2)",
                          '&:hover': {
                            bgcolor: "#0b6ed1",
                            transform: "scale(1.02)"
                          },
                          '&.Mui-disabled': {
                            bgcolor: 'rgba(13, 127, 242, 0.5)',
                            color: 'rgba(255, 255, 255, 0.7)'
                          },
                          transition: "all 0.3s ease"
                        }}
                      >
                        {status.loading ? "Sending..." : "Send Inquiry"}
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
      
      {/* Snackbar for Notifications */}
      <Snackbar 
        open={status.success || status.error} 
        autoHideDuration={6000} 
        onClose={() => setStatus(prev => ({ ...prev, success: false, error: false }))}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={() => setStatus(prev => ({ ...prev, success: false, error: false }))} 
          severity={status.error ? "error" : "success"}
          variant="filled"
          sx={{ width: '100%', borderRadius: 2 }}
        >
          {status.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
