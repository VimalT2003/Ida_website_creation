import React from 'react'
import NavbarComp from './NavbarComp';
import IDA from './IDA ';
import TimeLine from './TimeLine';
import Projects from './Projects';
import Clients from './Clients';
import Banner from './Banner';
import Services from './Services';
import Footer from './Footer';


function Home() {
  return (
    <div id="home">
       <NavbarComp id="navbarTab"/>
      <Banner id="bannerTab"/>
      <IDA id="idaTab"/>
      <Services id="servicesTab"/>
      <TimeLine id="timelineTab"/>
      <Projects id="projectsTab"/>
      <Clients id="clientsTab"/>
      <Footer id="footerTab"/>
    </div>
  )
}

export default Home
