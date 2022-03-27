import React from 'react'

function Footer() {
  return (
    <footer>
        <div className='footer-section'>
            <ul>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>About us</a></li>
                <li><a href='#'>Shop</a></li>
            </ul>   
        </div>
        <div className='footer-section'>
            <ul>
                <li><a href='#'>Login</a></li>
                <li><a href='#'>Register</a></li>
                
            </ul> 
        </div>
        <div className='footer-section'>
            <h2>Subscribe to our Newsletter! </h2>
            <form>
                <input placeholder='Enter Your Email'/>
                <button>Subscribe!</button>
            </form>
        </div>
    </footer>
  )
}

export default Footer