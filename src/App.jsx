import React, { useState } from "react";
//getting the CSS
import "./App.css";
//Getting the Question box component
import QuestionBox from "./components/QuestionBox";



function App() {
  //setting the state of the main page to change when clicked on the start to show the questionbox
  const [display, setDisplay] = useState("Main");

  //setting the main div property to display none when clicked on the start button
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
      {/* getting the questionbox component */}
      <QuestionBox/>
    </>
  );
}

export default App;