import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import CardTable from "./components/CardTable";
import { Transition, TransitionGroup } from "react-transition-group";
import { TimelineLite, Power2, TweenMax } from "gsap/all";

class App extends Component {
  constructor(props) {
    super(props);
    this.myTween = new TimelineLite();
    this.myElements = [];
  }

  componentDidMount() {
    this.myTween.staggerFrom(
      this.myElements,
      1,
      { y: 60, autoAlpha: 0, ease: Power2.Out },
      0.2
    );
  }

  render() {
    let ActuallyTheWebsite = [
      <NavBar name="james" />,
      <SearchBar />,
      <CardTable />
    ];
    return (
      <TransitionGroup
        style={{overflowY: "hidden"}}
      >
        {ActuallyTheWebsite.map((element, index) => {
          return(
            <Transition
            key={index}
            timeout={1000}
            appear={true}
            // mountOnEnter
            unmountOnExit
            onEnter={node => {
              this.myElements[index] = node;
            }}
          >
            {element}
          </Transition>);
        })}
      </TransitionGroup>
    );
  }
}

export default App;
