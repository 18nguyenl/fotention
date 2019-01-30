import React, {Component} from 'react';
import "../CardTable.css"
import {TweenMax, TweenLite, Power2} from 'gsap/TweenMax'

export default class CardTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: Array(),
        };
    }
    
    render() {
        const companies = this.state.cards.splice();
        companies.push(<Card header= "Wopa" body= "$48 = 400p"/>)
        companies.push(<Card header= "Quartz" body= "25% off = 200p"/>)
        companies.push(<Card header= "Yeetus" body= "New shoes = 400"/>)
        companies.push(<Card header= "Skype" body= "BOGO"/>)

        return(
        <div className="card-table">
            {companies}
        </div>
        );
    }
}

export class Card extends Component {
    constructor(props) {
        super(props);
        this.myTween = null;
        this.myElement = null;
    }

    componentDidMount() {
        this.myTween = TweenLite.from(this.myElement, 1, {x: -30, opacity: 0, ease: Power2.easeIn})
    }


    render() {
        return(
            <div className = "card" ref={div => this.myElement = div}>
                <h2 className = "card-header">
                    {this.props.header}
                </h2>
                <div className = "card-body">
                    {this.props.body}
                </div>
            </div>
        );
    }
}