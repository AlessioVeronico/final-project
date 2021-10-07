import React from "react";
import { withRouter } from "react-router";
import { getPage } from "../../models/Page";

class SinglePage extends React.Component {
  constructor() {
    super();

    this.state = {
			pages: [],
		};
  }

  componentDidMount() {
    fetch(`http://laragon.test/bedrock/web/wp-json/wp/v2/pages/${ this.props.match.params.id }`).then(
      res => res.json()
    ).then(
      pages => this.setState({
        pages: getPage(pages) 
      })
    );
  }

  render() {
    const page = this.state.pages.content;
    
    return(
      <div dangerouslySetInnerHTML={ {__html: page} } /> 
    )
  }
}

export default withRouter(SinglePage)