import React from 'react'

const Navbar = () => {
  return (
   <div><div class="wave">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
        </svg>
    </div>
    <nav>
        <ul>
            <li><a href="/index.html">Go back←</a></li>
            <li><a href="#product">Products</a></li>
            <li><a href="#">Account</a></li>
            <li><a href="/Shop/login.html">Log In</a></li>
            <li><a href="#"><img src="/Shop/shop-img/shopping-cart-white.png" alt=""/></a></li>
        </ul>
    </nav>
    </div>
  )
}

export default Navbar