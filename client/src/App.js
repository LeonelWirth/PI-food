import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pageComponents/Home";
import Landing from "./pageComponents/Landing";
import NewRecipe from "./pageComponents/NewRecipe";
import Recipe from "./pageComponents/Recipe";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/newRecipe" element={<NewRecipe />} />
            <Route path="/recipe" element={<Recipe />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
