import { motion } from "framer-motion";
import profileImg from "../assets/profile.png";

export default function Hero() {
  return (
    <section style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      paddingTop: 68, position: "relative", overflow: "hidden",
      background: "radial-gradient(ellipse 80% 50% at 50% -5%, rgba(59,130,246,0.14) 0%, transparent 65%), var(--color-bg)",
      transition: "background 0.3s",
    }}>
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", backgroundImage: "radial-gradient(var(--color-dot) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "clamp(28px,7vw,80px) clamp(16px,3vw,24px)", width: "100%", position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 60, alignItems: "center" }} className="hero-grid">

          {/* Text */}
          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "5px 14px", borderRadius: 999, background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.25)", color: "#93c5fd", fontSize: 13, fontWeight: 500, marginBottom: 28 }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#4ade80" }} className="pulse" />
              Available for new projects &amp; systems roles
            </div>

            <h1 style={{ fontSize: "clamp(2.5rem,5.5vw,4.8rem)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 20, fontFamily: "Inter,sans-serif", color: "var(--color-text-primary)" }}>
              I build <span className="gradient-text">mobile apps</span>, websites, &amp; backend servers.
            </h1>

            <p style={{ color: "var(--color-text-secondary)", fontSize: 16.5, lineHeight: 1.75, maxWidth: 580, marginBottom: 36 }}>
              Hi, I'm Dandy Ogbonna. I am a software engineer, co-founder of OunjeFood, and network systems operator. 
              I build mobile apps, write backend code, set up Linux VPS servers, and configure Huawei OLT systems to keep internet and apps running.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginBottom: 56 }}>
              <button className="btn-primary" style={{ fontSize: 15, padding: "13px 30px" }}
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
                Explore My Systems
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button className="btn-outline" style={{ fontSize: 15, padding: "13px 30px" }}
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
                Get In Touch
              </button>
            </div>

            <div className="hero-stats" style={{ display: "flex", gap: 48, paddingTop: 32, borderTop: "1px solid var(--color-border)" }}>
              {[["100+", "Active Users App Store"], ["20+", "Connected Network Nodes"], ["6+", "Partner Merchants"]].map(([n, l]) => (
                <div key={l}>
                  <div style={{ fontSize: 28, fontWeight: 900, color: "var(--color-text-primary)", fontFamily: "Inter,sans-serif" }}>{n}</div>
                  <div style={{ fontSize: 11, color: "var(--color-text-muted)", marginTop: 2, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>{l}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Profile Photo Wrap */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: "flex", justifyContent: "center", position: "relative" }}
          >
            <div style={{
              position: "relative",
              width: "clamp(240px, 28vw, 360px)",
              aspectRatio: "1/1",
              borderRadius: "24px",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 32px 80px rgba(0,0,0,0.65), 0 0 40px rgba(59,130,246,0.08)",
            }}>
              <div style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to bottom, transparent 60%, rgba(10,10,10,0.9))",
                zIndex: 2,
              }} />
              <img
                src={profileImg}
                alt="Dandy Ogbonna"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
              <div style={{
                position: "absolute",
                bottom: 16,
                left: 16,
                right: 16,
                zIndex: 3,
                background: "rgba(255,255,255,0.03)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "12px",
                padding: "10px 14px",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#4ade80" }} className="pulse" />
                <span style={{ fontSize: 11, fontWeight: 600, color: "#fff", letterSpacing: "0.02em" }}>
                  Operating in Lagos, NG
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
          style={{ position: "absolute", bottom: 20, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}
          className="hidden-mobile">
          <span style={{ fontSize: 9, color: "var(--color-text-muted)", letterSpacing: "0.25em", textTransform: "uppercase", fontWeight: 600 }}>Scroll</span>
          <motion.div animate={{ y: [0, 7, 0] }} transition={{ repeat: Infinity, duration: 1.7, ease: "easeInOut" }}
            style={{ width: 1, height: 28, background: "linear-gradient(to bottom, var(--color-text-muted), transparent)" }} />
        </motion.div>
      </div>
    </section>
  );
}
