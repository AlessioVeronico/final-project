import React from "react";
import { Link } from "react-router-dom";

class Post extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
		const content = this.props.post.excerpt;
    const card = `/post/${ this.props.post.slug }`;

    return (
      <div className="col justify-content-center ">
        <div className="card h-100 text-center justify-content-center d-flex">
          <img src={ this.props.post.img } className="card-img-top img" alt={ this.props.post.slug }/>
          <div className="card-body">
            <h2 className="card-title"> { this.props.post.title } </h2>
            <p className="card-text" dangerouslySetInnerHTML={ {__html: content} } />
          </div>
          <div className="card-footer">
            <Link className="btn btn-dark" to={ card }> Read more... </Link>
          </div>
        </div>
      </div> 
    );
  }
}

export default Post;