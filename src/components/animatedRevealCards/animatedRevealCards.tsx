"use client";

import * as React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { motion, useMotionValue, useTransform } from "framer-motion";

const BRAND = "#f00757";

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
        borderRadius: 16, // outer radius
        overflow: "hidden", // clip children like sheen and hotspot
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
              borderRadius: "inherit", // inherit the radius
              overflow: "hidden",
              position: "relative",
              bgcolor: "#fff",
            }}
          >
            {/* Media area */}
            <Box sx={{ height: 280, position: "relative", overflow: "hidden" }}>
              {/* Image: hard bias to bottom-right + zoom */}
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
                      <rect width='100%' height='100%' fill='#f6f8fb'/>
                      <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle'
                        font-family='Inter, Arial' font-size='26' fill='rgba(0,0,0,.5)'>
                        Image unavailable
                      </text>
                    </svg>`
                    );
                }}
                variants={{
                  rest: { scale: 1, x: 0, y: 0 },
                  hover: {
                    scale: 1.18,
                    x: 36, // push right
                    y: 28, // push down
                    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "right bottom",
                  transformOrigin: "bottom right",
                  display: "block",
                  translateZ: 18 as unknown as string,
                }}
              />

              {/* Gradient darken for contrast */}
              <motion.div
                variants={{ rest: { opacity: 0.08 }, hover: { opacity: 0.24 } }}
                transition={{ duration: 0.25 }}
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0.0) 10%, rgba(0,0,0,0.45) 100%)",
                  pointerEvents: "none",
                }}
              />

              {/* Hotspot following cursor */}
              <motion.div
                style={{
                  position: "absolute",
                  inset: 0,
                  pointerEvents: "none",
                  background: `radial-gradient(300px 300px at ${hotspotX.get()} ${hotspotY.get()}, ${BRAND}30, transparent 60%)`,
                  mixBlendMode: "soft-light",
                }}
              />

              {/* One-time sheen sweep on hover */}
              <motion.div
                key="sheen"
                variants={{
                  rest: { x: "-130%", opacity: 0 },
                  hover: {
                    x: "160%",
                    opacity: 1,
                    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                style={{
                  position: "absolute",
                  top: "-25%",
                  left: sheenX.get(),
                  width: "32%",
                  height: "150%",
                  transform: "skewX(-12deg)",
                  background:
                    "linear-gradient(75deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.28) 50%, rgba(255,255,255,0) 100%)",
                  filter: "blur(2px)",
                  pointerEvents: "none",
                  mixBlendMode: "screen",
                }}
              />

              {/* RIGHT REVEAL PANEL — clip-path sweep from edge */}
              <motion.div
                variants={{
                  rest: {
                    opacity: 0,
                    clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
                  },
                  hover: {
                    opacity: 1,
                    clipPath: "polygon(40% 0, 100% 0, 100% 100%, 40% 100%)",
                    transition: {
                      duration: 0.42,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  },
                }}
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  justifyContent: "flex-end",
                  pointerEvents: "none", // panel is decorative; text container handles pointer
                }}
              >
                <Box
                  sx={{
                    width: "60%",
                    height: "100%",
                    background: "rgba(255,255,255,0.92)",
                    backdropFilter: "blur(6px)",
                    WebkitBackdropFilter: "blur(6px)",
                    boxShadow: "-20px 0 40px rgba(0,0,0,0.18)",
                    display: "flex",
                    alignItems: "flex-end",
                    pointerEvents: "auto",
                  }}
                >
                  <CardContent sx={{ p: 3, width: "100%" }}>
                    <motion.div
                      variants={{
                        rest: { transition: { staggerChildren: 0 } },
                        hover: {
                          transition: {
                            staggerChildren: 0.06,
                            delayChildren: 0.06,
                          },
                        },
                      }}
                    >
                      <motion.div
                        variants={{
                          rest: { y: 12, opacity: 0 },
                          hover: {
                            y: 0,
                            opacity: 1,
                            transition: { duration: 0.25 },
                          },
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{ fontWeight: 900, mb: 0.5 }}
                        >
                          {title}
                        </Typography>
                      </motion.div>
                      <motion.div
                        variants={{
                          rest: { y: 12, opacity: 0 },
                          hover: {
                            y: 0,
                            opacity: 1,
                            transition: { duration: 0.25 },
                          },
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{ color: "text.secondary" }}
                        >
                          {description}
                        </Typography>
                      </motion.div>
                      <motion.div
                        variants={{
                          rest: { width: "18%", opacity: 0.25 },
                          hover: {
                            width: "34%",
                            opacity: 1,
                            transition: { duration: 0.28 },
                          },
                        }}
                        style={{ height: 2, borderRadius: 2, marginTop: 14 }}
                      >
                        <Box
                          sx={{
                            height: "100%",
                            width: "100%",
                            background: `linear-gradient(90deg, ${BRAND}, ${BRAND}55)`,
                            borderRadius: 2,
                          }}
                        />
                      </motion.div>
                    </motion.div>
                  </CardContent>
                </Box>
              </motion.div>
            </Box>
          </Card>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
