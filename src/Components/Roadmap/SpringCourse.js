import React from 'react';
import Structure from '../roadmapstructure';
import '../roadmapstyle.css';
import { Link } from 'react-router-dom';

const SpringCourse = () => {
    return (
        <div>
            <div className="fixed-button-container">
                <button className="fixed-button"><Link to="/register">Join Group</Link></button>
            </div>
            <Structure 
                step1="Introduction to Spring Framework" 
                step2="Spring Core and Dependency Injection" 
                step3="Spring MVC Architecture"
                step4="Spring Boot Basics" 
                inter_step1="Spring Data JPA and Hibernate" 
                inter_step2="Spring Security for Authentication" 
                inter_step3="Spring REST API Development"
                inter_step4="Testing in Spring" 
                adv_step1="Spring Cloud for Microservices" 
                adv_step2="Spring AOP (Aspect-Oriented Programming)" 
                adv_step3="Spring Batch for Batch Processing" 
                adv_step4="Advanced Spring Boot with Profiles and Configurations" 
            />
        </div>
    );
};

export default SpringCourse;
