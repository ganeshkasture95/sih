import React from 'react'
import { HiMenu } from "react-icons/hi"
import { RxCross2 } from "react-icons/rx"
import './nav'
import './navbar.css'

const Navbar = () => {
  return (

   <nav>
      <div className="container nav__container">
        <a href=""><h4>Ganesh</h4></a>
        <ul class= "nav__menu">
          <li><a href="/src/components/header/header.jsx"> Home </a></li>
          <li><a href="/src/components/about/About.jsx"> About </a></li>
          <li><a href="/src/components/"> Course </a></li>
          <li><a href="/src/components/"> Study Material </a></li>
          <li><a href="/src/components/contact/Contact.jsx"> Contact </a></li>
        </ul>
        <button><HiMenu/></button>
        <button><RxCross2/></button>
      </div>
    </nav>

  )
}

export default Navbar