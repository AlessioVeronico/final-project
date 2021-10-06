import React from "react";
import { Link } from "react-router-dom";

class Categories extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const categPost = `/posts/${ this.props.categ.id }-${ this.props.categ.slug }`;
    const key= `categ${ this.props.categ.id }`;

    return (
      <li className="nav-item">
        <Link className="nav-link" key={ key } to={ categPost }>{ this.props.categ.name }</Link>
      </li>
    );
  }
}

export default Categories;