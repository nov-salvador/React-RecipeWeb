import { useEffect, useState } from "react"
import {Splide, SplideSlide} from '@splidejs/react-splide'
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";

function Trending({heroClassName, heroTitle}) {
  const [perPage, setPerPage] = useState(getPerPage());
  // Function to calculate perPage based on device width
  function getPerPage() {
    const viewportWidth = window.innerWidth;
    if (viewportWidth >= 1040) {
      return 5; 
    } else if (viewportWidth >= 768) {
      return 4; 
    } else if (viewportWidth >= 425){
      return 3; 
    } else {
      return 2;
    }
  }
  useEffect(() => {
    function handleResize() {
      setPerPage(getPerPage());
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const [trending, setTrending] = useState([])
  useEffect(() => {
    getTrending()
  },[])

  async function getTrending(){
    const checkLocalStor = localStorage.getItem("trending")
    if(checkLocalStor){
      setTrending(JSON.parse(checkLocalStor))
    }
    else{
      const randomFetch = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=51d0e725a5f9407891c4892e29d1c70a&number=15`)
      const trendingData = await randomFetch.json()
      localStorage.setItem("trending", JSON.stringify(trendingData.recipes))
      setTrending(trendingData.recipes)
    }
    
  }
  return (
    <div className= {`display-category ${heroClassName}`} >
      <h2 className={`serif-caption category ${heroTitle}`}>Trending Recipes</h2>
      <Splide options = {{
        perPage: perPage,
        arrows: true,
        pagination: true,
        drag: true,
        swipe: true,
        gap: '10px'
        }} className="splide-container">
          {trending.map((el) => {
            return(
              <SplideSlide className="trending card" key={el.title}>
                <Link to={"/recipes/detail/" + el.id}>
                  <h4 className="serif-caption">{el.title}</h4>
                  <img src={el.image} alt={el.title}/>
                  <div className="gradient"></div>
                </Link>
              </SplideSlide>
            )
          })}
      </Splide>
    </div>
  )
}

export default Trending