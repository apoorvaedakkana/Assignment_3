import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MainContent.css';

const MainContent = () => {
  return (
    <div className="main-content">
      <section className="hero">
        <div className="container">
          <h1>Welcome to the TCE Hackathon: React-a-Thon!</h1>
          <p>Join us for an exciting event full of innovation and collaboration.</p>
          <Link to="/Register" className="btn btn-primary">Register Now</Link> 
        </div>
      </section>

      <section className="info">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h2>About</h2>
              <p>Learn more about the event, its purpose, and what to expect.</p>
              <Link to="/about" className="btn btn-secondary">Learn more</Link>
            </div>
            <div className="col-md-4">
              <h2>Schedule</h2>
              <p>Find out the schedule of activities and keynotes.</p>
              <Link to="/schedule" className="btn btn-secondary">View schedule</Link>
            </div>
            <div className="col-md-4">
              <h2>Contact</h2>
              <p>Get in touch with us for any queries or support.</p>
              <Link to="/contact" className="btn btn-secondary">Contact us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainContent;
