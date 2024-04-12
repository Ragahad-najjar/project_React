import React from 'react'
import './HeaderStyle.css'
const Header = (props ) => {
  return (
  <header className='Header' style={{backgroundImage:`url(${props.img})`}}>
      {props.children}
    </header>
  )
}
export default Header 

