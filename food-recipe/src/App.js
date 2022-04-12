import "./App.css";
import { useState } from "react";
import Axios from "axios";
import Recipetile from "./recipetile/Recipetile";

function App() {
  const YOUR_APP_ID = "f2acc86f";
  const YOUR_APP_KEY = "e0fcffbf7b5a9386e00b785110b39539";
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [healthLabel, setHealthLabel] = useState("vegetarian");
  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabel}`;
  const getRecipeInfo = async () => {
    var result = await Axios.get(url);
    setRecipes(result.data.hits);
    console.log(result.data.hits);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    getRecipeInfo();
  };
  return (
    <div className="App">
      <h1 onClick={getRecipeInfo}>
        <u>Food Recipe Hub</u>🥗
      </h1>
      <form className="app__searchForm" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="type the Ingredient"
          autoComplete="Off"
          className="app__input"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <select name="" className="app__healhLabels">
          <option
            value="vegan"
            onChange={() => {
              setHealthLabel("vegan");
            }}
          >
            vegan
          </option>

          <option
            value="vegetarian"
            onChange={() => {
              setHealthLabel("vegetarian");
            }}
          >
            vegetarian
          </option>

          <option
            value="dairy-free"
            onChange={() => {
              setHealthLabel("dairy-free");
            }}
          >
            dairy-free
          </option>

          <option
            value="immuno-supportive"
            onChange={() => {
              setHealthLabel("immuno-supportive");
            }}
          >
            immuno-supportive
          </option>

          <option
            value=" wheat-free"
            onChange={() => {
              setHealthLabel(" wheat-free");
            }}
          >
            wheat-free
          </option>
        </select>
        <input className="app__submit" type="submit" value="Get Recipe" />
      </form>
      <div className="">
        {recipes.map((recipe) => {
          return <Recipetile recipe={recipe} />;
        })}
      </div>
    </div>
  );
}

export default App;
