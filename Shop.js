import React from 'react'
import Navbar from './src/components/Shop/Navbar'
import Landing from './src/components/Shop/Landing'
import Products from './src/components/Shop/products'
import Brands from './src/components/Shop/brands'
import Footer from './src/components/Shop/footer'

const Shop = () => {
  return (
    <>
    <Navbar></Navbar>
    <Landing></Landing>
    <Products></Products>
    <Brands></Brands>
    <Footer></Footer>
    </>
  )
}

export default Shop