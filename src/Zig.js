import React, { Component } from 'react';

const ZIG_SPRITES = {};
['up', 'down', 'left', 'right'].forEach(direction => {
  ZIG_SPRITES[direction] = require(`./img/zig_${direction}_0.png`);
});

class Zig extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moving: false,
    };
  }

  get sprite() {
    return ZIG_SPRITES[this.props.direction];
  }

  render() {
    return (
      <div className="Zig">
        <img className="Zig-sprite" src={this.sprite} alt="Zigzagoon" />
      </div>
    );
  }
}

export default Zig;