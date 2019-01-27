import React, { Component } from "react";
import "../NavBar.css";

// Main navbar
export default class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="nav-bar">
        <div className="nav-bar-item">
          <TitleLogo className="nav-bar-title" />
        </div>
        <div className="nav-bar-item">
          <User name={this.props.name} />
        </div>
      </nav>
    );
  }
}

// The Gradient Title Logo
class TitleLogo extends Component {
  render() {
    return <h2 className="nav-bar-title">fotention</h2>;
  }
}

// Specifically Properties of the User text and icon
class User extends Component {
  render() {
    return (
      <div className="nav-bar-profile">
        <div className="nav-bar-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            stroke="none"
            width="28"
            height="28"
          >
            <title>circle 08</title>
            <g
              class="nc-icon-wrapper"
              stroke-width="2"
              fill="#111111"
              stroke="#111111"
            >
              <circle
                cx="8"
                cy="6"
                r="2.5"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                data-cap="butt"
                data-color="color-2"
              />{" "}
              <path
                d="M12.953,13.621a5.491,5.491,0,0,0-9.906,0"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                data-cap="butt"
                data-color="color-2"
              />{" "}
              <circle
                cx="8"
                cy="8"
                r="7.5"
                fill="none"
                stroke="#111111"
                stroke-linecap="round"
                stroke-linejoin="round"
                data-cap="butt"
              />
            </g>
          </svg>
        </div>
        <div className="nav-bar-name">
          <h3>{this.props.name}</h3>
        </div>
        <div className="nav-bar-points">
          <Points />
        </div>
        <div />
      </div>
    );
  }
}

// User point value that dynamically updates based on server
class Points extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pointVal: 0
    };
  }

  render() {
    return (
        <div>
            <div>{this.state.pointVal}</div>
            <div>points</div>
        </div>
        );
  }
}
