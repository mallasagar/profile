import React from 'react'

function Project() {
  return (
    <>
   <h5 id='projects'   className='text-center  pt-5 mt-5 mb-3'>Projects</h5>
    <hr className='container mb-5'></hr>
<div className='container '>
<div class="row row-cols-1 row-cols-md-3 g-3">
  <div class="col">
    <div class="card">
      <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp" class="card-img-top" alt="Hollywood Sign on The Hill"/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          This is a longer card with supporting text below as a natural lead-in to
          additional content. This content is a little bit longer.
        </p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp" class="card-img-top" alt="Palm Springs Road"/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          This is a longer card with supporting text below as a natural lead-in to
          additional content. This content is a little bit longer.
        </p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp" class="card-img-top" alt="Los Angeles Skyscrapers"/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp" class="card-img-top" alt="Skyscrapers"/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          This is a longer card with supporting text below as a natural lead-in to
          additional content. This content is a little bit longer.
        </p>
      </div>
    </div>
</div>
  </div>
</div>

    {/* <h5   className='text-center  pt-6 '>Projects</h5>
    <hr id='projects' className='container'></hr>
    <div  className='container  justify-content-evenly bg-light rounded-5 '>
    <div className='projectcard row justify-content-evenly pt-3 pb-5  px-3 align-item-center  '>


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
    </div> */}
    </>
  )
}

export default Project
