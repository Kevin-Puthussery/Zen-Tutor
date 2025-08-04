
import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { FaCartShopping } from "react-icons/fa6";
import { FaCheckCircle } from 'react-icons/fa';



function Placements() {


    return(
<>
 <div className="container my-5">
      <div className="shadow-sm p-4 rounded-4 border bg-white">
        <div className="row text-center align-items-center justify-content-center">
          <div className="col-6 col-md-2">
            <h4 className="text-danger fw-bold">1.23 Cr</h4>
            <p className="mb-0 text-dark">Highest Salary Offered</p>
          </div>

          <div className="col-6 col-md-2 border-start">
            <h4 className="text-danger fw-bold">150</h4>
            <p className="mb-0 text-dark">Transitions Per Month</p>
          </div>

          <div className="col-6 col-md-2 border-start mt-4 mt-md-0">
            <h4 className="text-danger fw-bold">50%</h4>
            <p className="mb-0 text-dark">Avg Salary Hike</p>
          </div>

          <div className="col-6 col-md-2 border-start mt-4 mt-md-0">
            <h4 className="text-danger fw-bold">300+</h4>
            <p className="mb-0 text-dark">Hiring Partners</p>
          </div>

          <div className="col-12 col-md-2 border-start mt-4 mt-md-0">
            <h4 className="text-danger fw-bold">3x</h4>
            <p className="mb-0 text-dark">More Interviews</p>
          </div>
        </div>
      </div>
    </div>

<section className="container-fluid my-1 p-2" style={{
        backgroundImage: 'url("https://bizaccenknnect.com/wp-content/uploads/2023/11/final1.webp")',
        
        backgroundPosition: 'right',
        backgroundRepeat: 'no-repeat'
      }}>
<div class="container my-5">
  <div class="row">
  
    
    <div className="p-4">
        <h2 className="fw-bold">Placement Support</h2>
        <ul className="list-unstyled mt-4">
  <li className="d-flex align-items-center mb-3">
    <FaCheckCircle className="me-2 text-danger" />
    <span className="text-dark">Job Portal</span>
  </li>
  <li className="d-flex align-items-center mb-3">
    <FaCheckCircle className="me-2 text-danger" />
    <span className="text-dark">Career Coach</span>
  </li>
  <li className="d-flex align-items-center mb-3">
    <FaCheckCircle className="me-2 text-danger" />
    <span className="text-dark">Career Fairs & Hackathons</span>
  </li>
  <li className="d-flex align-items-center mb-3">
    <FaCheckCircle className="me-2 text-danger" />
    <span className="text-dark">1 on 1 Industry Mentorship</span>
  </li>
  <li className="d-flex align-items-center mb-3">
    <FaCheckCircle className="me-2 text-danger" />
    <span className="text-dark">Networking Sessions</span>
  </li>
</ul>


        <button className="btn btn-danger rounded-pill fw-bold px-4 py-2 mt-3" >
          Talk to a Counsellor
        </button>
      </div>
    </div>

   


    
    
  </div>


</section>



</>
    )

}

export default Placements