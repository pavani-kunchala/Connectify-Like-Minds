import React from 'react';
import Structure from '../roadmapstructure';
import '../roadmapstyle.css';
import { Link } from 'react-router-dom';

const Croadmap = () => {
    return (
        <div>
            <div className="fixed-button-container">
                <button className="fixed-button"><Link to="/register">Join Group</Link></button>
            </div>
            <Structure 
                step1="Introduction to C" 
                step2="Variables and Data Types" 
                step3="Control Flow (If-else, Switch)"
                step4="Loops (For, While, Do-while)" 
                inter_step1="Functions in C" 
                inter_step2="Arrays and Strings" 
                inter_step3="Pointers and Memory Management"
                inter_step4="Structures and Unions" 
                adv_step1="Dynamic Memory Allocation" 
                adv_step2="File Handling in C" 
                adv_step3="Preprocessor Directives" 
                adv_step4="Multi-threading in C" 
            />
        </div>
    );
};

export default Croadmap;
