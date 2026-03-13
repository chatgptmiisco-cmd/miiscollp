"use client";
import React from "react";
import {
  Box,
  Typography,
  Link as MuiLink,
  Container,
  IconButton,
  Grid,
  Divider,
  Stack,
  Button
} from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";
import Facebook from "@mui/icons-material/Facebook";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Twitter from "@mui/icons-material/Twitter";
import Email from "@mui/icons-material/Email";
import Phone from "@mui/icons-material/Phone";
import LocationOn from "@mui/icons-material/LocationOn";

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Services", href: "/services" },
    { label: "Our Projects", href: "/projects" },
    // { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Website Development", href: "/services/web-development" },
    { label: "App Development", href: "/services/app-development" },
    { label: "QA & Testing", href: "/services" },
    { label: "Cloud Solutions", href: "/services" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: LinkedIn, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

const contactInfo = [
  { icon: Email, text: "info@miiscollp.com" },
  { icon: Phone, text: "+91 9911065583" },
  { icon: LocationOn, text: "Mathura, Uttar Pradesh, India" },
];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#0a0f1c",
        color: "white",
        position: "relative",
        borderTop: "1px solid rgba(255, 255, 255, 0.05)",
        pt: 15,
        pb: 5,
        overflow: "hidden"
      }}
    >
      {/* Decorative background gradients */}
      <Box
        sx={{
          position: "absolute",
          bottom: "-20%",
          right: "-10%",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(13, 127, 242, 0.08) 0%, transparent 70%)",
          filter: "blur(100px)",
          zIndex: 0
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "-20%",
          left: "-10%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(13, 127, 242, 0.05) 0%, transparent 70%)",
          filter: "blur(80px)",
          zIndex: 0
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={8}>
          {/* Company Info */}
          <Grid size={{ xs: 12, md: 5 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 950,
                  mb: 3,
                  letterSpacing: "-0.04em",
                  display: "flex",
                  alignItems: "center"
                }}
              >
                MIISCO<Box component="span" sx={{ color: "#0d7ff2" }}>.</Box>
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mb: 5,
                  lineHeight: 1.8,
                  color: "#94a3b8",
                  maxWidth: "400px",
                  fontSize: "1.1rem"
                }}
              >
                Engineering precision and quality for the digital age. We partner with product-led organizations to harden releases and guarantee premium user experiences.
              </Typography>

              {/* Social Links */}
              <Stack direction="row" spacing={2} sx={{ mb: 5 }}>
                {socialLinks.map((social, idx) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.1, y: -4 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <IconButton
                        component={MuiLink}
                        href={social.href}
                        aria-label={social.label}
                        sx={{
                          color: "#fff",
                          backgroundColor: "rgba(255, 255, 255, 0.03)",
                          border: "1px solid rgba(255,255,255,0.08)",
                          p: 1.5,
                          "&:hover": {
                            backgroundColor: "rgba(13, 127, 242, 0.15)",
                            color: "#0d7ff2",
                            borderColor: "rgba(13, 127, 242, 0.4)"
                          },
                        }}
                      >
                        <IconComponent sx={{ fontSize: 20 }} />
                      </IconButton>
                    </motion.div>
                  );
                })}
              </Stack>
            </motion.div>
          </Grid>

          {/* Quick Links */}
          <Grid size={{ xs: 6, md: 2 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 800, mb: 4, color: "white", textTransform: "uppercase", letterSpacing: 1.5, fontSize: "0.85rem" }}
              >
                Company
              </Typography>
              <Stack spacing={2}>
                {footerLinks.company.map((link, idx) => (
                  <MuiLink
                    key={idx}
                    component={Link}
                    href={link.href}
                    sx={{
                      color: "#94a3b8",
                      textDecoration: "none",
                      fontSize: "1rem",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        color: "white",
                        transform: "translateX(6px)",
                      },
                    }}
                  >
                    {link.label}
                  </MuiLink>
                ))}
              </Stack>
            </motion.div>
          </Grid>

          {/* Contact Details */}
          <Grid size={{ xs: 12, md: 5 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 800, mb: 4, color: "white", textTransform: "uppercase", letterSpacing: 1.5, fontSize: "0.85rem" }}
              >
                Get In Touch
              </Typography>
              
              <Stack spacing={3}>
                {contactInfo.map((contact, idx) => {
                  const IconComponent = contact.icon;
                  return (
                    <Box
                      key={idx}
                      sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        color: "#94a3b8",
                      }}
                    >
                      <Box sx={{ 
                        mr: 2, 
                        p: 1.2, 
                        borderRadius: "12px", 
                        bgcolor: "rgba(13, 127, 242, 0.05)",
                        color: "#0d7ff2",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "1px solid rgba(13, 127, 242, 0.1)"
                      }}>
                        <IconComponent sx={{ fontSize: 20 }} />
                      </Box>
                      <Box>
                        <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.4)", fontWeight: 700, mb: 0.5, textTransform: "uppercase", fontSize: "0.7rem", letterSpacing: 1 }}>
                          {contact.icon === Email ? "Email Us" : contact.icon === Phone ? "Call Us" : "Visit Us"}
                        </Typography>
                        <Typography variant="body1" sx={{ color: "white", fontWeight: 500 }}>
                          {contact.text}
                        </Typography>
                      </Box>
                    </Box>
                  );
                })}
              </Stack>

              <Box sx={{ mt: 5 }}>
                <Button
                  component={Link}
                  href="/contact"
                  variant="contained"
                  fullWidth
                  sx={{
                    py: 2,
                    borderRadius: "16px",
                    fontWeight: 800,
                    textTransform: "none",
                    bgcolor: "#0d7ff2",
                    "&:hover": { bgcolor: "#0b6ed1" }
                  }}
                >
                  Start a Project
                </Button>
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.05)", my: 8 }} />

        {/* Bottom Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 3,
            pb: 5,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "#64748b",
              textAlign: { xs: "center", md: "left" },
              fontWeight: 500
            }}
          >
            &copy; {new Date().getFullYear()} MIISCO IT Services LLP. All rights reserved.
          </Typography>
          
          <Stack direction="row" spacing={4}>
            {["Privacy Policy", "Terms of Service"].map(
              (item, idx) => (
                <MuiLink
                  key={idx}
                  href="#"
                  sx={{
                    color: "#64748b",
                    textDecoration: "none",
                    fontSize: "0.85rem",
                    transition: "all 0.3s ease",
                    fontWeight: 500,
                    "&:hover": { color: "#0d7ff2" },
                  }}
                >
                  {item}
                </MuiLink>
              )
            )}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
  