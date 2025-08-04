import React from 'react';
import Button from '@mui/material/Button';
import { ImFacebook2 } from "react-icons/im";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div className="bg-black text-white pt-4">
      <div className="container">
        <div className="row gy-4">

          
          <div className="col-12 col-md-6 col-lg-4">
            <h1 className="text-danger fw-bold">Zen Tutor</h1>
            <p className="text-white" style={{ textAlign: "justify" }}>
              Online learning and teaching marketplace with 5K+ courses & 10M students. Taught by experts to help you acquire new skills.
            </p>
          </div>

          
          <div className="col-6 col-md-3 col-lg-2">
            <h5 className="text-light">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Home</a></li>
              <li><a href="#" className="text-white text-decoration-none">Contacts</a></li>
              <li><a href="#" className="text-white text-decoration-none">Refund & Cancellation</a></li>
              <li><a href="#" className="text-white text-decoration-none">Our Trainers</a></li>
              <li><a href="#" className="text-white text-decoration-none">Testimonies</a></li>
            </ul>
          </div>

          
          <div className="col-6 col-md-3 col-lg-2">
            <h5 className="text-light">Courses</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Cloud & Networking</a></li>
              <li><a href="#" className="text-white text-decoration-none">Data Sciences</a></li>
              <li><a href="#" className="text-white text-decoration-none">Web Development</a></li>
            </ul>
          </div>

         
          <div className="col-12 col-lg-4">
            <form>
              <div className="d-flex flex-column flex-sm-row align-items-stretch gap-2 mb-4">
                <input type="text" className="form-control" placeholder="Enter your email..." />
                <Button variant="outlined" color="warning" className="text-white">
                  Subscribe
                </Button>
              </div>
            </form>

            <div className="d-flex justify-content-start gap-3 mb-3">
              <ImFacebook2 className="fs-4" />
              <FaInstagram className="fs-4" />
              <FaLinkedin className="fs-4" />
              <FaXTwitter className="fs-4" />
            </div>

            <address className="text-white small">
              130, Junction, Thottumkalpeedika,<br />
              Muvattupuzha, Kerala 686661
            </address>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Footer;
