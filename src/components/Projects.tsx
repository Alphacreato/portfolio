import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const APP_PROJECT = {
  title: "Ounje Market",
  subtitle: "Rider App",
  icon: "🛵",
  accent: "#22c55e",
  desc: "Delivery management mobile app for riders. Accept or decline orders, view real-time pickup and drop-off locations, track delivery progress step-by-step, complete deliveries with OTP verification, monitor earnings, wallet balance, and leaderboard ranking — all with live push notifications.",
  tags: ["React Native", "Expo", "TypeScript", "REST APIs", "Push Notifications"],
  video: "/videos/app-demo.mp4",
  screenshots: [
    "/images/app-screenshot-1.png",
    "/images/app-screenshot-2.png",
    "/images/app-screenshot-3.png",
    "/images/app-screenshot-4.png",
  ],
};

const PROJECTS = [
  {
    title: "Food Delivery",
    icon: "🍱",
    accent: "#ef4444",
    desc: "Full-stack food delivery platform with menu browsing, order flow, backend API integration, and email notifications.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
    link: "https://food-delivery-website-black-pi.vercel.app/",
  },
  {
    title: "Flash Sales",
    icon: "👟",
    accent: "#3b82f6",
    desc: "Sneaker e-commerce landing page with product catalog, size selection, checkout form, and Nike lifestyle sections.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive"],
    link: "https://flashsales.vercel.app/",
  },
  {
    title: "Tasty Bites",
    icon: "🍽️",
    accent: "#f97316",
    desc: "Modern restaurant landing page with menu showcase, food photography layout, and online ordering call-to-action.",
    tags: ["React", "Tailwind CSS", "Responsive Design"],
    link: "https://tasty-bites-pi.vercel.app/",
  },
  {
    title: "AlphaAI",
    icon: "🤖",
    accent: "#8b5cf6",
    desc: "AI-powered web application built with React, featuring a clean modern interface and intelligent user interactions.",
    tags: ["React", "TypeScript", "AI Integration"],
    link: "https://alphai-dandys-projects-8c812098.vercel.app/",
  },
  {
    title: "Brookdale University",
    icon: "🎓",
    accent: "#10b981",
    desc: "Full university website with course listings, scholarship info, instructor profiles, and newsletter registration.",
    tags: ["HTML", "CSS", "JavaScript", "Multi-page"],
    link: "https://university-rosy.vercel.app/",
  },
];

function PhoneMockup({ video }: { video: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.play().catch(() => {}); },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div style={{
      width: 170,
      flexShrink: 0,
      background: "#0f0f0f",
      borderRadius: 32,
      border: "6px solid #1f1f1f",
      boxShadow: "0 24px 60px rgba(0,0,0,0.55), inset 0 0 0 1px rgba(255,255,255,0.07)",
      overflow: "hidden",
      position: "relative",
      aspectRatio: "9/19",
    }}>
      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 52, height: 18, background: "#0f0f0f", borderRadius: "0 0 12px 12px", zIndex: 3 }} />
      <video
        ref={videoRef}
        src={video}
        muted
        loop
        playsInline
        preload="auto"
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      />
    </div>
  );
}

function ScreenshotThumb({ src }: { src: string }) {
  return (
    <div style={{
      borderRadius: 10,
      overflow: "hidden",
      aspectRatio: "9/19",
      background: "#111",
      border: "1px solid var(--color-border)",
    }}>
      <img src={src} alt="App screenshot" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
    </div>
  );
}

export default function Projects() {
  const { accent } = APP_PROJECT;

  return (
    <section id="projects" style={{ padding: "clamp(56px,9vw,100px) 0", background: "var(--color-bg)", transition: "background 0.3s" }}>
      <div style={{ height: 1, background: "linear-gradient(90deg,transparent,var(--color-divider),transparent)" }} />
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "clamp(28px,7vw,80px) clamp(16px,3vw,24px) 0" }}>

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ marginBottom: 56 }}>
          <span className="tag-badge" style={{ marginBottom: 16, display: "inline-flex" }}>Portfolio</span>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: 16 }}>
            <h2 style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 900, letterSpacing: "-0.02em", fontFamily: "Inter,sans-serif", color: "var(--color-text-primary)" }}>
              Selected <span className="gradient-text">Projects</span>
            </h2>
            <p style={{ color: "var(--color-text-secondary)", fontSize: 14, maxWidth: 260 }}>Things I've built and shipped.</p>
          </div>
        </motion.div>

        {/* ── Featured App Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 44 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="project-card"
          style={{ marginBottom: 20 }}
        >
          <div style={{ height: 3, background: `linear-gradient(90deg,${accent}90,transparent)` }} />
          <div style={{ padding: "clamp(20px,3vw,32px)" }}>
            <div className="app-card-inner" style={{ display: "flex", gap: 36, alignItems: "center" }}>

              {/* Phone + video */}
              <PhoneMockup video={APP_PROJECT.video} />

              {/* Content */}
              <div style={{ flex: 1, minWidth: 0 }}>
                {/* Header */}
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16, flexWrap: "wrap" }}>
                  <div style={{ width: 48, height: 48, borderRadius: 14, background: `${accent}15`, border: `1px solid ${accent}30`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>
                    {APP_PROJECT.icon}
                  </div>
                  <div>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "2px 10px", borderRadius: 999, background: `${accent}15`, border: `1px solid ${accent}30`, color: accent, fontSize: 11, fontWeight: 600, marginBottom: 4 }}>
                      Mobile App
                    </div>
                    <div style={{ fontWeight: 700, color: "var(--color-text-primary)", fontSize: 18, fontFamily: "Inter,sans-serif", lineHeight: 1 }}>
                      {APP_PROJECT.title}
                    </div>
                  </div>
                </div>

                <div style={{ height: 1, background: "var(--color-border)", marginBottom: 16 }} />

                <p style={{ color: "var(--color-text-secondary)", fontSize: 14, lineHeight: 1.75, marginBottom: 20 }}>
                  {APP_PROJECT.desc}
                </p>

                {/* Screenshots */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8, marginBottom: 20 }} className="screenshots-grid">
                  {APP_PROJECT.screenshots.map((src, i) => (
                    <ScreenshotThumb key={i} src={src} />
                  ))}
                </div>

                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {APP_PROJECT.tags.map(tag => (
                    <span key={tag} style={{ fontSize: 11, padding: "4px 10px", borderRadius: 6, fontWeight: 600, background: `${accent}12`, color: accent, border: `1px solid ${accent}25` }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Regular Project Grid ── */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }} className="projects-grid">
          {PROJECTS.map((p, i) => (
            <motion.div key={p.title}
              initial={{ opacity: 0, y: 44 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.65, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="project-card"
            >
              <div style={{ height: 3, background: `linear-gradient(90deg,${p.accent}90,transparent)` }} />
              <div style={{ padding: 28 }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 20 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <div style={{ width: 48, height: 48, borderRadius: 14, background: `${p.accent}15`, border: `1px solid ${p.accent}25`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>
                      {p.icon}
                    </div>
                    <div style={{ fontWeight: 700, color: "var(--color-text-primary)", fontSize: 17, fontFamily: "Inter,sans-serif" }}>{p.title}</div>
                  </div>
                  <a href={p.link} target="_blank" rel="noopener noreferrer"
                    style={{ width: 34, height: 34, borderRadius: 9, background: "var(--color-card)", border: "1px solid var(--color-border)", color: "var(--color-text-secondary)", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", flexShrink: 0, transition: "all 0.2s" }}
                    title="View Live">
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
                <div style={{ height: 1, background: "var(--color-border)", marginBottom: 18 }} />
                <p style={{ color: "var(--color-text-secondary)", fontSize: 14, lineHeight: 1.7, marginBottom: 18 }}>{p.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {p.tags.map(tag => (
                    <span key={tag} style={{ fontSize: 11, padding: "4px 10px", borderRadius: 6, fontWeight: 600, background: `${p.accent}12`, color: p.accent, border: `1px solid ${p.accent}22` }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
