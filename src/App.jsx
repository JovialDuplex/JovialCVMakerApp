import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/homePage/home";
import HelpPage from "./pages/helpPage/help";
import TemplatePage from "./pages/templatesPage/template";
import PricingPage from "./pages/pricingPage/pricing";
import MyNavbar from "./components/navbar";
import {useState, useEffect} from "react";

const App = function(){
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  


  return (
    <BrowserRouter>
      <div style={{
        display: "grid",
        gridTemplateRows: "auto 1fr",
        minHeight: "100vh",
        gridTemplateColumns: "1fr",
        position: "relative",
      }}>
        <header style={{
          position:"fixed", top:0, width:"100%", zIndex:50,
          background: scrolled ? "rgba(255,255,255,0.93)" : "rgba(255,255,255,0.72)",
          backdropFilter:"blur(16px)",
          borderBottom:"1px solid rgba(199,196,216,0.4)",
          boxShadow: scrolled ? "0 2px 20px rgba(53,37,205,0.07)" : "none",
          transition:"all 0.3s",
        }}>
          <MyNavbar />
        </header>
        <main style={{
          backgroundColor: "red",
          position: "absolute",
          top: 64, left: 0, right: 0, bottom: 0,
          overflowY: "auto",
          display: "grid",
          gridTemplateRows: "1fr",
          gridTemplateColumns: "1fr",
          
        }}>    
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/help" element={<HelpPage />} />
            <Route path="/templates" element={<TemplatePage />} />
            <Route path="/pricing" element={<PricingPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}
export default App;
