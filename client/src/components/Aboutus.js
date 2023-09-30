import React from 'react'
import '../css/Aboutus.css'
import MovingAboutImage from './MovingAboutImage';
import Stack from '@mui/material/Stack';


const Aboutus = () => {
  return (
    <a id = 'aboutus'>
      <div className='aboutus-container'>
        <Stack spacing={5}>
          <MovingAboutImage/>

          <div className='aboutus-text'>
          At Wellfare, we are on a mission to make a <b>positive impact</b> in the lives of 
          low-income families. We believe customers should eat <b> what they want </b> at the 
          <b> price they want</b>. Based in New York, our goal is to make healthy food 
          <b> accessible to everyone</b>. Serving people from a diverse group of backgrounds,
          Wellfare provides all patrons with <b> membership cards</b> and no <b> membership fees</b>.
          Those with live in <b>certain districts</b> and have qualified <b>SNAP credentials</b> may
          be eligible for additional perks, but fear not; regardless of credentials, everyone
          still pays want they want.
          At Wellfare, we believe that everyone deserves the opportunity 
          to lead a <b>healthier and more fulfilling life</b>, and we are committed to providing the 
          support and resources needed to achieve that goal. Together, we are building a <b>stronger, 
          healthier future</b> for our communities.
          </div>
        </Stack>
      </div>
    </a>
  )
}


export default Aboutus
