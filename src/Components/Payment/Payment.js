import React ,{useState}from 'react'
import './Payment.css';
import { useSelector } from 'react-redux'


const Payment = () => {
 
  const cartCount = useSelector((state) => state.CartReducer.cartValues.length)
  const totalPrice = useSelector((state) => state.CartReducer.totalPrice)
  const itemName = useSelector((state) => state.CartReducer.imageName)
  const cartProduct = useSelector((state)=> state.CartReducer.imageItem)

  return (
    <div>
      <center>
        <h4>Product details</h4><br/>
        <div className='d-inline p-2 navbar-nav mx-auto'>

          <table className='cart-table'>
            <tr>
              <th>Photo</th>
              <th>Name</th>
              <th>Cart</th>
              <th>Price</th>

            </tr>
            <tr>
              <td>
              <span >{
      <img className='cartImages' src={cartProduct} />
      }</span>

              </td>
              <td >
              <span >{itemName}</span>
              </td>
              <td><span ><span >{cartCount}</span></span></td>
              <td>
              <span >{totalPrice}</span>
              </td>
            </tr>
          </table>
      {/* <span >Cart Items : {cartCount}</span>&nbsp;&nbsp;
      <h3>

      </h3>
      <span >Total Price : {totalPrice}</span>&nbsp;&nbsp;
      <span >Image Name : {itemName}</span>&nbsp;&nbsp;
      <span >Cart Product : {
      <img className='cartImages' src={cartProduct} />
      }</span>&nbsp;&nbsp; */}
      
      
    </div>
      
        </center>
    </div>
  )
}

export default Payment