import React from 'react'
import Navbar from '../../components/Navbar';
import RamdonRecipe from './components/RandomRecipe'
import DietPicker from './components/DietPicker'
import PopularMainDish from './components/PopularMainDish';

import './HomeStyle.css'

export function Home() {
  return (
    <div className='homepage'>
      <Navbar />
      <RamdonRecipe />
      <DietPicker />
      <PopularMainDish />
    </div>
  )
}
