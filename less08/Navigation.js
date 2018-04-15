import React, { Component } from 'react';
import './App.css';

class Navigation extends Component {
  render() {
	var data = this.props.data_link;
	console.log();
	var menuItems = data.map(function(item, index) {
	  return (
		<span key={index}>
		  <a href={item.link} >[{ item.text }] </a>
		</span>
	  )
	});

    return (
  
       <div className="App-nav">
			{menuItems}
		</div>
    );
  }
}

export default Navigation;