import { motion } from "framer-motion";

const CAPABILITIES = [
  {
    icon: "🧩",
    title: "Backend & APIs",
    desc: "Building backend routes, server code, and databases using Node.js and MongoDB to handle user data and payments safely.",
    stack: ["Node.js", "Express", "MongoDB", "REST APIs"],
  },
  {
    icon: "📱",
    title: "Web & Mobile Apps",
    desc: "Building responsive websites and mobile apps for iOS and Android using React, Next.js, React Native, and Expo, with clean user interfaces.",
    stack: ["React", "Next.js", "React Native", "Expo CLI", "TypeScript"],
  },
  {
    icon: "⚙️",
    title: "Server Management",
    desc: "Setting up Linux VPS servers, running backend code in production with PM2, and managing server databases via SSH.",
    stack: ["Ubuntu VPS", "PM2 Cluster", "SSH Automations", "Linux CLI"],
  },
  {
    icon: "🔌",
    title: "Network Operations",
    desc: "Configuring Huawei GPON OLT systems, monitoring network warnings, and troubleshooting fiber line issues.",
    stack: ["Huawei OLT", "NOC Monitoring", "Alarm Audits", "Fiber Provisioning"],
  },
];

export default function Skills() {
  const fade = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  });

  return (
    <section id="skills" style={{ padding: "clamp(56px,9vw,100px) 0", background: "var(--color-bg-alt)", transition: "background 0.3s" }}>
      <div style={{ height: 1, background: "linear-gradient(90deg,transparent,var(--color-divider),transparent)" }} />
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "clamp(28px,7vw,80px) clamp(16px,3vw,24px) 0" }}>

        <motion.div {...fade(0)} style={{ marginBottom: 56 }}>
          <span className="tag-badge" style={{ marginBottom: 16, display: "inline-flex" }}>Operational Competence</span>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: 16 }}>
            <h2 style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 900, letterSpacing: "-0.02em", fontFamily: "Inter,sans-serif", color: "var(--color-text-primary)" }}>
              Capabilities &amp; <span className="gradient-text">Systems Stack</span>
            </h2>
            <p style={{ color: "var(--color-text-secondary)", fontSize: 14, maxWidth: 300 }}>Practical capabilities honed through building products and managing networks.</p>
          </div>
        </motion.div>

        {/* Capabilities grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }} className="projects-grid">
          {CAPABILITIES.map((cap, i) => (
            <motion.div
              key={cap.title}
              {...fade(i * 0.08)}
              className="project-card"
              style={{ padding: 28, display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}
            >
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>
                    {cap.icon}
                  </div>
                  <div style={{ fontWeight: 700, color: "var(--color-text-primary)", fontSize: 16, fontFamily: "Inter,sans-serif" }}>
                    {cap.title}
                  </div>
                </div>

                <div style={{ height: 1, background: "var(--color-border)", marginBottom: 16 }} />

                <p style={{ color: "var(--color-text-secondary)", fontSize: 13.5, lineHeight: 1.7, marginBottom: 20 }}>
                  {cap.desc}
                </p>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {cap.stack.map((s) => (
                  <span
                    key={s}
                    style={{
                      fontSize: 11,
                      padding: "4px 10px",
                      borderRadius: 6,
                      fontWeight: 600,
                      background: "rgba(255,255,255,0.03)",
                      color: "var(--color-text-secondary)",
                      border: "1px solid var(--color-border)",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
