import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Fotention</h1>
        <Link to="/app">App</Link>
      </div>
    );
  }
}

export default Home;
