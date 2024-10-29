import React from 'react'
import Subscribe from '../Subscribe/Subscribe'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Products from '../Products/Products'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <Products />
      <Subscribe />
      <Footer />
    </div>  
  )
}

export default Home
