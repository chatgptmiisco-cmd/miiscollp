"use client";
import React from "react";
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
  Grid
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
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const textFieldStyles = {
    '& .MuiOutlinedInput-root': {
      borderRadius: 2,
      bgcolor: 'rgba(255, 255, 255, 0.03)',
      color: 'white',
      '& fieldset': {
        borderColor: 'rgba(255, 255, 255, 0.1)',
      },
      '&:hover fieldset': {
        borderColor: 'rgba(13, 127, 242, 0.5)',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#0d7ff2',
      },
    },
    '& .MuiInputLabel-root': {
      color: 'rgba(255, 255, 255, 0.5)',
      '&.Mui-focused': {
        color: '#0d7ff2',
      },
    },
  };
  
  return (
    <Box sx={{ 
      bgcolor: "#0a0f1c", 
      color: "white", 
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
                color: "white"
              }}
            >
              Get In <Box component="span" sx={{ color: "#0d7ff2" }}>Touch</Box>
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                color: "#94a3b8", 
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
                <Typography variant="h5" sx={{ fontWeight: 800, mb: 1, color: "white" }}>
                  Contact Information
                </Typography>
                <Typography variant="body1" sx={{ color: "#94a3b8", mb: 3 }}>
                  Fill out the form and our team will get back to you within 24 hours.
                </Typography>

                {[
                  { icon: <LocationOn />, title: "Office Location", content: "Mathura, Uttar Pradesh, India", color: "#0d7ff2" },
                  { icon: <Phone />, title: "Phone Support", content: "+91 9911065583", color: "#0d7ff2" },
                  { icon: <Email />, title: "Email Address", content: "info@miiscollp.com", color: "#0d7ff2" },
                  { icon: <Business />, title: "Business Hours", content: "Mon - Fri: 9:00 AM - 6:00 PM", color: "#0d7ff2" }
                ].map((item, idx) => (
                  <Paper 
                    key={idx}
                    sx={{ 
                      p: 3, 
                      borderRadius: 4,
                      bgcolor: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        bgcolor: 'rgba(255, 255, 255, 0.05)',
                        borderColor: 'rgba(255, 255, 255, 0.1)',
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
                        <Typography variant="body1" sx={{ fontWeight: 600, color: "white" }}>
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
                  bgcolor: "rgba(255, 255, 255, 0.02)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                  boxShadow: "0 40px 100px rgba(0,0,0,0.5)"
                }}
              >
                <Typography variant="h4" sx={{ mb: 4, fontWeight: 800, color: "white" }}>
                  Send Message
                </Typography>
                
                <Box component="form" noValidate>
                  <Grid container spacing={3}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField 
                        label="Full Name" 
                        fullWidth 
                        variant="outlined"
                        sx={textFieldStyles}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField 
                        label="Email Address" 
                        fullWidth 
                        variant="outlined"
                        sx={textFieldStyles}
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField 
                        label="Project Type" 
                        fullWidth 
                        variant="outlined"
                        placeholder="e.g. Web Development, QA Testing"
                        sx={{
                          ...textFieldStyles,
                          '& .MuiOutlinedInput-input::placeholder': {
                            color: 'rgba(255, 255, 255, 0.4)',
                            opacity: 1
                          }
                        }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField 
                        label="How can we help?" 
                        fullWidth 
                        multiline 
                        rows={5}
                        variant="outlined"
                        sx={textFieldStyles}
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <Button 
                        variant="contained" 
                        fullWidth
                        size="large"
                        endIcon={<Send />}
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
                          transition: "all 0.3s ease"
                        }}
                      >
                        Send Inquiry
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
