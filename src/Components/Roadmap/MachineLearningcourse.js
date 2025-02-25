import React from 'react';
import Structure from '../roadmapstructure';
import '../roadmapstyle.css';
import { Link } from 'react-router-dom';
 
const MachineLearningcourse = () => {
    return (
        <div>
            <div className="fixed-button-container">
                <button className="fixed-button"><Link to="/register">Join Group</Link></button>
            </div>
            <Structure 
                step1="Introduction to Machine Learning" 
                step2="Supervised Learning: Regression and Classification" 
                step3="Unsupervised Learning: Clustering and Dimensionality Reduction"
                step4="Model Evaluation and Validation" 
                inter_step1="Neural Networks and Deep Learning" 
                inter_step2="Support Vector Machines" 
                inter_step3="Random Forest and Ensemble Learning"
                inter_step4="K-Nearest Neighbors (KNN)" 
                adv_step1="Reinforcement Learning" 
                adv_step2="Natural Language Processing (NLP)" 
                adv_step3="Time Series Forecasting" 
                adv_step4="Advanced Neural Network Architectures (GANs, CNNs, RNNs)" 
            />
        </div>
    );
};

export default MachineLearningcourse;
