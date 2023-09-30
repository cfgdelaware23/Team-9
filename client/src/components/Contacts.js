import React from 'react'
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import "../css/Footer.css"

const Contacts = () => {
  return (
    <div className='contacts'>
        <b className='footer-header'>Contact Us</b>
        <div className='icon-group'>
          <BiSolidPhoneCall className='icon' />
          <font size = '4' color='black'>
            (123)-456-7890
          </font>
        </div>
        <div className='icon-group'>
          <MdEmail className='icon icon-tall'/>
          <a href="mailto:abc@example.com?subject=Feedback&body=Message">
            <font size='4'>
              Email Inquiry
            </font>
          </a>
        </div>
    </div>
  )
}

export default Contacts