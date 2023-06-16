import React from 'react'
import './banner.css'
function Banner() {
  return (
   <>


   {/* USING BOOTSTRAP */}
    <div className='banner container-fluid row bg-black text-light justify-content-evenly align-items-center text-center  ' >
      <div className=' columnone col-md-4  col-sm-5 col-8  ' >
        <h4 id='frontend' >Frontend Developer</h4>
        <h5 id='reactjs' >Reactjs</h5>
      </div>
      <div className='columntwo col-md-4  col-sm-5 col-10 ' >
      <img
            src="https://media.licdn.com/dms/image/D5603AQGLMdyvgg2rMw/profile-displayphoto-shrink_800_800/0/1686031180942?e=1691625600&v=beta&t=GpltgFLkLNn3hjZwLH68ae8PoNOYQOzNQI2nuK7qr8g"
            alt="sagar malla"
            className="img-fluid rounded-start my-5 "
            style={{width:"300px", height:"300px"}}
          />
      </div>
    </div>








   {/* USING CSS */}
         {/* <div className='bannercontainer'>
          <div className='banneritem1'>Frontend developer
          <p>React js</p></div>
          <div className='banneritem2'>
          <img
            src="https://media.licdn.com/dms/image/D5603AQGLMdyvgg2rMw/profile-displayphoto-shrink_800_800/0/1686031180942?e=1691625600&v=beta&t=GpltgFLkLNn3hjZwLH68ae8PoNOYQOzNQI2nuK7qr8g"
            alt="sagar malla"
            className="img-fluid rounded-start my-5 "
            style={{width:"300px", height:"300px"}}
          />
            </div>
        </div> 
   </div> */}

   </>
  )
}

export default Banner