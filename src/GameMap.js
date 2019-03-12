import React, { Component } from 'react';
import Zig from './Zig';
import ArrowKeysReact from 'arrow-keys-react';

import Config from './config.json';
import Directions from './directions.json';

import MAP_IMAGE from './img/verdanturf.png';

class GameMap extends Component {
  constructor(props) {
    super(props);

    let pos = this.getPosIfExists();
    this.state = {
      zigDirection: pos.direction,
      x: pos.x,
      y: pos.y,
    };

    ArrowKeysReact.config({
      up: () => {
        this.move(Directions.UP);
      },

      down: () => {
        this.move(Directions.DOWN);
      },

      left: () => {
        this.move(Directions.LEFT);
      },

      right: () => {
        this.move(Directions.RIGHT);
      },
    });
  }

  move({ name, relative }) {
    localStorage.setItem('zigDirection', name);
    this.moveRelative(relative);
    this.animateZig(name);
  }

  moveRelative({ x, y }) {
    let newX = this.state.x + x;
    let newY = this.state.y + y;

    this.setState({ x: newX, y: newY });
    localStorage.setItem('mapX', newX);
    localStorage.setItem('mapY', newY);
  }

  animateZig(zigDirection) {
    this.setState({ zigDirection });
  }

  getPosIfExists() {
    let x = +localStorage.getItem('mapX') || Config.START_X;
    let y = +localStorage.getItem('mapY') || Config.START_Y;
    let direction = localStorage.getItem('zigDirection') || Config.START_DIRECTION;
    return { x, y, direction };
  }

  render() {
    const { x, y } =  this.state;

    let bgX = x * Config.TILE_SIZE;
    let bgY = y * Config.TILE_SIZE;

    return (
      <div 
        className="GameMap" 
        tabIndex="1"
        style={{ backgroundPosition: `calc(50% - ${bgX}px) calc(50% - ${bgY}px)`, }}
        {...ArrowKeysReact.events}
      > 
        <section className="GameMap-ui-top">
          X: {this.state.x} Y: {this.state.y}
        </section>

        <section className="GameMap-main">
          <Zig direction={this.state.zigDirection} />
        </section>
      </div>
    )
  }
}

export default GameMap;