import { motion } from "framer-motion";

const STACK = [
  { name: "React", icon: "⚛️" },
  { name: "TypeScript", icon: "📘" },
  { name: "React Native", icon: "📱" },
  { name: "Tailwind CSS", icon: "🎨" },
  { name: "JavaScript", icon: "💛" },
  { name: "Framer Motion", icon: "✨" },
  { name: "REST APIs", icon: "🔗" },
  { name: "Git & GitHub", icon: "🐙" },
  { name: "Figma", icon: "🖌️" },
];

const FACTS = [
  { icon: "📍", title: "Location",   val: "Lagos, Nigeria",          note: "Open to remote worldwide" },
  { icon: "✉️", title: "Email",      val: "Ogbonnadandy5@gmail.com", note: "Reply within 24h" },
  { icon: "💼", title: "Freelance",  val: "Available now",           note: "Accepting new projects" },
  { icon: "⏳", title: "Experience", val: "4+ years",                note: "Frontend & Mobile" },
];

export default function About() {
  const fade = (delay = 0) => ({
    initial: { opacity: 0, y: 32 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] },
  });

  return (
    <section id="about" style={{ padding: "clamp(56px,9vw,100px) 0", overflow: "hidden", background: "radial-gradient(ellipse 60% 60% at 90% 50%, rgba(59,130,246,0.05) 0%, transparent 70%), var(--color-bg)", transition: "background 0.3s" }}>
      <div style={{ height: 1, background: "linear-gradient(90deg,transparent,var(--color-divider),transparent)" }} />
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "clamp(28px,7vw,80px) clamp(16px,3vw,24px) 0" }}>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="about-grid">

          {/* Visual */}
          <motion.div {...fade(0)} style={{ minWidth: 0 }}>
            <div style={{ position: "relative", maxWidth: 400, width: "100%", margin: "0 auto" }}>
              <div style={{
                aspectRatio: "1", borderRadius: 20,
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                backgroundImage: "radial-gradient(var(--color-dot) 1px, transparent 1px)",
                backgroundSize: "28px 28px",
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center", gap: 16,
                position: "relative", overflow: "hidden",
                transition: "background 0.3s, border-color 0.3s",
              }}>
                <div style={{ position: "absolute", width: 180, height: 180, borderRadius: "50%", background: "rgba(59,130,246,0.1)", filter: "blur(50px)" }} />
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg,transparent,rgba(59,130,246,0.5),transparent)" }} />

                <div style={{ position: "relative", width: 100, height: 100, borderRadius: "50%", background: "rgba(59,130,246,0.1)", border: "2px solid rgba(59,130,246,0.3)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 40px rgba(59,130,246,0.2)", flexShrink: 0 }}>
                  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 50, height: 50, color: "rgba(59,130,246,0.45)" }}>
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>

                <div style={{ textAlign: "center", position: "relative" }}>
                  <div style={{ fontWeight: 800, fontSize: 22, color: "var(--color-text-primary)", fontFamily: "Inter,sans-serif" }}>Dandy Ogbonna</div>
                  <div style={{ color: "var(--color-text-secondary)", fontSize: 13, marginTop: 4 }}>Frontend & Mobile Developer</div>
                  <div style={{ color: "var(--color-text-muted)", fontSize: 11, marginTop: 3 }}>Lagos, Nigeria 🇳🇬</div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: 8, background: "rgba(74,222,128,0.08)", border: "1px solid rgba(74,222,128,0.2)", borderRadius: 8, padding: "8px 16px", position: "relative" }}>
                  <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#4ade80" }} />
                  <span style={{ color: "#86efac", fontSize: 12, fontWeight: 600 }}>Open to work</span>
                </div>
              </div>

              <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="float-badge"
                style={{ position: "absolute", bottom: -20, right: -16, background: "var(--color-surface)", backdropFilter: "blur(12px)", border: "1px solid var(--color-border)", borderRadius: 14, padding: "14px 20px", boxShadow: "var(--shadow-card)" }}>
                <div style={{ fontSize: 10, color: "var(--color-text-muted)", textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: 600 }}>Experience</div>
                <div style={{ fontSize: 26, fontWeight: 900, color: "#3b82f6", marginTop: 2, fontFamily: "Inter,sans-serif" }}>4+ years</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Text */}
          <div style={{ minWidth: 0 }}>
            <motion.div {...fade(0.1)}>
              <span className="tag-badge" style={{ marginBottom: 20, display: "inline-flex" }}>About Me</span>
            </motion.div>
            <motion.h2 {...fade(0.15)} style={{ fontSize: "clamp(1.4rem,3.5vw,2.8rem)", fontWeight: 900, lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: 24, fontFamily: "Inter,sans-serif", overflowWrap: "break-word", color: "var(--color-text-primary)" }}>
              Crafting digital experiences <span className="gradient-text">that make an impact</span>
            </motion.h2>
            <motion.p {...fade(0.2)} style={{ color: "var(--color-text-secondary)", lineHeight: 1.75, marginBottom: 16 }}>
              I'm a frontend & mobile app developer from Lagos, Nigeria, focused on building responsive,
              user-friendly products with modern technology. I care about clean architecture,
              thoughtful UI, and code that actually scales.
            </motion.p>
            <motion.p {...fade(0.25)} style={{ color: "var(--color-text-secondary)", lineHeight: 1.75, marginBottom: 32 }}>
              When I'm not shipping features, I explore motion design, study system patterns,
              and keep up with the React & React Native ecosystem.
            </motion.p>

            <motion.div {...fade(0.3)}>
              <div style={{ fontSize: 11, color: "var(--color-text-muted)", textTransform: "uppercase", letterSpacing: "0.14em", fontWeight: 600, marginBottom: 16 }}>
                Technologies I work with
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {STACK.map((s, i) => (
                  <motion.div key={s.name}
                    initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: 0.3 + i * 0.05 }}
                    className="skill-chip"
                    style={{ display: "flex", alignItems: "center", gap: 7, padding: "8px 14px", borderRadius: 10, fontSize: 13, fontWeight: 500, cursor: "default" }}
                  >
                    <span style={{ fontSize: 14 }}>{s.icon}</span>
                    {s.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fade(0.4)} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 28 }}>
              {FACTS.map(({ icon, title, val, note }) => (
                <div key={title} className="info-card">
                  <span style={{ fontSize: 20, flexShrink: 0 }}>{icon}</span>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontSize: 10, color: "var(--color-text-muted)", textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 600 }}>{title}</div>
                    <div style={{ fontSize: 13, color: "var(--color-text-primary)", fontWeight: 600, marginTop: 2, overflowWrap: "break-word", wordBreak: "break-all" }}>{val}</div>
                    <div style={{ fontSize: 11, color: "var(--color-text-secondary)", marginTop: 1 }}>{note}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
