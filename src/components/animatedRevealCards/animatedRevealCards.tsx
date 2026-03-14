"use client";
import * as React from "react";
import { Card, CardContent, Typography, Box, useTheme, Button } from "@mui/material";
import { motion, useMotionValue, useTransform } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export interface AccentureStyleCardProps {
  title: string;
  description: string;
  image: string;
  priority?: boolean;
}

export default function AccentureStyleCard({
  title,
  description,
  image,
  priority,
}: AccentureStyleCardProps) {
  const theme = useTheme();
  const BRAND = theme.palette.secondary.main;
  const ref = React.useRef<HTMLDivElement | null>(null);

  // cursor (-0.5..0.5)
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  // tilt + shadow (directional)
  const rotateX = useTransform(my, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(mx, [-0.5, 0.5], [-10, 10]);
  const shadowX = useTransform(mx, [-0.5, 0.5], [-12, 12]);
  const shadowY = useTransform(my, [-0.5, 0.5], [18, -2]);
  const blur = useTransform(mx, (x: number) => 28 + Math.abs(x) * 24);
  const boxShadow = useTransform(
    shadowX,
    (x: number) =>
      `0 ${shadowY.get()}px ${blur.get()}px rgba(0,0,0,.22), ${x}px ${shadowY.get()}px ${
        blur.get() * 0.6
      }px rgba(0,0,0,.12)`
  );

  // sheen + hotspot
  const sheenX = useTransform(mx, [-0.5, 0.5], ["-15%", "15%"]);
  const hotspotX = useTransform(mx, [-0.5, 0.5], ["0%", "100%"]);
  const hotspotY = useTransform(my, [-0.5, 0.5], ["0%", "100%"]);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    mx.set(x - 0.5);
    my.set(y - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      initial="rest"
      whileHover="hover"
      animate="rest"
      style={{
        perspective: 1200,
        borderRadius: 20,
        overflow: "hidden",
      }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          borderRadius: "inherit",
          overflow: "hidden",
        }}
      >
        <motion.div style={{ boxShadow }}>
          <Card
            sx={{
              cursor: "pointer",
              borderRadius: "inherit",
              overflow: "hidden",
              position: "relative",
              backgroundcolor: "var(--text-main)",
              border: "1px solid var(--border-muted)",
            }}
          >
            {/* Media area */}
            <Box sx={{ height: 320, position: "relative", overflow: "hidden" }}>
              <motion.img
                src={image}
                alt={title}
                referrerPolicy="no-referrer"
                decoding="async"
                loading={priority ? "eager" : "lazy"}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    "data:image/svg+xml;utf8," +
                    encodeURIComponent(
                      `<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='800'>
                      <rect width='100%' height='100%' fill='var(--bg-main)'/>
                      <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle'
                        font-family='Inter, Arial' font-size='26' fill='rgba(0,0,0,.3)'>
                        Image unavailable
                      </text>
                    </svg>`
                    );
                }}
                variants={{
                  rest: { scale: 1, x: 0, y: 0 },
                  hover: {
                    scale: 1.15,
                    x: 20,
                    y: 15,
                    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                  display: "block",
                }}
              />

              <motion.div
                variants={{ rest: { opacity: 0.15 }, hover: { opacity: 0.35 } }}
                transition={{ duration: 0.3 }}
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.4) 100%)",
                  pointerEvents: "none",
                }}
              />

              {/* Hotspot */}
              <motion.div
                style={{
                  position: "absolute",
                  inset: 0,
                  pointerEvents: "none",
                  background: `radial-gradient(400px 400px at ${hotspotX.get()} ${hotspotY.get()}, rgba(13,127,242,0.2), transparent 70%)`,
                  mixBlendMode: "soft-light",
                }}
              />

              {/* Sheen */}
              <motion.div
                variants={{
                  rest: { x: "-150%", opacity: 0 },
                  hover: {
                    x: "150%",
                    opacity: 1,
                    transition: { duration: 1, ease: "easeInOut" },
                  },
                }}
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(90deg, transparent 0%, var(--border-muted) 50%, transparent 100%)",
                  transform: "skewX(-20deg)",
                  pointerEvents: "none",
                }}
              />

              {/* RIGHT REVEAL PANEL */}
              <motion.div
                variants={{
                  rest: {
                    opacity: 0,
                    clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
                  },
                  hover: {
                    opacity: 1,
                    clipPath: "polygon(35% 0, 100% 0, 100% 100%, 35% 100%)",
                    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  justifyContent: "flex-end",
                  pointerEvents: "none",
                }}
              >
                <Box
                  sx={{
                    width: "65%",
                    height: "100%",
                    background: "rgba(255, 255, 255, 0.96)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    pointerEvents: "auto",
                    p: 4,
                    borderLeft: "1px solid var(--border-muted)"
                  }}
                >
                  <CardContent sx={{ p: 0, mb: 2 }}>
                    <motion.div
                      variants={{
                        rest: { y: 20, opacity: 0 },
                        hover: {
                          y: 0,
                          opacity: 1,
                          transition: { staggerChildren: 0.1, delayChildren: 0.1 },
                        },
                      }}
                    >
                      <motion.div
                        variants={{
                          rest: { y: 10, opacity: 0 },
                          hover: { y: 0, opacity: 1 },
                        }}
                      >
                        <Typography
                          variant="h5"
                          sx={{ fontWeight: 950, mb: 1.5, color: "var(--text-main)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
                        >
                          {title}
                        </Typography>
                      </motion.div>
                      <motion.div
                        variants={{
                          rest: { y: 10, opacity: 0 },
                          hover: { y: 0, opacity: 1 },
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{ color: "var(--text-secondary)", mb: 4, lineHeight: 1.6 }}
                        >
                          {description}
                        </Typography>
                      </motion.div>
                      <motion.div
                        variants={{
                          rest: { scale: 0.8, opacity: 0 },
                          hover: { scale: 1, opacity: 1 },
                        }}
                      >
                        <Button
                          size="small"
                          endIcon={<ArrowForwardIcon />}
                          sx={{
                            p: 0,
                            minWidth: 0,
                            color: "#0d7ff2",
                            fontWeight: 800,
                            textTransform: "none",
                            fontSize: "0.9rem",
                            "&:hover": { bgcolor: "transparent", color: "#2563eb" },
                          }}
                        >
                          View Case Study
                        </Button>
                      </motion.div>
                    </motion.div>
                  </CardContent>
                  <motion.div
                    variants={{
                      rest: { width: 0 },
                      hover: { width: "100%", transition: { duration: 0.4, delay: 0.2 } },
                    }}
                    style={{
                      height: 4,
                      background: "linear-gradient(90deg, #0d7ff2, #2563eb)",
                      borderRadius: 2,
                    }}
                  />
                </Box>
              </motion.div>
            </Box>
          </Card>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
