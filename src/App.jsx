import React, { useState } from "react";
import "./App.css";
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
        <div className="startMain">
          <div className="heading1">
            <h1>REACT QUIZ</h1>
          </div>
          <div onClick={changeStyle} className="startbtn">
          <div className="button-style">Start</div>
          </div>
        </div>
      </div>
      <QuestionBox/>
    </>
  );
}

export default App;