import React from 'react'
import ContactImg1 from '../../assets/img/andresdime.jpg'
import ContactImg2 from '../../assets/img/andresfondonegro.jpg'
import fb from '../../assets/img/Iconos/facebook.svg'
import ig from '../../assets/img/Iconos/instagram.svg'
import twt from '../../assets/img/Iconos/twitter.svg'
import spotify from '../../assets/img/Iconos/spotify.svg'

const Contact = () => {
  return (
    <div><section id="contact" class="section contact">
    <div class="contact-container">
      <div class="left">
        <div class="left-img">
          <img src={ContactImg1} alt="" />
          <p>
            <h1>Find me on:</h1>
          </p>
        </div>
        <div class="iconos">
          <a href="https://www.facebook.com/andreshoeflich"><img src={fb} alt=""/></a><a
            href="https://www.instagram.com/andreshoeflich"><img src={ig} alt=""/></a><a
            href="https://twitter.com/andreshoeflich"><img src={twt} alt="" /></a><a
            href="https://open.spotify.com/artist/1GzN3c6dFS7P8fCgIskBWt?si=exxkjjVZQ4ig7vSmIIBG6g"><img
              src={spotify} alt="" /></a>
        </div>
      </div>
      <div class="right">
        <div class="contact-forms">
          <div class="wrapper">
            <h2>MESSAGE ME</h2>
            <form action="" method="POST">
              <div class="form-group">
                <label for="name">Full Name</label>
                <input type="text" name="Name" id="name" placeholder="Write your name" required minlength="3"
                  maxlength="40" />
              </div>
              <div class="form-group">
                <label for="email">Email Address</label>
                <input type="email" name="Email" id="email" placeholder="email" required />
              </div>
              <div class="form-group">
                <label for="message">Message</label>
                <textarea name="Message" id="message" rows="5" placeholder="Type your message"></textarea>
              </div>
              <div class="form-group">
                <button type="submit" class="submit">Send <i class="far fa-envelope"></i></button>
              </div>
            </form>
          </div>
        </div>
        <div class="right-img">
          <img src={ContactImg2} alt=""/></div>
      </div>
    </div>
  </section></div>
  )
}

export default Contact