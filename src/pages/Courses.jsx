import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegCirclePlay } from "react-icons/fa6";
import Button from 'react-bootstrap/Button';




function Courses() {

   

  return (
    <>
      <section className="container-fluid p-0" style={{
        backgroundImage: 'url("https://www.bokksu.com/cdn/shop/articles/art12.jpg?v=1727305570")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="container p-4">
          <div className="row justify-content-center">
            <div className="col-12">
              <h1 className="main-heading">Unlock Your Potential
                with <span className="text-danger">Zen Tutor</span></h1>
            </div>
          </div>
          <div className="row justify-content-center">

            <div className="col-md-5 col-12 d-flex justify-content-center">
              <div className="card w-80 mx-2"style={{
    background: 'linear-gradient(to right, #fd7560ff, #fcdc4fff)',
    
    padding: '40px 0'
  }}>
                <div className="card-body">
                  <h5 className="card-title">Experience the power of ZEN Meditation</h5>
                  <video autoPlay loop muted playsInline width="100%">
                    <source src="https://videos.pexels.com/video-files/2774017/2774017-hd_1920_1080_30fps.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="d-flex justify-content-center">
                <Button className="d-flex justify-content-center px-1 py-1 border border-2 rounded border-black text-white fs-6" style={{ backgroundColor: '#f4344eff',width: '220px' }}>
                  <FaRegCirclePlay className="fs-2"/>  START FREE SESSIONS
                </Button>
                </div>
              </div>
              
            </div>


            <div className="col-md-5 col-12 d-flex justify-content-center">
              <div className="card w-100 mx-2" style={{
    background: 'linear-gradient(to right, #edbebeff, #bafa90ff)',
    
    padding: '40px 0'
  }}>
                <div className="card-body">
                
                  <h5 className="card-title">ZEN Music Therapy</h5>
                  <video autoPlay loop playsInline width="100%" style={{ width: '100%', height: '230px', objectFit: 'cover' }}>
                    <source src="https://videos.pexels.com/video-files/8028086/8028086-uhd_2560_1440_24fps.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="d-flex justify-content-center">
                <Button className="d-flex justify-content-center px-1 py-1 border border-2 rounded border-black text-white fs-6" style={{ backgroundColor: '#f4344eff',width: '220px' }}>
                  <FaRegCirclePlay className="fs-2" />  START FREE SESSIONS
                </Button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="" style={{
    background: 'linear-gradient(to right, #fd5e4dff, #fcdc4fff)',
    
    padding: '40px 0'
  }}>

        <div className="container-fluid pt-4" id="">
          <h2 className="main-heading"><span className="text-danger">Zen </span> IT Courses Online</h2>

          <div className="row g-4">


            <div className="col-12 col-sm-6 col-lg-4">
              <a href="#" style={{ textDecoration: 'none' }}>
                <div className="d-flex align-items-center p-3 rounded-4" style={{ backgroundColor: '#f2cab3ff' }}>
                  <div className="flex-grow-1">
                    <h5 className="fw-bold text-black mb-1">Data Science</h5>
                    <p className="text-muted mb-0">4 Courses</p>
                  </div>
                  <img src="https://www.mygreatlearning.com/blog/wp-content/uploads/2019/09/What-is-data-science-2.jpg" alt="" className="img-fluid" style={{ maxHeight: '80px' }} />
                </div>
              </a>
            </div>

            <div className="col-12 col-sm-6 col-lg-4">
              <a href="" style={{ textDecoration: 'none' }}>
                <div className="d-flex align-items-center p-3 rounded-4" style={{ backgroundColor: '#85b3fdff' }}>
                  <div className="flex-grow-1">
                    <h5 className="fw-bold text-black mb-1">Web Development</h5>
                    <p className="text-muted mb-0">4 Courses</p>
                  </div>
                  <img src="https://blog.zegocloud.com/wp-content/uploads/2024/03/types-of-web-development-services.jpg" alt="Electronics" className="img-fluid" style={{ maxHeight: '80px' }} />
                </div>
              </a>
            </div>

            <div className="col-12 col-sm-6 col-lg-4">
              <a href="#cloud" style={{ textDecoration: 'none' }}>
                <div className="d-flex align-items-center p-3 rounded-4" style={{ backgroundColor: '#e776f9ff' }}>
                  <div className="flex-grow-1">
                    <h5 className="fw-bold text-black mb-1">Cloud & Networking</h5>
                    <p className="text-muted mb-0">3 Courses</p>
                  </div>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaRCQ76hIcKtZ85kUpFrtk2Se47Ih8TqbCJ9UHISFXQ2Nsic56i6SM2dRvnazpza8wAU8&usqp=CAU" alt="Equipment" className="img-fluid" style={{ maxHeight: '80px' }} />
                </div>
              </a>
            </div>


          </div>
        </div>



      </section>

      <section style={{
        backgroundImage: 'url("https://www.bokksu.com/cdn/shop/articles/art12.jpg?v=1727305570")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>

<div class="container-fluid pt-4" id="#data">
    <div class="text-center mb-4">
      <h3 class="text-center mb-5 fw-bold">Data Science</h3>
    </div>
  <div class="row g-3">

    
    <div class="col-md-3">
      <div class="card h-100 shadow-sm position-relative" style={{ backgroundColor: '#f5d09aff' }}>
      
        <img src="https://images.shiksha.com/mediadata/shikshaOnline/mailers/2021/naukri-learning/oct/28oct/Business-Analyst.jpg" class="card-img-top" alt="Software Testing"/>
        <div class="card-body">
          <div class="mb-2 text-muted small">
            📄 9 Modules &nbsp; ⏱️ 4 Months
          </div>
          <h4 class="card-title">SAP Business Analysts</h4>
          <div class="mb-1 rating">★★★★★ <span class="text-muted">(4.88)</span></div>
          <p class="mb-2">🏆 100% Placement assistance 🏆</p>
         
        <Link to={'/join'}><button class="btn btn-primary">Join Now</button></Link>
            
        </div>
      </div>
    </div>

   
    <div class="col-md-3">
      <div class="card h-100 shadow-sm position-relative" style={{ backgroundColor: '#f5d09aff' }}>
        
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDAZPV745SBN2A946jSesJS-ukbHuJ2UHh4w&s" class="card-img-top" alt="Web Dev"/>
        <div class="card-body">
          <div class="mb-2 text-muted small">
            📄 6 Modules &nbsp; ⏱️ 6 Months
          </div>
          <h3 class="card-title">Python and ML</h3>
          <div class="mb-1 rating">★★★★★ <span class="text-muted">(4.98)</span></div>
          <p class="mb-2">🏆 100% Placement assistance 🏆</p>
        <Link to={'/join'}><button class="btn btn-primary">Join Now</button></Link>
        </div>
      </div>
    </div>

   
    <div class="col-md-3">
      <div class="card h-100 shadow-sm position-relative"style={{ backgroundColor: '#f5d09aff' }}>
        
        <img src="https://media.geeksforgeeks.org/wp-content/uploads/20230922185402/Data-Analytics-.webp" class="card-img-top" alt="AI Robotics"/>
        <div class="card-body">
          <div class="mb-2 text-muted small">
            📄 9 Modules &nbsp; ⏱️ 5 Months
          </div>
          <h3 class="card-title">Data Analytics</h3>
          <div class="mb-1 rating">★★★★★ <span class="text-muted">(4.98)</span></div>
          <p class="mb-2">🏆 100% Placement assistance 🏆</p>
        <Link to={'/join'}><button class="btn btn-primary">Join Now</button></Link>
        </div>
      </div>
    </div>

    <div class="col-md-3">
      <div class="card h-100 shadow-sm position-relative"style={{ backgroundColor: '#f5d09aff' }}>
        
        <img src="https://cdn.bap-software.net/2023/02/what-is-Big-Data-analytics.jpg" class="card-img-top" alt="AI Robotics"/>
        <div class="card-body">
          <div class="mb-2 text-muted small">
            📄 9 Modules &nbsp; ⏱️ 5 Months
          </div>
          <h3 class="card-title">Big Data Analytics</h3>
          <div class="mb-1 rating">★★★★★ <span class="text-muted">(4.98)</span></div>
          <p class="mb-2">🏆 100% Placement assistance 🏆</p>
        <Link to={'/join'}><button class="btn btn-primary">Join Now</button></Link>
        </div>
      </div>
    </div>

  </div>
</div>

 <div class="container-fluid pt-4" id="">
    <div class="text-center mb-4">
      <h3 class="text-center mb-5 fw-bold">Web Development</h3>
    </div>
  <div class="row g-3">

   
    <div class="col-md-3">
      <div class="card h-100 shadow-sm position-relative"style={{ backgroundColor: '#f5b9efff' }}>
      
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMlQUimGwFJVeTSmpO4h50mlmBdKUEDz2FsQ&s" class="card-img-top" alt="Software Testing"/>
        <div class="card-body">
          <div class="mb-2 text-muted small">
            📄 9 Modules &nbsp; ⏱️ 6 Months
          </div>
          <h4 class="card-title">MERN Full-Stack</h4>
          <div class="mb-1 rating">★★★★★ <span class="text-muted">(4.88)</span></div>
          <p class="mb-2">🏆 100% Placement assistance 🏆</p>
        <Link to={'/join'}><button class="btn btn-primary">Join Now</button></Link>
        </div>
      </div>
    </div>

    
    <div class="col-md-3">
      <div class="card h-100 shadow-sm position-relative"style={{ backgroundColor: '#f5b9efff' }}>
        
        <img src="https://dme2wmiz2suov.cloudfront.net/User(76576463)/CourseBundles(37003)/2469539-python-full-stack-training-in-hyderabad.jpg" class="card-img-top" alt="Web Dev"/>
        <div class="card-body">
          <div class="mb-2 text-muted small">
            📄 6 Modules &nbsp; ⏱️ 6 Months
          </div>
          <h3 class="card-title">Python Full-Stack</h3>
          <div class="mb-1 rating">★★★★★ <span class="text-muted">(4.98)</span></div>
          <p class="mb-2">🏆 100% Placement assistance 🏆</p>
        <Link to={'/join'}><button class="btn btn-primary">Join Now</button></Link>
        </div>
      </div>
    </div>

    
    <div class="col-md-3">
      <div class="card h-100 shadow-sm position-relative"style={{ backgroundColor: '#f5b9efff' }}>
        
        <img src="https://technobrains.io/wp-content/uploads/2021/07/flutter-Featured-Blog-Image2.jpg" class="card-img-top" alt="AI Robotics"/>
        <div class="card-body">
          <div class="mb-2 text-muted small">
            📄 9 Modules &nbsp; ⏱️ 5 Months
          </div>
          <h3 class="card-title">Flutter App Development</h3>
          <div class="mb-1 rating">★★★★★ <span class="text-muted">(4.98)</span></div>
          <p class="mb-2">🏆 100% Placement assistance 🏆</p>
        <Link to={'/join'}><button class="btn btn-primary">Join Now</button></Link>
        </div>
      </div>
    </div>

    <div class="col-md-3">
      <div class="card h-100 shadow-sm position-relative"style={{ backgroundColor: '#f5b9efff' }}>
        
        <img src="https://cdn.prod.website-files.com/62ebf26875eba5d0775548fe/6445f9fc857e3615b7d1798f_Ios%20swift.webp" class="card-img-top" alt="AI Robotics"/>
        <div class="card-body">
          <div class="mb-2 text-muted small">
            📄 9 Modules &nbsp; ⏱️ 5 Months
          </div>
          <h3 class="card-title">Swift</h3>
          <div class="mb-1 rating">★★★★★ <span class="text-muted">(4.98)</span></div>
          <p class="mb-2">🏆 100% Placement assistance 🏆</p>
        <Link to={'/join'}><button class="btn btn-primary">Join Now</button></Link>
        </div>
      </div>
    </div>

  </div>
</div>

<div class="container-fluid pt-4 pb-5" id="">
    <div class="text-center mb-4">
      <h3 class="text-center mb-5 fw-bold">Cloud & Networking</h3>
    </div>
  <div class="row g-3">

   
    <div class="col-md-3">
      <div class="card h-100 shadow-sm position-relative"style={{ backgroundColor: '#9c979bff' }}>
      
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7T2DlCBX7VZWz--TsJ6uYS_XmUR6-VlVjqQ&s" class="card-img-top" alt="Software Testing"/>
        <div class="card-body">
          <div class="mb-2 text-muted small">
            📄 9 Modules &nbsp; ⏱️ 4 Months
          </div>
          <h4 class="card-title">Azure Architect</h4>
          <div class="mb-1 rating">★★★★★ <span class="text-muted">(4.88)</span></div>
          <p class="mb-2">🏆 100% Placement assistance 🏆</p>
        <Link to={'/join'}><button class="btn btn-primary">Join Now</button></Link>
        </div>
      </div>
    </div>

    
    <div class="col-md-3">
      <div class="card h-100 shadow-sm position-relative"style={{ backgroundColor: '#9c979bff' }}>
        
        <img src="https://img-c.udemycdn.com/course/750x422/5914092_588d_2.jpg" class="card-img-top" alt="Web Dev"/>
        <div class="card-body">
          <div class="mb-2 text-muted small">
            📄 6 Modules &nbsp; ⏱️ 6 Months
          </div>
          <h3 class="card-title">AWS Architect</h3>
          <div class="mb-1 rating">★★★★★ <span class="text-muted">(4.98)</span></div>
          <p class="mb-2">🏆 100% Placement assistance 🏆</p>
        <Link to={'/join'}><button class="btn btn-primary">Join Now</button></Link>
        </div>
      </div>
    </div>

    
    <div class="col-md-3">
      <div class="card h-100 shadow-sm position-relative"style={{ backgroundColor: '#9c979bff' }}>
        
        <img src="https://community.aws/raw-post-images/concepts/devops-essentials/images/devops_loop.jpeg?imgSize=1600x960" class="card-img-top" alt="AI Robotics"/>
        <div class="card-body">
          <div class="mb-2 text-muted small">
            📄 9 Modules &nbsp; ⏱️ 5 Months
          </div>
          <h3 class="card-title">DevOps Engineering</h3>
          <div class="mb-1 rating">★★★★★ <span class="text-muted">(4.98)</span></div>
          <p class="mb-2">🏆 100% Placement assistance 🏆</p>
        <Link to={'/join'}><button class="btn btn-primary">Join Now</button></Link>
        </div>
      </div>
    </div>

    

  </div>
</div>

      </section>

    </>
  )
}

export default Courses
