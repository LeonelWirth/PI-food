import React from "react";

function Steps(props) {
  console.log("Entre a steps");
  const renderSteps = () => {
    let steps = props.steps;
    // console.log("Steps: ", steps);
    return steps.map((elem) => (
      <>
        <p>
          {elem.number}: {elem.step}
        </p>
      </>
    ));
  };
  return (
    <div>
      <p>Steps: </p>
      {renderSteps()}
    </div>
  );
}

export default Steps;
