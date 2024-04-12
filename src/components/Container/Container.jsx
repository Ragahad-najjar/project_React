import React from 'react'
import './ContainerStyle.css'
import Card from '../card/Card'
import services1 from './../../assets/img/service-1.png'
import services2 from './../../assets/img/service-2.png'
import services3 from './../../assets/img/service-3.png'
import services4 from './../../assets/img/service-4.png'
const Container = () => {
  let list_1 = [{
    img:services1,
    title:"Guided Tours" ,
    text:"sunt qui repellat saepe quo velit aperiam id aliquam placeat."
  },
  {img:services2,
  title:"Best Flights Options " ,
  text:"sunt qui repellat saepe quo velit aperiam id aliquam placeat."
},
{
  img:services3 ,
  title:"Religious Tours ",
  text:"sunt qui repellat saepe quo velit aperiam id aliquam placeat."
},
{
  img:services4, 
  title:"Medical insurance ", 
  text:"sunt qui repellat saepe quo velit aperiam id aliquam placeat."
}
]
  return (
    <>
    <div className="Container">
      {list_1.map((element ,index) =>{
        return (
          <Card key={index}  img={element.img} title={element.title} text={element.text} />
        )
        })}
    </div>
    </>
  )
}

export default Container