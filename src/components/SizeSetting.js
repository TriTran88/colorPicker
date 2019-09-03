import React, { Component } from 'react';


class SizeSetting extends Component {
    constructor(props) {
        super(props)
    }

    resize(type) {
        let newSize = 0;

        switch (type) {
            case 'add': newSize = this.props.size + 1; break
            case 'degree': newSize = this.props.size > 7 ? this.props.size - 1 : this.props.size
        }
        this.props.onReciveSize(newSize);
    }

    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="panel panel-danger">
                    <div className="panel-heading">
                        <h3 className="panel-title">Size Setting</h3>
                    </div>
                    <div className="panel-body">
                        <button type="button" className="btn btn-default" onClick={() => this.resize('add')}> + </button>
                        <button type="button" className="btn btn-default" onClick={() => this.resize('degree')}> - </button>
                    </div>
                </div>
            </div>

        );
    }
}

export default SizeSetting;