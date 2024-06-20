import React from "react";
import "./TimeLine.css";

export default function TimeLine() {
  return (
    <div class="body p-1 pt-5">
      <div>
      <h1 className="text-center text-white">Our Working Process</h1>
        <p className="text-center text-white mt-3 lead">A well-structured workflow with great design execution</p>
        </div>
      <div className="timeline">
        <div className="timeline-container left-continer">
            <img className="img"  height="50px" width="50px" src="https://w7.pngwing.com/pngs/26/947/png-transparent-one-1-single-number-numeral-typography-alphabet.png" alt="" />
          <div className="text-box">
            
            <img src="https://idacreations.com/img/7566.jpg" height="100px" className="" width="100px" alt="" />
            <h4>Discussion</h4>
            <p>
            Under the client's business,goals and challenges for building relationship
            </p>
            <span className="left-container-arrow"></span>
          </div>
        </div>

        <div className="timeline-container right-container">
            <img  className="img" src="https://p.kindpng.com/picc/s/351-3511379_two-2-number-numeral-typography-alphabet-gambar-angka.png" height="50px" width="50px" alt="" />
          <div className="text-box">
            
            <img src="https://idacreations.com/img/3081627.jpg" height="100px" className="" width="100px" alt="" />
            <h4>Ideate</h4>
            <p>
            Gather ideas and create the first concept for the future product
            </p>
            <span className="right-container-arrow"></span>
          </div>
        </div>

        <div className="timeline-container left-container">
            <img className="img" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT68QRIaAWYL7Tvw9kcMrXsnqgM2AHoHeLPwDwTaZn8Un3JD7e3" height="50px" width="50px" alt="" />
          <div className="text-box">
           
            <img src="https://idacreations.com/img/Work_7.jpg" height="100px" className="" width="100px" alt="" />
             <h4>Execution</h4>
             <p>
            Provide the first draft of a project,accept minor and major revisions.
            </p>
            <span className="left-container-arrow"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
