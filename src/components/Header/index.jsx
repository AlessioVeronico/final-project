import React from "react";
import react from '../../images/react.png'
import wp from '../../images/wp.png'

export default class Home extends React.Component {
  render() {
    return(
      <div className='text-center header'>
        <img src={ react } alt="react" />
        <img src={ wp } alt="react" />
      </div>
    )
  }
}