import React from 'react';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import itemData from '../../data/dietCategoriesItems';
import DietRecipeResults from './components/DietRecipeResults/';
import './DietPageStyle.css'

export function DietPage() {
  const params = useParams()
  return (
    <div className='dietContainer'>
      <div className="dietHeader">{params.dietName}</div>
      <div className='dietContent'>
        <div className='dietFilters'>
          {itemData.map(item => <NavLink
            to={`/yummy-app/diet/${item.title.replace(' ', '-').toLocaleLowerCase()}`}
            key={item.title}>
            <h2 >{item.title}</h2>
          </NavLink>)}
        </div>
        <DietRecipeResults />
      </div>
    </div>
  )
}
