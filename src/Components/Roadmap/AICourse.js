import React from 'react';
import Structure from '../roadmapstructure';
import '../roadmapstyle.css';
//import { Link } from 'react-router-dom';

const AICourse = () => {
    return (
        <div>
            {/* <div className="fixed-button-container">
                            <button className="fixed-button"><Link to="/register">Join Group</Link></button>
                        </div>
            */}
              
            <Structure 
                room="AI"
                step1="Introduction to AI" 
                step2="Search Algorithms (BFS, DFS)" 
                step3="Heuristic Search and A* Algorithm"
                step4="Knowledge Representation and Reasoning" 
                inter_step1="Machine Learning Basics" 
                inter_step2="Supervised Learning" 
                inter_step3="Unsupervised Learning"
                inter_step4="Neural Networks and Deep Learning" 
                adv_step1="Natural Language Processing (NLP)" 
                adv_step2="Computer Vision" 
                adv_step3="Reinforcement Learning" 
                adv_step4="AI in Robotics and Autonomous Systems" 
            />
        </div>
    );
};

export default AICourse;
