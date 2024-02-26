import About from "../components/About";
import Hero from "../components/Hero";
function HomePage() {
  return (
    <>
      <div className="section-hero">
        <Hero/>
      </div>
      <div className="section-about" id="about-section">
        <About/>
      </div>
    </>
  );
}

export default HomePage;