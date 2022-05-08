import React from 'react'
import Photos1 from '../../assets/img/escenario-1.jpg';
import Photos2 from '../../assets/img/escenario-2.jpg';

const Photos = () => {
  return (
    <div><section class="section photos">
    <div class="row">
      <div class="col-2">
        <img src={Photos1} alt="" />
      </div>
      <div class="col-2">
        <img src={Photos2} alt="" />
      </div>
    </div>
  </section>
</div>
  )
}

export default Photos