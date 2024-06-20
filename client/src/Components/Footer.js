import React from "react";

function Footer() {
  return (
    <div>
      <div className=" bodyBac p-5">
        <div className="row container g-5">
          <div className="col-12 col-md-4"  >
            <h4>Contact Us</h4>
            <div data-aos-delay="100" data-aos-duration="1000" data-aos="zoom-out">
            <p className="my-3 lead" style={{fontSize:"15px"}}>
              INDUSTRIAL DESIGN & ANIMATIONS Karunaa Conclave,
              <br />
              No.1963, J Block, 3rd Street, 5th Main Road, Anna Nagar West, Anna
              Nagar, Chennai, Tamil Nadu - 600040, INDIA
            </p>
            <p className="my-4 lead" style={{fontSize:"15px"}}>E mail: info@idacreations.com</p>
            </div>
           
          </div>

          <div className="col-12 col-md-4" >
            <h4>Locate us on Map</h4>
            <div id="map-container" className="mt-4" style={{width: "100%", height: "250px"}}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1990138.846881197!2d80.13086719999997!3d13.03631246747364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1718861050466!5m2!1sen!2sin" width="300" height="250" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
          </div>

          <div className="col-12 col-md-4 d-flex " data-aos-delay="100" data-aos-duration="1000" data-aos="zoom-out">
            <div className="text-center mx-2 mx-md-3">
            <img className="hovered" src="https://idacreations.com/img/email.png" height="50px" width="50px" alt="" />
            <p className="" style={{fontSize:"13px"}}>Send Enquiry</p>
            </div>

            <div className="text-center mx-2 mx-md-3">
            <img className="hovered" src="https://idacreations.com/img/instagram.png" height="50px" width="50px" alt="" />
            <p className="" style={{fontSize:"13px"}}>Insta Profile</p>
            </div>

            <div className="text-center mx-2 mx-md-3">
            <img className="hovered" src="https://idacreations.com/img/whatsapp.png" height="50px" width="50px" alt="" />
            <p className="" style={{fontSize:"13px"}}>Whatsapp</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
