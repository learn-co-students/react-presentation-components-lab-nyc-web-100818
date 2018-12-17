// Code SimplerComponent Here
import React from 'react'
const SimplerComponent = ({handleClick}) => {

  // const handleClick=(e)=> {
  //   alert("hey!")
  // }

  return (
    <div onClick={handleClick}>I am just happy</div>
  )
}

export default SimplerComponent
