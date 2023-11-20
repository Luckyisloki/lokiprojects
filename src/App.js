import React from 'react'
import Navbar from './Components/Navigation/Navbar'
import Product from './Components/Products/Product';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Payment from './Components/Payment/Payment';
import PopUp from './Components/Modal/PopUp';




const App = () => {

 
    


  return (
    <>
 
    <div className='navbar'>
    
     <BrowserRouter>
     <Navbar />
     <PopUp />
     <Product/>
       <Routes>
     
       
       </Routes>
      </BrowserRouter>
    </div>
   
  
   
   
  
    </>
  )
}


export default App