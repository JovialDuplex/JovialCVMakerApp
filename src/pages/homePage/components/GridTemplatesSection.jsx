import {useState} from "react";
import {Link} from "react-router-dom";

const GridTemplatesSection = () => {
    const TABS = ["Professional","Minimalist","Modern"];
    const [activeTab, setActiveTab] = useState("Modern");

    const GRID_TEMPLATES = {
        Professional: [
        { id:1, name:"Executive Elite", desc:"Corporate Roles",  popular:false, img:"https://lh3.googleusercontent.com/aida-public/AB6AXuBJBExMQLasipLg3x1OCB8w5pOBV8ZP9skEF9jK7kCWx1cpBfWcfAxEO2FNNdXQPfD4bi0di9VBRaLmqmSHG37njfpFkRcYgYuHYhJxTimj_H-Dk26xbBNxBnjwPQdDIAQAwviJftfvolTUsDvrqQnPSye2hp-TjdXoiYzNU5s-A_Lk0E8zkOyQrlieml9_ZYTPJlEwE3tRhibwRq9e6PjZJQ9XwOUsf3Umma53zX51Sh7AQgCtsnQ23FyJXNbr2Ps4TGrMg89kq0dT" },
        { id:2, name:"Classic Authority",desc:"Finance & Law",   popular:false, img:"https://lh3.googleusercontent.com/aida-public/AB6AXuCyfAMPIUQcWfDiI3ewkl5pGUfE7K1VCNK9y-r4NhFYIEnL_qpFpQCl2lqLF-D03JQIt4vnJMJC4pmCWPqie-4M6XmgfKg6bYNG215ypqCc6Vi7xL7u-E7DuPHvgn6rTCqTKm55gVCoYWG2X5fzehB5vEZWuwHI5sEFeNJkRLuSVTSUe68Y9C04FuyWytpyCFOQmDTy7V-c9fcDp0m8tCwK2PAbKFhn0isGElYOE7ty_PKdlhD4umvkxgrERuUvS-vrPv4B-0XjHhlp" },
        { id:3, name:"Pure Clarity",    desc:"Academic Roles",   popular:false, img:"https://lh3.googleusercontent.com/aida-public/AB6AXuDLOUlMFfkpKGX5dRmOwzwD4TD8ltJuO93dmi3fydaM8yA2YoM-uX0OToNIQReRWYePr5hqPVS7tAfSTPqi3ATKsjopv-cauejCuGKzMeLAndmpzTUeUOvqRt8PuyaF2uhhgtaZ7_0FcvIM4aWMT6nftcIV7mgIxuVll_sGJjZEA2yNHVCeTiA7E40Kd_IwX8RWOHEIcfwZr6hONCA8-QEkHtTsoxdudniIzMilI5FPrYcF4W-3P_zTdf4vh5CGiT-wpZ--VXGco7Uj" },
        { id:4, name:"Bold Impact",     desc:"Leadership Roles", popular:false, img:"https://lh3.googleusercontent.com/aida-public/AB6AXuBJBExMQLasipLg3x1OCB8w5pOBV8ZP9skEF9jK7kCWx1cpBfWcfAxEO2FNNdXQPfD4bi0di9VBRaLmqmSHG37njfpFkRcYgYuHYhJxTimj_H-Dk26xbBNxBnjwPQdDIAQAwviJftfvolTUsDvrqQnPSye2hp-TjdXoiYzNU5s-A_Lk0E8zkOyQrlieml9_ZYTPJlEwE3tRhibwRq9e6PjZJQ9XwOUsf3Umma53zX51Sh7AQgCtsnQ23FyJXNbr2Ps4TGrMg89kq0dT" },
        ],
        Minimalist: [
        { id:5, name:"Blank Canvas",    desc:"Any Role",         popular:false, img:"https://lh3.googleusercontent.com/aida-public/AB6AXuAZEio431nSY2S8iF-07d1jC7ZJkswiLxzJpFFGYLDKVQtfHBs00CRhZ9TlZZjQ6Vrok8u2timFSomNgXyktpuF7TRsOqOIurPB1lM_1eRuNyvporq8HAPLFhOCbHojrRwgrXM2PiZBWM2gWl0Bawg1y7zlNyzjtQe0z9LI8kdEzvn8z9_T0iXn-JevNb6lNrV55v4lhEVsNTBi2z1D2np-F5UH8k9qz7fyjGycgtQCZoUuBeW6SWfB2f7jAsL9NC56302kfwGmnBcx" },
        { id:6, name:"Subtle Lines",    desc:"Any Role",         popular:false, img:"https://lh3.googleusercontent.com/aida-public/AB6AXuDLOUlMFfkpKGX5dRmOwzwD4TD8ltJuO93dmi3fydaM8yA2YoM-uX0OToNIQReRWYePr5hqPVS7tAfSTPqi3ATKsjopv-cauejCuGKzMeLAndmpzTUeUOvqRt8PuyaF2uhhgtaZ7_0FcvIM4aWMT6nftcIV7mgIxuVll_sGJjZEA2yNHVCeTiA7E40Kd_IwX8RWOHEIcfwZr6hONCA8-QEkHtTsoxdudniIzMilI5FPrYcF4W-3P_zTdf4vh5CGiT-wpZ--VXGco7Uj" },
        { id:7, name:"Zero Noise",      desc:"Research & Sci",   popular:false, img:"https://lh3.googleusercontent.com/aida-public/AB6AXuCyfAMPIUQcWfDiI3ewkl5pGUfE7K1VCNK9y-r4NhFYIEnL_qpFpQCl2lqLF-D03JQIt4vnJMJC4pmCWPqie-4M6XmgfKg6bYNG215ypqCc6Vi7xL7u-E7DuPHvgn6rTCqTKm55gVCoYWG2X5fzehB5vEZWuwHI5sEFeNJkRLuSVTSUe68Y9C04FuyWytpyCFOQmDTy7V-c9fcDp0m8tCwK2PAbKFhn0isGElYOE7ty_PKdlhD4umvkxgrERuUvS-vrPv4B-0XjHhlp" },
        { id:8, name:"Pure Form",       desc:"UX & Design",      popular:false, img:"https://lh3.googleusercontent.com/aida-public/AB6AXuBvThKv01WsC2yZZnqP9oB7y5oZQBLl-zpheRnHDrHTmIDB8PzaqeiwEzME5Z51pDHNvLwNE2q37xz7w7m38sqffeCSuXdFmBDMz25eqvzpdv7tHXIhvpOtj-1Z091KqHQRwLBni7FkIuY98yiK2MSTEhQBXqD08CLXa02Mc9bTgJEomd0BcrxEcSIJ-5zrR6Rmw3zrsbRhoulaFfeqYsyj1yfi-nvhGuW1-3NTq03oXFdH1zkrXbqmzWg3cIDoxK45J-QoxBziacvG" },
        ],
        Modern: [
        { id:9,  name:"Modern Horizon", desc:"Tech & Creative",  popular:true,  img:"https://lh3.googleusercontent.com/aida-public/AB6AXuDBZCaXrsW7oTcU_0Q6mHiho2wpAZBJ9uKuopi-rFuO7tmHtynpe-nHKpSLg0c4L1gcd4G7zaeipQpCls3HHO2j30bGG39PO0Jsn6ZU5oOw3jw0i6xuwKe1Vx9fhyGmxAgDWVhseb3RU_oQSgaRKLEw0z_r9RS0nz_8mBa01YDB6VvQJ57D33FL-Ji7O9KP3zL_-fymDDxIcCBftbBdcDcbI7R1DY6_2yWi52GLMwTNrfYDZTSxruxoF-y86MnlqDiCgbYLdaFkWuif" },
        { id:10, name:"Creative Pulse", desc:"Marketing & Media",popular:false, img:"https://lh3.googleusercontent.com/aida-public/AB6AXuBvThKv01WsC2yZZnqP9oB7y5oZQBLl-zpheRnHDrHTmIDB8PzaqeiwEzME5Z51pDHNvLwNE2q37xz7w7m38sqffeCSuXdFmBDMz25eqvzpdv7tHXIhvpOtj-1Z091KqHQRwLBni7FkIuY98yiK2MSTEhQBXqD08CLXa02Mc9bTgJEomd0BcrxEcSIJ-5zrR6Rmw3zrsbRhoulaFfeqYsyj1yfi-nvhGuW1-3NTq03oXFdH1zkrXbqmzWg3cIDoxK45J-QoxBziacvG" },
        { id:11, name:"Geometric Pro",  desc:"Design & Art",     popular:false, img:"https://lh3.googleusercontent.com/aida-public/AB6AXuAZEio431nSY2S8iF-07d1jC7ZJkswiLxzJpFFGYLDKVQtfHBs00CRhZ9TlZZjQ6Vrok8u2timFSomNgXyktpuF7TRsOqOIurPB1lM_1eRuNyvporq8HAPLFhOCbHojrRwgrXM2PiZBWM2gWl0Bawg1y7zlNyzjtQe0z9LI8kdEzvn8z9_T0iXn-JevNb6lNrV55v4lhEVsNTBi2z1D2np-F5UH8k9qz7fyjGycgtQCZoUuBeW6SWfB2f7jAsL9NC56302kfwGmnBcx" },
        { id:12, name:"Neon Edge",      desc:"Startups & Tech",  popular:false, img:"https://lh3.googleusercontent.com/aida-public/AB6AXuCyfAMPIUQcWfDiI3ewkl5pGUfE7K1VCNK9y-r4NhFYIEnL_qpFpQCl2lqLF-D03JQIt4vnJMJC4pmCWPqie-4M6XmgfKg6bYNG215ypqCc6Vi7xL7u-E7DuPHvgn6rTCqTKm55gVCoYWG2X5fzehB5vEZWuwHI5sEFeNJkRLuSVTSUe68Y9C04FuyWytpyCFOQmDTy7V-c9fcDp0m8tCwK2PAbKFhn0isGElYOE7ty_PKdlhD4umvkxgrERuUvS-vrPv4B-0XjHhlp" },
        ],
    };
  
    return (
        <section className="grid-templates-section" style={{ padding:"80px 24px", background:"#fff" }}>
          <div style={{ maxWidth:1280, margin:"0 auto" }}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:40, gap:24, flexWrap:"wrap" }}>
              <div style={{}}>
                <h2 style={{ fontSize:"clamp(1.9em,3vw,2em)", fontWeight:800, letterSpacing:"-0.02em", marginBottom:8 }}>Choose Your Template</h2>
                <p style={{ color:"var(--on-surface-variant)", fontSize:"1em", lineHeight:1.6 }}>Each template is ATS optimized while impressing recruiters.</p>
              </div>
              <div style={{ display:"flex", alignItems:"center", gap:14, flexWrap:"wrap" }}>
                <div className="tab-bar">
                  {TABS.map(tab => (
                    <button key={tab} className={`tab-btn${activeTab===tab?" active":""}`} onClick={() => setActiveTab(tab)}>{tab}</button>
                  ))}
                </div>
                <Link to="/templates" className="view-all-btn text-decoration-none">See All →</Link>
              </div>
            </div>

            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(220px,1fr))", gap:24 }}>
              {(GRID_TEMPLATES[activeTab]||[]).map(tpl => (
                <div key={tpl.id} className="tpl-card">
                  <div className="tpl-img-wrap">
                    <img src={tpl.img} alt={tpl.name} />
                    <div className="tpl-hover-overlay">
                      <span style={{ background:"#fff", color:"var(--primary)", padding:"7px 18px", borderRadius:99, fontSize:"0.8em", fontWeight:700, boxShadow:"0 4px 12px rgba(0,0,0,0.15)" }}>Aperçu</span>
                    </div>
                  </div>
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                    <div>
                      <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"0.9em" }}>{tpl.name}</div>
                      <div style={{ fontSize:"0.78em", color:"var(--on-surface-variant)", marginTop:2 }}>{tpl.desc}</div>
                    </div>
                    {tpl.popular && (
                      <span style={{ background:"var(--secondary-container)", color:"var(--on-secondary-container)", fontSize:"0.65em", fontWeight:800, letterSpacing:"0.05em", textTransform:"uppercase", padding:"3px 8px", borderRadius:4 }}>Populaire</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ textAlign:"center", marginTop:48 }}>
              <Link to="/templates" className="text-decoration-none view-all-btn" style={{ padding:"12px 32px", fontSize:"0.9em" }}>
                Explorer tous les templates →
              </Link>
            </div>
          </div>
        </section>    
        );
};

export default GridTemplatesSection;