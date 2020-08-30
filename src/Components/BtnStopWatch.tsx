import React from 'react';
import './BtnStopWatch.css';
import { BtnType } from '../Type/TimeType';

const BtnStopWatch: React.FC<BtnType> = ({ start, status, stop, reset, resume }) => {
    return (
        <div className="btnStyle">

            {(status === 0) ?
                <button className="startBtn" onClick={start}>Start</button> : ""
            }

            {(status === 1) ?
                <div>
                    <button className="stopBtn" onClick={stop}>Stop</button>
                    <button className="resetBtn" onClick={reset}>Reset</button>
                </div> : ""
            }

            {(status === 2) ?
                <div>
                    <button className="resumeBtn" onClick={resume}>Resume</button>
                    <button className="resetBtn" onClick={reset}>Reset</button>
                </div> : ""
            }


        </div>
    );
}

export default BtnStopWatch;
