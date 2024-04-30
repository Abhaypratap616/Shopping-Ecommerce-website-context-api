import React from 'react'
import '../CSS/Footer.css'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
 export default function Footer() {
  return (
    <div>
      <div>
        <div className="container button ">
            <div className="row ">
                <div className="col-10 ">
                    <p className='text'>Ready to get started? Talk to Us today
                   
                    </p>
                </div>
                <div className="col-md-2 btn-6">
                    <button className='abhaypratap'>
                        GET STARTED
                    </button>
                </div>
            </div>
        </div>
        <div className="container-fluid ">
            <div className="row last">
                <div className="col-md-3">
                    <p>
                        Abhay Technical
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga earum recusandae consequatur.
                    </p>
                </div>
                <div className="col-md-3">
                    <p>
                        Subscribe to get importent updates
                    </p>
                    <p>
                       <input type="text" placeholder='YOUR-EMAIL' />
                    </p>
                    <p>
                        <button className='btn-1'>Subscribe</button></p>
                </div>
                <div className="col-md-3">
                    <p>Follow</p>
<p><FaInstagram /> <FaFacebook /><FaGithub /></p> 
                </div>
                <div className="col-md-3">
                    <p>Call Us</p>
                    <p>+919528768249</p>
                    <p>Terms of Service</p>
            </div>
        </div>
        </div>
        <div className="container-fluid ">
            <div className="row oklast">
                <div className="col-6">
                    <p>© 2024 Abhay Technical</p>
                </div>
                <div className="col-6">
                    <p>Privacy Policy</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
