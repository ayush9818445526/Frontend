import React from 'react'
import Logo from '../asset/img/logo.jpg'
function Header() {
  return (
    <div className='header'>
        <img src={Logo}/>
        <h2>Expence Tracker</h2>
    </div>
  )
}

export default Header