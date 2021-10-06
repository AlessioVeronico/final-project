import React from "react";
import react from '../../images/react.png'
import wp from '../../images/wp.png'

export default class Home extends React.Component {
  render() {
    return(
      <div className='text-center h-25'>
        <img className="mh-25 mw-25" src={ react } alt="react" />
        <img className="mh-25 mw-25" src={ wp } alt="react" />
      </div>
    )
  }
}