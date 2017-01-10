import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: 'React',
      TESTS: [
        { id: 11, name: 'Test 11' },
        { id: 12, name: 'Test 12' },
        { id: 13, name: 'Test 13' },
        { id: 14, name: 'Test 14' },
        { id: 15, name: 'Test 15' },
        { id: 16, name: 'Test 16' },
        { id: 17, name: 'Test 17' },
        { id: 18, name: 'Test 18' },
        { id: 19, name: 'Test 19' },
        { id: 20, name: 'Test 20' }
      ]
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Hello {this.state.name}</h2>
        </div>
        <p className="App-intro">
          <input type="text" value={this.state.name} onChange={this.handleChange} />
        </p>
        <div>
          <ul>
            { this.state.TESTS.map((value) => (<li><span>{value.id}</span> {value.name}</li>)) }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
