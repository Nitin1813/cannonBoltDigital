import React from 'react';
import deepu from "../Images/deepu.png"
import Nitin from "../Images/nitin.png"
import './Leadership.css';
const Leadership = () => {
  const teamMembers = [
    {
      name: 'Deepu',
      role: 'Specialist' ,
      description: 'Meta Ads, Social Media Marketing, Graphics Design and Video Editing.',
      image: `${deepu}`,
    },
    {
      name: 'Nitin',
      role: 'Specialist',
      description: 'SEO, Web Designing',
      image: `${Nitin}`,
    },
    // {
    //   name: 'Sam Wilson',
    //   role: 'Head of Marketing',
    //   description: 'Responsible for market strategies and brand awareness.',
    //   image: '/path/to/image3.jpg',
    // },
    // Add more team members as needed
  ];

  return (
    <section className="bg-gray-100 py-12" id='Leadership'>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Leadership</h2>

        {/* Flex container for horizontal alignment */}
        <div className="flex flex-wrap justify-center gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white our-leadership shadow-lg rounded-lg overflow-hidden text-center p-6 w-64 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="overflow-hidden rounded-full w-32 h-32 mx-auto mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="our-leadership-img w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-gray-600 font-medium">{member.role}</p>
              <p className="text-gray-600 mt-4">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
