import React, { useEffect } from 'react';
import bgVideo from '../../assets/media/LaCuraCorto.mp4';
import { gsap } from "gsap";
import MouseScroll from '../../assets/img/Mouse_Scroll.png';

const Landing = () => {

  useEffect(() =>{
  const Button = document.querySelector('.landingButton')
  gsap.from(Button, {opacity: 0, z:1, duration: 2})
  })

  return (
    <div><header id="home" class="section header">
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <div class="title">
      <h1>
        Andrés
        <span>Hoeflich</span>
      </h1>
      {/* <a href='#contact' className='landingButton'>Click for More</a> */}
    </div>
    <div class="container-scroll">
      <p><a href="#about">Scroll<img src={MouseScroll} alt="" /></a></p>
    </div>
    {/* <!-- VIDEO --> */}
    <video autoPlay loop muted class="bg-video">
      <source src={bgVideo} type="video/mp4" />
    </video>
    <div class="overlay"></div>
  </header></div>
  )
}




export default Landing;