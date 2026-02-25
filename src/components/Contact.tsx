import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault(); setLoading(true);
    setTimeout(() => {
      setLoading(false); setSent(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 5000);
    }, 1300);
  };

  const SOCIALS = [
    {
      label: "GitHub", href: "https://github.com/Alphacreato",
      icon: <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>,
    },
    {
      label: "LinkedIn", href: "https://www.linkedin.com/in/dandy-ogbonna/",
      icon: <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
    },
    {
      label: "X / Twitter", href: "https://x.com/alphacreator__",
      icon: <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
    },
  ];

  return (
    <section id="contact" style={{ padding: "100px 0", background: "radial-gradient(ellipse 80% 50% at 50% -5%, rgba(59,130,246,0.10) 0%, transparent 65%), #0a0a0a" }}>
      <div style={{ height: 1, background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.07),transparent)" }} />
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px 0" }}>

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 64 }}>
          <span className="tag-badge" style={{ marginBottom: 20, display: "inline-flex" }}>Get In Touch</span>
          <h2 style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 900, letterSpacing: "-0.02em", marginBottom: 16, fontFamily: "Inter,sans-serif" }}>
            Let's work <span className="gradient-text">together</span>
          </h2>
          <p style={{ color: "#a1a1aa", maxWidth: 400, margin: "0 auto", fontSize: 16 }}>
            Have a project? Drop a message — I reply within 24 hours.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "2fr 3fr", gap: 32, alignItems: "start" }} className="contact-grid">

          {/* Info */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {[
              { icon: "✉️", title: "Email",       val: "Ogbonnadandy5@gmail.com", note: "Reply within 24h" },
              { icon: "📍", title: "Location",    val: "Lagos, Nigeria 🇳🇬",       note: "Open to remote worldwide" },
              { icon: "⏰", title: "Availability", val: "Open to work",            note: "Freelance & full-time" },
            ].map(({ icon, title, val, note }) => (
              <div key={title} className="info-card">
                <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>{icon}</div>
                <div>
                  <div style={{ fontSize: 10, color: "#52525b", textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 600 }}>{title}</div>
                  <div style={{ color: "#fff", fontSize: 13, fontWeight: 600, marginTop: 3 }}>{val}</div>
                  <div style={{ color: "#a1a1aa", fontSize: 12, marginTop: 2 }}>{note}</div>
                </div>
              </div>
            ))}

            {/* Real social links */}
            <div style={{ marginTop: 8 }}>
              <div style={{ fontSize: 10, color: "#52525b", textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: 600, marginBottom: 12 }}>Find me online</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {SOCIALS.map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px", borderRadius: 10, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", color: "#a1a1aa", textDecoration: "none", fontSize: 13, fontWeight: 500, transition: "all 0.2s" }}>
                    <span style={{ color: "#3b82f6" }}>{s.icon}</span>
                    {s.label}
                    <svg style={{ marginLeft: "auto" }} width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
            <div style={{ background: "#111111", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, padding: 36 }}>
              <div style={{ height: 1, background: "linear-gradient(90deg,transparent,rgba(59,130,246,0.5),transparent)", marginBottom: 32 }} />
              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div key="ok" initial={{ opacity: 0, scale: .95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                    style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "60px 0", gap: 16, textAlign: "center" }}>
                    <div style={{ width: 64, height: 64, borderRadius: 20, background: "rgba(74,222,128,0.08)", border: "1px solid rgba(74,222,128,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28 }}>🎉</div>
                    <div style={{ fontWeight: 800, fontSize: 20, color: "#fff", fontFamily: "Inter,sans-serif" }}>Message Sent!</div>
                    <div style={{ color: "#a1a1aa", fontSize: 14 }}>Thanks! I'll get back to you within 24 hours.</div>
                  </motion.div>
                ) : (
                  <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} onSubmit={submit}
                    style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }} className="form-row">
                      <div>
                        <label style={{ display: "block", fontSize: 11, color: "#52525b", textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 600, marginBottom: 8 }}>Name</label>
                        <input className="form-input" required placeholder="Your name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                      </div>
                      <div>
                        <label style={{ display: "block", fontSize: 11, color: "#52525b", textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 600, marginBottom: 8 }}>Email</label>
                        <input className="form-input" type="email" required placeholder="you@email.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                      </div>
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: 11, color: "#52525b", textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 600, marginBottom: 8 }}>Message</label>
                      <textarea className="form-input" rows={5} required placeholder="Tell me about your project..." style={{ resize: "none" }} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
                    </div>
                    <button type="submit" disabled={loading} className="btn-primary" style={{ justifyContent: "center", width: "100%", padding: "15px", fontSize: 16 }}>
                      {loading ? (
                        <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
                          <svg className="spin" width="16" height="16" fill="none" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" opacity=".25"/>
                            <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" opacity=".75"/>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                          Send Message
                          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                          </svg>
                        </span>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
