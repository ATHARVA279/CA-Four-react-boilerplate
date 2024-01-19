import React, { useState } from 'react';
import questions from '../questions';
import './Question.css';
import Result from './Result';

export default function QuestionBox() {
  const [quesIndex, setQuesIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [isHighlighted, setIsHighlighted] = useState(false);

  const handleClick = (selectedOption) => {
    if (selectedOption.isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }

    if (quesIndex + 1 < questions.length) {
      setQuesIndex((prevIndex) => prevIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const restartQuiz = () => {
    setQuesIndex(0);
    setScore(0);
    setQuizCompleted(false);
    setIsHighlighted(false);
  };

  const highlightQuestion = () => {
    setIsHighlighted(true);
  };

  const removeHighlight = () => {
    setIsHighlighted(false);
  };

  return (
    <>
      {!quizCompleted && (
        <div className={`main ${isDarkMode ? 'dark' : 'light'}`}>
          <div className="toggle">
            <button onClick={toggleDarkMode}>Toggle</button>
          </div>
          <div className="disBox">
            <div className="heading">
              <h1>{`${quesIndex + 1} of 5 Questions`}</h1>
            </div>
            <div className="Ques">
              <h4 style={{ color: isHighlighted ? 'red' : 'inherit' }}>
                {questions[quesIndex].text}
              </h4>
            </div>
            <div className="optBox">
              {questions[quesIndex].options.map((option) => (
                <div
                  key={option.id}
                  className={`opt ${isDarkMode ? 'darkOpt' : 'lightOpt'}`}
                  onClick={() => handleClick(option)}
                >
                  <h2>{option.text}</h2>
                </div>
              ))}
            </div>
            <div className={`highlight ${isDarkMode ? 'darkHighlight' : 'lightHighlight'}`}>
              <button onClick={highlightQuestion}>Highlight</button>
              <button onClick={removeHighlight}>Remove Highlight</button>
            </div>
          </div>
        </div>
      )}
      {quizCompleted && (
        <Result score={score} totalQuestions={questions.length} onRestartQuiz={restartQuiz} />
      )}
    </>
  );
}
