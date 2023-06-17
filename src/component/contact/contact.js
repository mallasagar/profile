import React from 'react'
import './contact.css'

function Mycontact() {
  return (
    <>
    
    <div id='mycontact' className='container-fluid bg-white text-dark justify-content-center  mt-5 mb-3 py-5 border border-info'>
    <h3 className='text-center mt-4'>Contact</h3>
    <hr></hr>

    <div className='row bg-light rounded-4 justify-content-center align-items-center '>
        <div className='col-10 col-sm-10 col-md-5  py-5 text-center  '>
          <h4>Email Me on:</h4>
          <p>mallasagar0101@gmail.com</p>
        </div>
        <div className='col-10 col-sm-10 col-md-5 py-5 px-2  justify-content-center   '>
              <div className='contactform bg-dark text-light p-5  rounded-4 '>
                 <label >Full Name</label>
                 <input type='name ' className='rounded-3'></input>
                 <span></span>
                 <label>Email</label>
                 <input type='email' className='rounded-3'></input>
                 <span></span>
            
                 <label>Message</label>
                 {/* <input type='text' className=' rounded-3' style={{ height:"150px"}}></input> */}
                 <textarea className="form-control " rows="4"></textarea>
                 <span></span>
                 <div className='container row justify-content-center mt-4'>
                    <button   className='bg-danger text-white rounded-3 col-12 col-sm-8 col-md-6'  disabled>Submit</button>
                 </div>
              </div>

        </div>
        {/* style={{width:"30%", height:"35px", marginTop:"5px", marginLeft:'35%'}} */}
    </div>
   </div>
</>
  )
}

export default Mycontact