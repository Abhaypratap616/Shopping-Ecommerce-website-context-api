import React, { useContext } from 'react'
import { AppContext } from '../contextApi/Products';
import Choiseoption from '../Component/Choiseoption';
import { TbTruckDelivery } from "react-icons/tb";
import { TbReplace } from "react-icons/tb";
import '../CSS/Product.css'
import '../CSS/Newaapka.css'
import { useState } from 'react';
import { MdOutlineSecurity } from "react-icons/md";
import { Link } from 'react-router-dom';
export default function Newaapka() {
  const harsh = useContext(AppContext);
  const {changenumber} = harsh.statemanagement;
  const[color,setColor] = useState([]);
  const[count,setCount] = useState(1);
  const {singleproduct} = harsh.statemanagement;
  const [newimg, setnewimg] = useState( singleproduct.image==1);
  // console.log(singleproduct);
  function colorhandle(){
    setColor(color);
    console.log(color);
  }
  
 
  return (
    singleproduct.image === undefined ? <h1>loading</h1>:
   
    <div>
      <div>
        {
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3 abhayimg">
              {singleproduct.image.map((img, index) => (
          <img key={index} src={img.url} alt={`Image ${index + 1}`}
          onClick={() => setnewimg(img.url)}
          />
        ))}
              </div>
              <div className="col-md-4 mainphoto">
                <img src = {newimg} alt="product" className="img-fluid" />
              </div>
              <div className="col-md-5">
                <h1>{singleproduct.name}</h1>
                <p>Rating:{singleproduct.reviews}</p>
                <h5>RS:{singleproduct.price}</h5>
                <del>
                  RS:{singleproduct.price + 8000}
                </del>
                <p>{singleproduct.description}</p>
                <hr />
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
                <hr />
                <div className="color">
                {
                  singleproduct.colors.map ((color,index)=>{
                    return(
                       <button key={index} style={{backgroundColor:color}} className="color-box">

                        </button>
                    )
                  })
                }
                <div className="count">
                  <button className='button-border' onClick={()=>setCount(count+1)}>+</button>
                  {count}
                  <button className='button-border' onClick={()=>setCount(count>1?count-1:1)}>-</button>
                </div>
                
                <div className="addtocart">
                  <button onClick={()=>changenumber(singleproduct.id)}>Add To Cart</button>
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

