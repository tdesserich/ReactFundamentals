import React, { Component } from 'react';
import styled from 'styled-components';
import FormResults from './FormResults';

const SearchInput = styled.input`
  margin-top: 10px;
  width: 250px;
  margin-bottom: 10px;
  padding-left: 10px;
  color: gray;
`;

export class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
    }
    
    handleSubmit(e) {
        e.preventDefault();
    }
    
    handleKeyUp(){
        // capture user's input
        document.getElementById('results').className = 'formResults';
            let val = document.getElementById('searchInput').value;

            if (val === '') {
                document.getElementById('results').className = 'noDisplay';
        }
       
        // use user's input to hit an api to get movies
        const key = 'f2439f243a947bb680b784c7984743e3';
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${val}&page=1&include_adult=false`)
        .then(response => {
            response.json().then(data => {
                const results = data.results;
                // store the results of our api query in our state
                this.setState({ results });
            });
        })
        // we also need to handle errors
        .catch(err => {
            console.log('Fetch Error :-S', err);
        })
       }

       render() {
        return (
            <form onSubmit={this.handleSubmit} id="form">
                <SearchInput onKeyUp={this.handleKeyUp} id="searchInput" className="searchBar" type="text" placeholder="Search a movie" required />
                <FormResults results={this.state.results} />
            </form>
        );
    }
}
