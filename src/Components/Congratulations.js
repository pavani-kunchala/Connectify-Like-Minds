import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Congratulations.css';

const Congratulations = () => {
    const location = useLocation();
    const { state } = location;
    const groupnum = state && state.groupnum;
    const navigate = useNavigate();

    useEffect(() => {
        const numConfetti = 50;

        for (let i = 0; i < numConfetti; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            if (i % 2 === 0) {
                confetti.classList.add('blue');
            } else {
                confetti.classList.add('green');
            }
            confetti.style.top = Math.random() * -100 + 'vh';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.animationDelay = Math.random() * 2 + 's';
            document.body.appendChild(confetti);
        }

        const confettiElements = document.querySelectorAll('.confetti');
        confettiElements.forEach(confetti => {
            confetti.style.opacity = 1;
        });

        // Clean up confetti elements
        const cleanupConfetti = () => {
            confettiElements.forEach(confetti => {
                document.body.removeChild(confetti);
            });
        };

        // Automatically redirect to groups page after 5 seconds
        const redirectTimeout = setTimeout(() => {
            navigate('/groups');
        }, 5000); // 5000 milliseconds = 5 seconds

        // Cleanup function
        return () => {
            cleanupConfetti();
            clearTimeout(redirectTimeout);
        };
    }, [navigate]); // Dependency on navigate to prevent stale closure issue

    return (
        <div className="cont">
            <h1>Congratulations!</h1>
            <p>You are successfully added into Group {groupnum}.</p>
            <p>Redirecting to Groups page...</p>
        </div>
    );
};

export default Congratulations;
