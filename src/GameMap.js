import React, { Component } from 'react';
import Zig from './Zig';

class GameMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zig: <Zig />
    };
  }
  render() {
    return this.state.zig;
  }
}

export default GameMap;