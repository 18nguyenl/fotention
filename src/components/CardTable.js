import React, {Component} from 'react';
import "../CardTable.css"
import {TweenMax, TweenLite, Power2, TimelineLite} from 'gsap/TweenMax'

export default class CardTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [],
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
            {this.state.cards.map((i) => <Card key={i}
                ref={r => this.cards[i] = r}
            />)}
        </div>
        );
    }
}

export class Card extends Component {
    constructor(props) {
        super(props);
        this.myTween = null;
        this.myElement = null;
        this.tl = new TimelineLite();
    }
    
    componentDidMount() {
        for (let i = 0; i < this.state.cards.length; i++) {
            this.tl.from(this.state.cards[i], 1.2, {x: -30, opacity: 0, ease: Power2.easeInOut}, 0.2)
        }
    }
    
    
    render() {
        return(
            <div 
            className = "card" 
            >
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