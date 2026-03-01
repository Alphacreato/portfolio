import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../ThemeContext";

const LINKS = ["Home", "About", "Skills", "Projects", "Contact"];

function SunIcon() {
  return (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
    </svg>
  );
}

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ rotate: -90, scale: 0, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          exit={{ rotate: 90, scale: 0, opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          style={{ display: "flex", alignItems: "center", justifyContent: "center", color: theme === "dark" ? "#93c5fd" : "#f59e0b" }}
        >
          {theme === "dark" ? <MoonIcon /> : <SunIcon />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const { theme } = useTheme();

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

  const isLight = theme === "light";

  const navStyle: React.CSSProperties = {
    position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
    transition: "all 0.3s",
    background: scrolled
      ? isLight ? "rgba(248,250,252,0.88)" : "rgba(10,10,10,0.88)"
      : "transparent",
    backdropFilter: scrolled ? "blur(20px)" : "none",
    WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
    borderBottom: scrolled
      ? isLight ? "1px solid rgba(0,0,0,0.08)" : "1px solid rgba(255,255,255,0.07)"
      : "none",
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
            <div style={{ width: 32, height: 32, borderRadius: 8, background: "#3b82f6", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 16px rgba(59,130,246,0.5)" }}>
              <span style={{ color: "#fff", fontWeight: 800, fontSize: 14, fontFamily: "Inter,sans-serif" }}>D</span>
            </div>
            <span style={{ fontWeight: 700, fontSize: 16, color: "var(--color-text-primary)", fontFamily: "Inter,sans-serif" }}>
              Dandy<span style={{ color: "#3b82f6" }}>.</span>
            </span>
          </button>

          {/* Desktop links + toggle */}
          <div style={{ display: "flex", alignItems: "center", gap: 4 }} className="hidden-mobile">
            {LINKS.map(l => (
              <button key={l} onClick={() => goto(l)} style={{
                padding: "8px 16px", borderRadius: 8,
                background: active === l ? "rgba(59,130,246,0.08)" : "transparent",
                color: active === l ? "var(--color-text-primary)" : "var(--color-text-secondary)",
                fontSize: 14, fontWeight: 500, border: "none", cursor: "pointer",
                transition: "all 0.2s", fontFamily: "Inter,sans-serif",
              }}
              onMouseEnter={e => { if (active !== l) (e.target as HTMLButtonElement).style.color = "var(--color-text-primary)"; }}
              onMouseLeave={e => { if (active !== l) (e.target as HTMLButtonElement).style.color = "var(--color-text-secondary)"; }}
              >{l}</button>
            ))}
            <ThemeToggle />
            <button onClick={() => goto("Contact")} className="btn-primary" style={{ marginLeft: 4, padding: "9px 20px", fontSize: 14 }}>
              Hire Me
            </button>
          </div>

          {/* Mobile: theme toggle + hamburger */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }} className="show-mobile">
            <ThemeToggle />
            <button onClick={() => setOpen(o => !o)}
              style={{ background: "none", border: "none", cursor: "pointer", padding: 8, display: "flex", flexDirection: "column", gap: 5 }}>
              {[0,1,2].map(i => (
                <motion.div key={i}
                  style={{ width: i === 1 ? 18 : 22, height: 1.5, background: "var(--color-text-primary)", borderRadius: 2 }}
                  animate={open ? (i===0?{rotate:45,y:6.5}:i===1?{opacity:0}:{rotate:-45,y:-6.5}) : {rotate:0,y:0,opacity:1}}
                />
              ))}
            </button>
          </div>
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
              background: isLight ? "rgba(248,250,252,0.97)" : "rgba(10,10,10,0.97)",
              backdropFilter: "blur(20px)",
              borderBottom: isLight ? "1px solid rgba(0,0,0,0.08)" : "1px solid rgba(255,255,255,0.07)",
              padding: "16px 24px",
            }}
          >
            {LINKS.map((l, i) => (
              <motion.button key={l}
                initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}
                onClick={() => goto(l)}
                style={{
                  display: "block", width: "100%", textAlign: "left", padding: "14px 0",
                  borderBottom: i < LINKS.length - 1 ? "1px solid var(--color-border)" : "none",
                  color: "var(--color-text-secondary)", fontSize: 15, fontWeight: 500,
                  background: "none", border: "none",
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
