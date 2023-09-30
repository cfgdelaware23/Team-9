import React from 'react'
import LineItem from './LineItem'
const ListItem = ({items}) => {
  return (
    <ul>
      {items.map((curr) => (
        <LineItem key = {curr.id} item = {curr}/>
      ))}
    </ul>
  )
}

export default ListItem