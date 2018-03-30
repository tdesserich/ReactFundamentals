import React, { Component } from 'react'; //imports React and component properties from package.json which points to node
import NytResults from './NytResults'; //import results from the child component
import styled from 'styled-components';

const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'; //declared as const outside of class component because they will not change
const key = 'b53f58d95c7143d1a10bca2da872da2a'

const SubmitButton = styled.button`
    border-radius: 3px;
    padding: 5px;
    background-color: green;
    border: 1px solid black;
`;

const FormInput = styled.input`
    color: green
    padding: 5px
`;

export default class NytApp extends Component { //set default class to export 
    constructor(props) { //"constructs" a new instance
        super(props)  //add props in () so we can use props inside of contructor
        this.state = { //setting state here because this is the parent component
            search: '', //prop state we will need to store user info
            startDate: '', //prop state we will need to store user info
            endDate: '', //prop state we will need to store user info
            pageNumber: 0, // set page number at 0
            results: [] //results from the API into an empty array
        };
    }
    
    handleSubmit = (event) => { // defining a method that's waiting for an event (a button click below)
        this.setState({pageNumber: 0}) //returns page number to 0 if we search for something else
        this.fetchResults() // gets result data - triggers fetch
        event.preventDefault() //prevents default (prevents page from refreshing)
      }
    
    handleChange = (event) => { // defines another method waiting for a result
        this.setState({
          [event.target.name]: event.target.value, //returns value of state to capture value user entered
        });
      }  
    
    fetchResults = () => { //API call
        let url = `${baseURL}?api-key=${key}&page=${this.state.pageNumber}&q=${this.state.search}` //adds key, page number and search term to URL - concats URL
        url = this.state.startDate ? url + `&begin_date=${this.state.startDate}` : url // ternary operator - if there is a begin date, add it to URL and update URL
        url = this.state.endDate ? url + `&end_date=${this.state.endDate}` : url // ternary operator - if there is an end date, add it to URL and update URL
    
        fetch(url) // GET request to URL
            .then(
            (response) => response.json() // gets response and stores in JavaScript Object Notation (json)
        ).then((data) => { //grab our data that we receive from the API, and save that information to the state
            this.setState({ results: data.response.docs }) //sets results in our state, equal to what we've gotten back from our API
      })
    }
    
    changePageNumber = (e, direction) => { //waiting for an event, listening for a direction
        e.preventDefault() // prevents page from refreshing
        if (direction === 'down') { //down referenced in NYTResults
          if (this.state.pageNumber > 0) { //triggers if greater than 0
            let newPageNumber = this.state.pageNumber - 1 //creating new variable that subtracts 1 from current page number
            this.setState({ pageNumber: newPageNumber }) // sets the new page number as actual page number
            this.fetchResults(); //fetching again (NTY will only give ten results at a time so we have to fetch again if page > 0)
          }
        }
        if (direction === 'up') { // if client is moving up (referenced in NYTResults)
          let newPageNumber = this.state.pageNumber + 1 
          this.setState({ pageNumber: newPageNumber })
          this.fetchResults();
        }
      }
    render(){ 
        return( //we need be able to change the information in our state when our user interacts with our app, so we create a form
            // onSubmit does whatever you tell it to on submit of the form
            // onChange does whatever you tell it to when a change happens in the input
            <div className="main">
                <div className="mainDiv">
                <form onSubmit={e => this.handleSubmit(e)}> 
                    <span>Enter a SINGLE search term (required): </span>
                    <FormInput type="text" name="search" onChange={this.handleChange} required /><br />
                    <span>Enter a start date: </span>
                    <FormInput type="date" name="startDate" pattern="[0-9]{8}" onChange={this.handleChange} /><br />
                    <span>Enter an end date: </span>
                    <FormInput type="date" name="endDate" pattern="[0-9]{8}" onChange={this.handleChange} /><br />
                    <SubmitButton className="submit">Submit search</SubmitButton>
                </form>
                { // the {} allow us to inject JavaScript into HTML - curly braces are "data shaped holes"
                 this.state.results.length > 0 ? <NytResults results={this.state.results} changePage={this.changePageNumber} /> : <div></div> //ternary checks to see if there are results, if not returns an empty <div>
                } 
                </div>
            </div>
        )
    }
}

