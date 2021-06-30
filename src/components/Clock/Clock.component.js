import React from "react";
import TimeController from "../../utils/TimeController";

export function Clock() {
  const TimerFunctions = TimeController();
  return (
    <div className="clock">
      <div className="clock--time">{TimerFunctions.Clock()}</div>
      <div className="clock--date">
        {TimerFunctions.dateAndDayStringInPtBr()}
      </div>
    </div>
  );
}
