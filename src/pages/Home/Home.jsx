import React from 'react'
import RamdonRecipe from './components/RandomRecipe'
import DietPicker from './components/DietPicker'
import PopularMainDish from './components/PopularMainDish';

import './HomeStyle.css'

export function Home() {
  return (
    <div className='homepage'>
      <RamdonRecipe />
      <DietPicker />
      <PopularMainDish />
    </div>
  )
}
