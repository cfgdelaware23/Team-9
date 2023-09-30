import React from 'react'
import LineItem from './LineItem'
const ListItem = ({items}) => {
  return (
    <ul>
      {items.map((item) => (
        <LineItem key = {item.id} item = {item}/>
      ))}
    </ul>
  )
}

export default ListItem