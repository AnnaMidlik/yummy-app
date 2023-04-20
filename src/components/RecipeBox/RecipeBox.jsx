import React from 'react'
import './RecipeBoxStyle.css'

export function RecipeBox({ recipe }) {
  const { image, title } = recipe
  return (
    <div className='recipeBox'>
      <img src={image} alt="" />
      <div className="content">
        <h2>{title}</h2>
      </div>
    </div>
  )
}
