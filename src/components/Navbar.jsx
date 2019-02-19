import React, { Component } from "react";
import { Link } from "react-router-dom";
export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <Link to="/" className="navbar-item">
          Home
        </Link>
      </nav>
    );
  }
}

export default Navbar;
