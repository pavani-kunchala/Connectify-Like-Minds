import React from 'react';
import Structure from '../roadmapstructure';
import '../roadmapstyle.css';
//import { Link } from 'react-router-dom';

const DevOpsCourse = () => {
    return (
        <div>
            {/* <div className="fixed-button-container">
                            <button className="fixed-button"><Link to="/register">Join Group</Link></button>
                        </div>
            */}
            
            <Structure 
                room="devops"
                step1="Introduction to DevOps" 
                step2="Version Control with Git"
                step3="Continuous Integration (CI) and Continuous Deployment (CD)"
                step4="Containerization with Docker" 
                inter_step1="Orchestration with Kubernetes" 
                inter_step2="Infrastructure as Code (Terraform, Ansible)" 
                inter_step3="Monitoring and Logging (Prometheus, ELK Stack)"
                inter_step4="Cloud Platforms (AWS, Azure, GCP)" 
                adv_step1="CI/CD Pipelines with Jenkins" 
                adv_step2="Microservices Architecture" 
                adv_step3="DevOps in the Cloud (Kubernetes, AWS, Azure)" 
                adv_step4="Automated Testing and Quality Assurance in DevOps" 
            />
        </div>
    );
};

export default DevOpsCourse;
