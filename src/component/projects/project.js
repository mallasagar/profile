import React from 'react'
import './project.css'

function Project() {
  return (
    <>
   <h5 id='projects'   className='text-center  pt-5 mt-5 mb-3'>Projects</h5>
   <hr className='container'></hr>
    <div  className='container  justify-content-evenly bg-light rounded-5  '>
    <div className='projectcard row justify-content-evenly pt-3 pb-5  px-3 align-item-center  '>


            <div  className=" col-8 card  " style={{width:"20rem"}}>
                <img src={require('../../image/beauty-art.PNG')} className="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">Art</h5>
                <p className="card-text">It is an  Responsive, Dynamic Webapplication  </p>
                    <div className='d-flex justify-content-between'>
                    <a href="https://github.com/mallasagar/art" className="btn btn-dark">Demo</a>
                    <a href="https://github.com/mallasagar/art" className="btn btn-dark">Code</a>
                    </div>
                </div>
            </div>

            <div  className="  col-8 card " style={{width:"20rem"}}>
                <img src={require('../../image/js.png')} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">BSM Nepal</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div className='d-flex justify-content-between'>
                        <a href="https://github.com/mallasagar/art" className="btn btn-dark">Demo</a>
                        <a href="https://github.com/mallasagar/art" className="btn btn-dark">Code</a>
                        </div>
                    </div>
                </div>
            <div  className="  col-8 card " style={{width:"20rem"}}>
                <img src={require('../../image/js.png')} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">Track My progress</h5>
            <p className="card-text">Responsive, Dynamic</p>
            <a href="ht" className="btn btn-dark">Code</a>
            </div>
            </div>
            <div  className="col-8 card "  style={{width:"20rem"}}>
                <img src={require('../../image/js.png')} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">AutoInfo</h5>
            <p className="card-text">Responsive, Dynamic</p>
            <a href="https://github.com/mallasagar/autoinfo" className="btn btn-dark">Github</a>
            </div>
            </div>
        </div>
    </div> 
    </>
  )
}

export default Project
