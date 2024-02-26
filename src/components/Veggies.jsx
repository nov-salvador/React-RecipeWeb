import { useEffect, useState } from "react"
import {Splide, SplideSlide} from '@splidejs/react-splide'
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";

function Veggies() {
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


  const [veggies, setVeggies] = useState([])
  useEffect(() => {
    getVeggies()
  },[])

  async function getVeggies(){
    const checkLocalStor = localStorage.getItem("veggies")
    if(checkLocalStor){
      setVeggies(JSON.parse(checkLocalStor))
    }
    else{
      const randomFetch = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=51d0e725a5f9407891c4892e29d1c70a&number=15&tags=vegetarian`)
      const veggiesData = await randomFetch.json()
      localStorage.setItem("veggies", JSON.stringify(veggiesData.recipes))
      setVeggies(veggiesData.recipes)
    }
    
  }
  return (
    <div className= {`display-category`} >
      <h2 className={`serif-caption category`}>Veggies</h2>
      <Splide options = {{
        perPage: perPage,
        arrows: true,
        pagination: true,
        drag: true,
        swipe: true,
        gap: '10px'
        }} className="splide-container">
          {veggies.map((el) => {
            return(
              <SplideSlide className="veggies card" key={el.title}>
                <Link to={"detail/" + el.id}>
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

export default Veggies
