import React, { Component } from 'react';

class App extends Component {
  render() {
    return React.Children.only(this.props.children);
  }
}

export default App;

