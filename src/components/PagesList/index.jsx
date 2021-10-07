import React from "react";
import { Link } from "react-router-dom";

class Pages extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    const to = `/page-${ this.props.page.slug }`
    
    return (
      <li className="nav-item">
        <Link className="nav-link" to={ to }>{ this.props.page.title }</Link>
      </li>
    );
  };
};

export default Pages;