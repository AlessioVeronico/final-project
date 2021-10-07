import PostCard from '../PostCard';
import React from "react";
import URL from '../../Constants';
import { getPost } from '../../models/Post';

class PostList extends React.Component {
	constructor() {
		super();

		this.state = {
			posts: []
		}
	}

	componentDidMount() {
    fetch(`${ URL }/posts`).then(
      res => res.json()
    ).then(
      posts => this.setState({
        posts: posts.map( post => getPost(post) )
      })
    );
  }

	render() {
		const post = this.state.posts.map( post => <PostCard post= { post } key={ post.id }/> );
    
		return (
			<div>
				<div className="row row-cols-1 row-cols-md-2 g-4 m-2 justify-content-center" >
					{ post }
				</div>
			</div>
		);
	}
}

export default PostList;