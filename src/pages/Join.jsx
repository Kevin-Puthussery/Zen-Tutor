
import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { FaCartShopping } from "react-icons/fa6";



function Join() {


    return(
<>
<section className="container-fluid my-1 p-2" style={{
        backgroundImage: 'url("https://studyhub-nextjs.vercel.app/_next/image?url=%2Fimages%2Fbanner%2F01.png&w=1920&q=75")',
        // backgroundSize: 'cover',
        backgroundPosition: 'right',
        backgroundRepeat: 'no-repeat'
      }}>
<div class="container my-5">
  <div class="row">
  
    
    <div class="col-md-6">
      <div class="card shadow p-4 h-100">
        <h2 class="mb-4 text-center">Join Online Course</h2>
        <form>
          <div class="mb-3">
            <label for="fullName" class="form-label">Full Name</label>
            <input type="text" class="form-control" id="fullName" placeholder="Enter your name" required />
          </div>

          <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input type="email" class="form-control" id="email" placeholder="you@example.com" required />
          </div>

          <div class="mb-3">
            <label for="courseSelect" class="form-label">Select Course</label>
            <select class="form-select" id="courseSelect" required>
              <option selected disabled value="">Choose...</option>
              <option>Full Stack Development</option>
              <option>Data Science</option>
              <option>UI/UX Design</option>
              <option>Machine Learning</option>
            </select>
          </div>

          <div class="mb-3">
            <label class="form-label">Payment Method</label><br />
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="payment" id="credit" value="credit" required />
              <label class="form-check-label" for="credit">Credit Card</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="payment" id="upi" value="upi" />
              <label class="form-check-label" for="upi">UPI</label>
            </div>
          </div>

          <div class="d-grid">
            <button type="submit" class="btn btn-primary">Proceed to Payment</button>
          </div>
        </form>
      </div>
    </div>

    
    {/* <div class="col-md-6 d-flex align-items-center">
      <div class="card shadow w-100">
        <img src="/join.png"
             class="card-img-top img-fluid" alt="AI Robotics" />
      </div>
    </div> */}

  </div>
</div>

</section>

</>
    )

}

export default Join