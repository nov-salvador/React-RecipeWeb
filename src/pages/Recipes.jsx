import { BrowserRouter, Route, Routes } from "react-router-dom";
import Category from "../components/Category";
import Trending from "../components/Trending";
import Veggies from "../components/Veggies";
import Cuisine from "./Cuisine";
import Dessert from "../components/Dessert";
import Search from "../components/Search";
import SearchedItems from "./SearchedItems";
import RecipeDetail from "./RecipeDetail";
import EdaRecipeDetail from "./EdaRecipeDetail";

function Recipes() {
  return (
    <div className="recipe">
        <Search/>
        <div>
          <Category/>
        </div>
        <Routes>
          <Route path="" element={<div>
              <Trending/>
              <Veggies/>
            </div>}> 
            
          </Route>
          <Route path="/cuisine/:type" element={<Cuisine />}></Route>
          <Route path="/searched/:search" element={<SearchedItems/>}></Route>
          <Route path="/detail/:name" element={<RecipeDetail/>}></Route>
          <Route path="/detail-2/:name" element={<EdaRecipeDetail/>}></Route>
        </Routes>
       
        
        
    </div>
  );
}

export default Recipes;