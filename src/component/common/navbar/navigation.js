import React from 'react'
import './navigation.css'

function Normalnav() {
  return (
    <>     
        <div className="navbar  d-none d-md-flex  d-sm-none  " style={{background:"rgb(22,22,22)"}}>
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