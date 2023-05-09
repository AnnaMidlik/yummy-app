import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './SimilarRecipeStyle.css'
import '@splidejs/react-splide/css';

export function SimilarRecipe({ id }) {
  const [similarRecipe, setSimilarRecipe] = useState([]);
  useEffect(() => {
    getSimilar(id)
  }, [id])
  const getSimilar = async (id) => {
    const url = `https://api.spoonacular.com/recipes/${id}/similar?apiKey=${process.env.REACT_APP_API_KEY}&number=10`
    const api = await fetch(url);
    const data = await api.json();
    setSimilarRecipe(data)
  }
  return (
    <div className='similarRecipeContainer'>
      <h2 >Similar Recipes</h2>
      <ul>{similarRecipe.map(recipe => <li
        key={recipe.id}>
        <Link to={`/yummy-app/recipe/${recipe.id}`}>
          {recipe.title}
        </Link>
      </li>)}</ul>
    </div>
  )
}
