import React from 'react'
import LeftHeader from './LeftHeader'
import RightHeader from './RightHeader'

const Header = () => {
    return (
        <div className='header'>
            <LeftHeader />
            <RightHeader />
        </div>
  )
}

export default Header