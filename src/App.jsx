import React from 'react'
import Analytics from './components/Analytics';
import Cards from './components/Cards';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Newsleter from './components/Newsletter';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsleter />
      <Cards />
      <Footer />
    </div>
  )
}

export default App