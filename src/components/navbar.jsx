import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import {Button} from "react-bootstrap";

const MyNavbar = function() {
    const [activePage, setActivePage] = useState("Home");
    const [mobileOpen, setMobileOpen] = useState(false);

    const NAV_LINKS = ["Home", "Help", "Templates", "Pricing"];
    const Btn = ({ children, primary, style={}, ...props }) => (
        <button
        style={{
            padding:"11px 26px", borderRadius:12, border:"none",
            fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"0.88rem",
            cursor:"pointer", transition:"all 0.2s",
            boxShadow: primary ? "0 4px 14px rgba(53,37,205,0.28)" : "0 2px 8px rgba(0,0,0,0.12)",
            ...style,
        }} className={`${primary ? "bg-primary text-white" : "bg-white text-primary"}`}
        onMouseEnter={e => { e.currentTarget.style.transform="scale(1.04)"; }}
        onMouseLeave={e => { e.currentTarget.style.transform="scale(1)"; }}
        {...props}
        >{children}</button>
    );

    return (
        <>
        <nav style={{ display:"flex", justifyContent:"space-between", alignItems:"center", height:64, padding:"0 24px", maxWidth:1280, margin:"0 auto" }}>
          <span className="brand" style={{ fontSize:"1.3rem", fontWeight:800, color:"var(--primary)", letterSpacing:"-0.02em", cursor:"pointer" }}>
            Jovial<span style={{ color:"#ff6b35" }}>CV</span>Maker
          </span>

          <div style={{ display:"flex", gap:32, alignItems:"center" }} className="desktop-nav">
            {NAV_LINKS.map(link => (
              <NavLink to={`/${link !== "Home" ? link.toLowerCase() : ""}`} key={link} className={`nav-link${activePage===link?" active":""}`} onClick={() => setActivePage(link)}>
                {link}
              </NavLink>
            ))}
          </div>

          <div style={{ display:"flex", alignItems:"center", gap:12 }}>
            <Btn primary >Créer un CV</Btn>
            <button
              onClick={() => setMobileOpen(o => !o)}
              className="hamburger"
              style={{ background:"none", border:"none", cursor:"pointer", padding:8, display:"none", flexDirection:"column", gap:5 }}
            >
              {[
                mobileOpen ? "rotate(45deg) translate(5px,5px)" : "none",
                null,
                mobileOpen ? "rotate(-45deg) translate(5px,-5px)" : "none",
              ].map((transform, i) => i===1
                ? <span key={i} style={{ display:"block", width:22, height:2, background:"#333", borderRadius:2, opacity:mobileOpen?0:1, transition:"all 0.3s" }} />
                : <span key={i} style={{ display:"block", width:22, height:2, background:"#333", borderRadius:2, transition:"all 0.3s", transform }} />
              )}
            </button>
          </div>
        </nav>

        {mobileOpen && (
          <div className="mobile-menu">
            {NAV_LINKS.map(link => (
              <NavLink to={`/${link !== "Home" ? link.toLowerCase() : ""}`} key={link} className={`nav-link${activePage===link?" active":""}`}
                style={{ textAlign:"left", padding:"10px 0" }}
                onClick={() => { setActivePage(link); setMobileOpen(false); }}>
                {link}
              </NavLink>
            ))}
          </div>
        )}
    
        </>
    );
};

export default MyNavbar;