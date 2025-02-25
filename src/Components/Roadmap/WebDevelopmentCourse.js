import React from 'react';
import Structure from '../roadmapstructure';
import '../roadmapstyle.css';
import { Link } from 'react-router-dom';

const WebDevelopmentCourse = () => {
    return (
        <div>
            <div className="fixed-button-container">
                <button className="fixed-button"><Link to="/register">Join Group</Link></button>
            </div>
            <Structure 
                step1="Introduction to Web Development" 
                step2="HTML Basics" 
                step3="CSS Basics"
                step4="Responsive Web Design (Media Queries)" 
                inter_step1="JavaScript Basics" 
                inter_step2="DOM Manipulation" 
                inter_step3="CSS Flexbox and Grid"
                inter_step4="Web Forms and Validation" 
                adv_step1="Advanced JavaScript (ES6+ Features)" 
                adv_step2="Front-end Frameworks (React, Vue.js, etc.)" 
                adv_step3="Backend Development (Node.js, Express)"
                adv_step4="Full-Stack Development (MERN Stack)" 
            />
        </div>
    );
};

export default WebDevelopmentCourse;
