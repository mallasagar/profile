import React from 'react'
import { Normalnav,Mobilenav } from './navigation'
import {useState} from 'react'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'


function Mynavbar() {

  let[open, setopen]=useState(false)

  const hamburgericon=
  <div className='col-12  align-items-center'>
    <AiOutlineMenu size={"30px"} 
                          className=' d-sm-flex d-md-none  py-1  d-block ms-5 justify-content-end    '
                          onClick={()=>{setopen(!open)}}>
                      </AiOutlineMenu>
    </div>
  
  const closeicon= <AiOutlineClose size={"30px"} 
                          className=' d-sm-flex d-md-none  py-1  d-flex  col-12  '
                          onClick={()=>{setopen(!open)}}>
                      </AiOutlineClose>
  
 const closemobilemenu=()=>setopen(false);


  return (
    <>
    <Normalnav></Normalnav>
        {open ? closeicon : hamburgericon}
        {open && <Mobilenav ismobile={true} closemobilemenu={closemobilemenu}/>}
       
    </>
  )
}

export default Mynavbar