import "./home.css";
import HeroCarousel from "./components/HeroCarousel";

const HomePage = () => {
  return (
    <div className={"home-page bg-secondary text-white"}>
      <h1>Home Page</h1>
      <p>Welcome to the Jovial CV Maker! Create your professional CV with ease and stand out to employers.</p>
    </div>
  );
};

export default HomePage;