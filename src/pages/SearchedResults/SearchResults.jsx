import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RecipeBox from '../../components/RecipeBox';
import './SearchedResultsStyle.css'

export function SearchResults() {
  const params = useParams();
  const [results, setResults] = useState([]);
  useEffect(() => {
    getResults(params.search)
  }, [])
  const getResults = async (search) => {
    const url = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.REACT_APP_API_KEY}&ingredients=${search}&number=8&ignorePantry=true`
    const api = await fetch(url);
    const data = await api.json();
    setResults(data)
  }
  const showResults = () => {
    return results.map(item => {
      return <RecipeBox recipe={item} />
    })
  }
  return (
    <div className="resultsContainer">
      <div className='resultsGeader'>Results</div>
      <div className='resultsContent'>
        {showResults()}
      </div>
    </div>

  )
}
