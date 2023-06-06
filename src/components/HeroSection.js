import { Button } from './Button'
import React from 'react'
import './HeroSection.css';
import '../App.css'
import HeroSlider, {Slider} from "hero-slider";


function HeroSection() {
  return (
    <div className='hero-container'>
         <video src='/public/videos/video-2.mp4' autoPlay loop muted />
         <div className='image-heading'>
         <img src="/images/wathaequi logo 002.png" alt="Your Image" className='homeimg' />
         <h1 className='wath11'>"Wathaequi, votre gouvernement en ligne"</h1>
         </div>
    </div>






















    // <HeroSlider
    //    slidingAnimation="left_to_right"
    //    orientation="horizontal"
    //    initialSlide={1}
    //    onBeforeChange={(previousSlide, nextSlide)=>console.log("onBeforeChange",previousSlide,nextSlide)}
    //    onChange={nextSlide=>console.log("onChange",nextSlide) }
    //    onAfterChange={nextSlide=>console.log("onAfterChange",nextSlide)}
    //    style={{
    //     backgroundColor: "rgba(0, 0, 0, 0.33)"
    //    }}
    //    settings={{
    //     slidingDuration: 250,
    //     slidingDelay: 100,
    //     shouldAutoplay: true,
    //     shoulDisplayButtons:true,
    //     autoplayDuration:5000,
    //     height:"100"
    //    }}
    // >
    //   <Slide 
    //      background={{
    //       backgroundImage: bogliasco,
    //       backgroundAttachment:"fixed"
    //      }}
    //   />
    //   <Slide 
    //      background={{
    //       backgroundImage: countryClare,
    //       backgroundAttachment:"fixed"
    //      }}
    //   />


      
    // </HeroSlider>


  )
}

export default HeroSection