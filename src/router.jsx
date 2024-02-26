import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Recipes from "./pages/Recipes";
import Settings from "./pages/Settings";
import NotFoundPage from "./pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    path:"/",
    element: <HomePage/>
  },
  {
    path:"/recipes",
    element: <Recipes/>
  },
  {
    path:"/settings",
    element: <Settings/>
  },
  {
    path:"*",
    element: <NotFoundPage/>
  },
  
])