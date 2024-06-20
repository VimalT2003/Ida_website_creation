import React, { useState } from 'react';
import './NavbarComp.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import ContactModal from './ContactModal';
import App from '../App';

function NavbarComp() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light fixed-top" data-bs-theme="">
        <div className="container-lg">
          <img src="https://idacreations.com/img/IDA.png" height="50px" width="50px" alt="" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse mx-auto" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 justify-content-center align-items-center">
              <li className="nav-item">
                <Link className="nav-link mx-md-2" aria-current="page" to="home" smooth={true} duration={500}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-md-2" to="ida" smooth={true} duration={500}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-md-2" to="services" smooth={true} duration={500}>
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-md-2" to="clients" smooth={true} duration={500}>
                  Clients
                </Link>
              </li>
              <li className="nav-item">
                <button className="btn btn-dark mx-md-2 my-2" onClick={openModal}>
                  Contact Us
                </button>
                <ContactModal isOpen={isModalOpen} onClose={closeModal} />
              </li>
            </ul>
            <div className="d-flex align-items-center justify-content-center my-3">
              <img
                src="https://banner2.cleanpng.com/20240119/bkq/transparent-x-icon-black-and-white-x-in-the-1710889063979.webp"
                height="30px"
                width="30px"
                className="mx-2 jumping"
                alt=""
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9V4NGi4jiLPvEtqcMH5AkQRSsyJ77UaJjDQ&s"
                height="30px"
                width="30px"
                className="mx-2 jumping"
                alt=""
              />
              <img
                src="https://image.similarpng.com/very-thumbnail/2021/01/Illustration-of-Linkedin-icon-on-transparent-background-PNG.png"
                height="30px"
                width="30px"
                className="mx-2 jumping"
                alt=""
              />
              <img
                src="https://i.pinimg.com/736x/42/75/49/427549f6f22470ff93ca714479d180c2.jpg"
                height="30px"
                width="30px"
                className="mx-2 jumping"
                alt=""
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavbarComp;
