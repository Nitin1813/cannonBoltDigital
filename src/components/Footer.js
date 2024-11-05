import React from 'react';
import './Footer.css';
const Footer = () => {
  return (
    <footer className="footer ">
      <div className="container ">
        
        {/* Contact Form */}
        <div className='main-container'>
        <div className="first-container ">
          <h2 className="section ">Contact Us</h2>
          <form className="">
          <label for="name">Name : </label>
            <input
            id='name'
              type="text"
              placeholder=""
              className=""
            />
            
            <label for="email">Email : </label>
            <input
            id='email'
              type="email"
              placeholder=""
              className=""
            />
            <br />
            <label for="message">Message : </label>
            <input
            id='message'
              rows="4"
              placeholder=""
              className=""
            />
           
            <button
              type="submit"
              className=" submit-button"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Quick Links (Horizontal with spacing) */}
        <div className="second-container">
          <h2 className=" section ">Quick Links</h2>
          <div className="flex quick-links">
            <a href="/" className="">Home</a>
            <a href="/about" className="">About</a>
            <a href="/offers" className="">Offers</a>
            <a href="/login" className="">Login</a>
          </div>
        </div>
        </div>

        {/* Social Media Links */}
        <div className="">
          <h2 className=" section ">Follow Us</h2>
          <div className="icon-container">
            <a href="https://www.facebook.com/profile.php?id=61555398455381&mibextid=ZbWKwL" className="">
              <i className="fab fa-facebook fa-2x"></i>
            </a>
            <a href="#" className="">
              <i className="fab fa-twitter fa-2x"></i>
            </a>
            <a href="https://www.instagram.com/cannonboltdigital/profilecard/?igsh=MTY3eTR5YzIycm4zNQ==" className="text-gray-400 hover:text-white transition">
              <i className="fab fa-instagram fa-2x"></i>
            </a>
            <a href="#" className="">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="copyright">
        &copy; {new Date().getFullYear()} Cannonbolt Digital. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
