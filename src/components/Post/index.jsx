import React from "react";
import { withRouter } from "react-router";
import { getPost } from '../../models/Post';

class Post extends React.Component {
	constructor() {
		super();

		this.state = {
			post: '',
		};
	}

  componentDidMount() {
    fetch(`http://laragon.test/bedrock/web/wp-json/wp/v2/posts?slug=${ this.props.match.params.slug }` ).then(
      res => res.json()
    ).then(
      res => {
        if ( !res.length ) {
          this.props.history.push('/not-found');
          return;
        }
          
        this.setState({
          post: getPost(res[0]) 
        });
      }
    );    
  }
  
  
	render() {
    const content = this.state.post.content;

		return(
      <div className="card h-100 text-center" key={ this.state.post.id } >
        <div className="card-body">
          <h2 className="card-title"> { this.state.post.title }  </h2>
          <p className="card-text text-center" dangerouslySetInnerHTML={ {__html: content} } />
        </div>
      </div>
		)
	}
}

export default withRouter(Post);