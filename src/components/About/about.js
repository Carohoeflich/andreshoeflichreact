import React from 'react'
import "../../scss/_about.scss"
import AboutImg from '../../assets/img/andreslentes2.png';

const About = () => {
  return (
    <div>
    <div id="about" class="about-container">
      <div class="about-text">
        <div class="about-title">
          <h1> <span> Andrés </span> Hoeflich</h1>
          <p>In early years, at the age of 15, he developed his musical career, getting involved with many bands of
            different musical genres, but it was not until his 20s when he moved to Mexico City, where he created his
            musical style in rock, electronics, and trip hop influencing the city's underground scene. <br /> In 2017 he
            had the opportunity to win a national band contest with his then band Modoaural, that event led him to
            share stages with world-class talent and international festivals. <br /> After the disintegration of
            Modoaural in 2019, he began his solo career where he proposed a full band format with guest musicians and
            various intruments that make a mix of Rock, Dj set and Jazz. <br /> His first solo single "La Cura" had
            great public acceptance followed by the release of his debut album "En la marea" released in 2021. <br /> He
            is currently trying to establish himself as a fresh and new proposal for independent music in México and
            the world.</p>
            </div>
  </div>
      <img class="about-imagen" src={AboutImg}
        alt="" />
  </div>
  </div>
  )
}

export default About;