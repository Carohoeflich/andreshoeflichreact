import React from 'react'
import PlayerImg from '../../assets/img/aplayercover.jpg'
import SpotifyImg from '../../assets/img/Iconos/spotifyicon.png'
import Lacura from '../../assets/media/lacura.mp3'
import ReactAudioPlayer from 'react-audio-player'

const Music = () => {

  return (
    <div><section id="music" class="section music">
    <h1>Check out his music!</h1>
    <div className="music-container">
      <div className="music-info">
        <h4 id="title">La Cura</h4>
        <div className="progress-container">
          <div className="progress"></div>
        </div>
      </div>


      <div className="img-container">
        <img src={PlayerImg} alt="music-cover" />
      </div>

      <ReactAudioPlayer
      src={Lacura}
      controls
      loop />

    </div>
    <p><a href="https://open.spotify.com/artist/1GzN3c6dFS7P8fCgIskBWt?si=exxkjjVZQ4ig7vSmIIBG6g"><img
          src={SpotifyImg} alt="" />Open his profile on Spotify!</a></p>
    <div className="wave">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path
          d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
          class="shape-fill"></path>
      </svg>
    </div>
  </section></div>
  )
}

export default Music