import React from 'react'
import './WanderlustStyle.css'
const Wanderlust = (props) => {
  return (
    <div className='Wanderlust' style={{backgroundImage:`url(${props.img})`}}>
      {props.children}
    </div>
  )
}

export default Wanderlust