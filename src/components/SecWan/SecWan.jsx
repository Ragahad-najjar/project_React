import React from 'react'
import './SecWanStyle.css'
const SecWan = (props) => {
  return (
    <>
    <div className='SecWan'>
        <p>{props.text}</p>
    </div>
    <div className='SecWan2'>
        <img src={props.img}/>
    </div>
    </>
  )
}

export default SecWan