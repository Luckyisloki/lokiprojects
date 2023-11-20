import React,{useState} from 'react'
import {Modal} from 'react-bootstrap';
import Payment from '../Payment/Payment';
import { useSelector } from 'react-redux';
import './PopUp.css';



const PopUp = () => {
  const cartCount = useSelector((state) => state.CartReducer.cartValues.length)
    const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
  return (
    <div>
        <>
      
        {/* <button style={{"backgroundColor":"crimson","color":"white",
      "padding":"5px","width":"80px","margin-left":"-150px","border-radius":"22px",
      "border":"none"}} onClick={handleShow}>
            Cart
        </button> */}
    
     <div className='item-parent'>
     <div>
     <p>Products</p>
     </div>
      <div>
      <svg onClick={handleShow} className='cart-icon'
        xmlns="http://www.w3.org/2000/svg" width="25" margin-top="20" height="22" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg>
<span className='dot'> <p className='notify'>{cartCount}</p></span>

      </div>
     </div>
 
   
        <Modal 
    className="modal"
    show={show}
    onHide={handleClose}
    >

        <Modal.Header closeButton>
          <Modal.Title>Cart Items</Modal.Title>
        </Modal.Header>
        <Modal.Body><Payment /></Modal.Body>
      </Modal>
        </>

    </div>
  )
}

export default PopUp