import React from 'react'
import {AiFillFacebook,AiFillLinkedin,AiFillGithub} from 'react-icons/ai'
import {RxDividerVertical}from 'react-icons/rx'

function Myfooter() {
  return (
    <>
    <div id='myfoot border border-primary'>
    <div className='container-fluid bg-dark text-white '>
          <div className='col-12 align-items-center justify-content-center p-3'>
             Connect: <RxDividerVertical className=' col-1 px-2' style={{height:"32px", width:"32px", color:"white"}}></RxDividerVertical>
           <a href="https://www.facebook.com/mallasagar46/"> 
                <AiFillFacebook className='px-1 col-1 ' style={{height:"32px", width:"32px", color:"white"}}></AiFillFacebook></a> 
            {/* <a href='#'><AiFillInstagram className='px-1 col-1 ' style={{height:"32px", width:"32px", color:"white"}} ></AiFillInstagram></a> */}
            <a href='https://www.linkedin.com/in/mallasagar/'><AiFillLinkedin className='px-1 col-1 ' style={{height:"32px", width:"32px", color:"white"}} ></AiFillLinkedin></a>
            <a href='https://github.com/mallasagar'><AiFillGithub className='px-1 col-1 ' style={{height:"32px", width:"32px", color:"white"}}></AiFillGithub></a>    
          </div>
        </div>
    </div>
    
    </>
  )
}

export default Myfooter