import React from 'react'
import './banner.css'
import Typed from 'typed.js';
function Banner() {

  const el = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Frontend Developer','React Developer','Frontend Developer','Video Editor'],
      typeSpeed: 100,
      backSpeed: 90,
     
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
 
     
    };
  }, []);

  return (
   <>

   {/* USING BOOTSTRAP */}
    <div className='banner container-fluid flex row bg-black text-light  justify-content-evenly align-items-center text-center  ' >
      <div className=' columnone col-md-4  col-sm-5 col-8  ' >
        <h1 id='frontend' >Hi there It's me <h2 className='text-info'>Sagar Malla</h2></h1> 
        <h5 id='reactjs' >I am <span style={{color:'red'}} ref={el} /></h5>
      </div>
      <div className='columntwo col-md-4    col-sm-5 col-10 ' >
      <img
            src="https://media.licdn.com/dms/image/D5603AQGLMdyvgg2rMw/profile-displayphoto-shrink_800_800/0/1686031180942?e=1691625600&v=beta&t=GpltgFLkLNn3hjZwLH68ae8PoNOYQOzNQI2nuK7qr8g"
            alt="profile pic"
            className="img-fluid rounded-start my-5   "
            style={{width:"300px", height:"300px"}}
          />
      </div>
    </div>
   </>
  )
}
export default Banner
