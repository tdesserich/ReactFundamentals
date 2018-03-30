import React, { Component } from 'react'; //by importing Component inside curly braces, we can just extend Component instead of typing React.Component

export default class TimerApp extends Component { //extends Component from React in the class
    constructor(props) {
        super(props); //we need to take in props, use super(props), and then we can set our state
        this.state = {secondsElapsed: 0}; //set a state for this time that we want to display and update when it changes - starting our secondsElapsed off at 0, so that the timer starts at 0 when we first enter the page
    }
    tick() {
        this.setState((prevState) => ({  //state is an object, so when we use previous state here, we are getting the secondsElapsed specifically and adding one to it
          secondsElapsed: prevState.secondsElapsed + 1
        }));
      }  
      componentDidMount() { //set up a way to call this method every second
        this.interval = setInterval(() => this.tick(), 1000); //setInterval is a JavaScript method that repeats a given function at every given time-interval, 1000 is 1000ms
        console.log(this.interval);
      }
      componentWillUnmount() { //stops timer when we navigate away from page
        clearInterval(this.interval);
            console.log(this.interval);
      }

    render() { //display the seconds elapsed in our render method - need render to access state - will render new results as state is updated
    return (
      <div>
          <h1 className="section-title">React Timer</h1> 
          <div>seconds Elapsed: {this.state.secondsElapsed}</div>
      </div>
    );
  }
}