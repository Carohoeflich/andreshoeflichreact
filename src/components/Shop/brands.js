import React from 'react'
import Brand1 from '../../assets/img/logo-godrej.png'
import Brand2 from '../../assets/img/logo-coca-cola.png'
import Brand3 from '../../assets/img/logo-oppo.png'
import Brand4 from '../../assets/img/logo-paypal.png'
import Brand5 from '../../assets/img/logo-philips.png'





const Brands = () => {
  return (
    <div class="brands">
        <h1>Brands working with us</h1>
        <div class="small-container">
            <div class="row">
                <div class="col-5">
                    <img src={Brand1} alt=""/>
                </div>
                <div class="col-5">
                    <img src={Brand2}  alt=""/>
                </div>
                <div class="col-5">
                    <img src={Brand3}  alt=""/>
                </div>
                <div class="col-5">
                    <img src={Brand4}  alt=""/>
                </div>
                <div class="col-5">
                    <img src={Brand5}  alt=""/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Brands