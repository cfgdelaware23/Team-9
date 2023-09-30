import React from 'react'
import LeftHeader from './LeftHeader'
import RightHeader from './RightHeader'
import DonationHeader from './DonationHeader'

const Header = () => {
    return (
        <div className='header'>
            <LeftHeader />
            <RightHeader />
            <DonationHeader />
        </div>
  )
}

export default Header