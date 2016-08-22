import React from 'react';
import { Link } from 'react-router';

export default class AppContainer extends React.Component {
  render() {
    return (
      <div>
        <h2>Welcome to my app ;) :D</h2>
        <ul>
          <li><Link to="/">Index</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}
