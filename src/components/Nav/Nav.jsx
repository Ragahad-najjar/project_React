import React from 'react';
import './NavStyle.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Nav =({ menu, logo, btn ,MenuBtn , CloseBtn }) => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className='navbar'>
          <img src={logo} ></img>
    <div  className={`nav-elements  ${showNavbar && 'active'}`}>
      <div className='listMenu'>
      <ul>
        {menu.map((element, index) => {
        return (
            <li key={index}><Link to={element.path}  className="active">{element.title}</Link></li> 
          )
        })}
      </ul>
    </div>
      <button className='btn'>{btn}</button> 
      <img src={CloseBtn} className='close ' onClick={handleShowNavbar} />
      </div>
      <div className="menu-icon">
          <img src={MenuBtn} className='Menu' onClick={handleShowNavbar}/>
        </div>
    </nav>
  )

}
export default Nav;