import React from "react";
import { Post } from '../../models/Post';
import PostCard from '../PostCard';

class PostList extends React.Component {
	constructor() {
		super();

		this.state = {
			postList: [
				new Post (1, 'impara a gestire', 'lorem ipsum', 'postsImg/random.jpg', 'link' ),
				new Post (2, 'impara a gestire', 'lorem ipsum', 'postsImg/random.jpg', 'link' ),
				new Post (3, 'impara a gestire', 'lorem ipsum', 'postsImg/random.jpg', 'link' ),
				new Post (4, 'impara a gestire', 'lorem ipsum', 'postsImg/random.jpg', 'link' )
			],
		}
	}

	render() {
		const posts = this.state.postList.map(post => <PostCard post= { post }/>
		);
		return(
			<div>
				<div className="row row-cols-2 row-cols-md-4 g-4">
					{ posts }
				</div>
			</div>
		)
	}
}

export default PostList;