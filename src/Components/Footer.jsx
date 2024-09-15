import React from 'react'
import { Link } from 'react-router-dom'


import img1 from './Pages/images/INS.jfif'
import img2 from './Pages/images/FEC.jfif'
import img3 from './Pages/images/y.jfif'
function Footer() {
    return (
        <>

            <footer id='footer'>
                <div className="GG">
                    <h1>MY BAZAAR</h1><br />
                    <Link href="">Why MY Bazaar</Link><br />
                    <Link href="">Terms and Condition</Link><br />
                    <Link href="">Privacy Policy</Link><br />
                    <Link href="">Returns</Link><br />
                </div>
                <div className="shop">
                    <h1>SHOP</h1><br />
                    <Link href="">Categories</Link><br />
                    <Link href="">Brands</Link><br />
                    <Link href="">Find our Store</Link><br />
                    <Link href="">Home</Link><br />
                    <Link href="">New arrivels</Link><br />
                </div>
                <div className="Help">
                    <h1>Help</h1><br />
                    <Link href="">My Orders</Link><br />
                    <Link href="">FAQ</Link><br />
                    <Link href="">Customer Care</Link><br />
                    <Link href="">Coupons</Link>
                </div>
                <div className="follow">
                    <h1>Follow Us ON</h1>
                    <Link href=""><img src={img1} alt="" /></Link>
                    <Link href=""><img src={img2} alt="" /></Link>
                    <Link href=""><img src={img3} alt="" /></Link>
                </div>
              
            </footer>
            <div className="opt">
                    <select name="" id="">
                        <option value="">INDIA</option>
                        <option value="">USA</option>
                        <option value="">UAE</option>
                        <option value="">USTRELIA</option>
                        <option value="">ENGLAND</option>
                        <option value="">SOUTH AFRICA</option>
                        <option value="">FRANCE</option>
                        <option value="">GERMENY</option>
                    </select>
                </div>
        </>
    )
}

export default Footer