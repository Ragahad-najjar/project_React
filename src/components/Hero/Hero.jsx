import React from 'react'
import './HeroStyle.css'
const Hero = ({title ,title2}) => {
  return (
    <div className='Hero' >
        <h1>{title}</h1>
        <p>{title2}</p>
    </div>
  )
}

export default Hero
