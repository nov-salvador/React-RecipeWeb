import Footer from "./components/Footer";
import NavBar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import { Route, BrowserRouter as Router, RouterProvider, Routes } from "react-router-dom";
import { router } from "./router";
import Recipes from "./pages/Recipes";
import Settings from "./pages/Settings";
import Cuisine from "./pages/Cuisine";
import GoBackBtn from "./components/GoBackBtn";
function App() {
  return (
    <Router>
      <NavBar/>
      <div className="main">
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/recipes/*" element={<Recipes/>}></Route>
          <Route path="/settings" element={<Settings/>}></Route>
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
