import React from 'react';
import Structure from '../roadmapstructure';
import '../roadmapstyle.css';
//import { Link } from 'react-router-dom';
  
const Pythoncourse = () => {
      return (
          <div>
            {/* <div className="fixed-button-container">
                            <button className="fixed-button"><Link to="/register">Join Group</Link></button>
                        </div>
            */}
             
              <Structure 
                  room="python"
                  step1="Introduction to Python" 
                  step2="Variables and Data Types" 
                  step3="Control Flow (If-else, Loops)"
                  step4="Functions and Modules" 
                  inter_step1="Object-Oriented Programming (OOP)" 
                  inter_step2="Data Structures (Lists, Tuples, Dictionaries)" 
                  inter_step3="File Handling"
                  inter_step4="Exception Handling" 
                  adv_step1="Decorators in Python" 
                  adv_step2="Regular Expressions" 
                  adv_step3="Lambda Functions and Higher-Order Functions" 
                  adv_step4="Advanced Python Libraries (NumPy, Pandas, Matplotlib)" 
              />
          </div>
      );
  };
  
export default Pythoncourse;