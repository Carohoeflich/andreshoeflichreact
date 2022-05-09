import React from 'react'
import Navbar from '../../components/Shop/Navbar'
import Landing from '../../components/Shop/landing'
import Products from '../../components/Shop/products'
import Brands from '../../components/Shop/brands'
import Footer from '../../components/Shop/footer'

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