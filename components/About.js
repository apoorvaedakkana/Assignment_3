// src/components/About.js
import React from 'react';

const About = () => {
  return (
    <div className="main-content">
      <section className="hero">
        <div className="container">
          <h1>About TCE Hackathon: React-a-Thon</h1>
          <p>
            Welcome to the TCE Hackathon: React-a-Thon! This event is designed to bring together innovators, developers, and creators from all backgrounds to collaborate on exciting projects using React.js. Whether you're a seasoned developer or just starting with React, this hackathon offers a unique opportunity to learn, build, and network with like-minded individuals.
          </p>
        </div>
      </section>

      <section className="info">
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <h2>Event Purpose</h2>
              <p>
                The main goal of this hackathon is to foster creativity and innovation in web development using React.js. Participants will have the chance to showcase their skills, solve real-world problems, and compete for exciting prizes.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <h2>What to Expect</h2>
              <ul>
                <li><strong>Workshops and Keynotes:</strong> Engage in insightful workshops and keynotes delivered by industry experts.</li>
                <li><strong>Networking:</strong> Connect with peers, mentors, and potential employers in the tech industry.</li>
                <li><strong>Project Showcase:</strong> Present your projects and receive feedback from judges and fellow participants.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
