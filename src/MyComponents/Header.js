import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import './Header.css';


export default function Header(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold" to="React-Todolist/">My <span>ToDo</span> List</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="React-Todolist/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>  
            </ul>
          </div>
        </div>
      </nav>
    )
}
Header.defaultProps = {
  title: "Your Title Here",
  searchBar: true
}

Header.propTypes = {
  title: PropTypes.string,
  searchBar: PropTypes.bool.isRequired
}