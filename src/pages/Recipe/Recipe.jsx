import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './RecipeStyle.css';

export function Recipe() {
  const params = useParams();
  const [recipe, setRecipe] = useState({ extendedIngredients: [] });
  const { title, image, extendedIngredients, instructions } = recipe;
  useEffect(() => {
    getRecipe(params.id)
  }, []);

  const getRecipe = async (id) => {
    const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    const api = await fetch(url);
    const data = await api.json();
    console.log(data)
    setRecipe(data)
  };
  return (
    <div className='recipeContainer'>
      <div className="recipeheader">{title}</div>
      <div className='recipeInfo'> <img src={image} alt="recipe-img" />
        {/* <p>ready in {recipe.readyInMinutes}</p> */}
        <div className='recipeingridients'>
          <h2>Ingridients : </h2>
          <ul >
            {extendedIngredients.map(el => <li>{el.name}</li>)}
          </ul>
        </div>
      </div>
      {instructions
        && <div className='recipeinstruction'>
          <h2> INSTRUCTIONS:</h2>
          <p>{instructions}</p>
        </div>}
    </div>
  )
}
