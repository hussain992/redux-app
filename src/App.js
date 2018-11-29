import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './containers/home';



class App extends Component {
  
  // handleClick() {
  //   alert('click on option 1');
  // }
  componentDidMount() {
    
  }
  render() {
   
    return (
      <div className="App">
        <Home/>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        
      </div>
    );
  }
}

export default App;
