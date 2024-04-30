import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Component/img/logo.png'
import { BsCartCheckFill } from "react-icons/bs";
import '../CSS/Navbaar.css'
import { AppContext } from '../contextApi/Products';
import { useContext } from 'react';
import { anmol } from '../contextApi/Products';
export default function Navbaar() {
  const anmol = useContext(AppContext);
  const {num} = anmol.statemanagement;

  return (
    <div>
      <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand logo" to="home"><img src={logo} alt="" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-auto ">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="product">Product</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="contact">Contact</Link>
        </li>
      </ul>
    <div className='navbar-nav  '>
        <Link className="nav-link text-dark words-dark color logout-function log " to="log">Log Out</Link>
        <Link className="nav-link" to="cart"><BsCartCheckFill/><span className='number'>{num}</span>    
</Link>
        </div>
    </div>
  </div>
</nav>
      </div>
    </div>
  )
}
