import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../asserts/img/logo.png'
import Search from '../Search'
import './NavbarStyle.css'

export function Navbar() {
  return (
    <div className='navbar'>
      <div className="logo">
        <Link to='/yummy-app'>
          <img src={logo} alt="" />
        </Link>

      </div>
      <Search />
    </div>
  )
}

