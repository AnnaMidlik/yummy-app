import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RecipeBox from '../../components/RecipeBox'
import itemData from '../../data/dietCategoriesItems';
import './DietPageStyle.css'

export function DietPage() {
  const params = useParams()
  const [dietRecipe, setDietRecipe] = useState([])
  useEffect(() => {
    getMainDish()
  }, [])
  const getMainDish = async () => {
    const checkLocalItems = localStorage.getItem(params.dietName)
    if (checkLocalItems) {
      setDietRecipe(JSON.parse(checkLocalItems))
    } else {
      const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&diet=${params.dietName}&number=20`
      const api = await fetch(url);
      const data = await api.json();
      console.log(data.results)
      localStorage.setItem(params.dietName, JSON.stringify(data.results))
      setDietRecipe(data.results)
    }
  }

  return (
    <div className='dietContainer'>
      <div className="dietHeader">{params.dietName}</div>
      <div className='dietContent'>
        <div className='dietFilters'>
          {itemData.map(item => <h2 key={item.title}>{item.title}</h2>)}
        </div>
        <div className='dietRecipeResults'>
          {dietRecipe.map(el => <div key={el.id} className="dietitem">
            <RecipeBox
              recipe={el} />
          </div>)}
        </div>
      </div>
    </div>
  )
}
