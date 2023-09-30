import React from 'react'
import Signup from './Signup'
import Aboutus from './Aboutus'
import FeedbackForm from './FeedbackForm'

const Content = () => {
  return (
    <div className='content'>
      <Signup />
      <Aboutus />
      <FeedbackForm />
    </div>
  )
}
export default Content