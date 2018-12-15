// Code SimpleComponent Here
import React from 'react'
export default class SimpleComponent extends React.Component {
  state = {
    mood: 'happy'
  }

  handleClick = event => {
    const newMood = 'sad'
    this.setState({mood: newMood})
  }

  render() {
    const { state: {mood}, handleClick } = this
    return (
      <div onClick={handleClick}>
        {mood}
      </div>
    )
  }
}
