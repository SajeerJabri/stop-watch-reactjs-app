import React from 'react';
import './StopWatch.css';
import {TimeType} from '../Type/TimeType';
import Clock from '../images/clock.png';



const StopWatch: React.FC<{time: TimeType}> = ({time}) => {

const hour = () =>{
    if(time.h === 0){
        return ''
    }
    else{
        return <span>{(time.h >= 10) ? time.h : "0" + time.h }</span>;
    }
}

    return (
        <div className="timer">
        <img src={Clock} alt="clock"/>
        <br/>
           
           {hour()} &nbsp;&nbsp;
           {/* <span>:</span>&nbsp;&nbsp; */}
           <span>{(time.m >= 10) ? time.m : "0" + time.m }</span>&nbsp;&nbsp;
           {/* <span>:</span>&nbsp;&nbsp; */}
           <span>{(time.s >= 10) ? time.s : "0" + time.s }</span>&nbsp;&nbsp;
           {/* <span>:</span>&nbsp;&nbsp; */}
           <span>{(time.ms >= 10) ? time.ms : "0" + time.ms }</span>
        
        </div>
    );
}

export default StopWatch;
