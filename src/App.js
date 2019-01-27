import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import SearchBar from './components/SearchBar'
import CardTable from './components/CardTable'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  render() {
    return (
      <div>
        <NavBar name="james"/>
        <SearchBar />
        <CardTable />
      </div>
    );
  }
}

export default App;
