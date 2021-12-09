import React from "react";
import "./Steps.css";

function Steps(props) {
  console.log("Entre a steps");
  const renderSteps = () => {
    let steps = props.steps;
    // console.log("Steps: ", steps);
    return steps.map((elem, index) => (
      <li className="step-li" key={Math.random()}>
        <p className="recipe-subtitle">
          {index + 1}: {elem.step}{" "}
        </p>
      </li>
    ));
  };
  return (
    <div>
      <p className="recipe-subtitle">Steps: </p>
      <ul>{renderSteps()}</ul>
    </div>
  );
}

export default Steps;
