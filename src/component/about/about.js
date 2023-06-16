import React from 'react'

function About() {
  return (
<>
        <div id='aboutme border border-info'>
        <div className="card   my-5 bg-dark text-white container" >
      <div className="row g-0 justify-content-center align-items-center">
        <div className="col-12 col-sm-12 col-md-3">
          <img
            src="https://media.licdn.com/dms/image/D5603AQGLMdyvgg2rMw/profile-displayphoto-shrink_800_800/0/1686031180942?e=1691625600&v=beta&t=GpltgFLkLNn3hjZwLH68ae8PoNOYQOzNQI2nuK7qr8g"
            alt="sagar malla"
            className="img-fluid rounded-start my-5 "
            style={{width:"200px", height:"200px"}}
          />
        </div>
        <div className="col-12 col-sm-12 col-md-8 pb-5">
          <div className="card-body">
            <h5 className="card-title">About Me</h5>
            <hr></hr>
            <p className="card-text">
            Hi there it's me Sagar Malla from Imadol lalitpur, Nepal. 
             I have completed my bachelor’s degree in Information 
             Technology from Aryan School of engineering in 2021 AD.</p>
            <p>
            I am Self-motivated, Self-taught, dedicated and highly motivated 
            Front-End developer being performance, accessibility and user-experience focused.
            </p>
            <p>
           <strong>why react js ? </strong> <br></br>
            I am intrested in Single Page Application. I have selected reactjs as User Interface library because of its performance, efficiency, easy to learn, fun to play with components, states etc.
            </p>
            <p>
           <strong>where i see myself in future ? </strong> <br></br>
            I see myself as mern-stack developer in upcoming years. 
            </p>
            <p className="card-text " >
              <small className="text-white">Thank you.</small>
            </p>
          </div>
        </div>
      </div>
    </div>
        </div>
</>
  )
}

export default About