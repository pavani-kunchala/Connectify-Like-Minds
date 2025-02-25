import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPython, FaReact, FaJava } from 'react-icons/fa';
import { SiC, SiTensorflow } from 'react-icons/si'; // TensorFlow icon for Machine Learning
import './Groupcombo.css'; // Import your CSS file for styling

import { Link } from 'react-router-dom';

const DomainGroup = ({ title, icon: Icon, buttons, onButtonClick }) => {
  return (
    <div className="domain-group">
      <div className="group-header">
        <h2 className="group-title">{title}</h2>
        {Icon && <Icon className="group-icon" />}
      </div>
      <div className="buttons-container">
        {buttons.map((button, index) => (
          <button
            key={index}
            className="domain-button"
            onClick={() => onButtonClick(title, button)}
          >
            {button}
          </button>
        ))}
      </div>
    </div>
  );
};

const Groupcombo = () => {
  const navigate = useNavigate();

  const handleButtonClick = (groupTitle, button) => {
    if (groupTitle === 'Python' && button === 'Group 1') {
      navigate('/chatting');
    }
  };

  // Define your domain groups and buttons
  const domainGroups = [
    {
      title: 'Python',
      icon: FaPython,
      buttons: ['Group 1', 'Group 2', 'Group 3', 'Group 4', 'Group 5', 'Group 6', 'Group 7', 'Group 8', 'Group 9']
    },
    {
      title: 'React',
      icon: FaReact,
      buttons: ['Group 1', 'Group 2', 'Group 3', 'Group 4', 'Group 5', 'Group 6', 'Group 7', 'Group 8', 'Group 9']
    },
    {
      title: 'Machine Learning',
      icon: SiTensorflow,
      buttons: ['Group 1', 'Group 2', 'Group 3', 'Group 4', 'Group 5', 'Group 6', 'Group 7', 'Group 8', 'Group 9']
    },
    {
      title: 'C',
      icon: SiC,
      buttons: ['Group 1', 'Group 2', 'Group 3', 'Group 4', 'Group 5', 'Group 6', 'Group 7', 'Group 8', 'Group 9']
    },
    {
      title: 'Java',
      icon: FaJava,
      buttons: ['Group 1', 'Group 2', 'Group 3', 'Group 4', 'Group 5', 'Group 6', 'Group 7', 'Group 8', 'Group 9']
    },
  ];

  return (
    <div className="page-container">
      <h1 className="headline">GROUPS</h1>
      <div>
      <h2>Welcome to Python Course</h2>
      <Link to="/chatRoom">Join Chat Room</Link>
    </div>
    <div>
      <h2>Welcome to Java Course </h2>
      <Link to="/chatroom/JavaCourse">Join Chat Room</Link>
    </div>
      <div className="background">
        <div className="domain-groups-container">
          {domainGroups.map((group, index) => (
            <DomainGroup
              key={index}
              title={group.title}
              icon={group.icon}
              buttons={group.buttons}
              onButtonClick={handleButtonClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Groupcombo;
