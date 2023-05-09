import React, { useState, useEffect } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Link } from 'react-router-dom';
import '@splidejs/react-splide/css';
import RecipeBox from '../../../../components/RecipeBox'
import './RandomRecipeStyle.css'

export function RandomRecipe() {
  const [randomRecipe, setRandomRecipe] = useState([]);
  useEffect(() => {
    getRadom()
  }, [])
  const getRadom = async () => {
    const checkLocalItems = localStorage.getItem('randomRecipe')
    if (checkLocalItems) {
      setRandomRecipe(JSON.parse(checkLocalItems))
    } else {
      const url = `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=20`
      const api = await fetch(url);
      const data = await api.json();
      localStorage.setItem('randomRecipe', JSON.stringify(data.recipes))
      setRandomRecipe(data.recipes)
    }
  }
  return (
    <div className='recipeBoxesContainer'>
      <div className="recipeHeader">Recipe Box</div>
      <Splide className='recipesBoxes'
        aria-labelledby="basic-example-heading"
        options={{
          perPage: 3,
          perMove: 1,
          gap: '1rem',
          speed: 1500,
          drag: 'free',
          width: '100%',
          pagination: false,
          classes: {
            prev: 'splide__arrow splide__arrow--prev arrow prev-arrow',
            next: 'splide__arrow splide__arrow--next arrow next-arrow',

          },
        }}
      >
        {randomRecipe.map(slide => {
          return <SplideSlide
            key={slide.id}>
            <Link to={`recipe/${slide.id}`}>
              <RecipeBox recipe={slide} />
            </Link>
          </SplideSlide>
        })}
      </Splide>
    </div>
  )
}
