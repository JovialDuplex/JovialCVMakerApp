import HeroCarousel from "./HeroCarousel";

const HeroSection = ()=>{
    return (
        <section className="hero-bg" style={{ padding:"80px 24px 56px", overflow:"hidden" }}>
          <div className={""} style={{ maxWidth:1280, margin:"0 auto", textAlign:"center" }}>
            <div className="badge bg-primary">✦ Approved by +2 million professionals</div>
            <h1 style={{
              fontSize:"clamp(2.4em,5vw,3.8em)", fontWeight:800, lineHeight:1.15,
              letterSpacing:"-0.03em", marginBottom:20, margin:"0 auto 20px", width: "75%",
            }}>
              Create Your Professional CV{" "}
              <span style={{ background:"linear-gradient(135deg,var(--primary) 0%,#9333ea 100%)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
                in a few minutes
              </span>
            </h1>
            <p style={{ fontSize:"1.05em", color:"var(--on-surface-variant)", width: "75%", margin:"0 auto 48px", lineHeight:1.7 }}>
              The templates are designed to be ATS-friendly, ensuring that your CV gets past automated screening systems and into the hands of hiring managers. With our intuitive editor, you can easily customize your CV to highlight your unique skills and experiences, making it stand out from the competition.

            </p>
            
            <HeroCarousel/>
            
            <div style={{ marginTop:36, display:"flex", justifyContent:"center", gap:12, flexWrap:"wrap" }}>
              {["Start Free","No Credit Card Required","Instant PDF"].map(t => (
                <span key={t} style={{ display:"inline-flex", alignItems:"center", gap:6, padding:"5px 14px", borderRadius:99, background:"rgba(53,37,205,0.07)", color:"var(--primary)", fontSize:"0.8rem", fontWeight:500 }}>
                  <span style={{ color:"#22c55e" }}>✓</span> {t}
                </span>
              ))}
            </div>
          </div>
        </section>
    )
};

export default HeroSection;