import React from 'react'
import About from '../components/about/About'
import Catagories from '../components/catagories/Catagories'
import Courses from '../components/courses/Courses'
import Faqs from '../components/faqs/Faqs'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import Login from '../components/login/Login'
import Navbar from '../components/navbar/Navbar'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Catagories/>
      <Courses/>
      <Faqs/>
      <About/>
      <Footer/>
      <Login/>
    </div>
  )
}

export default Home