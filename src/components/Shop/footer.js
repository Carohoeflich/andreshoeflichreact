import React from 'react'
import fb from '../../assets/img/Iconos/facebook.svg'
import ig from '../../assets/img/Iconos/instagram.svg'
import twt from '../../assets/img/Iconos/twitter.svg'
import spotify from '../../assets/img/Iconos/spotify.svg'

const Footer = () => {
  return (
    <footer>
        <h2>&copy; Andrés Hoeflich</h2> <br/>
        Find me on: <br/>
        <div class="iconosshop">
            <a href="https://www.facebook.com/andreshoeflich"><img src={fb} alt=""/></a><a href="https://www.instagram.com/andreshoeflich"><img src={ig} alt=""/></a><a href="https://twitter.com/andreshoeflich"><img src={twt} alt=""/></a><a href="https://open.spotify.com/artist/1GzN3c6dFS7P8fCgIskBWt?si=exxkjjVZQ4ig7vSmIIBG6g"><img src={spotify} alt=""/></a>
           </div>
    </footer>
  )
}

export default Footer