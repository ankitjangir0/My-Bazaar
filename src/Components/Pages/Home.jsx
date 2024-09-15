import React from 'react'
import ProductS from './ProductS'
import { Link } from 'react-router-dom'

import img1 from './images/lee-campbell-GI6L2pkiZgQ-unsplash.jpg'
import img2 from './images/ip10.png'
import img3 from './images/ip.jfif'
import img4 from './images/ip5.jfif'
import img5 from './images/z26.jpg'
import img6 from './images/ip8.jfif'
import img7 from './images/ip9.jfif'
import img8 from './images/z23.jpg'

function Home() {
  return (
    <>
     <div id="what">
        <div class="a1">
            <h1>WHAT DO YOU WANT</h1>
        </div>
        <div class="a2">
           <Link><img src={img1} alt="" /></Link>
           <Link><img src={img2} alt="" /></Link>
           <Link><img src={img3} alt="" /></Link>
           <Link><img src={img4} alt="" /></Link>
           <Link><img src={img5} alt="" /></Link>
           <Link><img src={img6} alt="" /></Link>
           <Link><img src={img7} alt="" /></Link>
           <Link><img src={img8} alt="" /></Link>
        </div>
    </div>
      <div className='wlc'>
        <h1>Welcome to MY Bazaar</h1>
        <div className="cont1">
        <br />
        <h1><span style={{color:'gray'}}> Exclusiv Product New Arrival</span> </h1>
        <h2>Original Products</h2>
        <h3>Special Blend</h3>
        <h4> <span style={{color:'gray'}}> ALL PRODUCT ON SALE </span></h4>
        <h5>UP TO</h5>
        <h6><span style={{color:'wheat'}}>50%</span></h6>
    </div>
    <div className="cont2">
        <br />
    <h1><span style={{color:'gray'}}> Exclusiv Product New Arrival </span></h1>
        <h2>Fashion products </h2>
        <h3>CANDY LOOK</h3>
        <h4><span style={{color:'gray'}}> ALL PRODUCT ON SALE </span></h4>
        <h5>UP TO</h5>
        <h6><span style={{color:'wheat'}}> 70% </span></h6>
    </div>
        </div>
        <div class="whyB">
        <div class="w1">
            <h1>WHY BUY FROM MY BAZAAR</h1>
            TRY A UNIQUE EXPERIENCE WITH US:-

        </div>
        <div class="w2">
            + FINANCE SUPPORT <br/>
            + ATTRACTIVE PRICES <br/>
            + EXCHANGE SUPPORT <br/>
            + COUSTMER'S SETISFACTION
        </div>
    </div>
    <div className="productS">
        <ProductS/>
    </div>
    <div class="find">
        <div class="f1">
            <h1>CAN'T FIND WHAT YOU WANT</h1><br />
            Let Us Help You <br/>
        </div>
        <div class="f2">
            <a href="">Smart phones</a>
            <a href="">Accesiries</a>
        </div>
    </div>
    </>
  )
}

export default Home