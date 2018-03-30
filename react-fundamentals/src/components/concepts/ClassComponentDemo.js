import React, { Component } from 'react';
import FaThumbsUp from 'react-icons/lib/fa/thumbs-up'
import FaThumbsDown from 'react-icons/lib/fa/thumbs-down'

export default class ClassComponentDemo extends Component {
    constructor(props) {
        super(props);
        this.state = { incrementCount: 0, decrementCount: 0 };
    }

    incrementCount = () => {
        console.log("increment called");
        this.setState(
            { incrementCount: this.state.incrementCount + 1 }
        );
    }

    decrementCount = () => {
        console.log("decrement called");
        this.setState( 
            { decrementCount: this.state.decrementCount - 1 }
        );
    }

    render() {
        console.log("render called");
        return (
            <div className="main">
                <div className="mainDiv">
                    <ClassComponentNotes />
                    <hr />
                    <h3>Like it!!!</h3>
                    <button onClick={this.incrementCount}>
                        <FaThumbsUp /> 
                        {this.state.incrementCount}
                    </button>
                    <hr />
                    <h3>Dislike it!!!</h3>
                    <button onClick={this.decrementCount}>
                        <FaThumbsDown /> 
                        {this.state.decrementCount}
                    </button>
                </div>
            </div>
        );
    }
}

const ClassComponentNotes = function () {
    return (
        <div>
            <h1>Class Components</h1>

            <p>Class components are considered the "React way" of writing components.</p>
            <dl>
                <dt>ES6 JS Classes</dt>
                <dd>Built on these, must understand them</dd>
                <dt>must extend Component </dt>
                <dd>Class components need to extend the React Component.</dd>
                <dt>render()</dt>
                <dd>Class components must always have a render method.</dd>
                <dt>export</dt>
                <dd>Only one class component exported per file.</dd>
            </dl>
        </div>
    );
};