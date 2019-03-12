import React, { Component } from 'react';

class ChooseName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      partialName: '',
    };
  }

  setPartialName = (event) => {
    this.setState({ partialName: event.target.value });
  }

  setName = (name) => {
    this.props.setName(this.state.partialName);
  }

  render() {
    return (
      <div className="ChooseName">
        <section className="ChooseName-header">
          <h1>
            Set Your Zig's Name
          </h1>
        </section>

        <section className="ChooseName-body">
          <input type="text" autoFocus onKeyUp={this.setPartialName}/>
          <button onClick={this.setName}>
            Select Name
          </button>
        </section>
      </div>
    );
  }
}

export default ChooseName;