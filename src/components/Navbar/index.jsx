import React from "react";
import { getPage } from "../../models/Page";
import Categories from "../Categories";
import Pages from '../Pages';
import { getCateg } from '../../models/Category'

export default class Navbar extends React.Component {
  constructor() {
		super();

		this.state = {
			pages: [],
      categories: []
		};
	}

  componentDidMount() {
    fetch('http://laragon.test/bedrock/web/wp-json/wp/v2/pages/').then(
      res => res.json()
    ).then(
      pages => this.setState({
        pages: pages.map( page => getPage(page) )
      })
    );

    fetch('http://laragon.test/bedrock/web/wp-json/wp/v2/categories/').then(
      res => res.json()
    ).then(
      categories => this.setState({
        categories: categories.map( categ => getCateg(categ) )
      })
    );
  }

  render() {
    const page = this.state.pages.map( page => <Pages page= { page }/>
      );
    const categ = this.state.categories.splice(0,2).map( categ => <Categories categ= { categ }/>
      );
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              { page }
              { categ }
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}