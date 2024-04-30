import React from 'react'
import { useContext } from 'react';
import { AppContext } from '../contextApi/Products';
import{useState} from 'react';
import { Link } from 'react-router-dom';
import "../CSS/Carts.css"
import { MdDelete } from "react-icons/md";

export default function Addtocart() {
  
  const somya = useContext(AppContext);
  const {data,deletebyid,increment,decrement,count,lasttotal,findTotalAmount} = somya.statemanagement;
  
  return (
    data === null ? <h1>loading...</h1> :
    <div>
      <h3>
       
      </h3>
      <div>
      {
        data.map((item) => {
         
          return (
           
            <div key={item.id}>

             
              
              <span className='img-1'><img  src={item.image[0].url} alt="" /></span>
              <span className='price'>RS:{item.price}</span>
              <span className='category'>{item.category}</span>
              <span className='name'>{item.name}</span>
              <span className="count">
                  <button className='button-border' onClick={increment} 
                  >+</button>
                  {count}
                  <button className='button-border' onClick={decrement}
                  >-</button>
                </span>
                <span className='countan'>Total Amount:{
                  item.price*count
                  }</span>
             <MdDelete className='abhaybutton' onClick={()=>deletebyid(item.id)}>remove</MdDelete>
             <hr />

            </div>
          )
        })
      }
      </div>

      
        
          <div className="">
          <span>
            <h3 className='lastpart'>Total Amount:{findTotalAmount()}</h3>
          </span>
          
          

          <span>
            <Link to="/product">
            <button className='khtm'>CONTINUE SHOPPING</button>
            </Link>
          </span>

          <span>

            <button className='khtm-2'>
              CHECKOUT
            </button>
          </span>
          </div>
          <hr />
          

        
      
    </div>
  )
}
