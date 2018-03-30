import React from 'react';
import TimerApp from './TimerApp'; //this is the parent component, so we have to import the child components
import ClockApp from './ClockApp';
import StopWatchApp from './StopWatchApp'


const TimePiecesApp = () => {
    return (
        <div className="main">
            <div className="mainDiv">
                <TimerApp />
                <hr />
                <ClockApp />
                <hr />
                <StopWatchApp />
            </div>
        </div>
    )
}

export default TimePiecesApp;