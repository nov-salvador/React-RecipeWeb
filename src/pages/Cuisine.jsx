import { useEffect, useState } from "react"
import { Route, Routes, useParams, Link} from "react-router-dom"
import { cuisineFetch} from "../links/fetch"

function Cuisine() {
  const [cuisine, setCuisine] = useState([])
  let params = useParams()
  
  async function getCuisine (name){
    // const data = await fetch(`https://api.edamam.com/search?q=${name}&app_id=2540baed&app_key=4fb88161d80bc496e2eaa1acf8119eb8`)
    // testFetch(name)
    // const recipes = await data.json()
    const recipes = await cuisineFetch(name)
    localStorage.setItem("searched", JSON.stringify(recipes.hits))
    setCuisine(recipes.hits)
  }

  useEffect(() => {
    getCuisine(params.type)
    console.log(params.type)
  },[params.type])
  console.log(cuisine)
  return (
    <div className="cuisine-container">
      {cuisine.map((el, index) => {
        return (
          <div key={index} className="cuisine-list">
            <Link to={"/recipes/detail-2/" + index}>
              <h4>{el.recipe.label}</h4>
              <img src={el.recipe.image} alt="" />
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default Cuisine