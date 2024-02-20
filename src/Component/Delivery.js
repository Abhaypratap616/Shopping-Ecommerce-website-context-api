import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineSecurity } from "react-icons/md";
import { RiRefund2Fill } from "react-icons/ri";
import { SiContactlesspayment } from "react-icons/si";
import { SiAmazonecs } from "react-icons/si";
import { FaCcAmazonPay } from "react-icons/fa";
import { SiZara } from "react-icons/si";
import { SiSamsung } from "react-icons/si";
import '../CSS/Delivery.css';


function Delivery() {
  return (
    <div>
      <div>
       <div className="container starting">
        <div className="row">
            <div className="col-md-4 delivery">
                <h1><TbTruckDelivery /></h1>
                <div className="h1"><h5>Super Fast and Free Delivery</h5></div>
            </div>
            <div className="col-md-4 delivery">
                <div><h1><MdOutlineSecurity/></h1></div>
                <div className="h2"><h5>
                    Non-contact shipping</h5></div>
                <div><h1><RiRefund2Fill /></h1></div>
                <div className="h3"><h5>
                    Money-back Guaranted</h5></div>
               
            </div>
            <div className="col-md-4 delivery">
                <h1><SiContactlesspayment/></h1>
                <div className="h4"><h5>
                    Super Secure payment System</h5></div>
        </div>
       </div>
      </div>
      <div className="container ">
        <div className="row starting-2">
            <div className="col-md-12">
                <h4>Trusted By 1000+ Companies</h4>
            </div>
        </div>
        <div className="row ">
            <div className="col-md-3 starting-3 ">
                <h1><SiAmazonecs /></h1>
            </div>
            <div className="col-md-3 starting-3">
                <h1><FaCcAmazonPay /></h1>

        </div>
        <div className="col-md-3 starting-3">
            <h1><SiZara /></h1>
      </div>
        <div className="col-md-3 starting-3">
            <h1><SiSamsung /></h1>
    </div>
    
    </div>
    </div>
    </div>
    </div>
  )
}

export default Delivery
