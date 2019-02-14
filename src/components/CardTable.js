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
        // const companies = this.state.cards.splice();
        // companies.push(<Card header= "Wopa" body= "$48 = 400p"/>)
        // companies.push(<Card header= "Quartz" body= "25% off = 200p"/>)
        // companies.push(<Card header= "Yeetus" body= "New shoes = 400"/>)
        // companies.push(<Card header= "Skype" body= "BOGO"/>)
        let companies = [
            <Card header= "Wopa" body= "$48 = 400p"/>,
            <Card header= "Quartz" body= "25% off = 200p"/>,
            <Card header= "Yeetus" body= "New shoes = 400"/>,
            <Card header= "Yeetus" body= "New shoes = 400"/>,
            <Card header= "Skype" body= "BOGO"/>
        ]

        return(
        <div className="card-table">
            {companies.map(card => card)}
        </div>
        );
    }
}

export class Card extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return(
            <div className = "card">
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