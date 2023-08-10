import React from 'react'
import './contact.css'
import{useState,useEffect} from 'react'
import  axios from 'axios'

function Mycontact() {

  const[name, setname]=useState('')
  const[nameerr, setnameerr]=useState('')
  const[email, setemail]=useState('')
  const[emailerr, setemailerr]=useState('')
  const[message, setmessage]=useState('')
  // const[messageerr, setmessageerr]=useState('')



  useEffect(()=>{
    if(!name){
      setnameerr(" ")
    }else if(name.includes('1'||'2'||'3'||'4'||'5'||'6'||'7'||'8'||'9'||'0')){
      setnameerr("Invalid name")
    }
    else if(name.includes('!'||'~'||'@'||'#'||'$'||'^'||'*')){
      setnameerr("Invalid name")
    }
    else {
      setnameerr(' ')
    }
  },[name])

  useEffect(()=>{
    if(!email){
      setemailerr(" ")
    }else if(email.includes(' ')||(!email.includes('@') || !email.includes('.com'))){
      setemailerr("Invalid Email")
    }
   
    else{
      setemailerr(' ')
    }
  },[email])

  // useEffect(()=>{
  //   if(!message){
  //     setmessageerr("Enter your Message ")
  //   }
    
  //   else{
  //     setmessageerr(' ')
  //   }
  // },[message])


const handleSubmit=(ev)=>{
  ev.preventDefault()
  axios.post('https://formsubmit.co/1f3b448d36f0052684b72bb9e4cb5532', {
    name:name,
    email:email,
    message:message
  })
  .then(function (response) {
    alert("Successfully Submited")
    
  })
  
  .catch(function (error) {
    alert("Error in Submission")
  });
  setemail('')
  setname('')
  setmessage('')
  

}


  return (
    <>
    
    <div id='mycontact' className='container-fluid bg-white text-dark justify-content-center  mt-5 mb-3 py-5 '>
    <h3 className='text-center mt-4'>Contact</h3>
    <hr></hr>

    <div className='row bg-light rounded-4 justify-content-center align-items-center '>
        <div className='col-10 col-sm-10 col-md-5  py-5 text-center  '>
          <h4>Email Me on:</h4>
          <p>mallasagar0101@gmail.com</p>
        </div>
        <form  onSubmit={handleSubmit} className='col-10 col-sm-10 col-md-5 py-5  justify-content-center   '>
              <div className='contactform bg-dark text-light p-5  rounded-4 '>
                 <input type='name'value={name} name='name' placeholder='Full Name' className='rounded-3 px-1' onChange={(ev)=>{
                   setname(ev.target.value)
                  }}></input>
                  <label className='text-danger' >{nameerr}</label>
                 <span></span>
                 <input type='email' value={email} name='email' placeholder='Email' className='rounded-3 px-1' onChange={(ev)=>{setemail(ev.target.value)}}></input>
                 <span></span>
                 <label  className='text-danger'>{emailerr}</label>
            
                 {/* <input type='text' className=' rounded-3' style={{ height:"150px"}}></input> */}
                 <textarea className="form-control   rounded-3 px-1" value={message} placeholder='Write your messages.' type='message' name='message' onChange={(ev)=>{setmessage(ev.target.value)}} rows="4"></textarea>
                 <span></span>
                 <label className='text-danger'></label>
                 <div className='container row justify-content-center mt-4'>
                    <button   className='bg-danger text-white rounded-3 col-12 col-sm-8 col-md-6'onSubmit={handleSubmit} >Submit</button>
                 </div>
              </div>

        </form>
        {/* style={{width:"30%", height:"35px", marginTop:"5px", marginLeft:'35%'}} */}
    </div>
   </div>
</>
  )
}

export default Mycontact