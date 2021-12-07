import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pageComponents/Home";
import Landing from "./pageComponents/Landing";
import NewRecipe from "./pageComponents/NewRecipe";
import Recipe from "./pageComponents/Recipe";
import Default from "./pageComponents/Default";

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
            <Route path="/recipe/:id" element={<Recipe />} />
            <Route path="*" element={<Default />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
