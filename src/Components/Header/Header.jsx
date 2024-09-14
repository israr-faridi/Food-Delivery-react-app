import React from 'react'
import "./Header.css"
import { Button, WheatBtn } from '../../Common/Button/Button'


const Header = () => {
  return (
    <div className='Header'>
      <div className="logo">
        <img src="/assets/images/logo.png" alt="" />
      </div>
      <nav>
        <ul>
          <li>Restaurants</li>
          <li>Recipes</li>
          <li>About</li>
          <li>Page</li>
        </ul>
      </nav>
      <div className="button">
        <WheatBtn text='Login' />
        <Button text="Sign Up" />
      </div>
    </div>
  )
}

export default Header
