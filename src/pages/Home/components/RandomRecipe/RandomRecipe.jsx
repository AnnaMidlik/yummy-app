import React, { useState, useEffect } from 'react'
import RecipeBox from '../../../../components/RecipeBox'
import './RandomRecipeStyle.css'

export function RandomRecipe() {
  const [randomRecipe, setRandomRecipe] = useState(JSON.parse(localStorage.getItem('randomRecipe')) || []);
  useEffect(() => {
    localStorage.setItem('randomRecipe', JSON.stringify(randomRecipe))
  }, [randomRecipe])
  useEffect(() => {
    getRadom()
  }, [])
  const getRadom = async () => {
    const url = `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=3`
    const api = await fetch(url);
    const data = await api.json();
    setRandomRecipe([...randomRecipe, data.recipes])
  }

  return (
    <div className='recipeBoxesContainer'>
      <div className="recipeHeader">Recipe Box</div>
      <div className='recipesBoxes'>
        <RecipeBox />
        <RecipeBox />
        <RecipeBox />
      </div>
      <div className="recipesDiet">
      </div>
    </div>
  )
}
