import React from 'react'
import {FaGraduationCap} from 'react-icons/fa'

import './intro.css'

function Intro() {
  return (
    <>
    <div id='intro' className='container-fluid   bg-transparent text-dark my-5 py-5 '>
      {/* Column first */}
            <div id='introabout' className='col-md-10 col-10-6 col-10 py-5 px-5 text-center'>
              <h3>Introduction</h3>
              <hr></hr>
              <p >Hi there it's me Sagar Malla from Imadol lalitpur, Nepal. I have completed my bachelor’s degree in Information Technology from Aryan School of engineering in 2021 AD.</p>
                <p>  I am Self-motivated, Self-taught, dedicated and highly motivated Front-End developer being performance, accessibility and user-experience focused.</p>
            </div>

       {/* column second */}
            <div  id='introedu'className='col-md-10 col-sm-10 col-10 py-5 px-5 text-center' >
              <FaGraduationCap size={"32px"}></FaGraduationCap>
              <h3>Education</h3>
              <hr></hr>
              <h5><strong>Bachelor’s in Information Technology</strong> </h5>
                              Aryan school of engineering
                                <p>Mid-Baneshwor,Kathmandu, Nepal</p>  
            </div>
    </div>
   </>
  )
}

export default Intro