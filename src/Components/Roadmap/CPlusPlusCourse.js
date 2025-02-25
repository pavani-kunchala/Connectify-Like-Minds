import React from 'react';
import Structure from '../roadmapstructure';
import '../roadmapstyle.css';
import { Link } from 'react-router-dom';

const CPlusPlusCourse = () => {
    return (
        <div>
            <div className="fixed-button-container">
                <button className="fixed-button"><Link to="/register">Join Group</Link></button>
            </div>
            <Structure 
                step1="Introduction to C++" 
                step2="Variables and Data Types" 
                step3="Control Flow (If-else, Switch)"
                step4="Loops (For, While, Do-while)" 
                inter_step1="Functions in C++" 
                inter_step2="Arrays and Pointers" 
                inter_step3="Object-Oriented Programming (OOP)"
                inter_step4="File Handling" 
                adv_step1="STL (Standard Template Library)" 
                adv_step2="Exception Handling in C++" 
                adv_step3="Multithreading in C++" 
                adv_step4="Advanced C++ Features (Lambda Expressions, Smart Pointers)" 
            />
        </div>
    );
};

export default CPlusPlusCourse;
