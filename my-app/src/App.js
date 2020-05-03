import React, { Component } from 'react';
import logo from './logo.svg';
import Wrapper from "./components/Wrapper";
import CharCard from "./components/CharCard";
import characters from "./characters.json";
import './App.css';

class App extends Component {

  state = {
    characters
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
      <Wrapper>
        {this.state.characters.map(char => (
          <CharCard
            id={char.id}
            name={char.name}
            image={char.image}
          />
        ))}
      </Wrapper>


    
  }
}

export default App;