import { motion } from "framer-motion";

const TIMELINE = [
  {
    period: "2023 - Present",
    role: "Co-founder & Full-Stack Engineer",
    company: "Ounje Food Delivery Platform",
    desc: "Designed the app UI and built the Node.js backend. Shipped the iOS customer app to the App Store. Created user digital wallets, live GPS rider tracking, and restaurant order alerts.",
  },
  {
    period: "Jan 2025 – Nov 2025",
    role: "NOC FTTH Backend Engineer",
    company: "Timeless Telecoms",
    desc: "Managed FTTH network setups using Huawei OLT systems. Provisioned customer ONUs, activated services, and resolved network issues like slow speeds, signal drops, and line faults.",
  },
  {
    period: "2021 – 2024",
    role: "Independent Full-Stack Developer",
    company: "Freelance & Consulting",
    desc: "Set up Linux VPS servers, configured databases (MongoDB), and deployed web dashboards and APIs to automate tasks for local businesses.",
  },
];

const SKILLS = [
  { name: "React Native & Expo", cat: "Mobile" },
  { name: "Node.js & Express", cat: "Backend" },
  { name: "MongoDB Database", cat: "Backend" },
  { name: "Huawei OLT Configs", cat: "Infrastructure" },
  { name: "Ubuntu VPS & SSH", cat: "Infrastructure" },
  { name: "TypeScript & JS", cat: "Languages" },
  { name: "WebSockets & APIs", cat: "Systems" },
  { name: "Network Monitoring", cat: "Systems" },
];

export default function About() {
  const fade = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  });

  return (
    <section id="about" style={{ padding: "clamp(56px,9vw,100px) 0", overflow: "hidden", background: "radial-gradient(ellipse 60% 60% at 90% 50%, rgba(59,130,246,0.05) 0%, transparent 70%), var(--color-bg)", transition: "background 0.3s" }}>
      <div style={{ height: 1, background: "linear-gradient(90deg,transparent,var(--color-divider),transparent)" }} />
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "clamp(28px,7vw,80px) clamp(16px,3vw,24px) 0" }}>

        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 70, alignItems: "start" }} className="about-grid">

          {/* Left Side: About Intro & Skills */}
          <div style={{ minWidth: 0 }}>
            <motion.div {...fade(0)}>
              <span className="tag-badge" style={{ marginBottom: 20, display: "inline-flex" }}>About Me</span>
            </motion.div>
            
            <motion.h2 {...fade(0.05)} style={{ fontSize: "clamp(1.4rem,3.5vw,2.5rem)", fontWeight: 900, lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: 24, fontFamily: "Inter,sans-serif", color: "var(--color-text-primary)" }}>
              Building apps &amp; websites <span className="gradient-text">that solve daily problems</span>
            </motion.h2>

            <motion.p {...fade(0.1)} style={{ color: "var(--color-text-secondary)", lineHeight: 1.75, marginBottom: 18, fontSize: 14.5 }}>
              I build mobile apps, responsive websites, and hook them up to backend servers. As the co-founder of OunjeFood, I built our delivery apps and Node.js backend. I also have experience working in network operations (NOC), setting up Huawei OLT systems, and helping field techs resolve fiber internet faults.
            </motion.p>

            <motion.p {...fade(0.15)} style={{ color: "var(--color-text-secondary)", lineHeight: 1.75, marginBottom: 32, fontSize: 14.5 }}>
              I focus on writing code that works even when network connections are unstable—like managing live GPS tracking for riders on the road, setting up wallet deposit numbers, or configuring server networks to stay online.
            </motion.p>

            <motion.div {...fade(0.2)}>
              <div style={{ fontSize: 11, color: "var(--color-text-muted)", textTransform: "uppercase", letterSpacing: "0.14em", fontWeight: 600, marginBottom: 16 }}>
                Technical Tooling &amp; Infrastructure
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {SKILLS.map((s) => (
                  <div key={s.name} className="skill-chip" style={{ display: "flex", alignItems: "center", gap: 6, padding: "6px 12px", borderRadius: 8, fontSize: 12.5, fontWeight: 500 }}>
                    <span style={{ fontSize: 9, color: "var(--color-text-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.cat}:</span>
                    <span style={{ color: "var(--color-text-primary)" }}>{s.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Side: Professional Timeline */}
          <div style={{ minWidth: 0 }}>
            <motion.div {...fade(0.1)}>
              <div style={{ fontSize: 11, color: "var(--color-text-muted)", textTransform: "uppercase", letterSpacing: "0.14em", fontWeight: 600, marginBottom: 20 }}>
                Professional Operations History
              </div>
            </motion.div>

            <div style={{ display: "flex", flexDirection: "column", gap: 24, borderLeft: "2px solid var(--color-border)", paddingLeft: 20, position: "relative" }}>
              {TIMELINE.map((item, idx) => (
                <motion.div
                  key={idx}
                  {...fade(0.15 + idx * 0.08)}
                  style={{ position: "relative" }}
                >
                  {/* Timeline dot */}
                  <div style={{
                    position: "absolute",
                    left: -27,
                    top: 5,
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background: "var(--color-bg)",
                    border: "2px solid #3b82f6",
                  }} />

                  <div style={{ fontSize: 11.5, color: "#3b82f6", fontWeight: 700, fontFamily: "monospace", marginBottom: 4 }}>
                    {item.period}
                  </div>
                  
                  <div style={{ fontWeight: 700, fontSize: 15.5, color: "var(--color-text-primary)", fontFamily: "Inter,sans-serif" }}>
                    {item.role}
                  </div>
                  
                  <div style={{ fontSize: 12.5, color: "var(--color-text-muted)", fontWeight: 500, marginBottom: 8 }}>
                    {item.company}
                  </div>

                  <p style={{ color: "var(--color-text-secondary)", fontSize: 13, lineHeight: 1.6 }}>
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
