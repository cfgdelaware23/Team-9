import React from 'react'

const LineItem = ({item}) => {
  const checkoutItem = `Name: ${item.item}\tPrice: ${item.total}\tTotal Cost: ${item.total}`
  return (
    <li className = 'item'>
      <label> {checkoutItem}</label>
    </li>
  )
}

export default LineItem