import React, { Component } from 'react';

export default class ClockApp extends Component {
    constructor(props) {
        super(props);
        var date = this.getTimeString(); //set up our state in this component to be the current time (initiate state in constructor)
        this.state = {
          time: date
        }
      }
      getTimeString() { //create a method to get the current time. We can use built in JavaScript Date
        const date = new Date(Date.now()).toLocaleTimeString(); //now our state should reflect the current time
        return date;
      }
      componentDidMount() { //update our time part of our state every second with the current updated time
        const _this = this; //we set const _this = this first, so that we are then able to use the correctly scoped this when we need to
        this.timer = setInterval(function () {
          var date = _this.getTimeString();
          _this.setState({
            time: date
          })
        }, 1000)
      }
      componentWillUnmount() { //make sure that when we leave the page, whent the component unmounts, that the setInterval is not still going
        clearInterval(this.timer);
      }
    render() { //we have to set up current time be displayed in our render
    return (
        <div>
        <h1 className="section-title">React Clock</h1>
        <hr className="explanation" />
        <p>{this.state.time}</p>
        <p>Indianapolis Time</p>
      </div>
    );
  }
}