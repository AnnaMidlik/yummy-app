import React from 'react';
import './DietPickerStyle.css'
import itemData from '../../../../data/dietCategoriesItems';

export function DietPicker() {
  const showDietItem = (items) => {
    return items.map(item => (
      <div className='dietItem' key={item.title}>
        <img src={item.img} alt={item.title} />
        <p>{item.title}</p>
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

