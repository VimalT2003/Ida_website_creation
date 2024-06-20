import { faDisplay } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

function IDA () {

    // const body = {
        // height:"100vh",
        // width:"100vw",
    //     display:"flex",
    //     justifyContent:"center",
    //     alignItems:"center",
    //     flexDirection:"column"
    // }
  return (
    <div className='container my-2 my-md-5' id="ida">
      <h2 className='text-center my-3'>IDA - AR, VR and MR Company in India</h2>
      <div className='row my-3 '>
        <div className='col-12 col-md-8' data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
            <p className='lead' style={{textAlign:"justify",fontSize:"18px"}}>We IDA - Industrial Design and Animation is a creative and Innovative Digital Retransformation organisation with Focus the stream on both Web 3.0 and Industry 4.0 solutions. We Transform and elevate your Insustry and Business With Immersive Technical solution with extensiveand wide range of Imagination that becomes Possible.</p>
            <p className='my-3 lead' style={{textAlign:"justify",fontSize:"18px"}}>We @IDA Transform your needs and reinvent the Your business for upcoming digital future. We create and design based on your needs with technologies like AR ( Augmented Reality ), VR( Virtual Reality ), MR( Mixed Reality ) and XR( eXtended Reality ). To reshape the entire future.</p>
            <p className='my-3 lead' style={{textAlign:"justify",fontSize:"18px"}}>Join Us into the Immersive Future</p>
            <button className="btn btn-dark px-3 py-2">Learn more</button>
        </div>
        <div className="col-12 col-md-4" >
        <img className='img-fluid' src="https://idacreations.com/img/6650956%20copy.png" alt="" />
      </div>
      </div>
    </div>
  )
}

export default IDA 
