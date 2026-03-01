export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--color-border)", background: "var(--color-bg-alt)", padding: "32px 24px", transition: "background 0.3s, border-color 0.3s" }}>
      <div style={{ maxWidth:1100,margin:"0 auto",display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:16 }}>
        <div style={{ display:"flex",alignItems:"center",gap:10 }}>
          <div style={{ width:26,height:26,borderRadius:7,background:"#3b82f6",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 0 12px rgba(59,130,246,0.4)" }}>
            <span style={{ color:"#fff",fontWeight:800,fontSize:12 }}>D</span>
          </div>
          <span style={{ fontWeight:700,color:"var(--color-text-primary)",fontSize:15,fontFamily:"Inter,sans-serif" }}>Dandy<span style={{ color:"#3b82f6" }}>.</span></span>
        </div>
<p style={{ color:"var(--color-text-muted)",fontSize:13 }}>© {new Date().getFullYear()} Dandy. All rights reserved.</p>
      </div>
    </footer>
  );
}
