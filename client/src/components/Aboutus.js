import React from 'react'
import intro from  '../images/wellfareIntro.webp'
import '../css/Aboutus.css'
import Stack from '@mui/material/Stack';


const Aboutus = () => {
  return (
    <div className='aboutus-container'>
      <Stack spacing={5}>
        <h1 style={{justifyContent: 'center'}}>About Us</h1>
        <img className='intro-image' src={intro} alt='intro' />
        <div className='aboutus-text'>
        At Welfare, we are on a mission to make a positive impact in the lives of low-income families. As a nonprofit organization, we have dedicated ourselves to creating a tangible difference through our unique approach. We operate brick-and-mortar stores where we diligently verify the eligibility of our customers, ensuring they hold public housing or SNAP credentials. Once confirmed, these individuals gain access to our store's discounted prices, enabling them to access high-quality, healthy alternatives and make nutritious food choices for themselves and their families. At Welfare, we believe that everyone deserves the opportunity to lead a healthier and more fulfilling life, and we are committed to providing the support and resources needed to achieve that goal. Together, we are building a stronger, healthier future for our communities.
        </div>


      </Stack>
    </div>
  )
}


export default Aboutus
