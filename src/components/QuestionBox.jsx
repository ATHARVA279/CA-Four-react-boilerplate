import React, { useState } from 'react'
import questions from '../questions'
import './Question.css'

export default function QuestionBox() {

  const [quesIndex,setquesIndex] = useState(0)

  const handleClick=()=>{
  }
  
  return (
      <>
        <div className="main">
          <div className='toggle'>
            <button> Toggle </button>
          </div>

        <div className='card'>
          <div className="disBox">
              <div className='heading'>
              <h1>{`${quesIndex+1} of 5 Questions`}</h1>
              </div>
              <div className='Ques'>
                <h4>{questions[quesIndex].text}</h4>
              </div>
                <div className='optBox'>
                  {questions[quesIndex].options.map(option => (
                      <div key={option.id} className="opt">
                          <h2>{option.text}</h2>
                      </div>
                  ))}
                </div>
                <div className="highlight">
                  <button>Highlight</button>
                  <button>Remove Highlight</button>
                </div>
            </div>
        </div>
         
        </div>
      </>
  )
}
