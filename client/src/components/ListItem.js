import React from 'react'
import LineItem from './LineItem'
const ListItem = ({items}) => {
  return (
    <ul1>
      {items.map((curr) => (
        <LineItem key = {curr.id} item = {curr}/>
      ))}
    </ul1>
  )
}

export default ListItem