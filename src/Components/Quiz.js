import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Import useParams to get dynamic course
import "./quizStyle.css"; 
import questionSets from "../questionSets";

const Quiz = () => {
  const { course } = useParams(); // Get course from URL params
  const [difficulty, setDifficulty] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [quizStarted, setQuizStarted] = useState(false);

  useEffect(() => {
    if (timeLeft > 0 && quizStarted && !showResult) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setShowResult(true); // Auto-finish when time runs out
    }
  }, [timeLeft, quizStarted, showResult]);

  const selectDifficulty = (level) => {
    if (questionSets[course] && questionSets[course][level]) {
      setDifficulty(level);
      setQuestions(questionSets[course][level]);
      setCurrentQuestion(0);
      setScore(0);
      setTimeLeft(60);
      setShowResult(false);
      setSelectedAnswer(null);
      setQuizStarted(false);
    }
  };

  const startQuiz = () => {
    setQuizStarted(true);
  };

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
    if (answer === questions[currentQuestion].correctAnswer) {
      setScore(score + 10);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    }
  };

  const finishQuiz = () => {
    setShowResult(true);
  };

  const restartQuiz = () => {
    setDifficulty(null);
    setQuestions([]);
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setTimeLeft(60);
    setSelectedAnswer(null);
    setQuizStarted(false);
  };

  return (
    <div className="quiz-container">
      <h1 className="quiz-title">{course.toUpperCase()} QUIZ</h1>

      {!difficulty ? (
        <div className="difficulty-selection">
          <h2>Select Difficulty Level:</h2>
          <button className="difficulty-button basic" onClick={() => selectDifficulty("basic")}>Basic</button>
          <button className="difficulty-button medium" onClick={() => selectDifficulty("medium")}>Medium</button>
          <button className="difficulty-button advanced" onClick={() => selectDifficulty("advanced")}>Advanced</button>
        </div>
      ) : !quizStarted ? (
        <div className="start-test-container">
          <h2>Difficulty: {difficulty.toUpperCase()}</h2>
          <button className="start-test-button" onClick={startQuiz}>Start Test</button>
        </div>
      ) : !showResult ? (
        <>
          {/* Progress Bar */}
          <div className="progress-bar">
            <div className="progress" style={{ width: `${(currentQuestion / (questions.length - 1)) * 100}%` }}></div>
          </div>

          <div className="quiz-status">
            <span>Question: {currentQuestion + 1} / {questions.length}</span>
            <span>⏳ {timeLeft}s</span>
            <span>Score: {score}</span>
          </div>

          <p className="quiz-question">{questions[currentQuestion].question}</p>

          <div className="quiz-options">
            {questions[currentQuestion].options.map((option) => (
              <button
                key={option}
                className={`quiz-button ${
                  selectedAnswer === option
                    ? option === questions[currentQuestion].correctAnswer
                      ? "correct"
                      : "wrong"
                    : selectedAnswer && option === questions[currentQuestion].correctAnswer
                    ? "correct"
                    : ""
                }`}
                onClick={() => handleAnswerClick(option)}
                disabled={selectedAnswer !== null || timeLeft === 0}
              >
                {option}
              </button>
            ))}
          </div>

          {selectedAnswer && (
            <p className="quiz-feedback">
              {selectedAnswer === questions[currentQuestion].correctAnswer ? "✅ Correct!" : "❌ Wrong!"}
            </p>
          )}

          <div className="quiz-controls">  
            <button className="next-button" onClick={nextQuestion} disabled={selectedAnswer === null || currentQuestion === questions.length - 1}>
              Next
            </button>

            <button className="finish-button" onClick={finishQuiz}>
              Finish
            </button>
          </div>

        </>
      ) : (
        <div className="quiz-result">
          <h2>Quiz Completed!</h2>
          <p>You scored: {score} / {questions.length * 10}</p>
          <p>Percentage: {(score / (questions.length * 10)) * 100}%</p>
          <button className="restart-button" onClick={restartQuiz}>Restart Quiz</button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
