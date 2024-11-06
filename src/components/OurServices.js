import React from 'react';
import { FaBullhorn, FaChartLine, FaCode, FaUserShield } from 'react-icons/fa';
import SEO from "../Images/SEO.png";
import "./OurServices.css";
import WebDesigning from "../Images/web-designing.png";
import PayPerClick from "../Images/PayPerClick.png";
import ContentCreation from "../Images/Content-Creation.png";
import GraphicsDesigning from "../Images/Graphics-Designing.png";
import SocialMediaMarketing from "../Images/Social-Media-Marketing.png";

const Services = () => {
  const services = [
    {
      icon: <img src={ContentCreation} />,
      title: 'Content Creation',
      description: 'Enhance your online presence with our expert marketing solutions.',
    },
    {
      icon: <img src={SEO} />,
      title: 'SEO Optimization',
      description: 'Drive more traffic and improve your rankings with our SEO strategies.',
    },
    {
      icon: <img src={WebDesigning} />,
      title: 'Web Development',
      description: 'Create responsive and modern websites tailored to your needs.',
    },
    {
      icon: <img src={PayPerClick} />,
      title: 'Pay Per Click',
      description: 'Ensure your digital assets are secure with our comprehensive services.',
    },
    {
        icon: <img src={SocialMediaMarketing} />,
        title: 'Social Media Marketing',
        description: 'Ensure your digital assets are secure with our comprehensive services.',
      },
      {
        icon: <img src={GraphicsDesigning} />,
        title: 'Graphics Design',
        description: 'Ensure your digital assets are secure with our comprehensive services.',
      },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Services</h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#A7BB3E] shadow-lg rounded-lg p-6 text-center transition transform hover:scale-105"
            >
              <div className="">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-white">{service.description}</p>
              <button className='our-services-submit' type='submit'>View More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
