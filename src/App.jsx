import React, { useEffect, useState } from "react";
import "./App.css";
import questions from "./questions";
import Result from "./components/Result";
import QuestionBox from "./components/QuestionBox";



function App() {
  const [display, setDisplay] = useState("Main");

  const changeStyle = () => {
    console.log("start");
    if (display !== "Main") setDisplay("Main");
    else setDisplay("Main1");
};
  return (
    <>
      <div className={display}>
        <div className="start">
          <div className="heading1">
            <h1>REACT QUIZ</h1>
          </div>
          <div onClick={changeStyle} className="startbtn">
          <a className="button-style"><span>Start</span></a>
          </div>
          <div>
          <a className="button-style"><span>Light</span></a>
          </div>
        </div>
      </div>

      <QuestionBox/>
    </>
  );
}

export default App;