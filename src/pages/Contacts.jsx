import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaPhoneAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom'

function Contacts() {
  return (
    <div className="container my-5">
      {/* Header */}
      <h2 className="fw-bold">
        <span className="text-danger">ZEN </span> 
        <span className="text-dark">Learner Support</span>
      </h2>
      <p className="text-muted mb-4">
        Talk to our experts. We are available 7 days a week, 9 AM to 12 AM (midnight)
      </p>

      {/* Support Boxes */}
      <div className="row gy-4 align-items-center">
        {/* Indian Nationals */}
        <div className="col-md-6 d-flex align-items-center gap-3">
          <img
            src="https://flagcdn.com/w40/in.png"
            alt="India Flag"
            width="40"
            height="30"
          />
          <div>
            <div className="fw-semibold">Indian Nationals</div>
            <div className="border border-danger rounded-3 d-inline-flex align-items-center px-3 py-2 mt-2">
              <FaPhoneAlt className="text-danger me-2" />
              <span className="fw-bold fs-5">1800 210 2020</span>
            </div>
          </div>
        </div>

        {/* Foreign Nationals */}
        <div className="col-md-6 d-flex align-items-center gap-3">
          <img
            src="https://img.freepik.com/premium-vector/earth-globe-isolated-world-map-icon-color-hemisphere-earth-illustration_118339-491.jpg?semt=ais_hybrid&w=740"
            alt="World Icon"
            width="40"
            height="40"
            style={{ borderRadius: '50%' }}
          />
          <div>
            <div className="fw-semibold">Foreign Nationals</div>
            <div className="border border-danger rounded-3 d-inline-flex align-items-center px-3 py-2 mt-2">
              <FaPhoneAlt className="text-danger me-2" />
              <span className="fw-bold fs-5">+91 8068792934</span>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="mt-5">
        <h5 className="fw-bold">Disclaimer</h5>
        <p className="text-muted small">
          The above statistics depend on various factors and individual results may vary.
          Past performance is no guarantee of future results. The student assumes full responsibility
          for all expenses associated with visas, travel, & related costs. 
        </p>
        <a href="#" className="text-danger fw-bold text-decoration-none">Read More</a>
      </div>
    </div>
  );
}

export default Contacts;
