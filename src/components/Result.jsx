import React from 'react';
import './Result.css';
//getting the props from QuestionBox for updating the result box
export default function ResultScreen({ score, totalQuestions, onRestartQuiz, darkmode }) {
  //getting the percentage based on the right questions marked
  const percentage = (score/totalQuestions) * 100;

  return (
    <div className={`mainRes ${darkmode ? 'dark' : 'light'}`}>
      <div className='disResBox' style={{ color: darkmode ? 'white' : 'black' }}>
        <h1>Quiz Result</h1>
        <p>Your score: {score}</p>
        <p>Total questions: {totalQuestions}</p>
        <p>Percentage: {percentage.toFixed(2)}%</p>
        {/* passing the state of onRestartQuiz to QuestionBox to setting the states to their original state again  */}
      <button onClick={onRestartQuiz} className={`resButton ${darkmode ? 'darkButton' : 'lightButton'}`}>
        Restart Quiz
      </button>
      </div>
    </div>
  );
}
