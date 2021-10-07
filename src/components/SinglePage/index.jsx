import React from "react";
import { withRouter } from "react-router";
import { getPage } from "../../models/Page";

class SinglePage extends React.Component {
  constructor() {
    super();

    this.state = {
			page: '',
		};
  };

  componentDidMount = () => {
    fetch(`http://laragon.test/bedrock/web/wp-json/wp/v2/pages?slug=${ this.props.match.params.slug }`).then(
      res => res.json()
    ).then(
      page => {
        if ( !page.length ) {
          this.props.history.push('/not-found');
          return;
        };

        this.setState({
          page: getPage(page[0]) 
        });
      }
    );
  };

  render() {
    const page = this.state.page.content;
    
    return(
      <div dangerouslySetInnerHTML={ {__html: page} } /> 
    );
  };
};

export default withRouter(SinglePage);