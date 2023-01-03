import React, { useState } from 'react'


const Clock = () => {
  const [secondRatio, setSecondRatio] = useState(0)
  const [minuteRatio, setMinutesRatio] = useState(0)
  const [hourRatio, setHourRatio] = useState(0)

  setInterval(() => {
    const currentDate = new Date();
    let secondRatio = currentDate.getSeconds() / 60;
    let minuteRatio = (secondRatio + currentDate.getMinutes()) / 60;
    let hourRatio = (minuteRatio + currentDate.getHours()) / 12;
    setHourRatio((minuteRatio + currentDate.getHours()) / 12)
    setMinutesRatio((secondRatio + currentDate.getMinutes()) / 60)
    setSecondRatio(secondRatio = currentDate.getSeconds() / 60)
  }, 1000);

  return (
    <div className="clock">
      <div className="hand hour" style={{ transform: `translate(-50%) rotate(${hourRatio * 360}deg)` }}></div>
      <div className="hand minute" style={{ transform: `translate(-50%) rotate(${minuteRatio * 360}deg)` }}  ></div>
      <div className="hand second" style={{ transform: `translate(-50%) rotate(${secondRatio * 360}deg)` }}  ></div>

      <div className="number number1">1</div>
      <div className="number number2">2</div>
      <div className="number number3">3</div>
      <div className="number number4">4</div>
      <div className="number number5">5</div>
      <div className="number number6">6</div>
      <div className="number number7">7</div>
      <div className="number number8">8</div>
      <div className="number number9">9</div>
      <div className="number number10">10</div>
      <div className="number number11">11</div>
      <div className="number number12">12</div>
    </div>
  );
}

export default Clock;