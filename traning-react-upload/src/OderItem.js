import React from 'react'
import './OrderItem.css'

export default (props) => {
  return (
    <div className='OrderItem' onClick={props.deleteItem}>
        <p>Item name: {props.name}</p>
        <p>Item id: {props.id}</p>
        <input type='text' value={props.name} 
        onChange={props.textChange} />
    </div>
  )
}
