import React from 'react'
import './skill.css'
import html from '../../image/html-5.png'
import css from '../../image/css-3.png'
import js from '../../image/js.png'
import react from '../../image/reactjs.png'
import nodejs from '../../image/nodejs.png'
import mongodb from '../../image/mongodb.png'
import bootstrap from '../../image/bootstrap.png'
import python from '../../image/python.png'
import github from '../../image/github-logo.png'
function Skill() {
  return (
    <>
        <div id='skills' className='skillimg container '>
          <img src={html} alt="Logo" className='col-1'  />
          <img src={css} alt="Logo" className='col-1'  />
          <img src={js} alt="Logo" className='col-1'  />
          <img src={react} alt="Logo" className='col-1'   />
          <img src={nodejs} alt="Logo"className='col-1' />
          <img src={mongodb} alt="Logo"className='col-1'  />
          <img src={bootstrap} alt="Logo"className='col-1'  />
          <img src={python} alt="Logo" className='col-1' />
          <img src={github} alt="Logo" className='col-1' />
          <img src={html} alt="Logo" className='col-1'  />
        </div>
    </>
  )
}

export default Skill