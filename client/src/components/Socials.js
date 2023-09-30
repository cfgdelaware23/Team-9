import React from 'react'
import { MdOutlineWeb } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import "../css/Footer.css";

const Socials = () => {
  return (
    <div className='socials'>
      <b> Socials </b>
      <div className='icon-group'>
        <MdOutlineWeb className='icon icon-tall'/>
        <a href = 'https://www.wellfare.org/'> 
          <font size='4'>
            Main Site
          </font>
        </a>
      </div>
      <div className='icon-group'>
        <FaLinkedinIn className='icon' />
        <a href = 'https://www.linkedin.com/company/wellfareorganization/'>
          <font size='4'>
            LinkedIn
          </font>
        </a>
      </div>
      <div className='icon-group'>
        <FaInstagram className="icon" />
        <a href = 'https://www.instagram.com/wellfareorg'>
          <font size = '4'>
            Instagram
          </font>
        </a>
      </div>
    </div>
  )
}

export default Socials