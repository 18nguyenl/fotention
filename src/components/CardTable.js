import React, {Component} from 'react';
import "../CardTable.css"

export default class CardTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: Array(),
            
        };
    }

    render() {
        const companies = this.state.cards.splice();
        companies.push(<Card header= "Wopa" body= "$48"/>)
        companies.push(<Card header= "Quartz" body= "25% off coupon"/>)
        companies.push(<Card header= "Yeetus" body= "Trade for new shoes"/>)
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