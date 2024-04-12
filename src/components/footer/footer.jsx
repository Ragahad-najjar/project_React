import React from 'react'
import './footerStyle.css'
import Linkedin from './../../assets/img/linkedin.svg'
import Messenger from './../../assets/img/messenger.svg'
import Twitter from './../../assets/img/twitter.svg'
import Two from './../../assets/img/two.svg'
const footer = (props) => {
  return (
  <>
    <div className='footer'> 
      <div className='start'>
        <img src={props.img}  className="logo" alt="logo"/>
        <p>{props.text1}</p>
        <div className='IconImg'>
          <img src={Linkedin}/>
          <img src={Messenger}/>
          <img src={Twitter} />
          <img src={Two}/>
        </div>
      </div>
      <div className='middle'>
        <h2 className='title'>{props.title1}</h2>
        <ul className='list1'>
          <li>About Us</li>
          <li>Careers</li>
          <li>Blog</li>
          <li>Pricing</li>
        </ul>
      </div>
      <div className='end'> 
        <h2 className='title'>{props.title2}</h2>
        <ul className='list2'>
          <li>Maldives</li>
          <li>Los Angeles</li>
          <li>Las Vegas</li>
          <li>Toronto</li>
        </ul> 
      </div>
    </div>
    <div className='row'>
        <p>{props.row}</p>
      </div>
  </>
  )
}

export default footer