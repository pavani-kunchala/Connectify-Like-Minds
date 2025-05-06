import React, { useState} from 'react';
import { Nav, Button, Carousel } from 'react-bootstrap';
import { IoMdContact } from "react-icons/io";
import { Link, Element, animateScroll as scroll } from 'react-scroll';
import { json, useNavigate } from 'react-router-dom';  // Import useNavigate
 

import About from './About';
import Services from './Services';
import c0 from '../Images/ca1.png';
import c2 from '../Images/ca2.png';
import c3 from '../Images/ca3.png';
//import group1 from "../Images/study.png";
import group1 from "../Images/Study Home.jpeg";
import ca1 from '../Images/ml1.jpg';
import ca2 from '../Images/images.jpeg';
import ca3 from '../Images/java.cms';
import ca4 from '../Images/AI.webp';
import ca5 from '../Images/reactjs.jpg';
import ca6 from '../Images/c.jpeg';
import ca7 from '../Images/spring.png';
import ca8 from '../Images/full.webp';


function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();  // Initialize useNavigate
  
  const [searchQuery, setSearchQuery] = useState(''); // State for search input
  const [recommendations, setRecommendations] = useState([]); // State for recommendations
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  
  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
  {/*Python, c, web development, java, data structures, node js, nlp, ai,devops, spring boot ,machine learning,c++,react js
  Generate recommendations based on the search query*/}
  const newRecommendations = [];
  
  if (query.match(/^p|^py|^pyth/i)) {
    newRecommendations.push({ name: 'Python', path: '/python' });
  }
  if (query.match(/^c$/i)) {
    newRecommendations.push({ name: 'C', path: '/c' });
  }
  if (query.match(/^w|^we|^web|^f|^fu|^full|^fullstack|^webdevelopment|^full stack|^web development/i)) {
    newRecommendations.push({ name: 'Web Development', path: '/webdevelopment' });
  }
  if (query.match(/^j|^ja|^jav$/i)) {
    newRecommendations.push({ name: 'Java', path: '/java' });
  }
  if (query.match(/^d|^da|^ds|^data structures/i)) {
    newRecommendations.push({ name: 'Data Structures And Algorithms', path: '/dsa' });
  }
  if (query.match(/^n|^no|^nod|^node/i)) {
    newRecommendations.push({ name: 'Node Js', path: '/nodejs' });
  }
  if (query.match(/^n|^na|^nlp/i)) {
    newRecommendations.push({ name: 'Natural Language Processing (NLP)', path: '/nlp' });
  }
  if (query.match(/^a|^ai|^artificial intelligence/i)) {
    newRecommendations.push({ name: 'Artificial Intelligence (AI)', path: '/ai' });
  }
  if (query.match(/^d|^de|^dev|^devops/i)) {
    newRecommendations.push({ name: 'DevOps', path: '/devops' });
  }
  if (query.match(/^s|^sp|^spring|^spring boot/i)) {
    newRecommendations.push({ name: 'Spring Boot', path: '/springboot' });
  }
  if (query.match(/^m|^ma|^mac|^machine learning/i)) {
    newRecommendations.push({ name: 'Machine Learning', path: '/machinelearning' });
  }
  if (query.match(/^c|^c pl|^c plus|^c plus plus/i)) {
    newRecommendations.push({ name: 'C Plus Plus', path: '/cplusplus' });
  }
  if (query.match(/^r|^rea|^react|^react js/i)) {
    newRecommendations.push({ name: 'React Js', path: '/reactjs' });
  }
  
  setRecommendations(newRecommendations);
  
  };

  const handleRecommendationClick = (path) => {
    navigate(path);
  };

  return (
    <div className="home-container">

     <nav className="bg-gray-900 text-white p-4">
      {/* Desktop & Tablet Navbar */}
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <span className="text-blue-400 text-4xl font-bold">Connectify</span>
          <div className="hidden lg:flex space-x-6">
            <Nav.Link as={Link} to="home" smooth duration={500} className="hover:text-blue-400">Home</Nav.Link>
            <Nav.Link as={Link} to="about" smooth duration={500} className="hover:text-blue-400">About</Nav.Link>
            <Nav.Link as={Link} to="services" smooth duration={500} className="hover:text-blue-400">Services</Nav.Link>
            <Nav.Link href="courses" className="hover:text-blue-400">Courses</Nav.Link>
            <Nav.Link href="chatrooms" className="hover:text-blue-400">Groups</Nav.Link>
            <Nav.Link href="/quiz"className="hover:text-blue-400">Quizzes</Nav.Link>
          </div>
        </div>

        {/* Search Bar with Dynamic Styles */}
        <div className="relative flex-grow max-w-md  p-2">
          <input
            type="text"
            placeholder="&#128269;What do you want to learn"
            className={`w-full p-2 rounded border border-gray-800 focus:outline-none transition-colors duration-200 
              ${isSearchFocused ? "bg-white text-black placeholder-gray-700" : "bg-gray-800 text-white placeholder-white"}`}
            value={searchQuery}
            onChange={handleSearchChange}
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
          />
           

          {/* Recommendations Dropdown */}
          {recommendations.length > 0 && (
            <ul className="absolute top-full left-0 w-full bg-white text-black shadow-lg rounded mt-1">
              {recommendations.map((rec, index) => (
                <li 
                  key={index} 
                  className="p-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleRecommendationClick(rec.path)}
                >
                  {rec.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Profile & Menu Button */}
        <div className="flex items-center space-x-4">
          
        <button
         onClick={() => setIsProfileOpen(!isProfileOpen)}
         className="hidden lg:block relative bg-transparent focus:outline-none"
         >
        {/* Profile Icon */}
        <div className="flex items-center space-x-2 ">
           <IoMdContact size="45px" className="text-blue-600" />
        </div>

      {/* Dropdown Menu */}
     {isProfileOpen && (
       <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg">
         {/*  <a href="#" className="block px-4 py-2 hover:bg-gray-200">Your Profile</a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-200">Settings</a>*/}
          <a href="uipage" className="block px-4 py-2 hover:bg-gray-200">Sign out</a>
       </div>
      )}
    </button>
  
          {/* Mobile Menu Toggle Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className=" lg:hidden">
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-gray-800 text-white mt-2 p-4 rounded text-left">
           {/*Navigation links */}
           <div className="mt-4 space-y-2">             
            <Nav.Link as={Link} to="home" smooth duration={500} className="block px-4 py-2  hover:bg-gray-700">Home</Nav.Link>
            <Nav.Link as={Link} to="about" smooth duration={500} className="block px-4 py-2 hover:bg-gray-700">About</Nav.Link>
            <Nav.Link as={Link} to="services" smooth duration={500} className="block px-4 py-2  hover:bg-gray-700">Services</Nav.Link>
            <Nav.Link href="courses" className="block px-4 py-2 hover:bg-gray-700">Courses</Nav.Link>
            <Nav.Link href="chatrooms" className="block px-4 py-2 hover:bg-gray-700">Groups</Nav.Link>
            <Nav.Link href="/quiz"className="block px-4 py-2 hover:bg-gray-700">Quizzes</Nav.Link>    
          </div>

           {/* Profile Section */}
         <div className="px-4 py-4 flex items-center space-x-3 border-t border-gray-700">
          <IoMdContact size="45px" />
         </div>

            {/* Profile Options */}
          {/*   <a href="#" className="block px-4 py-2 hover:bg-gray-700">Your Profile</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-700">Settings</a> */} 
            <a href="uipage" className="block px-4 py-2 hover:bg-gray-700">Sign Out</a>
          
        </div>
      )}
    </nav>
   
  <Element name="home">
   <div className="flex flex-col lg:flex-row items-center  justify-between p-7">
    
    {/* Left Content */}
    <div className="lg:w-1/2 text-center lg:text-left">
      <h1 className="text-4xl lg:text-5xl font-bold text-black">Connectify Like Minds</h1>
      <p className="mt-4 text-lg text-gray-700">
        Connect with like-minded individuals and form study groups based on your interests and goals. Share resources, exchange ideas, and tackle challenging topics as a cohesive team.
      </p>
      <form className="mt-6">
        <Button className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-3 rounded text-xl" href="courses">
          Get Started
        </Button>
      </form>
    </div>

     {/* Right Image */}
     <div className="lg:w-1/2 flex justify-center">
     <img src={group1} alt="soory" className=" mt-6 max-w-full h-auto rounded-lg" />
     </div>

     </div>
    </Element>

    {/*Carousel */}
    <div className="flex justify-center items-center w-full p-6">
    <Carousel interval={1000} className="w-full max-w-4xl">
    <Carousel.Item>
      <img className="d-block w-full carousel" src={c0} alt="First slide" />
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-full carousel" src={c2} alt="Second slide" />
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-full carousel" src={c3} alt="Third slide" />
    </Carousel.Item>
     </Carousel>
    </div>

    <div>
  <h1 className="text-4xl font-bold text-black p-4 text-center">
    Most Trending Domains
  </h1>
</div>

{/* Cards Container */}
<div className="flex flex-wrap justify-evenly gap-5 p-4">
  {[ca1, ca2, ca3, ca4, ca5, ca6, ca7, ca8].map((img, index) => (
    <div 
      key={index} 
      className="border-2 border-black shadow-lg rounded-lg overflow-hidden w-72 transition-transform transform hover:scale-105 hover:shadow-xl"
    >
      <img 
        src={img} 
        alt="Course" 
        className="w-full h-48 object-cover"
      />
      <div className="flex flex-col justify-center items-center p-4">
        <Button 
          href={index === 0 ? "/machinelearning" : index === 1 ? "/python" : index === 2 ? "/java" : index === 3 ? "/ai" :  
            index === 4 ? "/reactjs" : index === 5 ? "/c" : index === 6 ? "/springboot" : index === 7 ? "/webdevelopment" : "#"
          }
          className="mt-2 bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-all"
        >
          View Course
        </Button>
      </div>
    </div>
  ))}
</div>

      <Element name="about">
        <About />
      </Element>

      <Element name="services">
        <Services />
      </Element>

      <footer className="bg-dark text-white text-center text-lg-start">
        <div className="container p-4">
          <div className="row mt-4">
            <div className="col-md-4">
              <h2 className="logo"><b>C</b>onnectify</h2>
              <p>
                Connectify is a platform where like-minded individuals come together to learn, collaborate, and grow.
              </p>
              <div className="contact">
                <span><i className="fas fa-phone"></i> +1234567890</span>
                <span><i className="fas fa-envelope"></i> info@connectify.com</span>
              </div>
              <div className="socials">
                <a href="/home"><i className="fab fa-facebook"></i></a>
                <a href="/home"><i className="fab fa-twitter"></i></a>
                <a href="/home"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
            <div className="col-md-4">
              <h2>Quick Links</h2>
              <ul className="list-unstyled">
                <li><a href="#home" onClick={() => scroll.scrollToTop()}>Home</a></li>
                <li><a href="#about" onClick={() => scroll.scrollTo('about')}>About</a></li>
                <li><a href="#services" onClick={() => scroll.scrollTo('services')}>Services</a></li>
                <li><a href="#contact" onClick={() => scroll.scrollTo('contact')}>Contact</a></li>
              </ul>
            </div>
            <div className="col-md-4">
              <h2>Contact Us</h2>
              <form>
                <div className="mb-3">
                  <input type="email" name="email" className="form-control" placeholder="Your Email" />
                </div>
                <div className="mb-3">
                  <textarea name="message" className="form-control" placeholder="Message" rows="4"></textarea>
                </div>
                <div>
                  <Button type="submit" className="btn btn-outline-light">Submit</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>
    {/*Chatbot Icon */} 
    <>
      {/* Chatbot Icon with Click Event */}
      <div 
        onClick={() => navigate('/chatbot')} 
        className="fixed bottom-12 right-6 bg-gradient-to-r from-yellow-500 to-cyan-600 p-2 rounded-full cursor-pointer transition-transform transform hover:scale-110 animate-bounce"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img 
          src="/chatbot_icon.avif" 
          alt="Chatbot Icon"  
          className="h-16 w-16 object-contain rounded-full animate-pulse" 
        />
      </div>
      {isHovered && (
        <span className="fixed bottom-2 right-6 text-sm bg-black text-white px-2 py-1 rounded-md transition-opacity duration-300 opacity-100">
          👋 Need help? Let's chat!
        </span>
      )}
    </>
    </div>
  );
}

export default Home;