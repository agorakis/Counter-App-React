import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar{" "}
          <span class="badge badge-pill badge-secondary">
            {this.totalCounters()}
          </span>
        </a>
      </nav>
    );
  }

  totalCounters() {
    let countersGreaterThanOne = this.props.onCounters.filter(
      (c) => c.value > 0
    );
    let totalCounters = countersGreaterThanOne.length;
    return totalCounters;
  }
}

export default NavBar;
