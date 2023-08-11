import React from 'react'
import './banner.css'
import Typed from 'typed.js';
function Banner() {

  const el = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Frontend Developer'],
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
    <div className='banner container-fluid flex row   justify-content-evenly align-items-center text-center  ' >
      <div className=' columnone col-md-4  col-sm-5 col-8  ' >
        <h1 id='frontend' >Hi there It's me</h1>  <h2 className='text-info'>Sagar Malla</h2>
        <h5 id='reactjs' >I am <span style={{color:'red' }} ref={el} /></h5>
      </div>
      <div className='columntwo col-md-4    col-sm-5 col-10 ' >
      <img 
            className="bannerpic img-fluid rounded-start my-5   "
            src={require('../../image/profile.jpg')}
            alt="profile pic"
            style={{width:"300px", height:"300px"}}
          />
      </div>
    </div>
   </>
  )
}
export default Banner
