import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './SearchStyle.css'

export function Search() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const submitForm = (e) => {
    e.preventDefault();
    navigate(`/yummy-app/?results=${search}`)
  }
  return (
    <form className='searchComponent' onSubmit={submitForm}>
      <input type="text" placeholder='Type here...' value={search}
        onChange={(e) => { setSearch(e.target.value) }} />
      <button>search</button>
    </form>
  )
}
