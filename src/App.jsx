import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from "./components/Hero/Hero";
import Products from './components/Products/Products';
import Subscribe from './components/Subscribe/Subscribe';
import Footer from './components/Footer/Footer';

const App = () => {
  React.useEffect(() => {})
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

export default App
