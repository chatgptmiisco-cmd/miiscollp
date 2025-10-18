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
      }px rgba(0,0,0,0.12)`
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
            backgroundColor: "#fff",
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
                      <rect width='100%' height='100%' fill='#f6f8fb'/>
                      <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle'
                        font-family='Inter, Arial' font-size='26' fill='rgba(0,0,0,.5)'>
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
              variants={{ rest: { opacity: 0.06 }, hover: { opacity: 0.22 } }}
              transition={{ duration: 0.25 }}
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0.0) 10%, rgba(0,0,0,0.45) 100%)",
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
                  // we fake a hotspot by using a radial-gradient on a pseudo layer:
                  // using CSS variables via transform values
                  // We render it by setting background on the parent:
                }}
              />
            </motion.div>
            <motion.div
              style={{
                position: "absolute",
                inset: 0,
                pointerEvents: "none",
                background: `radial-gradient(280px 280px at ${hotspotX.get()} ${hotspotY.get()}, rgba(240,7,87,0.20), transparent 60%)`,
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
                  "linear-gradient(75deg, rgba(255,255,255,0.0) 0%, rgba(255,255,255,0.28) 50%, rgba(255,255,255,0.0) 100%)",
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
                width: "64%",
                background: "rgba(255,255,255,0.92)",
                backdropFilter: "blur(6px)",
                WebkitBackdropFilter: "blur(6px)",
                boxShadow: "-20px 0 40px rgba(0,0,0,0.18)",
                display: "flex",
                alignItems: "flex-end",
                translateZ: 24 as unknown as string,
              }}
            >
              <motion.div variants={group} style={{ width: "100%" }}>
                <CardContent sx={{ p: 3 }}>
                  <motion.div variants={item}>
                    <Typography variant="h6" sx={{ fontWeight: 800, mb: 0.5 }}>
                      {title}
                    </Typography>
                  </motion.div>
                  <motion.div variants={item}>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      {description}
                    </Typography>
                  </motion.div>
                  <motion.div variants={item}>
                    <Box
                      sx={{
                        mt: 1.5,
                        height: 2,
                        width: "34%",
                        borderRadius: 2,
                        background:
                          "linear-gradient(90deg, #f00757, rgba(240,7,87,0.35))",
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
