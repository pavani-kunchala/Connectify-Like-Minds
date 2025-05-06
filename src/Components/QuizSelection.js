import React from 'react';
import { Link } from 'react-router-dom';
import './GroupsStyle.css'; // Optional: For styling

const QuizSelection = () => {
  const quizTopics =  ['c', 'java','dsa','reactjs','webdevelopment','nodejs','python','ai','cplusplus','devops','machinelearning','nlp','springboot'];

  return (
    <div className="groups-container">
      <h2>Select a Quiz</h2>
      <ul>
        {quizTopics.map((topic, index) => (
          <li key={index}>
            <Link to={`/quiz/${topic}`}>{topic.toUpperCase()} Quiz</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizSelection;

