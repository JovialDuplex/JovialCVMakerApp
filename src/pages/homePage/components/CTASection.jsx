const CTASection = function() {
    return (
        <section style={{ padding:"60px 24px" }}>
            <div style={{ maxWidth:1100, margin:"0 auto" }}>
            <div className="cta-section">
                <div style={{ position:"relative", zIndex:1, display:"flex", flexDirection:"column", gap:14, maxWidth:580 }}>
                <span style={{ display:"inline-block", background:"rgba(255,255,255,0.15)", color:"#fff", padding:"4px 14px", borderRadius:99, fontSize:"0.78rem", fontWeight:600, alignSelf:"flex-start" }}>
                    🚀 Start for free
                </span>
                <h3 style={{ fontSize:"clamp(1.5rem,3vw,2.2rem)", fontWeight:800, color:"#fff", letterSpacing:"-0.02em" }}>
                    Ready to propel your career?
                </h3>
                <p style={{ color:"rgba(255,255,255,0.82)", fontSize:"0.95rem", lineHeight:1.65 }}>
                    Join over 2 million professionals who have landed their dream jobs with JovialCVMaker.
                </p>
                <div style={{ display:"flex", gap:12, flexWrap:"wrap", marginTop:8 }}>
                    <button className={"btn btn-light"} style={{ boxShadow:"0 4px 16px rgba(0,0,0,0.18)" }}>Create my CV</button>
                    <button className={"btn btn-outline-light"} style={{ boxShadow:"none" }}>View plans</button>
                </div>
                </div>
            </div>
            </div>
        </section>
    )
};

export default CTASection;