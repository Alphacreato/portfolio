import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const ROLES = ["Frontend Developer.", "Mobile App Developer.", "React Native Dev.", "UI Engineer."];

export default function Hero() {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);
  const t = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const cur = ROLES[idx];
    if (!del && text.length < cur.length)
      t.current = setTimeout(() => setText(cur.slice(0, text.length + 1)), 72);
    else if (!del && text.length === cur.length)
      t.current = setTimeout(() => setDel(true), 2500);
    else if (del && text.length > 0)
      t.current = setTimeout(() => setText(text.slice(0, -1)), 38);
    else if (del)
      t.current = setTimeout(() => { setDel(false); setIdx(i => (i + 1) % ROLES.length); }, 80);
    return () => { if (t.current) clearTimeout(t.current); };
  }, [text, del, idx]);

  return (
    <section style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      paddingTop: 68, position: "relative", overflow: "hidden",
      background: "radial-gradient(ellipse 80% 50% at 50% -5%, rgba(59,130,246,0.14) 0%, transparent 65%), var(--color-bg)",
      transition: "background 0.3s",
    }}>
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", backgroundImage: "radial-gradient(var(--color-dot) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "clamp(28px,7vw,80px) clamp(16px,3vw,24px)", width: "100%", position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 40, alignItems: "center" }} className="hero-grid">

          {/* Text */}
          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "5px 14px", borderRadius: 999, background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.25)", color: "#93c5fd", fontSize: 13, fontWeight: 500, marginBottom: 28 }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#4ade80" }} />
              Available for new projects
            </div>

            <h1 style={{ fontSize: "clamp(3rem,6vw,5.5rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: 16, fontFamily: "Inter,sans-serif", color: "var(--color-text-primary)" }}>
              Hi, I'm{" "}
              <span className="gradient-text">Dandy</span>
            </h1>

            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20, minHeight: 40 }}>
              <span style={{ color: "#3b82f6", fontFamily: "monospace", fontSize: 20, fontWeight: 700 }}>$</span>
              <span style={{ fontSize: "clamp(1.2rem,2.5vw,1.6rem)", fontWeight: 700, color: "var(--color-text-primary)", fontFamily: "monospace" }}>
                {text}<span className="tcursor" />
              </span>
            </div>

            <p style={{ color: "var(--color-text-secondary)", fontSize: 17, lineHeight: 1.7, maxWidth: 520, marginBottom: 36 }}>
              I build beautiful, performant web & mobile applications with clean code,
              smooth animations, and interfaces that feel great to use.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginBottom: 56 }}>
              <button className="btn-primary" style={{ fontSize: 15, padding: "13px 30px" }}
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
                View My Work
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button className="btn-outline" style={{ fontSize: 15, padding: "13px 30px" }}
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
                Let's Talk
              </button>
            </div>

            <div className="hero-stats" style={{ display: "flex", gap: 48, paddingTop: 32, borderTop: "1px solid var(--color-border)" }}>
              {[["4+", "Years Experience"], ["15+", "Projects Built"], ["10+", "Happy Clients"]].map(([n, l]) => (
                <div key={l}>
                  <div style={{ fontSize: 32, fontWeight: 900, color: "var(--color-text-primary)", fontFamily: "Inter,sans-serif" }}>{n}</div>
                  <div style={{ fontSize: 12, color: "var(--color-text-muted)", marginTop: 2, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.08em" }}>{l}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Code card — kept dark intentionally (code editor aesthetic) */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="floating code-card-wrap"
          >
            <div style={{ width: 280, borderRadius: 18, border: "1px solid rgba(255,255,255,0.09)", background: "#111111", overflow: "hidden", boxShadow: "0 32px 80px rgba(0,0,0,0.65), 0 0 40px rgba(59,130,246,0.08)" }}>
              <div style={{ height: 2, background: "linear-gradient(90deg,transparent,#3b82f6,transparent)", opacity: 0.7 }} />
              <div style={{ padding: "10px 16px", borderBottom: "1px solid rgba(255,255,255,0.07)", display: "flex", alignItems: "center", gap: 6 }}>
                {["#ff5f57","#febc2e","#28c840"].map(c => <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />)}
                <span style={{ marginLeft: "auto", fontSize: 10, color: "#52525b", fontFamily: "monospace" }}>portfolio.tsx</span>
              </div>
              <div style={{ padding: "18px 20px", fontFamily: "monospace", fontSize: 11.5, lineHeight: 1.75, background: "#0d0d0d" }}>
                <div><span style={{ color: "#7dd3fc" }}>const</span> <span style={{ color: "#fff" }}>dev</span> <span style={{ color: "#6b7280" }}>= {"{"}</span></div>
                <div style={{ paddingLeft: 16 }}><span style={{ color: "#86efac" }}>name</span><span style={{ color: "#6b7280" }}>:</span> <span style={{ color: "#fde68a" }}>"Dandy"</span><span style={{ color: "#6b7280" }}>,</span></div>
                <div style={{ paddingLeft: 16 }}><span style={{ color: "#86efac" }}>location</span><span style={{ color: "#6b7280" }}>:</span> <span style={{ color: "#fde68a" }}>"Lagos 🇳🇬"</span><span style={{ color: "#6b7280" }}>,</span></div>
                <div style={{ paddingLeft: 16 }}><span style={{ color: "#86efac" }}>stack</span><span style={{ color: "#6b7280" }}>: [</span></div>
                {["React", "TypeScript", "React Native"].map(s => (
                  <div key={s} style={{ paddingLeft: 32 }}><span style={{ color: "#fde68a" }}>"{s}"</span><span style={{ color: "#6b7280" }}>,</span></div>
                ))}
                <div style={{ paddingLeft: 16 }}><span style={{ color: "#6b7280" }}>],</span></div>
                <div style={{ paddingLeft: 16 }}><span style={{ color: "#86efac" }}>available</span><span style={{ color: "#6b7280" }}>:</span> <span style={{ color: "#7dd3fc" }}>true</span></div>
                <div><span style={{ color: "#6b7280" }}>{"}"}</span></div>
              </div>
              <div style={{ padding: "0 16px 16px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, background: "rgba(74,222,128,0.08)", border: "1px solid rgba(74,222,128,0.2)", borderRadius: 8, padding: "10px 14px" }}>
                  <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#4ade80" }} />
                  <span style={{ color: "#86efac", fontSize: 12, fontWeight: 500 }}>Open to work — Let's build!</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}
          style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 10, color: "var(--color-text-muted)", letterSpacing: "0.25em", textTransform: "uppercase", fontWeight: 500 }}>Scroll</span>
          <motion.div animate={{ y: [0, 7, 0] }} transition={{ repeat: Infinity, duration: 1.7, ease: "easeInOut" }}
            style={{ width: 1, height: 32, background: "linear-gradient(to bottom, var(--color-text-muted), transparent)" }} />
        </motion.div>
      </div>
    </section>
  );
}
