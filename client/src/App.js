import "./App.css";
import CardContainer from "./components/CardContainer";
import CreateRecipe from "./components/CreateRecipe";

let url =
  "https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg";
let arr = [
  {
    title: "Receta1",
    image: url,
    diets: ["veganoo"],
  },
  {
    title: "Receta2",
    image: url,
    diets: ["veganoo"],
  },
  {
    title: "Receta3",
    image: url,
    diets: ["veganoo"],
  },
  {
    title: "Receta4",
    image: url,
    diets: ["veganoo"],
  },
  {
    title: "Receta2",
    image: url,
    diets: ["veganoo"],
  },
  {
    title: "Receta3",
    image: url,
    diets: ["veganoo"],
  },
  {
    title: "Receta4",
    image: url,
    diets: ["veganoo"],
  },
  {
    title: "Receta2",
    image: url,
    diets: ["veganoo"],
  },
  {
    title: "Receta3",
    image: url,
    diets: ["veganoo"],
  },
  {
    title: "Receta4",
    image: url,
    diets: ["veganoo"],
  },
  {
    title: "Receta2",
    image: url,
    diets: ["veganoo"],
  },
  {
    title: "Receta3",
    image: url,
    diets: ["veganoo"],
  },
  {
    title: "Receta4",
    image: url,
    diets: ["veganoo"],
  },
  {
    title: "Receta2",
    image: url,
    diets: ["veganoo"],
  },
  {
    title: "Receta3",
    image: url,
    diets: ["veganoo"],
  },
  {
    title: "Receta4",
    image: url,
    diets: ["veganoo"],
  },
];

function App() {
  return (
    <div className="App">
      <div>
        <CreateRecipe />
      </div>
      <CardContainer data={arr} />
    </div>
  );
}

export default App;
