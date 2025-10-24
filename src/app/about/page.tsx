"use client";
import { Box, Container, Typography, Avatar, Paper } from "@mui/material";
import Grid from "@mui/material/Grid"; // ✅ Updated import
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <Box sx={{ py: 10 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ mb: 3 }}>
          About Maheshwari Innovatives
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Founded in 2022, we deliver dependable QA & Testing solutions to
          global product teams...
        </Typography>

        {/* Mission / Vision / Values Section */}
        <Grid container spacing={4}>
          {[
            {
              title: "Mission",
              text: "Deliver high-quality software with reduced risk.",
            },
            {
              title: "Vision", 
              text: "Be the trusted QA partner for growing product companies.",
            },
            {
              title: "Values",
              text: "Quality · Trust · Timely delivery · Continuous learning",
            },
          ].map((item, i) => (
            <Grid size={{ xs: 12, md: 4 }} key={i}>
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Paper
                  sx={{
                    p: 4,
                    height: "100%",
                    borderRadius: 4,
                    bgcolor: "#fff",
                    border: "2px solid transparent",
                    background: "linear-gradient(#fff, #fff) padding-box, linear-gradient(135deg, #667eea, #764ba2) border-box",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                    position: "relative",
                    overflow: "hidden",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 16px 48px rgba(0,0,0,0.15)",
                    },
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 4,
                      background: `linear-gradient(90deg, ${i === 0 ? '#667eea' : i === 1 ? '#f093fb' : '#4facfe'}, ${i === 0 ? '#764ba2' : i === 1 ? '#f5576c' : '#00f2fe'})`,
                    },
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: 2,
                        background: `linear-gradient(135deg, ${i === 0 ? '#667eea' : i === 1 ? '#f093fb' : '#4facfe'}, ${i === 0 ? '#764ba2' : i === 1 ? '#f5576c' : '#00f2fe'})`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mr: 2,
                      }}
                    >
                      <Typography variant="h6" sx={{ color: "white", fontWeight: 800 }}>
                        {item.title[0]}
                      </Typography>
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: 800, color: "text.primary" }}>
                      {item.title}
                    </Typography>
                  </Box>
                  <Typography variant="body1" sx={{ lineHeight: 1.7, color: "text.secondary", fontSize: "1.1rem" }}>
                    {item.text}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Leadership Section */}
        <Box sx={{ mt: 8 }}>
          <Typography variant="h4" sx={{ mb: 4, fontWeight: 900, textAlign: "center" }}>
            Leadership
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {[
              { 
                name: "Mohit Maheshwari", 
                title: "Founder/CEO",
                description: "Committed to driving innovation, growth, and fostering a culture of excellence."
              },
              { 
                name: "Shobhit Maheshwari", 
                title: "Founder/CFO",
                description: "Driving financial growth, and maintaining the company's financial health."
              },
              { 
                name: "Vishal Maheshwari", 
                title: "Co-Founder/CMO",
                description: "Lead cutting-edge development, ensuring that innovation in it's industry."
              }
            ].map((p, i) => (
                <Grid size={{ xs: 12, md: 4 }} key={i}>
                  <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    whileHover={{ y: -6 }}
                  >
                    <Paper
                      sx={{
                        p: 5,
                        borderRadius: 4,
                        bgcolor: "#fff",
                        border: "2px solid transparent",
                        background: "linear-gradient(#fff, #fff) padding-box, linear-gradient(135deg, #667eea, #764ba2) border-box",
                        boxShadow: "0 12px 40px rgba(0,0,0,0.1)",
                        position: "relative",
                        overflow: "hidden",
                        "&:hover": {
                          transform: "translateY(-6px)",
                          boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
                        },
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          height: 4,
                          background: "linear-gradient(90deg, #667eea, #764ba2)",
                        },
                        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                        textAlign: "center",
                      }}
                    >
                      <Box
                        sx={{
                          position: "relative",
                          display: "inline-block",
                          mb: 3,
                        }}
                      >
                        <Avatar 
                          sx={{ 
                            width: 90, 
                            height: 90, 
                            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                            fontSize: "1.8rem",
                            fontWeight: 800,
                            boxShadow: "0 8px 24px rgba(102, 126, 234, 0.3)",
                          }}
                        >
                          {p.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </Avatar>
                        <Box
                          sx={{
                            position: "absolute",
                            bottom: -8,
                            right: -8,
                            width: 24,
                            height: 24,
                            borderRadius: "50%",
                            bgcolor: "success.main",
                            border: "3px solid white",
                          }}
                        />
                      </Box>
                      <Typography variant="h4" sx={{ fontWeight: 800, mb: 1, color: "text.primary" }}>
                        {p.name}
                      </Typography>
                      <Typography variant="h6" sx={{ color: "primary.main", fontWeight: 600, mb: 2 }}>
                        {p.title}
                      </Typography>
                      <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.6, mb: 2 }}>
                        {p.description}
                      </Typography>
                      <Box sx={{ width: 60, height: 3, bgcolor: "primary.main", mx: "auto", borderRadius: 2 }} />
                    </Paper>
                  </motion.div>
                </Grid>
              )
            )}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
