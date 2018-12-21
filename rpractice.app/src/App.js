import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Persons/Persons';

class App extends Component {
  state = {
    persons : [
      {name:'User 1', age: '19'},{name: 'User 2', age: '26'},{name: 'User 3', age: '29'}
    ]
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        <button>Switch Name</button>
        <Person name= {this.state.persons[0].name} age= {this.state.persons[0].age}/>

        <Person name= {this.state.persons[1].name} age= {this.state.persons[1].age}> 
         My hobbie is racing!</Person>

        <Person name= {this.state.persons[2].name} age= {this.state.persons[2].age}/>

        </header>
      </div>
    );
  }
}

export default App;
