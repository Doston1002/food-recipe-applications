import React from "react";
import "./style.css";
function Recipetile({ recipe }) {
  return (
    <div className="recipeTitle">
      <img
        className="recipeTitle__image"
        src={recipe["recipe"]["image"]}
        alt="title-image"
        onClick={() => window.open(recipe["recipe"]["url"])}
      />
      <p className="recipeTitle__name">{recipe["recipe"]["label"]}</p>
    </div>
  );
}

export default Recipetile;
