import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { cuisineFetch } from "../links/fetch"

function SearchedItems() {
  const [searchedRecipes, setSearchedRecipes] = useState([])
  let params = useParams()
  async function getSearchedRecipes (name){
    // const data = await fetch(`https://api.edamam.com/search?q=${name}&app_id=2540baed&app_key=4fb88161d80bc496e2eaa1acf8119eb8`)
    const recipes = await cuisineFetch(name)
    localStorage.setItem("searched", JSON.stringify(recipes.hits))
    setSearchedRecipes(recipes.hits)
  }

  useEffect(() => {
    getSearchedRecipes(params.search)
  },[params.search])
  return (
    <div className="searchedRecipes-container">
      {searchedRecipes.map((el, index) => {
        return (
          <Link to={"/recipes/detail-2/" + index} key={index} className="searchedRecipes-list">
            <h4>{el.recipe.label}</h4>
            <img src={el.recipe.image} alt=""/>
          </Link>
        )
      })}
    </div>
  )
}

export default SearchedItems