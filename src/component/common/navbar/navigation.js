import React from 'react'

import './navigation.css'

function Normalnav() {
  return (
    <>     
    
            <div className="navbar  d-none d-md-flex  d-sm-none opacity-75">
                <div className="abbout " ><a href='#intro'>About me</a></div>
                <div className="skills" ><a href='#skill'>Skills</a></div>
                <div className="project"><a href='#projects'>Project</a></div>
                <div className="contact"><a href='#mycontact'>Contact</a></div>
            </div>


    </>
  )
}


function Mobilenav(props){
  return(

    <>
            {/* <div className='icon col-12 bg-dark text-light d-block d-sm-block d-md-none py-1'>
              <CgMenu size="30px " className='col-2 justify-content-end' />
              <AiOutlineClose size="30px" className='justify-content-center col-8'></AiOutlineClose>
            </div> */}
            <div className="mobilenav col-12 py-3 text-center align-items-center justify-content-evenly d-flex d-sm-flex flex-column d-md-none ">
                <div className="about" onClick={()=>props.ismobile && props.closemobilemenu()}><a href='#intro'>About me</a></div>
                <div className="skills" onClick={()=>props.ismobile && props.closemobilemenu()}><a href='#skill'>Skills</a></div>
                <div className="project" onClick={()=>props.ismobile && props.closemobilemenu()}><a href='#projects'>Project</a></div>
                <div className="contact" onClick={()=>props.ismobile && props.closemobilemenu()}><a href='#mycontact'>Contact</a></div>
            </div>

    </>
  )
}

export {Normalnav, Mobilenav}