import React from 'react'
import './CardSec.css'
const CardSec = (props) => {
  return (
    <div  className='CardSec'>
      <div className='input'>
      <img src={props.img} alt="" className='ImageCard'/>
      <div className='input2'>
      <p>{props.textIcon}</p>
        <p>{props.textIcon2}</p>
        </div>
      </div>
      <h1>{props.title}</h1>
      <p>{props.text}</p>
      <p>{props.text2}</p>
      <div className='IconStar'>
        <p>{props.price}</p>
        <div className='star'>
          <img src={props.img1}/>
          <p>{props.num}</p>
        </div>
      </div>
    </div>
  )
}

export default CardSec