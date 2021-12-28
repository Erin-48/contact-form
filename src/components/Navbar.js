import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className="logo">
          <h1>Logo</h1>
        </div>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
