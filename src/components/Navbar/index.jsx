import Categories from "../CategoriesList";
import Pages from '../PagesList';
import React from "react";
import URL from '../../Constants';
import { getPage } from "../../models/Page";
import { getCateg } from '../../models/Category';

export default class Navbar extends React.Component {
  constructor() {
		super();

		this.state = {
			pages: [],
      categories: []
		}
	}

  componentDidMount() {
    fetch(`${ URL }/pages`).then(
      res => res.json()
    ).then(
      pages => this.setState({
        pages: pages.map( page => getPage(page) )
      })
    );

    fetch(`${ URL }/categories`).then(
      res => res.json()
    ).then(
      categories => this.setState({
        categories: categories.map( categ => getCateg(categ) )
      })
    );
  }

  render() {
    const page = this.state.pages.map( page => <Pages page= { page } key={ page.id }/> );
    const categ = this.state.categories.filter( categ => categ.name !== 'Uncategorised' 
    ).map( categ => <Categories categ= { categ } key= { categ.id }/> );

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
        <div className="container-fluid">
          <button className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation">
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