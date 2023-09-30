import React from 'react'

const LineItem = ({item}) => {
  return (
    <li className = 'item'>
      <label> {item.title } </label>
    </li>
  )
}

export default LineItem