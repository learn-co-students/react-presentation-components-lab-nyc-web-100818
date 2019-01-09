// Code SimpleComponent Here
import React from 'react'

export default class SimpleComponent extends React.Component{
  constructor(props){
    super(props)
      this.state = {
        mood: "Happy"
      }
  }

  handleOnClick = () => {
    if (this.state.mood === 'Happy'){
        this.setState({
          mood:"Sad"
      })
    }else{
      this.setState({
        mood:"Happy"
    })
    }
  }

  render() {
    return (
      <div onClick={this.handleOnClick}>{this.state.mood}</div>
    )
  }

}//end of class
