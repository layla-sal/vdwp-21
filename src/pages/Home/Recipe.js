import React from "react";
import style from "./recipe.module.css";

const Recipe = ({ title, cuisinetype, recipelink, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <img className={style.image} src={image} alt=""></img>
      <h1>{title}</h1>
      <h2>{cuisinetype}</h2>
      <a href={recipelink}>Link to Full Recipe</a>
      <ul>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
    </div>
  );
};
export default Recipe;
