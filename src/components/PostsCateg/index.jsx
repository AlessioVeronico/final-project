import PostCard from '../PostCard';
import React from "react";
import URL from '../../Constants';
import { getPost } from '../../models/Post';
import { withRouter } from 'react-router-dom';

let isLoading = false;

class PostsCateg extends React.Component {
	constructor() {
		super();

		this.state = {
			postsCateg: []
		}
	}

  call = () => {
    isLoading = true;

    fetch( `${ URL }/posts?categories=${ this.props.match.params.id }` ).then(
      res => res.json()
    ).then(
      res => {
        if ( !res.length ) {
          this.props.history.push('/not-found');
          return;
        };
        
        this.setState({
          postsCateg: res.map( post => getPost(post) )
        });
      }  
	  );
  }

	componentDidMount() {
    this.call();
  }

  componentDidUpdate() {
    if(isLoading) {
      isLoading = false;
      return;
    };

    this.call();
  }

	render() {
		const post = this.state.postsCateg.map( post => <PostCard post= { post } key= { post.id } /> );
    
		return(
			<div>
        <h2>Here you can find posts about { this.props.match.params.slug }</h2>
				<div className="row row-cols-1 row-cols-md-2 g-4 p-2">
					{ post }
				</div>
			</div>
		);
	}
}

export default withRouter(PostsCateg);