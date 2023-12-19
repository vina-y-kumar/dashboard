import React from 'react'
import { Link } from 'react-router-dom'
export const Navbar = () => {
    return (
        <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-dark mb-3">
        <div className="flex-row d-flex">
          <button
            type="button"
            className="navbar-toggler mr-2 "
            data-toggle="offcanvas"
            title="Toggle responsive left sidebar"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <Link
            className="navbar-brand"
            to="/"
          >
            Made 2 Automate
          </Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsingNavbar"
        >
          <span className="navbar-toggler-icon" />
        </button>
        
        <div className="navbar-collapse collapse" id="collapsingNavbar">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home 
              </Link>
            </li>
            
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/orders" data-toggle="collapse">
                All Orders
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href=""
                data-target="#myModal"
                data-toggle="modal"
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link waves-effect waves-light text-white">
                <i className="fa fa-google-plus-g" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link waves-effect waves-light text-white">
                <i className="fa fa-envelope-open-text" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link waves-effect waves-light text-white">
                <i className="fa fa-align-justify" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
      
    )
}
export default Navbar