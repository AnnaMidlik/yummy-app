import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export function Recipe() {
  const params = useParams();
  const [recipe, setRecipe] = useState({});
  useEffect(() => {
    getRecipe(params.id)
  }, []);

  const getRecipe = async (id) => {
    const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    const api = await fetch(url);
    const data = await api.json();
    console.log(data)
    // setResults(data)
  };
  return (
    <div>Recipe</div>
  )
}
