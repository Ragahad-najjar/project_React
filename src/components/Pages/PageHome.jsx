import React from 'react'
import Header from './../Header/Header'
import Nav from '../Nav/Nav';
import MenuBtn from './../../assets/img/Menu.svg'
import logo from './../../assets/img/logo.png'
import Category from './../Category/Category'
import Container from './../Container/Container'
import Card from './../card/Card' 
import Explore from './../Explore/Explore' 
import image1 from './../../assets/img/e1.png'
import image2 from './../../assets/img/e2.png'
import ListCard from './../ListCard/ListCard'
import Cards from './../Cards/Cards'
import Child from './../Child/childe'
import Hero from './../Hero/Hero' 
import BgHome from './../../assets/img/header-bg.png'
import Footer from './../footer/footer'
import LogoFooter from './../../assets/img/Group 1000001807.png'
import CloseBtn from './../../assets/img/Group.svg'
const PageHome = () => {
  return (
    <>
    <Header img={BgHome}>
    <Nav menu={[{title:"Home" , path:'/'},{title:"About" ,path:'/about'},{title:"Package" ,path:'/Package'} ,{title:"Services"}]} logo={logo} btn="Get in touch" MenuBtn={MenuBtn} CloseBtn={CloseBtn}/>
    <Hero title="No Matter Where You're Going To," title2="We'll Take You There"/></Header> 
    <Category title="CATEGORY" text="We Offer Best Services"></Category>
    <Container>
      <Card/>
    </Container>
    <Explore >
      <Child img={image1} FirstTitle="PROMOTION"  SecTitle="Explore Nature" btn2="View Package"></Child>
      <Child img={image2} FirstTitle="PROMOTION"  SecTitle="Explore Cites" btn2="View Package"></Child>
    </Explore>
    <Category title="TRENDY" text="Our Trending Tour Packages  "></Category>
    <ListCard>
      <Cards/>
    </ListCard>
    <Footer img={LogoFooter} text1= "Travel helps companies manage payments easily." title1="Company" 
        title2="Destinations" row="Copyright@Xpro 2023 All Right Reserved">
    </Footer>
    </>
  )
}

export default PageHome