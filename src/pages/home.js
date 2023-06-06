import React from 'react';
import Footer from "../components/footer";
import Cards from '../components/cards';
import Slider from '../components/slider/slider';
import Navbar from '../components/aNavbar';
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