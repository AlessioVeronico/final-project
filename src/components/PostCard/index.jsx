import React from "react";
import { Link } from "react-router-dom";

class Post extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
		const content = this.props.post.content;

    return (
      <div className="col">
        <div className="card h-100 w-75" key={ this.props.post.id }>
          <div className="card-body">
            <h2 className="card-title"> { this.props.post.title } </h2>
            <p className="card-text" dangerouslySetInnerHTML={{__html: content}} />
          </div>
          <div className="card-footer">
            <Link> { this.props.post.link } </Link>
          </div>
        </div>
      </div> 
    );
  }
}

export default Post;