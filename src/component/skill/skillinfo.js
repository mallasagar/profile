import React from 'react'
import './skillinfo'

function Skillinfo() {
  return (
    <>
      <div id='skill' className='Container-fluid d-flex flex-row justify-content-evenly bg-whitesmoke  '>
        <div  className=' card col-md-8 my-5  text- py-3 text-center px-3 mt-6 bg-whitesmoke ' style={{width:"50rem"}}>
              <h5 className="card-title mt-5">Programming Language</h5>
          <div className="card-body ">
            {/* HTML */}
              <div className="progress  " style={{margin:"12px"}} role="progressbar" aria-label="Example with label" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
              <div className="progress-bar overflow-visible text-dark" style={{width: "80%", backgroundColor:"#E44D26" }}>HTML  80%</div>
              </div>
              {/* CSS */}
              <div className="progress"  style={{margin:"12px"}} role="progressbar" aria-label="Example with label" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
              <div className="progress-bar overflow-visible text-dark" style={{width: "60%", backgroundColor:"#2862E9"}}>CSS  60%</div>
              </div>
              {/* JS */}
              <div className="progress  " style={{margin:"12px"}} role="progressbar" aria-label="Example with label" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100">
              <div className="progress-bar overflow-visible text-dark" style={{width: "55%", backgroundColor:'#F7DF1E' }}>JS 55%</div>
              </div>
              {/* Bootstrap */}
              <div className="progress  " style={{margin:"12px"}} role="progressbar" aria-label="Example with label" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
              <div className="progress-bar overflow-visible text-dark" style={{width: "85%", backgroundColor:'#840AFA' }}>Bootstrap 85%</div>
              </div>
              {/* Sass */}
              <div className="progress  " style={{margin:"12px"}} role="progressbar" aria-label="Example with label" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
              <div className="progress-bar overflow-visible text-dark" style={{width: "80%" }}>Sass 80%</div>
              </div>
              {/* reactjs */}
              <div className="progress  " style={{margin:"12px"}} role="progressbar" aria-label="Example with label" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
              <div className="progress-bar overflow-visible text-dark" style={{width: "70%", backgroundColor:'#61DBFB'}}>React JS 70%</div>
              </div>
              {/* Nodejs */}
              <div className="progress  " style={{margin:"12px"}} role="progressbar" aria-label="Example with label" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
              <div className="progress-bar overflow-visible text-dark" style={{width: "40%", backgroundColor:'#70A861' }}>Node JS 40%</div>
              </div>
              {/* Express js */}
              <div className="progress  " style={{margin:"12px"}} role="progressbar" aria-label="Example with label" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100">
              <div className="progress-bar overflow-visible text-dark" style={{width: "45%"}}>Express JS 45%</div>
              </div>
              {/* MongoDB */}
              <div className="progress  " style={{margin:"12px"}} role="progressbar" aria-label="Example with label" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100">
              <div className="progress-bar overflow-visible text-dark" style={{width: "45%",backgroundColor:'#499C4A' }}>MongoDB 45%</div>
              </div>
              {/* Python */}
              <div className="progress  " style={{margin:"12px"}} role="progressbar" aria-label="Example with label" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
              <div className="progress-bar overflow-visible text-dark" style={{width: "40%", backgroundColor:'#3878AA' }}>Python 40%</div>
              </div>
              {/* Github */}
              <div className="progress  " style={{margin:"12px"}} role="progressbar" aria-label="Example with label" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
              <div className="progress-bar overflow-visible text-white" style={{width: "60%", backgroundColor:'black' }}>Github 60%</div>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skillinfo