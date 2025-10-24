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
    // { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Manual Testing", href: "/services" },
    { label: "Automation Testing", href: "/services" },
    { label: "API Testing", href: "/services" },
    { label: "Performance Testing", href: "/services" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: LinkedIn, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

const contactInfo = [
  { icon: Email, text: "info@maheshwariinnovatives.com" },
  { icon: Phone, text: "+91 9876543210" },
  { icon: LocationOn, text: "Mathura, Uttar Pradesh, India" },
];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        background:
          "linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%)",
        color: "white",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(124, 58, 237, 0.1) 0%, transparent 50%)",
          pointerEvents: "none",
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{ py: 8 }}>
          <Grid container spacing={6}>
            {/* Company Info */}
            <Grid size={{ xs: 12, md: 4 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 800,
                    mb: 3,
                    background:
                      "linear-gradient(135deg, #60a5fa 0%, #a855f7 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Maheshwari Innovatives
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    mb: 4,
                    lineHeight: 1.7,
                    color: "rgba(255, 255, 255, 0.8)",
                  }}
                >
                  Empowering businesses with cutting-edge QA, Testing, and IT
                  Solutions. Your trusted partner for quality assurance
                  excellence.
                </Typography>

                {/* Contact Info */}
                <Box sx={{ mb: 4 }}>
                  {contactInfo.map((contact, idx) => {
                    const IconComponent = contact.icon;
                    return (
                      <Box
                        key={idx}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          mb: 2,
                          color: "rgba(255, 255, 255, 0.8)",
                        }}
                      >
                        <IconComponent sx={{ mr: 2, fontSize: 20 }} />
                        <Typography variant="body2">{contact.text}</Typography>
                      </Box>
                    );
                  })}
                </Box>

                {/* Social Links */}
                <Box sx={{ display: "flex", gap: 1 }}>
                  {socialLinks.map((social, idx) => {
                    const IconComponent = social.icon;
                    return (
                      <motion.div
                        key={idx}
                        whileHover={{ scale: 1.1, y: -2 }}
                        transition={{ duration: 0.3 }}
                      >
                        <IconButton
                          component={MuiLink}
                          href={social.href}
                          aria-label={social.label}
                          sx={{
                            color: "rgba(255, 255, 255, 0.8)",
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                            "&:hover": {
                              backgroundColor: "rgba(59, 130, 246, 0.2)",
                              color: "#60a5fa",
                            },
                          }}
                        >
                          <IconComponent sx={{ fontSize: 20 }} />
                        </IconButton>
                      </motion.div>
                    );
                  })}
                </Box>
              </motion.div>
            </Grid>

            {/* Company Links */}
            <Grid size={{ xs: 12, sm: 6, md: 2 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 700, mb: 3, color: "white" }}
                >
                  Company
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {footerLinks.company.map((link, idx) => (
                    <MuiLink
                      key={idx}
                      component={Link}
                      href={link.href}
                      sx={{
                        color: "rgba(255, 255, 255, 0.7)",
                        textDecoration: "none",
                        fontSize: "0.9rem",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          color: "#60a5fa",
                          transform: "translateX(4px)",
                        },
                      }}
                    >
                      {link.label}
                    </MuiLink>
                  ))}
                </Box>
              </motion.div>
            </Grid>

            {/* Services Links */}
            {/* <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 700, mb: 3, color: "white" }}
                >
                  Services
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {footerLinks.services.map((link, idx) => (
                    <MuiLink
                      key={idx}
                      component={Link}
                      href={link.href}
                      sx={{
                        color: "rgba(255, 255, 255, 0.7)",
                        textDecoration: "none",
                        fontSize: "0.9rem",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          color: "#60a5fa",
                          transform: "translateX(4px)",
                        },
                      }}
                    >
                      {link.label}
                    </MuiLink>
                  ))}
                </Box>
              </motion.div>
            </Grid> */}

            {/* Newsletter */}
            <Grid size={{ xs: 12, md: 3 }} sx={{ ml: "auto" }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 700, mb: 3, color: "white" }}
                >
                  Stay Updated
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    mb: 3,
                    color: "rgba(255, 255, 255, 0.7)",
                    lineHeight: 1.6,
                  }}
                >
                  Get the latest updates on our services, industry insights, and
                  quality assurance best practices.
                </Typography>
                <Box
                  sx={{
                    p: 3,
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    borderRadius: 2,
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      color: "rgba(255, 255, 255, 0.8)",
                      textAlign: "center",
                    }}
                  >
                    🚀 Ready to get started?
                    <br />
                    <MuiLink
                      component={Link}
                      href="/contact"
                      sx={{
                        color: "#60a5fa",
                        textDecoration: "none",
                        fontWeight: 600,
                        "&:hover": {
                          textDecoration: "underline",
                        },
                      }}
                    >
                      Contact us today!
                    </MuiLink>
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.1)", mb: 4 }} />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              alignItems: "center",
              gap: 2,
              pb: 4,
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: "rgba(255, 255, 255, 0.6)",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              &copy; {new Date().getFullYear()} Maheshwari Innovatives IT
              Services LLP. All rights reserved.
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 3,
                flexWrap: "wrap",
                justifyContent: { xs: "center", md: "flex-end" },
              }}
            >
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (item, idx) => (
                  <MuiLink
                    key={idx}
                    href="#"
                    sx={{
                      color: "rgba(255, 255, 255, 0.6)",
                      textDecoration: "none",
                      fontSize: "0.85rem",
                      "&:hover": { color: "#60a5fa" },
                    }}
                  >
                    {item}
                  </MuiLink>
                )
              )}
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
