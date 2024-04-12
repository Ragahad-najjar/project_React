import React from 'react'
import  './childeStyle.css'

const childe = (props) => {
  return (
    <div className='child' >
      <img src={props.img}></img>
      <div className='box'>
        <h3>{props.FirstTitle}</h3>
        <h1>{props.SecTitle}</h1>
        <button className='btn2'>{props.btn2}</button>
      </div>
    </div>
  )
}

export default childe