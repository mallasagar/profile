import React from 'react'
// import Myheader from '../common/header/header.component'
import Mynavbar from '../common/navbar/navbar.component'
import Mycontact from '../contact/contact'
import Myfooter from '../common/footer/footer'
import Project from '../projects/project'
import Skill from '../skill/skill'
// import About from '../about/about'
import Banner from '../home/banner'
import Intro from './intro'


function Myhomecomponent() {
  return (
   <>
    {/* <Myheader></Myheader> */}
    <Mynavbar></Mynavbar>
    <Banner></Banner>
    <Intro></Intro>
    {/* <About></About> */}
    <Skill></Skill>
    <Project></Project>
    <Mycontact></Mycontact>
    <Myfooter></Myfooter>
    

   </>
  )
}

export default Myhomecomponent