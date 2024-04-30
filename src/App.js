import React from 'react'
import Navbaar from './Component/Navbaar'
import { Routes, Route } from 'react-router-dom'
import Product from './Component/Product'
import Home from './Component/Home'
import About from './Component/About'
import Contact from './Component/Contact'
import Login from './Component/Login'
import Addtocart from './Component/Addtocart'
import Footer from './Component/Footer'
import Newaapka from './Component/Newaapka'
import Newproduct from './Component/Newproduct'

export default function App() {
  return (
    <div>
      <div>
      <Navbaar/>
      </div>
      <div>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="product" element={<Product/>} />
          <Route path="contact" element={<Contact />} />
          <Route path="log" element={<Login />} />
          <Route path="cart" element={<Addtocart/>} />
          <Route path="harsh" element={<Newaapka/>} />
          < Route path="yash" element={<Newproduct />} />
         
        </Routes>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}
