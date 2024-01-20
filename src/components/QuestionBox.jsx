import React, { useState } from 'react';
//importing the questions form questions.js
import questions from '../questions';
//importing the result page for passing the props to result component
import Result from './Result';
//importing the CSS
import './Question.css';
//For getting the toggle button 
import { DarkModeSwitch } from 'react-toggle-dark-mode';

export default function QuestionBox() {
//setting the index of the question to 0 so that when the component loads we get the first page and also to increase the index when
const [quesIndex, setQuesIndex] = useState(0);

//Setting the score to 0 and increase it when the user gets the right answer
const [score, setScore] = useState(0);

//Setting the darkmode to false that is the first mode will be light 
const [darkmode, setdarkMode] = useState(false);

//setting the quiz mode to false so when the quiz is completed that is when we choose the last option it is set to true and then result component is loaded
const [quizCompleted, setQuizCompleted] = useState(false);

//setting the highlight to false so when we click on the highlight button then the question is highlighted
const [isHighlighted, setIsHighlighted] = useState(false);

//function to check if the option is correct when we click on it and if correct then the score is incremented, even if the option is correct or not the index will be incremented
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

//setting the mode to dark or light based on the click
const toggleDarkMode = () => {
  setdarkMode
((prevMode) => !prevMode);
};

//setting everything back to their original state to restart the quiz
const restartQuiz = () => {
  setQuesIndex(0);
  setScore(0);
  setQuizCompleted(false);
  setIsHighlighted(false);
};

//setting the highlight property to true so that the question is highlighted
const highlightQuestion = () => {
  setIsHighlighted(true);
};

//setting the highlight property to false so that thehighlight is removed
const removeHighlight = () => {
  setIsHighlighted(false);
};

  return (
    <>
      {!quizCompleted && (
            <div className={`main ${darkmode ? 'dark' : 'light'}`}>
              <div className="toggle">
                {/* imported module to put the mode change gif*/}
                <DarkModeSwitch
                style={{color:'white'}}
                  checked={!darkmode}
                  onChange={toggleDarkMode}
                  size={35}
                  />
              </div>
              <div className="logo">
                <h1>Quizzer</h1>
              </div>
              <div className="disBox">
              <div className="heading">
                {/* modifiying the question number based on the index of the question */}
                  <h1 style={{color: darkmode ? 'white' : 'black'}}>
                    {`${quesIndex + 1} of 5 Questions`}
                  </h1>
                </div>
                <div className="Ques">
                  {/* highlighting the question */}
                  <h4 style={{ 
                    color: isHighlighted ? 'red' : (darkmode ? 'white' : 'black'),
                  }}>
                    {/* getting the question */}
                    {questions[quesIndex].text}
                  </h4>
                </div>
                <div className="optBox">
                  {/* mapping the options */}
                  {questions[quesIndex].options.map((option) => (
                    <div
                      key={option.id}
                      className={`opt ${darkmode ? 'darkOpt' : 'lightOpt'}`}
                      onClick={() => handleClick(option)}
                    >
                      <h2>{option.text}</h2>
                    </div>
                  ))}
                </div>
                {/* buttons for highlighting the question */}
                <div className={`highlight ${darkmode ? 'darkHighlight' : 'lightHighlight'}`}>
                  <button onClick={highlightQuestion}>Highlight</button>
                  <button onClick={removeHighlight}>Remove Highlight</button>
                </div>
              </div>
            </div>
          )}
          {/* passing the props to the result component so that and settig the quiz completed to true */}
      {quizCompleted && (
        <Result
          score={score}
          totalQuestions={questions.length}
          darkmode={darkmode} 
          onRestartQuiz={restartQuiz}
        />
      )}
    </>
  );
}
