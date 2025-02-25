import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UIpage.css';
import studyImage from '../Images/image0.jpg'; // Importing the image

const UIpage = () => {
  const navigate = useNavigate();
  const [typedTitle, setTypedTitle] = useState('');
  const [isLoginExpanded, setIsLoginExpanded] = useState(false);
  const [isFeaturesAnimated, setIsFeaturesAnimated] = useState(false);

  useEffect(() => {
    // Function to simulate typing effect for the title
    const typeTitle = (title) => {
      let currentIndex = 0;
      const interval = setInterval(() => {
        setTypedTitle(title.slice(0, currentIndex + 1));
        currentIndex++;
        if (currentIndex === title.length) {
          clearInterval(interval);
          setTimeout(() => {
            typeTitle(title); // Restart typing effect after completion
          }, 2000); // Pause before restarting typing effect (adjust as needed)
        }
      }, 200); // Typing speed (adjust as needed)
    };

    // Start typing effect for the title "Connectify"
    typeTitle('Connectify Like Minds..');

    // Expand and shrink login button animation
    const expandLoginButton = () => {
      setIsLoginExpanded(true);
      setTimeout(() => {
        setIsLoginExpanded(false);
      }, 2000); // Duration of animation (adjust as needed)
    };

    expandLoginButton();

    // Slide in features animation
    setIsFeaturesAnimated(true);

    return () => {
      setTypedTitle(''); // Clear typed title on component unmount
    };
  }, []);

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div className="ui-page-container">
      <div className="ui-content">
        <div className="left-section">
          <img src={studyImage} alt="Study Image" className="study-image" />
        </div>
        <div className="right-section">
          <h1 className="title">{typedTitle}</h1>
          <div className={`features ${isFeaturesAnimated ? 'animate' : ''}`}>
            <h3>Features</h3>
            <ul>
              <li className="animate-from-left">Connect minds with similar interests</li>
              <li className="animate-from-right">Daily topics based on expertise level</li>
              <li className="animate-from-left">Interactive chat application</li>
              <li className="animate-from-right">Quizzes and learning resources</li>
            </ul>
          </div>
          <button onClick={handleLoginClick} className={`login-button ${isLoginExpanded ? 'expand' : ''}`}>Login</button>
        </div>
      </div>
    </div>
  );
}

export default UIpage;
