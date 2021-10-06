import React from "react";
import { getPage } from "../../models/Page";

export default class About extends React.Component {
  constructor() {
    super();

    this.state = {
			pages: []
		};
  }

  componentDidMount() {
    fetch('http://laragon.test/bedrock/web/wp-json/wp/v2/pages/').then(
      res => res.json()
    ).then(
      pages => this.setState({
        pages: pages.filter( page => page.slug === 'about-us').map( page => getPage(page) )
      })
    );
    }

  render() {
    const page = this.state.pages.map( page => page.content
      );
    return(
      <div dangerouslySetInnerHTML={{__html: page}} />
       
    )
  }
}