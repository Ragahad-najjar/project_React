import React from 'react'
import Header from './../Header/Header'
import Nav from '../Nav/Nav';
import BgAbout from './../../assets/img/bgAbout.png'
import MenuBtn from './../../assets/img/Menu.svg'
import logo from './../../assets/img/logo.png'
import HeroAbout from './../HeroAbout/Hero'
import Sec1 from './../Sec1/Sec1'
import Container2 from './../Container2/Container2'
import Eillps from './../../assets/img/Eillps.png'
import Wanderlust from './../Wanderlust/Wanderlust'
import ImgSec from './../../assets/img/imgsec.png'
import SecWan from './../SecWan/SecWan';
import Video from './../../assets/img/Video.svg'
import proImg from './../../assets/img/pro-img.png'
import Footer from './../footer/footer'
import LogoFooter from './../../assets/img/Group 1000001807.png'
import CloseBtn from './../../assets/img/Group.svg'
const PageAbout = () => {
  return (
    <>
    <Header img={BgAbout} >
    <Nav menu={[{title:"Home", path:'/'},{title:"About" , path:'/about'},{title:"Package" , path:'/Package'},{title:"Services"}]} logo={logo} btn="Get in touch" MenuBtn={MenuBtn} CloseBtn={CloseBtn}/>
    <HeroAbout title="About US" /></Header> 
    <Sec1>
    <Container2 title1="Promotion" title2="We Provide You Best Europe Sightseeing Tours" text="Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam!" btn="View Packages"
        img={Eillps}/>
    </Sec1>
    <Wanderlust img={ImgSec}>
        <SecWan img={Video } text="Wanderlust" />
    </Wanderlust>
    <Sec1>
    <Container2 title1="Trend" title2="Our Popular Tour Plans" text="Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium." 
        num1="78%" num2="55%" des1="Vacations" des2="Honeymoon"
        img={proImg} reverse={true}/>
    </Sec1>
    <Footer img={LogoFooter} text1= "Travel helps companies manage payments easily." title1="Company" 
        title2="Destinations" row="Copyright@Xpro 2023 All Right Reserved">
    </Footer>
    </>
  )
}

export default PageAbout