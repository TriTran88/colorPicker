import React, { Component } from 'react';
import './ColorPicker.css';

class ColorPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: ['red', 'blue', 'green']
        }
    }

    showColor(param) {
        return {
            backgroundColor: param,
            margin: '5px',
            padding: '10px',
        }
    }

    isActive(color) {
        return this.props.color === color ? 'isActive' : ''
    }

    render() {

        const colors = this.state.color.map((color, index) => {
            return <span key={index}
                style={this.showColor(color)}
                className={this.isActive(color)}
                onClick={() => this.props.onReciveColor(color)}
            ></span>
        })


        return (<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6" >
            <div className="panel panel-danger" >
                <div className="panel-heading" >
                    <h3 className="panel-title" > Color Picker </h3>
                </div>
                <div className="panel-body" >
                    {colors}
                </div>
            </div>
        </div>

        );
    }
}

export default ColorPicker;