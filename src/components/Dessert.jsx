import { useEffect, useState } from "react"
import {Splide, SplideSlide} from '@splidejs/react-splide'
import "@splidejs/splide/dist/css/splide.min.css";

function Dessert() {
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


  const [dessert, setDessert] = useState([])
  useEffect(() => {
    getDessert()
  },[])

  async function getDessert(){
    const checkLocalStor = localStorage.getItem("dessert")
    if(checkLocalStor){
      setDessert(JSON.parse(checkLocalStor))
    }
    else{
      const randomFetch = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=51d0e725a5f9407891c4892e29d1c70a&number=15&tags=dessert`)
      const dessertData = await randomFetch.json()
      localStorage.setItem("dessert", JSON.stringify(dessertData.recipes))
      setDessert(dessertData.recipes)
    }
    
  }
  console.log(dessert)
  return (
    <div className= {`display-category`} >
      <h2 className={`serif-caption category`}>Dessert</h2>
      <Splide options = {{
        perPage: perPage,
        arrows: true,
        pagination: true,
        drag: true,
        swipe: true,
        gap: '10px'
        }} className="splide-container">
          {dessert.map((el) => {
            return(
              <SplideSlide className="dessert card" key={el.title}>
                <h4 className="serif-caption">{el.title}</h4>
                <img src={el.image} alt={el.title}/>
                <div className="gradient"></div>
              </SplideSlide>
            )
          })}
      </Splide>
    </div>
  )
}

export default Dessert
