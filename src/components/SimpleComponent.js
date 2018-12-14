
import React, { Component } from 'react';

export default class SimpleComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      mood: "happy"
    }
  }

  moodLogic = mood => {
    return (this.state.mood === "happy") ? "sad" : "happy"
  }

  handleClick = (event) => {
    this.setState({
      mood: this.moodLogic()
    })
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        {this.state.mood}
      </div>
    );
  }
}
