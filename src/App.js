import React, { Component } from 'react';
import MainContainer from '@pages/main/MainContainer'
class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
