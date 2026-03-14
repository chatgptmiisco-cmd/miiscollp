"use client";
import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Chip,
  Stack,
  Paper,
  Button,
  useTheme,
  Avatar,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  IconButton,
  Snackbar,
  Alert,
  CircularProgress
} from "@mui/material";
import { motion } from "framer-motion";
import {
  Work,
  LocationOn,
  AccessTime,
  TrendingUp,
  Groups,
  EmojiEvents,
  CurrencyRupee,
  ArrowForward,
  Close,
  CloudUpload
} from "@mui/icons-material";
import Link from "next/link";

const jobs = [
  {
    title: "QA Engineer (Manual & Automation)",
    location: "Remote / Hybrid",
    type: "Full-time",
    description: "Ensure the highest quality of our digital products. You'll lead test strategies and build robust automation suites using Playwright/Selenium.",
    skills: ["Testing", "Automation", "Playwright", "CI/CD"],
    salary: "₹8 - 15 LPA",
    color: "#0d7ff2",
  },
  {
    title: "Senior Full Stack Developer",
    location: "Remote / Mathura",
    type: "Full-time",
    description: "Build scalable web applications using React, Next.js, and Node.js. Join our core engineering team to deliver high-impact solutions.",
    skills: ["React", "Next.js", "Node.js", "PostgreSQL"],
    salary: "₹12 - 25 LPA",
    color: "#0d7ff2",
  },
  {
    title: "UI/UX Designer",
    location: "Remote",
    type: "Contract",
    description: "Create stunning, user-centric designs. You will be responsible for end-to-end design from wireframing to high-fidelity prototypes.",
    skills: ["Figma", "Adobe CC", "Prototyping", "UX Research"],
    salary: "Competitive",
    color: "#0d7ff2",
  },
] as const;

const benefits = [
  { icon: <TrendingUp />, title: "Exponential Growth", desc: "Fast-paced environment with clear paths for career advancement." },
  { icon: <Groups />, title: "Inclusive Culture", desc: "Join a diverse team that values collaboration and innovative ideas." },
  { icon: <EmojiEvents />, title: "Impactful Work", desc: "Build technology that powers global enterprises and startups." },
];

export default function CareersPage() {
  const theme = useTheme();

  const openingsRef = React.useRef<HTMLDivElement>(null);

  const handleScrollToOpenings = () => {
    openingsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const [open, setOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    jobPosition: "",
    portfolioLink: "",
    resumeLink: ""
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

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setSelectedFile(null); // Reset file selection on close
    setIsDragging(false);
    setFormData({ fullName: "", email: "", jobPosition: "", portfolioLink: "", resumeLink: "" }); // Reset form
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const onDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      // Basic validation for allowed file types
      const file = e.dataTransfer.files[0];
      const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      
      if (validTypes.includes(file.type) || file.name.endsWith('.pdf') || file.name.endsWith('.doc') || file.name.endsWith('.docx')) {
        setSelectedFile(file);
      } else {
        alert("Please upload a PDF or Word Document.");
      }
    }
  };

  const handleSubmit = async () => {
    setStatus({ loading: true, error: false, success: false, message: "" });
    
    // We must use FormData because we are sending a file
    const pushData = new FormData();
    pushData.append('fullName', formData.fullName);
    pushData.append('email', formData.email);
    pushData.append('jobPosition', formData.jobPosition);
    pushData.append('portfolioLink', formData.portfolioLink);
    pushData.append('resumeLink', formData.resumeLink);
    if (selectedFile) {
      pushData.append('resumeFile', selectedFile);
    }

    try {
      const response = await fetch('/api/apply', {
        method: 'POST',
        body: pushData, // No content-type header for FormData, browser sets it with boundaries automatically
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({
          loading: false,
          error: false,
          success: true,
          message: "Application submitted successfully! We will be in touch."
        });
        handleClose(); // Close modal immediately on success
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

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <Box sx={{ bgcolor: "var(--bg-main)", color: "var(--text-main)", minHeight: "100vh", pb: 15 }}>
      {/* Hero Section */}
      <Box 
        sx={{ 
          pt: { xs: 15, md: 25 }, 
          pb: 10,
          background: "radial-gradient(circle at 20% 30%, rgba(13, 127, 242, 0.08) 0%, transparent 60%)"
        }}
      >
        <Container maxWidth="lg">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.8rem", md: "5.5rem" },
                fontWeight: 950,
                mb: 4,
                letterSpacing: "-0.04em",
                lineHeight: 1.1,
                maxWidth: "1000px"
              }}
            >
              Building the next era of <Box component="span" sx={{ color: "#0d7ff2" }}>Digital Trust</Box>
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "var(--text-secondary)",
                maxWidth: "700px",
                lineHeight: 1.6,
                fontWeight: 400,
                fontSize: { xs: "1.1rem", md: "1.25rem" },
                mb: 8
              }}
            >
              Join a high-performance team of engineers and visionaries dedicated to hardening the world&apos;s most critical software.
            </Typography>
            <Button
              onClick={handleScrollToOpenings}
              variant="contained"
              sx={{
                bgcolor: "#0d7ff2",
                    color: "#fff",
                px: 6,
                py: 2.5,
                borderRadius: "15px",
                fontWeight: 800,
                fontSize: "1.1rem",
                textTransform: "none",
                boxShadow: "0 10px 20px rgba(13, 127, 242, 0.2)",
                "&:hover": { bgcolor: "#0b6ed1", transform: "translateY(-2px)" },
                transition: "all 0.3s ease"
              }}
            >
              Explore Open Roles
            </Button>
          </motion.div>
        </Container>
      </Box>

      {/* Why Join Us? (Benefits) */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Grid container spacing={4} component={motion.div} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          {benefits.map((benefit, i) => (
            <Grid size={{ xs: 12, md: 4 }} key={i}>
              <motion.div variants={fadeInUp}>
                <Paper
                  sx={{
                    p: 4,
                    height: "100%",
                    borderRadius: "20px",
                    bgcolor: "var(--bg-card)",
                    border: "1px solid var(--border-muted)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      bgcolor: "rgba(13, 127, 242, 0.04)",
                      borderColor: "var(--border-hover)",
                      transform: "translateY(-5px)"
                    }
                  }}
                >
                  <Avatar sx={{ bgcolor: "rgba(13, 127, 242, 0.1)", color: "#0d7ff2", mb: 3, width: 56, height: 56 }}>
                    {benefit.icon}
                  </Avatar>
                  <Typography variant="h5" sx={{ fontWeight: 800, mb: 2 }}>
                    {benefit.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>
                    {benefit.desc}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Open Positions Section */}
      <Container ref={openingsRef} maxWidth="lg" sx={{ py: 15 }}>
        <Box sx={{ mb: 10 }}>
          <Typography variant="h2" sx={{ fontWeight: 950, mb: 3, letterSpacing: "-0.03em" }}>
            Current <Box component="span" sx={{ color: "#0d7ff2" }}>Openings</Box>
          </Typography>
          <Typography variant="body1" sx={{ color: "var(--text-secondary)", fontSize: "1.2rem", maxWidth: "600px" }}>
            Join a culture where technical mastery meets creative problem-solving.
          </Typography>
        </Box>

        <Stack spacing={4}>
          {jobs.map((job, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <Paper
                sx={{
                  p: { xs: 5, md: 6 },
                  borderRadius: "32px",
                  bgcolor: "var(--bg-card)",
                  border: "1px solid var(--border-muted)",
                  transition: "all 0.4s ease",
                  overflow: "hidden",
                  position: "relative",
                  "&:hover": {
                    bgcolor: "rgba(13, 127, 242, 0.04)",
                    borderColor: "rgba(13, 127, 242, 0.2)",
                    transform: "translateY(-5px)"
                  },
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "6px",
                    height: "100%",
                    bgcolor: job.color,
                    opacity: 0.8
                  }
                }}
              >
                <Grid container spacing={4} alignItems="center">
                  <Grid size={{ xs: 12, md: 8 }}>
                    <Stack spacing={2}>
                      <Typography variant="h4" sx={{ fontWeight: 800, color: "var(--text-main)" }}>
                        {job.title}
                      </Typography>
                      
                      <Stack direction="row" spacing={3} sx={{ color: "var(--text-secondary)" }} flexWrap="wrap" gap={1}>
                        <Stack direction="row" spacing={1} alignItems="center">
                          <LocationOn sx={{ fontSize: 18 }} />
                          <Typography variant="body2">{job.location}</Typography>
                        </Stack>
                        <Stack direction="row" spacing={1} alignItems="center">
                          <AccessTime sx={{ fontSize: 18 }} />
                          <Typography variant="body2">{job.type}</Typography>
                        </Stack>
                        <Stack direction="row" spacing={1} alignItems="center">
                          <CurrencyRupee sx={{ fontSize: 18 }} />
                          <Typography variant="body2">{job.salary}</Typography>
                        </Stack>
                      </Stack>

                      <Typography variant="body1" sx={{ color: "var(--text-secondary)", lineHeight: 1.6, maxWidth: "700px" }}>
                        {job.description}
                      </Typography>

                      <Stack direction="row" spacing={1} flexWrap="wrap" gap={1} pt={1}>
                        {job.skills.map((skill, si) => (
                          <Chip 
                            key={si} 
                            label={skill} 
                            sx={{ 
                              bgcolor: "rgba(0, 0, 0, 0.03)", 
                              color: "var(--text-main)", 
                              fontWeight: 600,
                              borderRadius: "8px",
                              border: "1px solid var(--border-light)"
                            }} 
                            size="small"
                          />
                        ))}
                      </Stack>
                    </Stack>
                  </Grid>
                  
                  <Grid size={{ xs: 12, md: 4 }} sx={{ textAlign: { xs: "left", md: "right" } }}>
                    <Button
                      variant="contained"
                      endIcon={<ArrowForward />}
                      sx={{
                        bgcolor: "#0d7ff2",
                    color: "#fff",
                        px: 5,
                        py: 2,
                        borderRadius: "12px",
                        fontWeight: 800,
                        textTransform: "none",
                        fontSize: "1rem",
                        boxShadow: "0 10px 25px rgba(13, 127, 242, 0.2)",
                        "&:hover": { bgcolor: "#0b6ed1", transform: "translateY(-2px)" },
                        transition: "all 0.3s ease"
                      }}
                    >
                      Apply Now
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </motion.div>
          ))}
        </Stack>
      </Container>

      {/* Culture Section Placeholder */}
      <Container maxWidth="lg" sx={{ py: 15 }}>
        <Paper
          sx={{
            p: { xs: 8, md: 12 },
            borderRadius: "40px",
            background: "linear-gradient(135deg, rgba(13, 127, 242, 0.06) 0%, var(--bg-secondary) 100%)",
            border: "1px solid rgba(13, 127, 242, 0.2)",
            textAlign: "center"
          }}
        >
          <Typography variant="h2" sx={{ fontWeight: 950, mb: 3, letterSpacing: "-0.02em" }}>
            Don&apos;t see a perfect fit?
          </Typography>
          <Typography variant="h6" sx={{ color: "var(--text-secondary)", mb: 8, maxWidth: "600px", mx: "auto", fontWeight: 400, lineHeight: 1.6 }}>
            Send us your resume anyway. We&apos;re always looking for exceptional people to join our journey and raise the bar.
          </Typography>
          <Button
            onClick={handleOpen}
            variant="contained"
            sx={{
              bgcolor: "#0d7ff2",
              color: "#fff",
              px: 6,
              py: 2.5,
              borderRadius: "16px",
              fontWeight: 800,
              fontSize: "1.1rem",
              textTransform: "none",
              "&:hover": { bgcolor: "#0b6ed1", transform: "translateY(-2px)" },
              transition: "all 0.3s ease"
            }}
          >
            Send Your Resume
          </Button>
        </Paper>
      </Container>
      {/* Resume Application Modal */}
      <Dialog 
        open={open} 
        onClose={handleClose}
        PaperProps={{
          sx: {
            bgcolor: "var(--bg-secondary)",
            color: "var(--text-main)",
            borderRadius: "24px",
            border: "1px solid var(--border-light)",
            boxShadow: "var(--shadow-lg)",
            minWidth: { xs: "90vw", sm: "500px" }
          }
        }}
      >
        <DialogTitle sx={{ 
          m: 0, 
          p: 3, 
          pb: 2, 
          fontWeight: 800, 
          fontSize: "1.5rem",
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          Apply Now
          <IconButton
            onClick={handleClose}
            sx={{ color: "var(--text-muted)", "&:hover": { color: "var(--text-main)" } }}
          >
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ p: 3, pt: 1 }}>
          <Stack spacing={3} sx={{ mt: 1 }}>
            <Typography variant="body2" sx={{ color: "var(--text-secondary)", mb: 1 }}>
              Tell us a bit about yourself and we'll get back to you soon.
            </Typography>
            <TextField 
              fullWidth 
              label="Full Name" 
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              variant="outlined" 
              required
              InputProps={{
                sx: { color: "var(--text-main)", borderRadius: "12px", "& fieldset": { borderColor: "var(--border-strong)", transition: "all 0.3s ease" }, "&:hover fieldset": { borderColor: "var(--border-hover)" }, "&.Mui-focused fieldset": { borderColor: "#0d7ff2" } }
              }}
              InputLabelProps={{ sx: { color: "var(--text-muted)", "&.Mui-focused": { color: "#0d7ff2" } } }}
            />
            <TextField 
              fullWidth 
              label="Email Address" 
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              variant="outlined" 
              required
              InputProps={{
                sx: { color: "var(--text-main)", borderRadius: "12px", "& fieldset": { borderColor: "var(--border-strong)", transition: "all 0.3s ease" }, "&:hover fieldset": { borderColor: "var(--border-hover)" }, "&.Mui-focused fieldset": { borderColor: "#0d7ff2" } }
              }}
              InputLabelProps={{ sx: { color: "var(--text-muted)", "&.Mui-focused": { color: "#0d7ff2" } } }}
            />
            <TextField 
              fullWidth 
              label="Job Position" 
              placeholder="e.g. Full Stack Developer"
              name="jobPosition"
              value={formData.jobPosition}
              onChange={handleChange}
              variant="outlined" 
              InputProps={{
                sx: { color: "var(--text-main)", borderRadius: "12px", "& fieldset": { borderColor: "var(--border-strong)", transition: "all 0.3s ease" }, "&:hover fieldset": { borderColor: "var(--border-hover)" }, "&.Mui-focused fieldset": { borderColor: "#0d7ff2" } }
              }}
              InputLabelProps={{ sx: { color: "var(--text-muted)", "&.Mui-focused": { color: "#0d7ff2" } } }}
            />
            <TextField 
              fullWidth 
              label="LinkedIn / GitHub Profile (Optional)" 
              placeholder="https://..."
              name="portfolioLink"
              value={formData.portfolioLink}
              onChange={handleChange}
              variant="outlined" 
              InputProps={{
                sx: { color: "var(--text-main)", borderRadius: "12px", "& fieldset": { borderColor: "var(--border-strong)", transition: "all 0.3s ease" }, "&:hover fieldset": { borderColor: "var(--border-hover)" }, "&.Mui-focused fieldset": { borderColor: "#0d7ff2" } }
              }}
              InputLabelProps={{ sx: { color: "var(--text-muted)", "&.Mui-focused": { color: "#0d7ff2" } } }}
            />
            <TextField 
              fullWidth 
              label="Resume Link (Google Drive, Dropbox, etc.)" 
              name="resumeLink"
              value={formData.resumeLink}
              onChange={handleChange}
              variant="outlined" 
              InputProps={{
                sx: { color: "var(--text-main)", borderRadius: "12px", "& fieldset": { borderColor: "var(--border-strong)", transition: "all 0.3s ease" }, "&:hover fieldset": { borderColor: "rgba(13, 127, 242, 0.5)" }, "&.Mui-focused fieldset": { borderColor: "#0d7ff2" } }
              }}
              InputLabelProps={{ sx: { color: "var(--text-muted)", "&.Mui-focused": { color: "#0d7ff2" } } }}
            />
            
            <Typography variant="body2" sx={{ color: "var(--text-muted)", textAlign: "center", fontWeight: 600 }}>
              — OR —
            </Typography>

            <Box 
              onDragOver={onDragOver}
              onDragLeave={onDragLeave}
              onDrop={onDrop}
              sx={{ display: 'flex', flexDirection: 'column' }}
            >
              <Button
                component="label"
                variant="outlined"
                startIcon={<CloudUpload />}
                sx={{
                  py: 3,
                  color: selectedFile ? "#0d7ff2" : (isDragging ? "var(--text-main)" : "var(--text-muted)"),
                  borderColor: selectedFile ? "#0d7ff2" : (isDragging ? "#0d7ff2" : "var(--border-strong)"),
                  borderRadius: "12px",
                  borderStyle: selectedFile ? "solid" : "dashed",
                  borderWidth: isDragging ? "2px" : "1px",
                  textTransform: "none",
                  fontWeight: 600,
                  fontSize: "1rem",
                  bgcolor: selectedFile ? "rgba(13, 127, 242, 0.05)" : (isDragging ? "rgba(13, 127, 242, 0.1)" : "transparent"),
                  "&:hover": {
                    borderColor: "var(--border-hover)",
                    bgcolor: "rgba(13, 127, 242, 0.05)",
                    color: "var(--text-main)"
                  },
                  transition: "all 0.3s ease",
                  display: "flex",
                  flexDirection: "column",
                  gap: 1
                }}
              >
                {selectedFile ? (
                  selectedFile.name
                ) : (
                  <>
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                      {isDragging ? "Drop Resume Here" : "Upload Resume (PDF, DOCX)"}
                    </Typography>
                    <Typography variant="caption" sx={{ color: "var(--text-muted)" }}>
                      Drag and drop your file here or click to browse
                    </Typography>
                  </>
                )}
                <input
                  type="file"
                  hidden
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                />
              </Button>
            </Box>
          </Stack>
        </DialogContent>
        <DialogActions sx={{ p: 3, pt: 1, pb: 4, justifyContent: "flex-end" }}>
          <Button 
            onClick={handleClose} 
            sx={{ color: "var(--text-secondary)", textTransform: "none", fontWeight: 700, mr: 1 }}
          >
            Cancel
          </Button>
          <Button 
            onClick={handleSubmit} 
            disabled={status.loading || (!formData.fullName || !formData.email || (!formData.resumeLink && !selectedFile))}
            variant="contained" 
            endIcon={status.loading ? <CircularProgress size={20} color="inherit" /> : <ArrowForward />}
            sx={{ 
              bgcolor: "#0d7ff2",
                    color: "#fff",
              borderRadius: "10px",
              px: 3,
              textTransform: "none",
              fontWeight: 700,
              boxShadow: "0 10px 20px rgba(13, 127, 242, 0.2)",
              "&:hover": { bgcolor: "#0b6ed1" },
              "&.Mui-disabled": {
                bgcolor: "var(--border-hover)",
                color: "rgba(255, 255, 255, 0.5)"
              }
            }}
          >
            {status.loading ? "Sending..." : "Submit Application"}
          </Button>
        </DialogActions>
        
        {/* Modal-specific error message */}
        {status.error && (
          <Box sx={{ px: 3, pb: 3 }}>
            <Alert severity="error" sx={{ borderRadius: "10px" }}>
              {status.message}
            </Alert>
          </Box>
        )}
      </Dialog>
      
      {/* Global Success Indicator across page */}
      <Snackbar 
        open={status.success} 
        autoHideDuration={6000} 
        onClose={() => setStatus(prev => ({ ...prev, success: false }))}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={() => setStatus(prev => ({ ...prev, success: false }))} 
          severity="success"
          variant="filled"
          sx={{ width: '100%', borderRadius: 2 }}
        >
          {status.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
