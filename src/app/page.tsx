"use client";

import React from "react";
import Grid from "@mui/material/Grid"; // ✅ Grid2 import
import {
  Box,
  Container,
  Typography,
  Button,
  Paper,
  Stack,
  Chip,
  Avatar,
  Divider,
  useTheme,
} from "@mui/material";
import {
  RocketLaunch,
  Speed,
  Api,
  Security,
  Assessment,
  Devices,
  Cloud,
  Timeline,
  AutoAwesome,
  Verified,
  IntegrationInstructions,
  AutoFixHigh,
  MobileFriendly,
  Language,
  Engineering,
  AssignmentOutlined,
  AccountTreeOutlined,
  SupportAgent,
} from "@mui/icons-material";
import { motion, Variants, useScroll, useSpring } from "framer-motion";
import AnimatedRevealCard from "@/components/animatedRevealCards/animatedRevealCards";
import AnimatedCard from "@/components/animatedCards/animatedCards";

// Motion helpers
const fadeInLeft: Variants = {
  hidden: { x: -20, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.6 } },
};
const fadeInUp: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};
const containerStagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};
const itemUp: Variants = {
  hidden: { y: 16, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.45 } },
};

// Data
const quickServices = [
  {
    title: "Automation",
    desc: "Selenium, Playwright, Cypress",
    icon: <AutoFixHigh />,
  },
  {
    title: "API & Integration",
    desc: "Contract • Functional • Security",
    icon: <IntegrationInstructions />,
  },
  {
    title: "Performance",
    desc: "Load • Stress • Scalability",
    icon: <Speed />,
  },
] as const;

const metrics = [
  { label: "Automation Coverage", value: "85%+" },
  { label: "Defect Leakage", value: "< 1.5%" },
  { label: "Regression Time", value: "↓ 65%" },
  { label: "Release Cadence", value: "Weekly+" },
];

const techCategories = [
  {
    category: "Test Automation",
    tools: ["Playwright", "Selenium", "Cypress", "Appium"],
  },
  {
    category: "Performance Testing",
    tools: ["JMeter", "k6", "Artillery"],
  },
  {
    category: "API Testing",
    tools: ["Postman", "Pact", "REST Assured"],
  },
  {
    category: "CI/CD & DevOps",
    tools: ["GitHub Actions", "Jenkins", "Docker", "AWS"],
  },
];

const process = [
  {
    step: "01",
    title: "Discover",
    text: "Assess risks, systems, and success metrics.",
    icon: <Timeline />,
  },
  {
    step: "02",
    title: "Design",
    text: "Test strategy, architecture, coverage plan.",
    icon: <AutoAwesome />,
  },
  {
    step: "03",
    title: "Build",
    text: "Frameworks, pipelines, and golden test data.",
    icon: <RocketLaunch />,
  },
  {
    step: "04",
    title: "Run",
    text: "CI/CD gating, dashboards, alerting.",
    icon: <Cloud />,
  },
  {
    step: "05",
    title: "Harden",
    text: "Perf, security, chaos & recovery drills.",
    icon: <Security />,
  },
];

const testimonials = [
  {
    name: "Olivia S.",
    role: "Product Lead, HealthTech",
    quote:
      "Their QA pipelines cut our regression time from 2 days to 5 hours. We ship weekly with confidence now.",
  },
  {
    name: "Elaine M.",
    role: "Engineering Manager, FinServ",
    quote:
      "Clean frameworks, clear reporting, zero drama. Exactly what we needed for compliance-heavy releases.",
  },
];
const whyChooseUs = [
  {
    title: "Multi-Domain Expertise",
    description: "Our extensive experience spans various domains, industries, and software types, allowing us to adapt to diverse project requirements.",
    icon: <Language sx={{ fontSize: 32 }} />,
  },
  {
    title: "Intellectual Property Rights",
    description: "We prioritize the protection of intellectual property rights, ensuring that creators' rights are preserved without conflicts.",
    icon: <Security sx={{ fontSize: 32 }} />,
  },
  {
    title: "Experienced Engineering Team",
    description: "Our skilled team delivers cost-effective, high-quality software testing solutions based on years of experience.",
    icon: <Engineering sx={{ fontSize: 32 }} />,
  },
  {
    title: "Efficient Reporting Structure",
    description: "Miisco's organizational efficiency and clear reporting structure eliminate redundancy, ensuring timely, high-quality solutions.",
    icon: <AssignmentOutlined sx={{ fontSize: 32 }} />,
  },
  {
    title: "Optimized Hierarchy and Escalation Path",
    description: "Our defined hierarchy and structured escalation path follow best practices in quality assurance, delivering performance-driven results.",
    icon: <AccountTreeOutlined sx={{ fontSize: 32 }} />,
  },
  {
    title: "24/7 Client Support",
    description: "We offer 24/7 client support to provide timely assistance and peace of mind for your software testing needs.",
    icon: <SupportAgent sx={{ fontSize: 32 }} />,
  },
];

const featured = [
  {
    title: "QA Automation & Testing",
    description:
      "Robust Playwright/Selenium suites, API testing with Pact, Mobile QA (iOS/Android), and comprehensive test automation wired to CI.",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Development Services",
    description:
      "Full-stack development: Web, Backend, Frontend, and Mobile apps using modern technologies.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Figma UI Designing",
    description:
      "Professional UI/UX design and prototyping with Figma for modern user experiences.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1400&q=80",
  },
];

const processVariants: Variants = {
  hidden: { y: 8, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.35, delay: i * 0.05, ease: "easeOut" },
  }),
};

function ProcessCardMinimal({
  p,
  index,
  BRAND,
}: {
  p: { step: string; title: string; text: string; icon: React.ReactNode };
  index: number;
  BRAND: string;
}) {
  return (
    <Paper
      component={motion.div}
      custom={index}
      variants={processVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      whileHover={{ y: -5 }}
      transition={{ type: "tween" }}
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
        }
      }}
    >
      <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
        <Avatar
          sx={{ bgcolor: "rgba(13, 127, 242, 0.1)", color: "#0d7ff2", width: 48, height: 48 }}
        >
          {p.icon}
        </Avatar>
        <Typography
          variant="overline"
          sx={{ letterSpacing: 2, fontWeight: 800, color: "#0d7ff2" }}
        >
          {p.step}
        </Typography>
      </Stack>

      <Typography variant="h6" sx={{ fontWeight: 800, mb: 1, color: "var(--text-main)" }}>
        {p.title}
      </Typography>
      <Typography variant="body2" sx={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>
        {p.text}
      </Typography>
    </Paper>
  );
}

function SectionProgressBar({
  sectionRef,
  BRAND,
}: {
  sectionRef: React.RefObject<HTMLDivElement | null>;
  BRAND: string;
}) {
  const { scrollYProgress } = (motion as any).useScroll
    ? (require("framer-motion") as any).useScroll({
      target: sectionRef,
      offset: ["start 80%", "end 20%"],
    })
    : { scrollYProgress: { onChange: () => { } } };
  const scaleX = (motion as any).useSpring
    ? (require("framer-motion") as any).useSpring(scrollYProgress, {
      stiffness: 120,
      damping: 20,
    })
    : undefined;

  return (
    <motion.div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        height: 3,
        width: "100%",
        transformOrigin: "0% 50%",
        scaleX,
        background: `linear-gradient(90deg, ${BRAND}, ${BRAND}aa)`,
        opacity: 0.8,
      }}
    />
  );
}

export default function HomePage(): React.ReactElement {
  const theme = useTheme();
  const sectionRef = React.useRef<HTMLDivElement | null>(null);
  const processSectionRef = React.useRef<HTMLDivElement>(null);
  return (
    <Box sx={{ pt: 0, bgcolor: "var(--bg-main)" }}>
      {/* Hero */}
      <Box
        sx={{
          position: "relative",
          color: "var(--text-main)",
          pb: { xs: 12, md: 20 },
          pt: { xs: 15, md: 25 },
          overflow: "hidden",
        }}
      >
        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          style={{
            position: "absolute",
            top: "-10%",
            left: "-10%",
            width: "80vw",
            height: "80vw",
            background: `radial-gradient(circle at 20% 20%, rgba(13, 127, 242, 0.15), transparent 60%)`,
            filter: "blur(100px)",
            zIndex: 0
          }}
        />
        <motion.div
          aria-hidden
          animate={{
            x: ["0%", "5%", "-5%", "0%"],
            y: ["0%", "2%", "-2%", "0%"]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            bottom: "-20%",
            right: "-10%",
            width: "70vw",
            height: "70vw",
            background: `radial-gradient(circle at 80% 80%, rgba(106, 17, 203, 0.1), transparent 60%)`,
            filter: "blur(120px)",
            zIndex: 0
          }}
        />

        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            {/* Left */}
            <Grid size={{ xs: 12, md: 7 }}>
              <motion.div
                variants={fadeInLeft}
                initial="hidden"
                animate="visible"
              >
                <Typography
                  variant="h1"
                  sx={{
                    mb: 4,
                    lineHeight: 1.1,
                    fontWeight: 950,
                    letterSpacing: "-0.04em",
                    color: "var(--text-main)",
                    fontSize: { xs: "2.8rem", md: "5.5rem" },
                  }}
                >
                  Engineering <Box component="span" sx={{
                    background: "linear-gradient(90deg, #0d7ff2 0%, #00d4ff 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                  }}>Quality</Box> for Digital Scale
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    mb: 6,
                    color: "var(--text-secondary)",
                    maxWidth: "600px",
                    lineHeight: 1.6,
                    fontSize: { xs: "1.1rem", md: "1.25rem" },
                    fontWeight: 400
                  }}
                >
                  We partner with ambitious product teams to harden releases,
                  eliminate regression bottlenecks, and guarantee premium user experiences.
                </Typography>

                <Stack direction="row" spacing={2} flexWrap="wrap">
                  <Button
                    variant="contained"
                    size="large"
                    href="/contact"
                    sx={{
                      px: 4,
                      py: 1.5,
                      fontWeight: 800,
                      fontSize: "1rem",
                      background: "linear-gradient(90deg, #0d7ff2, #2563eb)",
                      boxShadow: "0 8px 24px rgba(13, 127, 242, 0.3)",
                      "&:hover": {
                        background: "linear-gradient(90deg, #2563eb, #0d7ff2)",
                        transform: "translateY(-2px)",
                        boxShadow: "0 12px 32px rgba(13, 127, 242, 0.4)",
                      },
                      transition: "all 0.3s ease"
                    }}
                  >
                    Get a Quote
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    href="/services"
                    sx={{
                      px: 3,
                      py: 1.2,
                      borderColor: "rgba(0, 0, 0, 0.15)",
                      color: "var(--text-main)",
                      "&:hover": {
                        borderColor: "rgba(0, 0, 0, 0.3)",
                        bgcolor: "rgba(13, 127, 242, 0.04)",
                      },
                    }}
                  >
                    Explore Services
                  </Button>
                </Stack>

                {/* Metrics */}
                <Grid container spacing={3} sx={{ mt: 6 }}>
                  {metrics.map((m, i) => (
                    <Grid key={i} size={{ xs: 6, sm: 3 }}>
                      <motion.div
                        variants={itemUp}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.5 + i * 0.1 }}
                      >
                        <Typography
                          variant="h4"
                          sx={{ fontWeight: 900, color: "var(--text-main)", mb: 0.5 }}
                        >
                          {m.value}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{
                            color: "var(--text-secondary)",
                            textTransform: "uppercase",
                            fontWeight: 700,
                            letterSpacing: 1
                          }}
                        >
                          {m.label}
                        </Typography>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              </motion.div>
            </Grid>

            {/* Right */}
            <Grid size={{ xs: 12, md: 5 }}>
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
              >
                <Paper
                  sx={{
                    p: 4,
                    borderRadius: "24px",
                    bgcolor: "var(--bg-card)",
                    border: "1px solid var(--border-muted)",
                    backdropFilter: "blur(20px)",
                    boxShadow: "var(--shadow-lg)"
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 800, color: "var(--text-main)", mb: 3 }}
                  >
                    Precision Engineering
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "var(--text-secondary)", mb: 4, lineHeight: 1.7 }}
                  >
                    Rapid automation onboarding • CI/CD gating • Performance
                    and API testing • Web/Mobile coverage • Full Security Audits
                  </Typography>
                  <Divider
                    sx={{ my: 3, borderColor: "var(--border-muted)" }}
                  />
                  <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
                    {quickServices.map((s, i) => (
                      <Chip
                        key={i}
                        icon={s.icon}
                        label={`${s.title}`}
                        variant="outlined"
                        sx={{
                          color: "var(--text-main)",
                          borderColor: "var(--border-light)",
                          bgcolor: "rgba(0, 0, 0, 0.02)",
                          "& .MuiChip-icon": { color: "#0d7ff2" },
                          "&:hover": { bgcolor: "rgba(0, 0, 0, 0.03)" }
                        }}
                      />
                    ))}
                  </Stack>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Trust Bar */}
      <Box sx={{ py: 10, borderTop: "1px solid var(--border-muted)", borderBottom: "1px solid var(--border-muted)", bgcolor: "rgba(0,0,0,0.02)" }}>
        <Container maxWidth="lg">
          <Typography
            variant="overline"
            sx={{ textAlign: "center", display: "block", color: "var(--text-secondary)", mb: 6, fontWeight: 700, letterSpacing: 2 }}
          >
            Trusted by Industry Leaders
          </Typography>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              spacing={{ xs: 4, md: 10 }}
              sx={{ flexWrap: "wrap", gap: 3, opacity: 0.6 }}
            >
              {["Everlight", "AITRCM", "Delight DRG"].map((brand, i) => (
                <Typography
                  key={i}
                  variant="h5"
                  sx={{
                    color: "var(--text-main)",
                    fontWeight: 800,
                    letterSpacing: -1,
                    transition: "all 0.3s ease",
                    cursor: "default",
                    "&:hover": { color: "#0d7ff2", opacity: 1, transform: "scale(1.1)" },
                  }}
                >
                  {brand}
                </Typography>
              ))}
            </Stack>
          </motion.div>
        </Container>
      </Box>

      {/* Quick Services Cards */}
      {/* <Container maxWidth="lg" sx={{ mt: 2, mb: 6 }}>
        <Grid
          container
          spacing={3}
          component={motion.div}
          variants={containerStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {quickServices.map((s, i) => (
            <Grid key={i} size={{ xs: 12, md: 4 }}>
              <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.25 }}
              >
                <Paper
                  variant="outlined"
                  sx={{
                    p: 3,
                    height: "100%",
                    borderRadius: 3,
                    borderColor: "var(--border-muted)",
                    "&:hover": {
                      borderColor: `${BRAND}44`,
                      boxShadow: `0 8px 28px var(--border-light), 0 0 0 1px ${BRAND}22 inset`,
                    },
                  }}
                >
                  <Stack
                    direction="row"
                    spacing={2}
                    alignItems="center"
                    sx={{ mb: 1 }}
                  >
                    <Avatar sx={{ bgcolor: `${BRAND}15`, color: BRAND }}>
                      {s.icon}
                    </Avatar>
                    <Typography variant="h6" sx={{ fontWeight: 800 }}>
                      {s.title}
                    </Typography>
                  </Stack>
                  <Typography variant="body2" color="text.secondary">
                    {s.desc}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container> */}


      {/* Why Choose Miisco Section */}
      <Box
        sx={{
          py: { xs: 15, md: 20 },
          position: "relative",
          overflow: "hidden",
          bgcolor: "var(--bg-main)",
          borderTop: "1px solid var(--border-muted)"
        }}
      >
        {/* Decorative background blobs */}
        <Box
          sx={{
            position: "absolute",
            top: "20%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "800px",
            height: "800px",
            background: `radial-gradient(circle, ${theme.palette.info.main}08 0%, transparent 70%)`,
            filter: "blur(80px)",
            zIndex: 0,
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Box sx={{ mb: 10, textAlign: "center" }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 950,
                  mb: 3,
                  letterSpacing: "-0.03em",
                  fontSize: { xs: "2.5rem", md: "4rem" },
                  color: "var(--text-main)"
                }}
              >
                The Miisco <Box component="span" sx={{ color: "#0d7ff2" }}>Edge</Box>
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "var(--text-secondary)",
                  maxWidth: "700px",
                  mx: "auto",
                  fontSize: "1.2rem",
                  lineHeight: 1.6
                }}
              >
                We don&apos;t just test code; we engineer confidence. Discover how our strategic approach transforms quality into a competitive advantage.
              </Typography>
            </motion.div>
          </Box>

          <Grid
            container
            spacing={4}
            component={motion.div}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {whyChooseUs.map((item, i) => (
              <Grid key={i} size={{ xs: 12, sm: 6, md: 4 }}>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                  }}
                  whileHover={{ y: -8 }}
                >
                  <Paper
                    sx={{
                      p: 5,
                      height: "100%",
                      borderRadius: "24px",
                      bgcolor: "var(--bg-card)",
                      border: "1px solid var(--border-muted)",
                      boxShadow: "var(--shadow-sm)",
                      transition: "all 0.4s ease",
                      position: "relative",
                      overflow: "hidden",
                      "&:hover": {
                        bgcolor: "rgba(13, 127, 242, 0.04)",
                        borderColor: "#0d7ff233",
                        transform: "translateY(-10px)"
                      },
                      display: "flex",
                      flexDirection: "column",
                      alignItems: { xs: "center", md: "flex-start" },
                      textAlign: { xs: "center", md: "left" }
                    }}
                  >
                    <Box
                      sx={{
                        width: 64,
                        height: 64,
                        borderRadius: "16px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: 4,
                        background: "rgba(13, 127, 242, 0.1)",
                        color: "#0d7ff2",
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 800,
                        mb: 2,
                        color: "var(--text-main)"
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "var(--text-secondary)",
                        lineHeight: 1.7,
                        fontSize: "1rem"
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Our Products */}
      <Box sx={{ py: 15, bgcolor: "var(--bg-main)", position: "relative" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{ fontWeight: 950, mb: 10, textAlign: "center", color: "var(--text-main)", letterSpacing: "-0.02em" }}
          >
            Digital <Box component="span" sx={{ color: "#0d7ff2" }}>Solutions</Box>
          </Typography>
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -8 }}
              >
                <Paper
                  sx={{
                    p: 4.5,
                    borderRadius: 6,
                    background: "var(--bg-card)",
                    border: "1px solid var(--border-muted)",
                    backdropFilter: "blur(24px)",
                    color: "var(--text-main)",
                    height: "100%",
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: 800, mb: 2 }}>
                    Smart Matrimony 
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3, opacity: 0.9 }}>
                    Complete matrimonial platform with mobile app and website
                    for connecting people and families.
                  </Typography>
                  <Stack
                    direction="row"
                    spacing={1}
                    flexWrap="wrap"
                    useFlexGap
                    sx={{ mb: 4 }}
                  >
                    {["Mobile App", "Website", "Matrimonial"].map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        size="small"
                        sx={{
                          bgcolor: "rgba(13, 127, 242, 0.1)",
                          color: "#0d7ff2",
                          border: "1px solid rgba(13, 127, 242, 0.2)",
                          fontWeight: 700
                        }}
                      />
                    ))}
                  </Stack>
                  <Button
                    variant="contained"
                    href="https://smartmatrimony.ai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      bgcolor: "#0d7ff2",
                      fontWeight: 800,
                      px: 4,
                      borderRadius: 3,
                      "&:hover": {
                        bgcolor: "#0b6ed1",
                        transform: "translateY(-2px)",
                        boxShadow: "0 10px 20px rgba(13, 127, 242, 0.2)"
                      },
                      transition: "all 0.3s ease"
                    }}
                  >
                    Learn More
                  </Button>
                </Paper>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -8 }}
              >
                <Paper
                  sx={{
                    p: 4.5,
                    borderRadius: 6,
                    background: "var(--bg-card)",
                    border: "1px solid var(--border-muted)",
                    backdropFilter: "blur(24px)",
                    color: "var(--text-main)",
                    height: "100%",
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: 800, mb: 2 }}>
                    Chess Guru
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3, opacity: 0.9 }}>
                    An advanced, AI-powered platform tailored for chess enthusiasts to learn, play, and master the game.
                  </Typography>
                  <Stack
                    direction="row"
                    spacing={1}
                    flexWrap="wrap"
                    useFlexGap
                    sx={{ mb: 4 }}
                  >
                    {["Web App", "AI Platform", "Chess Engine"].map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        size="small"
                        sx={{
                          bgcolor: "rgba(13, 127, 242, 0.1)",
                          color: "#0d7ff2",
                          border: "1px solid rgba(13, 127, 242, 0.2)",
                          fontWeight: 700
                        }}
                      />
                    ))}
                  </Stack>
                  <Button
                    variant="contained"
                    href="https://chessguru.ai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      bgcolor: "#0d7ff2",
                      fontWeight: 800,
                      px: 4,
                      borderRadius: 3,
                      "&:hover": {
                        bgcolor: "#0b6ed1",
                        transform: "translateY(-2px)",
                        boxShadow: "0 10px 20px rgba(13, 127, 242, 0.2)"
                      },
                      transition: "all 0.3s ease"
                    }}
                  >
                    Learn More
                  </Button>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Process Timeline */}
      {/* Process Timeline — upgraded */}
      <Box
        sx={{
          py: 15,
          bgcolor: "var(--bg-main)",
          position: "relative",
          borderTop: "1px solid var(--border-muted)"
        }}
        ref={processSectionRef}
      >
        {/* calm, thin progress bar that fills once on scroll */}
        <SectionProgressBar
          sectionRef={processSectionRef}
          BRAND={theme.palette.secondary.main}
        />

        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ fontWeight: 950, mb: 8, color: "var(--text-main)", letterSpacing: "-0.02em" }}>
            The Miisco <Box component="span" sx={{ color: "#0d7ff2" }}>Workflow</Box>
          </Typography>

          {/* subtle left connector line on md+ to suggest a path */}
          <Box sx={{ position: "relative" }}>
            <Box
              component={motion.span}
              initial={{ scaleY: 0, opacity: 0 }}
              whileInView={{ scaleY: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              sx={{
                display: { xs: "none", md: "block" },
                position: "absolute",
                left: 12,
                top: 8,
                bottom: 8,
                width: 2,
                bgcolor: `${theme.palette.secondary.main}22`,
                borderRadius: 1,
              }}
            />

            <Grid container spacing={3} sx={{ position: "relative" }}>
              {process.map((p, i) => (
                <Grid key={i} size={{ xs: 12, sm: 6, md: 4 }}>
                  <ProcessCardMinimal
                    p={p}
                    index={i}
                    BRAND={theme.palette.secondary.main}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* Tech Stack */}
      <Box
        sx={{
          py: 15,
          bgcolor: "var(--bg-main)",
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid var(--border-muted)"
        }}
      >
        {/* Background decoration */}
        <motion.div
          style={{
            position: "absolute",
            top: "-20%",
            right: "-10%",
            width: "40vw",
            height: "40vw",
            background: `radial-gradient(circle, ${theme.palette.secondary.main}15, transparent 70%)`,
            filter: "blur(60px)",
          }}
        />
        <Container maxWidth="lg" sx={{ position: "relative" }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 950,
              mb: 10,
              color: "var(--text-main)",
              textAlign: "center",
              letterSpacing: "-0.02em"
            }}
          >
            Proprietary <Box component="span" sx={{ color: "#0d7ff2" }}>Tech Stack</Box>
          </Typography>
          <Grid container spacing={4}>
            {techCategories.map((category, i) => (
              <Grid key={i} size={{ xs: 12, sm: 6, md: 3 }}>
                <Paper
                  component={motion.div}
                  initial={{ y: 30, opacity: 0, scale: 0.9 }}
                  whileInView={{ y: 0, opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.15,
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  sx={{
                    p: 4.5,
                    height: "100%",
                    borderRadius: 5,
                    background: "var(--bg-card)",
                    border: "1px solid var(--border-muted)",
                    backdropFilter: "blur(24px)",
                    boxShadow: "var(--shadow-md)",
                    "&:hover": {
                      bgcolor: "rgba(13, 127, 242, 0.04)",
                      borderColor: "#0d7ff244",
                      transform: "translateY(-10px)",
                      boxShadow: "var(--shadow-lg)",
                    },
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    cursor: "pointer",
                  }}
                >
                  <Box sx={{ mb: 3 }}>
                    <Avatar
                      sx={{
                        bgcolor: `${theme.palette.secondary.main}25`,
                        color: theme.palette.secondary.main,
                        width: 48,
                        height: 48,
                        mb: 2,
                        boxShadow: `0 4px 20px ${theme.palette.secondary.main}30`,
                      }}
                    >
                      {category.category === "Test Automation" && (
                        <AutoFixHigh />
                      )}
                      {category.category === "Performance Testing" && <Speed />}
                      {category.category === "API Testing" && <Api />}
                      {category.category === "CI/CD & DevOps" && <Cloud />}
                    </Avatar>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 800,
                        color: "var(--text-main)",
                        fontSize: "1.1rem",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {category.category}
                    </Typography>
                  </Box>
                  <Stack
                    spacing={1.5}
                    direction="row"
                    flexWrap="wrap"
                    useFlexGap
                  >
                    {category.tools.map((tool, j) => (
                      <Chip
                        key={j}
                        label={tool}
                        size="small"
                        sx={{
                          bgcolor: "var(--border-light)",
                          color: "var(--text-muted)",
                          border: "1px solid var(--border-strong)",
                          fontWeight: 500,
                          fontSize: "0.75rem",
                          "&:hover": {
                            bgcolor: `${theme.palette.secondary.main}40`,
                            borderColor: theme.palette.secondary.main,
                            color: "var(--text-main)",
                            transform: "scale(1.05)",
                          },
                          transition: "all 0.2s ease",
                        }}
                      />
                    ))}
                  </Stack>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Testimonials */}
      <Box sx={{ py: 15, bgcolor: "var(--bg-main)", borderTop: "1px solid var(--border-muted)" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{ color: "var(--text-main)", fontWeight: 950, mb: 10, textAlign: "center", letterSpacing: "-0.02em" }}
          >
            Client <Box component="span" sx={{ color: "#0d7ff2" }}>Feedback</Box>
          </Typography>
          <Grid container spacing={4}>
            {testimonials.map((t, i) => (
              <Grid key={i} size={{ xs: 12, md: 6 }}>
                <Paper
                  sx={{
                    p: 5,
                    borderRadius: "24px",
                    bgcolor: "var(--bg-card)",
                    border: "1px solid var(--border-muted)",
                    color: "var(--text-main)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      bgcolor: "rgba(13, 127, 242, 0.04)",
                      borderColor: "rgba(13, 127, 242, 0.2)"
                    }
                  }}
                >
                  <Typography variant="h6" sx={{ mb: 4, lineHeight: 1.6, fontWeight: 400, fontStyle: "italic", color: "var(--text-muted)" }}>
                    “{t.quote}”
                  </Typography>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar
                      sx={{
                        width: 50,
                        height: 50,
                        bgcolor: "rgba(13, 127, 242, 0.1)",
                        color: "#0d7ff2",
                        fontWeight: 700
                      }}
                    >
                      {t.name[0]}
                    </Avatar>
                    <Box>
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: 800, color: "var(--text-main)" }}
                      >
                        {t.name}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{ color: "#0d7ff2", fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}
                      >
                        {t.role}
                      </Typography>
                    </Box>
                  </Stack>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Band */}
      <Box
        sx={{
          py: 15,
          background: "linear-gradient(135deg, #0d7ff2 0%, #6a11cb 100%)",
          color: "#fff",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 8 }}>
              <Typography variant="h2" sx={{ fontWeight: 950, mb: 2, letterSpacing: "-0.02em", color: "#fff" }}>
                Ready to harden your releases?
              </Typography>
              <Typography variant="h6" sx={{ opacity: 0.9, fontWeight: 400, maxWidth: "600px", color: "rgba(255,255,255,0.9)" }}>
                Let&apos;s plug into your CI/CD and raise quality gates without
                slowing the team down.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                justifyContent={{ xs: "flex-start", md: "flex-end" }}
              >
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: "#fff",
                    color: "var(--text-main)",
                    px: 4,
                    py: 2,
                    borderRadius: "12px",
                    fontWeight: 800,
                    fontSize: "1.1rem",
                    textTransform: "none",
                    "&:hover": { bgcolor: "var(--bg-secondary)", transform: "translateY(-2px)" },
                    transition: "all 0.3s ease"
                  }}
                >
                  Book a Call
                </Button>
                <Button
                  size="large"
                  variant="outlined"
                  sx={{
                    borderColor: "rgba(255,255,255,0.4)",
                    color: "#fff",
                    px: 4,
                    py: 2,
                    borderRadius: "12px",
                    fontWeight: 800,
                    fontSize: "1.1rem",
                    textTransform: "none",
                    "&:hover": {
                      borderColor: "#fff",
                      bgcolor: "rgba(255,255,255,0.1)",
                    },
                  }}
                >
                  See Our Work
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
