import React from 'react'
import './HeroAboutStyle.css' 
const Hero = ({title}) => {
  return (
    <div className='HeroAbout' >
        <h1>{title}</h1>
    </div>
  )
}
export default Hero