import React from "react";
import { getPost } from '../../models/Post';
import PostCard from '../PostCard';
import { withRouter } from 'react-router-dom';

let isLoading = false;

class PostsCateg extends React.Component {
	constructor() {
		super();

		this.state = {
			postsCateg: [],
		};
	}

  call = () => {
    isLoading = true;

    fetch(`http://laragon.test/bedrock/web/wp-json/wp/v2/posts?categories=${this.props.match.params.id}`).then(
      res => res.json()
    ).then(
      res => this.setState({
        postsCateg: res.map( post => getPost(post) )
      })
	  );
  }

	componentDidMount() {
    this.call();
  };

  componentDidUpdate() {
    if(isLoading) {
      isLoading = false;
      return;
    }
    
    this.call();
  }

	render() {
		const post = this.state.postsCateg.map(post => <PostCard post= { post }/>
		);
		return(
			<div>
				<div className="row row-cols-2 row-cols-md-2 g-4">
					{ post }
				</div>
			</div>
		)
	}
}

export default withRouter(PostsCateg);