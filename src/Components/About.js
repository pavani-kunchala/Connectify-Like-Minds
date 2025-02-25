import React from 'react';
import './About.css';
import missionImage from '../Images/mission.jpg';
import offerImage from '../Images/offer.jpg';
import howItWorksImage from '../Images/how-it-works.jpg';
import roadmapImage from '../Images/roadmap.jpg';
import joinUsImage from '../Images/join-us.jpg'; // Adjust the file extension if necessary
import { FaUsers, FaBullseye, FaRoad, FaSignInAlt } from 'react-icons/fa';
const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Connectify</h1>
        <p>Connecting Minds with Shared Interests</p>
      </header>

      <section className="about-section">
        <div className="about-content left">
          <div className="text">
            <h2>Our Mission</h2>
            <p>At Connectify, we believe in the power of community and shared knowledge. Our mission is to bring together individuals who have common interests and passions, making it easier for them to learn, grow, and collaborate.</p>
          </div>
          <div className="image">
            <img src={missionImage} alt="Our Mission" />
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="about-content right">
          <div className="image">
            <img src={offerImage} alt="What We Offer" />
          </div>
          <div className="text">
            <h2>What We Offer</h2>
            <ul>
              <li>Connect with people who share your interests</li>
              <li>Access personalized roadmaps to guide your learning journey</li>
              <li>Join study groups, forums, and discussion boards</li>
              <li>Participate in events, workshops, and webinars</li>
              <li>Share your progress and get feedback from the community</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="about-content left">
          <div className="text">
            <h2>How It Works</h2>
            <p>Connectify makes it simple to connect with like-minded individuals:</p>
            <ol>
              <li>Login into your profile</li>
              <li>Select your areas of interest</li>
              <li>Get matched with others who share your passions</li>
              <li>Follow curated roadmaps to achieve your learning goals</li>
              <li>Engage with the community to share knowledge and experiences</li>
            </ol>
          </div>
          <div className="image">
            <img src={howItWorksImage} alt="How It Works" />
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="about-content right">
          <div className="image">
            <img src={roadmapImage} alt="Our Roadmaps" />
          </div>
          <div className="text">
            <h2>Our Roadmaps</h2>
            <p>Our curated roadmaps are designed to help you navigate your learning journey with ease. Whether you're looking to master a new skill, explore a hobby, or advance your career, we provide step-by-step guidance tailored to your interests and goals.</p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="about-content left">
          <div className="text">
            <h2>Join Us</h2>
            <p>Ready to start your journey? Join Connectify today and become part of a vibrant community where learning and collaboration thrive.</p>
          </div>
          <div className="image">
            <img src={joinUsImage} alt="Join Us" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;