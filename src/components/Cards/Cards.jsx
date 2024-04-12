import React from 'react'
import './CardStyle.css'
import ImgIcon from './../../assets/img/Group 1000001721.svg'
import Uil from './../../assets/img/uil_calender.svg'
import Oou from './../../assets/img/avatar.svg'
const Cards = (props) => {
  return (
    <div className='Cards'>
      <img src={props.img} alt=""/>
      <div className="circle-1">
        <div className="circle-2">
          <img className='flag' src={props.img1}></img>
        </div>
      </div>
      <div className='icon'>
        <div className="Icon1">
          <img src={Uil} alt="icon" className='IconUil'/>
          <p>{props.textIcon}</p>
        </div>
        <div className="Icon2">
          <img sec={Oou} alt="aat"/> 
          <p>{props.textIcon2}</p>
        </div>
      </div>
      <div className='description'>
        <h2>{props.title}</h2>
        <img src={ImgIcon} />
      </div>
      <div className='description2'>
        <p>{props.text}</p>
        <p>{props.text2}</p>
        <button className='btn3'>{props.btn3}</button>
      </div>
    </div>
  )
}

export default Cards