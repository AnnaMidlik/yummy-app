import React from 'react';
import { Link } from 'react-router-dom';
import './DietPickerStyle.css'
import itemData from '../../../../data/dietCategoriesItems';


export function DietPicker() {
  const showDietItem = (items) => {
    return items.map(item => (
      <div className='dietItem' key={item.title}>
        <Link to={`/yummy-app/diet/${item.title.replace(' ', '-').toLocaleLowerCase()}`}>
          <img src={item.img} alt={item.title} />
          <p>{item.title}</p>
        </Link>
      </div>
    ))
  }
  return (
    <div className='dietPickerContainer'>
      <div className='dietPickerHeader'><h2>Find the perfect recipe</h2></div>
      <div className="dievPickerCategories">
        {showDietItem(itemData)}
      </div>
    </div>
  )
}

