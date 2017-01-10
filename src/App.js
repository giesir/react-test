import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { name: 'React' };

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
      </div>
    );
  }
}

export default App;
