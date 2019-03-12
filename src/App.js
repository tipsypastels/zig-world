import React, { Component } from 'react';
import GameMap from './GameMap';
import ChooseName from './ChooseName';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: undefined,
      items: []
    }
  }

  setName = (name) => {
    this.setState({ name });
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
