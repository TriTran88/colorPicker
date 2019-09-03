import React, { Component } from 'react';
import ColorPicker from './components/ColorPicker';
import SizeSetting from './components/SizeSetting';
import Result from './components/Resut';
import ResetBtn from './components/Reset';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      color: 'red',
      size: 8
    }
  }

  getColor = (color) => {
    this.setState(
      { color: color }
    )
  }

  getSize = (size) => {
    this.setState(
      { size: size }
    )
  }
  render() {
    return (
      <div >
        <div className="container">
          <div className="row">
            <ColorPicker color={this.state.color} onReciveColor={this.getColor} />
            <SizeSetting size={this.state.size} onReciveSize={this.getSize} />
          </div>

          <div className="row">
            <Result color={this.state.color} size={this.state.size} />

          </div>

          <div className="row mt-50">
            <ResetBtn />

          </div>
        </div>
      </div>
    );
  }
}

export default App;