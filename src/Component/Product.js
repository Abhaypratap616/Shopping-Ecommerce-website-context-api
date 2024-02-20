import React, { useContext } from 'react'
import { AppContext } from '../contextApi/Products';
import Choiseoption from '../Component/Choiseoption';
import { TbTruckDelivery } from "react-icons/tb";
import { TbReplace } from "react-icons/tb";
import '../CSS/Product.css'
import { useState } from 'react';
import { MdOutlineSecurity } from "react-icons/md";

 function Product() {
  const harsh = useContext(AppContext);
  const {setnum,num} = harsh.statemanagement;
  const[color,setColor] = useState([]);
  const[count,setCount] = useState(0);
  
  const {singleproduct} = harsh.statemanagement;
  // console.log(singleproduct);
  
  function colorhandle(){
    setColor(color);
    console.log(color);
  }
  function changenumber(){
    setnum(num+1);
  }
  
  return (
    <div>
      <div>
        {
          <div className="container">
            <div className="row">
             
              <div className="col-md-5 abhayimg">
              {singleproduct.image.map((img, index) => (
          <img key={index} src={img.url} alt={`Image ${index + 1}`}  />
        ))}
              </div>
              <div className="col-md-6">
                <h1>{singleproduct.name}</h1>
                <p>rating:{singleproduct.reviews} custom review</p>
                <h5>RS:{singleproduct.price}</h5>
                <del>
                  RS:{singleproduct.price + 8000}
                </del>
                <p>{singleproduct.description}</p>

                <div className="iconabhay">
                <span className='icon'>Fast delivery:<TbTruckDelivery />
                </span><span className='icon'>Replacement:<TbReplace /></span><span className='icon'>Abhay delivery:
                <TbTruckDelivery />
                </span><span className='icon'> 2 year warranty:
                <MdOutlineSecurity />
                </span>
                </div>
                <div className="available">
                  <h6>
                    Available options:
                     {
                      singleproduct.stock>0 ? <span> Stock</span>:<h6>shsgg</h6>
                     }
                  </h6>
                  <h6>Product Id:{singleproduct.id}</h6>
                  <h6>Brand:{singleproduct.company}</h6>

                </div>

                <div className="color">
                {
                  singleproduct.colors.map ((color,index)=>{
                    return(
                      <div onClick={colorhandle} key={index} style={{backgroundColor:color}} className="color-box">
                      {color[0]}
                      {color[1]} 
                      </div>
                    )
                  })
                  
                }
                <div className="count">
                  
                  <button onClick={()=>setCount(count+1)}>+</button>
                  {count}
                  <button onClick={()=>setCount(count-1)}>-</button>
                </div>
                <div className="addtocart">
                  <button onClick={changenumber}>Add To Cart</button>
                </div>
                </div>
                


              
                
                

              </div>
            </div>
          </div>
        }
      </div>

    </div>
  )
}
export default Product;
