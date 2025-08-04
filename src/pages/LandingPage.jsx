import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FaRegCirclePlay } from "react-icons/fa6";
import { PiHandshake } from "react-icons/pi";
import { FaUserGraduate } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';



function LandingPage() {
  return (
    <>

      <section className="hero-section">
        <div className="hero-overlay">

          <div className="container py-5">
            <div className="text-center">

              <h1 className="display-5 fw-bold">
                Limitless learning at your
                fingertips
              </h1>


              <p className="text-muted fs-5 mt-3">
                Online learning and teaching marketplace with 5K+ courses & 10M students. Taught by experts to help you acquire new skills.
              </p>


              <div className="d-flex justify-content-center gap-4 flex-wrap mt-4">
                <div className="text-muted">★ Learn with experts</div>
                <div className="text-muted">★ Get certificate</div>
                <div className="text-muted">★ Get membership</div>
              </div>


              <div className="d-flex justify-content-center gap-3 mt-5 flex-wrap">
                
                <Button variant="light" className="px-4 py-2 border border-2 border-black text-primary" style={{ backgroundColor: '#ffe9ec',textDecoration: 'none' }}>
                  <Link to={'/courses'} style={{ textDecoration: 'none' }}>Get Started</Link>
                </Button>
                <Button variant="outline-secondary" className="d-flex align-items-center px-4 py-2">
                  <div className="rounded-circle bg-danger text-white d-flex align-items-center justify-content-center me-2 fs-5" style={{ width: '40px', height: '40px' }}>
                    <FaRegCirclePlay />
                  </div>
                  Watch video
                </Button>
              </div>
            </div>
          </div>


        </div>
      </section>




      <section className="container-fluid p-0" style={{
        backgroundImage: 'url("https://images.squarespace-cdn.com/content/v1/65a8086442f1ec6cd5514274/ceeeb5ef-5f3a-4852-b4b9-02e114d4aaa1/_A2A1303-2.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="text-center mb-4">
          <h2>Trending Courses</h2>
        </div>



        <div className="row g-5">

          <div className="col-md-4">
            <div className="card h-100 shadow-sm position-relative bg-transparent">
              <span bg="magenta" className="position-absolute top-0 start-0 m-2" style={{ backgroundColor: '#d600aa' }}>Recommended</span>
              <img src="https://images.shiksha.com/mediadata/shikshaOnline/mailers/2021/naukri-learning/oct/28oct/Business-Analyst.jpg" class="card-img-top" alt="Software Testing" />
              <div className="card-body">
                <div className="mb-2 text-muted small">
                  📄 9 Modules &nbsp; ⏱️ 4 Months
                </div>
                <h4 className="card-title">SAP Business Analysts</h4>
                <div className="mb-1 rating">★★★★★ <span class="text-muted">(4.88)</span></div>
                <p className="mb-2">🏆 100% Placement assistance 🏆</p>
                <Link to={'/courses'}><button class="btn btn-primary">See More...</button></Link>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card h-100 shadow-sm position-relative bg-transparent">
              <span bg="magenta" className="position-absolute top-0 start-0 m-2" style={{ backgroundColor: '#d600aa' }}>Recommended</span>
              <img src="https://miro.medium.com/v2/resize:fit:768/1*jyvi6rdhEWdbKbybyuht9w.png" class="card-img-top" alt="Web Dev" />
              <div class="card-body">
                <div class="mb-2 text-muted small">
                  📄 6 Modules &nbsp; ⏱️ 6 Months
                </div>
                <h3 class="card-title">MERN Full-Stack Development</h3>
                <div class="mb-1 rating">★★★★★ <span class="text-muted">(4.98)</span></div>
                <p class="mb-2">🏆 100% Placement assistance 🏆</p>
                <Link to={'/courses'}><button class="btn btn-primary">See More...</button></Link>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card h-100 shadow-sm position-relative bg-transparent">
              <span bg="magenta" className="position-absolute top-0 start-0 m-2" style={{ backgroundColor: '#904ae7ff' }}>New One</span>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzIGecPrX_C6IHGvXS2I3zIQOe5A1-BEd4uQ&s" class="card-img-top" alt="AI Robotics" />
              <div class="card-body">
                <div class="mb-2 text-muted small">
                  📄 9 Modules &nbsp; ⏱️ 5 Months
                </div>
                <h3 class="card-title">Ethical Hacking</h3>
                <div class="mb-1 rating">★★★★★ <span class="text-muted">(4.98)</span></div>
                <p class="mb-2">🏆 100% Placement assistance 🏆</p>
                <Link to={'/courses'}><button class="btn btn-primary">See More...</button></Link>
              </div>
            </div>
          </div>


        </div>

      </section>

      <section className="container-fluid p-0"style={{
    background: 'linear-gradient(to right, #fd5e4dff, #f6f5f1ff)',
    
    padding: '40px 0'
  }}>
        <div class="container-fluid pt-5 pb-4" id="">
          <h3 class="mb-5 text-center">
            Why Learn from ZenTutor ?<br />
            <span className=''>Best Online Training In India</span>
          </h3>

          <div class="row text-center g-4">

            <div class="col-md-3">
              <div className="fs-2">
                <PiHandshake />
              </div>
              <h5 class="fw-bold">100% Placement<br />Assistance</h5>
              <p class="text-muted">Dedicated placement cell with strong industry connections to help you secure your dream job.</p>
            </div>


            <div class="col-md-3">
              <div className="fs-2">
                <FaUserGraduate />
              </div>
              <h5 class="fw-bold">Industry-Expert<br />Trainers</h5>
              <p class="text-muted">Learn from certified professionals with extensive real-world industry experience.</p>
            </div>


            <div class="col-md-3">
              <div className="fs-2">
                <FaLaptopCode />
              </div>
              <h5 class="fw-bold">Real-World<br />Projects</h5>
              <p class="text-muted">Hands-on experience with industry-relevant projects to build a professional portfolio.</p>
            </div>


            <div class="col-md-3">
              <div className="fs-2">
                <GrCertificate />
              </div>
              <h5 class="fw-bold">ISO-Certified<br />Institute</h5>
              <p class="text-muted">Quality education guaranteed through ISO certification and standardized training methods.</p>
            </div>
          </div>
        </div>


      </section>

      <section className="container-fluid bg-light p-4"style={{
        backgroundImage: 'url("https://goldpenguin.org/wp-content/uploads/2024/03/sunset.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        zIndex: 1
      }}>

  <h1 className="mb-5 text-center text-white fw-bold">Testimony</h1>

  <div className="row align-items-center">
   
    <div className="col-lg-6" >
      <h3 className="mb-4 text-white fw-bold">Trusted by professionals worldwide</h3>
      <p className='text-white'>
        We are passionate about education and dedicated to providing high-quality learning resources for learners of all backgrounds.
      </p>
      <p className='text-white'>
        You'll find something to spark your curiosity and enhance.
      </p>
      <p className='text-white'>
        Join thousands of job-seekers who’ve fast-tracked their careers with a Certification that truly stands out.
      </p>
    </div>

    
    <div className="col-lg-6 d-flex justify-content-center">
      {/* <div className="card p-3 shadow" style={{ maxWidth: "500px", height: "430px" }}> */}
       
        {/* <div className="card-body"> */}
           {/* <img
          src="https://images.pexels.com/photos/4467687/pexels-photo-4467687.jpeg"
          alt="User 1"
          className="img-fluid rounded mb-3"
          style={{ maxWidth: "200px", height: "300px" }}
        />
          <p className="card-text">
            “This platform helped me gain the skills and confidence I needed to grow in my career. Highly recommend!”
          </p> */}


<Carousel className='position-relative'>
  <Carousel.Item>
    <img className="d-block w-100" src="t1.png" alt="" />
    
  </Carousel.Item>

  <Carousel.Item>
    <img className="d-block w-100" src="t2.png" alt="" />
   
  </Carousel.Item>

  <Carousel.Item>
    <img className="d-block w-100" src="t3.png" alt="" />
    
  </Carousel.Item>
</Carousel>






        {/* </div> */}
      {/* </div> */}
    </div>
  </div>

</section>

      <button id="scrollToTopBtn" class="btn btn-primary position-fixed bottom-0 end-0 m-4 d-none">↑
      </button>
    </>
  )
}

export default LandingPage
