import Trending from "./Trending";
import image from "../../public/hero.jpg"
function Hero() {

  return (
      <div className="this-page">
        <img src={image} alt="hero" id="hero-img" />
        <div className="hero-description">
          <h1 className="serif-caption">{`Welcome to `}
            <div className="jump">i</div>
            <div>L</div> 
            <div className="jump">U</div> 
            <div>T</div> 
            <div className="jump">O</div> 
            <div>M</div> 
            <div className="jump">o</div> 
          </h1>
          <h3 className="serif">the ultimate destination for culinary inspiration and gastronomic delight! We are passionate about bringing people together through the joy of cooking and the shared love for delicious meals.</h3>
        </div>
        <Trending heroClassName="featured" heroTitle="featured-title" homelink ="/recipe"/>
      </div>
  );
}

export default Hero;