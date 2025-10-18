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

const serviceCards = [
  {
    title: "Web UI Automation",
    desc: "Stable, data-driven, cross-browser suites for CI pipelines.",
    icon: <Devices />,
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Mobile QA (iOS/Android)",
    desc: "Real devices • Appium • BrowserStack • Detox.",
    icon: <MobileFriendly />,
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "API Testing",
    desc: "Postman • Pact • REST/GraphQL • contract & regression.",
    icon: <Api />,
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Performance & Resilience",
    desc: "JMeter • k6 • failover drills • capacity planning.",
    icon: <Assessment />,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Security Assistance",
    desc: "OWASP checks • ZAP • input fuzzing • secrets scans.",
    icon: <Security />,
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Release Readiness",
    desc: "PVT gates • canary checks • rollback rehearsal.",
    icon: <Verified />,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
  },
];

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
const featured = [
  {
    title: "QA Automation",
    description:
      "Robust Playwright/Selenium suites wired to CI with flaky-test triage.",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "API Testing",
    description:
      "Contract (Pact) + regression across REST/GraphQL with data snapshots.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Performance & Resilience",
    description: "JMeter/k6 load, failover drills, capacity KPIs & dashboards.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
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
      whileHover={{ y: -2 }}
      transition={{ type: "tween" }}
      sx={{
        p: 3,
        height: "100%",
        borderRadius: 3,
        border: "1px solid rgba(0,0,0,0.06)",
        bgcolor: "#fff",
        boxShadow: "0 4px 12px rgba(0,0,0,0.04)",
      }}
    >
      <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 1 }}>
        <Avatar
          sx={{ bgcolor: `${BRAND}14`, color: BRAND, width: 40, height: 40 }}
        >
          {p.icon}
        </Avatar>
        <Typography
          variant="overline"
          sx={{ letterSpacing: 1, fontWeight: 700, color: "text.secondary" }}
        >
          {p.step}
        </Typography>
      </Stack>

      <Typography variant="h6" sx={{ fontWeight: 800, mb: 0.5 }}>
        {p.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
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
    : { scrollYProgress: { onChange: () => {} } };
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
    <Box sx={{ pt: 0, bgcolor: theme.palette.primary.main }}>
      {/* Hero */}
      <Box
        sx={{
          position: "relative",
          color: "#fff",
          pb: { xs: 8, md: 12 },
          pt: { xs: 8, md: 12 },
          overflow: "hidden",
        }}
      >
        {/* Animated backgrounds */}
        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{
            position: "absolute",
            top: "-20%",
            left: "-10%",
            width: "60vw",
            height: "60vw",
            background: `radial-gradient(40% 40% at 50% 50%, ${theme.palette.secondary.main}33, transparent 70%)`,
            filter: "blur(40px)",
          }}
        />
        <motion.div
          aria-hidden
          animate={{ x: ["0%", "2%", "-2%", "0%"] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            bottom: "-25%",
            right: "-10%",
            width: "60vw",
            height: "60vw",
            background:
              "radial-gradient(35% 35% at 50% 50%, rgba(255,255,255,0.06), transparent 70%)",
            filter: "blur(44px)",
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
                    mb: 2,
                    lineHeight: 1.2,
                    fontWeight: 900,
                    letterSpacing: "-0.02em",
                    color: "white",
                    fontSize: { xs: "1.9rem", md: "3rem" },
                  }}
                >
                  Quality-first QA for mission-critical software
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ mb: 4, color: "rgba(255,255,255,0.86)" }}
                >
                  We partner with product teams to reduce risk, accelerate
                  delivery, and guarantee trustworthy user experiences across
                  web, mobile, and APIs.
                </Typography>

                <Stack direction="row" spacing={2} flexWrap="wrap">
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      px: 3,
                      py: 1.2,
                      fontWeight: 700,
                      bgcolor: theme.palette.secondary.main,
                      "&:hover": { bgcolor: theme.palette.secondary.dark },
                    }}
                  >
                    Get a Quote
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{
                      px: 3,
                      py: 1.2,
                      borderColor: "rgba(255,255,255,0.25)",
                      color: "rgba(255,255,255,0.95)",
                      "&:hover": {
                        borderColor: "rgba(255,255,255,0.45)",
                        bgcolor: "rgba(255,255,255,0.04)",
                      },
                    }}
                  >
                    Explore Services
                  </Button>
                </Stack>

                {/* Metrics */}
                <Grid container spacing={2} sx={{ mt: 4 }}>
                  {metrics.map((m, i) => (
                    <Grid key={i} size={{ xs: 6, sm: 3 }}>
                      <Paper
                        component={motion.div}
                        variants={itemUp}
                        initial="hidden"
                        animate="visible"
                        elevation={0}
                        sx={{
                          p: 2,
                          textAlign: "center",
                          bgcolor: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.08)",
                          borderRadius: 2,
                        }}
                      >
                        <Typography
                          variant="h5"
                          sx={{ fontWeight: 900, color: "#fff" }}
                        >
                          {m.value}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{ color: "rgba(255,255,255,0.8)" }}
                        >
                          {m.label}
                        </Typography>
                      </Paper>
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
                    p: 3,
                    borderRadius: 3,
                    bgcolor: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    backdropFilter: "blur(6px)",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 800, color: "#fff", mb: 2 }}
                  >
                    How we help
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "rgba(255,255,255,0.85)" }}
                  >
                    Rapid automation onboarding • CI/CD gating • Performance and
                    API testing • Web/Mobile coverage • Release readiness & PVT
                    checks
                  </Typography>
                  <Divider
                    sx={{ my: 2, borderColor: "rgba(255,255,255,0.08)" }}
                  />
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    {quickServices.map((s, i) => (
                      <Chip
                        key={i}
                        icon={s.icon}
                        label={`${s.title}`}
                        sx={{
                          color: "#fff",
                          borderColor: "rgba(255,255,255,0.16)",
                          bgcolor: "rgba(255,255,255,0.04)",
                          "& .MuiChip-icon": {
                            color: theme.palette.secondary.main,
                          },
                          border: "1px solid rgba(255,255,255,0.12)",
                        }}
                        variant="outlined"
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
      <Box sx={{ py: 6, borderTop: "1px solid rgba(255,255,255,0.1)" }}>
        <Container maxWidth="lg">
          <Typography
            variant="body2"
            sx={{ textAlign: "center", color: "rgba(255,255,255,0.6)", mb: 3 }}
          >
            Trusted by leading companies
          </Typography>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              spacing={4}
              sx={{ flexWrap: "wrap", gap: 3 }}
            >
              {[
                "Everlight",
                "AITRCM",
                "Miisco",
                "MarketBriefs",
                "Delight DRG",
              ].map((brand, i) => (
                <Typography
                  key={i}
                  variant="h6"
                  sx={{
                    color: "rgba(255,255,255,0.4)",
                    fontWeight: 600,
                    letterSpacing: 1,
                    "&:hover": { color: theme.palette.secondary.main },
                    transition: "color 0.3s ease",
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
                    borderColor: "rgba(0,0,0,0.06)",
                    "&:hover": {
                      borderColor: `${BRAND}44`,
                      boxShadow: `0 8px 28px rgba(0,0,0,0.08), 0 0 0 1px ${BRAND}22 inset`,
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

      {/* Services Section */}
      <Container maxWidth="lg" sx={{ pb: 8 }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: 900, mb: 6, textAlign: "center", color: "#fff" }}
        >
          Our Services
        </Typography>
        <Grid container spacing={3}>
          {serviceCards.map((s, i) => (
            <Grid key={i} size={{ xs: 12, sm: 6, md: 4 }}>
              <AnimatedRevealCard
                title={s.title}
                description={s.desc}
                image={s.image}
                priority={i < 3}
              />
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box
        sx={{
          py: 8,
          background: `linear-gradient(180deg,${theme.palette.background.default},${theme.palette.background.paper})`,
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h4" sx={{ fontWeight: 900, mb: 3 }}>
            Featured Work
          </Typography>
          <Grid container spacing={3}>
            {featured.map((c, i) => (
              <Grid key={i} size={{ xs: 12, sm: 6, md: 4 }}>
                <AnimatedRevealCard
                  title={c.title}
                  description={c.description}
                  image={c.image}
                  priority={i < 2}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      {/* Process Timeline */}
      {/* Process Timeline — upgraded */}
      <Box
        sx={{
          py: 8,
          bgcolor: theme.palette.background.default,
          position: "relative",
        }}
        ref={processSectionRef}
      >
        {/* calm, thin progress bar that fills once on scroll */}
        <SectionProgressBar
          sectionRef={processSectionRef}
          BRAND={theme.palette.secondary.main}
        />

        <Container maxWidth="lg">
          <Typography variant="h4" sx={{ fontWeight: 900, mb: 3 }}>
            Our Process
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
          py: 8,
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
          position: "relative",
          overflow: "hidden",
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
            variant="h4"
            sx={{
              fontWeight: 900,
              mb: 4,
              color: "#fff",
              textAlign: "center",
            }}
          >
            Tools we work with
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
                    p: 4,
                    height: "100%",
                    borderRadius: 4,
                    background: `linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))`,
                    border: `1px solid rgba(255,255,255,0.2)`,
                    backdropFilter: "blur(20px)",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                    "&:hover": {
                      background: `linear-gradient(145deg, rgba(255,255,255,0.15), rgba(255,255,255,0.08))`,
                      borderColor: theme.palette.secondary.main,
                      boxShadow: `0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px ${theme.palette.secondary.main}50`,
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
                        color: "#fff",
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
                          bgcolor: "rgba(255,255,255,0.1)",
                          color: "rgba(255,255,255,0.9)",
                          border: "1px solid rgba(255,255,255,0.2)",
                          fontWeight: 500,
                          fontSize: "0.75rem",
                          "&:hover": {
                            bgcolor: `${theme.palette.secondary.main}40`,
                            borderColor: theme.palette.secondary.main,
                            color: "#fff",
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
      <Box sx={{ py: 8, bgcolor: theme.palette.primary.main }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            sx={{ color: "#fff", fontWeight: 900, mb: 3 }}
          >
            What partners say
          </Typography>
          <Grid container spacing={3}>
            {testimonials.map((t, i) => (
              <Grid key={i} size={{ xs: 12, md: 6 }}>
                <Paper
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    bgcolor: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "#fff",
                  }}
                >
                  <Typography variant="body1" sx={{ mb: 2 }}>
                    “{t.quote}”
                  </Typography>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar
                      sx={{
                        bgcolor: `${theme.palette.secondary.main}25`,
                        color: "#fff",
                      }}
                    >
                      {t.name[0]}
                    </Avatar>
                    <Box>
                      <Typography
                        variant="subtitle2"
                        sx={{ fontWeight: 800, color: "#fff" }}
                      >
                        {t.name}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{ color: "rgba(255,255,255,0.8)" }}
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
          py: 8,
          background: `linear-gradient(180deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.dark} 100%)`,
          color: "#fff",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={3} alignItems="center">
            <Grid size={{ xs: 12, md: 8 }}>
              <Typography variant="h4" sx={{ fontWeight: 900, mb: 1 }}>
                Ready to harden your releases?
              </Typography>
              <Typography sx={{ opacity: 0.9 }}>
                Let’s plug into your CI/CD and raise quality gates without
                slowing the team.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Stack
                direction="row"
                spacing={2}
                justifyContent={{ xs: "flex-start", md: "flex-end" }}
              >
                <Button
                  size="large"
                  sx={{
                    bgcolor: "#fff",
                    color: "#111",
                    fontWeight: 800,
                    "&:hover": { bgcolor: "#fdf2f6" },
                  }}
                >
                  Book a Call
                </Button>
                <Button
                  size="large"
                  variant="outlined"
                  sx={{
                    borderColor: "rgba(255,255,255,0.9)",
                    color: "#fff",
                    "&:hover": {
                      borderColor: "#fff",
                      bgcolor: "rgba(255,255,255,0.1)",
                    },
                  }}
                >
                  See Case Studies
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
