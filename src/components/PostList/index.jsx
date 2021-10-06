import React from "react";
import { getPost } from '../../models/Post';
import PostCard from '../PostCard';

class PostList extends React.Component {
	constructor() {
		super();

		this.state = {
			posts: []
		};
	}

	componentDidMount() {
    fetch('http://laragon.test/bedrock/web/wp-json/wp/v2/posts').then(
      res => res.json()
    ).then(
      posts => this.setState({
        posts: posts.map( post => getPost(post) )
      })
    );
  }

	render() {
		const post = this.state.posts.map(post => <PostCard post= { post }/>
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

export default PostList;