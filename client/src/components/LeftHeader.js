import React from 'react'
import Logo from '../images/wellfareLogo.png'

const LeftHeader = () => {
  return (
    <div className="leftHeader">
        <img src = {Logo} alt = "Wellfare Logo" width = {150} height = {50}/>
    </div>
  )
}

export default LeftHeader