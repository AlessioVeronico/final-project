import React from "react";
import { Link } from "react-router-dom";

class Pages extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const key = `page${ this.props.page.id }`;
    const to = `/${ this.props.page.slug }`
    return (
      <li className="nav-item">
        <Link className="nav-link" key={ key } to={ to }> { this.props.page.title }</Link>
      </li>
    );
  }
}

export default Pages;