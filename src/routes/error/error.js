import React from 'react';

class NotFound extends React.Component {
  render() {
    return (
      <div className="Error">
        <div>
          <h1>{this.props.title}</h1>
          <p>Sorry, the page you were trying to view does not exist.</p>
        </div>
      </div>
    );
  }
}

export default NotFound;
