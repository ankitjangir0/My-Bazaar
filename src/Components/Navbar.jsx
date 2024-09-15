import React from 'react'
import  { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Navbar() {
const item = useSelector((state)=>state.cart)

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    
    setMenuOpen(!isMenuOpen);
  };


  return (
    <>
    <div className="nav">
      <nav className={`navbar ${isMenuOpen ? 'open' : ''}`} >
        <div className="logo">MY Bazaar</div>
        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <NavLink to={"/home"}>Home</NavLink>
          <NavLink to={"/cart"}>Cart : {item.length}</NavLink>
          <NavLink to={"/products"}>Products</NavLink>
          <NavLink to={"/about"}>About Us</NavLink>
          <NavLink to={"/signup"}>Sign-Up</NavLink>
        </ul>
        <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
         
        </div>
      </nav>
      </div>
    </>
  )
}

export default Navbar