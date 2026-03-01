import { motion } from "framer-motion";

const CATS = [
  { title:"Frontend", icon:"🖥️", skills:["React","TypeScript","JavaScript","HTML5","CSS3","Tailwind CSS","Framer Motion","Vite","Redux"] },
  { title:"Mobile",   icon:"📱", skills:["React Native","Expo","React Navigation","AsyncStorage","Expo Notifications","EAS Build","Reanimated"] },
  { title:"Tooling",  icon:"⚙️", skills:["Git & GitHub","REST APIs","Figma","VS Code","Postman","npm / yarn","ESLint","Prettier"] },
];

const STRENGTHS = [
  { icon: "⚡", text: "State management — Context API, Redux patterns & local state architecture" },
  { icon: "🔗", text: "API integration — REST consumption, error handling & loading state design" },
  { icon: "🧩", text: "Component reusability — scalable, modular UI structure across large codebases" },
  { icon: "🛡️", text: "UI edge-case handling — form validation, empty states & graceful error fallbacks" },
];

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "clamp(56px,9vw,100px) 0", background: "var(--color-bg-alt)", transition: "background 0.3s" }}>
      <div style={{ height: 1, background: "linear-gradient(90deg,transparent,var(--color-divider),transparent)" }} />
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "clamp(28px,7vw,80px) clamp(16px,3vw,24px) 0" }}>

        <motion.div initial={{ opacity:0,y:24 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ duration:0.6 }}
          style={{ marginBottom: 56 }}>
          <span className="tag-badge" style={{ marginBottom: 16, display:"inline-flex" }}>My Stack</span>
          <div style={{ display:"flex", flexWrap:"wrap", alignItems:"flex-end", justifyContent:"space-between", gap:16 }}>
            <h2 style={{ fontSize:"clamp(2rem,4vw,3rem)", fontWeight:900, letterSpacing:"-0.02em", fontFamily:"Inter,sans-serif", color:"var(--color-text-primary)" }}>
              Skills &amp; <span className="gradient-text">Technologies</span>
            </h2>
            <p style={{ color:"var(--color-text-secondary)", fontSize:14, maxWidth:280 }}>Technologies I use to bring ideas to life.</p>
          </div>
        </motion.div>

        {/* Skills grid */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:20, marginBottom: 28 }} className="skills-grid">
          {CATS.map((cat, ci) => (
            <motion.div key={cat.title}
              initial={{ opacity:0,y:36 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }}
              transition={{ duration:0.65,delay:ci*0.1,ease:[0.22,1,0.36,1] }}
              className="project-card"
              style={{ padding:28 }}
            >
              <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:22 }}>
                <div style={{ width:44,height:44,borderRadius:12,background:"rgba(59,130,246,0.1)",border:"1px solid rgba(59,130,246,0.2)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:20 }}>
                  {cat.icon}
                </div>
                <div>
                  <div style={{ fontWeight:700,color:"var(--color-text-primary)",fontSize:16,fontFamily:"Inter,sans-serif" }}>{cat.title}</div>
                  <div style={{ color:"var(--color-text-muted)",fontSize:12,marginTop:2 }}>{cat.skills.length} technologies</div>
                </div>
              </div>
              <div style={{ height:1,background:"var(--color-border)",marginBottom:20 }} />
              <div style={{ display:"flex",flexWrap:"wrap",gap:8 }}>
                {cat.skills.map((s, si) => (
                  <motion.span key={s}
                    initial={{ opacity:0,scale:0.85 }} whileInView={{ opacity:1,scale:1 }} viewport={{ once:true }}
                    transition={{ duration:0.3,delay:ci*0.06+si*0.04 }}
                    className="skill-chip">
                    {s}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Core Frontend Strengths */}
        <motion.div
          initial={{ opacity:0,y:28 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }}
          transition={{ duration:0.65, delay:0.2, ease:[0.22,1,0.36,1] }}
          style={{
            borderRadius: 16,
            border: "1px solid var(--color-border)",
            background: "var(--color-surface)",
            padding: "clamp(20px,3vw,32px)",
            transition: "background 0.3s, border-color 0.3s",
          }}
        >
          <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:20 }}>
            <div style={{ width:38,height:38,borderRadius:10,background:"rgba(59,130,246,0.1)",border:"1px solid rgba(59,130,246,0.2)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:18,flexShrink:0 }}>
              💪
            </div>
            <div>
              <div style={{ fontSize:11,color:"var(--color-text-muted)",textTransform:"uppercase",letterSpacing:"0.12em",fontWeight:600 }}>What I bring to the table</div>
              <div style={{ fontWeight:700,color:"var(--color-text-primary)",fontSize:16,fontFamily:"Inter,sans-serif" }}>Core Frontend Strengths</div>
            </div>
          </div>
          <div style={{ height:1,background:"var(--color-border)",marginBottom:20 }} />
          <div style={{ display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:12 }} className="strengths-grid">
            {STRENGTHS.map((s, i) => (
              <motion.div key={i}
                initial={{ opacity:0,x:-12 }} whileInView={{ opacity:1,x:0 }} viewport={{ once:true }}
                transition={{ duration:0.4, delay:i*0.08 }}
                style={{
                  display:"flex", alignItems:"flex-start", gap:12,
                  padding:"12px 16px", borderRadius:10,
                  background:"var(--color-card)", border:"1px solid var(--color-border)",
                  transition:"all 0.2s",
                }}
              >
                <span style={{ fontSize:16, flexShrink:0, marginTop:1 }}>{s.icon}</span>
                <span style={{ fontSize:13, color:"var(--color-text-secondary)", lineHeight:1.6 }}>{s.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
