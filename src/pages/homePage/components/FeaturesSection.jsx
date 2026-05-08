const FeaturesSection = () => {
    const FEATURES = [
        { icon:"🤖", title:"Intelligent AI",   desc:"Our AI analyzes job postings and tailors your CV to match exactly what recruiters are looking for." },
        { icon:"✅", title:"ATS Optimized",      desc:"Each template is tested to pass the ATS systems used by major global companies." },
        { icon:"⚡", title:"Ready in Minutes",   desc:"Answer a few questions, choose a template, and download your CV in less than 10 minutes." },
        { icon:"🌍", title:"Multilingual",       desc:"Create your CV in English, French, Spanish and +20 other languages with automatic formatting." },
        { icon:"📄", title:"Unlimited Exports", desc:"Export in PDF, DOCX or share a live link. Update and re-download your CV for free." },
        { icon:"🎨", title:"Personal Branding",   desc:"Adjust colors, fonts and spacing to perfectly match your personal brand." },
    ];
    return (
        <section className="features" style={{ padding:"80px 24px", background:"var(--surface-low)" }}>
          <div style={{ maxWidth:1280, margin:"0 auto" }}>
            <div style={{ textAlign:"center", marginBottom:52 }}>
              <h2 style={{ fontSize:"clamp(1.6rem,3vw,2rem)", fontWeight:800, letterSpacing:"-0.02em", marginBottom:12 }}>Everything to land your dream job</h2>
              <p style={{ color:"var(--on-surface-variant)", maxWidth:480, margin:"0 auto", lineHeight:1.6 }}>Professional tools designed for every step of your job search.</p>
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))", gap:20 }}>
              {FEATURES.map(f => (
                <div key={f.title} className="feature-card">
                  <div className="feature-icon">{f.icon}</div>
                  <h3 style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"1rem", marginBottom:8 }}>{f.title}</h3>
                  <p style={{ color:"var(--on-surface-variant)", fontSize:"0.87rem", lineHeight:1.65 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
    );
};

export default FeaturesSection;