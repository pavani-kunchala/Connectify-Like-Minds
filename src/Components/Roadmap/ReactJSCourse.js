import React from 'react';
import Structure from '../roadmapstructure';
import '../roadmapstyle.css';
//import { Link } from 'react-router-dom';

const ReactJSCourse = () => {
    return (
        <div>
            {/* <div className="fixed-button-container">
                            <button className="fixed-button"><Link to="/register">Join Group</Link></button>
                        </div>
            */}
             
            <Structure 
                room="reactjs"
                step1="Introduction to ReactJS" 
                step2="JSX, Components, and Props" 
                step3="State and Lifecycle Methods"
                step4="Event Handling in React" 
                inter_step1="React Router for Navigation" 
                inter_step2="Hooks (useState, useEffect)" 
                inter_step3="Context API for State Management"
                inter_step4="Error Boundaries and Testing in React" 
                adv_step1="Advanced Hooks (useReducer, useCallback)" 
                adv_step2="Performance Optimization in React" 
                adv_step3="Server-Side Rendering (SSR) with React" 
                adv_step4="React with TypeScript" 
            />
        </div>
    );
};

export default ReactJSCourse;
