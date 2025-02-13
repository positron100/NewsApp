// rce : reactClassExportComponent
import React, { Component } from 'react'
import { Link } from "react-router-dom"
export class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">about us</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Categories
                  </a>

                  {/* Dropdown for news genre */}
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/business">     Business        </Link></li>
                    <li><Link className="dropdown-item" to="/entertainment">Entertainment   </Link></li>
                    <li><Link className="dropdown-item" to="/general">      General         </Link></li>
                    <li><Link className="dropdown-item" to="/health">       Health          </Link></li>
                    <li><Link className="dropdown-item" to="/science">      Science         </Link></li>
                    <li><Link className="dropdown-item" to="/sports">       Sports          </Link></li>
                    <li><Link className="dropdown-item" to="/technology">   Technology      </Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item" to="/">Devloped by Mukul</Link></li>
                  </ul>
                </li>

              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </>
    )
  }
}

export default Navbar