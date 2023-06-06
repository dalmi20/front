import React from 'react';
import '../../App.css'
import HeroSection from '../HeroSection'
import Footer from '../Footer';
import Cards from '../Cards';
import Slider from '../slider/Slider';
import Navbar from '../aNavbar';
function Home(){
    return(
      <>
      <Navbar />
        <Slider />
        <Cards />
        <Footer />
      </>

    )
}

export default Home;