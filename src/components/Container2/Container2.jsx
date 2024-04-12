import React from 'react'
import './Container2Style.css'
const Container2 = (props) => {
  return (
    <div className='Container2'style={{flexDirection:(props.reverse)?"row-reverse" :"row"}}>
      <div className='Right'style={{paddingLeft:(props.reverse)?"":"70px"}}>
        <h1>{props.title1}</h1>
        <h2>{props.title2}</h2>
        <p className='text' style={{maxWidth:(props.reverse)?"630px":"555px"}} >{props.text}</p>
        <button className='btn4' style={{display:(props.reverse)?"none":"block"}}>{props.btn}</button>
        <div className='numDes'>
        <div className='num'>
          <p className='num1'>{props.num1}</p>
          <p className='des'>{props.des2}</p>
            </div>
        <div className="des1">
          <p className='num1'>{props.num2}</p>
          <p className='des'>{props.des1}</p>
        </div>
        </div>
      </div>
      <div className="left"style={{marginLeft:(props.reverse)?"70px":""}}>
        <img src={props.img} />
      </div>
    </div>
  )
}

export default Container2