import { motion } from "framer-motion";

const PROJECTS = [
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

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "100px 0", background: "#0a0a0a" }}>
      <div style={{ height: 1, background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.07),transparent)" }} />
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px 0" }}>

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ marginBottom: 56 }}>
          <span className="tag-badge" style={{ marginBottom: 16, display: "inline-flex" }}>Portfolio</span>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: 16 }}>
            <h2 style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 900, letterSpacing: "-0.02em", fontFamily: "Inter,sans-serif" }}>
              Selected <span className="gradient-text">Projects</span>
            </h2>
            <p style={{ color: "#a1a1aa", fontSize: 14, maxWidth: 260 }}>Things I've built and shipped.</p>
          </div>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }} className="projects-grid">
          {PROJECTS.map((p, i) => (
            <motion.div key={p.title}
              initial={{ opacity: 0, y: 44 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="project-card"
            >
              <div style={{ height: 3, background: `linear-gradient(90deg,${p.accent}90,transparent)` }} />
              <div style={{ padding: 28 }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 20 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <div style={{ width: 48, height: 48, borderRadius: 14, background: `${p.accent}15`, border: `1px solid ${p.accent}25`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>
                      {p.icon}
                    </div>
                    <div style={{ fontWeight: 700, color: "#fff", fontSize: 17, fontFamily: "Inter,sans-serif" }}>{p.title}</div>
                  </div>
                  {/* Live link */}
                  <a href={p.link} target="_blank" rel="noopener noreferrer"
                    style={{ width: 34, height: 34, borderRadius: 9, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)", color: "#a1a1aa", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", flexShrink: 0, transition: "all 0.2s" }}
                    title="View Live">
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
                <div style={{ height: 1, background: "rgba(255,255,255,0.07)", marginBottom: 18 }} />
                <p style={{ color: "#a1a1aa", fontSize: 14, lineHeight: 1.7, marginBottom: 18 }}>{p.desc}</p>
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
