import { useState, useEffect, useRef } from "react";

function HeroCarousel() {
    const CAROUSEL_TEMPLATES = [
        { id:1, name:"Modern Horizon",  cat:"Tech & Creative",   badge:"🔥 Top Pick",  img:"https://lh3.googleusercontent.com/aida-public/AB6AXuAmZUOG2KOebUne6oVzy4RULb8cTPIj9W0bH4quRYSWf8OhKZf5xTOhmyqpjzOV6pqUtcFVv9VwHI62f62r-nGa1xnp3MsixWVWT3WU5_LoBnBi6OPxGqjw6QRCqw5YTU2Sj7rioSpEBowtVWvB3v3JTcGT4Nfj5FPa_7nrHU4xJ9HG04O8i2_0eSbm1lFmMaTErLqkw0tb9-u_QOZWdW2NPQRrGCRQL8YlM-w4ecp-6Rv7LynB8jaogRsUW2kXBcjeZuPXlc2Ag_aN" },
        { id:2, name:"Executive Elite", cat:"Corporate Roles",   badge:"⭐ Premium",   img:"https://lh3.googleusercontent.com/aida-public/AB6AXuCyfAMPIUQcWfDiI3ewkl5pGUfE7K1VCNK9y-r4NhFYIEnL_qpFpQCl2lqLF-D03JQIt4vnJMJC4pmCWPqie-4M6XmgfKg6bYNG215ypqCc6Vi7xL7u-E7DuPHvgn6rTCqTKm55gVCoYWG2X5fzehB5vEZWuwHI5sEFeNJkRLuSVTSUe68Y9C04FuyWytpyCFOQmDTy7V-c9fcDp0m8tCwK2PAbKFhn0isGElYOE7ty_PKdlhD4umvkxgrERuUvS-vrPv4B-0XjHhlp" },
        { id:3, name:"Pure Clarity",    cat:"Academic Roles",    badge:"📚 Scholar",   img:"https://lh3.googleusercontent.com/aida-public/AB6AXuDLOUlMFfkpKGX5dRmOwzwD4TD8ltJuO93dmi3fydaM8yA2YoM-uX0OToNIQReRWYePr5hqPVS7tAfSTPqi3ATKsjopv-cauejCuGKzMeLAndmpzTUeUOvqRt8PuyaF2uhhgtaZ7_0FcvIM4aWMT6nftcIV7mgIxuVll_sGJjZEA2yNHVCeTiA7E40Kd_IwX8RWOHEIcfwZr6hONCA8-QEkHtTsoxdudniIzMilI5FPrYcF4W-3P_zTdf4vh5CGiT-wpZ--VXGco7Uj" },
        { id:4, name:"Creative Pulse",  cat:"Marketing & Media", badge:"🎨 Creative",  img:"https://lh3.googleusercontent.com/aida-public/AB6AXuBvThKv01WsC2yZZnqP9oB7y5oZQBLl-zpheRnHDrHTmIDB8PzaqeiwEzME5Z51pDHNvLwNE2q37xz7w7m38sqffeCSuXdFmBDMz25eqvzpdv7tHXIhvpOtj-1Z091KqHQRwLBni7FkIuY98yiK2MSTEhQBXqD08CLXa02Mc9bTgJEomd0BcrxEcSIJ-5zrR6Rmw3zrsbRhoulaFfeqYsyj1yfi-nvhGuW1-3NTq03oXFdH1zkrXbqmzWg3cIDoxK45J-QoxBziacvG" },
        { id:5, name:"Bold Impact",     cat:"Leadership Roles",  badge:"💼 Executive", img:"https://lh3.googleusercontent.com/aida-public/AB6AXuBJBExMQLasipLg3x1OCB8w5pOBV8ZP9skEF9jK7kCWx1cpBfWcfAxEO2FNNdXQPfD4bi0di9VBRaLmqmSHG37njfpFkRcYgYuHYhJxTimj_H-Dk26xbBNxBnjwPQdDIAQAwviJftfvolTUsDvrqQnPSye2hp-TjdXoiYzNU5s-A_Lk0E8zkOyQrlieml9_ZYTPJlEwE3tRhibwRq9e6PjZJQ9XwOUsf3Umma53zX51Sh7AQgCtsnQ23FyJXNbr2Ps4TGrMg89kq0dT" },
        { id:6, name:"Geometric Pro",   cat:"Design & Art",      badge:"✨ Trending",  img:"https://lh3.googleusercontent.com/aida-public/AB6AXuDBZCaXrsW7oTcU_0Q6mHiho2wpAZBJ9uKuopi-rFuO7tmHtynpe-nHKpSLg0c4L1gcd4G7zaeipQpCls3HHO2j30bGG39PO0Jsn6ZU5oOw3jw0i6xuwKe1Vx9fhyGmxAgDWVhseb3RU_oQSgaRKLEw0z_r9RS0nz_8mBa01YDB6VvQJ57D33FL-Ji7O9KP3zL_-fymDDxIcCBftbBdcDcbI7R1DY6_2yWi52GLMwTNrfYDZTSxruxoF-y86MnlqDiCgbYLdaFkWuif" },
    ];
    const N = CAROUSEL_TEMPLATES.length;
    const [current, setCurrent] = useState(0);
    const [selected, setSelected] = useState(null);
    const [paused, setPaused] = useState(false);
    const intervalRef = useRef(null);

    useEffect(() => {
        if (paused) return;
        intervalRef.current = setInterval(() => setCurrent(p => (p + 1) % N), 2800);
        return () => clearInterval(intervalRef.current);
    }, [paused, N]);

    const handleSelect = (id) => {
        const isSame = id === selected;
        setSelected(isSame ? null : id);
        setPaused(!isSame);
    };

    const getVisible = () => {
        const idxs = [-1, 0, 1, 2, 3].map(offset => ((current + offset) % N + N) % N);
        return idxs.map(i => CAROUSEL_TEMPLATES[i]);
    };

    const visible = getVisible();
    const sizes = [
        { w:160, h:220, op:0.4, ptr:"none", scale:0.9 },
        { w:210, h:290, op:1,   ptr:"auto", scale:1 },
        { w:240, h:320, op:1,   ptr:"auto", scale:1.04 },
        { w:210, h:290, op:1,   ptr:"auto", scale:1 },
        { w:160, h:220, op:0.4, ptr:"none", scale:0.9 },
    ];

    return (
        <div style={{ maxWidth:960, margin:"0 auto" }}>
        <div style={{ display:"flex", alignItems:"center", gap:16 }}>
            <button className="arrow-btn" onClick={() => setCurrent(p => (p-1+N)%N)}>‹</button>
            <div style={{ flex:1, overflow:"hidden", padding:"24px 0 32px" }}>
            <div style={{ display:"flex", gap:20, justifyContent:"center", alignItems:"flex-end" }}>
                {visible.map((tpl, i) => {
                const s = sizes[i];
                const isSel = selected === tpl.id;
                return (
                    <div
                    key={tpl.id + "-" + i}
                    className={`cv-card${isSel ? " selected" : ""}`}
                    style={{
                        width: s.w, height: s.h,
                        opacity: s.op,
                        transform: isSel ? "scale(1.08) translateY(-8px)" : `scale(${s.scale})`,
                        pointerEvents: s.ptr,
                        transition: "all 0.4s cubic-bezier(.4,0,.2,1)",
                    }}
                    onClick={() => handleSelect(tpl.id)}
                    >
                    <img src={tpl.img} alt={tpl.name} />
                    {tpl.badge && <span className="card-badge">{tpl.badge}</span>}
                    <span className="card-name">{tpl.name}</span>
                    <div className="card-overlay">
                        {isSel
                        ? <button className="create-cv-btn">✨ Créer un CV avec ce template</button>
                        : <button className="create-cv-btn" style={{ background:"rgba(255,255,255,0.18)", backdropFilter:"blur(6px)" }}>Sélectionner</button>
                        }
                    </div>
                    </div>
                );
                })}
            </div>
            </div>
            <button className="arrow-btn" onClick={() => setCurrent(p => (p+1)%N)}>›</button>
        </div>

        <div style={{ display:"flex", justifyContent:"center", gap:8, marginTop:4 }}>
            {CAROUSEL_TEMPLATES.map((_,i) => (
            <button key={i} className={`dot${current===i?" active":""}`} onClick={() => setCurrent(i)} />
            ))}
        </div>

        {paused && (
            <p style={{ textAlign:"center", marginTop:10, fontSize:"0.78rem", color:"var(--primary)", fontWeight:600 }}>
            ⏸ Carrousel pausé ·{" "}
            <button onClick={() => { setSelected(null); setPaused(false); }} style={{ background:"none", border:"none", color:"var(--primary)", cursor:"pointer", fontWeight:700, textDecoration:"underline" }}>
                Reprendre
            </button>
            </p>
        )}
        </div>
    );
}

export default HeroCarousel;