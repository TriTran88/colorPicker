import React, { Component } from 'react';
import Result from './Result.css'

class App extends Component {
    constructor(props) {
        super(props);

    }

    getStyle() {
        return {
            color: this.props.color,
            fontSize: `${this.props.size}px`,
            border: 'solid'
        }
    }
    render() {
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <p style={this.getStyle()}>This is my rsult</p>
            </div>
        );
    }
}

export default App