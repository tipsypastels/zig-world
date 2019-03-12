import React, { Component } from 'react';
import GameMap from './GameMap';
import ChooseName from './ChooseName';

import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.getNameIfExists(),
      items: []
    }
  }

  getNameIfExists() {
    return localStorage.getItem('playerName') || undefined;
  }

  setName = (name) => {
    this.setState({ name });
    localStorage.setItem('playerName', name);
  }

  render() {
    if (this.state.name) {
      return (
        <div className="App App-GameMap">
          <GameMap />
        </div>
      )
    } else {
      return (
        <div className="App App-ChooseName">
          <ChooseName setName={this.setName} />
        </div>
      )
    }
  }
}

export default App;
