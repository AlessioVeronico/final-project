import React from "react";
import { Link } from "react-router-dom";

class Categories extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="nav-item">
        <Link className="nav-link" key={ this.props.categ.id } to='/home'>{ this.props.categ.name }</Link>
      </li>
    );
  }
}

export default Categories;