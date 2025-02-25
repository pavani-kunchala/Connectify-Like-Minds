import React from 'react';
import './Services.css';
import { FaUsers, FaMapSigns, FaComments, FaChalkboardTeacher } from 'react-icons/fa';

const services = [
  {
    icon: <FaUsers />,
    title: 'Connect ',
    description: 'Join a community of learners who share your interests and passions.',
    features: ['Find peers with similar goals', 'Expand your network', 'Collaborate on projects'],
  },
  {
    icon: <FaMapSigns />,
    title: ' Roadmaps',
    description: 'Get roadmaps to guide your learning journey based on your interests.',
    features: ['Customized learning paths', 'Track your progress', 'Achieve your goals'],
  },
  {
    icon: <FaComments />,
    title: ' Discussions',
    description: 'Join group chats to discuss and get help from the community.',
    features: ['Join study groups', 'Participate in forums', 'Get feedback and support'],
  },
 
];

const Services = () => {
  return (
    <div className="services-container">
      <header className="services-header">
        <h1>Our Services</h1>
        <p>Discover what Connectify has to offer</p>
      </header>

      <div className="services-cards">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <ul>
              {service.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <button className="learn-more">Learn more</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;