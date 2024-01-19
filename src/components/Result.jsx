import React from 'react';
import './Result.css';

export default function ResultScreen({ score, totalQuestions, onRestartQuiz }) {
  const percentage = (score / totalQuestions) * 100;

  return (
    <div className="mainRes">
      <div className='disResBox'>
        <h1>Quiz Result</h1>
        <p>Your score: {score}</p>
        <p>Total questions: {totalQuestions}</p>
        <p>Percentage: {percentage.toFixed(2)}%</p>
        <button onClick={onRestartQuiz} className='resButton'>Restart Quiz</button>
      </div>
    </div>
  );
}

