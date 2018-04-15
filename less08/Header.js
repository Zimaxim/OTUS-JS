import React, { Component } from 'react';
import Navigation from './Navigation';
import './App.css';

class Header extends Component {
  render() {
	const { username } = this.props.user;
	const { links } = this.props;
    return (
        <header className="App-header">
          <h1 className="App-title"> Hello, { username }</h1>
			  <Navigation data_link={links} />
        </header>
    );
  }
}

export default Header;