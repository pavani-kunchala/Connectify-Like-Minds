import React from 'react';
import Structure from '../roadmapstructure';
import '../roadmapstyle.css';
import { Link } from 'react-router-dom';

const Javacourse = () => {
    return (
        <div>
            <div className="fixed-button-container">
                <button className="fixed-button"><Link to="/register">Join Group</Link></button>
            </div>
            <Structure 
                step1="Introduction to Java" 
                step2="Variables and Data Types" 
                step3="Control Flow (If-else, Switch)"
                step4="Loops (For, While, Do-while)" 
                inter_step1="Object-Oriented Programming (OOP)" 
                inter_step2="Arrays and Collections" 
                inter_step3="Exception Handling"
                inter_step4="Multithreading" 
                adv_step1="Generics in Java" 
                adv_step2="Java Streams API" 
                adv_step3="JavaFX for GUI Development" 
                adv_step4="Spring Framework" 
            />
        </div>
    );
};

export default Javacourse;
