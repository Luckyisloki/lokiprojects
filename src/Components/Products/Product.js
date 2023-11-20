import React from 'react'
import './Product.css';
import {useEffect,useState } from 'react';
import axios from 'axios';

import { useDispatch } from 'react-redux'
import { incrementcart,decrementcart} from '../../Redux/CartReducer'

const Product = () => {
  const [search,setSearch] = useState("");
  const [men,setMen] = useState([]);
  const [name,setName] = useState("");

 
  
  
  let data = 
  [
      {
        id: 1,
        imageURL: "https://thegeekstudio.ae/assets/task-images/polo-tshirts.png",
        name: "Black Polo",
        type: "Polo",
        price: 250,
        currency: "INR",
        color: "Black",
        gender: "Men",
        quantity: 3
      },
      {
        id: 2,
        imageURL: "https://thegeekstudio.ae/assets/task-images/polo-tshirts.png",
        name: "Blue Polo",
        type: "Polo",
        price: 350,
        currency: "INR",
        color: "Blue",
        gender: "Women",
        quantity: 3
      },
      {
        id: 3,
        imageURL: "https://thegeekstudio.ae/assets/task-images/polo-tshirts.png",
        name: "Pink Polo",
        type: "Polo",
        price: 350,
        currency: "INR",
        color: "Pink",
        gender: "Women",
        quantity: 6
      },
      {
        id: 4,
        imageURL: "https://thegeekstudio.ae/assets/task-images/hoodie-tshirts.png",
        name: "Black Hoodie",
        type: "Hoodie",
        price: 500,
        currency: "INR",
        color: "Black",
        gender: "Men",
        quantity: 2
      },
      {
        id: 5,
        imageURL: "https://thegeekstudio.ae/assets/task-images/polo-tshirts.png",
        name: "Green Polo",
        type: "Polo",
        price: 250,
        currency: "INR",
        color: "Green",
        gender: "Men",
        quantity: 1
      },
      {
        id: 6,
        imageURL: "https://thegeekstudio.ae/assets/task-images/polo-tshirts.png",
        name: "Green Polo",
        type: "Polo",
        price: 350,
        currency: "INR",
        color: "Green",
        gender: "Women",
        quantity: 1
      },
      {
        id: 7,
        imageURL: "https://thegeekstudio.ae/assets/task-images/hoodie-tshirts.png",
        name: "Blue Hoodie",
        type: "Hoodie",
        price: 500,
        currency: "INR",
        color: "Blue",
        gender: "Women",
        quantity: 2
      },
      {
        id: 8,
        imageURL: "https://thegeekstudio.ae/assets/task-images/hoodie-tshirts.png",
        name: "Black Hoodie",
        type: "Hoodie",
        price: 500,
        currency: "INR",
        color: "Black",
        gender: "Women",
        quantity: 5
      },
      {
        id: 9,
        imageURL: "https://thegeekstudio.ae/assets/task-images/round-neck-tshirts.png",
        name: "Blue Round",
        type: "Basic",
        price: 300,
        currency: "INR",
        color: "Blue",
        gender: "Men",
        quantity: 2
      },
      {
        id: 10,
        imageURL: "https://thegeekstudio.ae/assets/task-images/round-neck-tshirts.png",
        name: "Red Round",
        type: "Basic",
        price: 300,
        currency: "INR",
        color: "Red",
        gender: "Women",
        quantity: 2
      },
      {
        id: 11,
        imageURL: "https://thegeekstudio.ae/assets/task-images/round-neck-tshirts.png",
        name: "Grey Round",
        type: "Basic",
        price: 300,
        currency: "INR",
        color: "Grey",
        gender: "Men",
        quantity: 1
      },
      {
        id: 12,
        imageURL: "https://thegeekstudio.ae/assets/task-images/hoodie-tshirts.png",
        name: "Purple Hoodie",
        type: "Hoodie",
        price: 500,
        currency: "INR",
        color: "Purple",
        gender: "Women",
        quantity: 3
      },
      {
        id: 13,
        imageURL: "https://thegeekstudio.ae/assets/task-images/round-neck-tshirts.png",
        name: "Grey Round",
        type: "Basic",
        price: 300,
        currency: "INR",
        color: "Grey",
        gender: "Women",
        quantity: 1
      },
      {
        id: 14,
        imageURL: "https://thegeekstudio.ae/assets/task-images/round-neck-tshirts.png",
        name: "White Round",
        type: "Basic",
        price: 300,
        currency: "INR",
        color: "White",
        gender: "Women",
        quantity: 0
      },
      {
        id: 15,
        imageURL: "https://thegeekstudio.ae/assets/task-images/round-neck-tshirts.png",
        name: "Black Round",
        type: "Basic",
        price: 300,
        currency: "INR",
        color: "Black",
        gender: "Men",
        quantity: 7
      },
      {
        id: 16,
        imageURL: "https://thegeekstudio.ae/assets/task-images/round-neck-tshirts.png",
        name: "Purple Round",
        type: "Basic",
        price: 300,
        currency: "INR",
        color: "Purple",
        gender: "Men",
        quantity: 1
      },
      {
        id: 17,
        imageURL: "https://thegeekstudio.ae/assets/task-images/round-neck-tshirts.png",
        name: "White Round",
        type: "Basic",
        price: 300,
        currency: "INR",
        color: "White",
        gender: "Men",
        quantity: 2
      },
      {
        id: 18,
        imageURL: "https://thegeekstudio.ae/assets/task-images/round-neck-tshirts.png",
        name: "Blue Round",
        type: "Basic",
        price: 300,
        currency: "INR",
        color: "Blue",
        gender: "Women",
        quantity: 3
      },
      {
        id: 19,
        imageURL: "https://thegeekstudio.ae/assets/task-images/hoodie-tshirts.png",
        name: "Yellow Hoodie",
        type: "Hoodie",
        price: 500,
        currency: "INR",
        color: "Yellow",
        gender: "Women",
        quantity: 1
      },
      {
        id: 20,
        imageURL: "https://thegeekstudio.ae/assets/task-images/polo-tshirts.png",
        name: "White Polo",
        type: "Polo",
        price: 350,
        currency: "INR",
        color: "White",
        gender: "Women",
        quantity: 4
      },
      {
        id: 21,
        imageURL: "https://thegeekstudio.ae/assets/task-images/polo-tshirts.png",
        name: "Red Polo",
        type: "Polo",
        price: 250,
        currency: "INR",
        color: "Red",
        gender: "Men",
        quantity: 2
      },
      {
        id: 22,
        imageURL: "https://thegeekstudio.ae/assets/task-images/hoodie-tshirts.png",
        name: "Blue Hoodie",
        type: "Hoodie",
        price: 500,
        currency: "INR",
        color: "Blue",
        gender: "Men",
        quantity: 0
      },
      {
        id: 23,
        imageURL: "https://thegeekstudio.ae/assets/task-images/hoodie-tshirts.png",
        name: "Grey Hoodie",
        type: "Hoodie",
        price: 500,
        currency: "INR",
        color: "Grey",
        gender: "Men",
        quantity: 2
      },
      {
        id: 24,
        imageURL: "https://thegeekstudio.ae/assets/task-images/polo-tshirts.png",
        name: "Grey Polo",
        type: "Polo",
        price: 300,
        currency: "INR",
        color: "Grey",
        gender: "Men",
        quantity: 3
      },
      {
        id: 25,
        imageURL: "https://thegeekstudio.ae/assets/task-images/hoodie-tshirts.png",
        name: "Red Hoodie",
        type: "Hoodie",
        price: 300,
        currency: "INR",
        color: "Red",
        gender: "Men",
        quantity: 0
      },
      {
        id: 26,
        imageURL: "https://thegeekstudio.ae/assets/task-images/polo-tshirts.png",
        name: "White Polo",
        type: "Polo",
        price: 300,
        currency: "INR",
        color: "White",
        gender: "Men",
        quantity: 1
      },
      {
        id: 27,
        imageURL: "https://thegeekstudio.ae/assets/task-images/hoodie-tshirts.png",
        name: "White Hoodie",
        type: "Hoodie",
        price: 500,
        currency: "INR",
        color: "White",
        gender: "Women",
        quantity: 3
      },
      {
        id: 28,
        imageURL: "https://thegeekstudio.ae/assets/task-images/round-neck-tshirts.png",
        name: "Grey Round",
        type: "Basic",
        price: 300,
        currency: "INR",
        color: "Grey",
        gender: "Men",
        quantity: 0
      },
      {
        id: 29,
        imageURL: "https://thegeekstudio.ae/assets/task-images/round-neck-tshirts.png",
        name: "Black Round",
        type: "Basic",
        price: 300,
        currency: "INR",
        color: "Black",
        gender: "Women",
        quantity: 0
      },
      {
        id: 30,
        imageURL: "https://thegeekstudio.ae/assets/task-images/polo-tshirts.png",
        name: "Black Polo",
        type: "Polo",
        price: 300,
        currency: "INR",
        color: "Black",
        gender: "Women",
        quantity: 4
      }
    ]
    
    
    
    useEffect(()=>{
       getData()
    },[])

    const handleClick = event => {
      const target = event.target.value
  
      const filterData = data.filter(item => item.gender === target
    
        )
      setMen(filterData)
      console.log("Men",filterData)
    }

   

  const getData = ()=>{
    axios({
      method: 'GET',
      url:'https://docs.google.com/document/d/1UIwiEmOdXa1AytbrkbypDqFN--Q92FB91mTWxDcLB98/edit?usp=sharing'
    })
    .then(json => console.log(json))
  
    }

    const dispatch = useDispatch();
  return (
    <div className='product-parent'>
      <div className='product-child1'>

      <h5 className='ctitle'>Geekonomy</h5>
<p className='filtext'>Gender</p>
<button className='men'
  onClick={handleClick}
>Men</button>&nbsp;&nbsp;
<button className='women'>Women</button>
<p className='filtext'>Color</p>
<button className='men'>Blue</button>&nbsp;&nbsp;
<button className='women'>Red</button>&nbsp;&nbsp;
<button className='green'>Green</button>
<p className='filtext'>Price</p>
<button className='men'>0-250</button>&nbsp;&nbsp;
<button className='women'>251-450</button>&nbsp;&nbsp;
<button className='women'>450</button>
<p className='filtext'>Type</p>
<button className='men'>Polo</button>&nbsp;&nbsp;
<button className='women'>Hoodie</button>&nbsp;&nbsp;
<button className='basic'>Basic</button>
      </div>
      
      <div>

      <input type="text"
      onChange={ e =>setSearch(e.target.value)}
       className='input-field' placeholder='Search For Products'
 
       />
     <button className='search-icon'>
     <svg xmlns="http://www.w3.org/2000/svg"  width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
     </button>
  
   
    <div className='container' style={{"margin-left":"100px"}}>
      <div className='row'>
        {
          data.filter((item)=>{
            return search.toLowerCase() === '' ? item: item.name.toLowerCase().includes(search)
          }).
          map( product =>
            <div className='col' key={product.id}>
            <div className='card-m-1' style={{"width":"18rem","height":"24rem","textAlign":"center"}}>
              <img className='card-img-top' src={product.imageURL} style={{"width":"12rem","height":"14rem","textAlign":"center","margin-left":"45px","margin-top":"30px"}}/>
              <h6 className='card-titles'>{product.name} </h6>
          
              <div className='card-body'>
                <div>
                <p className='card-title'>Price: ₹{product.price}</p>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div>
                <button className='add-to-cart'
                onClick={()=> dispatch(
                  incrementcart({
                    productName: product.name,
                    productPrice: product.price,
                    productImage: product.imageURL,
                    
                  }))}>Add to cart</button>&nbsp;&nbsp;
                      {/* <button className='btn btn-primary ml-auto'
              onClick={()=> dispatch(
                decrementcart({
                  productName: product.name,
                  productPrice: product.price
                }))}>Remove</button> */}
                <svg  onClick={()=> dispatch(
                decrementcart({
                  productName: product.name,
                  productPrice: product.price,
                  productImage: product.imageURL,
                }))} xmlns="http://www.w3.org/2000/svg" width="16" color="red" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
  <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
</svg>
             
                </div>
                

              </div>
          </div>
        </div>
            )}

    </div>
  
  </div>

      </div>

        

  
  </div>
  )
}

export default Product