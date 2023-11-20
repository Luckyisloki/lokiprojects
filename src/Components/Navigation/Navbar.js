import React from 'react'
import { useSelector } from 'react-redux'

// import './Navbar.css'
const Navbar = () => {
  
  const cartCount = useSelector((state) => state.CartReducer.cartValues.length)
  const totalPrice = useSelector((state) => state.CartReducer.totalPrice)
  return (
    <div>
      <nav className='navbar navbar-dark bg-white' style={{"margin-left":"500px"}}>
        <div className='d-inline p-2 navbar-nav mx-auto'>
   
      
      
    </div>
    </nav>
  
    </div>
  )
}

export default Navbar