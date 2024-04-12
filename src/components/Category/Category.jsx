import React from 'react'
import './CategoryStyle.css'
const Category = ({title , text}) => {
  return (
    <div className='Category'>
    <h1 >{title}</h1>
    <h2>{text}</h2>
    </div>
  )
}

export default Category