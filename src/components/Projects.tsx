import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const APP_PROJECT = {
  title: "Ounje Market",
  subtitle: "Rider App",
  icon: "🛵",
  accent: "#22c55e",
  desc: "Built with React Native (Expo) + TypeScript, featuring real-time order tracking, OTP-verified delivery flow, push notification handling, and live earnings sync via RESTful API integration.",
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
    desc: "Built with React + Next.js and TypeScript, featuring server-rendered pages, API-driven cart state management, dynamic menu rendering, and backend-integrated email notification flow.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
    link: "https://ounjefood.com",
    github: "https://github.com/Alphacreato/food-delivery-website",
  },
  {
    title: "Flash Sales",
    icon: "👟",
    accent: "#3b82f6",
    desc: "Vanilla HTML/CSS/JS landing with responsive grid layout, interactive size selector, and structured checkout UI — zero frameworks, full control.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive"],
    link: "https://flashsales.vercel.app/",
    github: "https://github.com/Alphacreato/flash-sales-landing-page",
  },
  {
    title: "Tasty Bites",
    icon: "🍽️",
    accent: "#f97316",
    desc: "React SPA styled with Tailwind CSS, featuring component-driven menu grid, responsive food photography layout, and modular UI architecture for dynamic ordering flow.",
    tags: ["React", "Tailwind CSS", "Responsive Design"],
    link: "https://tasty-bites-pi.vercel.app/",
    github: "https://github.com/Alphacreato/tasty-bites-web-app",
  },
  {
    title: "AlphaAI",
    icon: "🤖",
    accent: "#8b5cf6",
    desc: "React + TypeScript interface integrated with an AI backend, built on reusable component architecture with clean state management and dynamic API-driven UI rendering.",
    tags: ["React", "TypeScript", "AI Integration"],
    link: "https://alphai-dandys-projects-8c812098.vercel.app/",
    github: "https://github.com/Alphacreato/css-ui-experiments",
  },
  {
    title: "Brookdale University",
    icon: "🎓",
    accent: "#10b981",
    desc: "Multi-page HTML/CSS/JS site with structured information hierarchy, dynamic course listings, scholarship detail pages, and newsletter registration with form validation.",
    tags: ["HTML", "CSS", "JavaScript", "Multi-page"],
    link: "https://university-rosy.vercel.app/",
    github: "https://github.com/Alphacreato/university-website-ui",
  },
];

const GitHubIcon = () => (
  <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

const ExternalIcon = () => (
  <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
  </svg>
);

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
      width: 170, flexShrink: 0, background: "#0f0f0f", borderRadius: 32,
      border: "6px solid #1f1f1f", overflow: "hidden", position: "relative", aspectRatio: "9/19",
      boxShadow: "0 24px 60px rgba(0,0,0,0.55), inset 0 0 0 1px rgba(255,255,255,0.07)",
    }}>
      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 52, height: 18, background: "#0f0f0f", borderRadius: "0 0 12px 12px", zIndex: 3 }} />
      <video ref={videoRef} src={video} muted loop playsInline preload="auto"
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
    </div>
  );
}

function ScreenshotThumb({ src }: { src: string }) {
  return (
    <div style={{ borderRadius: 10, overflow: "hidden", aspectRatio: "9/19", background: "#111", border: "1px solid var(--color-border)" }}>
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
          className="project-card" style={{ marginBottom: 20 }}
        >
          <div style={{ height: 3, background: `linear-gradient(90deg,${accent}90,transparent)` }} />
          <div style={{ padding: "clamp(20px,3vw,32px)" }}>
            <div className="app-card-inner" style={{ display: "flex", gap: 36, alignItems: "center" }}>
              <PhoneMockup video={APP_PROJECT.video} />

              <div style={{ flex: 1, minWidth: 0 }}>
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

                <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8, marginBottom: 20 }} className="screenshots-grid">
                  {APP_PROJECT.screenshots.map((src, i) => (
                    <ScreenshotThumb key={i} src={src} />
                  ))}
                </div>

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
              <div style={{ padding: 28, display: "flex", flexDirection: "column", height: "calc(100% - 3px)" }}>
                {/* Header */}
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 14, background: `${p.accent}15`, border: `1px solid ${p.accent}25`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>
                    {p.icon}
                  </div>
                  <div style={{ fontWeight: 700, color: "var(--color-text-primary)", fontSize: 17, fontFamily: "Inter,sans-serif" }}>{p.title}</div>
                </div>

                <div style={{ height: 1, background: "var(--color-border)", marginBottom: 14 }} />

                {/* Description */}
                <p style={{ color: "var(--color-text-secondary)", fontSize: 13.5, lineHeight: 1.7, marginBottom: 16, flex: 1 }}>{p.desc}</p>

                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 16 }}>
                  {p.tags.map(tag => (
                    <span key={tag} style={{ fontSize: 11, padding: "4px 10px", borderRadius: 6, fontWeight: 600, background: `${p.accent}12`, color: p.accent, border: `1px solid ${p.accent}22` }}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div style={{ display: "flex", alignItems: "center", gap: 6, paddingTop: 14, borderTop: "1px solid var(--color-border)" }}>
                  <a href={p.link} target="_blank" rel="noopener noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "6px 12px", borderRadius: 7, background: `${p.accent}12`, border: `1px solid ${p.accent}25`, color: p.accent, fontSize: 12, fontWeight: 600, textDecoration: "none", transition: "all 0.2s" }}>
                    <ExternalIcon /> Live Demo
                  </a>
                  <span style={{ color: "var(--color-border-light)", fontSize: 14, userSelect: "none" }}>|</span>
                  <a href={p.github} target="_blank" rel="noopener noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "6px 12px", borderRadius: 7, background: "var(--color-card)", border: "1px solid var(--color-border)", color: "var(--color-text-secondary)", fontSize: 12, fontWeight: 600, textDecoration: "none", transition: "all 0.2s" }}>
                    <GitHubIcon /> GitHub Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
