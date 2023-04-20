import React from 'react'
import logo from '../../asserts/img/logo.png'
import './NavbarStyle.css'

export function Navbar() {
  return (
    <div className='navbar'>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className='links'>
        Searsh
        <input type="text" />
      </div>
    </div>
  )
}

