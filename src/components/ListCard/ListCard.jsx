import React from 'react'
import Cards from '../Cards/Cards'
import './ListCard.css'
import image3 from './../../assets/img/n1.png'
import image4 from './../../assets/img/n2.png'
import image5 from './../../assets/img/n3.png'
import flag_1 from './../../assets/img/flag-1.png'
import flag_2 from './../../assets/img/flag-2.png'
import flag_3 from './../../assets/img/flag-3.png'
const ListCard = () => {
    let list_2 = [
        {
        img :image3 ,
        img1:flag_1,
        textIcon:"8 Days" ,
        textIcon2:"30 People Going",
        title:"Switzerland",
        btn3:"Explore Now ",
        text:"Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod" ,
        text_2:"eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos."
        } ,
        {
        img :image4 ,
        img1:flag_2,
        textIcon:"8 Days" ,
        textIcon2:"60 People Going",
        title:"Amazon",
        btn3:"Explore Now ",
        text:"Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod" ,
        text_2:"eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos."
    },
    {   img :image5 ,
        img1:flag_3,
        textIcon:"8 Days" ,
        textIcon2:"120 People Going",
        title:"Giza",
        btn3:"Explore Now ",
        text:"Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod" ,
        text_2:"eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos."
    }
    ]
    return (
    <div className='ListCard '>
        {list_2.map((element ,index) =>{
        return (
        <Cards key={index}  img={element.img}   img1={element.img1} 
        textIcon={element.textIcon} textIcon2={element.textIcon2}  title={element.title} btn3={element.btn3} text={element.text} 
        text_2={element.text_2}/>
        )
        })}
    </div>
    )
}

export default ListCard