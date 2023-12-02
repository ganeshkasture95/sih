import React from 'react'
import BooksImage from '../../assests/images/header.svg'
import './header.css'

const Header = () => {
  return (

    <header>

      <div className="container header__container">
        <div className="header__left">

          <h1>Together towards Horizen</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia laboriosam odit magni reiciendis voluptatum sunt optio unde possimus itaque quas?</p>
          <a href="/src/pages/Cources.jsx" class="btn btn-primary">Get Started</a>
        </div>
        <div className="header__right">

          <div className="header__right-image">
            <img src={BooksImage} alt="Book Image"/>
          </div>
        </div>

      </div>
    </header>

  )
}

export default Header
