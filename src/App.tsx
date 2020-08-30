import React, { useState } from 'react';
import './App.css';
import StopWatch from './Components/StopWatch';
import BtnStopWatch from './Components/BtnStopWatch';
import { TimeType } from './Type/TimeType';

const App = () => {
  const [time, setTime] = useState<TimeType>({ h: 0, m: 0, s: 0, ms: 0 });
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState<number>(0);

  const start = () => {
    run();
    setInterv(setInterval(run, 10));
    setStatus(1)
  }

  var updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;

  const run = () =>{
    if(updatedM === 60){
      updatedH ++
      updatedM = 0;
    }
    if(updatedS === 60){
      updatedM ++
      updatedS = 0;
    }
    if(updatedMs === 100){
      updatedS ++
      updatedMs = 0;
    }
    updatedMs ++
    return setTime({ h: updatedH, m: updatedM, s: updatedS, ms: updatedMs });
  }


  const stop = () => {
    clearInterval(interv)
    setStatus(2)
  }

  const reset = () =>{
    setStatus(0)
    clearInterval(interv)
    setTime({ h: 0, m: 0, s: 0, ms: 0 })
  }
  const resume = () => start();
  return (
    <div className="App">
    <h1>stop watch</h1>
      <div className="container">
        <div className="stopWatch">
          <StopWatch time={time} />
          <BtnStopWatch start={start} status={status} stop={stop} reset={reset} resume={resume} />
        </div>
      </div>

    </div>
  );
}

export default App;
