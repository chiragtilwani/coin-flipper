import './App.css';
import React, { Component } from 'react';
import BoxList from './BoxList'
// import Box from './Box';
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 style={{ textAlign: 'center' }}>Welcome to Color Box Maker</h1>
        <BoxList />
      </div>
    )
  }
}

export default App;
