import React from 'react'
import Product1 from '../../assets/img/product-1.png'
import Product2 from '../../assets/img/product-2.jpg'
import Product3 from '../../assets/img/product-3.png'
import Product4 from '../../assets/img/product-4.jpg'
import Product5 from '../../assets/img/product-5.png'
import Product6 from '../../assets/img/product-6.png'
import Product7 from '../../assets/img/product-7.jpg'
import Product8 from '../../assets/img/product-8.png'
import Product9 from '../../assets/img/product-9.png'
import Product10 from '../../assets/img/product-10.png'
import Product11 from '../../assets/img/product-11.png'
import Product12 from '../../assets/img/product-12.png'

const Products = () => {
  return (
    <section id="product" class="container">
        <div class="small-container">
            <h2>Merch available</h2>
            <div class="row">
                <div class="col-4">
                    <img src={Product1} alt=""/>
                    <h4>T-Shirt</h4>
                    <p>350.00 MXN</p>
                </div>
                <div class="col-4">
                    <img src={Product2} alt=""/>
                    <h4>T-Shirt</h4>
                    <p>320.00 MXN</p>
                </div>
                <div class="col-4">
                    <img src={Product3} alt=""/>
                    <h4>T-Shirt</h4>
                    <p>350.00 MXN</p>
                </div>
                <div class="col-4">
                    <img src={Product4} alt=""/>
                    <h4>T-Shirt</h4>
                    <p>380.00 MXN</p>
                </div>
            </div>
        </div>
        <div class="small-container">
            <div class="row">
                <div class="col-4">
                    <img src={Product5} alt=""/>
                    <h4>T-Shirt</h4>
                    <p>350.00 MXN</p>
                </div>
                <div class="col-4">
                    <img src={Product6} alt=""/>
                    <h4>Hoodie</h4>
                    <p>680.00 MXN</p>
                </div>
                <div class="col-4">
                    <img src={Product7} alt=""/>
                    <h4>T-Shirt</h4>
                    <p>350.00 MXN</p>
                </div>
                <div class="col-4">
                    <img src={Product8} alt=""/>
                    <h4>Baseball cap</h4>
                    <p>260.00 MXN</p>
                </div>
            </div>
        </div>
        <div class="small-container">
            <div class="row">
                <div class="col-4">
                    <img src={Product9} alt=""/>
                    <h4>T-Shirt</h4>
                    <p>350.00 MXN</p>
                </div>
                <div class="col-4">
                    <img src={Product10} alt=""/>
                    <h4>T-Shirt</h4>
                    <p>380.00 MXN</p>
                </div>
                <div class="col-4">
                    <img src={Product11} alt=""/>
                    <h4>T-Shirt</h4>
                    <p>350.00 MXN</p>
                </div>
                <div class="col-4">
                    <img src={Product12} alt=""/>
                    <h4>T-Shirt</h4>
                    <p>360.00 MXN</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Products