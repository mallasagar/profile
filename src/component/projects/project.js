import React from 'react'

function Project() {
  return (
    <>
    <h5   className='text-center  pt-6 '>Projects</h5>
    <hr id='projects' className='container'></hr>
    <div  className='container  justify-content-evenly bg-light rounded-5 '>
        <div className='row justify-content-evenly pt-3 pb-5  px-3 align-item-center  '>


            <div  className=" col-2 card  " style={{width:"16rem"}}>
                <img src={require('../../image/js.png')} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">Art</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#ad" className="btn btn-primary">Github</a>
            </div>
            </div>
            <div  className="  col-2 card " style={{width:"16rem"}}>
                <img src={require('../../image/js.png')} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">BSM Nepal</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Github</a>
            </div>
            </div>
            <div  className="  col-2 card " style={{width:"16rem"}}>
                <img src={require('../../image/js.png')} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">Track My progress</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Github</a>
            </div>
            </div>
            <div  className="col-2 card "  style={{width:"16rem"}}>
                <img src={require('../../image/js.png')} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">Art</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Github</a>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Project
