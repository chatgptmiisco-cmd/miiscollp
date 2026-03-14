"use client";

import * as React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Avatar,
  Chip,
} from "@mui/material";
import {
  motion,
  useMotionValue,
  useTransform,
  useMotionTemplate,
} from "framer-motion";

export interface FeatureTiltCardProps {
  title: string;
  description?: string;
  image?: string; // if present, uses image-led “Feature” look
  icon?: React.ReactNode; // for icon-led cards (Quick/Process/Service)
  badge?: string;
  href?: string;
  priority?: boolean;
  brand?: string; // defaults to #f00757
}

const FeatureTiltCard: React.FC<FeatureTiltCardProps> = ({
  title,
  description,
  image,
  icon,
  badge,
  href,
  priority,
  brand = "#f00757",
}) => {
  const ref = React.useRef<HTMLDivElement | null>(null);

  // cursor norm (-0.5..0.5)
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  // 3D tilt
  const rotateX = useTransform(my, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(mx, [-0.5, 0.5], [-10, 10]);

  // shadow + blur follow
  const shadowX = useTransform(mx, [-0.5, 0.5], [-14, 14]);
  const shadowY = useTransform(my, [-0.5, 0.5], [18, -4]);
  const blur = useTransform(mx, (v) => 28 + Math.abs(v) * 24);
  const blur06 = useTransform(blur, (b) => b * 0.6);
  const boxShadow = useMotionTemplate`
    0 ${shadowY}px ${blur}px rgba(0,0,0,.22),
    ${shadowX}px ${shadowY}px ${blur06}px rgba(0,0,0,.12)
  `;

  // sheen + hotspot
  const sheenX = useTransform(mx, [-0.5, 0.5], ["-15%", "15%"]);
  const hotspotX = useTransform(mx, [-0.5, 0.5], ["0%", "100%"]);
  const hotspotY = useTransform(my, [-0.5, 0.5], ["0%", "100%"]);
  const hotspotBg = useMotionTemplate`
    radial-gradient(300px 300px at ${hotspotX} ${hotspotY}, ${brand}30, transparent 60%)
  `;

  const onMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    mx.set(x);
    my.set(y);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  const Wrapper: any = href ? "a" : "div";

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ perspective: 1200, borderRadius: 16, overflow: "hidden" }}
    >
      <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}>
        <motion.div style={{ boxShadow }}>
          <Card
            component={Wrapper}
            href={href}
            sx={{
              position: "relative",
              borderRadius: 3,
              overflow: "hidden",
              textDecoration: "none",
              bgcolor: "#0d111b",
              border: "1px solid var(--border-muted)",
              cursor: href ? "pointer" : "default",
            }}
          >
            {/* MEDIA / HEADER */}
            <Box
              sx={{
                position: "relative",
                height: image ? 280 : 120,
                bgcolor: image ? "transparent" : "#0a0f1c",
              }}
            >
              {/* image-led look */}
              {image && (
                <motion.img
                  src={image}
                  alt={title}
                  decoding="async"
                  loading={priority ? "eager" : "lazy"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "right bottom",
                    transform: "translateZ(18px)",
                    transformOrigin: "bottom right",
                    display: "block",
                  }}
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.18, x: 36, y: 28 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src =
                      "data:image/svg+xml;utf8," +
                      encodeURIComponent(
                        `<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='800'>
                           <rect width='100%' height='100%' fill='#0a0f1c'/>
                           <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle'
                            font-family='Inter, Arial' font-size='26' fill='rgba(255,255,255,.3)'>Image unavailable</text>
                         </svg>`
                      );
                  }}
                />
              )}

              {/* icon-led look */}
              {!image && icon && (
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <Avatar
                    sx={{
                      width: 64,
                      height: 64,
                      bgcolor: "rgba(13, 127, 242, 0.1)",
                      color: "#0d7ff2",
                      boxShadow: "0 10px 28px rgba(13, 127, 242, 0.2)",
                    }}
                  >
                    {icon}
                  </Avatar>
                </Box>
              )}

              {/* darken for image contrast */}
              {image && (
                <motion.div
                  initial={{ opacity: 0.15 }}
                  whileHover={{ opacity: 0.35 }}
                  transition={{ duration: 0.25 }}
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, rgba(10,15,28,0.0) 10%, rgba(10,15,28,0.6) 100%)",
                    pointerEvents: "none",
                  }}
                />
              )}

              {/* hotspot & sheen */}
              <motion.div
                style={{
                  position: "absolute",
                  inset: 0,
                  pointerEvents: "none",
                  background: hotspotBg,
                  mixBlendMode: "soft-light",
                }}
              />
              <motion.div
                key="sheen"
                initial={{ x: "-130%", opacity: 0 }}
                whileHover={{
                  x: "160%",
                  opacity: 1,
                  transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
                }}
                style={{
                  position: "absolute",
                  top: "-25%",
                  left: sheenX.get(),
                  width: "32%",
                  height: "150%",
                  transform: "skewX(-12deg)",
                  background:
                    "linear-gradient(75deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0) 100%)",
                  filter: "blur(2px)",
                  pointerEvents: "none",
                  mixBlendMode: "screen",
                }}
              />
            </Box>

            {/* RIGHT REVEAL PANEL (only for image-led) */}
            {image && (
              <motion.div
                initial={{
                  opacity: 0,
                  clipPath: "polygon(100% 0,100% 0,100% 100%,100% 100%)",
                }}
                whileHover={{
                  opacity: 1,
                  clipPath: "polygon(40% 0,100% 0,100% 100%,40% 100%)",
                  transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] },
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
                    width: "60%",
                    height: "100%",
                    background: "rgba(13, 17, 27, 0.96)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    boxShadow: "-20px 0 60px rgba(0,0,0,0.4)",
                    display: "flex",
                    alignItems: "flex-end",
                    pointerEvents: "auto",
                    borderLeft: "1px solid var(--border-muted)"
                  }}
                >
                  <CardContent sx={{ p: 4, width: "100%" }}>
                    {badge && (
                      <Chip
                        size="small"
                        label={badge}
                        sx={{
                          mb: 2,
                          bgcolor: "rgba(13, 127, 242, 0.15)",
                          color: "#0d7ff2",
                          fontWeight: 700,
                          fontSize: "0.7rem",
                          letterSpacing: 1,
                          textTransform: "uppercase",
                          border: "1px solid rgba(13, 127, 242, 0.3)",
                        }}
                      />
                    )}
                    <Typography variant="h6" sx={{ fontWeight: 950, mb: 1, color: "white", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
                      {title}
                    </Typography>
                    {description && (
                      <Typography variant="body2" sx={{ color: "var(--text-muted)", lineHeight: 1.6 }}>
                        {description}
                      </Typography>
                    )}
                    <Box
                      sx={{
                        mt: 2.5,
                        height: 3,
                        width: "40px",
                        borderRadius: 2,
                        background: "linear-gradient(90deg, #0d7ff2, #2563eb)",
                      }}
                    />
                  </CardContent>
                </Box>
              </motion.div>
            )}

            {/* BODY (for icon-led cards or when image panel not open) */}
            {!image && (
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 900, mb: 0.5 }}>
                  {title}
                </Typography>
                {description && (
                  <Typography variant="body2" color="text.secondary">
                    {description}
                  </Typography>
                )}
              </CardContent>
            )}
          </Card>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default FeatureTiltCard;
