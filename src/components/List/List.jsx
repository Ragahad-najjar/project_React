import React from 'react'
import  './ListStyle.css'
import CardSec from '../CardSec/CardSec'
import img_Sec1 from './../../assets/img/img-sec1.png'
import img_Sec2 from './../../assets/img/img-sec-2.png'
import img_Sec3 from './../../assets/img/img-sec-3.png'
import img_Sec4 from './../../assets/img/img-sec4.png'
import img_Sec5 from './../../assets/img/img-sec-5.png'
import img_Sec6 from './../../assets/img/img-sec6.png'
import star from './../../assets/img/Vector.svg'

const List = () => {
    let list_3 = [
        {
        img :img_Sec1 ,
        textIcon:"27, September 2023" ,
        textIcon2:"30+ People",
        title :"Maldives",
        text:"Qui tempore voluptate qui quia commodi ",
        text2:"rem praesentium alias et.",
        price:"3000 $",
        img1:star,
        num:"5.0"

        } ,
        {
        img :img_Sec2 ,
        textIcon:"13, October 2023" ,
        textIcon2:"30+ People",
        title :"Switzerland",
        text:"Qui tempore voluptate qui quia commodi",
        text2:"rem praesentium alias et.",
        price:"1290 $",
        img1:star,
        num:"4.9"

    },
    {   img :img_Sec3 ,
        textIcon:"2, November 2022" ,
        textIcon2:"30+ People",
        title :"Berlin",
        text:"Qui tempore voluptate qui quia commodi ",
        text2:"rem praesentium alias et.",
        price:"2790 $",
        img1:star,
        num:"5.0"

    },
    {   img :img_Sec4 ,
        textIcon:"14, December 2022" ,
        textIcon2:"50+ People",
        title :"Torronto",
        text:"Qui tempore voluptate qui quia commodi ",
        text2:"rem praesentium alias et.",
        price:"1110 $",
        img1:star,
        num:"4.5"

    },
    {   img :img_Sec5 ,
        textIcon:"20, September 2022" ,
        textIcon2:"80+ People",
        title :"Baku",
        text:"Qui tempore voluptate qui quia commodi",
        text2:"rem praesentium alias et.",
        price:"1220 $",
        img1:star,
        num:"4.5"

    },
    {   img :img_Sec6 ,
        textIcon:"27, August 2022" ,
        textIcon2:"100+ People",
        title :"Chinese",
        text:"Qui tempore voluptate qui quia commodi",
        text2:"rem praesentium alias et.",
        price:"2500 $",
        img1:star,
        num:"5.0"

    },

    ]
    return (
    <div className='List '>
        {list_3.map((element ,index) =>{
        return (
        <CardSec key={index}  img={element.img}   
        textIcon={element.textIcon} textIcon2={element.textIcon2}  title={element.title}  text={element.text} 
        text2={element.text2} price={element.price} img1={element.img1} num={element.num}/>
        )
        })}
    </div>
    )
}

export default List