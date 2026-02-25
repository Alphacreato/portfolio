export default function Footer() {
  return (
    <footer style={{ borderTop:"1px solid rgba(255,255,255,0.07)", background:"#050505", padding:"32px 24px" }}>
      <div style={{ maxWidth:1100,margin:"0 auto",display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:16 }}>
        <div style={{ display:"flex",alignItems:"center",gap:10 }}>
          <div style={{ width:26,height:26,borderRadius:7,background:"#3b82f6",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 0 12px rgba(59,130,246,0.4)" }}>
            <span style={{ color:"#fff",fontWeight:800,fontSize:12 }}>D</span>
          </div>
          <span style={{ fontWeight:700,color:"#fff",fontSize:15,fontFamily:"Inter,sans-serif" }}>Dandy<span style={{ color:"#3b82f6" }}>.</span></span>
        </div>
        <p style={{ color:"#52525b",fontSize:13 }}>Built with React · TypeScript · Tailwind · Framer Motion</p>
        <p style={{ color:"#52525b",fontSize:13 }}>© {new Date().getFullYear()} Dandy. All rights reserved.</p>
      </div>
    </footer>
  );
}
