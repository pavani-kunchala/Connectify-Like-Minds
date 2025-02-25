import React, { useState, useEffect } from "react";
import "./quizStyle.css"; // Import styles

const questionSets = {
  basic: [
    { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyperlink Text Manage Language", "None"], correctAnswer: "Hyper Text Markup Language" },
    { question: "Which CSS property changes text color?", options: ["color", "font-style", "background", "text-color"], correctAnswer: "color" },
    { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], correctAnswer: "4" },
  ],
  medium: [
    { question: "Which JavaScript keyword declares a constant variable?", options: ["var", "let", "const", "define"], correctAnswer: "const" },
    { question: "Which is a JavaScript framework?", options: ["Python", "React", "CSS", "HTML"], correctAnswer: "React" },
    { question: "What does API stand for?", options: ["Application Programming Interface", "Advanced Program Integration", "Automated Process Implementation", "None"], correctAnswer: "Application Programming Interface" },
  ],
  advanced: [
    { question: "Which algorithm is used in React's reconciliation process?", options: ["Merge Sort", "Diffing Algorithm", "Recursion", "Greedy Algorithm"], correctAnswer: "Diffing Algorithm" },
    { question: "What is the purpose of useEffect in React?", options: ["Handle side effects", "Manage state", "Style components", "Define routes"], correctAnswer: "Handle side effects" },
    { question: "What is a closure in JavaScript?", options: ["A function inside another function", "A CSS property", "An API request", "A backend framework"], correctAnswer: "A function inside another function" },
  ],
};

const Quiz = () => {
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
    setDifficulty(level);
    setQuestions(questionSets[level]);
    setCurrentQuestion(0);
    setScore(0);
    setTimeLeft(60);
    setShowResult(false);
    setSelectedAnswer(null);
    setQuizStarted(false);
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
      <h1 className="quiz-title">REACT QUIZ APP</h1>

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
            <div className="progress" style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}></div>
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
                    : ""
                }`}
                onClick={() => handleAnswerClick(option)}
                disabled={selectedAnswer !== null}
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
            <button className="next-button" onClick={nextQuestion} disabled={currentQuestion === questions.length - 1}>
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