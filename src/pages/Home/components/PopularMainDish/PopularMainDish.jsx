import React, { useState, useEffect } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Link } from 'react-router-dom';
import '@splidejs/react-splide/css';
import RecipeBox from '../../../../components/RecipeBox'

export function PopularMainDish() {
  const [popularMainDishRecipe, setPopularMainDishRecipe] = useState([]);
  useEffect(() => {
    getMainDish()
  }, [])
  const getMainDish = async () => {
    const checkLocalItems = localStorage.getItem('popularMainDish')
    if (checkLocalItems) {
      setPopularMainDishRecipe(JSON.parse(checkLocalItems))
    } else {
      const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&type=main-course&number=20`
      const api = await fetch(url);
      const data = await api.json();
      console.log(data.results)
      localStorage.setItem('popularMainDish', JSON.stringify(data.results))
      setPopularMainDishRecipe(data.results)
    }
  }
  return (
    <div className='recipeBoxesContainer'>
      <div className="recipeHeader">Popular Main Dish</div>
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
        {popularMainDishRecipe.map(slide => {
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
