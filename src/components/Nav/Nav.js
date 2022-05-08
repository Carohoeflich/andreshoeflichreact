import React from 'react'

const Nav = () => {

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

let isInViewport = function(elem){
  let distance = elem.getBoundingClientRect();
  return (
      distance.top >= 0 &&
      distance.left >= 0 &&
      distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      distance.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

let whereTo = document.querySelectorAll(".navTest");

window.addEventListener('scroll', function(event){
  whereTo.forEach(element => {
      if (isInViewport(element)){
          element.classList.add('.active');
      }
  });
});
  return (
    <nav>
  <ul class="menu">
    <li><a class="navTest " href="#home">Home</a></li>
    <li><a class="navTest " href="#about">About</a></li>
    <li><a class="navTest " href="#music">Music</a></li>
    <li><a class="navTest " href="#contact">Contact</a></li>
    <li><a href="/Shop/shop.html">Shop</a></li>
  </ul>
</nav>
  )
}

export default Nav;