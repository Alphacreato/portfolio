import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LINKS = ["Home", "About", "Skills", "Projects", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const goto = (id: string) => {
    setOpen(false); setActive(id);
    const el = id === "Home" ? document.body : document.getElementById(id.toLowerCase());
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const navStyle: React.CSSProperties = {
    position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
    transition: "all 0.3s",
    background: scrolled ? "rgba(10,10,10,0.88)" : "transparent",
    backdropFilter: scrolled ? "blur(20px)" : "none",
    WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
    borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "none",
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        style={navStyle}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", height: 68, display: "flex", alignItems: "center", justifyContent: "space-between" }}>

          {/* Logo */}
          <button onClick={() => goto("Home")} style={{ display: "flex", alignItems: "center", gap: 10, background: "none", border: "none", cursor: "pointer" }}>
            <div style={{
              width: 32, height: 32, borderRadius: 8,
              background: "#3b82f6",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 0 16px rgba(59,130,246,0.5)",
            }}>
              <span style={{ color: "#fff", fontWeight: 800, fontSize: 14, fontFamily: "Inter,sans-serif" }}>D</span>
            </div>
            <span style={{ fontWeight: 700, fontSize: 16, color: "#fff", fontFamily: "Inter,sans-serif" }}>
              Dandy<span style={{ color: "#3b82f6" }}>.</span>
            </span>
          </button>

          {/* Desktop links */}
          <div style={{ display: "flex", alignItems: "center", gap: 4 }} className="hidden-mobile">
            {LINKS.map(l => (
              <button key={l} onClick={() => goto(l)} style={{
                padding: "8px 16px", borderRadius: 8, background: active === l ? "rgba(255,255,255,0.06)" : "transparent",
                color: active === l ? "#fff" : "#a1a1aa", fontSize: 14, fontWeight: 500,
                border: "none", cursor: "pointer", transition: "all 0.2s", fontFamily: "Inter,sans-serif",
              }}
              onMouseEnter={e => { if (active !== l) (e.target as HTMLButtonElement).style.color = "#fff"; }}
              onMouseLeave={e => { if (active !== l) (e.target as HTMLButtonElement).style.color = "#a1a1aa"; }}
              >
                {l}
              </button>
            ))}
            <button onClick={() => goto("Contact")} className="btn-primary" style={{ marginLeft: 8, padding: "9px 20px", fontSize: 14 }}>
              Hire Me
            </button>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(o => !o)}
            className="show-mobile"
            style={{ background: "none", border: "none", cursor: "pointer", padding: 8, display: "flex", flexDirection: "column", gap: 5 }}
          >
            {[0,1,2].map(i => (
              <motion.div key={i} style={{ width: i === 1 ? 18 : 22, height: 1.5, background: "#fff", borderRadius: 2 }}
                animate={open ? (i===0?{rotate:45,y:6.5}:i===1?{opacity:0}:{rotate:-45,y:-6.5}) : {rotate:0,y:0,opacity:1}}
              />
            ))}
          </button>
        </div>
      </motion.nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            style={{
              position: "fixed", top: 68, left: 0, right: 0, zIndex: 49,
              background: "rgba(10,10,10,0.95)", backdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(255,255,255,0.07)",
              padding: "16px 24px",
            }}
          >
            {LINKS.map((l, i) => (
              <motion.button key={l}
                initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}
                onClick={() => goto(l)}
                style={{
                  display: "block", width: "100%", textAlign: "left", padding: "14px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.06)", color: "#a1a1aa",
                  fontSize: 15, fontWeight: 500, background: "none", border: "none",
                  borderBottomStyle: i < LINKS.length - 1 ? "solid" : "none",
                  cursor: "pointer", fontFamily: "Inter,sans-serif",
                }}
              >{l}</motion.button>
            ))}
            <button onClick={() => goto("Contact")} className="btn-primary" style={{ width: "100%", justifyContent: "center", marginTop: 16 }}>
              Hire Me
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
