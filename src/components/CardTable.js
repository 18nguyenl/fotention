import React, { Component } from "react";
import "../CardTable.css";
import { TweenMax, TweenLite, Power2, TimelineLite, CSSPlugin } from "gsap/all";
import { Transition, TransitionGroup } from "react-transition-group";
import { companies } from "../data/companies.js";

export default class CardTable extends Component {
  constructor(props) {
    super(props);
    this.myTween = new TimelineLite({ paused: true });
    this.myElements = [];
  }

  componentDidMount() {
    this.myTween.staggerFrom(
      this.myElements,
      1,
      { x: -60, autoAlpha: 0, ease: Power2.Out },
      0.2
    );
    this.myTween.play();
  }

  // setRef (index, ref) {
  //     return this.myElements[index] = ref;
  // }

  render() {
    // const companies = this.state.cards.splice();
    // companies.push(<Card header= "Wopa" body= "$48 = 400p"/>)
    // companies.push(<Card header= "Quartz" body= "25% off = 200p"/>)
    // companies.push(<Card header= "Yeetus" body= "New shoes = 400"/>)
    // companies.push(<Card header= "Skype" body= "BOGO"/>)
    this.myTween
      .kill()
      .clear()
      .pause(0);
    return (
      <div>
        <TransitionGroup className="card-table">
          {companies.map((element, index) => {
            return (
              <Transition
                key={index}
                // className= "card"
                // ref={div => (this.myElements[index] = div)}
                timeout={1000}
                // style={{"transitionDelay": `${index * .05}s`}}
                mountOnEnter
                unmountOnExit
                appear={true}
                onEnter={node => {
                    this.myElements[index] = node;
                }}
              >
                <Card
                  // innerRef={this.setRef.bind(this)}
                  header={element.header}
                  body={element.body}
                />
              </Transition>
            );
          })}
        </TransitionGroup>
      </div>
    );
  }
}

export class Card extends Component {
  constructor(props) {
    super(props);
    this.myElement = null;
  }

  componentDidMount() {
    // this.props.innerRef(this.props.key, this.myElement);
  }

  render() {
    return (
      <div className="card">
        <h2 className="card-header">{this.props.header}</h2>
        <div className="card-body">{this.props.body}</div>
      </div>
    );
  }
}
