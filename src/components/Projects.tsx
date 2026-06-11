import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const OUNJE_FOOD = {
  title: "OunjeFood",
  subtitle: "Customer iOS App",
  icon: "🍕",
  accent: "#ef4444",
  tagline: "Food Delivery App",
  desc: "The customer app for our food delivery service. Features a digital wallet where customers get virtual account numbers to instantly fund their accounts. Built for fast menu loading and clean payments for over 100 active users.",
  tags: ["React Native", "Expo", "Node.js", "MongoDB", "Virtual Accounts", "REST APIs"],
  video: "/videos/customer-demo.MP4",
  link: "https://apps.apple.com/ng/app/ounjefood/id6762204959",
  screenshots: [
    "/images/customer-screenshot-1.png",
    "/images/customer-screenshot-2.png",
    "/images/customer-screenshot-3.png",
    "/images/customer-screenshot-4.png",
  ],
};

const OUNJE_MARKET = {
  title: "OunjeMarket",
  subtitle: "Vendor & Rider Portal",
  icon: "🛵",
  accent: "#22c55e",
  tagline: "Vendor & Rider Apps",
  desc: "The apps used by our delivery riders and partner restaurants. Features live GPS rider tracking, automatic reconnection when mobile networks drop, and custom sound alerts to notify vendors when new orders arrive on Android/iOS.",
  tags: ["React Native", "Expo", "WebSockets", "Node.js", "Background Tasks", "TestFlight"],
  video: "/videos/app-demo.mp4",
  link: "https://apps.apple.com/ng/app/ounjemarket/id6762347962",
  screenshots: [
    "/images/app-screenshot-1.png",
    "/images/app-screenshot-2.png",
    "/images/app-screenshot-3.png",
    "/images/app-screenshot-4.png",
  ],
};

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
    
    // Explicit initial play call fallback
    el.play().catch(() => {});

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: 0.1 } // Trigger when at least 10% of the mockup is visible
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [video]);

  return (
    <div style={{
      width: 170, flexShrink: 0, background: "#0f0f0f", borderRadius: 32,
      border: "6px solid #1f1f1f", overflow: "hidden", position: "relative", aspectRatio: "9/19",
      boxShadow: "0 24px 60px rgba(0,0,0,0.55), inset 0 0 0 1px rgba(255,255,255,0.07)",
    }}>
      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 52, height: 18, background: "#0f0f0f", borderRadius: "0 0 12px 12px", zIndex: 3 }} />
      <video
        ref={videoRef}
        src={video}
        autoPlay
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
    <div style={{ borderRadius: 10, overflow: "hidden", aspectRatio: "9/19", background: "#111", border: "1px solid var(--color-border)" }}>
      <img src={src} alt="App screenshot" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
    </div>
  );
}

function TerminalMockup() {
  const [activeTab, setActiveTab] = useState<"noc" | "vps">("noc");

  return (
    <div style={{
      background: "#0d0d0d",
      borderRadius: "16px",
      border: "1px solid rgba(255, 255, 255, 0.08)",
      overflow: "hidden",
      fontFamily: "monospace",
      color: "#f8f8f2",
      boxShadow: "0 24px 50px rgba(0,0,0,0.6)",
      width: "100%",
      minHeight: 290,
      display: "flex",
      flexDirection: "column",
    }}>
      {/* Header */}
      <div style={{
        background: "#161616",
        padding: "12px 16px",
        borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12,
        flexWrap: "wrap",
      }}>
        <div style={{ display: "flex", gap: 6, flexShrink: 0 }}>
          {["#ff5f57", "#febc2e", "#28c840"].map((c, idx) => (
            <div key={idx} style={{ width: 11, height: 11, borderRadius: "50%", background: c }} />
          ))}
        </div>
        <div style={{ display: "flex", gap: 4 }}>
          <button
            onClick={() => setActiveTab("noc")}
            style={{
              padding: "6px 12px",
              background: activeTab === "noc" ? "#0d0d0d" : "transparent",
              color: activeTab === "noc" ? "#93c5fd" : "#71717a",
              border: activeTab === "noc" ? "1px solid rgba(255,255,255,0.06)" : "none",
              borderBottom: activeTab === "noc" ? "1px solid transparent" : "none",
              borderRadius: "6px 6px 0 0",
              cursor: "pointer",
              fontSize: 11.5,
              fontWeight: 600,
              fontFamily: "monospace",
            }}
          >
            noc-monitor.sh
          </button>
          <button
            onClick={() => setActiveTab("vps")}
            style={{
              padding: "6px 12px",
              background: activeTab === "vps" ? "#0d0d0d" : "transparent",
              color: activeTab === "vps" ? "#93c5fd" : "#71717a",
              border: activeTab === "vps" ? "1px solid rgba(255,255,255,0.06)" : "none",
              borderBottom: activeTab === "vps" ? "1px solid transparent" : "none",
              borderRadius: "6px 6px 0 0",
              cursor: "pointer",
              fontSize: 11.5,
              fontWeight: 600,
              fontFamily: "monospace",
            }}
          >
            vps-ssh-terminal
          </button>
        </div>
        <span style={{ fontSize: 10, color: "#52525b" }} className="hidden-mobile">root@dandy-infrastructure</span>
      </div>

      {/* Terminal Content */}
      <div style={{ padding: 20, flex: 1, fontSize: 12.5, lineHeight: 1.6, display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
        <AnimatePresence mode="wait">
          {activeTab === "noc" ? (
            <motion.div
              key="noc"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <span style={{ color: "#a1a1aa" }}># Huawei OLT Provisioning & Alarm Diagnostics</span>
              <br />
              <span style={{ color: "#38bdf8" }}>$ NOC_ENVIRONMENT --check-nodes --detail</span>
              <br />
              <div style={{ marginLeft: 12, marginTop: 8 }}>
                <div>Node status: <span style={{ color: "#4ade80", fontWeight: 700 }}>ONLINE</span></div>
                <div>Configured Hardware: Huawei GPON OLT Core (8 Ports Active)</div>
                <div>Fiber Infrastructure subscribers: <span style={{ color: "#fcd34d" }}>1424 subscribers active</span></div>
                <div>Active Alarms: <span style={{ color: "#4ade80" }}>0 alarms (Clear)</span></div>
                <div>Link Loss Tolerance: Optimal (-18.2 dBm to -22.5 dBm range)</div>
                <div style={{ color: "#71717a", marginTop: 8 }}>Provisioning client: LGS-SUB-920... [SUCCESS]</div>
                <div style={{ color: "#71717a" }}>Optical link configuration verified... [SUCCESS]</div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="vps"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <span style={{ color: "#71717a" }}># SSH secure connection to Ubuntu VPS hosting instance</span>
              <br />
              <span style={{ color: "#38bdf8" }}>$ ssh admin@vps-node-1.ounjefood.com</span>
              <br />
              <div style={{ marginTop: 6 }}>Welcome to Ubuntu 22.04 LTS (GNU/Linux 5.15.0-x86_64)</div>
              <span style={{ color: "#38bdf8" }}>$ pm2 status</span>
              <div style={{ color: "#a1a1aa", marginTop: 4, whiteSpace: "pre-wrap", overflowX: "auto" }}>
                {`┌────┬─────────────────┬──────────┬────────┬──────────┬──────────┐
│ id │ name            │ mode     │ status │ cpu      │ memory   │
├────┼─────────────────┼──────────┼────────┼──────────┼──────────┤
│ 0  │ ounje-backend   │ cluster  │ online │ 0.2%     │ 78.4 MB  │
└────┴─────────────────┴──────────┴────────┴──────────┴──────────┘`}
              </div>
              <span style={{ color: "#38bdf8" }}>$ mongosh --eval "db.serverStatus().ok"</span>
              <br />
              <span style={{ color: "#4ade80" }}>1 (Connected and ready - MongoDB Atlas backend cluster)</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "clamp(56px,9vw,100px) 0", background: "var(--color-bg)", transition: "background 0.3s" }}>
      <div style={{ height: 1, background: "linear-gradient(90deg,transparent,var(--color-divider),transparent)" }} />
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "clamp(28px,7vw,80px) clamp(16px,3vw,24px) 0" }}>

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ marginBottom: 56 }}>
          <span className="tag-badge" style={{ marginBottom: 16, display: "inline-flex" }}>Production Systems</span>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: 16 }}>
            <h2 style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 900, letterSpacing: "-0.02em", fontFamily: "Inter,sans-serif", color: "var(--color-text-primary)" }}>
              Featured <span className="gradient-text">Systems</span>
            </h2>
            <p style={{ color: "var(--color-text-secondary)", fontSize: 14, maxWidth: 320 }}>Real-world solutions engineered to solve business problems and scale.</p>
          </div>
        </motion.div>

        {/* ── FLAGSHIP 1: OUNJEFOOD ── */}
        <motion.div
          initial={{ opacity: 0, y: 44 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="project-card" style={{ marginBottom: 44 }}
        >
          <div style={{ height: 3, background: `linear-gradient(90deg,${OUNJE_FOOD.accent}90,transparent)` }} />
          <div style={{ padding: "clamp(20px,3vw,32px)" }}>
            <div className="app-card-inner" style={{ display: "flex", gap: 36, alignItems: "center" }}>
              <PhoneMockup video={OUNJE_FOOD.video} />

              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16, flexWrap: "wrap" }}>
                  <div style={{ width: 48, height: 48, borderRadius: 14, background: `${OUNJE_FOOD.accent}15`, border: `1px solid ${OUNJE_FOOD.accent}30`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>
                    {OUNJE_FOOD.icon}
                  </div>
                  <div>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "2px 10px", borderRadius: 999, background: `${OUNJE_FOOD.accent}15`, border: `1px solid ${OUNJE_FOOD.accent}30`, color: OUNJE_FOOD.accent, fontSize: 11, fontWeight: 600, marginBottom: 4 }}>
                      Live B2C Customer Portal
                    </div>
                    <div style={{ fontWeight: 700, color: "var(--color-text-primary)", fontSize: 18, fontFamily: "Inter,sans-serif", lineHeight: 1 }}>
                      {OUNJE_FOOD.title}
                    </div>
                  </div>
                </div>

                <div style={{ height: 1, background: "var(--color-border)", marginBottom: 16 }} />

                <p style={{ color: "var(--color-text-secondary)", fontSize: 14.5, lineHeight: 1.75, marginBottom: 20 }}>
                  {OUNJE_FOOD.desc}
                </p>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8, marginBottom: 20 }} className="screenshots-grid">
                  {OUNJE_FOOD.screenshots.map((src, i) => (
                    <ScreenshotThumb key={i} src={src} />
                  ))}
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
                  {OUNJE_FOOD.tags.map(tag => (
                    <span key={tag} style={{ fontSize: 11, padding: "4px 10px", borderRadius: 6, fontWeight: 600, background: `${OUNJE_FOOD.accent}12`, color: OUNJE_FOOD.accent, border: `1px solid ${OUNJE_FOOD.accent}25` }}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: 12, borderTop: "1px solid var(--color-border)", paddingTop: 16, flexWrap: "wrap" }}>
                  <a href={OUNJE_FOOD.link} target="_blank" rel="noopener noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "8px 16px", borderRadius: 8, background: `${OUNJE_FOOD.accent}15`, border: `1px solid ${OUNJE_FOOD.accent}30`, color: OUNJE_FOOD.accent, fontSize: 12.5, fontWeight: 600, textDecoration: "none", transition: "all 0.2s" }}>
                    <ExternalIcon /> iOS App Store
                  </a>
                  <span style={{ fontSize: 12, fontWeight: 600, color: "var(--color-text-muted)" }}>
                    Android version coming soon
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── FLAGSHIP 2: OUNJEMARKET ── */}
        <motion.div
          initial={{ opacity: 0, y: 44 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="project-card" style={{ marginBottom: 44 }}
        >
          <div style={{ height: 3, background: `linear-gradient(90deg,${OUNJE_MARKET.accent}90,transparent)` }} />
          <div style={{ padding: "clamp(20px,3vw,32px)" }}>
            <div className="app-card-inner" style={{ display: "flex", gap: 36, alignItems: "center" }}>
              <PhoneMockup video={OUNJE_MARKET.video} />

              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16, flexWrap: "wrap" }}>
                  <div style={{ width: 48, height: 48, borderRadius: 14, background: `${OUNJE_MARKET.accent}15`, border: `1px solid ${OUNJE_MARKET.accent}30`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>
                    {OUNJE_MARKET.icon}
                  </div>
                  <div>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "2px 10px", borderRadius: 999, background: `${OUNJE_MARKET.accent}15`, border: `1px solid ${OUNJE_MARKET.accent}30`, color: OUNJE_MARKET.accent, fontSize: 11, fontWeight: 600, marginBottom: 4 }}>
                      Logistics &amp; Rider App
                    </div>
                    <div style={{ fontWeight: 700, color: "var(--color-text-primary)", fontSize: 18, fontFamily: "Inter,sans-serif", lineHeight: 1 }}>
                      {OUNJE_MARKET.title}
                    </div>
                  </div>
                </div>

                <div style={{ height: 1, background: "var(--color-border)", marginBottom: 16 }} />

                <p style={{ color: "var(--color-text-secondary)", fontSize: 14.5, lineHeight: 1.75, marginBottom: 20 }}>
                  {OUNJE_MARKET.desc}
                </p>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8, marginBottom: 20 }} className="screenshots-grid">
                  {OUNJE_MARKET.screenshots.map((src, i) => (
                    <ScreenshotThumb key={i} src={src} />
                  ))}
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
                  {OUNJE_MARKET.tags.map(tag => (
                    <span key={tag} style={{ fontSize: 11, padding: "4px 10px", borderRadius: 6, fontWeight: 600, background: `${OUNJE_MARKET.accent}12`, color: OUNJE_MARKET.accent, border: `1px solid ${OUNJE_MARKET.accent}25` }}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: 12, borderTop: "1px solid var(--color-border)", paddingTop: 16, flexWrap: "wrap" }}>
                  <a href={OUNJE_MARKET.link} target="_blank" rel="noopener noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "8px 16px", borderRadius: 8, background: `${OUNJE_MARKET.accent}15`, border: `1px solid ${OUNJE_MARKET.accent}30`, color: OUNJE_MARKET.accent, fontSize: 12.5, fontWeight: 600, textDecoration: "none", transition: "all 0.2s" }}>
                    <ExternalIcon /> iOS App Store
                  </a>
                  <span style={{ fontSize: 12, fontWeight: 600, color: "var(--color-text-muted)" }}>
                    Android version coming soon
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── PROJECT 3: NOC & VPS INFRASTRUCTURE ── */}
        <motion.div
          initial={{ opacity: 0, y: 44 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="project-card"
        >
          <div style={{ height: 3, background: "linear-gradient(90deg, #38bdf890, transparent)" }} />
          <div style={{ padding: "clamp(20px,3vw,32px)" }}>
            <div className="app-card-inner" style={{ display: "flex", gap: 36, alignItems: "stretch" }}>
              
              <div style={{ flex: 1.2, minWidth: 0, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16, flexWrap: "wrap" }}>
                    <div style={{ width: 48, height: 48, borderRadius: 14, background: "rgba(56,189,248,0.15)", border: "1px solid rgba(56,189,248,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>
                      🖥️
                    </div>
                    <div>
                      <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "2px 10px", borderRadius: 999, background: "rgba(56,189,248,0.15)", border: "1px solid rgba(56,189,248,0.3)", color: "#38bdf8", fontSize: 11, fontWeight: 600, marginBottom: 4 }}>
                        Systems Engineering &amp; Operations
                      </div>
                      <div style={{ fontWeight: 700, color: "var(--color-text-primary)", fontSize: 18, fontFamily: "Inter,sans-serif", lineHeight: 1 }}>
                        Network Operations &amp; Server Infrastructure
                      </div>
                    </div>
                  </div>

                  <div style={{ height: 1, background: "var(--color-border)", marginBottom: 16 }} />

                  <p style={{ color: "var(--color-text-secondary)", fontSize: 14.5, lineHeight: 1.75, marginBottom: 20 }}>
                    Experience managing FTTH network operations at Timeless Telecoms, configuring GPON Huawei OLT systems and provisioning ONUs. Diagnosed fiber links, resolved signals loss, and collaborated with field teams. Builds automated Node.js deploys on Linux VPS server clusters.
                  </p>
                </div>

                <div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 16 }}>
                    {["Huawei OLT", "Ubuntu Linux VPS", "SSH Scripting", "PM2 Lifecycle", "MongoDB Admin", "Network Monitoring"].map(tag => (
                      <span key={tag} style={{ fontSize: 11, padding: "4px 10px", borderRadius: 6, fontWeight: 600, background: "rgba(56,189,248,0.12)", color: "#38bdf8", border: "1px solid rgba(56,189,248,0.2)" }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div style={{ flex: 1, minWidth: 280, display: "flex", alignItems: "center" }}>
                <TerminalMockup />
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
