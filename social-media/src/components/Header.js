import React from 'react'

function Header() {
  return (
    <div className='header'>
        <ul className='pages'>
            <li className='page'>Home</li>
            <li className='page'>About us</li>
            <li className='page'>Shop</li>
        </ul>
        <div className='user-login'>
            <a href="#">Login</a>
            <a href="#">Register</a>
        </div>
    </div>
  )
}

export default Header