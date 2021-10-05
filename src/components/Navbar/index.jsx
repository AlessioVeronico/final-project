import React from "react";
import { Link } from "react-router-dom";

export default class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to='/'>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/company'>Company</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/post'>Post</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/react'>React</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/wordPress'>WordPress</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}