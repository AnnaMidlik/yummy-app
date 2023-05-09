import React, { useState, useEffect } from 'react';
import RecipeBox from '../../../../components/RecipeBox'
import { useParams, Link } from 'react-router-dom';

export function DietRecipeResults() {
  const params = useParams()
  const [dietRecipe, setDietRecipe] = useState([])
  const getResults = async (name) => {
    const checkLocalItems = localStorage.getItem(name)
    if (checkLocalItems) {
      setDietRecipe(JSON.parse(checkLocalItems))
    } else {
      const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&diet=${name}&number=20`
      const api = await fetch(url);
      const data = await api.json();
      console.log(data.results)
      localStorage.setItem(name, JSON.stringify(data.results))
      setDietRecipe(data.results)
    }
  }
  useEffect(() => {
    console.log(params.dietName)
    getResults(params.dietName)
  }, [params.dietName])
  return (
    <div className='dietRecipeResults'>
      {dietRecipe.map(el => <div key={el.id} className="dietitem">
        <Link to={`/yummy-app/recipe/${el.id}`}>
          <RecipeBox
            recipe={el} />
        </Link>
      </div>)}
    </div>
  )
}
