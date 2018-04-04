import React, { Component } from 'react';
import './App.css'
import Projects from './components/Projects';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      projects : [
        {
          title: "Business Website",
          category: "Web Design",
        },
        {
          title: "Social App",
          category: "Mobile Development",
        },
        {
          title: "Ecommerce Shopping Cart",
          category: "Web Development",
        },
      ]
    }
  }
  render() {
    return (
      <div className="App">
        My App
        <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
