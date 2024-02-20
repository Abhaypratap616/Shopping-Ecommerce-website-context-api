import React from 'react'
import '../CSS/Contact.css'

function Contact() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row heading">
          <div className="col-md-12">
            <h2 className='heading'>Feel Free to Contact Us</h2>
          </div>
        </div>
        <div className="row map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.7859822345754!2d77.47717187495802!3d28.666126182555363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf2190b2d26bd%3A0x392a851ea9b17c71!2sMahagunpuram%2C%20Ghaziabad%2C%20Uttar%20Pradesh%20201002!5e0!3m2!1sen!2sin!4v1708023971700!5m2!1sen!2sin" width="500" height="450" style={{border:0}}allowFullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

      </div>
      <div className="container">
        <div className="row mess">
            <div className="col-md-12 ">
                <h3>Your Message for Any Problem</h3>
            </div>
        </div>
        <div className="row mess messa">
<div className="col-md-12 ">
    <from action="https://formspree.io/f/xdoqgdlz" method = "POST">
      <input type="text" placeholder="Enter Your Name" name = 'username' required autoComplete='Off' />
      <div>
        <input type="email" className='messa' placeholder="Enter Your Email" name = 'email' required autoComplete='Off' />
      </div>
      <div className="mess">
        <textarea name="message" id="" cols="50" rows="5" placeholder="Enter Your Message" required></textarea>
      </div>
      <div className='btn-1'>
        <input type="submit"  value="Send" />
      </div>

    </from>
</div>
        </div>
      </div>
    </div>
  )
}
export default Contact;
