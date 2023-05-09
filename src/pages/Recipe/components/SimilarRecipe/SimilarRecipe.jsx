import React, { useState, useEffect } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

export function SimilarRecipe({ id }) {
  const [similarRecipe, setSimilarRecipe] = useState([]);
  useEffect(() => {
    getSimilar()
  }, [])
  const getSimilar = async () => {
    const url = `https://api.sponacular.com/recipes/${id}/similar?apiKey=${process.env.REACT_APP_API_KEY}&number=2`
    const api = await fetch(url);
    const data = await api.json();
  }
  return (
    <div className='recipeBoxesContainer'>
      <div className="recipeHeader">Similar Recipes</div>
    </div>
  )
}
