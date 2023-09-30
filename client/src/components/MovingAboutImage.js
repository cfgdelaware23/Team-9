import React from 'react'
import intro from  '../images/wellfareLogo.png'
import '../css/MovingAboutImage.css'

const MovingAboutImage = () => {
  return (
    <div class="container">
      <div class="image">
        <img className='intro-image' src={intro} alt='intro' />
    </div>
  </div>
  )
}

export default MovingAboutImage