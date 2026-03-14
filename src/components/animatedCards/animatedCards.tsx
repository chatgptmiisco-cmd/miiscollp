"use client";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { motion, useMotionValue, useTransform, Variants } from "framer-motion";
import * as React from "react";

interface AnimatedCardProps {
  title: string;
  description: string;
  image: string;
  priority?: boolean;
}

export default function AnimatedCard({
  title,
  description,
  image,
  priority,
}: AnimatedCardProps) {
  const ref = React.useRef<HTMLDivElement | null>(null);

  // Cursor-relative motion values (-0.5..0.5)
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  // Tilt derived from cursor
  const rotateX = useTransform(my, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(mx, [-0.5, 0.5], [-10, 10]);

  // Shadow depth + offset reacts to cursor
  const shadowY = useTransform(my, [-0.5, 0.5], [18, -2]);
  const shadowX = useTransform(mx, [-0.5, 0.5], [-12, 12]);
  const shadowBlur = useTransform(mx, (x) => 32 + Math.abs(x) * 24);
  const shadow = useTransform(
    shadowX,
    (x) =>
      `0 ${shadowY.get()}px ${shadowBlur.get()}px rgba(0,0,0,0.22), ${x}px ${shadowY.get()}px ${
        shadowBlur.get() * 0.6
      }px var(--border-strong)`
  );

  // Hotspot gradient center
  const hotspotX = useTransform(mx, [-0.5, 0.5], ["0%", "100%"]);
  const hotspotY = useTransform(my, [-0.5, 0.5], ["0%", "100%"]);

  // Image bias to bottom-right on hover
  const imageVariants: Variants = {
    rest: { scale: 1, x: 0, y: 0, rotate: 0 },
    hover: {
      scale: 1.12,
      x: 24,
      y: 22,
      rotate: 0.4,
      transition: {
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  // Right slide-in panel
  const panelVariants: Variants = {
    rest: { x: "102%", opacity: 0 },
    hover: {
      x: "0%",
      opacity: 1,
      transition: {
        type: "spring", // must be a literal "spring", not string
        stiffness: 360,
        damping: 30,
        mass: 0.7,
      },
    },
  };

  // Staggered text in panel
  const group = {
    rest: { transition: { staggerChildren: 0 } },
    hover: { transition: { staggerChildren: 0.06, delayChildren: 0.06 } },
  };
  const item = {
    rest: { y: 10, opacity: 0 },
    hover: { y: 0, opacity: 1, transition: { duration: 0.25 } },
  };

  // Sheen sweep (leans with cursor X a bit)
  const sheenX = useTransform(mx, [-0.5, 0.5], ["-10%", "20%"]);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width; // 0..1
    const y = (e.clientY - r.top) / r.height; // 0..1
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
      style={{ perspective: 1200, borderRadius: 16 }}
    >
      <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}>
        <Card
          component={motion.div}
          style={{ boxShadow: shadow.get() }}
          animate={{ boxShadow: shadow as unknown as string }}
          transition={{ boxShadow: { type: "tween", duration: 0.12 } }}
          sx={{
            cursor: "pointer",
            borderRadius: 3,
            overflow: "hidden",
            position: "relative",
            backgroundcolor: "var(--text-main)",
            border: "1px solid var(--border-muted)",
          }}
        >
          {/* Media area */}
          <Box sx={{ height: 260, position: "relative", overflow: "hidden" }}>
            {/* Image that goes to bottom-right on hover */}
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
              variants={imageVariants}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transformOrigin: "bottom right",
                display: "block",
                translateZ: 18 as unknown as string, // hint 3D
              }}
            />

            {/* Darken overlay on hover for contrast */}
            <motion.div
              variants={{ rest: { opacity: 0.1 }, hover: { opacity: 0.3 } }}
              transition={{ duration: 0.25 }}
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, rgba(10,15,28,0.0) 10%, rgba(0,0,0,0.35) 100%)",
                pointerEvents: "none",
              }}
            />

            {/* Cursor-follow hotspot (brand tint) */}
            <motion.div
              style={{
                position: "absolute",
                inset: 0,
                pointerEvents: "none",
                mixBlendMode: "soft-light",
                background: hotspotX && hotspotY ? undefined : "none",
              }}
            >
              <motion.div
                style={{
                  position: "absolute",
                  width: 0,
                  height: 0,
                }}
              />
            </motion.div>
            <motion.div
              style={{
                position: "absolute",
                inset: 0,
                pointerEvents: "none",
                background: `radial-gradient(280px 280px at ${hotspotX.get()} ${hotspotY.get()}, rgba(13,127,242,0.25), transparent 60%)`,
              }}
            />

            {/* Sheen sweep that leans with cursor X */}
            <motion.div
              style={{
                position: "absolute",
                top: "-25%",
                width: "30%",
                height: "150%",
                transform: "skewX(-12deg)",
                background:
                  "linear-gradient(75deg, rgba(255,255,255,0.0) 0%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.0) 100%)",
                filter: "blur(2px)",
                pointerEvents: "none",
                mixBlendMode: "screen",
              }}
              initial={{ left: "-40%" }}
              animate={{ left: sheenX.get() }} // get plain string value
              transition={{ type: "tween", duration: 0.25 }}
            />

            {/* Right slide-in description panel (glass) */}
            <motion.div
              variants={panelVariants}
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                height: "100%",
                width: "68%",
                background: "rgba(255, 255, 255, 0.96)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                boxShadow: "-10px 0 30px var(--border-muted)",
                display: "flex",
                alignItems: "flex-end",
                translateZ: 24 as unknown as string,
                borderLeft: "1px solid var(--border-muted)"
              }}
            >
              <motion.div variants={group} style={{ width: "100%" }}>
                <CardContent sx={{ p: 4 }}>
                  <motion.div variants={item}>
                    <Typography variant="h6" sx={{ fontWeight: 900, mb: 1, color: "var(--text-main)", lineHeight: 1.2 }}>
                      {title}
                    </Typography>
                  </motion.div>
                  <motion.div variants={item}>
                    <Typography
                      variant="body2"
                      sx={{ color: "var(--text-secondary)", lineHeight: 1.6 }}
                    >
                      {description}
                    </Typography>
                  </motion.div>
                  <motion.div variants={item}>
                    <Box
                      sx={{
                        mt: 2.5,
                        height: 3,
                        width: "40px",
                        borderRadius: 2,
                        background:
                          "linear-gradient(90deg, #0d7ff2, rgba(13,127,242,0.4))",
                      }}
                    />
                  </motion.div>
                </CardContent>
              </motion.div>
            </motion.div>
          </Box>
        </Card>
      </motion.div>
    </motion.div>
  );
}
