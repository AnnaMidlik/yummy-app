import React from 'react'
import Navbar from '../../components/Navbar';
import RamdonRecipe from './components/RandomRecipe'

import './HomeStyle.css'

export function Home() {
  return (
    <div className='homepage'>
      <Navbar />
      <RamdonRecipe />
    </div>
  )
}
