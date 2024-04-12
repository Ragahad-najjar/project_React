import React from 'react';
import Nav from './components/Nav/Nav';
import logo from './assets/img/logo.png'
import './App.css';
import Hero from './components/Hero/Hero' 
import Header from './components/Header/Header'
import MenuBtn from './assets/img/Menu.svg'
import Category from './components/Category/Category'
import Container from './components/Container/Container'
import Card from './components/card/Card' 
import Explore from './components/Explore/Explore' 
import image1 from './assets/img/e1.png'
import image2 from './assets/img/e2.png'
import ListCard from './components/ListCard/ListCard'
import Cards from './components/Cards/Cards'
import Child from './components/Child/childe'
import Footer from './components/footer/footer'
import LogoFooter from './assets/img/Group 1000001807.png'
import BgHome from './assets/img/header-bg.png'
import BgAbout from './assets/img/bgAbout.png'
import BgServices from './assets/img/bgServices.png' 
import HeroAbout from './components/HeroAbout/Hero';
import Sec1 from './components/Sec1/Sec1';
import Container2 from './components/Container2/Container2'
import Eillps from './assets/img/Eillps.png'
import proImg from './assets/img/pro-img.png'
import Wanderlust from './components/Wanderlust/Wanderlust'
import ImgSec from './assets/img/imgsec.png'
import SecWan from './components/SecWan/SecWan';
import Video from './assets/img/Video.svg'
import List from './components/List/List'
import CardSec from './components/CardSec/CardSec'
import PageHome from'./components/Pages/PageHome'
import { Route , Routes } from 'react-router-dom';
import PageAbout from './components/Pages/PageAbout';
import PagePackages from './components/Pages/PagePackages';

function App() {
  return (
    <div className="App">
{/*     <Header img={BgHome}>
    <Nav menu={["Home", "Services", "About", "Package"]} logo={logo} btn="Get in touch" MenuBtn={MenuBtn}/>
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
    </Footer> */}
 {/*    <Header img={BgAbout} >
    <Nav menu={["Home", "Services", "About", "Package"]} logo={logo} btn="Get in touch" MenuBtn={MenuBtn} />
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
    <Header img={BgServices} >
    <Nav menu={["Home", "Services", "About", "Package"]} logo={logo} btn="Get in touch" MenuBtn={MenuBtn} />
    <HeroAbout title="Travel With Us" /></Header> 
    <List>
      <CardSec/>
    </List>
    <Footer img={LogoFooter} text1= "Travel helps companies manage payments easily." title1="Company" 
        title2="Destinations" row="Copyright@Xpro 2023 All Right Reserved">
    </Footer> */}
    <Routes>
        <Route path="/" element={<PageHome/>} />  
        <Route path="/about" element={<PageAbout/>} /> 
        <Route path="/Package" element={<PagePackages/>} /> 
      </Routes>
    </div>
  );
}

export default App; 
