import React from "react";
import { Link } from "react-router-dom";

class Pages extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="nav-item">
        <Link className="nav-link" key={ this.props.page.id } to={ this.props.page.slug }> { this.props.page.title }</Link>
      </li>
    );
  }
}

export default Pages;