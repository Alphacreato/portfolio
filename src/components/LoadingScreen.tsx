import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const steps = [15, 35, 55, 75, 92, 100];
    let i = 0;
    const run = () => {
      if (i < steps.length) { setPct(steps[i++]); setTimeout(run, i < 5 ? 300 : 500); }
      else setTimeout(onComplete, 350);
    };
    setTimeout(run, 150);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: 0.5 } }}
        style={{
          position: "fixed", inset: 0, zIndex: 9999,
          background: "#0a0a0a",
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center", gap: 24,
        }}
      >
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{
            width: 56, height: 56, borderRadius: 16,
            background: "#3b82f6",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 0 30px rgba(59,130,246,0.5)",
          }}
        >
          <span style={{ color: "#fff", fontWeight: 800, fontSize: 22, fontFamily: "Inter,sans-serif" }}>D</span>
        </motion.div>

        {/* Bar track */}
        <div style={{ width: 180, height: 3, background: "rgba(255,255,255,0.07)", borderRadius: 999, overflow: "hidden" }}>
          <motion.div
            style={{ height: "100%", background: "linear-gradient(90deg,#3b82f6,#93c5fd)", borderRadius: 999 }}
            initial={{ width: "0%" }}
            animate={{ width: `${pct}%` }}
            transition={{ ease: "easeOut", duration: 0.35 }}
          />
        </div>

        <span style={{ fontFamily: "monospace", fontSize: 12, color: "#52525b", letterSpacing: "0.2em" }}>
          {pct}%
        </span>
      </motion.div>
    </AnimatePresence>
  );
}
