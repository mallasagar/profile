import React from 'react'
import './navbar.css'

function Mynavbar() {
  return (
    <>
            <div className="navbar border border-info  ">
                <div className="abbout " ><a href='#intro'>About me</a></div>
                <div className="skills" ><a href='#skills'>Skills</a></div>
                <div className="project"><a href='#projects'>Project</a></div>
                <div className="contact"><a href='#mycontact'>Contact</a></div>
            </div>
        </>
  )
}

export default Mynavbar