"use client";
import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Stack,
  Chip,
  IconButton,
  Divider,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import {
  LinkedIn,
  Email,
  Code,
  BugReport,
  PhoneAndroid,
  Security,
  Speed,
  DesignServices,
  Storage,
  Cloud,
  Groups,
  EmojiEvents,
  TrendingUp,
  Diversity3,
} from "@mui/icons-material";

/* ─── Team Data ─── */

interface TeamMember {
  name: string;
  role: string;
  department: string;
  avatar: string;
  bio: string;
  skills: string[];
  linkedin?: string;
  email?: string;
}

const departments = [
  "All",
  "Leadership",
  "Engineering",
  "QA & Testing",
  "Design",
  "Operations",
];

const teamMembers: TeamMember[] = [
  // Leadership
  {
    name: "Mohit Maheshwari",
    role: "Founder & CEO",
    department: "Leadership",
    avatar: "/founder.jpg",
    bio: "Visionary leader with 15+ years in IT services, driving Miisco's mission to redefine software quality standards across the globe.",
    skills: ["Strategic Vision", "Business Development", "Digital Transformation"],
    linkedin: "https://www.linkedin.com/in/mohit-maheshwari-71073b34/",
    email: "mohit@miiscollp.com",
  },
  {
    name: "Shobhit Maheshwari",
    role: "Founder & CFO",
    department: "Leadership",
    avatar: "/shobhit.jpeg",
    bio: "Financial strategist ensuring Miisco's sustainable growth while building a culture of accountability and operational excellence.",
    skills: ["Financial Planning", "Risk Management", "Growth Strategy"],
    linkedin: "",
    email: "shobhit@miiscollp.com",
  },
  {
    name: "Vishal Maheshwari",
    role: "Co-Founder & CMO",
    department: "Leadership",
    avatar: "/cofounder.jpg",
    bio: "Brand architect crafting Miisco's market presence and forging strategic partnerships with Fortune 500 companies worldwide.",
    skills: ["Brand Strategy", "Client Relations", "Market Expansion"],
    linkedin: "https://www.linkedin.com/in/vishal-maheshwari-902473114/",
    email: "vishal@miiscollp.com",
  },
  // Engineering
  {
    name: "Prateek Rajput",
    role: "Senior Frontend Developer",
    department: "Engineering",
    avatar: "",
    bio: "Senior Frontend Developer building fast, scalable web and mobile apps with React, React Native, Next.js, TypeScript, and Tailwind CSS.",
    skills: ["React","React-native","Next.js", "TypeScript", "Tailwind CSS"],
    linkedin: "https://www.linkedin.com/in/rajputprateek/",
  },
  {
    name: "Abhishek Raj",
    role: "Senior Full Stack Developer",
    department: "Engineering",
    avatar: "",
    bio: "End-to-end engineering specialist, building robust platforms from databases to dynamic client experiences.",
    skills: ["Node.js", "React","Python","Express","Next.js","TypeScript","Tailwind CSS"],
    linkedin: "https://www.linkedin.com/in/carryadder/",
  },
  {
    name: "Dhiraj Zawar",
    role: "Full Stack Developer",
    department: "Engineering",
    avatar: "",
    bio: "Architecting scalable backend architectures and integrating them flawlessly with modern frontends.",
    skills: ["JavaScript", "Python", "SQL", "React-Native","React"],
    linkedin: "https://www.linkedin.com/in/dhiraj-zawar-19424124a/",
  },
  {
    name: "Deepesh Singh",
    role: "QA & Backend Engineer",
    department: "Engineering",
    avatar: "",
    bio: "Building resilient microservices and aggressively automating reliability checks across the platform.",
    skills: ["Python", "AI-ML", "AWS", "Kubernetes", "Docker", "FastAPI", "node.js", "express.js"],
    linkedin: "https://www.linkedin.com/in/asdeepesh/",
  },
  {
    name: "Meghanshu Jain",
    role: "Backend Developer",
    department: "Engineering",
    avatar: "",
    bio: "Ensuring deep architectural integrity and reliability by combining software testing with core backend development.",
    skills: ["Python", "Django", "FastAPI", "node.js", "express.js", "playwright","docker"],
    linkedin: "https://www.linkedin.com/in/meghanshu-jain-180378219/",
  },
  {
    name: "Aditya Salunkhe",
    role: "FullStack Developer & Automation Engineer",
    department: "Engineering",
    avatar: "",
    bio: "Fusing visually engaging frontends with automated testing pipelines to ensure continuous quality.",
    skills: ["React", "React-native", "Next.js", "node.js", "express.js", "Selenium"],
    linkedin: "https://www.linkedin.com/in/aditya-salunke-b96a88320/",
  },

  {
    name: "Sanket Patil",
    role: "QA & Backend Engineer",
    department: "Engineering",
    avatar: "",
    bio: "Specializing in API automation, performance bottlenecks resolution, and backend stability.",
    skills: ["PostgreSQL", "API Automation", "JMeter", "Python"],
    linkedin: "#",
  },
  {
    name: "Rahul Sen",
    role: "Frontend Developer",
    department: "Engineering",
    avatar: "",
    bio: "Passionate about bridging the gap between design and technical implementation through elegant code.",
    skills: ["HTML5", "CSS3", "JavaScript", "React"],
    linkedin: "https://www.linkedin.com/in/rahulsenmobileapplicationdeveloper/",
  },
  // QA & Testing
  {
    name: "Gaurav Sharma",
    role: "QA & Automation Lead",
    department: "QA & Testing",
    avatar: "",
    bio: "Quality champion overseeing end-to-end testing strategies that achieve zero critical bugs in production.",
    skills: ["Test Strategy", "Selenium", "Appium", "JIRA"],
    linkedin: "https://www.linkedin.com/in/gaurav-sharma-277505172/",
  },
  {
    name: "Aditya Singh",
    role: "QA Engineer",
    department: "QA & Testing",
    avatar: "",
    bio: "Meticulous tester dedicated to uncovering edge cases and enforcing the highest standards of software quality.",
    skills: ["Manual Testing", "Bug Tracking", "Test Cases", "Agile"],
    linkedin: "https://www.linkedin.com/in/adityasinghse/",
  },
  // Design
  {
    name: "Tushar Mishra",
    role: "UI/UX Design Lead",
    department: "Design",
    avatar: "",
    bio: "Design thinker transforming complex user journeys into elegant, intuitive interfaces that drive engagement and delight users.",
    skills: ["Figma", "Design Systems", "Prototyping", "User Research"],
    linkedin: "https://www.linkedin.com/in/tushar-mishra-bb3b13209/",
  },
];

const stats = [
  { icon: <Groups sx={{ fontSize: 28 }} />, value: "10+", label: "Team Members" },
  { icon: <EmojiEvents sx={{ fontSize: 28 }} />, value: "120+", label: "Projects Delivered" },
  { icon: <TrendingUp sx={{ fontSize: 28 }} />, value: "98%", label: "Client Satisfaction" },
  // { icon: <Diversity3 sx={{ fontSize: 28 }} />, value: "4+", label: "Global Offices" },
];

const departmentIcons: Record<string, React.ReactNode> = {
  Leadership: <EmojiEvents sx={{ fontSize: 20 }} />,
  Engineering: <Code sx={{ fontSize: 20 }} />,
  "QA & Testing": <BugReport sx={{ fontSize: 20 }} />,
  Design: <DesignServices sx={{ fontSize: 20 }} />,
  Operations: <Storage sx={{ fontSize: 20 }} />,
};

/* ─── Utility: get initials for avatar fallback ─── */
function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

/* ─── Animation variants ─── */
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

/* ─── Page Component ─── */
export default function TeamPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredMembers =
    activeFilter === "All"
      ? teamMembers
      : teamMembers.filter((m) => m.department === activeFilter);

  return (
    <Box sx={{ bgcolor: "var(--bg-main)", color: "var(--text-main)", minHeight: "100vh" }}>
      {/* ── Hero Section ── */}
      <Box
        sx={{
          pt: { xs: 16, md: 22 },
          pb: { xs: 8, md: 14 },
          px: { xs: 3, md: 6 },
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Animated background orbs */}
        <Box
          sx={{
            position: "absolute",
            top: "-120px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "800px",
            height: "800px",
            background:
              "radial-gradient(circle, rgba(13,127,242,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "100px",
            right: "-200px",
            width: "500px",
            height: "500px",
            background:
              "radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <Chip
            label="Meet the People Behind Miisco"
            sx={{
              mb: 3,
              bgcolor: "rgba(13,127,242,0.1)",
              color: "#0d7ff2",
              fontWeight: 700,
              border: "1px solid rgba(13,127,242,0.2)",
              fontSize: "0.85rem",
              py: 2.5,
              px: 1,
            }}
          />
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.5rem", md: "5rem" },
              fontWeight: 950,
              letterSpacing: "-0.04em",
              lineHeight: 1.1,
              mb: 3,
            }}
          >
            Our{" "}
            <Box
              component="span"
              sx={{
                background: "linear-gradient(90deg, #0d7ff2, #60a5fa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Team
            </Box>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "var(--text-secondary)",
              fontSize: { xs: "1rem", md: "1.2rem" },
              maxWidth: "650px",
              mx: "auto",
              lineHeight: 1.7,
            }}
          >
            A diverse crew of engineers, designers, strategists, and quality
            champions united by a shared passion for building software that
            truly matters.
          </Typography>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
          }}
        >
          <Grid
            container
            spacing={3}
            justifyContent="center"
            sx={{ mt: { xs: 5, md: 8 }, maxWidth: "900px", mx: "auto" }}
          >
            {stats.map((s, i) => (
              <Grid size={{ xs: 6, sm: 3 }} key={i}>
                <motion.div variants={cardVariant}>
                  <Paper
                    sx={{
                      p: 3,
                      borderRadius: "20px",
                      bgcolor: "var(--bg-card)",
                      border: "1px solid var(--border-muted)",
                      backdropFilter: "blur(12px)",
                      textAlign: "center",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        borderColor: "var(--border-hover)",
                        bgcolor: "rgba(13,127,242,0.04)",
                        transform: "translateY(-4px)",
                      },
                    }}
                  >
                    <Box sx={{ color: "#0d7ff2", mb: 1 }}>{s.icon}</Box>
                    <Typography
                      variant="h4"
                      sx={{ fontWeight: 900, color: "var(--text-main)", mb: 0.5 }}
                    >
                      {s.value}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: "var(--text-secondary)",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                      }}
                    >
                      {s.label}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Box>

      {/* ── Filter Bar ── */}
      <Container maxWidth="lg" sx={{ mb: 6 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Stack
            direction="row"
            spacing={1.5}
            justifyContent="center"
            flexWrap="wrap"
            useFlexGap
            sx={{ rowGap: 1.5 }}
          >
            {departments.map((dep) => (
              <Chip
                key={dep}
                label={dep}
                clickable
                onClick={() => setActiveFilter(dep)}
                icon={
                  dep !== "All" ? (
                    <Box sx={{ display: "flex", ml: 1 }}>
                      {departmentIcons[dep]}
                    </Box>
                  ) : undefined
                }
                sx={{
                  px: 2,
                  py: 2.5,
                  borderRadius: "14px",
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  transition: "all 0.3s ease",
                  bgcolor:
                    activeFilter === dep
                      ? "rgba(13,127,242,0.15)"
                      : "rgba(255,255,255,0.03)",
                  color: activeFilter === dep ? "#60a5fa" : "var(--text-muted)",
                  border:
                    activeFilter === dep
                      ? "1px solid rgba(13,127,242,0.4)"
                      : "1px solid var(--border-muted)",
                  "&:hover": {
                    bgcolor: "rgba(13,127,242,0.1)",
                    color: "#60a5fa",
                    borderColor: "var(--border-hover)",
                  },
                }}
              />
            ))}
          </Stack>
        </motion.div>
      </Container>

      {/* ── Team Grid ── */}
      <Container maxWidth="lg" sx={{ pb: 12 }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={stagger}
          >
            <Grid container spacing={3}>
              {filteredMembers.map((member, i) => (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={member.name}>
                  <motion.div variants={cardVariant} layout>
                    <Paper
                      sx={{
                        p: 0,
                        height: "100%",
                        borderRadius: "24px",
                        bgcolor: "var(--bg-card)",
                        border: "1px solid var(--border-muted)",
                        overflow: "hidden",
                        transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                        cursor: "default",
                        "&:hover": {
                          borderColor: "rgba(13,127,242,0.35)",
                          bgcolor: "rgba(13,127,242,0.03)",
                          transform: "translateY(-8px)",
                          boxShadow: "0 20px 60px rgba(13,127,242,0.1)",
                          "& .member-avatar": {
                            transform: "scale(1.08)",
                          },
                          "& .member-glow": {
                            opacity: 1,
                          },
                        },
                      }}
                    >
                      {/* Top accent glow */}
                      <Box
                        className="member-glow"
                        sx={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          height: "3px",
                          background:
                            "linear-gradient(90deg, transparent, #0d7ff2, transparent)",
                          opacity: 0,
                          transition: "opacity 0.4s ease",
                        }}
                      />

                      {/* Content */}
                      <Box sx={{ p: 4, position: "relative" }}>
                        {/* Avatar + Name */}
                        <Stack
                          direction="row"
                          spacing={2.5}
                          alignItems="center"
                          sx={{ mb: 2.5 }}
                        >
                          <Box
                            className="member-avatar"
                            sx={{
                              width: 72,
                              height: 72,
                              minWidth: 72,
                              borderRadius: "18px",
                              overflow: "hidden",
                              transition: "transform 0.4s ease",
                              background: member.avatar
                                ? "none"
                                : `linear-gradient(135deg, #0d7ff2, #2563eb)`,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              border: "2px solid rgba(13,127,242,0.2)",
                            }}
                          >
                            {member.avatar ? (
                              <Box
                                component="img"
                                src={member.avatar}
                                alt={member.name}
                                sx={{
                                  width: "100%",
                                  height: "100%",
                                  objectFit: "cover",
                                }}
                              />
                            ) : (
                              <Typography
                                sx={{
                                  fontWeight: 900,
                                  fontSize: "1.3rem",
                                  color: "var(--text-main)",
                                }}
                              >
                                {getInitials(member.name)}
                              </Typography>
                            )}
                          </Box>
                          <Box sx={{ minWidth: 0 }}>
                            <Typography
                              variant="h6"
                              sx={{
                                fontWeight: 800,
                                color: "var(--text-main)",
                                lineHeight: 1.2,
                                fontSize: "1.05rem",
                              }}
                            >
                              {member.name}
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{
                                color: "#0d7ff2",
                                fontWeight: 700,
                                fontSize: "0.85rem",
                                mt: 0.3,
                              }}
                            >
                              {member.role}
                            </Typography>
                          </Box>
                        </Stack>

                        {/* Department Badge */}
                        <Chip
                          size="small"
                          label={member.department}
                          sx={{
                            mb: 2,
                            bgcolor: "rgba(13, 127, 242, 0.04)",
                            color: "var(--text-secondary)",
                            fontWeight: 600,
                            fontSize: "0.7rem",
                            height: 24,
                            border: "1px solid var(--border-muted)",
                          }}
                        />

                        {/* Bio */}
                        <Typography
                          variant="body2"
                          sx={{
                            color: "var(--text-secondary)",
                            lineHeight: 1.65,
                            fontSize: "0.85rem",
                            mb: 2.5,
                            minHeight: "65px",
                          }}
                        >
                          {member.bio}
                        </Typography>

                        {/* Skills */}
                        <Stack
                          direction="row"
                          flexWrap="wrap"
                          useFlexGap
                          spacing={0.8}
                          sx={{ mb: 2.5 }}
                        >
                          {member.skills.map((skill) => (
                            <Chip
                              key={skill}
                              label={skill}
                              size="small"
                              sx={{
                                bgcolor: "rgba(13,127,242,0.08)",
                                color: "#60a5fa",
                                fontWeight: 600,
                                fontSize: "0.7rem",
                                height: 26,
                                border: "1px solid rgba(13,127,242,0.15)",
                              }}
                            />
                          ))}
                        </Stack>

                        <Divider
                          sx={{
                            borderColor: "var(--border-muted)",
                            mb: 2,
                          }}
                        />

                        {/* Social Links */}
                        <Stack direction="row" spacing={1}>
                          {member.linkedin && (
                            <IconButton
                              size="small"
                              href={member.linkedin}
                              target="_blank"
                              sx={{
                                color: "var(--text-secondary)",
                                bgcolor: "rgba(0, 0, 0, 0.02)",
                                border: "1px solid var(--border-muted)",
                                borderRadius: "10px",
                                width: 36,
                                height: 36,
                                transition: "all 0.2s ease",
                                "&:hover": {
                                  color: "#0d7ff2",
                                  borderColor: "var(--border-hover)",
                                  bgcolor: "rgba(13,127,242,0.08)",
                                },
                              }}
                            >
                              <LinkedIn sx={{ fontSize: 18 }} />
                            </IconButton>
                          )}
                          {member.email && (
                            <IconButton
                              size="small"
                              href={`mailto:${member.email}`}
                              sx={{
                                color: "var(--text-secondary)",
                                bgcolor: "rgba(0, 0, 0, 0.02)",
                                border: "1px solid var(--border-muted)",
                                borderRadius: "10px",
                                width: 36,
                                height: 36,
                                transition: "all 0.2s ease",
                                "&:hover": {
                                  color: "#0d7ff2",
                                  borderColor: "var(--border-hover)",
                                  bgcolor: "rgba(13,127,242,0.08)",
                                },
                              }}
                            >
                              <Email sx={{ fontSize: 18 }} />
                            </IconButton>
                          )}
                        </Stack>
                      </Box>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </AnimatePresence>
      </Container>

      {/* ── Culture Section ── */}
      <Box
        sx={{
          py: { xs: 8, md: 14 },
          position: "relative",
          borderTop: "1px solid var(--border-muted)",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            bottom: "-200px",
            left: "-100px",
            width: "600px",
            height: "600px",
            background:
              "radial-gradient(circle, rgba(13,127,242,0.06) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <Container maxWidth="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Box sx={{ textAlign: "center", mb: 8 }}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 900,
                  mb: 2,
                  fontSize: { xs: "2rem", md: "2.8rem" },
                  letterSpacing: "-0.02em",
                }}
              >
                Why People Love Working at{" "}
                <Box
                  component="span"
                  sx={{
                    background: "linear-gradient(90deg, #0d7ff2, #60a5fa)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Miisco
                </Box>
              </Typography>
              <Typography
                sx={{
                  color: "var(--text-secondary)",
                  maxWidth: "600px",
                  mx: "auto",
                  fontSize: "1rem",
                  lineHeight: 1.7,
                }}
              >
                We foster a culture where innovation thrives, growth is
                continuous, and every voice matters.
              </Typography>
            </Box>
          </motion.div>

          <Grid container spacing={3}>
            {[
              {
                icon: <TrendingUp sx={{ fontSize: 30, color: "#0d7ff2" }} />,
                title: "Career Growth",
                desc: "Structured mentorship programs, certification support, and clear promotion paths ensure you're always moving forward.",
              },
              {
                icon: <Diversity3 sx={{ fontSize: 30, color: "#0d7ff2" }} />,
                title: "Inclusive Culture",
                desc: "We celebrate diversity in all its forms. Our team spans 8+ nationalities, creating a rich tapestry of perspectives and ideas.",
              },
              {
                icon: <Code sx={{ fontSize: 30, color: "#0d7ff2" }} />,
                title: "Cutting-Edge Tech",
                desc: "Work with the latest technologies—from AI-powered testing frameworks to cloud-native architectures and beyond.",
              },
              {
                icon: <EmojiEvents sx={{ fontSize: 30, color: "#0d7ff2" }} />,
                title: "Recognition & Rewards",
                desc: "Quarterly awards, innovation bonuses, and peer recognition keep our team motivated and celebrated for great work.",
              },
              {
                icon: <Groups sx={{ fontSize: 30, color: "#0d7ff2" }} />,
                title: "Collaborative Spirit",
                desc: "Cross-functional teams, open-door leadership, and hackathons create an environment where collaboration fuels breakthroughs.",
              },
              {
                icon: <Cloud sx={{ fontSize: 30, color: "#0d7ff2" }} />,
                title: "Flexible Work",
                desc: "Hybrid and remote work options, flexible hours, and a trust-first approach to help you do your best work, anywhere.",
              },
            ].map((perk, i) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i}>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, delay: i * 0.1 },
                    },
                  }}
                >
                  <Paper
                    sx={{
                      p: 4,
                      height: "100%",
                      borderRadius: "24px",
                      bgcolor: "var(--bg-card)",
                      border: "1px solid var(--border-muted)",
                      transition: "all 0.4s ease",
                      "&:hover": {
                        bgcolor: "rgba(13, 127, 242, 0.04)",
                        borderColor: "rgba(13,127,242,0.25)",
                        transform: "translateY(-5px)",
                      },
                    }}
                  >
                    <Box sx={{ mb: 2 }}>{perk.icon}</Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 800,
                        mb: 1.5,
                        color: "var(--text-main)",
                        fontSize: "1.05rem",
                      }}
                    >
                      {perk.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "var(--text-secondary)", lineHeight: 1.7 }}
                    >
                      {perk.desc}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ── CTA Section ── */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Paper
          sx={{
            p: { xs: 5, md: 8 },
            borderRadius: "32px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            bgcolor: "rgba(13,127,242,0.06)",
            border: "1px solid rgba(13,127,242,0.15)",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "-50%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "600px",
              height: "600px",
              background:
                "radial-gradient(circle, rgba(13,127,242,0.1) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            style={{ position: "relative", zIndex: 1 }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 900,
                mb: 2,
                fontSize: { xs: "2rem", md: "2.8rem" },
                letterSpacing: "-0.02em",
              }}
            >
              Want to Join the Team?
            </Typography>
            <Typography
              sx={{
                color: "var(--text-secondary)",
                fontSize: { xs: "1rem", md: "1.1rem" },
                mb: 5,
                maxWidth: "550px",
                mx: "auto",
                lineHeight: 1.7,
              }}
            >
              We're always looking for talented individuals who share our
              passion for quality and innovation. Check out our open positions
              and become part of something extraordinary.
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              justifyContent="center"
            >
              <Box
                component="a"
                href="/careers"
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  px: 5,
                  py: 1.8,
                  borderRadius: "16px",
                  fontWeight: 800,
                  fontSize: "1rem",
                  textDecoration: "none",
                  color: "var(--text-main)",
                  background: "linear-gradient(90deg, #0d7ff2, #2563eb)",
                  boxShadow: "0 8px 24px rgba(13,127,242,0.3)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    background: "linear-gradient(90deg, #2563eb, #0d7ff2)",
                    transform: "translateY(-2px)",
                    boxShadow: "0 12px 32px rgba(13,127,242,0.4)",
                  },
                }}
              >
                View Open Positions
              </Box>
              <Box
                component="a"
                href="/contact"
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  px: 5,
                  py: 1.8,
                  borderRadius: "16px",
                  fontWeight: 800,
                  fontSize: "1rem",
                  textDecoration: "none",
                  color: "var(--text-main)",
                  bgcolor: "rgba(13, 127, 242, 0.04)",
                  border: "1px solid var(--border-light)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    borderColor: "var(--border-strong)",
                    bgcolor: "rgba(255,255,255,0.07)",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                Contact Us
              </Box>
            </Stack>
          </motion.div>
        </Paper>
      </Container>
    </Box>
  );
}
