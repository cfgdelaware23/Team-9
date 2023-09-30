import React from 'react'

const Contacts = () => {
  return (
    <div className='contacts'>
        <b>Contacts</b>
        <font size = '4' color = 'black'>
          (123)-456-7890
        </font>
        <a href = "mailto:abc@example.com?subject = Feedback&body = Message">
          <font size = '4'>
            Send Feedback
          </font>

        </a>
    </div>
  )
}

export default Contacts