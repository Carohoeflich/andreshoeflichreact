import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PlayerImg from '../../assets/img/aplayercover.jpg'
import SpotifyImg from '../../assets/img/Iconos/spotifyicon.png'
import Lacura from '../../assets/media/lacura.mp3'

const Music = () => {


  window.onload = function () {
    const musicContainer = document.querySelector(".music-container")
    const playBtn = document.getElementById("play")
    const progress = document.querySelector(".progress")
    const progressContainer = document.querySelector(".progress-container")
    const volumenProgress = document.querySelector('.volume-progress')
    const volumenBtn = document.getElementById('volume')
    const audio = new Audio({Lacura});
    const volumenInput = document.getElementById('volumeInput')
    const navigation = document.querySelector('.navigation')



    function playSong() {
        musicContainer.classList.add('play')
        playBtn.querySelector('i.fas').classList.remove('fa-play')
        playBtn.querySelector('i.fas').classList.add('fa-pause')
        audio.play()
    }

    function pauseSong() {
        musicContainer.classList.remove('play')
        playBtn.querySelector('i.fas').classList.remove('fa-pause')
        playBtn.querySelector('i.fas').classList.add('fa-play')
        audio.pause()
    }

    function updateProgress(e) {
        /* console.log(e.srcElement.currentTime) */ //console logs current time of the song
        /* console.log(e.srcElement.duration) */ // console logs the duration of the whole song
        const {
            duration,
            currentTime
        } = e.srcElement
        const progressPercent = (currentTime / duration) * 100
        progress.style.width = `${progressPercent}%`
    }


    function setProgress(e) {
        const width = this.clientWidth
        /* console.log(width) */ //this gives me the total width of the song
        const clickX = e.offsetX
        /* console.log(clickX)  */ // this gives me the width of the part in the progress bar i clicked on
        const duration = audio.duration

        audio.currentTime = (clickX / width) * duration // this makes it so the song changes to the part you click on in real time
    }


    if (playBtn) {
        playBtn.addEventListener('click', () => {
            const isPlaying = musicContainer.classList.contains('play')

            if (isPlaying) {
                pauseSong()
            } else {
                playSong()
            }
        })

    }


    volumenInput.addEventListener('change', function (e) {
        audio.volume = e.currentTarget.value / 100;
    })

    volumenBtn.addEventListener('click', () => {
        const isVolumen = navigation.classList.contains('volumen')
        if (isVolumen) {
            navigation.classList.remove('volumen')
        } else {
            navigation.classList.add('volumen')
        }
    })


    audio.addEventListener('timeupdate', updateProgress)
    progressContainer.addEventListener('click', setProgress)

}

  return (
    <div><section id="music" class="section music">
    <h1></h1>
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

      <div className="navigation">
        <button id="play" className="action-btn">
          {/* <i class="fas fa-play"></i> */}
          <span className='fas fa-play'>
          <FontAwesomeIcon icon={["fas", "fa-play"]} />
          </span>
        </button>

        <div className="volume-progress-container">
          <div className="volume-progress"></div>
        </div>

        <button id="volume" className="action-btn" >
          {/* <i class="fas fa-volume-up"></i> */}
          <span className='fas fa-volume-up'>
          <FontAwesomeIcon icon={["fas", "fa-volume-up"]} />
          </span>
          <input id="volumeInput" type="range" />
        </button>
      </div>

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