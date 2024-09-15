import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../../Reduder/cartSlice'

function Cart() {
  const products = useSelector(state => state.cart)
  const dispatch = useDispatch(remove)


  const handletoRemove =(productId)=>{
      dispatch(remove(productId))
  }
  return (
    <>
    <div className="cartpage">
      <h2>See All Your Favroute Products Here</h2>
    </div>
    <div>

   {
    products.map(product =>(
      <div className="cartadd">
      <img src={product.pic} alt="" />
      <h4>Name : {product.name}</h4>
      <h4>Price : {product.price}</h4>
      <button className='removebtn' onClick={()=>handletoRemove(product.id)}>Remove</button>
      </div>
    )
    )
   }
    </div>
    </>
  )
}

export default Cart