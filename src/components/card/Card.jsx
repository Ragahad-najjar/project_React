import React from 'react'
import './CardStyle.css'

const Card = (props) => {
  return (
    <>
    <div className='Card'>
      <img src={props.img} alt=""></img>
      <h2>{props.title}</h2>
      <p>{props.text}</p> 
      
    </div>
    </>
  )
}

export default Card