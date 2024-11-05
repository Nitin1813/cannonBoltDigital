// client/src/components/Home.js
import React from "react";
import "./Home.css";
import Banner from '../Images/banner.png';
import Footer from "./Footer";
import Leadership from "./Leadership";

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <img src={Banner} /> 
      </section>

      {/* Offers Section */}
      <section className="offers">
        <h2>Our Offers</h2>
        <div className="offer-cards">
          <div className="offer-card">
            <h3>Offer 1</h3>
            <p>Detailed description of offer 1.</p>
          </div>
          <div className="offer-card">
            <h3>Offer 2</h3>
            <p>Detailed description of offer 2.</p>
          </div>
          <div className="offer-card">
            <h3>Offer 3</h3>
            <p>Detailed description of offer 3.</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>Our Services</h2>
        <div className="service-cards">
          <div className="service-card">
            <h3>Service 1</h3>
            <p>Description of service 1.</p>
          </div>
          <div className="service-card">
            <h3>Service 2</h3>
            <p>Description of service 2.</p>
          </div>
          <div className="service-card">
            <h3>Service 3</h3>
            <p>Description of service 3.</p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="contact-info">
        <h2>Contact Information</h2>
        <p>Address: 123 Digital Avenue, Suite 456, Tech City</p>
        <p>Email: contact@cannonboltdigital.com</p>
        <p>Phone: +1 (555) 123-4567</p>
      </section>

      {/* Location Section */}
      <section className="location">
        <h2>Our Location</h2>
        <p>Find us at our headquarters in Tech City or connect with us online.</p>
        {/* Add Google Maps iframe or other location visuals here */}
      </section>

      {/* Timeline Section */}
      <section className="timeline">
        <h2>Company Timeline</h2>
        <ul>
          <li><strong>2020:</strong> Company founded and launched first digital service.</li>
          <li><strong>2021:</strong> Expanded service offerings to include data analytics.</li>
          <li><strong>2022:</strong> Opened second office in a major tech hub.</li>
          <li><strong>2023:</strong> Reached 10,000 customers and introduced new AI tools.</li>
        </ul>
      </section>

      {/* Completions Section */}
      <section className="completions">
        <h2>Our Completions</h2>
        <div className="completion-cards">
          <div className="completion-card">
            <h3>Project A</h3>
            <p>Overview of project A and its successful outcome.</p>
          </div>
          <div className="completion-card">
            <h3>Project B</h3>
            <p>Overview of project B and its successful outcome.</p>
          </div>
          <div className="completion-card">
            <h3>Project C</h3>
            <p>Overview of project C and its successful outcome.</p>
          </div>
        </div>
      </section>
      <Leadership />
    </div>
  );
};

export default Home;
