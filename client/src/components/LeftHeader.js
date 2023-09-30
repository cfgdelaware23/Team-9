import React from 'react'
import Logo from '../images/wellfareLogo.png'

const LeftHeader = () => {
  return (
    <div className="leftHeader">
      <a href = 'http://localhost:3000'>
        <img src = {Logo} alt = "Wellfare Logo" width = {150} height = {50}/>
      </a>
        
    </div>
  )
}

export default LeftHeader