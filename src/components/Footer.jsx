import React from 'react'

import Button from '@mui/material/Button';
import { ImFacebook2 } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <div className="bg-black p-3">
        <div className="row">
          <div className="col-4">
            <h1 className="text-danger p-1 fw-bold">
              Zen Tutor
            </h1>
            <p className="text-white" style={{ textAlign: "justify" }}>
              Online learning and teaching marketplace with 5K+ courses & 10M students. Taught by experts to help you acquire new skills.
            </p>
          </div>

          <div className="col-2">
            <h1 className="text-light">
              Quick Links
            </h1>
            <ul>
              <li id="nav2" className="text-white"><a>Home</a></li>
              
              <li id="nav2" className="text-white"><a>Contacts</a></li>
              <li id="nav2" className="text-white"><a>Refund & Cancellation Policy</a></li>
              <li id="nav2" className="text-white"><a>Our Trainers</a></li>
              <li id="nav2" className="text-white"><a>Testimonies</a></li>
            </ul>
          </div>

          <div className="col-2">
            <h1 className="text-light">
              Courses
            </h1>
            <ul>
              <li id="nav2" className="text-white"><a>Cloud & Networking</a></li>
              <li id="nav2" className="text-white"><a>Data Sciences</a></li>
              <li id="nav2" className="text-white"><a>Web Development</a></li>
              
            </ul>

          </div>

          <div className="col-4 mt-2 py-3 px-5">
            <form action="">
              <div className="d-flex justify-content-between align-items-center">
                <input type="text" className="form-control me-3" placeholder='Enter Your Email...' />
                <Button variant="outlined" color="warning" className="py-1 px-4 text-white">
                  Subscribe
                </Button>
              </div>
            </form>

            <div className="d-flex justify-content-between align-items-center mt-5">
              <ImFacebook2 id="icon1" className="fs-2 text-white" />
              <FaInstagram id="icon1" className="fs-2 text-white" />
              <FaLinkedin id="icon1" className="fs-2 text-white" />
              <FaXTwitter id="icon1" className="fs-2 text-white" />
              <p className="text-white">130, Junction, Thottumkalpeedika,<br />Muvattupuzha, Kerala 686661</p>
            </div>
          </div>
        </div>
      </div>




    </>
  )
}

export default Footer
