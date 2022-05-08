import React from 'react'
import shopImg from '../../assets/img/andreslentes2.png'

const Landing = () => {
  return (
    <section class="landing">
    <div class="row">
        <div class="col-2">
            <h1 >Andrés Hoeflich</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br/> Nobis quaerat, enim odit quia doloremque omnis.</p>
            <a href="#product"><button class="animate__animated animate__heartBeat animate__delay-2s">Products </button></a>
        </div>
        <div class="col-2 col-2img">
            <img class="animate__animated animate__fadeInRightBig" src={shopImg} alt=""/>
        </div>
    </div>

</section>
  )
}

export default Landing