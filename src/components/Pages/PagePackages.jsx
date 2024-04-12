import React from 'react'
import Header from './../Header/Header'
import Nav from '../Nav/Nav';
import MenuBtn from './../../assets/img/Menu.svg'
import logo from './../../assets/img/logo.png'
import HeroAbout from './../HeroAbout/Hero'
import BgPackages from './../../assets/img/bgServices.png' 
import Footer from './../footer/footer'
import LogoFooter from './../../assets/img/Group 1000001807.png'
import List from './../List/List'
import CardSec from './../CardSec/CardSec'
import CloseBtn from './../../assets/img/Group.svg'
const PagePackages = () => {
  return (
    <>
    <Header img={BgPackages} >
    <Nav menu={[{title:"Home" , path:'/'},{title:"About" , path:'/about'},{title:"Package" , path:'/Package'},{title:"Services"}]} logo={logo} btn="Get in touch" MenuBtn={MenuBtn} CloseBtn={CloseBtn} />
    <HeroAbout title="Travel With Us" /></Header> 
    <List>
        <CardSec/>
    </List>
    <Footer img={LogoFooter} text1= "Travel helps companies manage payments easily." title1="Company" 
        title2="Destinations" row="Copyright@Xpro 2023 All Right Reserved">
    </Footer> 
    </>
)
}

export default PagePackages