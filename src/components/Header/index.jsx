import React from "react";
import react from '../../images/react.png';
import wp from '../../images/wp.png';

export default class Header extends React.Component {
  render() {
    return(
      <div className='text-center header p-2'>
        <img src={ react } alt="react" />
        <img src={ wp } alt="react" />
      </div>
    );
  };
};