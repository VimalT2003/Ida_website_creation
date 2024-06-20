import React from 'react'

function Projects() {
  return (
    <div className='container mt-0  pt-5'>
        <h1 className="text-center">Our Projects</h1>
        <p className="text-center mt-3 mb-5 lead">Have a sneak peak at the Arts we Crafted</p>
      <div class="row g-5" style={{display:"flex",justifyContent:"space-between"}}>
  <div class="col-12 col-md-4 " >
    <div class="card shadow-lg hovered">
      <img height="200px" src="https://idacreations.com/img/WhatsApp%20Image%202024-01-02%20at%2009.57.14_a3069c35.jpg" class="card-img-top w-100" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Precision Strike</h5>
        <p class="card-text">Mobile shooting game</p>
        <button className="btn btn-dark">Learn More</button>
      </div>
    </div>
  </div>
  <div class="col-12 col-md-4">
    <div class="card shadow-lg hovered">
      <img height="200px" src="https://idacreations.com/img/WhatsApp%20Image%202024-01-02%20at%2009.57.14_6acdfbdb.jpg" class="card-img-top w-100" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Turbo Thurst</h5>
        <p class="card-text ">Mobile legends AAA title racing mobile game</p>
        <button className="btn btn-dark">Learn More</button>
      </div>
    </div>
  </div>
  <div class="col-12 col-md-4">
    <div class="card shadow-lg hovered">
      <img height="200px" src="https://idacreations.com/img/WhatsApp%20Image%202024-02-14%20at%208.48.00%20PM.jpeg" class="card-img-top w-100" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Startup Fest Expo</h5>
        <p class="card-text">Oneyes startup fest expo</p>
        <button className="btn btn-dark">Learn More</button>
      </div>
    </div>
  </div>
  
  {/* </div> */}
</div>
    </div>
  )
}

export default Projects
