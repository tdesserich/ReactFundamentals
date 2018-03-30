import React, { Component } from 'react';
import _ from 'lodash';
import { concepts } from './concepts';
import ConceptList from './ConceptList';
import NewConcept from './NewConcept';

export default class ReactConceptsApp extends Component {
    constructor () {
        super();
        this.state = { concepts: concepts }
    }
    createConcept(text) {
        let tempState = this.state.concepts
        tempState.push({
            text,
            done: false
        });
        this.setState({concepts: tempState});
    }

    toggleConcept(concepts) {
        let concept = _.find(this.state.concepts, concepts);
        concept.done = !concept.done;
        this.setState({concepts: this.state.concepts});
    }    

    render() {
        return (
            <div className="main">
                <div className="mainDiv">
                    <h1>Concept List App</h1>
                    <p>Use the list below to toggle concepts that you do or do not understand. Note that this will update when you refresh the page.</p>
                    <NewConcept createConcept={this.createConcept.bind(this)} />
                    <h2>General concepts</h2>
                    <ConceptList concepts={this.state.concepts} toggle={this.toggleConcept.bind(this)} />   
                </div>
            </div>
        );
    }
}

