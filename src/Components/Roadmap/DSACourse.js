import React from 'react';
import Structure from '../roadmapstructure';
import '../roadmapstyle.css';
import { Link } from 'react-router-dom';

const DSACourse = () => {
    return (
        <div>
            <div className="fixed-button-container">
                <button className="fixed-button"><Link to="/register">Join Group</Link></button>
            </div>
            <Structure 
                step1="Introduction to Data Structures and Algorithms" 
                step2="Arrays and Linked Lists" 
                step3="Stacks and Queues"
                step4="Searching Algorithms (Binary Search, Linear Search)" 
                inter_step1="Recursion" 
                inter_step2="Trees (Binary Trees, Binary Search Trees)" 
                inter_step3="Graphs and Traversals (DFS, BFS)"
                inter_step4="Hashing" 
                adv_step1="Dynamic Programming" 
                adv_step2="Greedy Algorithms" 
                adv_step3="Backtracking Algorithms" 
                adv_step4="Advanced Data Structures (Trie, Segment Tree, Heap)" 
            />
        </div>
    );
};

export default DSACourse;
